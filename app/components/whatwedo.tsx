import Link from "next/link";

const services = [
  {
    title: "Assisted Living",
    desc: "Help with daily tasks like bathing, dressing, and meals, while encouraging",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth={1.5} className="w-5 h-5">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path d="M8 21h8M12 17v4" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Post-Acute",
    desc: "Clean, sanitized spaces that meet the highest standards of spa hygiene.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth={1.5} className="w-5 h-5">
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 3" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Skilled Nursing",
    desc: "24/7 professional care for complex medical conditions and post-hospital recovery.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth={1.5} className="w-5 h-5">
        <ellipse cx="12" cy="12" rx="10" ry="6" />
        <ellipse cx="12" cy="12" rx="10" ry="6" transform="rotate(60 12 12)" />
        <ellipse cx="12" cy="12" rx="10" ry="6" transform="rotate(120 12 12)" />
      </svg>
    ),
  },
  {
    title: "Customized Treatment",
    desc: "Physical, occupational, and speech therapy programs to help residents",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth={1.5} className="w-5 h-5">
        <path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z" />
      </svg>
    ),
  },
  {
    title: "Short-Term Stays",
    desc: "Flexible, temporary care options for families who need a break or for seniors",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth={1.5} className="w-5 h-5">
        <circle cx="12" cy="12" r="3" />
        <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2z" />
        <path d="M12 2v4M12 18v4M2 12h4M18 12h4" />
      </svg>
    ),
  },
  {
    title: "Nutritional",
    desc: "Flexible, temporary care options for families who need a break or for seniors",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth={1.5} className="w-5 h-5">
        <circle cx="11" cy="11" r="8" />
        <path d="M21 21l-4.35-4.35" strokeLinecap="round" />
      </svg>
    ),
  },
];

export default function WhatWeDo() {
  return (
    <section id="what-we-do" className="py-24 px-10 bg-white mt-10">
      <div className="max-w-[1440px] m-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* ── Left col ── */}
          <div className="lg:sticky lg:top-28">
            {/* Label */}
            <div className="flex items-center gap-2 mb-5">
              <span className="w-2 h-2 rounded-full bg-[#C97B63]" />
              <span className="text-2xl text-[#C97B63] font-garamond font-medium">What we do</span>
            </div>

            {/* Heading */}
            <h2 className="font-jarkata text-5xl font-semibold text-[#2C1810] leading-tight mb-2">
              Comprehensive elderly care <span className="font-garamond font-thin">for every life stage</span>
            </h2>


            {/* Body */}
            <div className="flex items-start gap-3 mb-10">
              <span className="w-2 h-2 rounded-full bg-[#C97B63] mt-2 flex-shrink-0" />
              <p className="text-sm text-[#9C8070] leading-relaxed">
                We provide personalized care that goes beyond daily support. From assisted
                living and skilled nursing to memory care and short-term stays,
              </p>
            </div>

            {/* CTA */}
            <Link
              href="#contact"
              className="inline-flex items-center gap-2 bg-[#C97B63] text-white px-6 py-3 rounded-xl text-sm font-semibold hover:bg-[#A85F48] transition-colors"
            >
              Contact Us
              <svg viewBox="0 0 16 16" fill="none" className="w-4 h-4" stroke="currentColor" strokeWidth="1.5">
                <path d="M3 13L13 3M13 3H6M13 3v7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </div>

          {/* ── Right col — service grid ── */}
          <div className="grid grid-cols-2 gap-x-8 gap-y-10">
            {services.map((s) => (
              <div key={s.title} className="flex gap-4 items-start group">
                {/* Icon circle */}
                <div className="w-12 h-12 rounded-full bg-[#E8C5B5] flex items-center justify-center flex-shrink-0 group-hover:bg-[#C97B63] transition-colors">
                  {/* Re-colour icon stroke on hover via parent */}
                  <div className="[&_svg]:stroke-[#C97B63] group-hover:[&_svg]:stroke-white transition-colors">
                    {s.icon}
                  </div>
                </div>

                {/* Text */}
                <div>
                  <h3 className="font-bold text-[#2C1810] text-xl mb-1.5">{s.title}</h3>
                  <p className="text-normal text-[#9C8070] leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}