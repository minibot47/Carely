"use client";
import { useState, useEffect, useRef } from "react";

const testimonials = [
  {
    quote: "After my father had a fall at home, we knew he needed more help than we could give. We were worried about the transition, but the team at [Facility Name] made it so smooth. From the first day.",
    name: "Jenny Wilson",
    avatar: "/images/satisfy-client-img-1.jpg",
  },
  {
    quote: "When I moved in, I thought I was giving up my independence. But what I found was a new chapter. I've joined the painting club, made friends over tea, and even started doing yoga again.",
    name: "Sophia Reynolds",
    avatar: "/images/satisfy-client-img-2.jpg",
  },
  {
    quote: "The care here is unlike anything I expected. Every staff member knows my name, my story, and what makes me smile.",
    name: "Robert James",
    avatar: "/images/satisfy-client-img-3.jpg",
  },
  {
    quote: "The care here is unlike anything I expected. Every staff member knows my name, my story, and what makes me smile.",
    name: "Robert James",
    avatar: "/images/satisfy-client-img-4.jpg",
  },
];

const stats = [
  { value: 250, label: "Happy Residents" },
  { value: 40, label: "Trained Caregivers & Nurses" },
  { value: 200, label: "Activities Hosted Monthly" },
];

const logos = ["Logoipsum", "Logoipsum", "Logoipsum", "Logoipsum", "Logoipsum"];

const LINE_1 = "What families say about our";
const LINE_2 = "compassionate care";

const StarRating = () => (
  <div className="flex gap-1 mb-5">
    {[...Array(5)].map((_, i) => (
      <svg key={i} className="w-5 h-5 text-[#C97B63] fill-current" viewBox="0 0 20 20">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ))}
  </div>
);

const QuoteIcon = () => (
  <svg className="w-8 h-8 text-[#C97B63] opacity-70" fill="currentColor" viewBox="0 0 24 24">
    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
  </svg>
);

// Plain count-up counter
function Counter({ value }: { value: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || started.current) return;

        started.current = true;

        let start = 0;
        const duration = 1500; // ms
        const startTime = performance.now();

        const animate = (currentTime: number) => {
          const progress = Math.min((currentTime - startTime) / duration, 1);

          const currentValue = Math.floor(progress * value);
          setCount(currentValue);

          if (progress < 1) {
            requestAnimationFrame(animate);
          } else {
            setCount(value); // ensure exact final value
          }
        };

        requestAnimationFrame(animate);
      },
      { threshold: 0.3 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, [value]);

  return <div ref={ref}>{count}</div>;
}

export default function Testimonials() {
  const [page, setPage] = useState(0);
  const sectionRef = useRef(null);

  // Typewriter
  const [line1, setLine1] = useState("");
  const [line2, setLine2] = useState("");
  const [typingLine, setTypingLine] = useState<1 | 2 | "done">(1);

  // Testimonial auto-slide
  useEffect(() => {
    const interval = setInterval(() => {
      setPage((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

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

  const visiblePair = [
    testimonials[page % testimonials.length],
    testimonials[(page + 1) % testimonials.length],
  ];

  return (
    <section ref={sectionRef} className="py-24 bg-[#47372d] rounded-[16px] mb-24">
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <div className="text-center mb-14">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="w-2 h-2 rounded-full bg-[#C97B63]" />
            <span className="text-lg text-white font-lora font-medium">Testimonials</span>
          </div>

          {/* Typewriter heading */}
          <div className="min-h-[7rem]">
            <h2 className="font-jakarta text-4xl md:text-5xl text-white leading-tight">
              {line1}
              {typingLine === 1 && <span className="animate-pulse text-[#C97B63]">|</span>}
            </h2>
            {(typingLine === 2 || typingLine === "done") && (
              <h2 className="font-lora italic text-4xl md:text-5xl text-white leading-tight">
                {line2}
                {typingLine === 2 && <span className="animate-pulse text-[#C97B63]">|</span>}
              </h2>
            )}
          </div>
        </div>

        {/* MAIN */}
        <div className="grid lg:grid-cols-[1fr_380px] gap-6">

          {/* TESTIMONIALS */}
          <div className="bg-[#3D2B1F] rounded-2xl p-8">
            <div
              key={page}
              className="grid md:grid-cols-2 gap-6 transition-opacity duration-500"
            >
              {visiblePair.map((t, i) => (
                <div key={i} className="flex flex-col gap-4">
                  <StarRating />
                  <p className="text-white text-sm">"{t.quote}"</p>
                  <div className="flex items-center justify-between mt-4 pt-4 border-t border-[#5C4033]">
                    <div className="flex items-center gap-3">
                      <img src={t.avatar} className="w-10 h-10 rounded-full object-cover" alt={t.name} />
                      <span className="text-white text-sm font-bold">{t.name}</span>
                    </div>
                    <QuoteIcon />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* STATS */}
          <div className="relative rounded-2xl overflow-hidden">
            <div className="absolute inset-0">
              <img src="/images/testimonial-img.jpg" className="object-cover w-full h-full" alt="testimonial" />
            </div>
            <div className="absolute inset-0 bg-black/50" />
            <div className="relative z-10 p-8 space-y-6">
              {stats.map((s, i) => (
                <div key={i}>
                  <div className="text-5xl text-white font-bold">
                    <Counter value={s.value} />
                  </div>
                  <div className="text-sm text-[#D4C0B0]">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* BOTTOM TEXT */}
        <p className="text-center text-white font-bold text-xl mt-14 mb-10">
          Real Stories From Residents and Their
          <br />Families
        </p>

        {/* LOGOS — CSS marquee, no framer */}
        <div className="overflow-hidden">
          <div
            className="flex gap-10 w-max animate-marquee"
          >
            {[...logos, ...logos].map((logo, i) => (
              <div key={i} className="text-[#9C7060] whitespace-nowrap">{logo}</div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}