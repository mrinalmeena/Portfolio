import { useEffect, useState } from "react";

/**
 * Custom Hook
 * Cycles through an array of sprite frames.
 *
 * @param {Array} frames
 * @param {number} speed (milliseconds)
 */

export default function useSpriteAnimation(frames = [], speed = 120) {
  const [frameIndex, setFrameIndex] = useState(0);

  useEffect(() => {
    if (!frames.length) return;

    const interval = setInterval(() => {
      setFrameIndex((prev) => (prev + 1) % frames.length);
    }, speed);

    return () => clearInterval(interval);
  }, [frames, speed]);

  useEffect(() => {
    setFrameIndex(0);
  }, [frames]);

  return frames[frameIndex];
}