import ProjectPage from "@/components/projects/ProjectPage";

export default function Page() {
  return (
    <ProjectPage
      title="Sarvam CommunityOS"

      description="An AI-powered community operations platform that combines a Discord AI assistant, knowledge management, human escalation, community intelligence, and an operational dashboard."

      image="/projects/sarvam-communityos.png"

      tech={[
        "Python",
        "FastAPI",
        "Next.js",
        "MongoDB",
        "Discord.py",
        "Sarvam AI",
        "Tailwind CSS"
      ]}

      overview="
Sarvam CommunityOS is an AI-powered operating layer for developer communities. It connects everyday Discord conversations with structured community knowledge, AI-powered support, feedback collection, human escalation, analytics, and contributor intelligence.

Rather than attempting to replace community managers, the platform handles repetitive support while preserving context and surfacing issues that require human attention. The system is built around a continuous loop of listening to community activity, understanding what is happening, and turning those signals into actionable operations.
"

      problem="
Developer communities generate large amounts of valuable information through questions, discussions, feedback, events, and support conversations, but much of that information remains trapped inside chat platforms.

Community managers also have to repeatedly answer similar questions, identify unresolved issues, review feedback, and keep track of contributors.

A simple chatbot can answer questions, but it does not provide the operational workflow needed when an answer is uncertain or when conversations need to become structured community intelligence.
"

      solution="
CommunityOS connects a Discord-based AI assistant with a knowledge layer, Sarvam AI services, MongoDB-backed community memory, a FastAPI backend, and a Next.js management dashboard.

Developers can ask questions, search approved knowledge, submit feedback, and receive grounded responses directly inside Discord.

When the system cannot confidently resolve a question, it creates a structured escalation and continues the conversation through a Discord thread.

Community managers can then review escalations, reply directly from the dashboard, manage knowledge and documents, analyze community activity, and track meaningful contributor signals.
"

      features={[
        "AI-powered technical and community support directly inside Discord",
        "Knowledge-grounded question answering using approved documentation and community knowledge",
        "Human escalation when available knowledge is insufficient",
        "Two-way escalation workflow between the dashboard and Discord threads",
        "Structured community feedback collection and review",
        "Community analytics covering questions, interactions, feedback, contributors, and escalations",
        "Contributor intelligence based on meaningful community activity rather than message count",
        "Document and knowledge management with processing and ingestion workflows",
        "Sarvam AI integration for conversational AI, speech-to-text, text-to-speech, and document intelligence",
        "Modular Discord bot architecture using isolated Cogs",
        "REST APIs for dashboard operations and community data",
        "Persistent escalation history and conversation context stored in MongoDB"
      ]}

      architecture="
The platform is split into a Discord-facing interaction layer, an AI and knowledge layer, a FastAPI backend, persistent MongoDB storage, and a Next.js operational dashboard.

The Discord bot is organized into independent Cogs for question answering, feedback, escalations, API integration, and contributor functionality. A shared Sarvam service handles AI interactions rather than creating separate clients for each component.

FastAPI exposes REST endpoints for analytics, contributors, knowledge, documents, feedback, interactions, support, STT, and TTS.

MongoDB stores community memory and structured operational data. The Next.js dashboard consumes these APIs and provides the community team with interfaces for analytics, knowledge, documents, feedback, contributors, and escalations.

For unresolved questions, the flow is:

Discord question → knowledge search → fallback/warning → escalation creation → Discord thread → MongoDB → dashboard → manager response → Discord thread → stored conversation history.
"

      challenges={[
        "Designing an AI support workflow that does not blindly hallucinate when the available community knowledge is insufficient.",
        "Keeping human escalation connected to the original Discord conversation and preserving the complete context.",
        "Building a two-way communication path where dashboard responses can be delivered back into Discord threads.",
        "Structuring community conversations, feedback, interactions, and escalations as reusable operational data.",
        "Keeping Discord bot responsibilities modular through isolated Cogs while sharing common AI infrastructure.",
        "Integrating multiple Sarvam AI capabilities as components of one system instead of treating them as isolated API demonstrations.",
        "Keeping API credentials and service integrations server-side while allowing the frontend to interact through the FastAPI backend.",
        "Designing the platform so future capabilities such as trend detection, recurring issue detection, community health scoring, and automated reporting can be added without restructuring the core system."
      ]}

      outcome="
CommunityOS turns a developer community's conversations into an operational workflow.

Instead of simply answering questions, the system connects knowledge, support, feedback, escalation, analytics, and contributor activity into one platform.

Its current capabilities include Discord support, Sarvam AI integration, knowledge-based Q&A, feedback collection, human escalation, Discord escalation threads, dashboard-to-Discord communication, escalation management, community analytics, contributor functionality, document management, and STT/TTS API routes.

The resulting architecture provides the foundation for an AI-native operating layer where community managers remain the decision-makers while the system provides the context, intelligence, and automation needed to operate at scale.
"
      ytLink="https://youtu.be/0YBNAx2JLXY"
      githubLink="https://github.com/shashankpandey04/SarvamCommunityOS"
    />
  );
}