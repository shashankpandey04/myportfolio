import ProjectPage from "@/components/projects/ProjectPage";

export default function Page() {
  return (
    <ProjectPage
      title="Campus Operations System"
      description="A full-stack platform designed to manage university events end-to-end, including user registration, event operations, attendance tracking, and automated certificate generation."

      image="/projects/campus-event-management.png"

      tech={["FastAPI", "Next.js", "PostgreSQL", "Docker", "Redis"]}

      overview="
Campus Operations System is a centralized platform built to streamline the management of university events. 
The system provides a unified interface for both students and organizers to manage event registrations, 
attendance tracking, and certificate generation.

The platform replaces fragmented workflows that previously relied on Google Forms, spreadsheets, and manual 
attendance processes. By consolidating these tasks into a single system, organizers can efficiently manage 
large-scale campus events while students experience a smooth registration and participation process.
"

      problem="
Campus events were previously managed using multiple disconnected tools such as Google Forms, spreadsheets, 
and manual attendance sheets. This created several operational issues:

• Event organizers struggled to track participant registrations and attendance in real time.
• Manual attendance tracking led to errors and inconsistencies.
• Certificate distribution required manual work after events.
• Organizers lacked a centralized dashboard to monitor event status and participant data.
• Managing events with hundreds of participants became increasingly inefficient.

These limitations created unnecessary administrative overhead and reduced the overall efficiency of event operations.
"

      solution="
To address these challenges, I built a centralized event management platform that handles the entire event lifecycle.

The system enables organizers to create and manage events, track registrations, monitor attendance using QR-based 
check-ins, and automatically generate certificates for participants.

Students can easily register for events, check in using QR codes during the event, and download certificates after 
successful participation. Administrators can manage operations through a dashboard that provides visibility into 
registrations, attendance data, and event activity in real time.
"

      features={[
        "User authentication and profile management",
        "Role-based access control for administrators and participants",
        "Complete event management system for creating and managing events",
        "Participant registration with configurable limits",
        "QR-based attendance check-in system",
        "Real-time attendance tracking dashboard for event organizers",
        "Automated certificate generation for participants",
        "Certificate download system for users after event completion",
        "Administrative dashboard for managing event operations and monitoring participation"
      ]}

      architecture="
The system follows a modern full-stack architecture.

The frontend is built using Next.js, providing a responsive interface for both students and administrators. 
The backend is implemented using FastAPI, exposing REST APIs for authentication, event management, 
attendance tracking, and certificate generation.

All application data such as user profiles, event registrations, attendance records, and certificate metadata 
are stored in a PostgreSQL database. Redis is used to handle caching and improve performance for frequently 
accessed data.

The application is containerized using Docker, allowing consistent development environments and simplifying deployment.
"

      challenges={[
        "Handling concurrent user registrations while enforcing event registration limits",
        "Designing a reliable QR-based attendance system that works during high traffic event check-ins",
        "Implementing automated certificate generation tied directly to verified attendance records",
        "Ensuring data consistency between registration data, attendance logs, and certificate issuance",
        "Building an admin dashboard that provides clear operational visibility for event organizers"
      ]}

      outcome="
The Campus Operations System successfully simplified the management of campus events by replacing multiple 
manual workflows with a centralized platform.

Event organizers were able to track registrations, monitor attendance in real time, and automatically generate 
certificates for participants. The platform significantly reduced administrative workload and improved the 
efficiency of managing large-scale university events with hundreds of participants.
"
      liveLink="https://awslpu.in"
    />
  );
}