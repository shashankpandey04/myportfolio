import Image from "next/image";

export default function AboutPage() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-24">

      {/* Header */}
      <div className="mb-16">
        <h1 className="text-4xl font-bold text-white">
          About Me
        </h1>

        <p className="mt-4 text-gray-400 max-w-2xl">
          I'm Shashank Pandey, a full-stack developer focused on building
          scalable systems, backend platforms, and developer tools.
        </p>
      </div>


      <div className="grid md:grid-cols-2 gap-12 items-center">

        <div className="rounded-xl overflow-hidden border border-white/10 max-h-105">
            <Image
                src="/profile.png"
                alt="Shashank Pandey"
                width={500}
                height={600}
                className="w-full h-full object-cover object-top"
            />
        </div>

        <div className="space-y-4 text-gray-400 leading-relaxed">

          <p>
            I'm a developer who enjoys building systems that solve real
            operational problems. My work focuses heavily on backend
            architecture, API design, and cloud infrastructure.
          </p>

          <p>
            I enjoy creating platforms that automate workflows, improve
            reliability, and make systems easier to operate at scale.
            Many of the projects I build revolve around event platforms,
            automation tools, and developer infrastructure.
          </p>

          <p>
            Beyond coding features, I like thinking about how systems are
            structured — from database design and API flows to monitoring
            and scalability. This interest is why system architecture and
            backend engineering are areas I enjoy the most.
          </p>

        </div>
      </div>


      {/* What I Build */}
      <section className="mt-20">
        <h2 className="text-2xl font-semibold text-white">
          What I Build
        </h2>

        <div className="grid md:grid-cols-3 gap-6 mt-8">

          <div className="p-6 rounded-xl border border-white/10 bg-white/5">
            <h3 className="text-white font-medium">
              Backend Systems
            </h3>

            <p className="mt-3 text-sm text-gray-400">
              Designing APIs, backend services, and data workflows that
              power applications and platforms.
            </p>
          </div>

          <div className="p-6 rounded-xl border border-white/10 bg-white/5">
            <h3 className="text-white font-medium">
              Developer Platforms
            </h3>

            <p className="mt-3 text-sm text-gray-400">
              Tools and systems that automate operations, manage events,
              and simplify platform workflows.
            </p>
          </div>

          <div className="p-6 rounded-xl border border-white/10 bg-white/5">
            <h3 className="text-white font-medium">
              Cloud Infrastructure
            </h3>

            <p className="mt-3 text-sm text-gray-400">
              Deploying and managing applications using modern
              infrastructure and containerized environments.
            </p>
          </div>

        </div>
      </section>


      {/* Technologies */}
      <section className="mt-20">
        <h2 className="text-2xl font-semibold text-white">
          Technologies I Work With
        </h2>

        <div className="flex flex-wrap gap-3 mt-6 text-sm">

          {[
            "FastAPI",
            "Flask",
            "Next.js",
            "Python",
            "JavaScript",
            "PostgreSQL",
            "MongoDB",
            "Redis",
            "Docker",
            "AWS",
            "Linux",
            "REST APIs"
          ].map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-gray-300"
            >
              {tech}
            </span>
          ))}

        </div>
      </section>


      {/* Current Work */}
      <section className="mt-20">
        <h2 className="text-2xl font-semibold text-white">
          Current Focus
        </h2>

        <p className="mt-4 text-gray-400 leading-relaxed max-w-3xl">
          Recently, I've been building systems around event platforms,
          automation tools, and developer infrastructure. This includes
          projects like a campus operations platform for managing event
          registrations and payments, a QR-based attendance system for
          contactless check-ins, and CYNI — a Discord automation platform
          designed for server moderation and management.
        </p>
      </section>


      {/* Engineering Philosophy */}
      <section className="mt-20">
        <h2 className="text-2xl font-semibold text-white">
          Engineering Approach
        </h2>

        <p className="mt-4 text-gray-400 leading-relaxed max-w-3xl">
          I believe good software engineering is not just about writing
          code but about designing systems that are maintainable,
          scalable, and reliable. When building software, I focus on
          clear architecture, modular components, and infrastructure
          that supports growth as systems evolve.
        </p>
      </section>


      {/* Stats */}
      <section className="mt-20">
        <h2 className="text-2xl font-semibold text-white">
          Quick Facts
        </h2>

        <div className="grid md:grid-cols-3 gap-6 mt-8">

          <div className="p-6 border border-white/10 rounded-xl bg-white/5">
            <h3 className="text-3xl font-bold text-cyan-400">
              3+
            </h3>
            <p className="text-gray-400 text-sm mt-2">
              Production Systems Built
            </p>
          </div>

          <div className="p-6 border border-white/10 rounded-xl bg-white/5">
            <h3 className="text-3xl font-bold text-cyan-400">
              AWS
            </h3>
            <p className="text-gray-400 text-sm mt-2">
              Cloud Infrastructure Experience
            </p>
          </div>

          <div className="p-6 border border-white/10 rounded-xl bg-white/5">
            <h3 className="text-3xl font-bold text-cyan-400">
              Backend
            </h3>
            <p className="text-gray-400 text-sm mt-2">
              Focused Engineering Discipline
            </p>
          </div>

        </div>
      </section>

    </main>
  );
}