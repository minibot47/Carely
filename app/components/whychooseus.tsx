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
        <circle cx="8" cy="8" r="2" />
        <circle cx="16" cy="8" r="2" />
        <circle cx="8" cy="16" r="2" />
        <circle cx="16" cy="16" r="2" />
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

export default function WhyChooseUs() {
  return (
    <section id="why-choose-us" className="py-24 px-10 bg-white">
      <div className="max-w-[1440px] mx-auto  mt-10">

        <div className="flex gap-12 mb-12">

          <div className="w-[55%]">
            <div className="flex items-center gap-2 mb-5">
              <span className="w-2 h-2 rounded-full bg-[#C97B63]" />
              <span className="text-2xl text-[#C97B63] font-medium font-garamond">Why Choose Us</span>
            </div>
            <h2 className="font-jakarta font-semibold text-5xl text-[#2C1810] leading-tight mb-2">
              Exceptional senior care with <br/> <span className="font-garamond">heart and expertise</span>
            </h2>
            <p className="text-sm text-[#9C8070] leading-relaxed w-full">
              Choosing the right care home is more than a decision — it's a commitment
              to your loved one's safety, comfort, and happiness. We combine medical
              expertise with heartfelt compassion to create a place they can truly call home.
            </p>
          </div>

          <div className="flex flex-col justify-center gap-4 ">
            {reasons.map((r) => (
              <div key={r} className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-[#F2DDD3] flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg viewBox="0 0 16 16" fill="none" className="w-3.5 h-3.5">
                    <path
                      d="M3 8l3.5 3.5L13 5"
                      stroke="#C97B63"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                <span className="text-lg text-[#5C4033]">{r}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="relative rounded-3xl overflow-hidden w-full ">
          <img
            src="/images/why-choose-us-img.jpg"
            alt="Caregiver with senior resident"
            className="w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-[#2E2018]/20" />

          <button
            aria-label="Play video"
            className="absolute inset-0 flex items-center justify-center group"
          >
            <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center border border-white/30 group-hover:bg-white/30 transition-colors">
              <svg viewBox="0 0 24 24" fill="white" className="w-6 h-6 ml-1">
                <path d="M5 3l14 9-14 9V3z" />
              </svg>
            </div>
          </button>

          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#2E2018]/80 to-transparent pt-20 pb-8 px-8">
            <div className="grid sm:grid-cols-3 gap-6">
              {highlights.map((h) => (
                <div key={h.title} className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#C97B63]/80 flex items-center justify-center flex-shrink-0">
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