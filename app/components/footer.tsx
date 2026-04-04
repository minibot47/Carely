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
    <footer className="bg-[#333333] rounded-2xl overflow-hidden pt-10 pb-5 px-5">
      <div className="max-w-[1440px] mx-auto py-12 flex flex-col gap-10">

        {/* Top — heading + spinning badge */}
        <div className="flex items-start justify-between gap-6 pb-8 border-b border-[#5C4033]">
          <h2 className="text-3xl md:text-5xl text-white leading-tight w-full md:w-[60%]">
            <span className="font-semibold font-jarkata">Your questions answered, your </span>
            <span className="font-lora italic">trust</span>
            <span className="font-lora italic"> respected always</span>
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
                <img src='/logos/logo.svg' />
              </div>
            </div>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.1fr] gap-10">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-12 h-12 rounded-full bg-[#C97B63]/30 flex items-center justify-center shrink-0">
                <img src="/logos/Logo.png" alt="logo" className="w-7 h-7 object-contain" />
              </div>
              <span className="font-jakarta text-3xl text-white font-semibold">
                Care<span className="font-light font-lora italic">ly</span>.
              </span>
            </div>
            <p className="text-sm text-white leading-relaxed mb-6 max-w-[200px]">
              We provide expert care services for crystal-clear, safe and happy senior living.
            </p>
            <div className="flex items-center gap-3">
              {[
                { href: "#", icon: <path d="M12 2C6.477 2 2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.989C18.343 21.129 22 16.99 22 12c0-5.523-4.477-10-10-10z" /> },
                { href: "#", icon: <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.258 5.63zm-1.161 17.52h1.833L7.084 4.126H5.117z" /> },
                { href: "#", icon: <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /> },
                { href: "#", icon: <><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></> },
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-white hover:border-[#C97B63] hover:text-[#C97B63] transition-colors"
                >
                  <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.5">
                    {social.icon}
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:border-r-[0.1px] border-gray-100/10 lg:pl-6">
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
          <div className="lg:border-r-[0.1px] border-gray-100/10 lg:pl-6">
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
          <div className="lg:pl-6">
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
        <div className="border-t border-[#5C4033] flex flex-col sm:flex-row items-center justify-between gap-3 pt-6">
          <p className="text-sm lg:text-lg text-white text-center sm:text-left">
            Copyright © {new Date().getFullYear()} All Rights Reserved.
          </p>
          <div className="flex items-center gap-2 text-sm lg:text-lg text-white">
            <Link href="#" className="hover:text-[#C97B63] transition-colors">Privacy Policy</Link>
            <span className="w-1.5 h-1.5 rounded-full bg-[#C97B63]" />
            <Link href="#" className="hover:text-[#C97B63] transition-colors">Terms & Conditions</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}