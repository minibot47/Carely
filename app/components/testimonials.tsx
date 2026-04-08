"use client";
import { useState, useEffect, useRef } from "react";

const testimonials = [
  {
    quote: "We were nervous about placing Papa in a care facility, but ElderNest changed everything. The staff treated him like their own — with so much warmth and patience. We sleep better at night knowing he is in Yaba, safe and happy.",
    name: "Adaeze Okonkwo",
    avatar: "/images/satisfy-client-img-1.jpg",
  },
  {
    quote: "I didn't want to leave my house, but my children convinced me to try ElderNest. Now I don't want to leave ElderNest! The food is delicious, the people are kind, and I feel more alive than I have in years.",
    name: "Pa Emmanuel Fashola",
    avatar: "/images/satisfy-client-img-2.jpg",
  },
  {
    quote: "The level of professionalism here is unlike anything I've seen in Lagos. They sent us weekly updates on my mother's health, called us during her birthday, and always made us feel like partners in her care.",
    name: "Tunde Balogun",
    avatar: "/images/satisfy-client-img-3.jpg",
  },
  {
    quote: "My aunt has dementia and we were struggling to cope. ElderNest's team was not just skilled — they were gentle, understanding, and incredibly patient with her. It has been a true blessing for our family.",
    name: "Blessing Eze",
    avatar: "/images/satisfy-client-img-4.jpg",
  },
  {
    quote: "As someone who has lived in Lagos all my life, I didn't expect to find this level of care in Ikorodu. The environment is calm, the food is good, and the nurses genuinely care. I feel at home here.",
    name: "Alhaja Ramota Suleiman",
    avatar: "/images/satisfy-client-img-1.jpg",
  },
  {
    quote: "My siblings and I were skeptical at first — we didn't want Mama to feel abandoned. But Royal Medicare made her feel celebrated. They remembered her birthday and everything. We are so grateful.",
    name: "Ngozi Eze-Williams",
    avatar: "/images/satisfy-client-img-2.jpg",
  },
];

const stats = [
  { value: 250, label: "Happy Residents" },
  { value: 40, label: "Trained Caregivers & Nurses" },
  { value: 200, label: "Activities Hosted Monthly" },
];

const logos = [
  { icon: "/logos/logo-1.svg", name: "" },
  { icon: "/logos/logo-2.svg", name: "" },
  { icon: "/logos/logo-3.svg", name: "" },
  { icon: "/logos/logo-4.svg", name: "" },
  { icon: "/logos/logo-5.svg", name: "" },
  { icon: "/logos/logo-6.svg", name: "" },
];

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

