import ProjectPage from "@/components/projects/ProjectPage";

export default function Page() {
  return (
    <ProjectPage
      title="EventEasy"

      description="An end-to-end event management platform with QR-based attendance, automated certificates, ticketing, analytics, and networking tools for modern events."

      image="/projects/eventeasy.png"

      tech={[
        "Next.js",
        "FastAPI",
        "PostgreSQL",
        "AWS",
        "Docker"
      ]}

      overview="
EventEasy is a comprehensive event management platform designed to streamline the entire lifecycle of events — from creation and promotion to execution and post-event engagement.

The platform combines QR-based attendance tracking, automated certificate generation, ticketing systems, analytics dashboards, and networking tools into a single unified system.

It is built to eliminate manual workflows, reduce operational overhead, and enable organizers to focus on delivering impactful event experiences.
"

      problem="
Event organizers often rely on multiple disconnected tools to manage registrations, attendance, communication, and post-event workflows.

Key challenges included:

• Manual check-in processes causing delays and inefficiencies
• Time-consuming certificate creation and distribution
• Lack of centralized systems for ticketing and promotions
• Limited visibility into attendance, engagement, and revenue
• Poor networking opportunities for attendees
• Fragmented event management workflows across tools

These issues increased operational complexity and reduced the overall event experience.
"

      solution="
EventEasy was built as an all-in-one platform to unify event management workflows into a single system.

It enables organizers to create events, manage registrations, sell tickets with flexible pricing, and track real-time analytics. 
QR-based attendance allows fast and contactless check-ins, while automated certificate generation eliminates manual effort.

The platform also introduces networking features that allow attendees to connect and interact, enhancing engagement during and after events.
"

      features={[
        "QR-based contactless attendance system",
        "Automated certificate generation and distribution",
        "Ticketing system with pricing tiers, discounts, and promo codes",
        "Real-time analytics dashboard for attendance and revenue",
        "Custom event pages and registration forms",
        "Built-in marketing and promotion tools",
        "Mobile app for organizers and attendees",
        "Networking system for attendee interaction and messaging"
      ]}

      architecture="
EventEasy follows a full-stack architecture combining a modern frontend, scalable backend, and cloud infrastructure.

The frontend is built using Next.js for performance and dynamic UI rendering. 
The backend is powered by FastAPI, handling APIs for event management, authentication, attendance tracking, and analytics.

PostgreSQL is used for structured data storage, including users, events, tickets, and attendance records. 
The system leverages AWS services for scalability, storage, and deployment, ensuring reliability under high event traffic.

QR-based attendance is handled through secure token-based validation, enabling real-time check-ins and tracking.
"

      challenges={[
        "Designing a scalable system capable of handling large event traffic and concurrent check-ins.",
        "Implementing secure and efficient QR-based attendance validation.",
        "Automating certificate generation while maintaining performance.",
        "Managing real-time analytics without overloading the backend.",
        "Integrating multiple features (ticketing, networking, analytics) into a cohesive platform.",
        "Ensuring smooth mobile and web experience across different devices."
      ]}

      outcome="
EventEasy significantly improved event operations by reducing manual work and streamlining workflows.

Organizers were able to manage events more efficiently, track engagement in real-time, and deliver a better experience for attendees. 
The platform enabled faster check-ins, automated post-event processes, and improved communication and networking among participants.

It demonstrates the ability to design and build scalable, real-world systems that solve practical problems in event management.
"
    />
  );
}