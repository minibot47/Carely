const plans = [
    {
      name: "Basic Care",
      price: "$39",
      unit: "Monthly",
      desc: "We believe great design is more than just visuals — it's a feeling.",
      features: [" Full Body Scrub", " Detoxifying Body Wrap", " Hydrating Body Wrap"],
      highlight: false,
    },
    {
      name: "Full Care",
      price: "$49",
      unit: "Monthly",
      desc: "We believe great design is more than just visuals — it's a feeling.",
      features: [" Full Body Scrub", " Detoxifying Body Wrap", " Hydrating Body Wrap"],
      highlight: true,
    },
    {
      name: "Basic Car",
      price: "$39",
      unit: "Monthly",
      desc: "We believe great design is more than just visuals — it's a feeling.",
      features: [" Full Body Scrub", " Detoxifying Body Wrap", " Hydrating Body Wrap"],
      highlight: false,
    },
    
  ];
  
  export default function CompassionateCare() {
    return (
      <section className="py-24 bg-[#F0EDE6]  mt-10 mb-20 rounded-[16px]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
            <div className="w-full flex flex-col items-center justify-center">
              <div className="flex items-center gap-2 mb-5">
                <span className="w-2 h-2 rounded-full bg-[#C97B63]" />
                <span className="text-xl text-[#C97B63] italic font-medium">Pricing Plan</span>
              </div>
              <h2 className=" w-full text-5xl text-center font-bold">
                Compassionate care that won’t <br/> <span>break your budget</span>
              </h2>
            </div>
          </div>
  
          <div className="grid md:grid-cols-3 gap-10 max-w-[1440px]">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`rounded-2xl p-8 ${
                  plan.highlight
                    ? "bg-[#2E2018] text-white"
                    : "bg-[#FAF8F5] border border-[#EDE5DB] text-[#2C1810]"
                }`}
              >
                <p className={`text-sm font-semibold mb-1 ${plan.highlight ? "text-[#E8C5B5]" : "text-[#C97B63]"}`}>
                  {plan.name}
                </p>
                <p className={`text-sm mb-6 leading-relaxed ${plan.highlight ? "text-[#B09080]" : "text-[#9C8070]"}`}>
                  {plan.desc}
                </p>
  
                {/* Progress bar decoration */}
                <div className={`h-1 rounded-full mb-6 ${plan.highlight ? "bg-[#C97B63]" : "bg-[#EDE5DB]"}`}>
                  <div className="h-full w-3/4 rounded-full bg-[#C97B63]" />
                </div>

                <div className="flex items-end gap-1 mb-3">
                  <span className="font-playfair text-5xl">{plan.price}</span>
                  <span className={`text-sm pb-2 ${plan.highlight ? "text-[#B09080]" : "text-[#9C8070]"}`}>
                    {plan.unit}
                  </span>
                </div>
  
                <ul className="space-y-2 mb-8 mt-5">
                  {plan.features.map((f) => (
                    <li key={f} className={`flex items-center gap-3 text-sm ${plan.highlight ? "text-[#D4C0B0]" : "text-[#5C4033]"}`}>
                      <span className="w-5 h-5 rounded-full bg-[#C97B63]/20 flex items-center justify-center text-[#C97B63] text-xs shrink-0">
                        ✓
                      </span>
                      {f}
                    </li>
                  ))}
                </ul>
  
                <a
                  href="#admissions"
                  className={`block text-center py-3 rounded-full text-sm font-semibold transition-colors ${
                    plan.highlight
                      ? "bg-[#C97B63] text-white hover:bg-[#A85F48]"
                      : "border border-[#C97B63] text-[#C97B63] hover:bg-[#C97B63] hover:text-white"
                  }`}
                >
                  Get started
                </a>
              </div>
            ))}
          </div>

          <div className="w-full  mt-10 flex items-center justify-center gap-5">
            <div className="flex gap-2 ">
              <img src='/icons/calender.svg' alt="logo"/>
              <h2>Get 30 days free trial</h2>
            </div>
            <div className="flex gap-2 ">
              <img src='/icons/dollars.svg' alt="logo"/>
              <h2>No any hidden fees pay</h2>
            </div>
            <div className="flex gap-2 ">
              <img src='/icons/time.svg' alt="logo"/>
              <h2>You can cancel anytime</h2>
            </div>
          </div>
        </div>
      </section>
    );
  }