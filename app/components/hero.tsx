import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-screen p-16 overflow-hidden mt-2 mb-16 rounded-[16px] flex items-end">
      {/* Background image area */}
      <div className="absolute inset-0 bg-linear-to-br from-[#3D2B1F] via-[#5C3D2E] to-[#8B6355]">
        <Image src="/images/hero-img.jpg" alt="Senior care" fill className="object-cover opacity-60" />
        <div className="absolute inset-0 bg-linear-to-r from-[#2E2018]/10 via-[#2E2018]/20 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full flex items-center h-full justify-between">
        <div className="w-[80%] py-5 ">
          <h1 className="font-jakarta font-semibold text-5xl md:text-6xl lg:text-7xl text-white leading-tight mb-6">
            Trusted senior care designed with heart <span className="font-garamond italic font-normal">respect, and experience</span>
          </h1>
          <p className="text-[#D4C0B0] text-lg leading-relaxed mb-8 ">
            At [Your Facility Name], we provide more than just care — we offer a second home built on trust, warmth, and respect. With round-the-clock nursing support, personalized care plans, and a deeply compassionate team,
          </p>

          {/* Trust badges */}
          <div className="flex items-center gap-6">
            <Link href="#services" className="btn-primary text-center bg-[#f3c4c4] px-8 py-3 rounded-[12px] flex items-center gap-3">
                Schedule a visit
                <svg viewBox="0 0 16 16" fill="none" className="w-3.5 h-3.5" stroke="currentColor" strokeWidth="2">
                  <path d="M3 13L13 3M13 3H7M13 3v6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </Link>
            <div className="flex -space-x-2">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="w-10 h-10 rounded-full bg-[#C97B63] border-2 border-white flex items-center justify-center text-white text-xs font-bold"
                >
                  {i}
                </div>
              ))}
            </div>
            <div>
              <div className="flex gap-0.5 mb-1">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-[#E8C5B5] fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-white text-sm"><span className="text-[#D4C0B0] text-lg italic">5k+</span> Our Customers Satisfactions</p>
            </div>
          </div>
        </div>
                {/* Spinning badge */}
                <div className="relative w-50 text-white h-50 flex-shrink-0 hidden md:flex items-center justify-center">
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
                    <circle cx="50" cy="50" r="48" fill="#f3c4c4" />
                    <text fontSize="9" fill="#2C1810" fontWeight="500" letterSpacing="2.5" >
                      <textPath href="#footer-circle">
                        Book Appointment • Book Appointment •
                      </textPath>
                    </text>
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-15 h-15 rounded-full bg-[#f3c4c4] text-white flex items-center justify-center">
                      <img src="/logos/logo.svg" alt="LOGO" />
                    </div>
                  </div>
                </div>
      </div>

      
    </section>
  );
}