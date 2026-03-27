import Image from "next/image";

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
  const CardWrapper = link ? "a" : "div";

  return (
    <CardWrapper
      {...(link && {
        href: link,
        target: "_blank",
        rel: "noopener noreferrer",
      })}
      className="group block rounded-2xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-sm hover:border-cyan-400/40 transition"
    >

      <div className="relative w-full h-52 overflow-hidden">
        <Image
          src={cover}
          alt={title}
          fill
          className="object-cover group-hover:scale-105 transition duration-500"
        />
      </div>
      
      <div className="p-6">

        <div className="flex items-center justify-between mb-2">
          <p className="text-xs text-cyan-400">{event}</p>
          {date && (
            <p className="text-xs text-gray-500">{date}</p>
          )}
        </div>

        <h3 className="text-lg font-semibold text-white leading-snug">
          {title}
        </h3>

        <p className="text-gray-400 text-sm mt-3 line-clamp-3">
          {description}
        </p>

        {highlights.length > 0 && (
          <ul className="mt-4 space-y-1">
            {highlights.slice(0, 3).map((item, i) => (
              <li key={i} className="text-xs text-gray-300 flex items-start gap-2">
                <span className="text-cyan-400">•</span>
                {item}
              </li>
            ))}
          </ul>
        )}

        {link && (
          <p className="mt-4 text-sm text-cyan-400 group-hover:underline">
            View Experience →
          </p>
        )}

      </div>
    </CardWrapper>
  );
}