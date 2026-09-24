import Hero from "@/components/Hero";
import Research from "@/components/Research";
import Publications from "@/components/Publications";
import Projects from "@/components/Projects";
import Notes from "@/components/Notes";
import About from "@/components/About";
import SectionHeader from "@/components/SectionHeader";
import Reveal from "@/components/Reveal";
import Container from "@/components/Container";

export default function Home() {
  return (
    <>
      <Hero />

      <Container>
        <section id="research" className="scroll-mt-20 py-24 lg:py-28">
          <Reveal>
            <SectionHeader number="01" title="Research" />
            <Research />
          </Reveal>
        </section>

        <section id="publications" className="scroll-mt-20 pb-24 lg:pb-28">
          <Reveal>
            <SectionHeader number="02" title="Publications" />
            <Publications />
          </Reveal>
        </section>

        <section id="work" className="scroll-mt-20 pb-24 lg:pb-28">
          <Reveal>
            <SectionHeader number="03" title="Selected Work" />
            <Projects />
          </Reveal>
        </section>

        <section id="notes" className="scroll-mt-20 pb-24 lg:pb-28">
          <Reveal>
            <SectionHeader number="04" title="Notes" />
            <Notes />
          </Reveal>
        </section>

        <section id="about" className="scroll-mt-20 pb-28 lg:pb-32">
          <Reveal>
            <SectionHeader number="05" title="About" />
            <About />
          </Reveal>
        </section>
      </Container>
    </>
  );
}
