import React from "react";
import { Facebook, Instagram, Twitter } from "lucide-react";
import { Link } from "react-scroll";

const Footer = () => {
  return (
    <footer className="bg-zinc-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4">🥊Zamora's Heavy Hitters</h3>
            <p className="text-gray-300">
              Where champions are made and legends begin their journey.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {["home", "about", "schedule", "coaches"].map((item) => (
                <li key={item}>
                  <Link
                    to={item}
                    smooth={true}
                    duration={500}
                    className="text-gray-300 hover:text-red-600 cursor-pointer capitalize"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">More</h3>
            <ul className="space-y-2">
              {["services", "gallery", "comments", "contact"].map((item) => (
                <li key={item}>
                  <Link
                    to={item}
                    smooth={true}
                    duration={500}
                    className="text-gray-300 hover:text-red-600 cursor-pointer capitalize"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-red-600">
                <Facebook />
              </a>
              <a href="#" className="text-gray-300 hover:text-red-600">
                <Instagram />
              </a>
              <a href="#" className="text-gray-300 hover:text-red-600">
                <Twitter />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-300">
            Created by
            <a href="https://franciscolopezportfolio.vercel.app/">
              {" "}
              Wolf Code!
            </a>
          </p>
          <p className="text-gray-300">
            © {new Date().getFullYear()} Zamora's Heavy Hitters Boxing Gym.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
