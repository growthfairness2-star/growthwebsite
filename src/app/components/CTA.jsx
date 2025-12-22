"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function OpeningHours() {
  return (
    <section className="w-full py-24 bg-[#F9FBFD] px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        {/* LEFT SIDE — HOURS CARD */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-3xl shadow-[0_4px_25px_rgba(0,0,0,0.06)] p-10 border border-gray-50"
        >
          <h2 className="text-4xl font-extrabold text-gray-900 mb-4 tracking-tight">
            Clinic <span className="text-[#FFAA00]">Opening Hours</span>
          </h2>

          <p className="text-gray-600 text-lg mb-8 leading-relaxed">
            We are dedicated to providing accessible mental health care. Visit us or book a session during our standard operating hours.
          </p>

          <div className="space-y-6 text-lg">
            {/* Monday - Saturday row updated per specification */}
            <div className="flex justify-between items-center border-b border-gray-100 pb-4">
              <span className="font-bold text-gray-800">Monday – Saturday</span>
              <span className="text-[#FFAA00] font-black bg-[#FFF9E5] px-4 py-1 rounded-lg">
                8:00 AM – 7:00 PM
              </span>
            </div>

            {/* Sunday row updated for clarity */}
            <div className="flex justify-between items-center pt-2">
              <span className="font-semibold text-gray-500">Sunday</span>
              <span className="text-gray-400 font-medium italic underline decoration-[#FFAA00]/30 decoration-2 underline-offset-4">
                Closed for Wellness
              </span>
            </div>
          </div>

          <motion.a
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            href="/appointments"
            className="mt-10 block text-center bg-[#FFAA00] text-white font-black px-10 py-5 rounded-2xl shadow-[0_15px_30px_-10px_rgba(255,170,0,0.4)] hover:bg-[#e29900] transition-all text-xl"
          >
            Schedule a Session
          </motion.a>
        </motion.div>

        {/* RIGHT SIDE — IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center group"
        >
          <div className="relative">
            {/* Soft glow background for high-end feel */}
            <div className="absolute -inset-4 bg-[#FFAA00] opacity-5 rounded-[40px] blur-2xl group-hover:opacity-10 transition duration-500"></div>
            <Image
              src="/hours.png"
              alt="Clinic Opening Hours"
              width={550}
              height={550}
              className="relative rounded-3xl shadow-2xl object-cover"
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
}