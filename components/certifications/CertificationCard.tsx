"use client";

import Image from "next/image";

interface CertificationCardProps {
  title: string;
  issuer: string;
  date: string;
  image: string;
  onClick: () => void;
}

export default function CertificationCard({
  title,
  issuer,
  date,
  image,
  onClick,
}: CertificationCardProps) {
  return (
    <div
      onClick={onClick}
      className="cursor-pointer group rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm transition transform-gpu hover:-translate-y-2 hover:border-cyan-400/40 hover:shadow-[0_10px_40px_rgba(0,255,255,0.15)]"
    >

      <div className="relative h-55 w-full bg-linear-to-br from-black/40 to-black/70 flex items-center justify-center overflow-hidden rounded-t-2xl">

        <div className="float-animation relative w-full h-full flex items-center justify-center">

          <Image
            src={image}
            alt={title}
            fill
            className="object-contain p-6 transition duration-500 group-hover:scale-105"
          />

        </div>

      </div>

      {/* Text */}
      <div className="p-5">

        <h3 className="text-white font-semibold leading-tight">
          {title}
        </h3>

        <p className="text-gray-400 text-sm mt-2">
          {issuer}
        </p>

        <p className="text-gray-500 text-xs mt-1">
          {date}
        </p>

      </div>

    </div>
  );
}