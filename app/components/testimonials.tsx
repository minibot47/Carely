"use client";
import { useState, useEffect } from "react";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";

const testimonials = [
  {
    quote:
      "After my father had a fall at home, we knew he needed more help than we could give. We were worried about the transition, but the team at [Facility Name] made it so smooth. From the first day.",
    name: "Jenny Wilson",
    avatar: "/images/satisfy-client-img-1.jpg",
  },
  {
    quote:
      "When I moved in, I thought I was giving up my independence. But what I found was a new chapter. I've joined the painting club, made friends over tea, and even started doing yoga again.",
    name: "Sophia Reynolds",
    avatar: "/images/satisfy-client-img-2.jpg",
  },
  {
    quote:
      "The care here is unlike anything I expected. Every staff member knows my name, my story, and what makes me smile.",
    name: "Robert James",
    avatar: "/images/satisfy-client-img-3.jpg",
  },
  {
    quote:
      "The care here is unlike anything I expected. Every staff member knows my name, my story, and what makes me smile.",
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

// Counter component
const Counter = ({ value }: { value: number }) => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.floor(latest));

  useEffect(() => {
    const controls = animate(count, value, {
      duration: 2,
      ease: "easeOut",
    });

    return controls.stop;
  }, [value]);

  return <motion.span>{rounded}</motion.span>;
};

export default function Testimonials() {
  const [page, setPage] = useState(0);

  // AUTO SLIDE
  useEffect(() => {
    const interval = setInterval(() => {
      setPage((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const visiblePair = [
    testimonials[page % testimonials.length],
    testimonials[(page + 1) % testimonials.length],
  ];

  const heading = "What families say about our compassionate care";

  return (
    <section className="py-24 bg-[#47372d] rounded-[16px] mb-24">
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <div className="text-center mb-14">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="w-2 h-2 rounded-full bg-[#C97B63]" />
            <span className="text-sm text-[#C97B63] italic font-medium">
              Testimonials
            </span>
          </div>

          {/* TYPEWRITER */}
          <h2 className="font-jarkata text-4xl md:text-5xl text-white leading-tight">
            {heading.split("").map((char, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: i * 0.03 }}
              >
                {char}
              </motion.span>
            ))}
          </h2>
        </div>

        {/* MAIN */}
        <div className="grid lg:grid-cols-[1fr_380px] gap-6">

          {/* TESTIMONIALS */}
          <div className="bg-[#3D2B1F] rounded-2xl p-8">
            <motion.div
              key={page}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="grid md:grid-cols-2 gap-6"
            >
              {visiblePair.map((t, i) => (
                <div key={i} className="flex flex-col gap-4">
                  <StarRating />
                  <p className="text-white text-sm">"{t.quote}"</p>

                  <div className="flex items-center justify-between mt-4 pt-4 border-t border-[#5C4033]">
                    <div className="flex items-center gap-3">
                      <img
                        src={t.avatar}
                        className="w-10 h-10 rounded-full object-cover"
                      />
                      <span className="text-white text-sm font-bold">
                        {t.name}
                      </span>
                    </div>
                    <QuoteIcon />
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* STATS */}
          <div className="relative rounded-2xl overflow-hidden">
            <div className="absolute inset-0">
              <img src="/images/testimonial-img.jpg" className="object-cover w-full h-full" />
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
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center text-white font-bold text-xl mt-14 mb-10"
        >
          Real Stories From Residents and Their
          <br />
          Families
        </motion.p>

        {/* LOGOS */}
        <div className="overflow-hidden">
          <motion.div
            className="flex gap-10"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              repeat: Infinity,
              duration: 10,
              ease: "linear",
            }}
          >
            {[...logos, ...logos].map((logo, i) => (
              <div key={i} className="text-[#9C7060] whitespace-nowrap">
                {logo}
              </div>
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  );
}