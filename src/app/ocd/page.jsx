"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useAnimation } from "framer-motion";
import { FaShapes, FaRegCheckCircle, FaCalendarAlt, FaChevronDown, FaChevronUp } from "react-icons/fa";
import { MdOutlinePrecisionManufacturing } from "react-icons/md";

const insuranceLogos = Array.from({ length: 18 }, (_, i) => ({
  src: `/insurances${i + 1}.jpeg`,
  name: `Insurance Provider ${i + 1}`,
}));

export default function OCDPage() {
  const [isExpanded, setIsExpanded] = useState(false);
  const controls = useAnimation();

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
    "Expert Medication Management",
    "Evidence-Based Exposure Support",
    "Symptom-Specific Diagnostics",
    "Cognitive Restructuring Tools"
  ];

  return (
    <main className="w-full bg-white overflow-hidden">

      {/* ================= HERO SECTION ================= */}
      <section className="relative w-full pt-20 pb-16 lg:pt-32 lg:pb-24 bg-[#F4F7FA]">
        <div className="max-w-7xl mx-auto px-6 lg:px-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-100/50 border border-blue-200 text-blue-800 text-sm font-black mb-6 uppercase tracking-widest">
              <FaShapes className="text-blue-500" /> Structured Support
            </div>

            <h1 className="text-4xl md:text-6xl font-black text-gray-950 mb-6 leading-[1.1] tracking-tight">
              Break the Cycle. <span className="text-[#306EFF]">Regain</span> Control.
            </h1>

            <p className="text-xl md:text-2xl text-gray-800 font-medium leading-relaxed mb-8 max-w-xl">
              OCD creates a cycle of intrusive thoughts and compulsions. We provide specialized clinical intervention to help you interrupt the patterns and live freely.
            </p>

            <Link 
              href="/appointments"
              className="inline-block px-10 py-5 rounded-2xl bg-gray-950 text-white font-black text-xl shadow-xl hover:bg-[#306EFF] transition-all text-center"
            >
              Consult a Specialist
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="p-3 bg-white rounded-[40px] shadow-2xl border border-blue-50">
              <Image 
                src="/ocd.png" 
                width={600}
                height={600}
                alt="OCD Professional Care Illustration"
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
              A Targeted Approach to <span className="border-b-4 border-[#306EFF]">Cognitive Order.</span>
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              Treating OCD requires a sophisticated balance of psychiatric care and behavioral management. Our evidence-based protocols focus on reducing the frequency of intrusive thoughts while stabilizing the physiological urge to perform compulsions.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {features.map((text, i) => (
                <div key={i} className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl border border-gray-100 transition-colors hover:border-[#306EFF]/30">
                  <FaRegCheckCircle className="text-[#306EFF] text-xl shrink-0" />
                  <span className="font-bold text-gray-900">{text}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-[#1A1A1A] p-10 md:p-14 rounded-[40px] text-white shadow-2xl relative">
             <MdOutlinePrecisionManufacturing className="text-5xl text-[#306EFF] mb-6" />
             <h3 className="text-2xl md:text-3xl font-black mb-4">Precision Diagnostics</h3>
             <p className="text-gray-400 text-lg leading-relaxed mb-8">
               We utilize clinical screenings to accurately identify sub-types of OCD, ensuring your treatment plan addresses your specific symptoms with maximum effectiveness.
             </p>
             <Link href="/appointments" className="inline-flex items-center gap-2 font-black text-[#306EFF] hover:text-white transition group">
                Start Precision Intake <span className="group-hover:translate-x-2 transition-transform">→</span>
             </Link>
          </div>
        </div>
      </section>

      {/* ================= INSURANCE SECTION ================= */}
      <section className="relative py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-16 text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-gray-950 mb-4 tracking-tight">
            Covered Care for a <span className="text-[#306EFF]">Better Life</span>
            </h2>
            <p className="text-gray-600 text-lg font-medium leading-relaxed max-w-2xl mx-auto">
            We partner with major insurance networks to ensure high-quality psychiatric OCD care is financially sustainable for you.
            </p>
        </div>

        {/* Desktop sliding logos */}
        <div className="hidden lg:flex relative w-full overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-r from-white via-transparent to-white z-10 pointer-events-none" />
          <motion.div
            className="flex gap-8 w-max"
            animate={controls}
            onMouseEnter={() => controls.stop()}
            onMouseLeave={() =>
              controls.start({ 
                x: "-50%", 
                transition: { duration: 40, ease: "linear", repeat: Infinity } 
              })
            }
          >
            {[...insuranceLogos, ...insuranceLogos].map((logo, i) => (
              <div key={i} className="flex items-center justify-center w-[220px] h-[120px] bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:border-[#306EFF]/20 transition-all duration-300">
                <div className="relative w-[140px] h-[70px]">
                  <Image src={logo.src} alt={logo.name} fill className="object-contain filter grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500" />
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Mobile insurance grid */}
        <div className="lg:hidden px-6 max-w-md mx-auto">
          <div className="grid grid-cols-2 gap-4">
            {(isExpanded ? insuranceLogos : insuranceLogos.slice(0, 6)).map((logo, i) => (
              <div key={i} className="bg-white rounded-xl shadow-sm p-4 h-24 flex items-center justify-center border border-gray-100">
                <Image src={logo.src} alt={logo.name} width={120} height={70} className="object-contain" />
              </div>
            ))}
          </div>
          <button 
            onClick={() => setIsExpanded(!isExpanded)} 
            className="mt-8 mx-auto flex items-center gap-2 font-black text-[#306EFF] bg-blue-50 px-8 py-3 rounded-full hover:bg-blue-100 transition-colors shadow-sm"
          >
            {isExpanded ? <>View Fewer <FaChevronUp /></> : <>See All Networks ({insuranceLogos.length}) <FaChevronDown /></>}
          </button>
        </div>
    
      </section>
    </main>
  );
}
