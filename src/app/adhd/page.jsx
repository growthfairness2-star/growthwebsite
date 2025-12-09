"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useAnimation, AnimatePresence } from "framer-motion";
import { FaBrain, FaRegCheckCircle, FaCalendarAlt, FaShieldAlt, FaChevronDown, FaChevronUp } from "react-icons/fa";
import { MdOutlineHealthAndSafety } from "react-icons/md";

// 18 Insurance Logos Data
const insuranceLogos = Array.from({ length: 18 }, (_, i) => ({
  src: `/insurances${i + 1}.jpeg`,
  name: `Insurance Provider ${i + 1}`,
}));

export default function ADHDPage() {
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
    "Medication Management for Focus",
    "Executive Function Coaching",
    "Adult & Adolescent Diagnostics",
    "Behavioral Strategy Development"
  ];

  return (
    <main className="w-full bg-white overflow-hidden">
      {/* ================= HERO SECTION ================= */}
      <section className="relative w-full pt-20 pb-16 lg:pt-32 lg:pb-24 bg-gradient-to-b from-[#F4F9FA] to-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-sm font-black mb-6 uppercase tracking-widest">
              <FaBrain className="text-blue-500" /> Clinical Expertise
            </div>

            <h1 className="text-4xl md:text-6xl font-black text-gray-950 mb-6 leading-[1.1] tracking-tight">
              Compassionate <span className="text-[#306EFF]">ADHD</span> Treatment.
            </h1>

            <p className="text-xl md:text-2xl text-gray-800 font-medium leading-relaxed mb-8 max-w-xl">
              Moving beyond the "noise." We provide targeted psychiatric support to help you reclaim focus, productivity, and emotional regulation.
            </p>

            <Link 
              href="/appointments"
              className="inline-block px-10 py-5 rounded-2xl bg-[#FFAA00] text-white font-black text-xl shadow-xl hover:bg-black transition-all text-center"
            >
              Book Evaluation
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="p-4 bg-white rounded-[40px] shadow-2xl">
              <Image 
                src="/homeadhd.jpg" 
                width={600}
                height={600}
                alt="ADHD Clinical Support"
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
          <div>
            <h2 className="text-3xl md:text-4xl font-black text-gray-950 mb-8 leading-tight">
              Personalized Strategie(s) for a <span className="border-b-4 border-[#FFAA00]">Focused Life.</span>
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              ADHD is not just a lack of attention—it is a unique neurological configuration. Our clinical approach focuses on optimizing neurotransmitters while providing you with a behavioral toolkit that works for <em>your</em> brain.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {features.map((text, i) => (
                <div key={i} className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl border border-gray-100">
                  <FaRegCheckCircle className="text-[#FFAA00] text-xl shrink-0" />
                  <span className="font-bold text-gray-900">{text}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-[#1A1A1A] p-10 md:p-14 rounded-[40px] text-white">
             <MdOutlineHealthAndSafety className="text-5xl text-[#FFAA00] mb-6" />
             <h3 className="text-2xl md:text-3xl font-black mb-4">Diagnostic Precision</h3>
             <p className="text-gray-400 text-lg leading-relaxed mb-8">
               We utilize rigorous diagnostic standards to ensure precise psychiatric labeling and high-impact treatment plans.
             </p>
             <Link href="/appointments" className="inline-flex items-center gap-2 font-black text-[#FFAA00] hover:text-white transition group">
                Start Your Intake <span className="group-hover:translate-x-2 transition-transform">→</span>
             </Link>
          </div>
        </div>
      </section>

      {/* ================= INTEGRATED INSURANCE MARQUEE ================= */}
      <section className="relative w-full py-24 bg-gradient-to-b from-white via-[#F7FBFD] to-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-16 text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-[#1A1A1A] tracking-tight mb-6">
            Partnering for Your <span className="text-[#306EFF]">Care</span>
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto text-lg leading-relaxed font-medium">
            We proudly accept most major insurance plans to make ADHD care accessible and affordable.
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
              <div key={i} className="relative flex items-center justify-center w-[220px] h-[120px] bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all group cursor-pointer">
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
              <button onClick={() => setIsExpanded(!isExpanded)} className="flex items-center gap-2 text-sm font-bold text-[#306EFF] bg-blue-50 px-6 py-3 rounded-full hover:bg-blue-100 transition-colors">
                  {isExpanded ? <>Show Less <FaChevronUp /></> : <>View All ({insuranceLogos.length}) <FaChevronDown /></>}
              </button>
          </div>
        </div>
      </section>

    </main>
  );
}