import Image from "next/image";

interface ArchitecturePageProps {
  title: string;
  description: string;
  image: string;
  components: string[];
  flow: string[];
  scalability: string;
  security: string;
  outcome: string;
}

export default function ArchitecturePage({
  title,
  description,
  image,
  components,
  flow,
  scalability,
  security,
  outcome,
}: ArchitecturePageProps) {
  return (
    <main className="max-w-4xl mx-auto px-6 py-24">

      {/* Title */}
      <h1 className="text-4xl font-bold text-white">{title}</h1>

      <p className="mt-4 text-gray-400">{description}</p>

      {/* Architecture Diagram */}
      <div className="relative w-full h-105 mt-10 border border-white/10 rounded-xl overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-contain bg-white"
        />
      </div>

      {/* Components */}
      <section className="mt-12">
        <h2 className="text-2xl font-semibold text-white">
          Architecture Components
        </h2>

        <ul className="mt-4 space-y-2 text-gray-400">
          {components.map((c, i) => (
            <li key={i}>• {c}</li>
          ))}
        </ul>
      </section>

      {/* System Flow */}
      <section className="mt-12">
        <h2 className="text-2xl font-semibold text-white">
          System Flow
        </h2>

        <ul className="mt-4 space-y-2 text-gray-400">
          {flow.map((f, i) => (
            <li key={i}>• {f}</li>
          ))}
        </ul>
      </section>

      {/* Scalability */}
      <Section
        title="Scalability Considerations"
        content={scalability}
      />

      {/* Security */}
      <Section
        title="Security Considerations"
        content={security}
      />

      {/* Outcome */}
      <Section
        title="System Outcome"
        content={outcome}
      />

    </main>
  );
}

function Section({ title, content }: { title: string; content: string }) {
  return (
    <section className="mt-12">
      <h2 className="text-2xl font-semibold text-white">
        {title}
      </h2>

      <p className="mt-4 text-gray-400 leading-relaxed">
        {content}
      </p>
    </section>
  );
}