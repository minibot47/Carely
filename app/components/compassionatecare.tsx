"use client";

import { useEffect, useRef, useState } from "react";

const plans = [
  {
    name: "Basic Care",
    price: "₦29,000",
    unit: "Monthly",
    desc: "We believe great design is more than just visuals — it's a feeling.",
    features: [" Daily Wellness Check", " Group Enrichment Activities", " Home-Style Meals"],
    highlight: false,
  },
  {
    name: "Standard Care",
    price: "₦49,000",
    unit: "Monthly",
    desc: "We believe great design is more than just visuals — it's a feeling.",
    features: [" Everything in Basic", " Personalized Care Plan", " On-Call Health Professional"],
    highlight: true,
  },
  {
    name: "Premium Care",
    price: "₦99,000",
    unit: "Monthly",
    desc: "We believe great design is more than just visuals — it's a feeling.",
    features: [" Everything in Standard", " Dedicated Personal Caregiver", " Priority Medical Access"],
    highlight: false,
  },
];

const LINE_1 = "Compassionate care that won't";
const LINE_2 = "break your budget";

export default function CompassionateCare() {
  const sectionRef = useRef(null);

  // Typewriter
  const [line1, setLine1] = useState("");
  const [line2, setLine2] = useState("");
  const [typingLine, setTypingLine] = useState<1 | 2 | "done">(1);

  // Slide-up refs
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const bottomRefs = useRef<(HTMLDivElement | null)[]>([]);

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

  // Slide-up for cards and bottom items
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

    cardRefs.current.forEach((r) => r && observer.observe(r));
    bottomRefs.current.forEach((r) => r && observer.observe(r));
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 bg-[#F0EDE6] mt-10 mb-20 rounded-[16px]">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div className="w-full flex flex-col items-center justify-center">
            <div className="flex items-center gap-2 mb-5">
              <span className="w-2 h-2 rounded-full bg-[#C97B63]" />
              <span className="text-lg text-black font-lora italic font-medium">Pricing Plan</span>
            </div>

            {/* Typewriter heading */}
            <h2 className="w-full text-5xl text-center font-semibold min-h-32">
              {line1}
              {typingLine === 1 && (
                <span className="animate-pulse text-[#C97B63]">|</span>
              )}

              {line2 && (
                <>
                  <br />
                  <span className="font-lora italic italic italic font-thin">
                    {line2}
                    {typingLine === 2 && (
                      <span className="animate-pulse text-[#C97B63]">|</span>
                    )}
                  </span>
                </>
              )}
            </h2>
          </div>
        </div>

        {/* Cards — staggered slide up */}
        <div className="grid md:grid-cols-3 gap-8 max-w-[1440px]">
          {plans.map((plan, idx) => (
            <div
              key={plan.name}
              ref={(el) => { cardRefs.current[idx] = el; }}
              className={`rounded-2xl p-8 translate-y-16 opacity-0 transition-all duration-700 ease-out ${
                plan.highlight
                  ? "bg-[#2E2018] text-white"
                  : "bg-[#FAF8F5] border border-[#EDE5DB] text-[#2C1810]"
              }`}
              style={{ transitionDelay: `${idx * 150}ms` }}
            >
              <p className={`text-lg font-semibold mb-6 ${plan.highlight ? "text-[#E8C5B5]" : "text-[#C97B63]"}`}>
                {plan.name}
              </p>
              <p className={`text-sm mb-6 leading-relaxed ${plan.highlight ? "text-back" : "text-[#9C8070]"}`}>
                {plan.desc}
              </p>

              {/* Progress bar */}
              <div className={`h-1 rounded-full mb-6 ${plan.highlight ? "bg-[#C97B63]" : "bg-[#EDE5DB]"}`}>
                <div className="h-full w-3/4 rounded-full bg-[#C97B63]" />
              </div>

              <div className="flex items-end gap-1 mb-3">
                <span className="font-jarkata text-5xl">{plan.price}</span>
                <span className={`text-sm pb-2 px-1 py-3 rounded-[16px] flex items-center justify-center ${plan.highlight ? "text-[#B09080]" : "text-[#9C8070]"}`}>
                  {plan.unit}
                </span>
              </div>

              <ul className="space-y-2 mb-10 mt-5">
                {plan.features.map((f) => (
                  <li key={f} className={`flex items-center gap-5 text-lg ${plan.highlight ? "text-white" : "text-black"}`}>
                    <span className="w-6 h-6 rounded-full bg-[#C97B63]/20 flex items-center justify-center text-white text-lg shrink-0">
                      ✓
                    </span>
                    {f}
                  </li>
                ))}
              </ul>

              <a
                href="#admissions"
                className={`block text-center py-3 rounded-[8px] text-lg font-semibold transition-colors ${
                  plan.highlight
                    ? "bg-white text-black hover:bg-[#A85F48]"
                    : "bg-[#E6A493]  text-white hover:bg-[#C97B63] hover:text-white"
                }`}
              >
                Get started with Plan
              </a>
            </div>
          ))}
        </div>

        {/* Bottom items — staggered slide up */}
        <div className="w-full mt-10 flex items-center justify-center gap-5">
          {[
            { icon: "/icons/calender.svg", text: "Get 30 days free trial" },
            { icon: "/icons/dollars.svg", text: "No any hidden fees pay" },
            { icon: "/icons/time.svg", text: "You can cancel anytime" },
          ].map((item, idx) => (
            <div
              key={item.text}
              ref={(el) => { bottomRefs.current[idx] = el; }}
              className="flex gap-2 translate-y-16 opacity-0 transition-all duration-700 ease-out"
              style={{ transitionDelay: `${300 + idx * 120}ms` }}
            >
              <img src={item.icon} alt="icon" />
              <h2>{item.text}</h2>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}