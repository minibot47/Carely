import {  MapPin } from "lucide-react";
const reasons = [
    "Lack of Time for Full-Time Care",
    "Limited Medical Knowledge at Home",
    "Lack of Social Interaction",
  ];
  
  const stats = [
    { value: "300+", label: "Happy Residents" },
    { value: "50+", label: "Team Members" },
    { value: "15+", label: "Years of Trusted" },
  ];
  
  export default function FunFacts() {
    return (
      <section className="bg-[#3D2B1F] py-20 rounded-[16px] ">
        <div className="max-w-[1440px] mx-auto px-12">
          <div className="grid lg:grid-cols-2 gap-10 items-start ">
  
            {/* ── Left column ── */}
            <div className="flex flex-col gap-8">
              {/* Label */}
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#C97B63]" />
                <span className="text-2xl text-[#C97B63] font-medium font-garamond">Our fun facts</span>
              </div>
  
              {/* Heading */}
              <div>
                <h2 className="font-playfair text-5xl text-white leading-tight">
                  Celebrating moments that
                </h2>
                <h2 className="font-jakarta text-5xl text-white leading-tight">
                  matter,{" "}
                  <span className="font-garamond">by the numbers</span>
                </h2>
              </div>
  
              {/* Body text */}
              <p className="text-normal text-[#B09080] leading-relaxed w-full">
                Every number at [Your Facility Name] tells a story — of care, connection,
                and the meaningful lives we've touched. From happy residents and compassionate
                staff to meals served and memories made,
              </p>
  
              {/* Bottom photo */}
              <div className="rounded-2xl overflow-hidden  bg-gradient-to-br from-[#6B4C3B] to-[#2E1A10] relative">
                <img src="/images/funfact2.jpg" alt="Nurse with resident" className=" object-fill" />
              </div>
            </div>
  
            {/* ── Right column ── */}
            <div className="flex flex-col gap-8">
              {/* Top photo */}
              <div className="rounded-2xl overflow-hidden  bg-gradient-to-br from-[#8B6355] to-[#4A3020] relative">
                <img src="/images/funfact1.jpg" alt="Nurse with resident" className=" object-cover" />
              </div>
  
              {/* Checklist + badge row */}
              <div className="flex items-start justify-between gap-6">
                {/* Reasons */}
                <div className="flex flex-col gap-3">
                  {reasons.map((r) => (
                    <div key={r} className="flex items-center gap-3">
                      <span className="w-5 h-5 rounded-full bg-[#C97B63]/20 flex items-center justify-center flex-shrink-0">
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
                      <span className="text-lg text-[#D4C0B0]">{r}</span>
                    </div>
                  ))}
                </div>
  
                {/* Spinning badge */}
                <div className="relative w-28 h-28 flex-shrink-0 hidden md:flex items-center justify-center">
                  <svg
                    viewBox="0 0 100 100"
                    className="w-full h-full animate-spin"
                    style={{ animationDuration: "10s" }}
                  >
                    <defs>
                      <path
                        id="footer-circle"
                        d="M 50,50 m -35,0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0"
                      />
                    </defs>
                    <circle cx="50" cy="50" r="48" fill="#E8C5B5" />
                    <text fontSize="9" fill="#2C1810" fontWeight="500" letterSpacing="2.5">
                      <textPath href="#footer-circle">
                        Book Appointment • Book Appointment •
                      </textPath>
                    </text>
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-10 h-10 rounded-full bg-[#C97B63] flex items-center justify-center">
                      <MapPin size={18} color="white" />
                    </div>
                  </div>
                </div>
              </div>
  
              {/* Stats row */}
              <div className="grid grid-cols-3 gap-4 border-t border-[#5C4033] pt-8">
                {stats.map((s, i) => (
                  <div key={s.label} className={`${i < stats.length - 1 ? "border-r border-[#5C4033]" : ""} pr-4`}>
                    <div className="font-jarkata font-bold text-5xl text-[#C97B63] mb-1">{s.value}</div>
                    <div className="text-lg text-white">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
  
          </div>
        </div>
      </section>
    );
  }