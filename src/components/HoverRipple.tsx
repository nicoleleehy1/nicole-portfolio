"use client";
import { useState } from "react";

interface Props {
  children: React.ReactNode;
}

export default function HoverRipple({ children }: Props) {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setPos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div
      onMouseMove={handleMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="group relative overflow-hidden rounded-lg border-2 p-5 
                 transition-colors duration-300"
    >
      {/* Ripple */}
      <div
        className="pointer-events-none absolute rounded-full bg-[#FFEBF0]
                    transition-all duration-500 ease-out"
        style={{
          width: hovered ? "800px" : "0px",
          height: hovered ? "800px" : "0px",
          left: pos.x - 250,
          top: pos.y - 250,
          opacity: hovered ? 1 : 0,
        }}
      />

      {/* Content */}
      <div className="relative z-10">{children}</div>
    </div>
  );
}
