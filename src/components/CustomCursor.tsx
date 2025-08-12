"use client";

import { useEffect, useState } from "react";

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", moveCursor);
    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  return (
    <div
      className="pointer-events-none fixed top-0 left-0 z-[9999] w-6 h-6 rounded-full transition-transform duration-75 ease-out"
      style={{
        backgroundColor: "#1AC7C2", // light blue from your image
        transform: `translate(${position.x - 12}px, ${position.y - 12}px)`,
      }}
    />
  );
}
