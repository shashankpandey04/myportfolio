import ProjectCard from "./ProjectCard";
import { ArrowDownRight, ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "AWS LPU SSO",
    description:
      "A centralized identity platform for secure Single Sign-On across the AWS LPU ecosystem. Built around OAuth 2.0 and OpenID Connect, with PKCE, application authorization, user profiles, role management, and developer integration tools.",
    image: "/projects/awslpusso.png",
    category: "Identity & Security",
    tech: ["Next.js", "Supabase", "OAuth 2.0", "OpenID Connect", "TypeScript"],
    projectLink: "/projects/awslpusso",
    githubLink: "https://github.com/awsbuilderslpu/SSO",
    liveLink: "https://sso.awslpu.in/",
  },
  {
    title: "CyniGPT",
    description:
      "A decoder-only Transformer language model built from scratch in PyTorch. Includes a custom tokenizer, multi-head self-attention, causal masking, autoregressive generation, configurable sampling, and a complete training pipeline.",
    image: "/projects/cynigpt.png",
    category: "Machine Learning",
    tech: ["Python", "PyTorch", "Transformers", "SentencePiece"],
    projectLink: "/projects/cynigpt",
    githubLink: "https://github.com/shashankpandey04/CyniGPT",
  },
  {
    title: "Sarvam CommunityOS",
    description:
      "An AI-powered community operations platform combining a Discord assistant, community knowledge, feedback collection, human escalation, and a web dashboard into one unified operating layer.",
    image: "/projects/sarvam-communityos.png",
    category: "AI & Automation",
    tech: ["Python", "FastAPI", "Next.js", "MongoDB", "Discord.py", "Sarvam AI"],
    projectLink: "/projects/sarvam-communityos",
    githubLink: "https://github.com/shashankpandey04/SarvamCommunityOS",
    ytLink: "https://youtu.be/0YBNAx2JLXY",
  },
  {
    title: "CertifyMock",
    description:
      "A certification exam platform designed around randomized assessments, timed attempts, multiple question types, configurable passing criteria, question pools, scoring, and certification tracking.",
    image: "/projects/certifymock.png",
    category: "Developer Platforms",
    tech: ["Next.js", "PostgreSQL", "TypeScript", "Docker"],
    projectLink: "/projects/certifymock",
    githubLink: "https://github.com/awsbuilderslpu/Mock-Certifications",
    liveLink: "https://mock.awslpu.in",
  },
  {
    title: "AWS LPU Digital Operations",
    description:
      "A centralized platform supporting campus events, registrations, attendance, organizational workflows, and automated certificate generation for the AWS LPU community.",
    image: "/projects/aws-lpu.png",
    category: "Community Infrastructure",
    tech: ["Next.js", "FastAPI", "PostgreSQL", "Docker"],
    projectLink: "/projects/aws-lpu",
    githubLink: "https://github.com/awscloudclublpu/club-website",
    liveLink: "https://awslpu.in",
  },
  {
    title: "CYNI",
    description:
      "A Discord automation platform built for community management, with moderation, server utilities, premium functionality, persistent data, background tasks, integrations, and a dedicated web dashboard.",
    image: "/projects/cyni.png",
    category: "Automation & Infrastructure",
    tech: ["Python", "Discord.py", "FastAPI", "MongoDB", "Redis", "JavaScript"],
    projectLink: "/projects/cyni",
    githubLink: "https://github.com/shashankpandey04/CYNI-v2",
    liveLink: "https://cyni.quprdigital.tk/",
  },
  {
    title: "PathPilot AI",
    description:
      "An agentic multi-stop route planner built with Azure AI Foundry that determines an efficient visiting order across multiple destinations.",
    image: "/projects/pathpilot.png",
    category: "AI & Travel",
    tech: ["Python", "Azure AI Foundry", "AI Agents"],
    projectLink: "/projects/pathpilot",
    githubLink: "https://github.com/shashankpandey04/PathPilot-AI",
  },
];

