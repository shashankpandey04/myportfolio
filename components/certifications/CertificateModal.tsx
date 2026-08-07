"use client";

import Image from "next/image";

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
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md">

      <div className="relative w-225 max-w-[95vw]">

        <button
          onClick={onClose}
          className="absolute -top-12 right-0 text-gray-400 hover:text-white transition"
        >
          ✕ Close
        </button>

        <div className="relative h-150 w-full rounded-xl border border-white/10 bg-black/60 flex items-center justify-center overflow-hidden">

          <Image
            src={image}
            alt={title}
            fill
            className="object-contain p-6"
          />

        </div>

        <div className="mt-4 text-sm text-gray-300">
          <h3 className="text-lg font-semibold text-white">{title}</h3>

          {issuer && (
            <p className="mt-1">{issuer}</p>
          )}

          <div className="mt-2 flex flex-wrap gap-3 text-xs text-gray-400">
            {date && <span>{date}</span>}
            {category && <span>{category}</span>}
            {credentialId && (
              <span>Credential: {credentialId}</span>
            )}
          </div>

          {credentialUrl && (
            <p className="mt-3">
              <a
                href={credentialUrl}
                target="_blank"
                rel="noreferrer"
                className="text-cyan-400 underline"
              >
                View credential
              </a>
            </p>
          )}
        </div>

      </div>

    </div>
  );
}