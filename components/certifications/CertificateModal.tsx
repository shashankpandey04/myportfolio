"use client";

import Image from "next/image";

interface ModalProps {
  image: string;
  title: string;
  onClose: () => void;
}

export default function CertificateModal({
  image,
  title,
  onClose,
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

      </div>

    </div>
  );
}