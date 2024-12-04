import React from "react";
import AnimatedSection from "./AnimatedSection";
import imagen1 from "/zamoraboxingym/public/img/gym-zamora.jpg";
import imagen2 from "/zamoraboxingym/public/img/gym-zamora2.jpg";
import imagen3 from "/zamoraboxingym/public/img/gym-zamora3.jpg";

const images = [
  "https://images.unsplash.com/photo-1517438322307-e67111335449?auto=format&fit=crop&q=80",
  imagen1,
  "https://images.unsplash.com/photo-1591117207239-788bf8de6c3b?auto=format&fit=crop&q=80",
  imagen2,
  "https://images.unsplash.com/photo-1605296867304-46d5465a13f1?auto=format&fit=crop&q=80",
  imagen3,
];

const Gallery = () => {
  return (
    <section id="gallery" className="py-20 bg-black text-white">
      <div className="container mx-auto px-4">
        <AnimatedSection direction="down">
          <h2 className="text-4xl font-bold text-center mb-16">Gallery</h2>
        </AnimatedSection>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((image, index) => (
            <AnimatedSection
              key={index}
              direction={index % 2 === 0 ? "left" : "right"}
              delay={index * 0.1}
            >
              <div className="relative overflow-hidden aspect-square rounded-lg">
                <img
                  src={image}
                  alt={`Gallery image ${index + 1}`}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                />
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
