import Image from "next/image";

interface BlogCardProps {
  title: string;
  description: string;
  cover: string;
  platform: string;
  link: string;
}

export default function BlogCard({
  title,
  description,
  cover,
  platform,
  link,
}: BlogCardProps) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="group block rounded-2xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-sm hover:border-cyan-400/40 transition"
    >

      {/* Cover Image */}
      <div className="relative w-full h-52 overflow-hidden">

        <Image
          src={cover}
          alt={title}
          fill
          className="object-cover group-hover:scale-105 transition duration-500"
        />

      </div>

      {/* Content */}
      <div className="p-6">

        <p className="text-xs text-cyan-400 mb-2">
          {platform}
        </p>

        <h3 className="text-lg font-semibold text-white leading-snug">
          {title}
        </h3>

        <p className="text-gray-400 text-sm mt-3 line-clamp-3">
          {description}
        </p>

        <p className="mt-4 text-sm text-cyan-400 group-hover:underline">
          Read Article →
        </p>

      </div>

    </a>
  );
}