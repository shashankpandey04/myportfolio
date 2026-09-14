import ProjectPage from "@/components/projects/ProjectPage";

export default function Page() {
  return (
    <ProjectPage
      title="CYNI Bot"

      description="A full-featured Discord moderation and staff management bot with an integrated web dashboard, built to automate community operations and moderation workflows."

      image="/projects/cyni.png"

      tech={[
        "Python",
        "Discord.py",
        "FastAPI",
        "MongoDB",
        "Redis",
        "HTML",
        "JavaScript"
      ]}

      overview="
CYNI is a powerful Discord automation bot designed to help communities manage moderation, staff workflows, and server operations efficiently. 
The system combines a feature-rich Discord bot with a web dashboard, allowing administrators to manage server activity and moderation tools from both Discord and the web interface.

The project focuses on automation and operational efficiency by providing tools for moderation, staff management, logging, and application handling. 
It is designed to support large communities by simplifying administrative tasks and reducing manual workload for moderators and staff teams.
"

      problem="
Large Discord communities often struggle to manage moderation tasks and staff workflows efficiently. 
Traditional moderation bots provide basic commands but lack deeper administrative features and workflow automation.

Key problems included:

• Manual moderation tasks requiring constant moderator attention
• Lack of centralized tools for managing staff activity and applications
• Difficulty tracking infractions and moderation history
• Limited visibility into server activity and moderation logs
• Inefficient workflows for handling staff promotions and internal management

These challenges created operational inefficiencies and increased the workload for moderators and server administrators.
"

      solution="
CYNI was developed to provide a comprehensive automation system for Discord server management.

The bot provides moderation commands, automated logging, staff management tools, and structured workflows for handling applications and internal staff operations. 
The system also includes a web dashboard that allows administrators to manage and configure server tools more easily.

Through automation and structured moderation systems, CYNI helps reduce manual moderation tasks while improving transparency and operational efficiency for server staff teams.
"

      features={[
        "Advanced moderation commands including kick, ban, and warning systems",
        "Infraction tracking system to monitor user moderation history",
        "Role and permission management for server staff",
        "Promotion and demotion workflow for structured staff hierarchies",
        "Application handling system for staff recruitment",
        "Automated logging for server events and moderation actions",
        "Customizable moderation and administration commands",
        "Integrated web dashboard for server management and configuration"
      ]}

      architecture={[
        {
          title: "Discord Application Layer",
          description:
            "CYNI's primary runtime is a Python application built with Discord.py. It handles Discord gateway events, command processing, interactions, moderation actions, server events, and the real-time automation workflows that form the core of the platform.",
        },
        {
          title: "Command & Automation System",
          description:
            "The platform organizes server functionality around modular commands and automation features, allowing moderation, management, and other server operations to be handled independently while sharing common application services and configuration.",
        },
        {
          title: "Background Processing",
          description:
            "Background tasks handle operations that should not depend on a single user interaction or command execution. This allows CYNI to manage scheduled workflows, persistent automation, and longer-running server operations without blocking the main Discord event loop.",
        },
        {
          title: "Persistent Data Layer",
          description:
            "MongoDB stores persistent server data including configuration, moderation records, user-related data, and feature-specific application state. The document-oriented model allows different CYNI features to maintain flexible data structures while remaining tied to individual Discord servers.",
        },
        {
          title: "Caching & Runtime State",
          description:
            "Redis is used to cache frequently accessed information and manage temporary runtime state. This reduces unnecessary database operations and helps the application respond efficiently across multiple servers and active features.",
        },
        {
          title: "Web Dashboard",
          description:
            "A dedicated web dashboard extends CYNI beyond Discord itself, giving server administrators a browser-based interface for managing settings, configurations, and platform functionality without relying entirely on Discord commands.",
        },
        {
          title: "Platform Architecture",
          description:
            "The combination of a real-time Discord application, persistent data services, caching, background processing, and a separate management interface allows CYNI to operate as a broader server automation platform rather than simply a collection of Discord bot commands.",
        },
      ]}

      challenges={[
        "Managing Discord API rate limits while handling frequent command usage and moderation events across multiple guilds.",
        "Designing a modular command and event architecture that supports asynchronous execution without blocking the main bot process.",
        "Reducing database load through caching of frequently accessed guild configurations and command settings.",
        "Handling Discord gateway reconnects and network interruptions to maintain bot stability and uptime.",
        "Coordinating asynchronous workflows for moderation actions, scheduled tasks, and external API calls while avoiding race conditions."
        ]}

      outcome="
CYNI successfully provides Discord communities with a powerful moderation and automation system that simplifies server management. 
The platform reduces manual workload for moderators while providing structured workflows for staff management and community operations.

The bot is capable of supporting multiple communities and provides a scalable solution for managing moderation, logging, and administrative tasks in Discord servers.
"

      liveLink="https://cyni.quprdigital.tk/"
      githubLink="https://github.com/shashankpandey04/CYNI-v2"
    />
  );
}