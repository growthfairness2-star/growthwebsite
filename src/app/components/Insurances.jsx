"use client";

import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

// ALL 18 insurance logos
const insuranceLogos = Array.from({ length: 18 }, (_, i) => ({
  src: `/insurances${i + 1}.jpeg`,
  name: `Insurance ${i + 1}`,
}));

export default function InsuranceMarquee() {
  const controls = useAnimation();

  // Smooth slow scrolling motion
  const startScroll = () => {
    controls.start({
      x: ["0%", "-50%"],
      transition: {
        duration: 120, // SUPER SLOW (Luxury feel)
        repeat: Infinity,
        ease: "linear",
      },
    });
  };

  useEffect(() => {
    startScroll();
  }, []);

  const pauseScroll = () => controls.stop();
  const resumeScroll = () => startScroll();

  return (
    <section className="relative w-full py-20 bg-[#F7FBFD] overflow-hidden">

      <div className="max-w-7xl mx-auto px-6 lg:px-16 text-center">
        <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
          Insurances We Accept
        </h2>

        <p className="text-gray-600 max-w-2xl mx-auto mb-12 text-lg">
          We work with a wide range of insurance providers to keep care affordable.
        </p>
      </div>

      {/* Fade masks - PRO DESIGN */}
      <div className="absolute top-0 bottom-0 left-0 w-32 bg-gradient-to-r from-[#F7FBFD] to-transparent pointer-events-none z-10" />
      <div className="absolute top-0 bottom-0 right-0 w-32 bg-gradient-to-l from-[#F7FBFD] to-transparent pointer-events-none z-10" />

      {/* DESKTOP MARQUEE */}
      <div className="hidden md:block overflow-hidden w-full">
        <motion.div
          animate={controls}
          onMouseEnter={pauseScroll}
          onMouseLeave={resumeScroll}
          className="flex gap-16 w-max"
        >
          {[...insuranceLogos, ...insuranceLogos].map((logo, i) => (
            <div
              key={i}
              className="bg-white rounded-xl shadow-sm hover:shadow-md transition p-6 min-w-[200px] flex items-center justify-center border border-gray-100"
            >
              <Image
                src={logo.src}
                alt={logo.name}
                width={160}
                height={100}
                className="object-contain"
              />
            </div>
          ))}
        </motion.div>
      </div>

      {/* MOBILE STATIC GRID */}
      <div className="grid md:hidden grid-cols-2 sm:grid-cols-3 gap-6 px-6 mt-10">
        {insuranceLogos.map((logo, i) => (
          <div
            key={i}
            className="bg-white rounded-xl shadow-sm p-4 flex items-center justify-center border border-gray-100"
          >
            <Image
              src={logo.src}
              alt={logo.name}
              width={140}
              height={80}
              className="object-contain"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
