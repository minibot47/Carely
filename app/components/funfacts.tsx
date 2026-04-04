"use client";

import { MapPin } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const reasons = [
  "Lack of Time for Full-Time Care",
  "Limited Medical Knowledge at Home",
  "Lack of Social Interaction",
];

const stats = [
  { value: 300, suffix: "+", label: "Happy Residents" },
  { value: 50, suffix: "+", label: "Team Members" },
  { value: 15, suffix: "+", label: "Years of Trusted" },
];

const LINE_1 = "Celebrating moments that";
const LINE_2 = "matter,";
const LINE_3 = "by the numbers";

export default function FunFacts() {
  const sectionRef = useRef(null);

  // Typewriter
  const [line1, setLine1] = useState("");
  const [line2, setLine2] = useState("");
  const [line3, setLine3] = useState("");
  const [typingLine, setTypingLine] = useState<1 | 2 | 3 | "done">(1);

  // Slide-up refs
  const bodyRef = useRef(null);
  const reasonRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Image reveal refs
  const img1Ref = useRef<HTMLDivElement>(null);
  const img2Ref = useRef<HTMLDivElement>(null);

  // Stats counting
  const statsRef = useRef<HTMLDivElement>(null);
  const [counts, setCounts] = useState(stats.map(() => 0));
  const [statsFired, setStatsFired] = useState(false);

  // Typewriter — fires when section enters view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();

        let i = 0;
        const t1 = setInterval(() => {
          if (i < LINE_1.length) { setLine1(LINE_1.slice(0, i + 1)); i++; }
          else {
            clearInterval(t1);
            setTypingLine(2);
            let j = 0;
            const t2 = setInterval(() => {
              if (j < LINE_2.length) { setLine2(LINE_2.slice(0, j + 1)); j++; }
              else {
                clearInterval(t2);
                setTypingLine(3);
                let k = 0;
                const t3 = setInterval(() => {
                  if (k < LINE_3.length) { setLine3(LINE_3.slice(0, k + 1)); k++; }
                  else { clearInterval(t3); setTypingLine("done"); }
                }, 40);
              }
            }, 40);
          }
        }, 40);
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  // Slide-up for body text + reasons
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

    if (bodyRef.current) observer.observe(bodyRef.current);
    reasonRefs.current.forEach((r) => r && observer.observe(r));
    return () => observer.disconnect();
  }, []);

