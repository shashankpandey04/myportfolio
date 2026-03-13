"use client";

import { useState } from "react";

export default function CatAssistant() {
  const [pet, setPet] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2">
      
      {pet && (
        <div className="bg-black/70 backdrop-blur-md px-3 py-1 rounded-lg text-xs text-white border border-white/10">
          purr...
        </div>
      )}

      <img
        src="/cat.gif"
        alt="sleepy cat assistant"
        width="60"
        height="60"
        onClick={() => setPet(!pet)}
        className="cursor-pointer transition-all hover:scale-110 opacity-80 hover:opacity-100 rounded-4xl"
      />
    </div>
  );
}