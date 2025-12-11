"use client";

import Image from "next/image";
import { motion, useAnimation, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa"; // Ensure you have react-icons installed

// MOCK DATA: In production, ensure these are transparent PNGs or SVGs for the best effect
const insuranceLogos = Array.from({ length: 18 }, (_, i) => ({
  src: `/insurances${i + 1}.jpeg`, // Ideally .png or .svg
  name: `Insurance Provider ${i + 1}`,
}));

export default function InsuranceMarquee() {
  const [isExpanded, setIsExpanded] = useState(false);
  const controls = useAnimation();

  // Optimized Infinite Scroll Logic
  useEffect(() => {
    controls.start({
      x: "-50%",
      transition: {
        duration: 40, // Tuned for readability
        ease: "linear",
        repeat: Infinity,
      },
    });
  }, [controls]);

  return (
    <section className="relative w-full py-24 bg-gradient-to-b from-white via-[#F7FBFD] to-white overflow-hidden">
      
      {/* HEADER */}
      <div className="max-w-7xl mx-auto px-6 lg:px-16 text-center mb-16">
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
        >
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#1A1A1A] tracking-tight mb-6">
            Partnering for Your <span className="text-[#306EFF]">Care</span>
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto text-lg md:text-xl leading-relaxed">
            We believe accessible mental health care is a right. We proudly accept most major insurance plans to minimize your out-of-pocket costs.
            </p>
        </motion.div>
      </div>

      {/* --- DESKTOP MARQUEE (Hidden on Mobile) --- */}
      <div className="hidden lg:flex relative w-full overflow-hidden group">
        
        {/* Cinematic Fade Masks */}
        <div className="absolute top-0 bottom-0 left-0 w-40 bg-gradient-to-r from-white via-white/90 to-transparent z-10 pointer-events-none" />
        <div className="absolute top-0 bottom-0 right-0 w-40 bg-gradient-to-l from-white via-white/90 to-transparent z-10 pointer-events-none" />

        <motion.div
          className="flex gap-8 w-max"
          animate={controls}
          onMouseEnter={() => controls.stop()}
          onMouseLeave={() => controls.start({ x: "-50%", transition: { duration: 40, ease: "linear", repeat: Infinity } })}
        >
          {/* Doubled list for seamless loop */}
          {[...insuranceLogos, ...insuranceLogos].map((logo, i) => (
            <div
              key={i}
              className="relative group/card flex items-center justify-center w-[220px] h-[120px] bg-white rounded-2xl border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_10px_30px_rgba(48,110,255,0.15)] hover:border-[#306EFF]/20 transition-all duration-300 cursor-pointer"
            >
              <div className="relative w-[140px] h-[70px]">
                <Image
                  src={logo.src}
                  alt={logo.name}
                  fill
                  // ----------------- MODIFIED LINE -----------------
                  className="object-contain transition-all duration-300 group-hover/card:scale-110"
                  // -------------------------------------------------
                />
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* --- MOBILE SMART GRID (Visible on Mobile/Tablet) --- */}
      <div className="lg:hidden px-6 max-w-md mx-auto">
        <motion.div 
            layout
            className="grid grid-cols-2 gap-4"
        >
          <AnimatePresence>
            {/* Show first 6 by default, show all if expanded */}
            {(isExpanded ? insuranceLogos : insuranceLogos.slice(0, 6)).map((logo, i) => (
              <motion.div
                layout
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-xl shadow-sm p-4 h-24 flex items-center justify-center border border-gray-100"
              >
                <div className="relative w-full h-full">
                    <Image
                    src={logo.src}
                    alt={logo.name}
                    fill
                    className="object-contain" // Kept color on mobile for clarity as there is no hover
                    />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Expand / Collapse Button */}
        <div className="mt-8 flex justify-center">
            <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="flex items-center gap-2 text-sm font-bold text-[#306EFF] bg-blue-50 px-6 py-3 rounded-full hover:bg-blue-100 transition-colors"
            >
                {isExpanded ? (
                    <>Show Less <FaChevronUp /></>
                ) : (
                    <>View All Providers ({insuranceLogos.length}) <FaChevronDown /></>
                )}
            </button>
        </div>
      </div>

    </section>
  );
}