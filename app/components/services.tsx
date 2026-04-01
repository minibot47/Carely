"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const LINE_1 = "Care services that prioritize";
const LINE_2 = "health and happiness";

const services = [
  {
    title: "Assisted Living",
    desc: "This all-in-one treatment begins with a thorough skin.",
    features: ["Skin Soul Shine", "Your skin, only better."],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth={1.5} className="w-6 h-6">
        <circle cx="12" cy="12" r="3" />
        <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2z" />
        <path d="M12 2v4M12 18v4M2 12h4M18 12h4" />
      </svg>
    ),
  },
  {
    title: "Skilled Nursing Care",
    desc: "This all-in-one treatment begins with a thorough skin.",
    features: ["Skin Soul Shine", "Your skin, only better."],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth={1.5} className="w-6 h-6">
        <path d="M12 2v20M2 12h20" strokeLinecap="round" />
        <rect x="7" y="7" width="10" height="10" rx="1" />
      </svg>
    ),
  },
  {
    title: "Memory Care",
    desc: "This all-in-one treatment begins with a thorough skin.",
    features: ["Skin Soul Shine", "Your skin, only better."],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth={1.5} className="w-6 h-6">
        <path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6L12 2z" />
      </svg>
    ),
  },
  {
    title: "Short-Term Care",
    desc: "This all-in-one treatment begins with a thorough skin.",
    features: ["Skin Soul Shine", "Your skin, only better."],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth={1.5} className="w-6 h-6">
        <circle cx="12" cy="12" r="10" />
        <circle cx="12" cy="12" r="4" />
        <path d="M4.93 4.93l4.24 4.24M14.83 14.83l4.24 4.24M19.07 4.93l-4.24 4.24M9.17 14.83l-4.24 4.24" />
      </svg>
    ),
  },
];

export default function Services() {
  // Typewriter state
  const [line1, setLine1] = useState("");
  const [line2, setLine2] = useState("");
  const [typingLine, setTypingLine] = useState<1 | 2 | "done">(1);

  // Refs for scroll animations
  const sectionRef = useRef(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const ctaRef = useRef(null);

  // Trigger typewriter when section scrolls into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();

        // Type line 1 first
        let i = 0;
        const t1 = setInterval(() => {
          if (i < LINE_1.length) {
            setLine1(LINE_1.slice(0, i + 1));
            i++;
          } else {
            clearInterval(t1);
            setTypingLine(2);

            // Then type line 2
            let j = 0;
            const t2 = setInterval(() => {
              if (j < LINE_2.length) {
                setLine2(LINE_2.slice(0, j + 1));
                j++;
              } else {
                clearInterval(t2);
                setTypingLine("done");
              }
            }, 40);
          }
        }, 40);
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  // Slide-up for cards and CTA
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
      { threshold: 0.1 }
    );

    cardRefs.current.forEach((ref) => ref && observer.observe(ref));
    if (ctaRef.current) observer.observe(ctaRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="services" ref={sectionRef} className="py-24 bg-[#F0EDE6] rounded-[16px]">
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-14">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="w-2 h-2 rounded-full bg-[#C97B63] inline-block" />
            <span className="text-2xl font-garamond text-[#C97B63] font-medium">Our services</span>
          </div>

          {/* Line 1 — jakarta bold */}
          <h2 className="font-jakarta font-semibold text-5xl text-[#2C1810] leading-tight min-h-[3.5rem]">
            {line1}
            {typingLine === 1 && <span className="animate-pulse text-[#C97B63]">|</span>}
          </h2>

          {/* Line 2 — garamond italic, only appears after line 1 is done */}
          <h2 className="font-garamond text-5xl text-[#2C1810] leading-tight mt-1 min-h-[3.5rem]">
            {line2}
            {typingLine === 2 && <span className="animate-pulse text-[#C97B63]">|</span>}
          </h2>
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
          {services.map((s, idx) => (
            <div
              key={s.title}
              ref={(el) => { cardRefs.current[idx] = el; }}
              className="bg-white rounded-2xl p-7 flex flex-col gap-5 shadow-sm hover:shadow-md
                translate-y-16 opacity-0 transition-all duration-700 ease-out"
              style={{ transitionDelay: `${idx * 120}ms` }}
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-full bg-[#C97B63] flex items-center justify-center flex-shrink-0">
                {s.icon}
              </div>

              {/* Text */}
              <div>
                <h3 className="font-bold text-[#2C1810] text-lg mb-2">{s.title}</h3>
                <p className="text-sm text-[#9C8070] leading-relaxed">{s.desc}</p>
              </div>

              {/* Feature list */}
              <ul className="space-y-2">
                {s.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-[#5C4033]">
                    <span className="w-5 h-5 rounded-full bg-[#F2DDD3] flex items-center justify-center flex-shrink-0">
                      <svg viewBox="0 0 16 16" fill="none" className="w-3 h-3">
                        <path d="M3 8l3.5 3.5L13 5" stroke="#C97B63" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    {f}
                  </li>
                ))}
              </ul>

              {/* Learn more */}
              <div className="mt-auto pt-2">
                <Link
                  href="#"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#C97B63] hover:text-[#A85F48] transition-colors"
                >
                  Learn More
                  <svg viewBox="0 0 16 16" fill="none" className="w-4 h-4" stroke="currentColor" strokeWidth="1.5">
                    <path d="M3 13L13 3M13 3H6M13 3v7" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA — slides up after cards */}
        <div
          ref={ctaRef}
          className="flex items-center justify-center gap-3
            translate-y-16 opacity-0 transition-all duration-700 ease-out"
          style={{ transitionDelay: "500ms" }}
        >
          <span className="bg-[#C97B63] text-white text-xs font-semibold px-3 py-1 rounded-full">
            Free
          </span>
          <p className="text-sm text-[#5C4033]">
            Begin your path to total relaxation today.{" "}
            <Link
              href="#admissions"
              className="text-[#C97B63] italic underline underline-offset-2 hover:text-[#A85F48] transition-colors"
            >
              Book your free wellness consultation!
            </Link>
          </p>
        </div>

      </div>
    </section>
  );
}