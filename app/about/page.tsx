import Image from "next/image";
import Link from "next/link";
import {
  ArrowDownRight,
  ArrowUpRight,
  Cloud,
  Code2,
  Compass,
  Layers3,
  Terminal,
} from "lucide-react";

const interests = [
  {
    number: "01",
    title: "Backend Engineering",
    description:
      "APIs, authentication, databases, queues, and the decisions that determine whether a system stays reliable when things get complicated.",
    tags: ["API Design", "Data Modeling", "System Design"],
  },
  {
    number: "02",
    title: "Cloud & Infrastructure",
    description:
      "I enjoy taking applications beyond localhost. Deployment, AWS, containers, serverless architecture, and figuring out what production actually demands.",
    tags: ["AWS", "Docker", "Serverless"],
  },
  {
    number: "03",
    title: "Products That Matter",
    description:
      "I gravitate toward real operational problems. I want to understand what's broken, why it matters, and whether there's a better way to solve it.",
    tags: ["Product Thinking", "Automation", "Architecture"],
  },
];

const technologies = [
  "Python",
  "FastAPI",
  "Django",
  "Node.js",
  "Java",
  "Spring Boot",
  "TypeScript",
  "Next.js",
  "React",
  "PostgreSQL",
  "MongoDB",
  "Redis",
  "Docker",
  "AWS",
  "Azure",
  "Cloudflare",
  "Supabase",
  "Linux",
];

const milestones = [
  {
    number: "01",
    title: "Building software",
    description:
      "From full-stack applications to backend services, I learn by taking ideas from a rough concept to something people can actually use.",
  },
  {
    number: "02",
    title: "Building a community",
    description:
      "Through AWS Student Builder Group at LPU, I've worked on developer experiences, technical events, and creating opportunities for students to build together.",
  },
  {
    number: "03",
    title: "Thinking beyond the code",
    description:
      "Working on infrastructure, automation, and event platforms has made me increasingly interested in architecture, trade-offs, and the operational side of software.",
  },
];

const principles = [
  {
    number: "01",
    title: "Understand before implementing.",
    description:
      "I want to know what problem we're solving, what constraints matter, and why a particular solution makes sense before committing to it.",
  },
  {
    number: "02",
    title: "Think about what happens next.",
    description:
      "Making something work is the beginning. Failure cases, maintainability, deployment, costs, and the experience of the next person matter too.",
  },
  {
    number: "03",
    title: "Build to learn.",
    description:
      "Documentation and theory are useful, but there's a different kind of understanding that comes from shipping something, finding the edge cases, and fixing what breaks.",
  },
];

const currentlyExploring = [
  "System design",
  "Cloud architecture",
  "Distributed systems",
  "Data structures & algorithms",
  "Product engineering",
];

