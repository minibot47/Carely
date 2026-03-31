"use client";
import { useState } from "react";

const faqs = [
  {
    q: "What services do you provide?",
    a: "It's often the right step when daily tasks become unsafe to manage at home, when a person is lonely or lacking stimulation, or when a family carer is becoming overwhelmed. We offer free consultations to help you assess the situation.",
  },
  {
    q: "How do i know which level of care my loved one needs?",
    a: "Our fees cover accommodation, all meals and snacks, daily activities, laundry, and personal care. Nursing and specialist services may be charged separately depending on the care plan.",
  },
  {
    q: "How do you handle emergencies or health issues?",
    a: "Absolutely. We encourage residents to bring cherished items, photos, and furnishings. A familiar environment makes a real difference to settling in.",
  },
  {
    q: "Can residents personalize their living space?",
    a: "We operate an open visiting policy — family members can visit at any time. We also offer video calling facilities for those who live further away.",
  },
  {
    q: "Do you provide special diets?",
    a: "Care plans are reviewed regularly and adjusted as needed. We work closely with GPs, specialists, and families to ensure the right level of support is always in place.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left */}
          <div>
            <p className="section-label mb-4">Frequently asked questions </p>
            <h2 className="text-5xl mb-6">
              Answers to common <br/> questions about our care
            </h2>
            <p className="text-[#9C8070] leading-relaxed text-normal mb-8">
            We know that choosing the right care for your loved one comes with many questions. That’s why we’ve gathered the most common inquiries from families
            </p>
            <div className="bg-[#F0EDE6] w-[70%] h-fit rounded-2xl overflow-hidden shadow-sm">
              <div className="bg-[#2C1810] px-6 py-4">
                <h2 className="text-white font-bold text-base">
                  Thinking About Elder Care? Let's Talk.
                </h2>
              </div>
              <div className="px-6 py-5 flex w-full items-center">
                <div className="w-[40%] border-r border-[#D4C0B0]">
                  <div className="px-2 py-1 flex flex-col gap-1">
                    <div className="flex items-center gap-2 font-bold text-sm text-[#2C1810]">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-4 h-4">
                        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.06 1.18 2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      Call Us:
                    </div>
                    <h2 className="text-sm text-[#5C4033] pl-6">+1 (234) 567 489</h2>
                  </div>
                </div>
                <div className="w-1/2">
                  <div className="px-5 py-1 flex flex-col gap-1">
                    <div className="flex items-center gap-2 font-bold text-sm text-[#2C1810]">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-4 h-4">
                        <rect x="2" y="4" width="20" height="16" rx="2" />
                        <path d="M2 7l10 7 10-7" strokeLinecap="round" />
                      </svg>
                      E-mail Us:
                    </div>
                    <h2 className="text-sm text-[#5C4033] pl-6">support@domain.com</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right — accordion */}
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className={`rounded-xl border transition-colors ${
                  open === i ? "border-[#C97B63] bg-[#FDF8F5]" : "border-[#EDE5DB] bg-white"
                }`}
              >
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  className="w-full text-left px-6 py-5 flex items-center justify-between gap-4"
                >
                  <span className="font-semibold text-[#2C1810] text-sm">{faq.q}</span>
                  <span
                    className={`text-[#C97B63] flex shrink-0 transition-transform text-lg ${
                      open === i ? "rotate-45" : ""
                    }`}
                  >
                    +
                  </span>
                </button>
                {open === i && (
                  <div className="px-6 pb-5 text-sm text-[#9C8070] leading-relaxed">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}