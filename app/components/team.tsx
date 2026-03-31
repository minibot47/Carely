const team = [
    { name: "Brooklyn Simmons", role: "Senior Nursing", initials: "SM" , photo: "/images/team-1.jpg"},
    { name: "Cameron Williamson", role: "Resident Counselor", initials: "JO" , photo: "/images/team-2.jpg" },
    { name: "Leslie Alexander", role: "Health Coordinator", initials: "LF" , photo: "/images/team-3.jpg" },
    { name: "Darlene Robertson", role: "Senior Nursing", initials: "GA" , photo: "/images/team-4.jpg" },
  ];
  
  export default function Team() {
    return (
      <section id="team" className="py-24 bg-[#F0EDE6]  rounded-[16px]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6 ">
            <div className="w-full flex flex-col items-center justify-center">
              <p className="text-normal text-black mb-3">Our team members</p>
              <h2 className="text-4xl text-center w-full">
                Meet the compassionate hearts <br/>behind our care
              </h2>
            </div>
          </div>
  
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member) => (
              <div key={member.name} className="group">
                {/* Photo placeholder */}
                <div className="aspect-square rounded-2xl bg-linear-to-br from-[#D4B5A5] to-[#8B6355] mb-4 overflow-hidden flex items-center justify-center relative">
                  <img src={member.photo} alt={member.name}  className="object-cover" />
                  <div className="absolute inset-0 bg-[#2E2018]/0 group-hover:bg-[#2E2018]/20 transition-colors" />
                </div>
                <h3 className="font-playfair text-center text-xl font-bold text-black mb-1">{member.name}</h3>
                <p className="text-sm text-black text-center ">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }