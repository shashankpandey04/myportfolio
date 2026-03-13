import Image from "next/image";
import Link from "next/link";

interface ArchitectureCardProps {
  title: string;
  description: string;
  image: string;
  tech: string[];
  architectureLink: string;
}

export default function ArchitectureCard({
  title,
  description,
  image,
  tech,
  architectureLink,
}: ArchitectureCardProps) {
  return (
    <div className="group rounded-2xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-sm hover:border-cyan-400/40 transition">

      <div className="relative h-48 w-full overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover group-hover:scale-105 transition duration-500"
        />
      </div>

      <div className="p-6">

        <h3 className="text-xl font-semibold text-white">
          {title}
        </h3>

        <p className="mt-3 text-gray-400 text-sm">
          {description}
        </p>

        <div className="flex flex-wrap gap-2 mt-4 text-xs text-gray-400">
          {tech.map((t, i) => (
            <span key={i} className="px-2 py-1 bg-white/5 rounded">
              {t}
            </span>
          ))}
        </div>

        <Link
          href={architectureLink}
          className="inline-block mt-6 px-4 py-2 rounded-lg bg-cyan-500 text-black font-medium hover:bg-cyan-400 transition"
        >
          View Architecture
        </Link>

      </div>
    </div>
  );
}