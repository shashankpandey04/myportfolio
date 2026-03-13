import Image from "next/image";

interface ProjectPageProps {
  title: string;
  description: string;
  image: string;
  tech: string[];
  overview: string;
  problem: string;
  solution: string;
  features: string[];
  architecture: string;
  challenges: string[];
  outcome: string;
  liveLink?: string;
  githubLink?: string;
}

export default function ProjectPage({
  title,
  description,
  image,
  tech,
  overview,
  problem,
  solution,
  features,
  architecture,
  challenges,
  outcome,
  liveLink,
  githubLink,
}: ProjectPageProps) {
  return (
    <main className="max-w-4xl mx-auto px-6 py-24">

      {/* Title */}
      <h1 className="text-4xl font-bold text-white">{title}</h1>

      <p className="mt-4 text-gray-400">{description}</p>

      {/* Links */}
      <div className="flex gap-4 mt-6">

        {liveLink && (
          <a
            href={liveLink}
            target="_blank"
            className="px-4 py-2 rounded-lg bg-cyan-500 text-black font-medium hover:bg-cyan-400 transition"
          >
            Live Demo
          </a>
        )}

        {githubLink && (
          <a
            href={githubLink}
            target="_blank"
            className="px-4 py-2 rounded-lg border border-white/10 text-gray-300 hover:border-cyan-400/40 transition"
          >
            GitHub
          </a>
        )}

      </div>


      {/* Tech Stack */}
      <div className="flex flex-wrap gap-2 mt-6 text-sm">
        {tech.map((t, i) => (
          <span
            key={i}
            className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-gray-300"
          >
            {t}
          </span>
        ))}
      </div>


      {/* Image */}
      <div className="relative w-full h-72 mt-10 rounded-xl overflow-hidden border border-white/10">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
        />
      </div>


      {/* Overview */}
      <Section title="Overview" content={overview} />

      {/* Problem */}
      <Section title="Problem" content={problem} />

      {/* Solution */}
      <Section title="Solution" content={solution} />

      {/* Features */}
      <section className="mt-12">
        <h2 className="text-2xl font-semibold text-white">Key Features</h2>

        <ul className="mt-4 space-y-2 text-gray-400">
          {features.map((f, i) => (
            <li key={i}>• {f}</li>
          ))}
        </ul>
      </section>

      {/* Architecture */}
      <Section title="Architecture" content={architecture} />

      {/* Challenges */}
      <section className="mt-12">
        <h2 className="text-2xl font-semibold text-white">
          Engineering Challenges
        </h2>

        <ul className="mt-4 space-y-2 text-gray-400">
          {challenges.map((c, i) => (
            <li key={i}>• {c}</li>
          ))}
        </ul>
      </section>

      {/* Outcome */}
      <Section title="Outcome" content={outcome} />

    </main>
  );
}


/* Reusable section component */

function Section({ title, content }: { title: string; content: string }) {
  return (
    <section className="mt-12">
      <h2 className="text-2xl font-semibold text-white">{title}</h2>
      <p className="mt-4 text-gray-400 leading-relaxed">{content}</p>
    </section>
  );
}