export default function AboutPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#080808] text-[#eae8e3]">
      <div className="mx-auto max-w-6xl px-5 pb-24 pt-28 sm:px-8 sm:pt-36 lg:px-12">
        <section className="grid items-center gap-12 border-b border-white/10 pb-16 md:grid-cols-[1fr_300px] md:gap-16 lg:grid-cols-[1fr_360px] lg:gap-24">
          <div>
            <div className="mb-8 flex items-center gap-3">
              <span className="h-px w-8 bg-cyan-400" />
              <p className="text-[10px] uppercase tracking-[0.24em] text-white/45">
                A little about me
              </p>
            </div>

            <h1 className="max-w-3xl font-serif text-5xl font-normal leading-[1.05] tracking-[-0.05em] sm:text-6xl lg:text-7xl">
              I like knowing
              <br />
              <span className="text-white/40">what happens</span>
              <br />
              under the hood.
            </h1>

            <div className="mt-8 max-w-xl space-y-5 text-sm leading-7 text-white/55 sm:text-base sm:leading-8">
              <p>
                I'm Shashank Pandey, a computer science student, full-stack
                developer, and someone who naturally gets curious about the
                things most people don't see.
              </p>

              <p>
                I build applications, work with cloud infrastructure, and spend
                a lot of time thinking about how software behaves beyond the
                happy path. What happens when a request fails? Where does the
                data go? What breaks when usage grows?
              </p>

              <p>
                Those questions have gradually pulled me toward backend
                engineering, system design, and the decisions that turn working
                code into dependable software.
              </p>
            </div>

            <div className="mt-9 flex flex-wrap items-center gap-4">
              <a
                href="#my-work"
                className="group inline-flex items-center gap-2 bg-white px-4 py-3 text-xs font-medium text-black transition-colors hover:bg-gray-200"
              >
                Get to know my work
                <ArrowDownRight
                  size={14}
                  className="transition-transform group-hover:translate-y-0.5 group-hover:translate-x-0.5"
                />
              </a>

              <Link
                href="/contact"
                className="inline-flex items-center gap-2 border-b border-white/20 py-3 text-xs text-white/65 transition-colors hover:border-cyan-400 hover:text-white"
              >
                Say hello
                <ArrowUpRight size={13} />
              </Link>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[360px] md:max-w-none">
            <div className="absolute -inset-3 border border-white/[0.06]" />

            <div className="relative overflow-hidden border border-white/10 bg-[#111]">
              <Image
                src="/shashank.png"
                alt="Shashank Pandey"
                width={600}
                height={750}
                priority
                className="aspect-[4/5] w-full object-cover object-top grayscale-[15%] transition-all duration-700 hover:grayscale-0"
              />

              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 via-black/35 to-transparent p-5 pt-16">
                <p className="font-serif text-xl">Shashank Pandey</p>
                <p className="mt-1 text-[10px] uppercase tracking-[0.16em] text-white/55">
                  Developer · Builder · Curious mind
                </p>
              </div>
            </div>

            <div className="absolute -bottom-5 -left-4 flex items-center gap-3 border border-white/10 bg-[#0c0c0c] px-4 py-3 sm:-left-8">
              <span className="h-2 w-2 bg-cyan-400" />
              <span className="text-[10px] uppercase tracking-[0.12em] text-white/60">
                Currently building
              </span>
            </div>
          </div>
        </section>

        <section
          id="my-work"
          className="grid gap-8 border-b border-white/10 py-12 sm:py-16 md:grid-cols-[0.7fr_1.3fr] md:gap-16"
        >
          <div>
            <p className="text-[10px] uppercase tracking-[0.2em] text-cyan-400">
              The bigger picture
            </p>

            <h2 className="mt-5 max-w-sm font-serif text-3xl leading-tight tracking-[-0.035em] sm:text-4xl">
              Code is only one part of building something good.
            </h2>
          </div>

          <div className="space-y-5 text-sm leading-7 text-white/55 sm:text-base sm:leading-8">
            <p>
              Somewhere along the way, I became just as interested in the
              decisions around the code as the code itself. Architecture,
              deployment, developer experience, and the little details that
              determine whether a product is genuinely useful.
            </p>

            <p>
              I like working across the stack because it helps me understand
              the bigger picture. But I naturally gravitate toward the backend:
              data flows, APIs, infrastructure, security, and how everything
              fits together when an application is running in the real world.
            </p>

            <p>
              I also enjoy thinking like a product builder. Not every problem
              needs another framework or another dashboard. Sometimes the most
              interesting part is figuring out what should exist in the first
              place.
            </p>
          </div>
        </section>

        <section className="py-16 sm:py-20">
          <div className="max-w-2xl">
            <p className="text-[10px] uppercase tracking-[0.2em] text-cyan-400">
              What keeps me interested
            </p>

            <h2 className="mt-5 font-serif text-3xl tracking-[-0.035em] sm:text-4xl">
              Three things I can happily lose hours to.
            </h2>

            <p className="mt-4 text-sm leading-7 text-white/45">
              Different areas, one common thread: understanding how things work
              and finding ways to make them work better.
            </p>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {interests.map((interest) => (
              <article
                key={interest.number}
                className="group flex flex-col border border-white/10 p-5 transition-colors duration-300 hover:border-white/25 hover:bg-white/[0.02] sm:p-6"
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[10px] text-white/30">
                    {interest.number}
                  </span>

                  <ArrowUpRight
                    size={15}
                    className="text-white/25 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-cyan-400"
                  />
                </div>

                <h3 className="mt-8 font-serif text-2xl tracking-[-0.025em]">
                  {interest.title}
                </h3>

                <p className="mt-4 flex-1 text-sm leading-7 text-white/50">
                  {interest.description}
                </p>

                <div className="mt-7 flex flex-wrap gap-2 border-t border-white/[0.08] pt-5">
                  {interest.tags.map((tag) => (
                    <span
                      key={tag}
                      className="border border-white/[0.08] px-2 py-1 text-[9px] uppercase tracking-[0.08em] text-white/45"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="border-y border-white/10 py-16 sm:py-20">
          <div className="grid gap-10 md:grid-cols-[0.7fr_1.3fr] md:gap-16">
            <div>
              <p className="text-[10px] uppercase tracking-[0.2em] text-cyan-400">
                Beyond the terminal
              </p>

              <h2 className="mt-5 font-serif text-3xl leading-tight tracking-[-0.035em] sm:text-4xl">
                Building things with people, too.
              </h2>

              <p className="mt-5 text-sm leading-7 text-white/45">
                Technology has a community side that I care about just as much
                as the engineering.
              </p>
            </div>

            <div>
              <div className="flex items-start gap-4 border-b border-white/10 pb-7">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center border border-white/10">
                  <Cloud size={18} strokeWidth={1.3} className="text-cyan-400" />
                </div>

                <div>
                  <p className="text-[10px] uppercase tracking-[0.16em] text-white/35">
                    Community & leadership
                  </p>

                  <h3 className="mt-2 font-serif text-2xl">
                    AWS Student Builder Group
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-white/50">
                    At Lovely Professional University, I've helped build a
                    student developer community around cloud technology,
                    hands-on learning, technical events, and opportunities to
                    connect with the wider developer ecosystem.
                  </p>

                  <p className="mt-3 text-sm leading-7 text-white/50">
                    Organizing events has taught me that building a great
                    technical experience involves much more than the technology
                    itself. There's coordination, communication, logistics, and
                    making sure people leave having learned something useful.
                  </p>

                  <a
                    href="https://awslpu.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 inline-flex items-center gap-2 text-xs text-white/70 transition-colors hover:text-cyan-400"
                  >
                    Explore the community
                    <ArrowUpRight size={13} />
                  </a>
                </div>
              </div>

              <div className="grid gap-6 pt-7 sm:grid-cols-2">
                <div>
                  <p className="font-serif text-xl">Engineering</p>
                  <p className="mt-2 text-sm leading-6 text-white/45">
                    Designing, developing, and improving real applications and
                    developer tools.
                  </p>
                </div>

                <div>
                  <p className="font-serif text-xl">Community</p>
                  <p className="mt-2 text-sm leading-6 text-white/45">
                    Creating spaces where developers can learn, collaborate,
                    contribute, and meet people building interesting things.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="grid gap-10 py-16 sm:py-20 md:grid-cols-[0.7fr_1.3fr] md:gap-16">
          <div>
            <p className="text-[10px] uppercase tracking-[0.2em] text-cyan-400">
              A few chapters so far
            </p>

            <h2 className="mt-5 font-serif text-3xl leading-tight tracking-[-0.035em] sm:text-4xl">
              Still early in the story.
            </h2>
          </div>

          <div>
            {milestones.map((milestone, index) => (
              <article
                key={milestone.number}
                className={`grid gap-3 py-6 sm:grid-cols-[48px_1fr] sm:gap-5 ${
                  index !== milestones.length - 1
                    ? "border-b border-white/[0.08]"
                    : ""
                }`}
              >
                <span className="font-mono text-[10px] text-white/30">
                  {milestone.number}
                </span>

                <div>
                  <h3 className="font-serif text-2xl tracking-[-0.02em]">
                    {milestone.title}
                  </h3>

                  <p className="mt-3 max-w-xl text-sm leading-7 text-white/50">
                    {milestone.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="border-y border-white/10 py-16 sm:py-20">
          <div className="grid gap-10 md:grid-cols-[0.7fr_1.3fr] md:gap-16">
            <div>
              <p className="text-[10px] uppercase tracking-[0.2em] text-cyan-400">
                How I approach things
              </p>

              <h2 className="mt-5 font-serif text-3xl leading-tight tracking-[-0.035em] sm:text-4xl">
                Curiosity first. Opinions second.
              </h2>
            </div>

            <div>
              {principles.map((principle, index) => (
                <article
                  key={principle.number}
                  className={`grid gap-3 py-5 sm:grid-cols-[32px_1fr] sm:gap-4 ${
                    index !== principles.length - 1
                      ? "border-b border-white/[0.08]"
                      : ""
                  }`}
                >
                  <span className="pt-1 font-mono text-[10px] text-cyan-400/70">
                    {principle.number}
                  </span>

                  <div>
                    <h3 className="font-serif text-xl sm:text-2xl">
                      {principle.title}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-white/50">
                      {principle.description}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="grid gap-10 py-16 sm:py-20 md:grid-cols-[0.7fr_1.3fr] md:gap-16">
          <div>
            <p className="text-[10px] uppercase tracking-[0.2em] text-cyan-400">
              The current chapter
            </p>

            <h2 className="mt-5 font-serif text-3xl leading-tight tracking-[-0.035em] sm:text-4xl">
              Learning more. Building better.
            </h2>
          </div>

          <div>
            <div className="flex items-start gap-4">
              <Terminal
                size={20}
                strokeWidth={1.3}
                className="mt-1 shrink-0 text-cyan-400"
              />

              <div>
                <h3 className="font-serif text-2xl">
                  Getting deeper into engineering.
                </h3>

                <div className="mt-4 space-y-4 text-sm leading-7 text-white/50">
                  <p>
                    I'm continuing to strengthen my foundations in backend
                    engineering, system design, cloud architecture, and data
                    structures and algorithms.
                  </p>

                  <p>
                    I'm also interested in building products that solve
                    operational problems at a larger scale, where reliability,
                    maintainability, and sensible engineering decisions matter
                    as much as getting the first version out of the door.
                  </p>

                  <p>
                    I don't expect to know everything before starting. I'd
                    rather take on a meaningful problem, learn what I need,
                    build something, and improve it with every iteration.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-2">
              {currentlyExploring.map((topic) => (
                <span
                  key={topic}
                  className="border border-white/10 px-3 py-2 text-[10px] text-white/55"
                >
                  {topic}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section className="border-t border-white/10 py-16 sm:py-20">
          <div className="grid gap-10 md:grid-cols-[0.7fr_1.3fr] md:gap-16">
            <div>
              <p className="text-[10px] uppercase tracking-[0.2em] text-cyan-400">
                An outside perspective
              </p>

              <h2 className="mt-5 font-serif text-3xl leading-tight tracking-[-0.035em] sm:text-4xl">
                What I'd say about working with me.
              </h2>

              <p className="mt-4 text-sm leading-7 text-white/40">
                A perspective from our conversations, not a claim that I know
                every side of you.
              </p>
            </div>

            <div className="border-l border-white/15 pl-6 sm:pl-8">
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center border border-white/10">
                  <Compass
                    size={17}
                    strokeWidth={1.3}
                    className="text-cyan-400"
                  />
                </div>

                <span className="text-[10px] uppercase tracking-[0.16em] text-white/40">
                  An observation
                </span>
              </div>

              <div className="mt-7 space-y-5 text-sm leading-7 text-white/60 sm:text-base sm:leading-8">
                <p>
                  Shashank doesn't seem content with just knowing how to use a
                  tool. He wants to know why it works, when it stops making
                  sense, and whether there's a better way to approach the
                  problem.
                </p>

                <p>
                  He's also drawn to work that connects technical execution
                  with a bigger outcome. Building a platform, improving an
                  engineering workflow, organizing a developer event, or
                  turning an idea into something people can actually use.
                  There's a recurring interest in making things happen, not
                  just discussing how they might happen.
                </p>

                <p>
                  One potential challenge is that curiosity and ambition can
                  pull him in several directions at once. There's always
                  another technology to explore, another project to start, or
                  another idea that seems worth pursuing. Learning to choose
                  what deserves sustained attention may be just as important
                  as learning the next technical skill.
                </p>

                <p>
                  My impression is that his strongest direction is where
                  engineering depth meets ownership: understanding a problem,
                  making thoughtful technical decisions, and carrying the work
                  through to something useful. The next step isn't necessarily
                  doing more of everything. It's going deeper on the things
                  that matter most.
                </p>
              </div>

              <p className="mt-8 text-[10px] uppercase tracking-[0.18em] text-cyan-400">
                — ChatGPT, based on our conversations
              </p>
            </div>
          </div>
        </section>

        <section className="border border-white/10 bg-white/[0.02] p-6 sm:p-10 lg:p-14">
          <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-end">
            <div>
              <div className="flex items-center gap-3">
                <Layers3
                  size={17}
                  strokeWidth={1.3}
                  className="text-cyan-400"
                />

                <p className="text-[10px] uppercase tracking-[0.2em] text-white/40">
                  In a nutshell
                </p>
              </div>

              <h2 className="mt-6 max-w-3xl font-serif text-3xl leading-tight tracking-[-0.04em] sm:text-4xl lg:text-5xl">
                Still figuring things out.
                <br />
                <span className="text-white/40">
                  Intentionally building along the way.
                </span>
              </h2>

              <p className="mt-6 max-w-2xl text-sm leading-7 text-white/50 sm:text-base sm:leading-8">
                I'm early in my engineering journey, and there's plenty I
                haven't figured out yet. But I know what keeps me interested:
                difficult questions, useful products, thoughtful engineering,
                and the chance to turn an idea into something real.
              </p>
            </div>

            <Link
              href="/contact"
              className="group inline-flex w-fit shrink-0 items-center gap-3 border-b border-white/20 pb-3 text-sm text-white transition-colors hover:border-cyan-400"
            >
              Let's talk
              <ArrowUpRight
                size={16}
                className="text-cyan-400 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </Link>
          </div>
        </section>

        <footer className="mt-12 flex flex-col gap-2 border-t border-white/[0.07] pt-6 text-[10px] uppercase tracking-[0.15em] text-white/30 sm:flex-row sm:items-center sm:justify-between">
          <span>Shashank Pandey</span>
          <span>Curious by nature. Building by choice.</span>
        </footer>
      </div>
    </main>
  );
}