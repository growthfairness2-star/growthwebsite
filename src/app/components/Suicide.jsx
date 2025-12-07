"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaPhoneAlt, FaCommentDots, FaAmbulance, FaExternalLinkAlt } from "react-icons/fa";
import { MdEmergencyShare } from "react-icons/md";

export default function SuicideSection() {
  
  const pulseVariant = {
    initial: { scale: 1, opacity: 1 },
    animate: {
      scale: [1, 1.1, 1],
      opacity: [1, 0.8, 1],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <section className="w-full flex justify-center py-20 px-4 md:px-8 bg-[#FFF5F5]">
      
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative bg-white max-w-5xl w-full rounded-3xl shadow-2xl overflow-hidden border border-rose-100"
      >
        {/* Visual Alert Bar */}
        <div className="h-2 w-full bg-gradient-to-r from-orange-400 to-rose-600" />

        <div className="px-6 py-12 md:px-12 md:py-16 text-center">
          
          <div className="flex flex-col items-center mb-10">
            <motion.div 
              variants={pulseVariant}
              initial="initial"
              animate="animate"
              className="w-16 h-16 bg-rose-100 text-rose-600 rounded-full flex items-center justify-center mb-6 text-3xl"
            >
              <MdEmergencyShare />
            </motion.div>
            
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-3">
              In Crisis? You Are Not Alone.
            </h2>
            <p className="text-lg text-gray-800 font-medium max-w-2xl mx-auto">
              Immediate, confidential help is available 24/7. Use the tools below to connect with a specialist right now.
            </p>
          </div>

          {/* ACTION GRID - Enhanced with High Contrast Text */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            
            {/* 988 Card */}
            <a href="tel:988" className="group relative flex flex-col items-center p-6 rounded-2xl bg-rose-50 border-2 border-rose-100 hover:bg-rose-600 hover:text-white transition-all duration-300 shadow-sm hover:shadow-xl">
                <div className="mb-3 text-rose-600 group-hover:text-white transition-colors text-2xl">
                    <FaPhoneAlt />
                </div>
                <span className="text-xs font-bold uppercase tracking-widest mb-1 text-rose-800 group-hover:text-rose-100">Lifeline</span>
                <span className="text-5xl font-black text-gray-900 group-hover:text-white">988</span>
                <span className="text-sm mt-3 font-bold text-gray-800 group-hover:text-white">Click to Call</span>
            </a>

            {/* Text Line Card */}
            <a href="sms:741741&body=STRENGTH" className="group relative flex flex-col items-center p-6 rounded-2xl bg-blue-50 border-2 border-blue-100 hover:bg-[#306EFF] hover:text-white transition-all duration-300 shadow-sm hover:shadow-xl">
                <div className="mb-3 text-[#306EFF] group-hover:text-white transition-colors text-2xl">
                    <FaCommentDots />
                </div>
                <span className="text-xs font-bold uppercase tracking-widest mb-1 text-blue-800 group-hover:text-blue-100">Text Support</span>
                <span className="text-5xl font-black text-gray-900 group-hover:text-white">741-741</span>
                <span className="text-sm mt-3 font-bold text-gray-800 group-hover:text-white">Text "STRENGTH"</span>
            </a>

            {/* 911 Card */}
            <a href="tel:911" className="group relative flex flex-col items-center p-6 rounded-2xl bg-gray-100 border-2 border-gray-200 hover:bg-gray-900 hover:text-white transition-all duration-300 shadow-sm hover:shadow-xl">
                <div className="mb-3 text-gray-700 group-hover:text-white transition-colors text-2xl">
                    <FaAmbulance />
                </div>
                <span className="text-xs font-bold uppercase tracking-widest mb-1 text-gray-800 group-hover:text-gray-300">Emergency</span>
                <span className="text-5xl font-black text-gray-900 group-hover:text-white">911</span>
                <span className="text-sm mt-3 font-bold text-gray-800 group-hover:text-white">Immediate Danger</span>
            </a>

          </div>

          <div className="bg-gray-50 border border-gray-100 rounded-3xl p-6 md:p-10">
            <p className="text-gray-900 text-lg font-medium leading-relaxed mb-8">
              Alternatively, you can call the National Suicide Prevention Lifeline at <br className="hidden md:block"/>
              <strong className="text-2xl text-[#306EFF]">1-800-273-TALK (8255)</strong>.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="https://988lifeline.org"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl bg-white text-gray-900 font-black border-2 border-gray-200 hover:border-gray-400 transition shadow-md"
              >
                Visit 988 Website <FaExternalLinkAlt className="text-xs" />
              </a>

              <Link
                href="/blog"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl bg-[#FFAA00] text-white font-black shadow-lg hover:bg-[#E69900] hover:shadow-xl transition transform hover:-translate-y-1"
              >
                Mental Health Resources
              </Link>
            </div>
          </div>

        </div>
      </motion.div>
    </section>
  );
}