// Image reveal — wipe in from left
useEffect(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          (entry.target as HTMLElement).style.clipPath = "inset(0 0% 0 0)";
        }
      });
    },
    { threshold: 0 } // 👈 fires as soon as even 1px enters the viewport
  );

  if (img1Ref.current) observer.observe(img1Ref.current);
  if (img2Ref.current) observer.observe(img2Ref.current);
  return () => observer.disconnect();
}, []);

  // Stats count-up
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || statsFired) return;
        setStatsFired(true);
        observer.disconnect();

        stats.forEach((s, idx) => {
          const duration = 1500;
          const steps = 60;
          const increment = s.value / steps;
          let current = 0;
          let step = 0;

          const timer = setInterval(() => {
            step++;
            current = Math.min(Math.round(increment * step), s.value);
            setCounts((prev) => {
              const next = [...prev];
              next[idx] = current;
              return next;
            });
            if (step >= steps) clearInterval(timer);
          }, duration / steps);
        });
      },
      { threshold: 0.3 }
    );

    if (statsRef.current) observer.observe(statsRef.current);
    return () => observer.disconnect();
  }, [statsFired]);

  return (
    <section ref={sectionRef} className="bg-[#333333] py-20 rounded-[16px]">
      <div className="max-w-[1440px] mx-auto px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-start">

          {/* ── Left column ── */}
          <div className="flex flex-col gap-8">
            {/* Label */}
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#C97B63]" />
              <span className="text-lg text-white font-medium font-lora italic italic">Our fun facts</span>
            </div>

            {/* Typewriter heading */}
            <div className="min-h-25">
              <h2 className="font-jarkata text-5xl text-white leading-tight">
                {line1}
                {typingLine === 1 && <span className="animate-pulse text-[#C97B63]">|</span>}
              </h2>
              {(typingLine === 2 || typingLine === 3 || typingLine === "done") && (
                <h2 className="font-jakarta text-5xl text-white leading-tight">
                  {line2}
                  {typingLine === 2 && <span className="animate-pulse text-[#C97B63]">|</span>}
                  {(typingLine === 3 || typingLine === "done") && (
                    <span className="font-lora italic italic">
                      {" "}{line3}
                      {typingLine === 3 && <span className="animate-pulse text-white]">|</span>}
                    </span>
                  )}
                </h2>
              )}
            </div>

            {/* Body text slides up */}
            <div
              ref={bodyRef}
              className="translate-y-16 opacity-0 transition-all duration-700 ease-out"
            >
              <p className="text-normal text-white leading-relaxed w-full">
                Every number at [Your Facility Name] tells a story — of care, connection,
                and the meaningful lives we've touched. From happy residents and compassionate
                staff to meals served and memories made,
              </p>
            </div>

            {/* Bottom photo — wipe in from left */}
            <div className="rounded-2xl overflow-hidden bg-linear-to-br from-[#6B4C3B] to-[#2E1A10]">
              <div
                ref={img2Ref}
                style={{
                  clipPath: "inset(0 100% 0 0)",
                  transition: "clip-path 1s ease",
                }}
              >
                <img src="/images/funfact2.jpg" alt="Nurse with resident" className="object-fill w-full" />
              </div>
            </div>
          </div>

          {/* ── Right column ── */}
          <div className="flex flex-col gap-8">
            {/* Top photo — wipe in from left */}
            <div className="rounded-2xl overflow-hidden bg-linear-to-br from-[#8B6355] to-[#4A3020]">
              <div
                ref={img1Ref}
                style={{
                  clipPath: "inset(0 100% 0 0)",
                  transition: "clip-path 1s ease 0.2s",
                }}
              >
                <img src="/images/funfact1.jpg" alt="Nurse with resident" className="object-cover w-full" />
              </div>
            </div>

            {/* Checklist + badge row */}
            <div className="flex items-start justify-between gap-6">
              {/* Reasons — staggered slide up */}
              <div className="flex flex-col gap-3">
                {reasons.map((r, idx) => (
                  <div
                    key={r}
                    ref={(el) => { reasonRefs.current[idx] = el; }}
                    className="flex items-center gap-3 translate-y-16 opacity-0 transition-all duration-700 ease-out"
                    style={{ transitionDelay: `${idx * 120}ms` }}
                  >
                    <span className="w-5 h-5 rounded-full bg-[#E6A493] flex items-center justify-center shrink-0">
                      <svg viewBox="0 0 16 16" fill="none" className="w-4 h-3">
                        <path d="M3 8l3.5 3.5L13 5" stroke="#000000" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    <span className="text-lg text-white">{r}</span>
                  </div>
                ))}
              </div>

              {/* Spinning badge */}
              <div className="relative w-28 h-28 shrink-0 hidden md:flex items-center justify-center">
                <svg viewBox="0 0 100 100" className="w-full h-full animate-spin" style={{ animationDuration: "10s" }}>
                  <defs>
                    <path id="footer-circle" d="M 50,50 m -35,0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0" />
                  </defs>
                  <circle cx="50" cy="50" r="48" fill="#E6A493" />
                  <text fontSize="10" fill="#FFFFFF" fontWeight="500" letterSpacing="2.5">
                    <textPath href="#footer-circle">
                      Book Appointment • Book Appointment •
                    </textPath>
                  </text>
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-10 h-10 rounded-full bg-[#C97B63] flex items-center justify-center">
                    <MapPin size={18} color="white" />
                  </div>
                </div>
              </div>
            </div>

            {/* Stats — count up from 0 */}
            <div
              ref={statsRef}
              className="grid grid-cols-3 gap-4 border-t border-[#5C4033] pt-8"
            >
              {stats.map((s, i) => (
                <div
                  key={s.label}
                  className={`${i < stats.length - 1 ? "border-r border-[#5C4033]" : ""} pr-4`}
                >
                  <div className="font-jakarta font-bold text-5xl text-[#C97B63] mb-1">
                    {counts[i]}{s.suffix}
                  </div>
                  <div className="text-lg text-white">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}