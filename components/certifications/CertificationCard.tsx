type Props = {
  title: string;
  issuer: string;
  date: string;
  image: string;
  category: string;
  credentialId?: string;
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
  onClick,
  variant = "default",
}: Props) {
  const isCore = variant === "core";

  return (
    <button
      type="button"
      onClick={onClick}
      className={`
        group relative w-full text-left cursor-pointer
        rounded-2xl overflow-hidden border
        transition-all duration-300
        ${
          isCore
            ? `
              border-cyan-400/30
              bg-gradient-to-br from-cyan-400/[0.08] to-white/[0.03]
              hover:border-cyan-400/70
              hover:shadow-[0_0_35px_rgba(0,255,255,0.12)]
              hover:-translate-y-1
            `
            : `
              border-white/10
              bg-white/[0.03]
              hover:border-cyan-400/30
              hover:bg-white/[0.05]
              hover:-translate-y-1
            `
        }
      `}
    >
      {isCore && (
        <div className="absolute top-4 right-4 z-10 text-[11px] font-medium px-2.5 py-1 rounded-full bg-cyan-400/10 text-cyan-300 border border-cyan-400/20">
          Featured
        </div>
      )}

      <div className="p-5">
        {/* Certificate Image */}
        <div className="h-40 rounded-xl bg-black/30 border border-white/5 flex items-center justify-center overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-contain p-4 transition-transform duration-500 group-hover:scale-[1.03]"
          />
        </div>

        {/* Category */}
        <div className="mt-5">
          <span className="text-[11px] uppercase tracking-wider text-cyan-400/80">
            {category}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-lg font-semibold text-white mt-2 leading-snug">
          {title}
        </h3>

        {/* Issuer */}
        <p className="text-sm text-gray-400 mt-1">
          {issuer}
        </p>

        {/* Bottom */}
        <div className="flex items-center justify-between mt-5 pt-4 border-t border-white/10">
          <span className="text-xs text-gray-500">
            {date}
          </span>

          {credentialId && (
            <span className="text-xs text-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity">
              View credential →
            </span>
          )}
        </div>
      </div>
    </button>
  );
}
