/* ============================================================
   The Shelf — loader + tiny Markdown renderer + interaction
   Content lives in content/books.json + content/*.md (chapters).
   ============================================================ */

(function () {
  'use strict';

  const booksEl = document.getElementById('books');
  const mobileEl = document.getElementById('mobileList');
  const subtitleEl = document.getElementById('subtitle');
  const stageEl = document.getElementById('stage');
  const shelfWorldEl = document.getElementById('shelfWorld');
  const burstEl = document.getElementById('burst');

  const GAP = 34;
  const INSET = 30;

  const defaultSubtitle = 'seven volumes, one shelf — a quiet archive';
  let active = null;
  let subtitleText = defaultSubtitle;

  /* ---------- tiny Markdown renderer ---------- */

  function escapeHtml(s) {
    return String(s == null ? '' : s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  }

  function inlineMd(s) {
    return s
      .replace(/`([^`]+)`/g, '<code>$1</code>')
      .replace(/!\[([^\]]*)\]\(([^)\s]+)\)/g, '<img src="$2" alt="$1" loading="lazy">')
      .replace(/\[([^\]]+)\]\(([^)\s]+)\)/g, '<a href="$2" target="_blank" rel="noopener">$1</a>')
      .replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
      .replace(/\*([^*]+)\*/g, '<em>$1</em>');
  }

  function mdToHtml(md) {
    const lines = String(md == null ? '' : md).replace(/\r\n?/g, '\n').trim().split('\n');
    let html = '';
    let list = null;
    let para = [];

    function flushPara() {
      if (para.length) {
        html += '<p class="inner-copy">' + inlineMd(escapeHtml(para.join(' '))) + '</p>';
        para = [];
      }
    }
    function closeList() {
      if (list) { html += '</' + list + '>'; list = null; }
    }

    lines.forEach(function (raw) {
      const t = raw.trim();
      if (t === '') { flushPara(); closeList(); return; }

      let m = t.match(/^(#{1,4})\s+(.*)$/);
      if (m) {
        flushPara(); closeList();
        html += '<h3 class="inner-h">' + inlineMd(escapeHtml(m[2])) + '</h3>';
        return;
      }

      if (/^(-{3,}|\*{3,}|_{3,})$/.test(t)) { flushPara(); closeList(); html += '<hr>'; return; }

      m = t.match(/^[-*+]\s+(.*)$/);
      if (m) {
        flushPara();
        if (list !== 'ul') { closeList(); html += '<ul class="inner-list">'; list = 'ul'; }
        html += '<li>' + inlineMd(escapeHtml(m[1])) + '</li>';
        return;
      }

      m = t.match(/^\d+[.)]\s+(.*)$/);
      if (m) {
        flushPara();
        if (list !== 'ol') { closeList(); html += '<ol class="inner-list">'; list = 'ol'; }
        html += '<li>' + inlineMd(escapeHtml(m[1])) + '</li>';
        return;
      }

      m = t.match(/^>\s?(.*)$/);
      if (m) {
        flushPara(); closeList();
        html += '<blockquote class="inner-quote">' + inlineMd(escapeHtml(m[1])) + '</blockquote>';
        return;
      }

      m = t.match(/^!\[([^\]]*)\]\(([^)\s]+)\)$/);
      if (m) {
        flushPara(); closeList();
        html += '<figure class="inner-fig"><img src="' + escapeHtml(m[2]) + '" alt="' + escapeHtml(m[1]) + '" loading="lazy"></figure>';
        return;
      }

      para.push(t);
    });

    flushPara();
    closeList();
    return html;
  }

  function mdToText(md) {
    return mdToHtml(md).replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
  }

  /* ---------- content rendering ---------- */

  function chapterBody(v) {
    const chapters = v._chapters || [];
    if (chapters.length) {
      return chapters.map(mdToHtml).join('<div class="chapter-sep" aria-hidden="true"></div>');
    }
    if (v.markdown) return mdToHtml(v.markdown);
    if (v.copy) return '<p class="inner-copy">' + escapeHtml(v.copy) + '</p>';
    return '';
  }

  function renderInner(v) {
    const tags = (v.notes && v.notes.length)
      ? '<ul class="inner-notes">' + v.notes.map(function (n) { return '<li>' + escapeHtml(n) + '</li>'; }).join('') + '</ul>'
      : '';
    return '<h2 class="inner-title">' + escapeHtml(v.title) + '</h2>' +
      '<span class="inner-rule"></span>' +
      '<div class="inner-body">' + chapterBody(v) + '</div>' + tags;
  }

  function plainText(v) {
    const chapters = v._chapters || [];
    if (chapters.length) return chapters.map(mdToText).join(' ');
    if (v.markdown) return mdToText(v.markdown);
    return v.copy || '';
  }

  function swatchGray(v) {
    switch (v.material) {
      case 'solid': return '#141414';
      case 'tone-70': return '#5c5c5c';
      case 'tone-50': return '#8c8c8c';
      case 'tone-35': return '#ababab';
      case 'tone-30': return '#bdbdbd';
      case 'tone-15': return '#dedede';
      case 'hatch': return '#d2d2d2';
      default: return '#cccccc';
    }
  }

  /* ---------- load content (books.json + chapter .md files) ---------- */

  async function loadContent() {
    const res = await fetch('content/books.json');
    if (!res.ok) throw new Error('books.json ' + res.status);
    const manifest = await res.json();
    if (manifest.subtitle) subtitleText = manifest.subtitle;

    const books = await Promise.all(manifest.books.map(async function (b) {
      const chapters = [];
      for (const path of (b.chapters || [])) {
        try {
          const r = await fetch(path);
          if (r.ok) chapters.push(await r.text());
          else chapters.push('_（章节加载失败：' + path + '）_');
        } catch (e) {
          chapters.push('_（章节加载失败：' + path + '）_');
        }
      }
      b._chapters = chapters;
      return b;
    }));
    return books;
  }

  function showLoadError(err) {
    console.error('内容加载失败：', err);
    const note = document.createElement('div');
    note.className = 'load-note';
    note.innerHTML =
      '<h2>内容没有加载到</h2>' +
      '<p>浏览器不允许「双击 index.html」直接读取本地 .md 文件（file:// 安全限制）。</p>' +
      '<p>请在本目录运行 <code>python -m http.server 8000</code>，<br>然后打开 <code>http://localhost:8000</code>。</p>' +
      '<p>部署到 GitHub Pages 后则无需任何设置，会自动加载。</p>';
    stageEl.appendChild(note);
  }

  /* ---------- build the 3D shelf ---------- */

  function build(volumes) {
    let centerX = INSET;
    volumes.forEach(function (v, i) {
      const center = centerX + v.thick / 2;
      v.centerX = center;
      centerX = center + v.thick / 2 + GAP;

      const book = document.createElement('article');
      book.className = 'book' + (v.small ? ' book--small' : '');
      book.dataset.id = v.id;
      book.setAttribute('role', 'button');
      book.setAttribute('tabindex', '0');
      book.setAttribute('aria-label', v.spine + ' — ' + v.title);
      book.style.cssText =
        '--w:' + v.w + 'px;--h:' + v.h + 'px;--t:' + v.thick + 'px;' +
        '--color:' + (v.color || '#ffffff') + ';--color2:' + (v.color2 || '#ffffff') + ';--ink-on:' + (v.ink || '#111111') + ';' +
        'width:' + v.w + 'px;height:' + v.h + 'px;left:' + (center - v.w / 2) + 'px;';

      const matCls = ' material-' + (v.material || 'tone-30');

      book.innerHTML =
        '<div class="f f-back' + matCls + '"></div>' +
        '<div class="f f-spine' + matCls + '"><span class="spine-label">' + escapeHtml(v.spine) + '</span></div>' +
        '<div class="f f-fore"></div>' +
        '<div class="f f-top"></div>' +
        '<div class="f f-bottom"></div>' +
        '<div class="f f-inner">' + renderInner(v) + '</div>' +
        '<div class="cover">' +
          '<div class="cover__face cover__outer' + matCls + '">' +
            (v.tape ? '<span class="tape" style="top:38px;left:20%;width:60%;height:26px;"></span>' : '') +
            '<span class="cover-ornament"></span>' +
            '<span class="cover-title">' + escapeHtml(v.title) + '</span>' +
          '</div>' +
          '<div class="cover__face cover__inner"></div>' +
        '</div>';

      booksEl.appendChild(book);

      const shadow = document.createElement('div');
      shadow.className = 'book-shadow';
      shadow.dataset.shadowFor = v.id;
      shadow.style.cssText =
        'left:' + (center - (v.thick + 26) / 2) + 'px;width:' + (v.thick + 26) + 'px;';
      booksEl.appendChild(shadow);

      bindBook(book, v);
      applyBook(v);
    });

    buildMobile(volumes);
    fit();
  }

  function buildMobile(volumes) {
    mobileEl.innerHTML =
      '<h2>The Shelf</h2>' +
      '<p class="sub">' + escapeHtml(subtitleText) + '</p>' +
      volumes.map(function (v) {
        return (
          '<div class="mobile-card" role="button" tabindex="0" aria-label="' + escapeHtml(v.spine) + ' — ' + escapeHtml(v.title) + '">' +
            '<span class="mobile-card__spine" style="background:' + swatchGray(v) + '"></span>' +
            '<div>' +
              '<div class="spine-word">' + escapeHtml(v.spine) + '</div>' +
              '<h3>' + escapeHtml(v.title) + '</h3>' +
              '<p>' + plainText(v) + (v.notes && v.notes.length ? ' <em>' + v.notes.map(escapeHtml).join(' · ') + '</em>' : '') + '</p>' +
            '</div>' +
          '</div>'
        );
      }).join('');

    mobileEl.querySelectorAll('.mobile-card').forEach(function (card) {
      card.addEventListener('click', function () {
        const wasOpen = card.classList.contains('is-open');
        mobileEl.querySelectorAll('.mobile-card.is-open').forEach(function (c) { c.classList.remove('is-open'); });
        if (!wasOpen) card.classList.add('is-open');
      });
    });
  }

  /* ---------- transform + interaction ---------- */

  function bookTransform(b) {
    if (b._state === 'pulled' || b._state === 'open') {
      return 'translateZ(150px) rotateY(0deg)';
    }
    const lift = b._hover ? -16 : 0;
    return 'translateY(' + lift + 'px) rotateY(' + (90 + b.lean) + 'deg)';
  }

  function applyBook(b) {
    b.el.style.transform = bookTransform(b);
  }

  function setSubtitle(title) {
    if (title) {
      subtitleEl.innerHTML = '— <strong>' + escapeHtml(title) + '</strong>';
    } else {
      subtitleEl.textContent = subtitleText;
    }
  }

  function resetAll() {
    document.querySelectorAll('.book').forEach(function (el) {
      el.classList.remove('is-open');
    });
    window.__volumes.forEach(function (v) {
      v._state = 'rest';
      applyBook(v);
    });
    active = null;
    setSubtitle(null);
    burstEl.classList.remove('is-on');
    document.querySelectorAll('.book.is-focus-dim').forEach(function (el) { el.classList.remove('is-focus-dim'); });
  }

  function activate(v) {
    if (active && active !== v) {
      active._state = 'rest';
      active.el.classList.remove('is-open');
      applyBook(active);
    }
    v._state = 'pulled';
    applyBook(v);
    active = v;
    setSubtitle(v.title);
    window.__volumes.forEach(function (o) {
      if (o !== v) o.el.classList.add('is-focus-dim');
      else o.el.classList.remove('is-focus-dim');
    });
    const br = v.el.getBoundingClientRect();
    const sr = stageEl.getBoundingClientRect();
    burstEl.style.left = (br.left + br.width / 2 - sr.left) + 'px';
    burstEl.style.top = (br.top + br.height / 2 - sr.top) + 'px';
    burstEl.classList.add('is-on');
  }

  function onBookClick(v) {
    if (active === v) {
      const open = v.el.classList.toggle('is-open');
      v._state = open ? 'open' : 'pulled';
    } else {
      activate(v);
    }
  }

  function bindBook(el, v) {
    v.el = el;
    v._state = 'rest';
    v._hover = false;

    el.addEventListener('mouseenter', function () {
      if (v._state === 'rest') { v._hover = true; applyBook(v); }
    });
    el.addEventListener('mouseleave', function () {
      if (v._hover) { v._hover = false; applyBook(v); }
    });
    el.addEventListener('click', function () { onBookClick(v); });
    el.addEventListener('keydown', function (e) {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); onBookClick(v); }
    });
  }

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') resetAll();
  });

  stageEl.addEventListener('click', function (e) {
    if (e.target.closest('.book')) return;
    resetAll();
  });

  /* ---------- scale the scene to fit the viewport ---------- */

  function fit() {
    const s = Math.min((window.innerWidth - 16) / 1560, (window.innerHeight - 16) / 880);
    const scale = Math.min(1, Math.max(0.3, s));
    shelfWorldEl.style.transform = 'scale(' + scale + ') rotateX(-4deg)';
  }
  window.addEventListener('resize', fit);

  /* ---------- boot ---------- */

  loadContent()
    .then(function (volumes) {
      window.__volumes = volumes;
      setSubtitle(null);
      build(volumes);
    })
    .catch(showLoadError);
})();
