type Props = {
  title: string;
  issuer: string;
  date: string;
  image: string;
  category: string;
  onClick?: () => void;
  variant?: "core" | "default";
};

export default function CertificationCard({
  title,
  issuer,
  date,
  image,
  category,
  onClick,
  variant = "default",
}: Props) {
  const isCore = variant === "core";

  return (
    <div
      onClick={onClick}
      className={`
        relative cursor-pointer rounded-2xl overflow-hidden border transition-all duration-300
        ${
          isCore
            ? "border-cyan-400/40 bg-white/5 hover:border-cyan-400 hover:shadow-[0_0_30px_rgba(0,255,255,0.15)] scale-[1.02]"
            : "border-white/10 bg-white/5 hover:border-cyan-400/30"
        }
      `}
    >
      {isCore && (
        <div className="absolute top-3 right-3 text-xs px-2 py-1 rounded-full bg-cyan-400/10 text-cyan-300 border border-cyan-400/20">
          Featured
        </div>
      )}

      <div className="p-5">
        <img
          src={image}
          alt={title}
          className="w-full h-36 object-contain mb-4"
        />

        <h3 className="text-lg font-semibold text-white">
          {title}
        </h3>

        <p className="text-sm text-gray-400 mt-1">
          {issuer}
        </p>

        <p className="text-xs text-gray-500 mt-2">
          {date}
        </p>
      </div>
    </div>
  );
}