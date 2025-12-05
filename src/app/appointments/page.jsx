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
      icon: <FaLightbulb className="text-[#FFAA00]" />,
      content:
        "Booking an appointment gives you fast, convenient access to compassionate psychiatric and mental health care. We ensure every session is private, supportive, and tailored to your needs.",
    },
    {
      id: "how",
      label: "How It Works",
      icon: <FaCalendarCheck className="text-[#FFAA00]" />,
      content:
        "We use Headway for secure scheduling. Choose your time, verify insurance, confirm your appointment, and you're set. No long forms. No delays. Everything is handled smoothly.",
    },
    {
      id: "insurance",
      label: "Insurance & Cost",
      icon: <FaShieldAlt className="text-[#FFAA00]" />,
      content:
        "We accept major insurance plans including Aetna, Cigna, BlueCross BlueShield, Oscar, United Healthcare, and more. Self-pay options are also available for uninsured clients.",
    },
    {
      id: "expect",
      label: "What to Expect",
      icon: <FaSmile className="text-[#FFAA00]" />,
      content:
        "Your provider will listen attentively, understand your goals, discuss treatment options, and guide you with care and respect. Each session is collaborative and judgment-free.",
    },
  ];

  const [activeTab, setActiveTab] = useState("why");

  return (
    <div className="w-full bg-[#F5FAFD] text-gray-900 pb-28">

      {/* ================= HERO SECTION ================= */}
      <section className="relative w-full py-24 lg:py-40 overflow-hidden">
        
        {/* Soft background */}
        <div className="absolute inset-0">
          <Image
            src="/bg-soft.png"
            alt="background"
            fill
            className="object-cover opacity-80"
          />
          <div className="absolute inset-0 bg-white/40 backdrop-blur-sm"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-16 grid lg:grid-cols-2 gap-12 items-center">

          {/* LEFT IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="flex justify-center"
          >
            <Image
              src="/appoint.png"
              alt="Appointment Image"
              width={550}
              height={550}
              className="rounded-3xl shadow-2xl object-cover"
            />
          </motion.div>

          {/* RIGHT TEXT */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="z-10"
          >
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
              Book an Appointment
            </h1>

            <p className="mt-4 text-gray-700 text-lg max-w-lg">
              Schedule your session with ease through our trusted booking partner.
              Get the quality mental health support you deserve.
            </p>

            <button
              onClick={() => window.open(headway, "_blank")}
              className="mt-6 bg-[#FFAA00] hover:bg-[#E69900] text-white font-semibold px-10 py-4 rounded-xl shadow-xl text-lg transition"
            >
              Book Appointment
            </button>
          </motion.div>

        </div>
      </section>


      {/* ================= TABS SECTION ================= */}
      <section className="max-w-6xl mx-auto px-6 lg:px-10 mt-16">

        {/* TAB BUTTONS */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex flex-col items-center justify-center px-4 py-4 rounded-xl shadow-sm transition border 
                ${
                  activeTab === tab.id
                    ? "bg-[#FFAA00] text-white border-[#FFAA00]"
                    : "bg-white text-gray-700 border-gray-200 hover:border-[#FFAA00]"
                }`}
            >
              <div className="text-2xl mb-2">{tab.icon}</div>
              <span className="font-semibold">{tab.label}</span>
            </button>
          ))}
        </div>

        {/* TAB CONTENT */}
        <div className="mt-10 bg-white rounded-2xl shadow-md p-8 min-h-[180px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="text-gray-700 text-lg leading-relaxed"
            >
              {tabs.find((t) => t.id === activeTab)?.content}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Bottom Book Button */}
        <div className="flex justify-center mt-10">
          <button
            onClick={() => window.open(headway, "_blank")}
            className="bg-[#FFAA00] hover:bg-[#E69900] text-white font-semibold px-10 py-4 rounded-xl shadow-xl text-lg transition"
          >
            Book Appointment Now
          </button>
        </div>

      </section>
    </div>
  );
}
