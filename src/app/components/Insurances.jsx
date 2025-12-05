"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const insuranceLogos = [
  { src: "/insurances1.jpeg", name: "BlueCross BlueShield" },
  { src: "/insurances2.jpeg", name: "Aetna" },
  { src: "/insurances3.jpeg", name: "Cigna" },
  { src: "/insurances4.jpeg", name: "Oscar Health" },
  { src: "/insurances5.jpeg", name: "Oxford Health Plans" },
];

export default function Insurances() {
  return (
    <section className="w-full py-20 bg-[#F7FBFD]">
      <div className="max-w-7xl mx-auto px-6 lg:px-16 text-center">

        {/* TITLE */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-extrabold text-gray-900 mb-4"
        >
          Insurances We Accept
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-gray-600 max-w-2xl mx-auto mb-12 text-lg"
        >
          We partner with major insurance providers to make mental health care
          accessible and affordable for you.
        </motion.p>

        {/* LOGO GRID */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-10 mt-10">

          {insuranceLogos.map((logo, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex justify-center items-center bg-white rounded-xl shadow-sm hover:shadow-lg transition p-4"
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

        {/* BUTTON */}
        <motion.button
          onClick={() => window.location.href = "/insurances"}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-12 bg-[#FFAA00] text-white font-semibold px-8 py-3 rounded-full hover:bg-[#e79a00] transition shadow-lg"
        >
          View Full Insurance List
        </motion.button>

      </div>
    </section>
  );
}
