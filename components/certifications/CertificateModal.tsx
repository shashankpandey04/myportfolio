"use client";

import Image from "next/image";
import { useEffect } from "react";
import { ExternalLink, X } from "lucide-react";

interface ModalProps {
  image: string;
  title: string;
  onClose: () => void;
  issuer?: string;
  date?: string;
  category?: string;
  credentialId?: string;
  credentialUrl?: string;
}

export default function CertificateModal({
  image,
  title,
  onClose,
  issuer,
  date,
  category,
  credentialId,
  credentialUrl,
}: ModalProps) {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-black/80 px-4 py-6 backdrop-blur-sm"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="certificate-title"
        className="relative my-auto w-full max-w-2xl overflow-hidden rounded-2xl border border-white/10 bg-[#0b0b0b] shadow-2xl"
      >
        <div className="flex items-center justify-between border-b border-white/[0.08] px-4 py-3 sm:px-5">
          <div>
            <p className="text-[10px] uppercase tracking-[0.2em] text-cyan-300/80">
              Certificate
            </p>
            <p className="mt-0.5 text-xs text-white/40">Credential preview</p>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close certificate preview"
            className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 text-white/50 transition hover:border-white/25 hover:bg-white/[0.05] hover:text-white"
          >
            <X size={16} />
          </button>
        </div>

        <div className="flex max-h-[52vh] min-h-[180px] items-center justify-center bg-black/30 p-3 sm:p-5">
          <Image
            src={image}
            alt={title}
            width={1200}
            height={850}
            sizes="(max-width: 672px) 90vw, 620px"
            className="max-h-[48vh] w-auto max-w-full object-contain"
            priority
          />
        </div>

        <div className="p-4 sm:p-5">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
            <div className="min-w-0">
              {category && (
                <p className="text-[10px] uppercase tracking-[0.16em] text-cyan-300/70">
                  {category}
                </p>
              )}

              <h2
                id="certificate-title"
                className="mt-1.5 text-lg font-medium leading-snug tracking-tight text-white sm:text-xl"
              >
                {title}
              </h2>

              {issuer && (
                <p className="mt-1.5 text-sm text-white/45">{issuer}</p>
              )}
            </div>

            {credentialUrl && (
              <a
                href={credentialUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex shrink-0 items-center justify-center gap-2 self-start rounded-full border border-white/10 px-3.5 py-2 text-xs text-white/65 transition hover:border-cyan-300/40 hover:text-cyan-200"
              >
                Verify
                <ExternalLink size={13} />
              </a>
            )}
          </div>

          {(date || (credentialId && !credentialId.startsWith("YOUR-"))) && (
            <div className="mt-4 flex flex-wrap gap-x-4 gap-y-2 border-t border-white/[0.08] pt-3 text-[11px] text-white/35">
              {date && <span>Issued {date}</span>}
              {credentialId && !credentialId.startsWith("YOUR-") && (
                <span className="break-all">ID: {credentialId}</span>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}