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

      architecture="
PathPilot AI is centered around an Azure AI Foundry agent that orchestrates Python-based tools and persistent memory.

A user provides a natural-language travel request, which is interpreted by GPT-5 Mini. When route planning is required, the agent invokes tools such as get_distance and order_stops.

The Python implementations execute those operations and return structured results to the model, which then generates the final response.

Persistent JSON memory is loaded and updated throughout the workflow so existing trip information and visited stops can influence future planning.

The web application is implemented as a thin Flask presentation layer. The browser sends requests to /api/chat, Flask loads memory and invokes the shared run_agent flow, the Azure AI Foundry client handles model-generated tool calls, and the resulting response and structured tool trace are returned to the UI.

The overall flow is:

User Goal → GPT-5 Mini → Tool Call → Python Tool Execution → Tool Result → GPT-5 Mini → Final Response.
"

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