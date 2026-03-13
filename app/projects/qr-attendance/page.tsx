import ProjectPage from "@/components/projects/ProjectPage";

export default function Page() {
  return (
    <ProjectPage
      title="QR Attendance System"

      description="A contactless QR-based attendance platform designed for large events, enabling secure check-ins, break tracking, and real-time attendance monitoring."

      image="/projects/qr-attendance.png"

      tech={["Flase"]}

      overview="
The QR Attendance System is a contactless attendance platform designed to simplify attendance tracking during large-scale events. 
The system allows participants to check in using QR codes while providing event organizers with real-time insights into attendance data.

The platform was designed to handle high participant volumes while ensuring fast and reliable attendance verification. 
It provides tools for administrators to monitor attendance, track check-in activity, and manage participant participation efficiently.
"

      problem="
Large campus events often require organizers to track attendance for hundreds of participants. 
Traditional methods such as manual sign-in sheets or spreadsheets are inefficient and prone to errors.

The key challenges included:

• Long queues and delays during manual attendance processes
• Human errors when recording attendance
• Difficulty verifying participant identity quickly
• Lack of real-time attendance visibility for organizers
• No reliable system for tracking breaks or multiple entry/exit events

These limitations made attendance management slow, inaccurate, and difficult to scale.
"

      solution="
To solve these problems, I designed a QR-based attendance platform that allows participants to check in and out of events using dynamically generated QR codes.

Each participant receives a unique QR code that can be scanned at the event venue. 
Event staff use a scanning interface to quickly verify and record attendance in real time.

The system records multiple types of attendance actions including check-in, check-out, break-out, and break-in. 
This allows organizers to track participant activity throughout the event while maintaining accurate attendance records.

The platform also provides administrators with real-time dashboards to monitor attendance metrics and event participation.
"

      features={[
        "Unique QR codes generated for each registered participant",
        "Fast QR scanning interface for event staff",
        "Contactless check-in and check-out system",
        "Break tracking functionality (break-out and break-in)",
        "Real-time attendance monitoring dashboard",
        "Secure attendance validation system",
        "Admin tools for managing event attendance",
        "Attendance data storage and analytics"
      ]}

      architecture="
The QR Attendance System follows a client-server architecture.

The frontend interface is built using Next.js and provides dashboards for administrators as well as QR scanning interfaces for event staff.

The backend is built using FastAPI, which handles authentication, attendance validation, and event tracking logic. 
All attendance records are stored in a PostgreSQL database.

Redis is used to optimize performance and manage frequently accessed data, ensuring fast response times during large-scale events.

The application is containerized with Docker to enable consistent deployment and simplify environment setup.
"

      challenges={[
        "Ensuring QR scanning performance during high participant traffic",
        "Preventing duplicate or invalid attendance scans",
        "Handling multiple attendance states such as check-in, check-out, break-in, and break-out",
        "Maintaining data consistency during simultaneous scan requests",
        "Designing the scanning interface to be simple and fast for event staff"
      ]}

      outcome="
The QR Attendance System significantly improved the efficiency of attendance management for campus events.

Participants could check in quickly using QR codes, reducing queues and eliminating manual errors. 
Organizers gained real-time visibility into attendance data and were able to track participant activity throughout events.

The system provided a reliable and scalable solution for managing attendance during large events with hundreds of participants.
"
      liveLink="https://demoattendance.awslpu.in"
    />
  );
}