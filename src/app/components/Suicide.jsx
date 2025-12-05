"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function SuicideSection() {
  return (
    <section className="w-full py-20 bg-[#F8FCFF]">
      <div className="max-w-3xl mx-auto text-center px-6">

        {/* Small Icon */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="flex justify-center mb-6"
        >
          <Image
            src="/emergency.png"
            alt="Emergency Icon"
            width={120}
            height={120}
            className="object-contain"
          />
        </motion.div>

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-extrabold text-gray-900"
        >
          Considering Suicide?
        </motion.h2>

        {/* Sub-heading */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-xl text-gray-700 mt-2"
        >
          Having mental health crisis?
        </motion.p>

        {/* Paragraph */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mt-6 text-gray-600 leading-relaxed text-lg"
        >
          If you or someone you know is considering suicide or experiencing a mental health
          crisis, call <strong>“911”</strong> or visit the nearest emergency room.  
          You can also reach the National Suicide Prevention Lifeline by dialing <strong>“988”</strong>,
          calling <strong>1-800-273-TALK (8255)</strong>, or texting <strong>“STRENGTH”</strong> to 741-741.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="flex justify-center gap-4 mt-10"
        >
          <a
            href="https://988lifeline.org/?fbclid=IwAR3eIH1QL4Mh4wudvOxnPN1ou0rwXWp5mwACIeX_vxjS6HxO3aL0AN08Lyw"
            target="_blank"
            className="px-8 py-3 bg-[#FFAA00] text-white font-semibold rounded-xl shadow hover:bg-[#e69a00] transition"
          >
            Learn More
          </a>

          <a
            href="/blog"
            className="px-8 py-3 bg-[#3BB4FF] text-white font-semibold rounded-xl shadow hover:bg-[#2aa2ec] transition"
          >
            Resources
          </a>
        </motion.div>

      </div>
    </section>
  );
}
