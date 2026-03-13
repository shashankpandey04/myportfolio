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

      architecture="
The system is built using a modular architecture combining a Discord bot backend and a web dashboard interface.

The core bot logic is written in Python using the Discord.py framework, which handles event listeners, command processing, and moderation automation. 
The backend services interact with a MongoDB database to store server data such as user infractions, moderation logs, and configuration settings.

A web dashboard provides administrators with an interface for managing bot settings and server operations outside of Discord. 
The system also uses Redis for caching frequently accessed data to improve performance.

This architecture allows CYNI to scale across multiple servers while maintaining reliable performance and efficient data management.
"

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