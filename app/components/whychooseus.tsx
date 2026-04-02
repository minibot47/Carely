"use client";

import { useEffect, useRef, useState } from "react";

const reasons = [
  "Lack of Time and Energy to Provide 24/7 Care",
  "Inadequate Medical Supervision at Home",
  "Unsafe or Inaccessible Home Environments",
  "Declining Memory and Cognitive Health",
];

const highlights = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth={1.5} className="w-6 h-6">
        <circle cx="8" cy="8" r="2" /><circle cx="16" cy="8" r="2" />
        <circle cx="8" cy="16" r="2" /><circle cx="16" cy="16" r="2" />
      </svg>
    ),
    title: "Resident-First Philosophy",
    desc: "We treat every individual with the same love and respect",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth={1.5} className="w-6 h-6">
        <rect x="3" y="8" width="18" height="12" rx="2" />
        <path d="M7 8V6a5 5 0 0110 0v2" strokeLinecap="round" />
      </svg>
    ),
    title: "24/7 Skilled Nursing",
    desc: "Our experienced team delivers round-the-clock medical support",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth={1.5} className="w-6 h-6">
        <path d="M12 21C12 21 4 13.5 4 8a8 8 0 0116 0c0 5.5-8 13-8 13z" />
        <circle cx="12" cy="8" r="2" fill="white" stroke="none" />
      </svg>
    ),
    title: "Compassionate Team",
    desc: "From nurses to caregivers to kitchen staff — everyone is trained.",
  },
];

const LINE_1 = "Exceptional senior care with";
const LINE_2 = "heart and expertise";

export default function WhyChooseUs() {
  const sectionRef = useRef(null);

  // Typewriter
  const [line1, setLine1] = useState("");
  const [line2, setLine2] = useState("");
  const [typingLine, setTypingLine] = useState<1 | 2 | "done">(1);

  // Slide-up refs
  const titleBlockRef = useRef(null);
  const reasonRefs = useRef<(HTMLDivElement | null)[]>([]);
  const highlightRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Typewriter fires when section enters view
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
              else { clearInterval(t2); setTypingLine("done"); }
            }, 40);
          }
        }, 40);
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  // Slide-up for title block, reasons, and highlights
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

    if (titleBlockRef.current) observer.observe(titleBlockRef.current);
    reasonRefs.current.forEach((r) => r && observer.observe(r));
    highlightRefs.current.forEach((r) => r && observer.observe(r));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="why-choose-us" ref={sectionRef} className="py-24 px-10 bg-white">
      <div className="max-w-[1440px] mx-auto mt-10">

        <div className="flex gap-12 mb-12">

          {/* Left — typewriter heading + slide-up description */}
          <div className="w-[55%]">
            <div className="flex items-center gap-2 mb-5">
              <span className="w-2 h-2 rounded-full bg-[#C97B63]" />
              <span className="text-2xl text-[#C97B63] font-medium font-garamond">Why Choose Us</span>
            </div>

            <h2 className="font-jakarta font-semibold text-5xl text-[#2C1810] leading-tight mb-2 min-h-[7rem]">
              {line1}
              {typingLine === 1 && <span className="animate-pulse text-[#C97B63]">|</span>}
              {(typingLine === 2 || typingLine === "done") && (
                <>
                  <br />
                  <span className="font-garamond font-normal">
                    {line2}
                    {typingLine === 2 && <span className="animate-pulse text-[#C97B63]">|</span>}
                  </span>
                </>
              )}
            </h2>

            {/* Description slides up after typing */}
            <div
              ref={titleBlockRef}
              className="translate-y-16 opacity-0 transition-all duration-700 ease-out"
            >
              <p className="text-sm text-[#9C8070] leading-relaxed w-full">
                Choosing the right care home is more than a decision — it's a commitment
                to your loved one's safety, comfort, and happiness. We combine medical
                expertise with heartfelt compassion to create a place they can truly call home.
              </p>
            </div>
          </div>

          {/* Right — reasons slide in staggered */}
          <div className="flex flex-col justify-center gap-4">
            {reasons.map((r, idx) => (
              <div
                key={r}
                ref={(el) => { reasonRefs.current[idx] = el; }}
                className="flex items-start gap-3 translate-y-16 opacity-0 transition-all duration-700 ease-out"
                style={{ transitionDelay: `${idx * 120}ms` }}
              >
                <span className="w-6 h-6 rounded-full bg-[#F2DDD3] flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg viewBox="0 0 16 16" fill="none" className="w-3.5 h-3.5">
                    <path d="M3 8l3.5 3.5L13 5" stroke="#C97B63" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                <span className="text-lg text-[#5C4033]">{r}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Image card */}
        <div className="relative rounded-3xl overflow-hidden w-full border-t-2 border-[#C97B63]/30">
          <img
            src="/images/why-choose-us-img.jpg"
            alt="Caregiver with senior resident"
            className="w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-[#2E2018]/20" />

          {/* Play button with pulsing rings */}
          <button
            aria-label="Play video"
            className="absolute inset-0 flex items-center justify-center group"
          >
            <div className="relative flex items-center justify-center">
              <span className="absolute w-24 h-24 rounded-full bg-[#C97B63]/20 animate-ping" />
              <span className="absolute w-20 h-20 rounded-full bg-[#C97B63]/25 animate-ping" style={{ animationDelay: "0.4s" }} />
              <div className="relative w-16 h-16 rounded-full bg-[#C97B63]/60 backdrop-blur-sm flex items-center justify-center border border-white/30 group-hover:bg-[#C97B63]/80 transition-colors z-10">
                <svg viewBox="0 0 24 24" fill="white" className="w-6 h-6 ml-1">
                  <path d="M5 3l14 9-14 9V3z" />
                </svg>
              </div>
            </div>
          </button>

          {/* Bottom highlights with top border */}
          <div className="absolute bottom-0 left-0 right-0 bg-linear-to-t from-[#2E2018]/80 to-transparent pb-8 px-8">
            <div className="grid sm:grid-cols-3 gap-6 w-[90%] m-auto border-t-[0.1px] border-white pt-12">
              {highlights.map((h, idx) => (
                <div
                  key={h.title}
                  ref={(el) => { highlightRefs.current[idx] = el; }}
                  className="flex items-start gap-4 translate-y-16 opacity-0 transition-all duration-700 ease-out"
                  style={{ transitionDelay: `${idx * 150}ms` }}
                >
                  <div className="w-12 h-12 rounded-full bg-[#C97B63]/80 flex items-center justify-center shrink-0">
                    {h.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-lg mb-1">{h.title}</h4>
                    <p className="text-white/70 text-sm leading-relaxed">{h.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}