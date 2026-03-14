"use client";

import { useEffect, useRef } from "react";

export default function CatFishingGame() {
  const gameRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let isMounted = true;
    let game: import("phaser").Game | undefined;
    let resizeObserver: ResizeObserver | undefined;

    const initGame = async () => {
      const [{ AUTO, Game, Scale }, { default: CatFishingScene }] = await Promise.all([
        import("phaser"),
        import("@/game/catFishingScene"),
      ]);

      if (!isMounted || !gameRef.current) {
        return;
      }

      const container = gameRef.current;

      const getDimensions = () => ({
        width: Math.max(container.clientWidth, window.innerWidth),
        height: Math.max(container.clientHeight, window.innerHeight),
      });

      const { width, height } = getDimensions();

      game = new Game({
        type: AUTO,
        width,
        height,
        parent: container,
        physics: {
          default: "arcade",
        },
        scale: {
          mode: Scale.RESIZE,
          autoCenter: Scale.CENTER_BOTH,
          width,
          height,
        },
        scene: [CatFishingScene],
        backgroundColor: "#0f172a",
      });

      resizeObserver = new ResizeObserver(() => {
        if (!game || !isMounted) {
          return;
        }

        const nextSize = getDimensions();

        game.scale.resize(nextSize.width, nextSize.height);
      });

      resizeObserver.observe(container);
    };

    void initGame();

    return () => {
      isMounted = false;
      resizeObserver?.disconnect();
      game?.destroy(true);
    };
  }, []);

  return <div ref={gameRef} className="h-full w-full overflow-hidden" />;
}