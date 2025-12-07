"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaCalendarCheck, FaLightbulb, FaShieldAlt, FaSmile } from "react-icons/fa";

export default function AppointmentsPage() {
  const headway = "https://care.headway.co/providers/raymond-obiajulu";

  const tabs = [
    {
      id: "why",
      label: "Why Book?",
      icon: <FaLightbulb />,
      content: "Professional psychiatric and mental health care designed around your convenience and recovery goals.",
    },
    {
      id: "how",
      label: "Process",
      icon: <FaCalendarCheck />,
      content: "Choose your time via Headway, verify your insurance instantly, and confirm your session in under 2 minutes.",
    },
    {
      id: "insurance",
      label: "Insurance",
      icon: <FaShieldAlt />,
      content: "We accept major plans like Aetna, Cigna, and United Healthcare. Transparent pricing for self-pay clients.",
    },
    {
      id: "expect",
      label: "Experience",
      icon: <FaSmile />,
      content: "A judgment-free, collaborative environment where you are truly heard and professionally guided.",
    },
  ];

  const [activeTab, setActiveTab] = useState("why");

  return (
    <div className="w-full bg-[#F5FAFD] text-gray-900 pb-20 overflow-x-hidden">
      
      {/* ================= HERO SECTION ================= */}
      <section className="relative w-full py-16 lg:py-32">
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-16 grid lg:grid-cols-2 gap-10 items-center text-center lg:text-left">
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex justify-center"
          >
            <Image
              src="/appoint.png"
              alt="Appointment"
              width={500}
              height={500}
              className="rounded-3xl shadow-xl w-[280px] md:w-[500px]" // Responsive sizing for image
            />
          </motion.div>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            {/* MOBILE: 3xl (30px) | DESKTOP: 6xl (60px) */}
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-black leading-tight mb-4">
              Your Path to <span className="text-[#FFAA00]">Wellness</span>
            </h1>

            {/* MOBILE: lg (18px) | DESKTOP: xl (20px) */}
            <p className="text-gray-700 text-lg md:text-xl mb-8 max-w-lg mx-auto lg:mx-0">
              High-quality mental health support that is easy to schedule and covered by insurance.
            </p>

            <button
              onClick={() => window.open(headway, "_blank")}
              className="bg-[#FFAA00] text-white font-black px-10 py-4 rounded-xl text-lg hover:bg-black transition-all"
            >
              Book an Appointment
            </button>
          </motion.div>
        </div>
      </section>

      {/* ================= TABS SECTION ================= */}
      <section className="max-w-6xl mx-auto px-6 mt-10">

        {/* TAB BUTTONS: Grid adjusts based on mobile/desktop */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`relative flex flex-col items-center justify-center p-4 h-24 md:h-28 rounded-2xl transition border-2 
                  ${isActive 
                    ? "bg-[#FFAA00] border-[#FFAA00] text-white" 
                    : "bg-white border-gray-100 text-gray-700"
                  }`}
              >
                {!isActive && (
                  <div className="text-2xl mb-1 text-[#FFAA00]">{tab.icon}</div>
                )}
                {/* Labels use text-sm to avoid breaking on narrow mobile screens */}
                <span className="font-bold text-sm md:text-base tracking-tight">{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* TAB CONTENT: Mobile-optimized padding and size */}
        <div className="mt-8 bg-white rounded-3xl shadow-sm p-6 md:p-12 min-h-[160px] border border-gray-50 flex items-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-[#FFAA00] font-bold text-xs uppercase tracking-widest mb-2">
                {tabs.find(t => t.id === activeTab)?.label}
              </h3>
              {/* MOBILE: xl (20px) | DESKTOP: 2xl (24px) */}
              <p className="text-gray-900 text-xl md:text-2xl font-bold leading-snug">
                {tabs.find((t) => t.id === activeTab)?.content}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

      </section>
    </div>
  );
}