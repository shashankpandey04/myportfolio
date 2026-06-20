const experiences = [
  {
    company: "Amazon Web Services",
    role: "AWS Student Builder Campus Leader",
    period: "May 2026 – Jun 2026",
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
    role: "AWS SBG Leader",
    period: "Feb 2025 – May 2026",
    description:
      "Led one of the largest AWS student communities at Lovely Professional University through workshops, mentorship, and large-scale technical events.",
    highlights: [
      "Scaled community to 2500+ students",
      "Organized AWS Student Community Day",
      "Achieved Diamond Level recognition",
      "Hosted workshops and cloud learning sessions",
    ],
    skills: ["AWS", "Public Speaking", "Community Growth"],
  },
  {
    company: "FounDev Studio",
    role: "Full Stack Developer (Freelance)",
    period: "Apr 2025 – Nov 2025",
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
    period: "Nov 2025 – Present",
    description:
      "Designed hands-on cybersecurity learning experiences through CTF challenges and vulnerable applications.",
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
    description:
      "Building scalable automation systems, backend services, and developer-focused tools with emphasis on reliability and scale.",
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
    <main className="max-w-7xl mx-auto px-6 py-24">
      {/* Header */}
      <div className="mb-20">
        <span className="text-cyan-400 text-sm font-medium tracking-wider uppercase">
          Career Journey
        </span>

        <h1 className="mt-4 text-5xl md:text-6xl font-bold text-white">
          Experience & Leadership
        </h1>

        <p className="mt-6 text-gray-400 text-lg max-w-3xl leading-relaxed">
          Building scalable backend systems, leading technical communities, and
          creating opportunities through cloud computing, cybersecurity, and
          developer-focused initiatives.
        </p>
      </div>

      {/* Cards */}
      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
        {experiences.map((exp) => (
          <div
            key={`${exp.company}-${exp.role}`}
            className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-md p-7 hover:border-cyan-400/40 hover:bg-white/[0.05] transition-all duration-300 hover:-translate-y-1"
          >
            {/* Glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition" />

            <div className="relative z-10">
              <p className="text-cyan-400 text-xs uppercase tracking-wider font-medium">
                {exp.company}
              </p>

              <h3 className="mt-3 text-xl font-semibold text-white">
                {exp.role}
              </h3>

              <p className="text-sm text-gray-500 mt-1">{exp.period}</p>

              <p className="mt-5 text-gray-400 text-sm leading-relaxed">
                {exp.description}
              </p>

              <ul className="mt-5 space-y-2">
                {exp.highlights.map((item) => (
                  <li
                    key={item}
                    className="text-sm text-gray-300 flex items-start gap-2"
                  >
                    <span className="text-cyan-400 mt-0.5">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-6 flex flex-wrap gap-2">
                {exp.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 rounded-full text-xs bg-cyan-500/10 text-cyan-300 border border-cyan-500/20"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
