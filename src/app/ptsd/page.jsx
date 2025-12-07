"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useAnimation, AnimatePresence } from "framer-motion";
import { FaShieldAlt, FaRegCheckCircle, FaCalendarAlt, FaChevronDown, FaChevronUp } from "react-icons/fa";
import { MdOutlineHealing } from "react-icons/md";

const insuranceLogos = Array.from({ length: 18 }, (_, i) => ({
  src: `/insurances${i + 1}.jpeg`,
  name: `Insurance Provider ${i + 1}`,
}));

export default function PTSDPage() {
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
    "Trauma-Informed Psychiatric Care",
    "Evidence-Based Symptom Management",
    "Trigger Desensitization Support",
    "Safety & Stabilization Planning"
  ];

  return (
    <main className="w-full bg-white overflow-hidden">
      {/* ================= HERO SECTION ================= */}
      <section className="relative w-full pt-20 pb-16 lg:pt-32 lg:pb-24 bg-[#F8FAFB]">
        <div className="max-w-7xl mx-auto px-6 lg:px-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-slate-700 text-sm font-black mb-6 uppercase tracking-widest">
              <FaShieldAlt className="text-slate-500" /> Grounded Recovery
            </div>

            <h1 className="text-4xl md:text-6xl font-black text-slate-950 mb-6 leading-[1.1] tracking-tight">
              Reclaim Safety. <span className="text-[#306EFF]">Process</span> History.
            </h1>

            <p className="text-xl md:text-2xl text-slate-800 font-medium leading-relaxed mb-8 max-w-xl">
              Trauma can trap the mind in the past. We provide a clinically safe space to stabilize triggers and rebuild your foundation of peace.
            </p>

            <Link 
              href="/appointments"
              className="inline-block px-10 py-5 rounded-2xl bg-slate-950 text-white font-black text-xl shadow-xl hover:bg-[#306EFF] transition-all text-center"
            >
              Start My Intake
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="p-3 bg-white rounded-[40px] shadow-2xl shadow-slate-200/50 border border-slate-100">
              <Image 
                src="/homeptsd.jpg" 
                width={600}
                height={600}
                alt="PTSD Recovery Illustration"
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
            <h2 className="text-3xl md:text-4xl font-black text-slate-950 mb-8 leading-tight">
              A Clinically <span className="text-[#306EFF]">Stabilizing</span> Environment.
            </h2>
            <p className="text-lg text-slate-700 leading-relaxed mb-8">
              Post-Traumatic Stress Disorder requires more than just conversation; it requires neurological regulation. We combine medication management for hypervigilance with trauma-informed therapy to create lasting recovery.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {features.map((text, i) => (
                <div key={i} className="flex items-center gap-3 p-4 bg-slate-50 rounded-xl border border-slate-100">
                  <FaRegCheckCircle className="text-[#306EFF] text-xl shrink-0" />
                  <span className="font-bold text-slate-900">{text}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-slate-900 p-10 md:p-14 rounded-[40px] text-white shadow-2xl relative">
             <MdOutlineHealing className="text-5xl text-[#306EFF] mb-6" />
             <h3 className="text-2xl md:text-3xl font-black mb-4">Patient Sovereignty</h3>
             <p className="text-slate-400 text-lg leading-relaxed mb-8 font-medium">
               Our intake process is patient-led. You set the pace. We provide the expertise to manage symptoms like flash-backs and sleep disruption.
             </p>
             <Link href="/appointments" className="inline-flex items-center gap-2 font-black text-[#306EFF] hover:text-white transition group">
                Begin Guided Recovery <span className="group-hover:translate-x-2 transition-transform">→</span>
             </Link>
          </div>
        </div>
      </section>

      {/* ================= PRO DESIGNER INSURANCE SECTION ================= */}
      <section className="relative py-24 bg-[#F8F9FA] border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-16 flex flex-col lg:flex-row justify-between items-center mb-16 gap-8">
            <div className="max-w-xl text-center lg:text-left">
              <h2 className="text-4xl font-black text-slate-950 mb-4 tracking-tight">
              Solid Foundation for <span className="text-[#306EFF]">Care</span>
              </h2>
              <p className="text-slate-600 text-lg font-medium leading-relaxed">
              We focus on clinical safety; let insurance focus on the cost. We accept a wide range of providers to ensure PTSD care remains accessible.
              </p>
            </div>
            <div className="flex gap-4">
              <div className="px-6 py-3 bg-white rounded-2xl border border-slate-200 text-slate-900 font-bold shadow-sm">Verified Providers</div>
              <div className="px-6 py-3 bg-white rounded-2xl border border-slate-200 text-slate-900 font-bold shadow-sm">Secure Billing</div>
            </div>
        </div>

        <div className="hidden lg:flex relative w-full overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-r from-[#F8F9FA] via-transparent to-[#F8F9FA] z-10 pointer-events-none" />
          <motion.div
            className="flex gap-6 w-max"
            animate={controls}
            onMouseEnter={() => controls.stop()}
            onMouseLeave={() => controls.start({ x: "-50%", transition: { duration: 40, ease: "linear", repeat: Infinity } })}
          >
            {[...insuranceLogos, ...insuranceLogos].map((logo, i) => (
              <div key={i} className="flex items-center justify-center w-[240px] h-[140px] bg-white rounded-3xl border border-slate-200 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-xl hover:border-[#306EFF]/20 transition-all duration-300">
                <div className="relative w-[150px] h-[80px]">
                  <Image src={logo.src} alt={logo.name} fill className="object-contain filter grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500" />
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        <div className="lg:hidden px-6 max-w-md mx-auto">
          <div className="grid grid-cols-2 gap-4">
            {(isExpanded ? insuranceLogos : insuranceLogos.slice(0, 6)).map((logo, i) => (
              <div key={i} className="bg-white rounded-2xl shadow-sm p-4 h-28 flex items-center justify-center border border-slate-100">
                <Image src={logo.src} alt={logo.name} width={100} height={60} className="object-contain" />
              </div>
            ))}
          </div>
          <button onClick={() => setIsExpanded(!isExpanded)} className="mt-8 mx-auto flex items-center gap-2 font-black text-slate-900 bg-white border border-slate-200 px-8 py-3 rounded-2xl hover:bg-slate-50 transition-colors shadow-sm">
            {isExpanded ? <>Collapse List <FaChevronUp /></> : <>See Full Network ({insuranceLogos.length}) <FaChevronDown /></>}
          </button>
        </div>
      </section>

      <section className="py-24 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-black text-slate-950 mb-8 tracking-tight">
            Your journey home <span className="text-[#306EFF]">starts here.</span>
          </h2>
          <button className="bg-slate-950 text-white font-black px-12 py-5 rounded-2xl text-xl hover:bg-[#306EFF] transition-all flex items-center gap-3 mx-auto shadow-2xl">
            <FaCalendarAlt /> Schedule Trauma Evaluation
          </button>
        </div>
      </section>
    </main>
  );
}