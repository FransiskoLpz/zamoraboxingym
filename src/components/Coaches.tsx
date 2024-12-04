import React from "react";
import AnimatedSection from "./AnimatedSection";
import imagen from "/img/gym-zamora4.jpg";

const coaches = [
  {
    name: "Byron Zamora Jr.",
    role: "Head Coach",
    image: imagen,
    experience: "20+ years",
  },
  {
    name: "Sarah Rodriguez",
    role: "Boxing Trainer",
    image:
      "https://images.unsplash.com/photo-1613248469451-ff847ec6e66c?auto=format&fit=crop&q=80",
    experience: "12 years",
  },
  {
    name: "James Wilson",
    role: "Conditioning Coach",
    image:
      "https://images.unsplash.com/photo-1612214070475-1e73f478188c?auto=format&fit=crop&q=80",
    experience: "15 years",
  },
];

const Coaches = () => {
  return (
    <section id="coaches" className="py-20 bg-black text-white">
      <div className="container mx-auto px-4">
        <AnimatedSection direction="down">
          <h2 className="text-4xl font-bold text-center mb-16">Our Coaches</h2>
        </AnimatedSection>
        <div className="grid md:grid-cols-3 gap-8">
          {coaches.map((coach, index) => (
            <AnimatedSection
              key={coach.name}
              direction={index % 2 === 0 ? "left" : "right"}
              delay={index * 0.2}
            >
              <div className="text-center transform hover:scale-105 transition-transform duration-300">
                <div className="mb-4 relative overflow-hidden rounded-lg aspect-square">
                  <img
                    src={coach.image}
                    alt={coach.name}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-xl font-bold">{coach.name}</h3>
                <p className="text-red-600 font-semibold">{coach.role}</p>
                <p className="text-gray-300">{coach.experience} experience</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Coaches;
