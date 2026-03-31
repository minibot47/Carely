"use client";
import { useEffect, useState } from "react";

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div
      className="fixed top-0.5 left-0.5 w-2.5 h-2.5 bg-[#E8C5B5] rounded-full pointer-events-none z-[9999] blur-[1px]"
      style={{
        transform: `translate(${position.x}px, ${position.y}px)`,
      }}
    />
  );
}