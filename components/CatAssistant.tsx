"use client";

import { useState } from "react";
import { playSound } from "@/lib/soundPlayer";

export default function CatAssistant() {
  const [petCount, setPetCount] = useState(0);
  const [message, setMessage] = useState("");
  const [canonEvent, setCanonEvent] = useState(false);
  const [rickroll, setRickroll] = useState(false);

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

    if (newCount === 4) {
      setMessage("you're really persistent...");
      return;
    }

    if (newCount === 5) {
      setMessage("there's always a `secret` page");
      return;
    }

    if (newCount === 6) {
      setMessage("fine... canon event it's!");
      playSound("/sounds/cannon_event.mp3");

      setTimeout(() => {
        setCanonEvent(true);
      }, 1200);

      setTimeout(() => {
        setRickroll(true);
      }, 3500);

      return;
    }

    const random = messages[Math.floor(Math.random() * messages.length)];
    setMessage(random);
  };

  return (
    <>
      {/* Cat Assistant */}
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

      {/* Canon Event Overlay */}
      {canonEvent && !rickroll && (
        <div className="fixed inset-0 z-[9998] flex items-center justify-center bg-black text-white animate-glitch">

          <div className="text-center space-y-4">
            <div className="text-red-500 text-lg tracking-widest">
              ⚠ CYNI ALERT
            </div>

            <div className="text-3xl font-bold">
              Canon Event Detected
            </div>

            <div className="text-gray-400 text-sm">
              Initiating protocol...
            </div>
          </div>

        </div>
      )}

      {/* Rickroll */}
      {rickroll && (
        <div className="fixed inset-0 z-[9999] bg-black flex items-center justify-center">

          <iframe
            className="w-screen h-screen"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&controls=0"
            allow="autoplay; fullscreen"
          />

        </div>
      )}
    </>
  );
}