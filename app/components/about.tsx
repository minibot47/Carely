"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const HEADING = "Backed by experience, guided by empathy — we provide expert care that prioritizes senior wellness, independence,";
const HEADING_SUFFIX = " and family peace of mind.";

export default function About() {
  const [displayed, setDisplayed] = useState("");
  const [done, setDone] = useState(false);

  const card1Ref = useRef(null);
  const card2Ref = useRef(null);
  const card3Ref = useRef(null);

  // Typewriter effect
  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      if (i < HEADING.length) {
        setDisplayed(HEADING.slice(0, i + 1));
        i++;
      } else {
        setDone(true);
        clearInterval(interval);
      }
    }, 30); // fast enough to feel snappy

    return () => clearInterval(interval);
  }, []);

  // Slide-up effect for cards using IntersectionObserver
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("translate-y-0", "opacity-100");
            entry.target.classList.remove("translate-y-16", "opacity-0");
          }
        });
      },
      { threshold: 0.15 }
    );

    [card1Ref, card2Ref, card3Ref].forEach((ref) => {
      if (ref.current) observer.observe(ref.current);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="w-full h-fit mb-32 px-4">

      {/* SVG clip path definitions */}
      <svg width="0" height="0" className="absolute">
        <defs>
          <clipPath id="flower" clipPathUnits="objectBoundingBox">
            <path d="M0.5,0.15 C0.5,0.15 0.65,0 0.8,0.1 C0.95,0.2 0.95,0.38 0.85,0.5 C0.95,0.62 0.95,0.8 0.8,0.9 C0.65,1 0.5,0.85 0.5,0.85 C0.5,0.85 0.35,1 0.2,0.9 C0.05,0.8 0.05,0.62 0.15,0.5 C0.05,0.38 0.05,0.2 0.2,0.1 C0.35,0 0.5,0.15 0.5,0.15Z" />
          </clipPath>
          <clipPath id="asterisk" clipPathUnits="objectBoundingBox">
            <path d="M0.42,0 H0.58 V0.32 L0.83,0.1 L0.9,0.17 L0.68,0.42 H1 V0.58 H0.68 L0.9,0.83 L0.83,0.9 L0.58,0.68 V1 H0.42 V0.68 L0.17,0.9 L0.1,0.83 L0.32,0.58 H0 V0.42 H0.32 L0.1,0.17 L0.17,0.1 L0.42,0.32 Z" />
          </clipPath>
          <clipPath id="blob" clipPathUnits="objectBoundingBox">
            <path d="M0.7,0.1 C0.9,0.2 1,0.45 0.95,0.65 C0.88,0.85 0.7,0.98 0.5,1 C0.3,1 0.1,0.88 0.04,0.68 C-0.02,0.48 0.08,0.25 0.25,0.12 C0.4,0 0.55,0 0.7,0.1Z" />
          </clipPath>
        </defs>
      </svg>

      {/* Header */}
      <div className="flex flex-col items-center justify-center mb-12 px-4">
        <div className="flex items-center gap-2 mb-4">
          <span className="w-2 h-2 rounded-full bg-[#C97B63]" />
          <span className="text-lg text-black font-lora font-medium">About us</span>
        </div>

                {/* Heading — clean typewriter, no ghost */}
        <h1 className="font-semibold font-jakarta text-center text-3xl sm:text-5xl leading-tight w-[90%]">
          <span className="text-[#2C1810]">
            {displayed}
            {!done && <span className="animate-pulse text-[#C97B63]">|</span>}
            {done && (
              <span className="font-normal font-lora text-black">
                {HEADING_SUFFIX}
              </span>
            )}
          </span>
        </h1>

        {/* Button fades in after typing */}
        <Link
          href="#contact"
          className={`mt-10 mb-5 bg-[#E6A493] flex gap-2 items-center hover:bg-[#A85F48] transition-all text-white font-bold text-lg px-6 py-3 rounded-[12px] duration-700 ${
            done ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          Discover More
          <svg viewBox="0 0 16 16" fill="none" className="w-3.5 h-3.5" stroke="currentColor" strokeWidth="2">
            <path d="M3 13L13 3M13 3H7M13 3v6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </Link>
      </div>

      {/* Cards */}
      <div className="w-[90%] max-w-[1440px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

        {/* Card 1 */}
        <div
          ref={card1Ref}
          className="min-h-[400px] lg:h-[45vh] p-8 flex flex-col gap-4 bg-[#F5F2EC] items-center justify-end rounded-[16px]
            translate-y-16 opacity-0 transition-all duration-700 ease-out"
        >
          <div className="w-40 h-40 sm:w-44 sm:h-44 mb-4 shrink-0 relative" style={{ clipPath: "url(#flower)" }}>
            <img src="/images/about-img-2.jpg" alt="Nursing" className="object-cover w-full h-full" />
          </div>
          <h2 className="text-xl font-bold text-[#2C1810] text-center">24/7 Skilled Nursing Support</h2>
          <p className="text-sm text-black text-center leading-relaxed">
            Round-the-clock medical care and supervision for complete peace of mind.
          </p>
        </div>

        {/* Card 2 */}
        <div
          ref={card2Ref}
          className="min-h-[400px] lg:h-[45vh] p-8 flex flex-col gap-4 bg-[#F5F2EC] items-center justify-end rounded-[16px] relative
            translate-y-16 opacity-0 transition-all duration-700 ease-out delay-150"
        >
          <div className="w-40 h-40 sm:w-44 sm:h-44 mb-4 shrink-0" style={{ clipPath: "url(#asterisk)" }}>
            <img src="/images/about-img-1.jpg" alt="Nursing" className="object-cover w-full h-full" />
          </div>
          <h2 className="text-xl font-bold text-[#2C1810] text-center">Personalized Care Plans</h2>
          <p className="text-sm text-black text-center leading-relaxed">
            Tailored support based on each resident's health, preferences, and lifestyle.
          </p>
        </div>

        {/* Card 3 */}
        <div
          ref={card3Ref}
          className="min-h-[400px] lg:h-[45vh] p-8 flex flex-col gap-4 bg-[#F5F2EC] items-center justify-end rounded-[16px] sm:col-span-2 lg:col-span-1
            translate-y-16 opacity-0 transition-all duration-700 ease-out delay-300"
        >
          <div className="w-40 h-40 sm:w-44 sm:h-44 mb-4 shrink-0" style={{ clipPath: "url(#blob)" }}>
            <img src="/images/about-img-3.jpg" alt="Nursing" className="object-cover w-full h-full" />
          </div>
          <h2 className="text-xl font-bold text-[#2C1810] text-center">Safe, Homelike Environment</h2>
          <p className="text-sm text-black text-center leading-relaxed">
            Clean, comfortable, and secure spaces designed to feel like home.
          </p>
        </div>

      </div>
    </div>
  );
}