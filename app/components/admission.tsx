"use client";

import { useEffect, useRef, useState } from "react";

const steps = [
  {
    title: "Schedule a Free Consultation",
    desc: "Speak with our care coordinator to discuss your loved one's health, lifestyle, and support needs",
    shape: "flower",
    img: "/images/fact-image-1.jpg",
  },
  {
    title: "Personalized Care",
    desc: "We conduct a comprehensive health and wellness evaluation to create a custom care plan tailored",
    shape: "asterisk",
    img: "/images/fact-image-4.jpg",
  },
  {
    title: "Choose Your Care Option",
    desc: "Select the best fit from our care programs — Assisted Living, Skilled Nursing, Memory Care, or Respite",
    shape: "plus",
    img: "/images/fact-image-2.jpg",
  },
  {
    title: "Move-In & Welcome Day",
    desc: "Once moved in, care begins immediately. We keep you regularly informed, monitor progress,",
    shape: "flower",
    img: "/images/fact-image-3.jpg",
  },
];

const LINE_1 = "Our admission process made";
const LINE_2 = "simple and supportive";

function FlowerShape({ label }: { label: string }) {
  return (
    <svg width="0" height="0" style={{ position: "absolute" }}>
      <defs>
        <clipPath id={`flower-${label}`} clipPathUnits="objectBoundingBox">
          <path d="M0.5,0.15 C0.5,0.15 0.65,0 0.8,0.1 C0.95,0.2 0.95,0.38 0.85,0.5 C0.95,0.62 0.95,0.8 0.8,0.9 C0.65,1 0.5,0.85 0.5,0.85 C0.5,0.85 0.35,1 0.2,0.9 C0.05,0.8 0.05,0.62 0.15,0.5 C0.05,0.38 0.05,0.2 0.2,0.1 C0.35,0 0.5,0.15 0.5,0.15Z" />
        </clipPath>
      </defs>
    </svg>
  );
}

function AsteriskShape({ label }: { label: string }) {
  return (
    <svg width="0" height="0" style={{ position: "absolute" }}>
      <defs>
        <clipPath id={`asterisk-${label}`} clipPathUnits="objectBoundingBox">
          <path d="M0.42,0 H0.58 V0.32 L0.83,0.1 L0.9,0.17 L0.68,0.42 H1 V0.58 H0.68 L0.9,0.83 L0.83,0.9 L0.58,0.68 V1 H0.42 V0.68 L0.17,0.9 L0.1,0.83 L0.32,0.58 H0 V0.42 H0.32 L0.1,0.17 L0.17,0.1 L0.42,0.32 Z" />
        </clipPath>
      </defs>
    </svg>
  );
}

function PlusShape({ label }: { label: string }) {
  return (
    <svg width="0" height="0" style={{ position: "absolute" }}>
      <defs>
        <clipPath id={`plus-${label}`} clipPathUnits="objectBoundingBox">
          <path d="M0.33,0 H0.67 V0.33 H1 V0.67 H0.67 V1 H0.33 V0.67 H0 V0.33 H0.33 Z" />
        </clipPath>
      </defs>
    </svg>
  );
}

function ShapedImage({
  shape,
  img,
  label,
  animRef,
}: {
  shape: string;
  img: string;
  label: string;
  animRef: (el: HTMLDivElement | null) => void;
}) {
  const clipId =
    shape === "asterisk"
      ? `asterisk-${label}`
      : shape === "plus"
      ? `plus-${label}`
      : `flower-${label}`;

  return (
    <div className="relative w-44 h-44 mx-auto">
      {shape === "flower" && <FlowerShape label={label} />}
      {shape === "asterisk" && <AsteriskShape label={label} />}
      {shape === "plus" && <PlusShape label={label} />}

      <div
        ref={animRef}
        className="w-full h-full translate-y-12 opacity-0 transition-all duration-700 ease-out"
        style={{ clipPath: `url(#${clipId})` }}
      >
        <img src={img} alt={label} className="w-full h-full object-cover" />
      </div>
    </div>
  );
}

