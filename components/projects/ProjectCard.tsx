import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  ExternalLink,
  Github,
  Play,
} from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  category: string;
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
  category,
  tech,
  projectLink,
  liveLink,
  githubLink,
  ytLink,
  index,
}: ProjectCardProps) {
  return (
    <article className="group min-w-0">
      <div className="mb-4 flex items-center gap-4">
        <span className="font-mono text-[10px] text-white/35">
          {String((index ?? 0) + 1).padStart(2, "0")}
        </span>

        <span className="h-px flex-1 bg-white/10" />

        <span className="text-[9px] uppercase tracking-[0.14em] text-white/40">
          {category}
        </span>
      </div>

      <Link
        href={projectLink}
        aria-label={`View ${title} project`}
        className="relative block aspect-[16/10] overflow-hidden border border-white/10 bg-[#111]"
      >
        <Image
          src={image}
          alt={`${title} project preview`}
          fill
          sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 560px"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.035]"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-black/10 opacity-80 transition-opacity duration-500 group-hover:opacity-100" />

        <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-4 sm:p-5">
          <span className="text-[10px] uppercase tracking-[0.15em] text-white/70">
            Project {String((index ?? 0) + 1).padStart(2, "0")}
          </span>

          <span className="flex h-9 w-9 shrink-0 items-center justify-center border border-white/20 bg-black/35 text-white transition-all duration-300 group-hover:border-cyan-400/50 group-hover:bg-cyan-400 group-hover:text-black">
            <ArrowUpRight size={17} strokeWidth={1.5} />
          </span>
        </div>
      </Link>

      <div className="mt-5">
        <Link href={projectLink} className="inline-block">
          <h3 className="font-serif text-2xl tracking-[-0.03em] transition-colors duration-300 group-hover:text-cyan-400 sm:text-3xl">
            {title}
          </h3>
        </Link>

        <p className="mt-3 text-sm leading-7 text-white/50">
          {description}
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          {tech.map((item) => (
            <span
              key={item}
              className="border border-white/[0.09] px-2.5 py-1.5 text-[10px] text-white/50 transition-colors hover:border-white/20 hover:text-white/75"
            >
              {item}
            </span>
          ))}
        </div>

        <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-4">
          <Link
            href={projectLink}
            className="group/link inline-flex items-center gap-2 text-xs text-white/80 transition-colors hover:text-white"
          >
            Read case study
            <ArrowUpRight
              size={14}
              className="text-cyan-400 transition-transform group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5"
            />
          </Link>

          <div className="flex flex-wrap items-center gap-x-4 gap-y-3">
            {liveLink && (
              <a
                href={liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-[11px] text-white/45 transition-colors hover:text-cyan-400"
              >
                <ExternalLink size={12} />
                Live
              </a>
            )}

            {githubLink && (
              <a
                href={githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-[11px] text-white/45 transition-colors hover:text-white"
              >
                <Github size={13} />
                Source
              </a>
            )}

            {ytLink && (
              <a
                href={ytLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-[11px] text-white/45 transition-colors hover:text-white"
              >
                <Play size={12} />
                Demo
              </a>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}