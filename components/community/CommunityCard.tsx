import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

interface CommunityCardProps {
  title: string;
  description: string;
  cover: string;
  event: string;
  date?: string;
  link?: string;
  highlights?: string[];
}

export default function CommunityCard({
  title,
  description,
  cover,
  event,
  date,
  link,
  highlights = [],
}: CommunityCardProps) {
  const content = (
    <>
      <div className="relative aspect-16/10 overflow-hidden">
        <Image
          src={cover}
          alt={title}
          fill
          className="object-cover transition duration-700 group-hover:scale-[1.03]"
        />

        <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/10 to-transparent" />

        <div className="absolute inset-x-5 bottom-5 flex items-end justify-between gap-4">
          <div>
            <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-cyan-400">
              {event}
            </p>

            {date && (
              <p className="mt-1 text-xs text-gray-300">
                {date}
              </p>
            )}
          </div>

          {link && (
            <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-black/30 text-white backdrop-blur-md transition group-hover:border-cyan-400/50 group-hover:bg-cyan-400 group-hover:text-black">
              <ArrowUpRight size={17} />
            </span>
          )}
        </div>
      </div>

      <div className="p-6 sm:p-7">
        <h3 className="max-w-xl text-xl sm:text-2xl font-semibold tracking-tight text-white leading-snug">
          {title}
        </h3>

        <p className="mt-4 text-sm leading-7 text-gray-400">
          {description}
        </p>

        {highlights.length > 0 && (
          <div className="mt-7 border-t border-white/8 pt-5">
            <p className="text-[10px] uppercase tracking-[0.18em] text-gray-600">
              Highlights
            </p>

            <div className="mt-4 space-y-3">
              {highlights.slice(0, 3).map((item, index) => (
                <div
                  key={item}
                  className="flex items-start gap-3"
                >
                  <span className="mt-0.5 text-[11px] text-cyan-400">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <p className="text-sm leading-6 text-gray-300">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {link && (
          <div className="mt-7 flex items-center gap-2 text-sm text-gray-500 transition group-hover:text-white">
            <span>View experience</span>

            <ArrowUpRight
              size={15}
              className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </div>
        )}
      </div>
    </>
  );

  const className =
    "group block overflow-hidden rounded-2xl border border-white/8 bg-white/2 transition-all duration-300 hover:border-white/18 hover:bg-white/[0.035]";

  if (link) {
    return (
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
      >
        {content}
      </a>
    );
  }

  return (
    <article className={className}>
      {content}
    </article>
  );
}