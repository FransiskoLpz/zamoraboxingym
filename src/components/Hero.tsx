import React from "react";
import { Link } from "react-scroll";
const Hero = () => {
  return (
    <section id="home" className="h-screen relative overflow-hidden">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source
          src="https://drive.google.com/uc?id=1E719dSNrdj3Phsbj8sjBRtoOS_ijMc9a"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>

      <div className="absolute inset-0 bg-black/60" />
      <div className="relative h-full flex items-center justify-center text-white px-4">
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-4">
            TRAIN LIKE A <span className="text-red-600">CHAMPION</span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl mb-8">
            Where legends are forged and champions are made
          </p>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            className="bg-red-600 hover:bg-red-700 text-white px-6 sm:px-8 py-3 rounded-lg text-base sm:text-lg font-semibold cursor-pointer inline-block"
          >
            Join Now
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
