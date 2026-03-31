"use client";
import { useState } from "react";

const testimonials = [
  {
    quote:
      "After my father had a fall at home, we knew he needed more help than we could give. We were worried about the transition, but the team at [Facility Name] made it so smooth. From the first day.",
    name: "Jenny Wilson",
    initials: "JW",
    avatar: "/images/satisfy-client-img-1.jpg"
  },
  {
    quote:
      "When I moved in, I thought I was giving up my independence. But what I found was a new chapter. I've joined the painting club, made friends over tea, and even started doing yoga again.",
    name: "Sophia Reynolds",
    avatar: "/images/satisfy-client-img-2.jpg"
  },
  {
    quote:
      "The care here is unlike anything I expected. Every staff member knows my name, my story, and what makes me smile.",
    name: "Robert James",
    avatar: "/images/satisfy-client-img-3.jpg"
  },
  {
    quote:
      "The care here is unlike anything I expected. Every staff member knows my name, my story, and what makes me smile.",
    name: "Robert James",
    avatar: "/images/satisfy-client-img-4.jpg"
  },
  {
    quote:
      "The care here is unlike anything I expected. Every staff member knows my name, my story, and what makes me smile.",
    name: "Robert James",
    initials: "RJ",
    avatar: "/images/author-2.jpg"
  },
  {
    quote:
      "The care here is unlike anything I expected. Every staff member knows my name, my story, and what makes me smile.",
    name: "Robert James",
    initials: "RJ",
    avatar: "/images/author-3.jpg"
  },
];

const stats = [
  { value: "250+", label: "Happy Residents" },
  { value: "40+", label: "Trained Caregivers & Nurses" },
  { value: "200+", label: "Activities Hosted Monthly" },
];

const logos = ["Logoipsum", "Logoipsum", "Logoipsum", "Logoipsum", "Logoipsum", "Logoipsum"];

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

export default function Testimonials() {
  const [page, setPage] = useState(0);
  const totalPages = testimonials.length - 1;

  const visiblePair = [
    testimonials[page % testimonials.length],
    testimonials[(page + 1) % testimonials.length],
  ];

  return (
    <section className="py-24 bg-[#47372d] rounded-[16px] mb-24">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-14 relative">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="w-2 h-2 rounded-full bg-[#C97B63]" />
            <span className="text-sm text-[#C97B63] italic font-medium">Testimonials</span>
          </div>
          <h2 className="font-playfair text-4xl md:text-5xl text-white leading-tight">
            What families say about our
          </h2>
          <h2 className="font-playfair text-4xl md:text-5xl italic text-white leading-tight">
            compassionate care
          </h2>
        </div>

        {/* Main content row */}
        <div className="grid lg:grid-cols-[1fr_380px] gap-6 items-stretch">

          {/* Left — testimonial panel */}
          <div className="bg-[#3D2B1F] rounded-2xl p-8 flex flex-col justify-between">
            {/* Two testimonials side by side */}
            <div className="grid md:grid-cols-2 gap-6 divide-x divide-[#5C4033]">
              {visiblePair.map((t, i) => (
                <div key={t.name} className={`flex flex-col gap-4 ${i === 1 ? "pl-2" : "pr-4"}`}>
                  <StarRating />
                  <p className="text-white text-sm leading-relaxed flex-1">
                    "{t.quote}"
                  </p>
                  <div className="flex items-center justify-between mt-4 pt-4 border-t border-[#5C4033]">
                    <div className="flex items-center gap-3">
                      {/* Avatar placeholder */}
                      <div className="w-10 h-10 rounded-full bg-[#C97B63]/40 flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
                        <img src={t.avatar} alt={t.name} className="object-cover rounded-full" />
                      </div>
                      <span className="font-bold text-white text-sm">{t.name}</span>
                    </div>
                    <QuoteIcon />
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination dots */}
            <div className="flex items-center gap-2 mt-8">
              {Array.from({ length: totalPages }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => setPage(i)}
                  className={`rounded-full transition-all ${
                    page === i
                      ? "w-6 h-3 bg-[#C97B63]"
                      : "w-3 h-3 bg-[#5C4033] hover:bg-[#8B6355]"
                  }`}
                  aria-label={`Page ${i + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Right — stats over image */}
          <div className="relative rounded-2xl overflow-hidden min-h-[360px]">
            {/* Background image placeholder */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#6B4C3B] to-[#2E1A10]">
              <img src="/images/testimonial-img.jpg" alt="Senior care"  className="object-cover" />
            </div>
            {/* Dark overlay */}
            <div className="absolute inset-0 bg-[#2E1A10]/60" />

            {/* Stats */}
            <div className="relative z-10 flex flex-col justify-center h-full p-8 gap-8">
              {stats.map((s) => (
                <div key={s.label}>
                  <div className="font-playfair text-5xl font-bold text-white leading-none mb-1">
                    {s.value}
                  </div>
                  <div className="text-[#D4C0B0] text-sm font-semibold">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Real stories tagline */}
        <p className="text-center text-white font-bold text-xl mt-14 mb-10 leading-snug">
          Real Stories From Residents and Their<br />Families
        </p>

        {/* Logo strip */}
        <div className="flex items-center justify-between gap-4 flex-wrap">
          {logos.map((logo, i) => (
            <div key={i} className="flex items-center gap-2 text-[#9C7060] hover:text-[#C97B63] transition-colors">
              <div className="w-8 h-8 rounded-full bg-[#5C4033] flex items-center justify-center">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-[#C97B63]">
                  <path d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <span className="text-sm font-semibold">{logo}</span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}