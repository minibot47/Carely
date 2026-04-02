"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const TYPED_TEXT = "respect, and experience";

export default function Hero() {
  const bgRef = useRef<HTMLDivElement>(null);
  const [displayed, setDisplayed] = useState("");
  const [done, setDone] = useState(false);

  // Parallax on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (!bgRef.current) return;
      const offset = window.scrollY * 0.4;
      bgRef.current.style.transform = `translateY(${offset}px)`;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Typewriter on mount
  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      if (i < TYPED_TEXT.length) {
        setDisplayed(TYPED_TEXT.slice(0, i + 1));
        i++;
      } else {
        setDone(true);
        clearInterval(interval);
      }
    }, 60);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen p-5 overflow-hidden mt-2 mb-32 rounded-[16px] flex items-end">
      {/* Background with parallax */}
      <div
        ref={bgRef}
        className="absolute inset-0 will-change-transform"
        style={{ top: "-20%", height: "150%" }}
      >
        <img
          src="/images/hero-img.jpg"
          alt="Senior care"
          className="object-cover h-full w-full"
        />
        <div className="absolute inset-0 bg-linear-to-r from-[#2E2018]/10 via-[#2E2018]/20 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full flex items-center h-full justify-between">
        <div className="w-[80%] py-5">

          {/* Typewriter heading */}
          <h1 className="font-jakarta font-semibold text-5xl md:text-5xl lg:text-5xl text-white leading-tight mb-6">
            Trusted senior care designed with heart{" "}<br/>
            <span className="font-lora italic font-medium text-5xl">
              {displayed}
              {!done && <span className="animate-pulse text-[#f3c4c4]">|</span>}
            </span>
          </h1>

          {/* Paragraph fades in after typing finishes */}
          <p
            className={`text-white text-lg leading-relaxed mb-8 transition-opacity duration-700 ${
              done ? "opacity-100" : "opacity-0"
            }`}
          >
            At [Your Facility Name], we provide more than just care — we offer a
            second home built on trust, warmth, and respect. With round-the-clock
            nursing support, personalized care plans, and a deeply compassionate
            team,
          </p>

          {/* Trust badges — also fade in with the paragraph */}
          <div
            className={`flex items-center gap-6 transition-opacity duration-700 delay-300 ${
              done ? "opacity-100" : "opacity-0"
            }`}
          >
            <Link
              href="#services"
              className="text-center font-bold text-white bg-[#D4C0B0] px-4 py-4 rounded-[12px] flex items-center gap-3"
            >
              Schedule a visit
              <svg
                viewBox="0 0 16 16"
                fill="none"
                className="w-3.5 h-3.5"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  d="M3 13L13 3M13 3H7M13 3v6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
            <div className="flex -space-x-2">
              {[
                "/images/satisfy-client-img-1.jpg",
                "/images/satisfy-client-img-2.jpg",
                "/images/satisfy-client-img-3.jpg",
                "/images/satisfy-client-img-4.jpg",
              ].map((src, i) => (
                <img
                  key={i}
                  src={src}
                  alt={`Customer ${i + 1}`}
                  className="w-12 h-12 rounded-full border-2 border-white object-cover"
                />
              ))}
            </div>
            <div>
              <p className="text-white text-lg font-semibold">
                <span className="text-[#D4C0B0] text-xl italic">5k+</span> Our
                Customers <br />
                Satisfactions
              </p>
            </div>
          </div>
        </div>

        {/* Spinning badge */}
        <div className="relative w-50 text-white h-50 flex-shrink-0 hidden md:flex items-center justify-center">
          <svg
            viewBox="0 0 100 100"
            className="w-full h-full animate-spin"
            style={{ animationDuration: "10s" }}
          >
            <defs>
              <path
                id="footer-circle"
                d="M 50,50 m -35,0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0"
              />
            </defs>
            <circle cx="50" cy="50" r="48" fill="#f3c4c4" />
            <text fontSize="9" fill="#2C1810" fontWeight="500" letterSpacing="2.5">
              <textPath href="#footer-circle">
                Book Appointment • Book Appointment •
              </textPath>
            </text>
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-15 h-15 rounded-full bg-[#f3c4c4] text-white flex items-center justify-center">
              <img src="/logos/logo.svg" alt="LOGO" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}