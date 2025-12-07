"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useAnimation, AnimatePresence } from "framer-motion";
import { FaBalanceScale, FaRegCheckCircle, FaCalendarAlt, FaChevronDown, FaChevronUp } from "react-icons/fa";
import { MdOutlineTrackChanges } from "react-icons/md";

const insuranceLogos = Array.from({ length: 18 }, (_, i) => ({
  src: `/insurances${i + 1}.jpeg`,
  name: `Insurance Provider ${i + 1}`,
}));

export default function BipolarPage() {
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
    "Expert Mood Stabilization",
    "Cycle Awareness Training",
    "Evidence-Based Medication Management",
    "Relapse Prevention Strategy"
  ];

  return (
    <main className="w-full bg-white overflow-hidden">
      {/* ================= HERO SECTION ================= */}
      <section className="relative w-full pt-20 pb-16 lg:pt-32 lg:pb-24 bg-gradient-to-b from-[#F2F4FF] to-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-700 text-sm font-black mb-6 uppercase tracking-widest">
              <FaBalanceScale className="text-indigo-500" /> Finding Equilibrium
            </div>

            <h1 className="text-4xl md:text-6xl font-black text-gray-950 mb-6 leading-[1.1] tracking-tight">
              Stabilize the Cycle. <span className="text-[#306EFF]">Reclaim</span> Your Center.
            </h1>

            <p className="text-xl md:text-2xl text-gray-800 font-medium leading-relaxed mb-8 max-w-xl">
              Bipolar Disorder requires a nuanced clinical partner. We provide the expert psychiatric stabilization needed to bridge the gap between cycles and help you live with consistent energy.
            </p>

            <Link 
              href="/appointments"
              className="inline-block px-10 py-5 rounded-2xl bg-indigo-950 text-white font-black text-xl shadow-xl hover:bg-[#306EFF] transition-all text-center"
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
            <div className="p-3 bg-white rounded-[40px] shadow-2xl border border-indigo-50">
              <Image 
                src="/bipolar.png" 
                width={600}
                height={600}
                alt="Expert Bipolar Clinical Care"
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
              Precision Care for <span className="text-indigo-600">Long-Term Mood</span> Stabilization.
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              Bipolar management is a delicate science. Our protocol prioritizes sleep architecture, energy tracking, and the latest in mood-stabilizing medication to prevent both depressive and manic phases effectively.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {features.map((text, i) => (
                <div key={i} className="flex items-center gap-3 p-4 bg-indigo-50/50 rounded-xl border border-indigo-100">
                  <FaRegCheckCircle className="text-indigo-600 text-xl shrink-0" />
                  <span className="font-bold text-gray-900">{text}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-slate-900 p-10 md:p-14 rounded-[40px] text-white shadow-2xl relative overflow-hidden">
             <div className="absolute top-0 right-0 w-32 h-32 bg-[#306EFF] opacity-10 rounded-full -mr-10 -mt-10" />
             <MdOutlineTrackChanges className="text-5xl text-indigo-400 mb-6" />
             <h3 className="text-2xl md:text-3xl font-black mb-4">Responsive Management</h3>
             <p className="text-gray-400 text-lg leading-relaxed mb-8 font-medium">
               Mood cycles change, and so should your treatment. We maintain a high frequency of intake monitoring to catch shifts early and adjust protocols in real-time.
             </p>
             <Link href="/appointments" className="inline-flex items-center gap-2 font-black text-indigo-400 hover:text-white transition group">
                Begin Clinical Onboarding <span className="group-hover:translate-x-2 transition-transform">→</span>
             </Link>
          </div>
        </div>
      </section>

      {/* ================= PRO DESIGNER INSURANCE SECTION ================= */}
      <section className="relative py-24 bg-white border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-16 text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-gray-950 mb-4 tracking-tight">
            Consistency Through <span className="text-indigo-600">Coverage</span>
            </h2>
            <p className="text-gray-600 text-lg font-medium max-w-2xl mx-auto leading-relaxed">
            Continuity is the cornerstone of Bipolar health. We accept major insurance providers to ensure your care remains consistent and affordable.
            </p>
        </div>

        <div className="hidden lg:flex relative w-full overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-r from-white via-transparent to-white z-10 pointer-events-none" />
          <motion.div
            className="flex gap-8 w-max"
            animate={controls}
            onMouseEnter={() => controls.stop()}
            onMouseLeave={() => controls.start({ x: "-50%", transition: { duration: 40, ease: "linear", repeat: Infinity } })}
          >
            {[...insuranceLogos, ...insuranceLogos].map((logo, i) => (
              <div key={i} className="flex items-center justify-center w-[220px] h-[120px] bg-white rounded-3xl border border-indigo-50 shadow-sm hover:shadow-2xl hover:border-indigo-100 transition-all duration-300">
                <div className="relative w-[140px] h-[70px]">
                  <Image src={logo.src} alt={logo.name} fill className="object-contain filter grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500" />
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        <div className="lg:hidden px-6 max-w-md mx-auto">
          <div className="grid grid-cols-2 gap-4">
            {(isExpanded ? insuranceLogos : insuranceLogos.slice(0, 6)).map((logo, i) => (
              <div key={i} className="bg-white rounded-2xl shadow-sm p-4 h-28 flex items-center justify-center border border-gray-100">
                <Image src={logo.src} alt={logo.name} width={100} height={60} className="object-contain" />
              </div>
            ))}
          </div>
          <button onClick={() => setIsExpanded(!isExpanded)} className="mt-8 mx-auto flex items-center gap-2 font-black text-indigo-700 bg-indigo-50 px-8 py-3 rounded-2xl hover:bg-indigo-100 transition-colors shadow-sm">
            {isExpanded ? <>Collapse Network <FaChevronUp /></> : <>See Full Network ({insuranceLogos.length}) <FaChevronDown /></>}
          </button>
        </div>
      </section>

      {/* ================= FINAL CTA ================= */}
      <section className="py-24 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-black text-gray-950 mb-8 tracking-tight">
            Stabilize your <span className="text-indigo-600">future today.</span>
          </h2>
          <button className="bg-indigo-950 text-white font-black px-12 py-5 rounded-2xl text-xl hover:bg-[#306EFF] transition-all flex items-center gap-3 mx-auto shadow-2xl">
            <FaCalendarAlt /> Schedule Specialist Intake
          </button>
        </div>
      </section>
    </main>
  );
}