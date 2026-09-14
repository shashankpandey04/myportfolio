import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Github, Play } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  tech: string[];
  projectLink: string;
  liveLink?: string;
  githubLink?: string;
  ytLink?: string;
  index?: number;
}

export default function ProjectCard({
  title,
  description,
  image,
  tech,
  projectLink,
  liveLink,
  githubLink,
  ytLink,
  index,
}: ProjectCardProps) {
  return (
    <article className="group">
      <div className="flex items-center gap-4 mb-5">
        {index !== undefined && (
          <span className="text-sm font-mono text-cyan-400">
            {String(index + 1).padStart(2, "0")}
          </span>
        )}

        <div className="h-px flex-1 bg-white/8" />
      </div>

      <Link
        href={projectLink}
        className="relative block aspect-16/10 overflow-hidden rounded-2xl border border-white/08 bg-white/3"
      >
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition duration-700 ease-out group-hover:scale-[1.04]"
        />

        <div className="absolute inset-0 bg-linear-to-t from-black/30 via-transparent to-transparent opacity-60" />

        <div className="absolute top-5 right-5 flex items-center justify-center w-10 h-10 rounded-full border border-white/10 bg-black/30 backdrop-blur-md text-white opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition duration-300">
          <ArrowUpRight size={18} />
        </div>
      </Link>

      <div className="mt-6">
        <Link
          href={projectLink}
          className="inline-block"
        >
          <h3 className="text-2xl font-semibold tracking-tight text-white group-hover:text-cyan-400 transition">
            {title}
          </h3>
        </Link>

        <p className="mt-3 text-sm leading-7 text-gray-400">
          {description}
        </p>

        <div className="flex flex-wrap items-center gap-x-3 gap-y-2 mt-5">
          {tech.map((item, index) => (
            <div
              key={item}
              className="flex items-center gap-3"
            >
              <span className="text-xs text-gray-500">
                {item}
              </span>

              {index !== tech.length - 1 && (
                <span className="w-1 h-1 rounded-full bg-gray-700" />
              )}
            </div>
          ))}
        </div>

        <div className="flex items-center justify-between gap-4 mt-7 pt-5 border-t border-white/8">
          <Link
            href={projectLink}
            className="inline-flex items-center gap-2 text-sm font-medium text-white hover:text-cyan-400 transition"
          >
            View case study
            <ArrowUpRight size={16} />
          </Link>

          <div className="flex items-center gap-4">
            {liveLink && (
              <a
                href={liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-gray-500 hover:text-white transition"
              >
                Live
              </a>
            )}

            {githubLink && (
              <a
                href={githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-sm text-gray-500 hover:text-white transition"
              >
                <Github size={15} />
                Code
              </a>
            )}

            {ytLink && (
              <a
                href={ytLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-sm text-gray-500 hover:text-white transition"
              >
                <Play size={15} />
                Demo
              </a>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}