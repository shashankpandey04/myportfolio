import ProjectPage from "@/components/projects/ProjectPage";

export default function Page() {
  return (
    <ProjectPage
      title="PathPilot AI – Agentic Route Planner"

      description="An agentic multi-stop route planner built with Azure AI Foundry that determines efficient visiting orders across multiple destinations while using persistent trip memory and tool-based route planning."

      image="/projects/pathpilot.png"

      tech={[
        "Python",
        "Azure AI Foundry",
        "GPT-5 Mini",
        "Azure Identity",
        "OpenAI Python SDK",
        "Flask",
        "JSON Memory"
      ]}

      overview="
PathPilot AI is an agentic travel-planning system designed to solve multi-stop routing problems through natural-language interaction.

Instead of blindly following the order in which destinations are provided, an Azure AI Foundry agent determines when route planning is required and uses specialized tools to calculate distances and establish an efficient visiting order.

The system also maintains persistent trip memory, allowing the agent to consider previously visited stops, travel preferences, planned cities, and other trip information when generating recommendations.
"

      problem="
Traditional route planning often requires users to manually determine the order in which they want to visit multiple destinations.

This becomes inconvenient when a trip contains several stops, a return to the starting location, or existing travel progress that should be taken into account.

PathPilot AI addresses this by allowing users to describe their travel goals naturally while delegating route-planning decisions to an AI agent that can invoke dedicated tools and use stored trip context.
"

      solution="
PathPilot AI uses an Azure AI Foundry agent backed by GPT-5 Mini to interpret natural-language travel requests and decide which tools are required.

The agent can call get_distance to obtain travel costs between locations and order_stops to determine an efficient route.

Persistent JSON-based memory stores user preferences, trip information, planned cities, selected attractions, hotel information, and visited stops.

The same agent orchestration is exposed through both a command-line interface and a Flask web interface, with the web layer reusing the shared run_agent flow rather than implementing a separate AI system.
"

      features={[
        "Agentic multi-stop route planning using Azure AI Foundry",
        "Automatic selection and invocation of route-planning tools",
        "Distance and travel-cost calculation between locations",
        "Efficient ordering of multiple destinations",
        "Optional return-to-start route planning",
        "Total-distance reporting",
        "Persistent memory of visited stops and trip information",
        "Personalized travel preferences and trip context",
        "Multi-city itinerary planning",
        "Attraction recommendations based on user interests",
        "Hotel preference management and recommendations",
        "Natural-language interaction through the AI agent",
        "Command-line interface for direct agent interaction",
        "Flask web interface using the same underlying agent orchestration",
        "Observable agent trace showing tool calls, arguments, results, and final responses"
      ]}

      architecture={[
        {
          title: "Presentation Layer",
          description:
            "The web application uses Flask as a thin presentation layer. The browser sends travel requests to the /api/chat endpoint, while Flask delegates the actual planning workflow to a shared agent execution flow rather than embedding route logic directly in the web layer.",
        },
        {
          title: "Agent Orchestration",
          description:
            "An Azure AI Foundry agent acts as the central orchestration layer. It interprets the user's natural-language travel request, determines whether route planning or other operations are required, and decides when to invoke available tools.",
        },
        {
          title: "Language Model",
          description:
            "GPT-5 Mini processes user goals and reasons over the information returned by tools. Rather than handling every operation directly, the model coordinates with external capabilities and uses their structured results to generate the final response.",
        },
        {
          title: "Python Tool Layer",
          description:
            "Route planning capabilities are implemented as Python tools, including operations such as get_distance and order_stops. The agent invokes these tools when required, and their implementations execute the underlying logic before returning structured results.",
        },
        {
          title: "Persistent Memory",
          description:
            "JSON-based persistent memory is loaded and updated throughout the workflow. Existing trip information and previously visited stops can therefore influence future route planning and responses.",
        },
        {
          title: "Agent Execution Flow",
          description:
            "Flask loads the relevant memory and invokes the shared run_agent flow. The Azure AI Foundry client manages model interactions and tool calls, while the completed response and structured tool trace are returned to the web interface.",
        },
      ]}


      challenges={[
        "Designing the system so the AI agent decides when route planning is actually required instead of simply following the user's destination order.",
        "Separating AI orchestration from deterministic route and memory operations through dedicated Python tools.",
        "Maintaining persistent travel context so previously visited stops and saved preferences remain available to future planning requests.",
        "Avoiding destructive memory updates that overwrite unrelated trip information.",
        "Fixing a memory overwrite bug by changing updates to merge only the requested fields while preserving existing data.",
        "Reusing the same agent orchestration across the CLI and Flask interfaces instead of maintaining separate implementations.",
        "Making the agent's observable tool-calling workflow visible to users through the Agent Trace interface without exposing hidden model reasoning.",
        "Maintaining Azure-based authentication and model integration rather than replacing the Azure AI Foundry architecture with direct non-Azure model calls."
      ]}

      outcome="
PathPilot AI evolved from the core T14 multi-stop route-planning requirement into a broader AI travel-planning system.

It supports agentic route selection, distance calculation, efficient stop ordering, return-to-start planning, total-distance reporting, persistent visited-stop memory, personalized travel preferences, attraction recommendations, hotel functionality, and multi-city itinerary planning.

The project demonstrates how an AI model can act as an orchestrator over deterministic tools and persistent application state, while keeping the underlying route logic and memory management in conventional Python code.
"

      githubLink="https://github.com/shashankpandey04/PathPilot-AI"
    />
  );
}