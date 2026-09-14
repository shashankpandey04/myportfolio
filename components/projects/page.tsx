import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "AWS LPU SSO",
    description:
      "A centralized identity platform providing secure Single Sign-On across the AWS LPU ecosystem using OAuth 2.0 and OpenID Connect, with PKCE, application authorization, user profiles, role management, and developer integration tools.",
    image: "/projects/awslpusso.png",
    tech: [
      "Next.js",
      "Supabase",
      "OAuth 2.0",
      "OpenID Connect",
      "TypeScript",
    ],
    projectLink: "/projects/awslpusso",
    githubLink: "https://github.com/awsbuilderslpu/SSO",
    liveLink: "https://sso.awslpu.in/",
  },
  {
    title: "CyniGPT",
    description:
      "A decoder-only Transformer language model built from scratch in PyTorch, including a custom tokenizer, multi-head self-attention, causal masking, autoregressive generation, configurable sampling, and a complete training pipeline.",
    image: "/projects/cynigpt.png",
    tech: [
      "Python",
      "PyTorch",
      "Transformers",
      "SentencePiece",
    ],
    projectLink: "/projects/cynigpt",
    githubLink: "https://github.com/shashankpandey04/CyniGPT",
  },
  {
    title: "Sarvam CommunityOS",
    description:
      "An AI-powered community operations platform combining a Discord AI assistant, community knowledge, feedback collection, human escalation, and a web dashboard into a unified operating layer.",
    image: "/projects/sarvam-communityos.png",
    tech: [
      "Python",
      "FastAPI",
      "Next.js",
      "MongoDB",
      "Discord.py",
      "Sarvam AI",
    ],
    projectLink: "/projects/sarvam-communityos",
    githubLink:
      "https://github.com/shashankpandey04/SarvamCommunityOS",
    ytLink: "https://youtu.be/0YBNAx2JLXY",
  },
  {
    title: "CertifyMock",
    description:
      "A scalable certification exam platform supporting multiple question types, randomized exams, timed attempts, scoring, question pools, passing criteria, and certification tracking.",
    image: "/projects/certifymock.png",
    tech: [
      "Next.js",
      "PostgreSQL",
      "TypeScript",
      "Docker",
    ],
    projectLink: "/projects/certifymock",
    githubLink:
      "https://github.com/awsbuilderslpu/Mock-Certifications",
    liveLink: "https://mock.awslpu.in",
  },
  {
    title: "AWS LPU Digital Operations",
    description:
      "A centralized platform for managing campus events, registrations, attendance, organizational workflows, and automated certificate generation.",
    image: "/projects/aws-lpu.png",
    tech: [
      "Next.js",
      "FastAPI",
      "PostgreSQL",
      "Docker",
    ],
    projectLink: "/projects/aws-lpu",
    githubLink:
      "https://github.com/awscloudclublpu/club-website",
    liveLink: "https://awslpu.in",
  },
  {
    title: "CYNI",
    description:
      "A Discord automation platform featuring moderation, server management, premium functionality, persistent data, background tasks, integrations, and a dedicated web dashboard.",
    image: "/projects/cyni.png",
    tech: [
      "Python",
      "Discord.py",
      "FastAPI",
      "MongoDB",
      "Redis",
      "JavaScript",
    ],
    projectLink: "/projects/cyni",
    liveLink: "https://cyni.quprdigital.tk/",
    githubLink:
      "https://github.com/shashankpandey04/CYNI-v2",
  },
  {
    title: "PathPilot AI",
    description:
      "An agentic multi-stop route planner built with Azure AI Foundry that determines an efficient visiting order across multiple destinations.",
    image: "/projects/pathpilot.png",
    tech: [
      "Python",
      "Azure AI Foundry",
      "AI Agents",
    ],
    projectLink: "/projects/pathpilot",
    githubLink:
      "https://github.com/shashankpandey04/PathPilot-AI",
  },
];

export default function ProjectsPage() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-20 sm:py-28">
      <section className="max-w-3xl">
        <p className="text-sm text-cyan-400 mb-5">
          PROJECTS
        </p>

        <h1 className="text-5xl sm:text-6xl font-bold tracking-tight text-white">
          Things I&apos;ve built while figuring things out.
        </h1>

        <p className="mt-7 text-lg leading-8 text-gray-400">
          Most of these projects started with curiosity, a problem I wanted to
          solve, or something I wanted to understand better. They span backend
          systems, AI, developer platforms, automation, infrastructure, and a
          few experiments that became much bigger than originally planned.
        </p>
      </section>

      <section className="mt-20">
        <div className="flex items-end justify-between gap-6 mb-10">
          <div>
            <p className="text-sm text-gray-500">
              SELECTED WORK
            </p>

            <h2 className="mt-2 text-2xl font-semibold text-white">
              {projects.length} projects and counting.
            </h2>
          </div>

          <p className="hidden sm:block text-sm text-gray-500 text-right">
            Click into any project for the full story.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-x-8 gap-y-16">
          {projects.map((project) => (
            <ProjectCard
              key={project.projectLink}
              {...project}
            />
          ))}
        </div>
      </section>

      <section className="mt-28 border-t border-white/8 pt-12 grid md:grid-cols-[0.7fr_1.3fr] gap-8 md:gap-16">
        <div>
          <p className="text-sm text-cyan-400">
            WHAT&apos;S NEXT
          </p>
        </div>

        <div>
          <p className="text-xl sm:text-2xl leading-relaxed text-gray-300">
            I&apos;m continuing to build things that push me beyond what I
            already know. Usually that means finding a problem, having only a
            vague idea of how to solve it, and learning everything I need along
            the way.
          </p>

          <p className="mt-5 text-gray-500 leading-7">
            So this page will probably look different in a few months. That&apos;s
            kind of the point.
          </p>
        </div>
      </section>
    </main>
  );
}
