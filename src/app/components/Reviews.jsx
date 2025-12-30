"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaStar, FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

const testimonials = [
  {
    name: "Anthony Weaver",
    text: "I recommend Raymond. Getting back on my medication has always been a challenge but with the Right person, it can be easy and smooth! Very Easy to talk to and get you where you need to be.",
    highlight: "The best support."
  },
  {
    name: "Askia Rahman",
    text: "Dr. Raymond has been very helpful to me in managing my medication as well as encouraging a healthy lifestyle. I’ve been doing much better since our first meeting.",
    highlight: "Very grateful."
  },
  {
    name: "Tom Peters",
    text: "Dr. Raymond has been very supportive and helpful to my mental health journey. He is a great listener and always a good sounding board. I recommend Dr Raymond.",
    highlight: "A great listener."
  },
  {
    name: "Jelesa Gregory",
    text: "Meeting with Raymond has truly made a difference in my life. He manages the medicine while also making sure to stress the importance of a healthy lifestyle.",
    highlight: "Truly made a difference."
  }
];

export default function Reviews() {
  const [index, setIndex] = useState(0);

  const nextStep = () => {
    setIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevStep = () => {
    setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="relative py-24 bg-[#0A0A0A] overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute top-[-10%] left-[-5%] w-[400px] h-[400px] bg-[#FFAA00] rounded-full blur-[120px]" />
      </div>

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-[#FFAA00] uppercase tracking-[0.2em] font-bold text-sm mb-4">
            Patient Stories
          </h2>
          <h3 className="text-4xl md:text-5xl font-light text-white italic">
            Trusted by individuals seeking <span className="font-bold not-italic">better wellness.</span>
          </h3>
        </div>

        <div className="relative min-h-[400px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5, ease: "circOut" }}
              className="w-full text-center"
            >
              <div className="flex justify-center mb-8 text-[#FFAA00]">
                {[...Array(5)].map((_, i) => <FaStar key={i} className="mx-1 text-2xl" />)}
              </div>

              <FaQuoteRight className="text-[#FFAA00] text-6xl mx-auto mb-8 opacity-20" />

              <blockquote className="text-2xl md:text-3xl lg:text-4xl text-white font-medium leading-snug mb-10">
                "{testimonials[index].text}"
                <span className="block mt-4 text-[#FFAA00] italic font-light text-xl">
                  — {testimonials[index].highlight}
                </span>
              </blockquote>

              <div className="flex flex-col items-center">
                <div className="h-px w-12 bg-[#FFAA00] mb-4" />
                <cite className="not-italic text-white font-bold text-xl tracking-wide">
                  {testimonials[index].name}
                </cite>
                <span className="text-gray-500 text-sm mt-1 uppercase tracking-widest">
                  Verified Patient
                </span>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Arrows */}
          <div className="absolute top-1/2 -translate-y-1/2 w-full flex justify-between px-4 md:-px-12 pointer-events-none">
            <button
              onClick={prevStep}
              className="pointer-events-auto p-4 rounded-full border border-white/10 text-white hover:bg-[#FFAA00] hover:text-black transition-all duration-300"
            >
              <FaChevronLeft size={24} />
            </button>
            <button
              onClick={nextStep}
              className="pointer-events-auto p-4 rounded-full border border-white/10 text-white hover:bg-[#FFAA00] hover:text-black transition-all duration-300"
            >
              <FaChevronRight size={24} />
            </button>
          </div>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center gap-3 mt-12">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`h-1 transition-all duration-500 rounded-full ${
                i === index ? "w-12 bg-[#FFAA00]" : "w-4 bg-white/20"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}