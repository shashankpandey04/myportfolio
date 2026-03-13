let currentAudio: HTMLAudioElement | null = null;

export function playSound(src: string, volume = 0.7) {
  if (currentAudio) {
    currentAudio.pause();
    currentAudio.currentTime = 0;
  }

  const audio = new Audio(src);
  audio.volume = volume;

  currentAudio = audio;

  audio.play().catch(() => {});
}