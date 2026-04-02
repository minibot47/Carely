import { Phone, Mail, MapPin } from "lucide-react";
import Link from "next/link";

const quickLinks = ["Home", "About Us", "Services", "Blog", "Contact Us"];

const services = [
  "Assisted Living",
  "Healing Therapy",
  "Memory Care",
  "Rejuvenation Ritual",
  "Short-Term Care",
];


export default function Footer() {
  return (
    <footer className="bg-[#3D2B1F] h-[90vh] rounded-2xl overflow-hidden p-10">
      <div className="max-w-[1440px] mx-auto py-12 flex flex-col gap-10 h-full ">

        {/* Top — heading + spinning badge */}
        <div className="flex items-start justify-between gap-6 pb-8 border-b border-[#5C4033] h-[40%] ">
          <h2 className="text-4xl md:text-5xl text-white leading-tight w-[80%]">
            <span className="font-semibold font-jarkata">Your questions answered, your </span>
            <span className="font-lora">trust</span><br/>
            <span className="font-lora">respected always</span>
          </h2>

          {/* Spinning badge */}
          <div className="relative w-30 h-30 shrink-0 hidden md:flex items-center justify-center">
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
              <circle cx="50" cy="50" r="48" fill="#E6A493" />
              <text fontSize="9" fill="#ffffff" fontWeight="500" letterSpacing="2.5">
                <textPath href="#footer-circle">
                  Book Appointment • Book Appointment •
                </textPath>
              </text>
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-10 h-10 rounded-full bg-[#E6A493] flex items-center justify-center">
                <img src='/logos/logo.svg'/>
              </div>
            </div>
          </div>
        </div>

        {/* Middle — logo + links */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 h-[40%]">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-12 h-12 rounded-full bg-[#C97B63]/30 flex items-center justify-center shrink-0">
                <img src="/logos/Logo.png" alt="logo"/>
              </div>
              <span className="font-jarkata text-4xl text-white font-semibold">
                Care<span className="font-light italic">ly</span>.
              </span>
            </div>
            <p className="text-sm text-white leading-relaxed mb-6 max-w-[220px]">
              We provide expert care services for crystal-clear, safe and happy senior living.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-5">Quick Link</h4>
            <ul className="space-y-3">
              {quickLinks.map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C97B63] shrink-0" />
                  <Link href="#" className="text-sm text-white hover:text-[#C97B63] transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-5">Services</h4>
            <ul className="space-y-3">
              {services.map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C97B63] shrink-0" />
                  <Link href="#" className="text-sm text-white hover:text-[#C97B63] transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Get In Touch */}
          <div>
            <h4 className="text-white font-semibold mb-5">Get In Touch</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone size={16} color="#C97B63" className="mt-0.5 shrink-0" />
                <span className="text-sm text-white">+1 (234) 567 489</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={16} color="#C97B63" className="mt-0.5 shrink-0" />
                <span className="text-sm text-white">info@domainname.com</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={16} color="#C97B63" className="mt-0.5 shrink-0" />
                <span className="text-sm text-white leading-relaxed">
                  123 High Street, Springfield,<br />London SW1A 1A, United Kingdom.
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-[#5C4033] pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 h-[20%]">
          <p className="text-lg text-white">
            Copyright © {new Date().getFullYear()} All Rights Reserved.
          </p>
          <div className="flex items-center gap-2 text-lg text-white">
            <Link href="#" className="hover:text-[#C97B63] transition-colors">Privacy Policy</Link>
            <span className="w-1.5 h-1.5 rounded-full bg-[#C97B63]" />
            <Link href="#" className="hover:text-[#C97B63] transition-colors">Terms & Conditions</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}