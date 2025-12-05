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
          className="bg-white rounded-3xl shadow-[0_4px_25px_rgba(0,0,0,0.06)] p-10"
        >
          <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
            Opening Hours
          </h2>

          <p className="text-gray-600 text-lg mb-8">
            We're here to support your mental wellness throughout the week.
          </p>

          <div className="space-y-6 text-lg">
            <div className="flex justify-between border-b pb-3">
              <span className="font-semibold text-gray-800">Monday – Friday</span>
              <span className="text-gray-700">9:00 AM – 5:00 PM</span>
            </div>

            <div className="flex justify-between">
              <span className="font-semibold text-gray-800">Saturday & Sunday</span>
              <span className="text-gray-700">9:00 AM – 2:00 PM</span>
            </div>
          </div>

          <a
            href="/appointments"
            className="mt-10 inline-block bg-[#FFAA00] text-white font-semibold px-10 py-4 rounded-full shadow hover:bg-[#e29900] transition text-lg"
          >
            Book an Appointment
          </a>
        </motion.div>

        {/* RIGHT SIDE — IMAGE (you provide hours.png) */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center"
        >
          <Image
            src="/hours.png"  // <-- Add this file in public
            alt="Clinic Opening Hours"
            width={500}
            height={500}
            className="rounded-3xl shadow-lg object-cover"
          />
        </motion.div>

      </div>
    </section>
  );
}
