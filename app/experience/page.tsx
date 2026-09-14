const experiences = [
  {
    company: "Amazon Web Services",
    role: "AWS Student Builder Campus Leader",
    period: "May 2026 – Jun 2026",
    type: "Leadership",
    description:
      "Selected by AWS and NEXT GEN TEAM to promote AWS Builder Center, drive student engagement, and connect peers with cloud learning opportunities.",
    highlights: [
      "Promoted AWS Builder Center across campus",
      "Executed outreach campaigns and activations",
      "Created educational cloud content",
      "Reported engagement analytics and impact",
    ],
    skills: ["AWS", "Leadership", "Community Building"],
  },
  {
    company: "AWS Student Builder Group",
    role: "AWS Student Builder Group Leader",
    period: "Feb 2025 – May 2026",
    type: "Community",
    description:
      "Led one of the largest AWS student communities at Lovely Professional University through workshops, mentorship, and large-scale technical events.",
    highlights: [
      "Scaled community to 2,500+ students",
      "Organized AWS Student Community Day",
      "Achieved Diamond Level recognition",
      "Hosted workshops and cloud learning sessions",
    ],
    skills: ["AWS", "Public Speaking", "Community Growth"],
  },
  {
    company: "FounDev Studio",
    role: "Full Stack Developer",
    period: "Apr 2025 – Nov 2025",
    type: "Engineering",
    description:
      "Built production-grade web applications and backend systems for business clients using modern cloud-native technologies.",
    highlights: [
      "Developed FastAPI and Next.js applications",
      "Built authentication and RBAC systems",
      "Integrated payment gateways and business workflows",
      "Managed Dockerized deployments and production infrastructure",
      "Improved reliability through monitoring and issue resolution",
    ],
    skills: ["FastAPI", "Next.js", "PostgreSQL", "Docker", "REST APIs"],
  },
  {
    company: "Encrypt Edge",
    role: "Core Team Member",
    period: "Nov 2025 – Mar 2026",
    type: "Cybersecurity",
    description:
      "Designed hands-on cybersecurity learning experiences through CTF challenges and intentionally vulnerable applications.",
    highlights: [
      "Created web security challenges",
      "Built intentionally vulnerable systems",
      "Promoted practical cybersecurity learning",
    ],
    skills: ["Cybersecurity", "CTF", "OWASP"],
  },
  {
    company: "Cyni Systems",
    role: "Founder & Backend Developer",
    period: "Aug 2023 – Present",
    type: "Founder",
    description:
      "Building scalable automation systems, backend services, and developer-focused tools with an emphasis on reliability, architecture, and scale.",
    highlights: [
      "Developed large-scale Discord automation",
      "Designed backend architectures",
      "Built moderation and workflow systems",
      "Focused on scalability and performance",
    ],
    skills: ["Python", "FastAPI", "System Design"],
  },
  {
    company: "Hum Raahi Foundation",
    role: "Graphic Designer",
    period: "Aug 2024 – Mar 2025",
    type: "Creative",
    description:
      "Designed visual assets and branding materials for outreach campaigns and community initiatives.",
    highlights: [
      "Created campaign creatives",
      "Supported branding efforts",
      "Designed promotional assets",
    ],
    skills: ["Design", "Branding", "Creativity"],
  },
];

