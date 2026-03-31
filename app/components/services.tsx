import Link from "next/link";

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
  return (
    <section id="services" className="py-24 bg-[#F0EDE6] rounded-[16px]">
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-14">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="w-2 h-2 rounded-full bg-[#C97B63] inline-block" />
            <span className="text-2xl font-garamond text-[#C97B63] font-medium">Our services</span>
          </div>
          <h2 className="font-jakarta font-semibold text-5xl text-[#2C1810] leading-tight">
            Care services that prioritize
          </h2>
          <h2 className="font-garamond text-5xl text-[#2C1810] leading-tight mt-1">
            health and happiness
          </h2>
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
          {services.map((s) => (
            <div
              key={s.title}
              className="bg-white rounded-2xl p-7 flex flex-col gap-5 shadow-sm hover:shadow-md transition-shadow"
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
                        <path
                          d="M3 8l3.5 3.5L13 5"
                          stroke="#C97B63"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
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

        {/* Bottom CTA bar */}
        <div className="flex items-center justify-center gap-3">
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