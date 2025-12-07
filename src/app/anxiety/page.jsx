"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useAnimation, AnimatePresence } from "framer-motion";
import { FaLeaf, FaRegCheckCircle, FaCalendarAlt, FaChevronDown, FaChevronUp } from "react-icons/fa";
import { MdOutlineSecurity } from "react-icons/md";

// 18 Insurance Logos Data
const insuranceLogos = Array.from({ length: 18 }, (_, i) => ({
  src: `/insurances${i + 1}.jpeg`,
  name: `Insurance Provider ${i + 1}`,
}));

export default function AnxietyPage() {
  const [isExpanded, setIsExpanded] = useState(false);
  const controls = useAnimation();

  // Marquee Scroll Logic
  useEffect(() => {
    controls.start({
      x: "-50%",
      transition: {
        duration: 40,
        ease: "linear",
        repeat: Infinity,
      },
    });
  }, [controls]);

  const features = [
    "Personalized Anxiety Screenings",
    "Evidence-Based Medication Care",
    "CBT & Mindfulness Strategies",
    "Stress Management Protocol"
  ];

  return (
    <main className="w-full bg-white overflow-hidden">
      {/* ================= HERO SECTION ================= */}
      <section className="relative w-full pt-20 pb-16 lg:pt-32 lg:pb-24 bg-gradient-to-b from-[#F0F9F9] to-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#E6F4F4] border border-[#CCE9E9] text-[#2D7A7A] text-sm font-black mb-6 uppercase tracking-widest">
              <FaLeaf className="text-[#3DBBBB]" /> Restore Calm
            </div>

            <h1 className="text-4xl md:text-6xl font-black text-gray-950 mb-6 leading-[1.1] tracking-tight">
              Quiet the Noise. <span className="text-[#3DBBBB]">Reclaim</span> Your Life.
            </h1>

            <p className="text-xl md:text-2xl text-gray-800 font-medium leading-relaxed mb-8 max-w-xl">
              Anxiety can feel like an unending cycle. We provide the clinical tools to break the loop and help you regain a sense of internal safety.
            </p>

            <Link 
              href="/appointments"
              className="inline-block px-10 py-5 rounded-2xl bg-[#FFAA00] text-white font-black text-xl shadow-xl hover:bg-black transition-all text-center"
            >
              Consult an Expert
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="p-4 bg-white rounded-[40px] shadow-2xl shadow-teal-100/50">
              <Image 
                src="/homeanxiety.jpg" 
                width={600}
                height={600}
                alt="Clinical Anxiety Treatment Illustration"
                className="rounded-[30px] object-cover"
                priority
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* ================= CLINICAL APPROACH ================= */}
      <section className="py-24 max-w-7xl mx-auto px-6 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="text-3xl md:text-4xl font-black text-gray-950 mb-8 leading-tight">
              Evidence-Based Care for <span className="border-b-4 border-[#3DBBBB]">Sustainable Peace.</span>
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              Anxiety is a physiological response, not a personality trait. Our approach integrates psychiatric stabilization with therapeutic techniques to lower your baseline stress and increase your emotional resilience.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {features.map((text, i) => (
                <div key={i} className="flex items-center gap-3 p-4 bg-[#F5FBFB] rounded-xl border border-[#CCE9E9]">
                  <FaRegCheckCircle className="text-[#3DBBBB] text-xl shrink-0" />
                  <span className="font-bold text-gray-900">{text}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="order-1 lg:order-2 bg-[#1A1A1A] p-10 md:p-14 rounded-[40px] text-white relative">
             <MdOutlineSecurity className="text-5xl text-[#3DBBBB] mb-6" />
             <h3 className="text-2xl md:text-3xl font-black mb-4">Internal Safety</h3>
             <p className="text-gray-400 text-lg leading-relaxed mb-8">
               We treat Generalized Anxiety, Social Anxiety, and Panic Disorders with a focus on long-term regulation rather than just temporary relief.
             </p>
             <Link href="/appointments" className="inline-flex items-center gap-2 font-black text-[#3DBBBB] hover:text-white transition group">
                Begin Your Path to Peace <span className="group-hover:translate-x-2 transition-transform">→</span>
             </Link>
          </div>
        </div>
      </section>

      {/* ================= INTEGRATED INSURANCE MARQUEE ================= */}
      <section className="relative w-full py-24 bg-gradient-to-b from-white via-[#F7FBFA] to-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-16 text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-[#1A1A1A] tracking-tight mb-6">
            Partnering for Your <span className="text-[#3DBBBB]">Care</span>
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto text-lg leading-relaxed font-medium">
            Financial worry shouldn't block emotional health. We accept most major providers.
            </p>
        </div>

        {/* Desktop Infinite Loop */}
        <div className="hidden lg:flex relative w-full overflow-hidden">
          <div className="absolute top-0 bottom-0 left-0 w-40 bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none" />
          <div className="absolute top-0 bottom-0 right-0 w-40 bg-gradient-to-l from-white via-white/80 to-transparent z-10 pointer-events-none" />

          <motion.div
            className="flex gap-8 w-max"
            animate={controls}
            onMouseEnter={() => controls.stop()}
            onMouseLeave={() => controls.start({ x: "-50%", transition: { duration: 40, ease: "linear", repeat: Infinity } })}
          >
            {[...insuranceLogos, ...insuranceLogos].map((logo, i) => (
              <div key={i} className="relative flex items-center justify-center w-[220px] h-[120px] bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:shadow-teal-100 transition-all group cursor-pointer">
                <div className="relative w-[140px] h-[70px]">
                  <Image src={logo.src} alt={logo.name} fill className="object-contain grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all" />
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Mobile Accordion Grid */}
        <div className="lg:hidden px-6 max-w-md mx-auto">
          <div className="grid grid-cols-2 gap-4">
            {(isExpanded ? insuranceLogos : insuranceLogos.slice(0, 6)).map((logo, i) => (
              <div key={i} className="bg-white rounded-xl shadow-sm p-4 h-24 flex items-center justify-center border border-gray-100">
                <div className="relative w-full h-full">
                  <Image src={logo.src} alt={logo.name} fill className="object-contain" />
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 flex justify-center">
              <button onClick={() => setIsExpanded(!isExpanded)} className="flex items-center gap-2 text-sm font-bold text-[#3DBBBB] bg-teal-50 px-6 py-3 rounded-full hover:bg-teal-100 transition-colors">
                  {isExpanded ? <>Show Less <FaChevronUp /></> : <>View All ({insuranceLogos.length}) <FaChevronDown /></>}
              </button>
          </div>
        </div>
      </section>

      {/* ================= FINAL CTA ================= */}
      <section className="py-24 text-center bg-[#FDFDFD]">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-black text-gray-950 mb-8 tracking-tight">
            The cycle ends <span className="text-[#3DBBBB]">today.</span>
          </h2>
          <button className="bg-gray-950 text-white font-black px-12 py-5 rounded-2xl text-xl hover:bg-[#3DBBBB] transition-all flex items-center gap-3 mx-auto shadow-2xl">
            <FaCalendarAlt /> Schedule Consultation
          </button>
        </div>
      </section>
    </main>
  );
}