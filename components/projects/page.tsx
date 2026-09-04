import ProjectCard from "./ProjectCard";

export default function ProjectsPage() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-24">
      <div className="mb-16">
        <h1 className="text-4xl font-bold text-white">
          Projects
        </h1>

        <p className="mt-4 text-gray-400 max-w-2xl">
          A collection of systems, platforms, and developer tools I've built,
          spanning AI, cybersecurity, backend infrastructure, and scalable
          web applications.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-10">

        <ProjectCard
          title="CyniGPT – Language Model from Scratch"
          description="A decoder-only Transformer language model built from scratch in PyTorch, featuring a custom SentencePiece tokenizer, multi-head self-attention, causal masking, autoregressive text generation, configurable sampling, and a complete training pipeline with checkpointing."
          image="/projects/cynigpt.png"
          tech={[
            "Python",
            "PyTorch",
            "Transformers",
            "SentencePiece",
          ]}
          projectLink="/projects/cynigpt"
          githubLink="https://github.com/shashankpandey04/CyniGPT"
        />

        <ProjectCard
          title="Sarvam CommunityOS"
          description="An AI-powered community operations platform for developer communities, combining a Discord AI assistant, Sarvam AI, community knowledge, feedback collection, human escalation, and a web dashboard into a unified operating layer."
          image="/projects/sarvam-communityos.png"
          tech={[
            "Python",
            "FastAPI",
            "Next.js",
            "MongoDB",
            "Discord.py",
            "Sarvam AI",
          ]}
          projectLink="/projects/sarvam-communityos"
          githubLink="https://github.com/shashankpandey04/SarvamCommunityOS"
          ytLink="https://youtu.be/0YBNAx2JLXY"
        />

        <ProjectCard
          title="CertifyMock - Certification Exam Platform"
          description="A scalable certification exam platform supporting multiple question types, randomized exams, timed attempts, scoring, passing criteria, question pools, and certification tracking, designed to support multiple certification ecosystems."
          image="/projects/certifymock.png"
          tech={[
            "Next.js",
            "PostgreSQL",
            "TypeScript",
            "Docker",
          ]}
          projectLink="/projects/certifymock"
          githubLink="https://github.com/awsbuilderslpu/Mock-Certifications"
          liveLink="https://mock.awslpu.in"
        />

        <ProjectCard
          title="AWS LPU Digital Operations Platform"
          description="A centralized platform for managing campus events, registrations, attendance, organizational workflows, and automated certificate generation."
          image="/projects/aws-lpu.png"
          tech={[
            "Next.js",
            "FastAPI",
            "PostgreSQL",
            "Docker",
          ]}
          projectLink="/projects/aws-lpu"
          githubLink="https://github.com/awscloudclublpu/club-website"
          liveLink="https://awslpu.in"
        />

        <ProjectCard
          title="CYNI – Discord Automation Platform"
          description="A scalable Discord automation platform featuring moderation, server management, premium functionality, persistent data, background tasks, integrations, and a dedicated web dashboard."
          image="/projects/cyni.png"
          tech={[
            "Python",
            "Discord.py",
            "FastAPI",
            "MongoDB",
            "Redis",
            "JavaScript",
          ]}
          projectLink="/projects/cyni"
          liveLink="https://cyni.quprdigital.tk/"
          githubLink="https://github.com/shashankpandey04/CYNI-v2"
        />

        <ProjectCard
          title="PathPilot AI – Agentic Route Planner"
          description="An agentic multi-stop route planner built with Azure AI Foundry that determines an efficient visiting order across multiple destinations instead of simply following the order provided by the user."
          image="/projects/pathpilot.png"
          tech={[
            "Python",
            "Azure AI Foundry",
            "AI Agents",
          ]}
          projectLink="/projects/pathpilot"
          githubLink="https://github.com/shashankpandey04/PathPilot-AI"
        />

      </div>
    </main>
  );
}