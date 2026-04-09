"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const TYPED_TEXT = "right here in Yaba, Lagos";

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
    <section className="relative min-h-screen px-5 pb-28 md:pb-20 2xl:px-32 2xl:py-16 overflow-hidden mt-2 mb-32 rounded-[16px] flex items-end">
      {/* Background with parallax */}
      <div
        ref={bgRef}
        className="absolute inset-0 will-change-transform"
        style={{ top: "-10%", height: "120%" }}
      >
        <img
          src="/images/post-3.jpg"
          alt="Senior care"
          className="object-cover object-top h-full w-full scale-100"
        />
        <div className="absolute inset-0 bg-linear-to-r from-[#2E2018]/10 via-[#2E2018]/20 to-transparent" />
      </div>

      {/* Bottom fade blur */}
      <div className="absolute bottom-0 left-0 right-0 h-62 bg-linear-to-t from-black/75 to-transparent backdrop-blur-[2px] [mask-image:linear-gradient(to_top,black_60%,transparent)]" />

      {/* Content */}
      <div className="relative z-10 w-full flex items-center h-full justify-between">
        <div className="w-full md:w-[80%] py-2">

          {/* Typewriter heading */}
          <h1 className="font-jakarta font-bold text-3xl md:text-5xl lg:text-6xl text-white leading-tight mb-6 md:mb-10">
          Boutique senior living, crafted with heart,{" "}
            <span className="font-lora italic font-medium text-4xl md:text-6xl">
              {displayed}
              {!done && <span className="animate-pulse text-[#f3c4c4]">|</span>}
            </span>
          </h1>

          {/* Paragraph fades in after typing finishes */}
          <p
            className={`text-white text-base md:text-lg font-medium mb-8 transition-opacity duration-700 ${
              done ? "opacity-100" : "opacity-0"
            }`}
          >
            At ElderNest Care, we blend hospitality with healthcare to create a place that feels like home, 
            while delivering professional, personal support every day.
          </p>

          {/* Trust badges */}
          <div
            className={`flex flex-wrap items-center gap-4 md:gap-8 transition-opacity mt-2 duration-700 delay-300 ${
              done ? "opacity-100" : "opacity-0"
            }`}
          >
            <Link
              href="#services"
              className="text-center font-bold text-white bg-[#E6A493] px-5 py-3 rounded-[12px] flex items-center gap-1"
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
                  className="w-10 h-10 rounded-full object-cover"
                />
              ))}
            </div>
            <div>
              <p className="text-white text-sm font-semibold mt-4">
                <span className="text-[#D4C0B0] text-lg font-jakarta font-semibold">5k+</span> Our
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
            className="w-full h-full"
            style={{ animation: "spin 10s linear infinite" }}
          >
            <defs>
              <path
                id="footer-circle"
                d="M 50,50 m -35,0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0"
              />
            </defs>
            <circle cx="50" cy="50" r="48" fill="#E6A493" />
            <text fontSize="10" fill="#FFFFFF" fontWeight="500" letterSpacing="2.5">
              <textPath href="#footer-circle">
                Book Appointment • Book Appointment •
              </textPath>
            </text>
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-20 h-20 rounded-full bg-[#f3c4c4] text-white flex items-center justify-center">
              <img src="/logos/logo.svg" alt="LOGO" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}