export default function ExperiencePage() {
  return (
    <main className="min-h-screen px-6 pt-32 pb-24 md:pt-40">
      <div className="max-w-6xl mx-auto">

        <section className="max-w-3xl">
          <div className="flex items-center gap-3">
            <span className="h-px w-10 bg-cyan-400" />

            <p className="text-xs font-medium tracking-[0.2em] text-cyan-400 uppercase">
              The Journey So Far
            </p>
          </div>

          <h1 className="mt-7 text-5xl sm:text-6xl md:text-7xl font-semibold tracking-[-0.05em] text-white">
            Experience &
            <br />
            <span className="text-gray-500">
              leadership.
            </span>
          </h1>

          <p className="mt-8 text-lg leading-8 text-gray-400 max-w-2xl">
            I've spent the last few years building software, growing
            communities, experimenting with ideas, and occasionally
            finding myself responsible for things much bigger than the
            original plan.
          </p>
        </section>


        <section className="grid grid-cols-2 md:grid-cols-4 gap-px mt-20 border border-white/8 bg-white/8">

          <div className="bg-black p-6 sm:p-8">
            <p className="text-3xl font-medium text-white">
              40K+
            </p>

            <p className="mt-2 text-sm text-gray-500">
              Users reached
            </p>
          </div>

          <div className="bg-black p-6 sm:p-8">
            <p className="text-3xl font-medium text-white">
              2.5K+
            </p>

            <p className="mt-2 text-sm text-gray-500">
              Community members
            </p>
          </div>

          <div className="bg-black p-6 sm:p-8">
            <p className="text-3xl font-medium text-white">
              6+
            </p>

            <p className="mt-2 text-sm text-gray-500">
              Roles & experiences
            </p>
          </div>

          <div className="bg-black p-6 sm:p-8">
            <p className="text-3xl font-medium text-white">
              2023
            </p>

            <p className="mt-2 text-sm text-gray-500">
              Started building
            </p>
          </div>

        </section>


        <section className="mt-28">

          <div className="mb-16 flex items-end justify-between">
            <div>
              <p className="text-sm text-gray-500">
                Selected experiences
              </p>

              <h2 className="mt-3 text-3xl sm:text-4xl font-semibold tracking-tight text-white">
                Where I've spent my time.
              </h2>
            </div>

            <span className="hidden sm:block text-sm text-gray-600">
              2023 - Present
            </span>
          </div>


          <div className="relative">

            <div className="absolute left-1.75 top-3 bottom-3 w-px bg-white/8 hidden md:block" />

            <div className="space-y-20">

              {experiences.map((exp, index) => (
                <article
                  key={`${exp.company}-${exp.role}`}
                  className="relative md:grid md:grid-cols-[150px_1fr] md:gap-16"
                >
                  <div className="mb-6 md:mb-0 md:text-right">

                    <p className="text-sm text-gray-600">
                      {exp.period}
                    </p>

                  </div>


                  <div className="absolute left-0 top-1.5 hidden md:flex h-3.75 w-3.75 items-center justify-center rounded-full bg-black border border-white/20">
                    <div className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
                  </div>


                  <div className="md:pl-8">

                    <div className="flex flex-wrap items-center gap-3">

                      <span className="text-xs font-medium text-cyan-400">
                        {exp.type}
                      </span>

                      <span className="h-1 w-1 rounded-full bg-gray-700" />

                      <span className="text-sm text-gray-500">
                        {exp.company}
                      </span>

                    </div>


                    <h3 className="mt-4 text-2xl sm:text-3xl font-semibold tracking-tight text-white">
                      {exp.role}
                    </h3>


                    <p className="mt-5 max-w-2xl leading-7 text-gray-400">
                      {exp.description}
                    </p>


                    <div className="mt-8 grid sm:grid-cols-2 gap-x-10 gap-y-4 max-w-3xl">

                      {exp.highlights.map((highlight, highlightIndex) => (
                        <div
                          key={highlight}
                          className="flex items-start gap-3"
                        >
                          <span className="mt-0.5 text-xs text-cyan-400">
                            {String(highlightIndex + 1).padStart(2, "0")}
                          </span>

                          <p className="text-sm leading-6 text-gray-300">
                            {highlight}
                          </p>
                        </div>
                      ))}

                    </div>


                    <div className="flex flex-wrap gap-x-4 gap-y-2 mt-8">

                      {exp.skills.map((skill) => (
                        <span
                          key={skill}
                          className="text-xs text-gray-500"
                        >
                          {skill}
                        </span>
                      ))}

                    </div>

                  </div>

                </article>
              ))}

            </div>

          </div>

        </section>


        <section className="mt-32 pt-16 border-t border-white/8">

          <p className="text-xs uppercase tracking-[0.2em] text-gray-600">
            Looking ahead
          </p>

          <h2 className="mt-6 max-w-3xl text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight leading-tight text-white">
            Still early. Still building.
          </h2>

          <p className="mt-6 max-w-2xl text-gray-500 leading-7">
            I'm continuing to focus on backend engineering, distributed
            systems, cloud infrastructure, and AI-powered platforms while
            looking for opportunities to work on systems that have real
            technical and operational impact.
          </p>

        </section>

      </div>
    </main>
  );
}