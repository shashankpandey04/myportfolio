"use client";

import { useEffect, useState } from "react";
import { playSound } from "@/lib/soundPlayer";

export default function SecretPage() {
  const [pos, setPos] = useState({ x: 200, y: 200 });

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      setPos({
        x: e.clientX - 40,
        y: e.clientY - 40,
      });
    };

    window.addEventListener("mousemove", handleMove);

    return () => {
      window.removeEventListener("mousemove", handleMove);
    };
  }, []);

  const petCat = () => {
    playSound("/sounds/cat_meowing.mp3", 0.6);
  };

  return (
    <main className="relative w-full h-screen overflow-hidden bg-black text-white mt-12">

      <div className="absolute top-12 w-full text-center">
        <h1 className="text-3xl font-bold">🐈 You found the secret page</h1>
        <p className="text-gray-400 mt-2">
          The cat has decided to follow your cursor.
        </p>
      </div>

      <img
        src="/cat.gif"
        alt="secret cat"
        onClick={petCat}
        style={{
          position: "absolute",
          left: pos.x,
          top: pos.y,
          width: "80px",
          transition: "0.15s linear",
          cursor: "pointer",
        }}
      />

    </main>
  );
}