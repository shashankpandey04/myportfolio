import Image from "next/image";

const interests = [
  {
    title: "Backend Systems",
    description:
      "APIs, databases, authentication, background jobs, and the parts of an application that quietly keep everything running.",
  },
  {
    title: "Cloud & Infrastructure",
    description:
      "I'm interested in what happens after the code is written. Deployment, AWS, containers, serverless systems, and making things actually work in production.",
  },
  {
    title: "Real Problems",
    description:
      "I like projects that start with an actual problem. Something inefficient, broken, difficult to manage, or worth rethinking from scratch.",
  },
];

const technologies = [
  "Python",
  "FastAPI",
  "Django",
  "Next.js",
  "JavaScript",
  "PostgreSQL",
  "MongoDB",
  "Redis",
  "Docker",
  "AWS",
  "Azure",
];

export default function AboutPage() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-20 sm:py-28">
      <section className="grid lg:grid-cols-[1fr_380px] gap-12 lg:gap-20 items-start">
        <div>
          <p className="text-sm text-cyan-400 mb-5">
            ABOUT ME
          </p>

          <h1 className="text-5xl sm:text-6xl font-bold tracking-tight text-white">
            Hi, I&apos;m Shashank.
          </h1>

          <div className="mt-8 space-y-5 text-lg text-gray-400 leading-8">
            <p>
              I&apos;m a developer who likes understanding how things work
              before pretending I know how to build them.
            </p>

            <p>
              These days, I&apos;m mostly interested in backend systems, cloud
              infrastructure, and the engineering decisions behind applications
              that people actually rely on.
            </p>

            <p>
              I enjoy going beyond the interface and figuring out what&apos;s
              happening underneath. How does the data move? What happens when
              something fails? How should the system scale? Where are the
              trade-offs?
            </p>
          </div>
        </div>

        <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02]">
          <Image
            src="/shashank.png"
            alt="Shashank Pandey"
            width={500}
            height={600}
            priority
            className="w-full aspect-[4/5] object-cover object-top"
          />
        </div>
      </section>

      <section className="mt-28 max-w-3xl">
        <p className="text-sm text-cyan-400 mb-4">
          A LITTLE BACKSTORY
        </p>

        <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white">
          Somewhere along the way, I became more interested in what happens
          behind the screen.
        </h2>

        <div className="mt-8 space-y-5 text-gray-400 leading-8">
          <p>
            I started out building applications like most developers do,
            focusing on features and making things work. But over time, I
            found myself getting distracted by the stuff behind them.
          </p>

          <p>
            The API architecture. The database. Deployment. Why something
            behaves differently in production. What happens when more people
            start using it. The things that usually aren&apos;t visible to the
            user but determine whether the application actually works well.
          </p>

          <p>
            That&apos;s what gradually pulled me toward backend engineering,
            infrastructure, and system design.
          </p>
        </div>
      </section>

      <section className="mt-28">
        <div className="max-w-2xl">
          <p className="text-sm text-cyan-400 mb-4">
            WHAT I&apos;M INTO
          </p>

          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white">
            The kind of problems I enjoy spending time on.
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-12">
          {interests.map((interest) => (
            <div
              key={interest.title}
              className="border-t border-white/10 pt-6"
            >
              <h3 className="text-lg font-medium text-white">
                {interest.title}
              </h3>

              <p className="mt-4 text-sm leading-7 text-gray-400">
                {interest.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-28 grid lg:grid-cols-[0.8fr_1.2fr] gap-10 lg:gap-20 border-y border-white/[0.08] py-16">
        <div>
          <p className="text-sm text-cyan-400 mb-4">
            HOW I THINK
          </p>

          <h2 className="text-3xl font-semibold tracking-tight text-white">
            I ask a lot of questions.
          </h2>
        </div>

        <div className="space-y-5 text-gray-400 leading-8">
          <p>
            I tend to question things before accepting them at face value.
            Whether it&apos;s a technical decision, a startup idea, or a product,
            I usually want to understand what the actual problem is and whether
            the solution really makes sense.
          </p>

          <p>
            Sometimes that means going down a rabbit hole and spending way too
            long researching something. But it&apos;s also how I learn.
          </p>

          <p>
            I&apos;d rather understand why something works than just copy a
            solution that happens to work.
          </p>
        </div>
      </section>

      <section className="mt-28 grid lg:grid-cols-[0.8fr_1.2fr] gap-10 lg:gap-20">
        <div>
          <p className="text-sm text-cyan-400 mb-4">
            RIGHT NOW
          </p>

          <h2 className="text-3xl font-semibold tracking-tight text-white">
            Still learning. Building while I do it.
          </h2>
        </div>

        <div className="space-y-5 text-gray-400 leading-8">
          <p>
            Right now, I&apos;m focused on getting better at backend engineering,
            cloud infrastructure, serverless architecture, and data structures
            and algorithms.
          </p>

          <p>
            I&apos;m also interested in how technology can solve larger
            operational problems. Not just another app or dashboard, but systems
            that improve how things are actually managed and operated.
          </p>

          <p>
            Most of what I learn comes from building. I like picking a problem,
            going deeper than I currently know how to go, breaking things a few
            times, and eventually figuring it out.
          </p>
        </div>
      </section>

      <section className="mt-28 grid lg:grid-cols-[0.8fr_1.2fr] gap-10 lg:gap-20 border-t border-white/[0.08] pt-16">
        <div>
          <p className="text-sm text-cyan-400 mb-4">
            FROM AN UNUSUAL PERSPECTIVE
          </p>

          <h2 className="text-3xl font-semibold tracking-tight text-white">
            What ChatGPT has noticed.
          </h2>
        </div>

        <div>
          <p className="text-gray-400 leading-8">
            Shashank doesn&apos;t seem particularly interested in building things
            just to add another project to a portfolio. He tends to question
            whether an idea is actually useful, whether a product makes sense,
            and what happens underneath the surface once something starts being
            used in the real world.
          </p>

          <p className="mt-5 text-gray-400 leading-8">
            He&apos;s curious, sometimes aggressively skeptical, and has a habit
            of going down rabbit holes until he understands something properly.
            He also tends to be more ambitious than his current experience level
            suggests, which occasionally means picking problems that are harder
            than they need to be.
          </p>

          <p className="mt-5 text-gray-400 leading-8">
            But that&apos;s probably a good thing. The interesting projects
            usually start slightly outside your comfort zone.
          </p>

          <p className="mt-8 text-sm text-cyan-400">
            — ChatGPT
          </p>
        </div>
      </section>

      <section className="mt-28">
        <p className="text-sm text-cyan-400 mb-4">
          TOOLBOX
        </p>

        <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white">
          Things I&apos;ve worked with along the way.
        </h2>

        <div className="flex flex-wrap gap-x-7 gap-y-4 mt-10">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="text-gray-400 hover:text-white transition"
            >
              {tech}
            </span>
          ))}
        </div>
      </section>

      <section className="mt-28 rounded-2xl border border-white/[0.08] bg-white/[0.02] p-8 sm:p-12">
        <p className="max-w-3xl text-xl sm:text-2xl leading-relaxed text-gray-300">
          I don&apos;t have everything figured out yet. But I&apos;m curious
          enough to keep digging, ambitious enough to take on problems that are
          bigger than my current skill set, and stubborn enough to keep working
          until I understand what&apos;s going on.
        </p>

        <p className="mt-6 text-gray-500">
          That&apos;s probably the best way to describe where I am right now.
        </p>
      </section>
    </main>
  );
}