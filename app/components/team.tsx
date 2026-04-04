"use client";

import { useEffect, useRef, useState } from "react";

const team = [
  { name: "Brooklyn Simmons", role: "Senior Nursing", photo: "/images/team-1.jpg" },
  { name: "Cameron Williamson", role: "Resident Counselor", photo: "/images/team-2.jpg" },
  { name: "Leslie Alexander", role: "Health Coordinator", photo: "/images/team-3.jpg" },
  { name: "Darlene Robertson", role: "Senior Nursing", photo: "/images/team-4.jpg" },
];

const LINE_1 = "Meet the compassionate hearts";
const LINE_2 = "behind our care";

const socials = [
  {
    label: "X",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.737-8.835L1.254 2.25H8.08l4.261 5.636 5.903-5.636zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    label: "Facebook",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
      </svg>
    ),
  },
  {
    label: "Dribbble",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M12 0C5.374 0 0 5.373 0 12c0 6.628 5.374 12 12 12 6.629 0 12-5.372 12-12 0-6.627-5.371-12-12-12zm7.369 5.824a10.1 10.1 0 012.223 6.103c-.326-.063-3.584-.728-6.861-.315-.07-.165-.136-.333-.207-.499-.199-.473-.413-.944-.627-1.405 3.619-1.475 5.271-3.593 5.472-3.884zM12 2.059a9.96 9.96 0 016.552 2.439c-.168.254-1.67 2.236-5.17 3.546C11.518 5.744 9.951 3.79 9.716 3.497A10.027 10.027 0 0112 2.059zM7.562 4.276c.22.287 1.752 2.246 3.548 5.063-4.474 1.189-8.43 1.166-8.838 1.16a10.07 10.07 0 015.29-6.223zM2.073 12.042v-.269c.395.009 5.016.071 9.79-1.357.274.538.538 1.083.782 1.629-.125.035-.252.074-.375.116-4.931 1.591-7.556 5.939-7.762 6.282a9.943 9.943 0 01-2.435-6.401zm9.927 9.965a9.95 9.95 0 01-6.036-2.026c.169-.331 2.088-4.052 7.478-5.95.022-.008.042-.016.063-.024a39.42 39.42 0 011.966 6.986 9.98 9.98 0 01-3.471.014zm5.338-1.741a41.458 41.458 0 00-1.831-6.523c2.994-.479 5.62.305 5.949.406a10.04 10.04 0 01-4.118 6.117z" />
      </svg>
    ),
  },
];

export default function Team() {
  const sectionRef = useRef(null);

  const [line1, setLine1] = useState("");
  const [line2, setLine2] = useState("");
  const [typingLine, setTypingLine] = useState<1 | 2 | "done">(1);

  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

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

  // Slide-up cards
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
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="team" className="py-24 bg-[#F0EDE6] rounded-[16px]">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="w-full flex flex-col items-center justify-center mb-14">
          <div className="flex items-center justify-center gap-2 mb-4">
              <span className="w-2 h-2 rounded-full bg-[#C97B63]" />
              <span className="text-lg text-black font-lora italic font-medium">Our team member</span>
          </div>
          <h2 className="text-center text-5xl mb-5 font-semibold w-full min-h-24">
            {line1}
            {typingLine === 1 && <span className="animate-puls font-jarkata  text-[#C97B63]">|</span>}
            {(typingLine === 2 || typingLine === "done") && (
              <>
                <br />
                <span className="font-lora italic italic font-normal">
                  {line2}
                  {typingLine === 2 && <span className="animate-pulse text-[#C97B63]">|</span>}
                </span>
              </>
            )}
          </h2>
        </div>

        {/* Cards */}
        <div className=" grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((member, idx) => (
            <div
              key={member.name}
              ref={(el) => { cardRefs.current[idx] = el; }}
              className="group translate-y-16 opacity-0 transition-all duration-700 ease-out"
              style={{ transitionDelay: `${idx * 150}ms` }}
            >
              {/* Photo with hover social overlay */}
              <div className="h-[330px] w-full rounded-2xl mb-4 overflow-hidden relative">
                <img
                  src={member.photo}
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {/* Dark overlay on hover */}
                <div className="absolute inset-0 bg-[#2E2018]/0 group-hover:bg-[#2E2018]/30 transition-all duration-300" />

                {/* Social icons — slide up from bottom on hover */}
                <div className="absolute bottom-0 left-0 right-0 flex items-center justify-center gap-3 p-4
                  translate-y-full group-hover:translate-y-0 transition-transform duration-400 ease-out">
                  <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-2xl px-4 py-2.5">
                    {socials.map((s) => (
                      <button
                        key={s.label}
                        aria-label={s.label}
                        className="w-8 h-8 rounded-full flex items-center justify-center text-[#C97B63] hover:bg-[#C97B63] hover:text-white transition-colors"
                      >
                        {s.icon}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <h3 className="font-jarkata text-center text-xl font-bold text-black mb-1">{member.name}</h3>
              <p className="text-sm text-black text-center">{member.role}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}