export default function Admission() {
  const sectionRef = useRef(null);

  const [line1, setLine1] = useState("");
  const [line2, setLine2] = useState("");
  const [typingLine, setTypingLine] = useState<1 | 2 | "done">(1);

  const imgRefs = useRef<(HTMLDivElement | null)[]>([]);
  const textRefs = useRef<(HTMLDivElement | null)[]>([]);
  const arrowRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Typewriter
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

  // Slide-up for images, text, and arrows
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("translate-y-0", "opacity-100");
            entry.target.classList.remove("translate-y-12", "opacity-0");
          }
        });
      },
      { threshold: 0.1 }
    );

    imgRefs.current.forEach((r) => r && observer.observe(r));
    textRefs.current.forEach((r) => r && observer.observe(r));
    arrowRefs.current.forEach((r) => r && observer.observe(r));
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="admission" className="py-24 bg-white mt-10 mb-20">
      <div className="max-w-[1440px] m-auto px-6">

        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="w-2 h-2 rounded-full bg-[#C97B63]" />
            <span className="text-lg text-black font-lora italic font-medium">How It Work</span>
          </div>
          <div className="min-h-32">
            <h2 className="font-jarkata text-5xl font-bold text-[#2C1810] leading-tight">
              {line1}
              {typingLine === 1 && <span className="animate-pulse text-[#C97B63]">|</span>}
            </h2>
            {(typingLine === 2 || typingLine === "done") && (
              <h2 className="font-lora italic text-5xl  text-[#2C1810] leading-tight">
                {line2}
                {typingLine === 2 && <span className="animate-pulse text-[#C97B63]">|</span>}
              </h2>
            )}
          </div>
        </div>

        {/* Steps row */}
        <div className="flex flex-col lg:flex-row items-center justify-center">
          {steps.map((step, i) => (
            <div key={step.title} className="flex flex-col lg:flex-row items-center">

              {/* Step card */}
              <div className="flex flex-col items-center text-center w-[280px] sm:w-[320px] lg:w-[280px]">
                <ShapedImage
                  shape={step.shape}
                  img={step.img}
                  label={`step-${i}`}
                  animRef={(el) => { imgRefs.current[i] = el; }}
                />

                <div
                  ref={(el) => { textRefs.current[i] = el; }}
                  className="mt-6 px-4 lg:px-2 translate-y-12 opacity-0 transition-all duration-700 ease-out"
                  style={{ transitionDelay: `${i * 150 + 200}ms` }}
                >
                  <h3 className="font-bold text-[#2C1810] text-lg mb-3 leading-snug">{step.title}</h3>
                  <p className="text-base lg:text-lg text-[#9C8070] leading-relaxed">{step.desc}</p>
                </div>
              </div>

              {/* Arrow — horizontal on desktop, vertical on mobile */}
              {i < steps.length - 1 && (
                <div
                  ref={(el) => { arrowRefs.current[i] = el; }}
                  className="flex items-center justify-center shrink-0 translate-y-12 opacity-0 transition-all duration-700 ease-out my-4 lg:my-0"
                  style={{
                    marginTop: undefined,
                    transitionDelay: `${i * 150 + 100}ms`,
                  }}
                >
                  {/* Desktop arrow — horizontal curved */}
                  <svg className="hidden lg:block" width="56" height="40" viewBox="0 0 56 40" fill="none"
                    style={{ marginTop: "72px" }}
                  >
                    <path d="M4 30 Q28 4 52 20" stroke="#C97B63" strokeWidth="1.5" strokeLinecap="round" fill="none" />
                    <path d="M46 14 L52 20 L44 22" stroke="#C97B63" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                  </svg>

                  {/* Mobile/tablet arrow — pointing down */}
                  <svg className="block lg:hidden" width="40" height="56" viewBox="0 0 40 56" fill="none">
                    <path d="M10 4 Q36 28 20 52" stroke="#C97B63" strokeWidth="1.5" strokeLinecap="round" fill="none" />
                    <path d="M14 46 L20 52 L26 46" stroke="#C97B63" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                  </svg>
                </div>
              )}

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}