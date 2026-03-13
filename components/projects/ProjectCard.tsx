import Image from "next/image";
import Link from "next/link";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  tech: string[];
  projectLink: string;
  liveLink?: string;
  githubLink?: string;
}

export default function ProjectCard({
  title,
  description,
  image,
  tech,
  projectLink,
  liveLink,
  githubLink,
}: ProjectCardProps) {
  return (
    <div className="group rounded-2xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-sm hover:border-cyan-400/40 transition">

      {/* Image */}
      <div className="relative h-48 w-full overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover group-hover:scale-105 transition duration-500"
        />
      </div>

      {/* Content */}
      <div className="p-6">

        <h3 className="text-xl font-semibold text-white">{title}</h3>

        <p className="mt-3 text-gray-400 text-sm">
          {description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mt-4 text-xs text-gray-400">
          {tech.map((t, i) => (
            <span key={i} className="px-2 py-1 bg-white/5 rounded">
              {t}
            </span>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex flex-wrap gap-3 mt-6 text-sm">

          <Link
            href={projectLink}
            className="px-4 py-2 rounded-lg bg-cyan-500 text-black font-medium hover:bg-cyan-400 transition"
          >
            View Details
          </Link>

          {liveLink && (
            <a
              href={liveLink}
              target="_blank"
              className="px-4 py-2 rounded-lg border border-white/10 text-gray-300 hover:border-cyan-400/40 hover:text-white transition"
            >
              Live
            </a>
          )}

          {githubLink && (
            <a
              href={githubLink}
              target="_blank"
              className="px-4 py-2 rounded-lg border border-white/10 text-gray-300 hover:border-cyan-400/40 hover:text-white transition"
            >
              GitHub
            </a>
          )}

        </div>

      </div>

    </div>
  );
}