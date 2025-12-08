"use client";

import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

const conditions = [
  {
    name: "Depression",
    image: "/homedepression.jpg",
    description: "Personalized, evidence-based treatment paths combining medication management and compassionate psychotherapy to restore vitality."
  },
  {
    name: "Anxiety",
    image: "/homeanxiety.jpg",
    description: "Tailored clinical strategies designed to manage triggers, improve coping mechanisms, and restore your internal sense of balance."
  },
  {
    name: "ADHD",
    image: "/homeadhd.jpg",
    description: "Expert diagnostics and treatment for teens and adults, focusing on executive function and improved daily clarity."
  },
  {
    name: "PTSD",
    image: "/homeptsd.jpg",
    description: "Trauma-informed psychiatric care helping you process history, reduce triggers, and rebuild a foundation of safety."
  },
  {
    name: "Schizophrenia",
    image: "/homeschizo.jpg",
    description: "Comprehensive support and stabilization through specialized medication plans and long-term care management."
  },
  {
    name: "Substance Use",
    image: "/homesubstance.jpg",
    description: "Integrated psychiatric support to address concurrent mental health challenges during your recovery journey."
  },
  {
    name: "Sleep/Insomnia",
    image: "/sleep.png",
    description: "Targeted interventions to resolve sleep disturbances, regulate circadian rhythms, and improve overall restorative rest."
  },
  {
    name: "Bipolar",
    image: "/psychosis.png",
    description: "Specialized clinical management to navigate sensory distortions and disconnected thoughts, focusing on reality testing and stability."
  },
  {
    name: "OCD",
    image: "/ocd.png",
    description: "Evidence-based strategies to manage intrusive thoughts and compulsive behaviors, restoring control and daily functionality."
  }
];

export default function ConditionsTabs() {
  const [active, setActive] = useState(0);
  const router = useRouter();

  const goToBooking = () => {
    router.push("/appointments");
  };

  return (
    <section className="w-full py-24 bg-[#F8FAFC] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-16">

        {/* --- SECTION HEADER --- */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl lg:text-5xl font-black text-gray-950 mb-4 leading-tight"
          >
            Specialized Care for <span className="text-[#306EFF]">Every Mind</span>
          </motion.h2>
          <div className="h-1.5 w-24 bg-[#FFAA00] mx-auto rounded-full" />
        </div>

        {/* --- FLUID TABS --- */}
        <div className="flex flex-wrap justify-center gap-3 mb-16 max-w-5xl mx-auto">
          {conditions.map((item, index) => (
            <motion.button
              key={index}
              onClick={() => setActive(index)}
              className={`px-6 py-3 rounded-2xl border-2 transition-all duration-300 font-black text-sm md:text-base tracking-tight shadow-sm
                ${active === index
                  ? "bg-[#FFAA00] text-white border-[#FFAA00] shadow-lg shadow-[#FFAA00]/20"
                  : "bg-white border-transparent text-gray-700 hover:border-[#FFAA00]/30 hover:bg-gray-50"
                }`}
            >
              {item.name}
            </motion.button>
          ))}
        </div>

        {/* --- ACTIVE CONTENT DISPLAY --- */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* IMAGE SIDE */}
          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-100 to-[#F4F9FA] rounded-[40px] blur-2xl opacity-50" />
            
            <AnimatePresence mode="wait">
              <motion.div
                key={conditions[active].image}
                initial={{ opacity: 0, x: -20, filter: "blur(10px)" }}
                animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, x: 20, filter: "blur(10px)" }}
                transition={{ duration: 0.5, ease: "circOut" }}
                className="relative z-10"
              >
                <div className="p-3 bg-white rounded-[32px] shadow-2xl">
                  <Image
                    src={conditions[active].image}
                    width={700}
                    height={500}
                    alt={conditions[active].name}
                    className="rounded-2xl object-cover aspect-[4/3] md:aspect-video lg:aspect-[4/3]"
                  />
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* TEXT SIDE */}
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={conditions[active].name}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.4 }}
              >
                <h3 className="text-3xl md:text-4xl font-black text-gray-950 mb-6 flex items-center gap-3">
                  <span className="w-8 h-1 bg-[#FFAA00] inline-block" />
                  {conditions[active].name}
                </h3>

                <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-10 font-medium">
                  {conditions[active].description}
                </p>

                <motion.button
                  onClick={goToBooking}
                  whileHover={{ scale: 1.02, x: 5 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center gap-4 px-10 py-5 bg-gray-950 text-white font-black rounded-2xl shadow-xl hover:bg-[#306EFF] transition-all duration-300 group text-lg"
                >
                  Schedule Treatment
                  <span className="text-2xl group-hover:translate-x-1 transition-transform">→</span>
                </motion.button>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
}