"use client";
import { useState } from "react";
import Link from "next/link";

const navLinks = [
  { label: "Home", href: "#", hasDropdown: true, active: true },
  { label: "About Us", href: "#about", hasDropdown: false },
  { label: "Services", href: "#services", hasDropdown: false },
  { label: "Blog", href: "#blog", hasDropdown: false },
  { label: "Pages", href: "#pages", hasDropdown: true },
  { label: "Contact Us", href: "#contact", hasDropdown: false },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="top-0 left-0 right-0 z-50 ">
      <div className="  h-20 flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 flex-shrink-0">
          <div className=" rounded-full flex items-center justify-center flex-shrink-0">
            <img src="/logos/logo.svg" alt="Carely logo" className="w-14 h-14 object-contain" />
          </div>
          <span className="font-jarkata text-2xl font-bold text-[#2C1810]">
            Care<span className="italic font-normal">ly</span>.
          </span>
        </Link>

        {/* Desktop Nav — centered */}
        <div className="hidden md:flex items-center gap-8 text-[16px] font-medium text-[#2C1810]">
          {navLinks.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className={`flex items-center gap-1 transition-colors hover:text-[#C97B63] ${
                item.active ? "text-[#C97B63]" : "text-[#2C1810]"
              }`}
            >
              {item.label}
              {item.hasDropdown && (
                <svg viewBox="0 0 16 16" fill="none" className="w-3.5 h-3.5" stroke="currentColor" strokeWidth="2">
                  <path d="M4 6l4 4 4-4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              )}
            </Link>
          ))}
        </div>

        {/* CTA button */}
        <div className="hidden md:flex items-center">
          <Link
            href="#contact"
            className="flex items-center gap-2 bg-[#C97B63] hover:bg-[#A85F48] transition-colors text-white text-sm font-semibold px-5 py-3 rounded-[8px]"
          >
            Contact Us
            <svg viewBox="0 0 16 16" fill="none" className="w-3.5 h-3.5" stroke="currentColor" strokeWidth="2">
              <path d="M3 13L13 3M13 3H7M13 3v6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>

        {/* Mobile burger */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden flex flex-col gap-1.5 p-2"
          aria-label="Toggle menu"
        >
          <span className={`w-6 h-0.5 bg-[#2C1810] transition-transform duration-200 ${open ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`w-6 h-0.5 bg-[#2C1810] transition-opacity duration-200 ${open ? "opacity-0" : ""}`} />
          <span className={`w-6 h-0.5 bg-[#2C1810] transition-transform duration-200 ${open ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-[#FAF8F5] border-t border-[#EDE5DB] px-6 py-4 flex flex-col gap-4">
          {navLinks.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={() => setOpen(false)}
              className={`text-sm font-medium transition-colors hover:text-[#C97B63] flex items-center justify-between ${
                item.active ? "text-[#C97B63]" : "text-[#2C1810]"
              }`}
            >
              {item.label}
              {item.hasDropdown && (
                <svg viewBox="0 0 16 16" fill="none" className="w-3.5 h-3.5" stroke="currentColor" strokeWidth="2">
                  <path d="M4 6l4 4 4-4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              )}
            </Link>
          ))}
          <Link
            href="#contact"
            onClick={() => setOpen(false)}
            className="flex items-center justify-center gap-2 bg-[#C97B63] text-white text-sm font-semibold px-5 py-2.5 rounded-full mt-2"
          >
            Contact Us ↗
          </Link>
        </div>
      )}
    </nav>
  );
}