function Counter({ value }: { value: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || started.current) return;
        started.current = true;
        const duration = 1500;
        const startTime = performance.now();
        const animate = (currentTime: number) => {
          const progress = Math.min((currentTime - startTime) / duration, 1);
          setCount(Math.floor(progress * value));
          if (progress < 1) requestAnimationFrame(animate);
          else setCount(value);
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
  const [logoPage, setLogoPage] = useState(0);
  const [fadeIn, setFadeIn] = useState(true);
  const [logoFadeIn, setLogoFadeIn] = useState(true);
  const sectionRef = useRef(null);

  const [line1, setLine1] = useState("");
  const [line2, setLine2] = useState("");
  const [typingLine, setTypingLine] = useState<1 | 2 | "done">(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setFadeIn(false);
      setTimeout(() => {
        setPage((prev) => (prev + 2) % testimonials.length);
        setFadeIn(true);
      }, 300);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setLogoFadeIn(false);
      setTimeout(() => {
        setLogoPage((prev) => (prev + 1) % logos.length);
        setLogoFadeIn(true);
      }, 300);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

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

  const totalDots = testimonials.length / 2;
  const activeDot = page / 2;

  return (
    <section ref={sectionRef} className="py-24 bg-[#47372d] rounded-[16px] mb-24">
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <div className="text-center mb-14">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="w-2 h-2 rounded-full bg-[#C97B63]" />
            <span className="text-lg text-white font-lora italic font-medium">Testimonials</span>
          </div>
          <div className="min-h-[5rem] lg:min-h-[7rem]">
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

        {/* MAIN GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-6 lg:gap-10">

          {/* TESTIMONIALS */}
          <div className="bg-[#757575] rounded-2xl p-8 flex flex-col">
            <div
              className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-stretch flex-1"
              style={{
                opacity: fadeIn ? 1 : 0,
                transition: "opacity 0.3s ease",
              }}
            >
              {visiblePair.map((t, i) => (
                <div key={i} className="flex flex-col justify-between h-full min-h-[220px]">
                  <div>
                    <StarRating />
                    <p className="text-white text-lg leading-relaxed">"{t.quote}"</p>
                  </div>
                  <div className="flex items-center justify-between mt-1 pt-4 border-t border-[#5C4033]">
                    <div className="flex items-center gap-3">
                      <img src={t.avatar} className="w-10 h-10 rounded-full object-cover" alt={t.name} />
                      <span className="text-white text-sm font-bold">{t.name}</span>
                    </div>
                    <img src='/icons/quote.svg' alt="quote" />
                  </div>
                </div>
              ))}
            </div>

            {/* DOTS */}
            <div className="flex justify-center gap-2 mt-6">
              {[...Array(totalDots)].map((_, i) => (
                <button
                  key={i}
                  onClick={() => setPage(i * 2)}
                  className={`rounded-full transition-all duration-300 ${
                    i === activeDot
                      ? "w-5 h-2.5 bg-[#C97B63]"
                      : "w-2.5 h-2.5 bg-[#5C4033]"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* STATS */}
          <div className="relative rounded-2xl overflow-hidden min-h-[320px] lg:min-h-0">
            <div className="absolute inset-0">
              <img src="/images/testimonial-bg.jpg" className="object-cover w-full h-full" alt="testimonial" />
            </div>
            <div className="absolute inset-0 bg-black/50" />
            <div className="relative z-10 p-8 space-y-6">
              {stats.map((s, i) => (
                <div key={i} className="border-b-[0.1px] border-gray-100/10">
                  <div className="text-5xl text-white font-bold flex items-end gap-0.5">
                    <Counter value={s.value} />
                    <span>+</span>
                  </div>
                  <div className="text-lg text-white font-bold mt-1">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* BOTTOM TEXT */}
        <p className="text-center text-white font-jakarta font-bold text-base lg:text-xl mt-10 lg:mt-14 mb-8 lg:mb-10">
          Real Stories From Residents and Their
          <br />Families
        </p>

        {/* LOGOS */}
        <div
          style={{
            opacity: logoFadeIn ? 1 : 0,
            transition: "opacity 0.3s ease",
          }}
        >
          {/* Mobile — 3 logos */}
          {/* <div className="grid grid-cols-3 gap-6 sm:hidden">
            {[...Array(3)].map((_, i) => {
              const logo = logos[(logoPage + i) % logos.length];
              return (
                <div key={i} className="flex items-center justify-center">
                  <img src={logo.icon} alt="logo" className="h-8 w-auto object-contain" />
                </div>
              );
            })}
          </div> */}

          {/* Tablet — 4 logos */}
          {/* <div className="hidden sm:flex lg:hidden justify-center gap-8">
            {[...Array(4)].map((_, i) => {
              const logo = logos[(logoPage + i) % logos.length];
              return (
                <div key={i} className="flex items-center justify-center">
                  <img src={logo.icon} alt="logo" className="h-10 w-auto object-contain" />
                </div>
              );
            })}
          </div> */}

          {/* Desktop — all 6 logos */}
          {/* <div className="hidden lg:flex gap-10 justify-center">
            {[...Array(6)].map((_, i) => {
              const logo = logos[(logoPage + i) % logos.length];
              return (
                <div key={i} className="flex items-center gap-2">
                  <img src={logo.icon} alt="logo" className="h-14 w-auto object-contain" />
                  {logo.name && <span className="font-semibold text-[#9C7060]">{logo.name}</span>}
                </div>
              );
            })}
          </div> */}
        </div>

      </div>
    </section>
  );
}