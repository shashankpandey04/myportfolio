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
          title="CYNI Discord Bot"
          description="A scalable Discord automation platform with moderation tools, premium features, and a web dashboard for server management."
          image="/projects/cyni.png"
          tech={["Python","Discord.py","FastAPI","MongoDB","Redis","HTML","JavaScript"
          ]}
          projectLink="/projects/cyni"
          liveLink="https://cyni.quprdigital.tk/"
          githubLink="https://github.com/shashankpandey04/CYNI-v2"
        />

        <ProjectCard
          title="CodeEval – Coding Assessment Platform"
          description="A secure online coding exam system with Judge0 integration, real-time code execution, and a custom browser environment for controlled assessments."
          image="/projects/codeeval.png"
          tech={["Next.js", "FastAPI", "Node.js", "Judge0"]}
          projectLink="/projects/codeeval"
        />
        
        <ProjectCard
          title="Campus Operations System"
          description="Platform for managing campus events, user registrations, attendance tracking, and certificate generation."
          image="/projects/campus-event-management.png"
          tech={["FastAPI", "Next.js", "PostgreSQL", "Docker"]}
          projectLink="/projects/campus-operations"
          liveLink="https://awslpu.in"
        />

        <ProjectCard
          title="EventEasy"
          description="An all-in-one event management platform with QR attendance, automated certificates, ticketing, analytics, and networking."
          image="/projects/eventeasy.png"
          tech={["Next.js", "FastAPI", "PostgreSQL", "AWS", "Docker"]}
          projectLink="/projects/eventeasy"
          githubLink="https://github.com/shashankpandey04/EventEasy"
        />

        <ProjectCard
          title="NutriTrack"
          description="A fitness challenge platform with goal tracking, real-time progress monitoring, and reward-based engagement."
          image="/projects/nutritrack.png"
          tech={["HTML", "Tailwind CSS", "JavaScript", "PHP"]}
          projectLink="/projects/nutritrack"
          githubLink="https://github.com/shashankpandey04/NutriTrack"
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
          title="Interactive Birthday Experience"
          description="A playful interactive web experience where a birthday message unfolds through animations - featuring an envelope interaction, sliding card reveal, and confetti celebration."
          image="/projects/birthday.png"
          tech={["Next.js", "Framer Motion", "Canvas Confetti"]}
          liveLink="https://pasandida-aurat-birthday.netlify.app/"
          githubLink="https://github.com/shashankpandey04/pasandia-aurat-birthday"
          projectLink="/projects/birthday"
        />

        <ProjectCard
          title="Rusk – Micro Web Framework (Rust)"
          description="An experimental micro web framework in Rust with basic routing and template rendering, exploring low-level web framework design."
          image="/projects/rusk.png"
          projectLink="/projects/rusk"
          tech={["Rust"]}
          githubLink="https://github.com/shashankpandey04/Rusk"
        />

      </div>

    </main>
  );
}