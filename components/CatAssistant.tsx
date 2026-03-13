"use client";

import { useState } from "react";
import { playSound } from "@/lib/soundPlayer";
import { useRouter } from "next/navigation";

export default function CatAssistant() {
  const [petCount, setPetCount] = useState(0);
  const [message, setMessage] = useState("");
  const router = useRouter();

  const messages = [
    "you found me.",
    "stop chasing me human.",
    "purr...",
    "you like cats huh?",
  ];

  const handleClick = () => {
    const newCount = petCount + 1;
    setPetCount(newCount);

    playSound("/sounds/cat_meowing.mp3", 0.6);

    if (newCount === 3) {
      playSound("/sounds/spider_sense.mp3");
      setMessage("my spider sense is tingling...");
      return;
    }

    if (newCount === 6) {
      setMessage("fine...canon event it's!");
    
      setTimeout(() => {
          window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ", "_blank");
      }, 1200);
      return;
    }

    const random = messages[Math.floor(Math.random() * messages.length)];
    setMessage(random);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2">

      {message && (
        <div className="bg-black/70 backdrop-blur-md px-3 py-1 rounded-lg text-xs text-white border border-white/10">
          {message}
        </div>
      )}

      <img
        src="/cat.gif"
        alt="sleepy cat assistant"
        width="60"
        height="60"
        onClick={handleClick}
        className="cursor-pointer transition-all hover:scale-110 opacity-80 hover:opacity-100 rounded-4xl"
      />

    </div>
  );
}