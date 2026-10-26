import { ArrowUpRight } from "lucide-react";

type BlogCardProps = {
  title: string;
  description: string;
  platform: string;
  category: string;
  date?: string;
  link?: string;
};

export default function BlogCard({
  title,
  description,
  platform,
  category,
  date,
  link,
}: BlogCardProps) {
  const content = (
    <>
      <div className="mb-3 flex flex-wrap items-center gap-x-2 gap-y-1 text-[9px] uppercase tracking-[0.12em] text-neutral-500">
        <span>{platform}</span>
        <span className="text-neutral-700">/</span>
        <span>{category}</span>
      </div>

      <div className="flex items-start justify-between gap-3">
        <h3 className="font-serif text-[19px] font-normal leading-snug tracking-[-0.02em] text-neutral-200 transition group-hover:text-white">
          {title}
        </h3>

        {link && (
          <ArrowUpRight
            size={15}
            className="mt-1 shrink-0 text-neutral-600 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-neutral-300"
          />
        )}
      </div>

      <p className="mt-2.5 text-xs leading-[1.75] text-neutral-500">
        {description}
      </p>

      {date && (
        <p className="mt-4 text-[10px] uppercase tracking-[0.12em] text-neutral-600">
          {new Date(`${date}T00:00:00`).toLocaleDateString("en-US", {
            month: "short",
            year: "numeric",
          })}
        </p>
      )}
    </>
  );

  const className =
    "group flex h-full min-h-[205px] flex-col border border-white/[0.09] bg-white/[0.015] p-4 transition duration-200 hover:border-white/20 hover:bg-white/[0.035]";

  if (link) {
    return (
      <a
        href={link}
        target="_blank"
        rel="noreferrer"
        className={className}
        aria-label={`${title} — opens in a new tab`}
      >
        {content}
      </a>
    );
  }

  return <article className={className}>{content}</article>;
}