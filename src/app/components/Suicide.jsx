"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function SuicideSection() {
  return (
    <section className="w-full flex justify-center py-24 bg-[#F8FAFC] px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-white max-w-4xl w-full rounded-3xl shadow-[0_4px_25px_rgba(0,0,0,0.06)] px-10 py-16 text-center"
      >
        {/* Icon */}
        <div className="flex justify-center mb-6">
          <Image
            src="/emergency.png"
            alt="Emergency Icon"
            width={100}
            height={100}
            className="opacity-90"
          />
        </div>

        {/* Heading */}
        <h2 className="text-4xl font-extrabold text-gray-900">
          Considering Suicide?
        </h2>

        {/* Subheading */}
        <p className="text-xl text-gray-700 mt-2">
          Having a mental health crisis?
        </p>

        {/* Description */}
        <p className="text-gray-600 mt-6 leading-relaxed text-lg max-w-2xl mx-auto">
          If you or someone you know is considering suicide or experiencing a mental
          health crisis, call <strong>“911”</strong> or visit your local emergency room 
          immediately. You may also contact the National Suicide Prevention Lifeline by
          dialing <strong>“988”</strong>, calling <strong>1-800-273-TALK (8255)</strong>, 
          or texting <strong>“STRENGTH”</strong> to 741-741.
        </p>

        {/* Buttons */}
        <div className="flex justify-center gap-4 mt-10">

          <a
            href="https://988lifeline.org"
            target="_blank"
            className="px-8 py-3 rounded-full bg-[#FFAA00] text-white font-semibold shadow hover:bg-[#e09400] transition"
          >
            Learn More
          </a>

          <a
            href="/blog"
            className="px-8 py-3 rounded-full bg-[#4CB5FF] text-white font-semibold shadow hover:bg-[#36a7ef] transition"
          >
            Resources
          </a>

        </div>
      </motion.div>
    </section>
  );
}
