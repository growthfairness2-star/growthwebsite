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
      content:
        "Booking an appointment gives you fast, convenient access to compassionate psychiatric and mental health care. We ensure every session is private, supportive, and tailored to your needs.",
    },
    {
      id: "how",
      label: "How It Works",
      icon: <FaCalendarCheck />,
      content:
        "We use Headway for secure scheduling. Choose your time, verify insurance, confirm your appointment, and you're set. No long forms. No delays. Everything is handled smoothly.",
    },
    {
      id: "insurance",
      label: "Insurance & Cost",
      icon: <FaShieldAlt />,
      content:
        "We accept major insurance plans including Aetna, Cigna, BlueCross BlueShield, Oscar, United Healthcare, and more. Self-pay options are also available for uninsured clients.",
    },
    {
      id: "expect",
      label: "What to Expect",
      icon: <FaSmile />,
      content:
        "Your provider will listen attentively, understand your goals, discuss treatment options, and guide you with care and respect. Each session is collaborative and judgment-free.",
    },
  ];

  const [activeTab, setActiveTab] = useState("why");

  return (
    <div className="w-full bg-[#F5FAFD] text-gray-900 pb-28 min-h-screen">
      
      {/* ================= HERO SECTION ================= */}
      <section className="relative w-full py-24 lg:py-40 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/bg-soft.png"
            alt="background"
            fill
            className="object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-white/50 backdrop-blur-[2px]"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-16 grid lg:grid-cols-2 gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center"
          >
            <div className="relative group">
               <div className="absolute -inset-1 bg-gradient-to-r from-[#FFAA00] to-[#E69900] rounded-3xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
               <Image
                src="/appoint.png"
                alt="Appointment Image"
                width={550}
                height={550}
                className="relative rounded-3xl shadow-2xl object-cover"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h1 className="text-5xl md:text-6xl font-black tracking-tight leading-[1.1] mb-6">
              Book an <span className="text-[#FFAA00]">Appointment</span>
            </h1>

            <p className="text-gray-700 text-xl leading-relaxed max-w-lg mb-10 font-medium">
              Take the first step towards mental clarity. Schedule your session securely via Headway.
            </p>

            <button
              onClick={() => window.open(headway, "_blank")}
              className="bg-[#FFAA00] hover:bg-[#E69900] text-white font-black px-12 py-5 rounded-2xl shadow-[0_20px_40px_-12px_rgba(255,170,0,0.4)] text-xl transition transform hover:-translate-y-1 active:scale-95"
            >
              Start My Journey
            </button>
          </motion.div>
        </div>
      </section>

      {/* ================= TABS SECTION ================= */}
      <section className="max-w-6xl mx-auto px-6 lg:px-10 -mt-10 relative z-20">

        {/* TAB BUTTONS - PRO LOGIC FOR ICON VISIBILITY */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`group relative h-32 flex flex-col items-center justify-center px-6 rounded-2xl transition-all duration-300 border-2 overflow-hidden
                  ${isActive 
                    ? "bg-[#FFAA00] border-[#FFAA00] shadow-xl" 
                    : "bg-white border-gray-100 hover:border-[#FFAA00]/40 text-gray-700 shadow-sm"
                  }`}
              >
                <AnimatePresence mode="wait">
                  {!isActive && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0 }}
                      className="text-3xl mb-3 text-[#FFAA00] transition-colors"
                    >
                      {tab.icon}
                    </motion.div>
                  )}
                </AnimatePresence>
                
                <span className={`font-black tracking-wide text-lg transition-colors
                  ${isActive ? "text-white mt-0" : "text-gray-900 group-hover:text-[#FFAA00]"}`}>
                  {tab.label}
                </span>
              </button>
            );
          })}
        </div>

        {/* TAB CONTENT CAROUSEL */}
        <div className="mt-12 bg-white rounded-[32px] shadow-[0_10px_50px_rgba(0,0,0,0.05)] p-10 md:p-14 min-h-[220px] flex items-center border border-gray-50">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="w-full"
            >
              <h3 className="text-[#FFAA00] font-black text-sm uppercase tracking-[0.2em] mb-4">
                {tabs.find(t => t.id === activeTab)?.label}
              </h3>
              <p className="text-gray-900 text-2xl md:text-3xl font-bold leading-snug">
                {tabs.find((t) => t.id === activeTab)?.content}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* REINFORCED CALL TO ACTION */}
        <div className="flex flex-col items-center mt-16">
          <p className="text-gray-500 font-bold mb-6 tracking-wide uppercase text-sm">Safe • Secure • HIPAA Compliant</p>
          <button
            onClick={() => window.open(headway, "_blank")}
            className="group inline-flex items-center gap-4 bg-[#FFAA00] hover:bg-black text-white font-black px-12 py-5 rounded-2xl shadow-2xl text-xl transition-all duration-500"
          >
            Finalize My Appointment Now
            <FaCalendarCheck className="group-hover:rotate-12 transition-transform" />
          </button>
        </div>

      </section>
    </div>
  );
}