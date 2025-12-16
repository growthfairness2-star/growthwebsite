"use client";

import Image from "next/image";
import { motion } from "framer-motion";

// Automatically generate insurance list 1–18
const insuranceLogos = Array.from({ length: 18 }, (_, i) => ({
  src: `/insurances${i + 1}.jpeg`,
  name: `Insurance ${i + 1}`,
}));

export default function InsurancesPage() {
  return (
    <div className="w-full bg-[#F7FBFD] pb-20">

      {/* HERO SECTION */}
      <section className="max-w-7xl mx-auto px-6 lg:px-16 py-20 grid lg:grid-cols-2 gap-12 items-center">
        
        {/* LEFT TEXT */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight">
            Insurance Coverage Made Easy
          </h1>

          <p className="mt-4 text-gray-600 text-lg">
            We partner with trusted insurance providers to make mental health care 
            accessible and affordable for everyone.
          </p>

          <button
            onClick={() => (window.location.href = "/appointments")}
            className="mt-8 px-8 py-3 bg-[#FFAA00] hover:bg-[#e69a00] text-white font-semibold rounded-xl shadow-md transition"
          >
            Verify Your Insurance
          </button>
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center"
        >
          <Image
            src="/insure.png"
            alt="Insurance Support"
            width={500}
            height={500}
            className="object-contain drop-shadow-md"
          />
        </motion.div>
      </section>

      {/* LOGOS SECTION */}
      <section className="max-w-7xl mx-auto px-6 lg:px-16 mt-16">
        
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-center text-gray-900 mb-4"
        >
          Insurances We Accept
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-gray-600 text-center max-w-2xl mx-auto mb-12 text-lg"
        >
          Below is the full list of insurance plans we currently accept.
        </motion.p>

        {/* GRID OF LOGOS */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-10 mt-10">
          {insuranceLogos.map((logo, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="flex justify-center items-center bg-white rounded-xl shadow-md hover:shadow-xl transition p-4 border border-gray-100"
            >
              <Image
                src={logo.src}
                width={150}
                height={100}
                alt={logo.name}
                className="object-contain"
              />
            </motion.div>
          ))}
        </div>

        {/* CTA BUTTON */}
        <div className="text-center mt-14">
          <motion.button
            onClick={() => (window.location.href = "/appointments")}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-[#FFAA00] text-white font-semibold px-10 py-3 rounded-xl hover:bg-[#e69900] transition shadow-lg"
          >
            Book an Appointment
          </motion.button>
        </div>

      </section>
    </div>
  );
}

