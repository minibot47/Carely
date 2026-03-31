const stats = [
    { value: "77k", label: "Hours of care delivered annually" },
    { value: "12k", label: "Activities and events hosted" },
    { value: "5★", label: "Average family rating" },
  ];
  
  const moments = [
    { emoji: "🎂", title: "Birthday celebrations", desc: "We make every birthday a milestone worth cherishing." },
    { emoji: "🎨", title: "Creative workshops", desc: "Art, music, and crafts that spark joy and expression." },
    { emoji: "🌳", title: "Garden walks", desc: "Fresh air and nature, every single day." },
    { emoji: "🤝", title: "Community events", desc: "Connecting residents with families and the wider community." },
  ];
  
  export default function CelebratingMoments() {
    return (
      <section className="py-24 bg-[#FAF8F5]">
        <div className="max-w-7xl mx-auto px-6">
          {/* Header */}
          <div className="text-center mb-16">
            <p className="section-label mb-3">Life here</p>
            <h2 className="section-heading mb-4">Celebrating moments, big and small</h2>
            <p className="text-[#9C8070] max-w-lg mx-auto text-sm leading-relaxed">
              We don't just care for people — we celebrate life with them. Every day is
              an opportunity to create a meaningful memory.
            </p>
          </div>
  
          {/* Stats row */}
          <div className="grid grid-cols-3 gap-6 mb-16">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <div className="font-playfair text-5xl text-[#C97B63] mb-2">{s.value}</div>
                <div className="text-sm text-[#9C8070]">{s.label}</div>
              </div>
            ))}
          </div>
  
          {/* Moments grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {moments.map((m) => (
              <div key={m.title} className="card-warm text-center group hover:border-[#C97B63] transition-colors">
                <div className="text-4xl mb-4">{m.emoji}</div>
                <h3 className="font-playfair text-lg text-[#2C1810] mb-2">{m.title}</h3>
                <p className="text-sm text-[#9C8070] leading-relaxed">{m.desc}</p>
              </div>
            ))}
          </div>
  
          {/* Image strip placeholder */}
          <div className="mt-12 grid grid-cols-4 gap-3 rounded-2xl overflow-hidden">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="aspect-square bg-linear-to-br from-[#D4B5A5] to-[#8B6355] flex items-center justify-center text-white/40 text-xs"
              >
                [ Photo {i} ]
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }