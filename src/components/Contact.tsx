import React, { useState } from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-20 bg-black text-white">
      <div className="container mx-auto px-4">
        <AnimatedSection direction="down">
          <h2 className="text-4xl font-bold text-center mb-16">Contact Us</h2>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          <AnimatedSection direction="left" className="order-2 md:order-1">
            <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <Mail className="text-red-600 flex-shrink-0" />
                <span className="break-all">zamoraheavyhitters@yahoo.com</span>
              </div>
              <div className="flex items-center gap-4">
                <Phone className="text-red-600 flex-shrink-0" />
                <span>+1 (772) 607-1982</span>
              </div>
              <div className="flex items-center gap-4">
                <MapPin className="text-red-600 flex-shrink-0" />
                <span>123 Boxing Street, Ringside City, RC 12345</span>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection direction="right" className="order-1 md:order-2">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  className="w-full px-4 py-2 bg-zinc-900 border border-gray-700 rounded-lg focus:outline-none focus:border-red-600"
                  required
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  className="w-full px-4 py-2 bg-zinc-900 border border-gray-700 rounded-lg focus:outline-none focus:border-red-600"
                  required
                />
              </div>
              <div>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your Message"
                  rows={4}
                  className="w-full px-4 py-2 bg-zinc-900 border border-gray-700 rounded-lg focus:outline-none focus:border-red-600"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
              >
                Send Message
              </button>
            </form>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default Contact;
