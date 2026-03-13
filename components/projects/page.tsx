import ProjectCard from "./ProjectCard";

export default function ProjectsPage() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-24">

      <div className="mb-16">
        <h1 className="text-4xl font-bold text-white">
          Projects
        </h1>

        <p className="mt-4 text-gray-400 max-w-2xl">
          A collection of platforms and tools I've built, focusing on
          scalable backend systems and developer tooling.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-10">

        <ProjectCard
          title="Campus Operations System"
          description="Platform for managing campus events, user registrations, attendance tracking, and certificate generation."
          image="/projects/campus-event-management.png"
          tech={["FastAPI", "Next.js", "PostgreSQL", "Docker"]}
          projectLink="/projects/campus-operations"
          liveLink="https://awslpu.in"
        />

        <ProjectCard
          title="QR Attendance System"
          description="A contactless QR-based attendance system with check-in, break tracking, and analytics."
          image="/projects/qr-attendance.png"
          tech={["Flask"]}
          projectLink="/projects/qr-attendance"
          liveLink="https://demoattendance.awslpu.in"
          githubLink="https://github.com/shashankpandey04/attendance_demo"
        />

        <ProjectCard
          title="CYNI Discord Bot"
          description="A scalable Discord automation platform with moderation tools, premium features, and a web dashboard for server management."
          image="/projects/cyni.png"
          tech={["Python","Discord.py","FastAPI","MongoDB","Redis","HTML","JavaScript"
          ]}
          projectLink="/projects/cyni"
          liveLink="https://cyni.quprdigital.tk/"
          githubLink="https://github.com/shashankpandey04/CYNI-v2"
        />

      </div>

    </main>
  );
}