export default function ProjectsPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#080808] text-[#eae8e3]">
      <div className="mx-auto max-w-6xl px-5 pb-24 pt-28 sm:px-8 sm:pt-36 lg:px-12">
        <section className="border-b border-white/10 pb-14 sm:pb-20">
          <div className="mb-8 flex items-center gap-3">
            <span className="h-px w-8 bg-cyan-400" />
            <p className="text-[10px] uppercase tracking-[0.24em] text-white/45">
              Selected work
            </p>
          </div>

          <div className="grid gap-10 md:grid-cols-[1fr_240px] md:items-end">
            <div>
              <h1 className="max-w-4xl font-serif text-5xl font-normal leading-[1.04] tracking-[-0.05em] sm:text-6xl lg:text-7xl">
                Ideas turned
                <br />
                into <span className="text-white/40">working systems.</span>
              </h1>

              <p className="mt-7 max-w-2xl text-sm leading-7 text-white/55 sm:text-base sm:leading-8">
                A collection of things I've built, problems I've explored, and
                systems I've worked on. From backend infrastructure and
                developer platforms to AI experiments and community tools,
                every project has taught me something beyond the code itself.
              </p>
            </div>

            <div className="border-t border-white/10 pt-5 md:border-l md:border-t-0 md:pl-6">
              <p className="text-[10px] uppercase tracking-[0.18em] text-white/35">
                The common thread
              </p>

              <p className="mt-3 font-serif text-xl leading-snug">
                Understand the problem.
                <br />
                Build the solution.
              </p>

              <p className="mt-3 text-xs leading-6 text-white/40">
                Engineering, infrastructure, and product thinking.
              </p>
            </div>
          </div>

          <a
            href="#project-archive"
            className="group mt-9 inline-flex items-center gap-2 text-xs text-white/60 transition-colors hover:text-white"
          >
            Explore the projects
            <ArrowDownRight
              size={14}
              className="text-cyan-400 transition-transform group-hover:translate-x-0.5 group-hover:translate-y-0.5"
            />
          </a>
        </section>

        <section id="project-archive" className="pt-12 sm:pt-16">
          <div className="mb-10 flex items-end justify-between gap-6 border-b border-white/10 pb-6">
            <div>
              <p className="text-[10px] uppercase tracking-[0.2em] text-white/40">
                The project archive
              </p>

              <h2 className="mt-3 font-serif text-3xl tracking-[-0.035em] sm:text-4xl">
                Built along the way.
              </h2>
            </div>

            <span className="shrink-0 font-mono text-xs text-white/40">
              {String(projects.length).padStart(2, "0")} projects
            </span>
          </div>

          <div className="grid gap-x-8 gap-y-14 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-10 lg:gap-y-20">
            {projects.map((project, index) => (
              <ProjectCard
                key={project.projectLink}
                {...project}
                index={index}
              />
            ))}
          </div>
        </section>

        <section className="mt-20 border-t border-white/10 pt-12 sm:mt-28 sm:pt-16">
          <div className="grid gap-8 md:grid-cols-[0.7fr_1.3fr] md:gap-16">
            <div>
              <p className="text-[10px] uppercase tracking-[0.2em] text-cyan-400">
                The next chapter
              </p>

              <h2 className="mt-4 font-serif text-3xl tracking-[-0.035em] sm:text-4xl">
                There's more to build.
              </h2>
            </div>

            <div>
              <p className="max-w-2xl text-base leading-8 text-white/60 sm:text-lg">
                I'm interested in problems that push me beyond what I already
                know. That means exploring deeper system design, building more
                dependable infrastructure, and turning ideas into products
                people can genuinely rely on.
              </p>

              <p className="mt-5 max-w-2xl text-sm leading-7 text-white/40">
                The goal isn't to collect projects. It's to keep getting better
                at understanding problems, making engineering decisions, and
                building things that work in the real world.
              </p>

              <a
                href="/contact"
                className="group mt-8 inline-flex items-center gap-2 border-b border-white/20 pb-3 text-xs text-white/75 transition-colors hover:border-cyan-400 hover:text-white"
              >
                Have something interesting in mind?
                <ArrowUpRight
                  size={14}
                  className="text-cyan-400 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </a>
            </div>
          </div>
        </section>

        <footer className="mt-16 flex flex-col gap-2 border-t border-white/[0.07] pt-6 text-[10px] uppercase tracking-[0.15em] text-white/30 sm:flex-row sm:items-center sm:justify-between">
          <span>Shashank Pandey</span>
          <span>Curious by nature. Building by choice.</span>
        </footer>
      </div>
    </main>
  );
}