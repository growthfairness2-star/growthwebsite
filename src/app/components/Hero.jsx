"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { MdMedicalServices, MdPsychology, MdLaptopMac } from "react-icons/md";
import { BiConversation } from "react-icons/bi";

export default function Hero() {

  // Swipe-up variant
  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.6,
        ease: "easeOut"
      }
    })
  };

  return (
    <section className="w-full bg-[#F4F9FA] pb-16">
      
      {/* HERO TOP */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 px-6 lg:px-16 pt-20 items-center">

        {/* LEFT TEXT */}
        <div>
          <h1 className="text-4xl lg:text-6xl font-bold text-[#1A1A1A] leading-tight">
            Elevating emotional wellness<br />
            and strong bonds for all
          </h1>

          <p className="mt-6 text-lg text-gray-600 leading-relaxed max-w-lg">
            Compassionate, professional mental-health care designed to help you 
            regain clarity, balance, and peace — wherever you are on your journey.
          </p>

          <div className="mt-8">
            <button 
              className="px-8 py-3 rounded-xl font-semibold text-white shadow-md"
              style={{ backgroundColor: "#FFAA00" }}
            >
              Book a Session
            </button>
          </div>
        </div>

        {/* HERO IMAGE */}
        <div className="relative">
          <Image 
            src="/hero.png"
            width={700}
            height={700}
            alt="Hero Image"
            className="rounded-2xl object-cover"
          />
        </div>
      </div>

      {/* SERVICES WITH MOTION */}
      <div className="max-w-7xl mx-auto px-6 lg:px-16 mt-16">
        <h2 className="text-xl font-medium text-gray-700 mb-4">
          Our Mental Health Services
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 bg-white p-6 rounded-3xl shadow-md">

          {/* Medication Management */}
          <motion.div
            custom={0}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={cardVariants}
            className="p-6 rounded-xl border hover:shadow-md transition text-center"
          >
            <MdMedicalServices size={60} className="mx-auto mb-4 text-[#FFAA00]" />
            <p className="font-semibold text-gray-900 text-lg">Medication Management</p>
            <p className="text-sm text-gray-500 mt-2">
              Monitoring and adjusting medication to optimize treatment.
            </p>
            <a href="#" className="text-[#FFAA00] font-semibold text-sm mt-3 inline-block">
              Read More »
            </a>
          </motion.div>

          {/* Psychiatric Evaluation */}
          <motion.div
            custom={1}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={cardVariants}
            className="p-6 rounded-xl border hover:shadow-md transition text-center"
          >
            <MdPsychology size={60} className="mx-auto mb-4 text-[#FFAA00]" />
            <p className="font-semibold text-gray-900 text-lg">Psychiatric Evaluation</p>
            <p className="text-sm text-gray-500 mt-2">
              Comprehensive mental-health assessment and diagnosis.
            </p>
            <a href="#" className="text-[#FFAA00] font-semibold text-sm mt-3 inline-block">
              Read More »
            </a>
          </motion.div>

          {/* Psychotherapy */}
          <motion.div
            custom={2}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={cardVariants}
            className="p-6 rounded-xl border hover:shadow-md transition text-center"
          >
            <BiConversation size={60} className="mx-auto mb-4 text-[#FFAA00]" />
            <p className="font-semibold text-gray-900 text-lg">Psychotherapy (Talk Therapy)</p>
            <p className="text-sm text-gray-500 mt-2">
              Emotional support and guidance to help you heal and grow.
            </p>
            <a href="#" className="text-[#FFAA00] font-semibold text-sm mt-3 inline-block">
              Read More »
            </a>
          </motion.div>

          {/* Telepsychiatry */}
          <motion.div
            custom={3}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={cardVariants}
            className="p-6 rounded-xl border hover:shadow-md transition text-center"
          >
            <MdLaptopMac size={60} className="mx-auto mb-4 text-[#FFAA00]" />
            <p className="font-semibold text-gray-900 text-lg">Telepsychiatry</p>
            <p className="text-sm text-gray-500 mt-2">
              Receive expert mental-health care from home.
            </p>
            <a href="#" className="text-[#FFAA00] font-semibold text-sm mt-3 inline-block">
              Read More »
            </a>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
