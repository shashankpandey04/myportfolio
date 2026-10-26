import Image from "next/image";
import { ArrowUpRight, BadgeCheck } from "lucide-react";

type Props = {
  title: string;
  issuer: string;
  date: string;
  image: string;
  category: string;
  credentialId?: string;
  credentialUrl?: string;
  onClick?: () => void;
  variant?: "core" | "default";
};

export default function CertificationCard({
  title,
  issuer,
  date,
  image,
  category,
  credentialId,
  credentialUrl,
  onClick,
  variant = "default",
}: Props) {
  const isCore = variant === "core";
  const hasCredential =
    Boolean(credentialUrl) ||
    (Boolean(credentialId) && !credentialId?.startsWith("YOUR-"));

  return (
    <button
      type="button"
      onClick={onClick}
      className={`group relative flex h-full w-full flex-col overflow-hidden rounded-2xl border text-left transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 focus-visible:ring-offset-4 focus-visible:ring-offset-[#080808] ${
        isCore
          ? "border-white/[0.14] bg-white/[0.035] hover:-translate-y-1 hover:border-cyan-300/40 hover:bg-white/[0.055]"
          : "border-white/[0.09] bg-white/[0.018] hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.035]"
      }`}
    >
      <div className="relative p-3 sm:p-4">
        <div className="relative flex h-44 items-center justify-center overflow-hidden rounded-xl border border-white/[0.07] bg-[#0b0b0b] sm:h-48">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_50%,rgba(255,255,255,0.035),transparent_70%)]" />

          <Image
            src={image}
            alt={`${title} certificate`}
            width={1000}
            height={700}
            sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 30vw"
            className="relative h-full w-full object-contain p-3 transition-transform duration-500 ease-out group-hover:scale-[1.035] sm:p-4"
          />

          {isCore && (
            <span className="absolute left-3 top-3 rounded-full border border-white/10 bg-[#080808]/85 px-2.5 py-1 text-[9px] uppercase tracking-[0.16em] text-white/70 backdrop-blur-sm">
              Featured
            </span>
          )}

          <span className="absolute bottom-3 right-3 flex h-8 w-8 translate-y-2 items-center justify-center rounded-full border border-white/10 bg-[#080808]/90 text-white/70 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
            <ArrowUpRight size={15} />
          </span>
        </div>
      </div>

      <div className="flex flex-1 flex-col px-5 pb-5 pt-2 sm:px-6 sm:pb-6">
        <div className="flex items-center justify-between gap-3">
          <span className="text-[10px] uppercase tracking-[0.19em] text-cyan-300/75">
            {category}
          </span>

          {hasCredential && (
            <span className="inline-flex shrink-0 items-center gap-1.5 text-[10px] text-white/40">
              <BadgeCheck size={13} className="text-cyan-300/70" />
              Verifiable
            </span>
          )}
        </div>

        <h3 className="mt-3 text-base font-medium leading-snug tracking-[-0.02em] text-white transition-colors duration-200 group-hover:text-cyan-100 sm:text-lg">
          {title}
        </h3>

        <p className="mt-2 text-sm leading-relaxed text-white/45">
          {issuer}
        </p>

        <div className="mt-auto flex items-center justify-between gap-3 border-t border-white/[0.08] pt-4 mt-5">
          <span className="text-xs text-white/35">{date}</span>

          <span className="text-[11px] text-white/35 transition-colors group-hover:text-cyan-300/90">
            View certificate
          </span>
        </div>
      </div>
    </button>
  );
}