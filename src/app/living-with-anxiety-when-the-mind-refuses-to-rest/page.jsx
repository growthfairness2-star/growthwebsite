"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Footer from "../Footer"; // Ensure path is correct
import { motion, AnimatePresence } from "framer-motion";

export default function LivingWithAnxietyWhenTheMindRefusesToRest() {
  const router = useRouter();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <div
      className="min-h-screen flex flex-col"
      style={{
        background:
          "linear-gradient(180deg, #FAFAF8 0%, #FDFCF9 60%, #F7F5EF 100%)",
      }}
    >
      {/* ===== HERO SECTION ===== */}
      <section className="flex flex-col md:flex-row items-center justify-between overflow-hidden bg-white/80 backdrop-blur-sm shadow-sm rounded-b-[2rem]">
        {/* TEXT SIDE */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="w-full md:w-1/2 p-10 md:p-20 text-center md:text-left"
        >
          <h1
            className="text-3xl md:text-5xl font-bold mb-4 leading-snug"
            style={{
              background: "linear-gradient(90deg, #000000ff, #a2dd0cff)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Living With Anxiety When the Mind Refuses to Rest
          </h1>

          <p className="text-gray-600 text-sm md:text-base mb-6">
            Dec 12, 2025
          </p>

          <p className="text-gray-700 text-base md:text-lg leading-relaxed max-w-xl mx-auto md:mx-0 text-justify">
            Anxiety can feel like carrying constant mental noise that never
            fully quiets. For many people the mind remains alert even during
            moments meant for rest, creating exhaustion confusion and emotional
            strain.
          </p>
        </motion.div>

        {/* IMAGE SIDE */}
        <motion.div
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="w-full md:w-1/2 h-[40vh] md:h-[70vh] relative"
        >
          <Image
            src="/blog3.png"
            alt="Living with anxiety"
            fill
            priority
            className="object-cover object-center rounded-bl-[2rem] md:rounded-none"
          />
        </motion.div>
      </section>

      {/* ===== MAIN CONTENT ===== */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="max-w-4xl mx-auto px-6 md:px-10 py-16 text-gray-800"
      >
        <p className="text-lg leading-relaxed mb-6 text-justify">
          Anxiety is often mistaken for simple worry but for those living with
          it the experience runs much deeper. Thoughts appear without warning
          loop repeatedly and refuse to slow down. Even quiet moments can feel
          overwhelming as the mind scans for problems that may never happen.
          This constant alertness can leave people feeling drained frustrated
          and disconnected from rest. Anxiety is not a weakness or a flaw in
          character. It is a protective response shaped by the nervous system
          reacting to perceived uncertainty.
        </p>

        <p className="text-lg leading-relaxed mb-6 text-justify">
          When anxiety is active the body prepares as though danger is near.
          Muscles stay tense breathing becomes shallow and the heart may race.
          The mind revisits past conversations imagines future outcomes and
          searches for certainty. Over time this state becomes familiar even
          when it is uncomfortable. Many people describe feeling tired yet
          unable to relax which often leads to self criticism. These reactions
          are not intentional choices. They are learned responses reinforced by
          repeated stress and fear.
        </p>

        <p className="text-lg leading-relaxed mb-6 text-justify">
          Understanding anxiety requires separating identity from experience.
          Thoughts are not facts and feelings do not define worth. Anxiety feeds
          on uncertainty and exaggerates possibilities as a way to regain
          control. Recognizing this pattern allows space between awareness and
          reaction. This space is where calm slowly begins to return. With
          patience the mind can learn that safety does not require constant
          vigilance.
        </p>

        <p className="text-lg leading-relaxed mb-6 text-justify">
          Support for anxiety focuses on creating signals of safety for the body
          and mind. Gentle breathing grounding attention in the present moment
          and maintaining predictable routines can help reduce intensity.
          Professional guidance can offer tools for understanding thought
          patterns and building emotional stability. Anxiety may not disappear
          overnight but it can soften over time. Rest is not something that must
          be earned. The mind is capable of learning peace again.
        </p>

        {/* ===== NEW CTA BANNER SECTION ===== */}
        <div className="mt-16 sm:mt-24 text-center">
          <div className="p-8 sm:p-12 bg-gradient-to-br from-[#FACC15] to-[#E1C16E] rounded-[2rem] sm:rounded-[4rem] text-white shadow-lg">
            <h2 className="text-2xl sm:text-4xl font-black mb-4">
              Do you want to manage anxiety?
            </h2>
            <p className="text-base sm:text-xl font-light mb-8 opacity-90">
              We are here to help you navigate your journey to peace.
            </p>

            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-white text-gray-900 px-8 py-3 rounded-full font-bold text-base hover:bg-gray-100 transition-all active:scale-95"
            >
              Book an Appointment
            </button>
          </div>
        </div>

        {/* EXPLORE MORE BUTTON */}
        <div className="mt-12 text-center">
          <button
            onClick={() => router.push("/blog")}
            className="text-gray-500 hover:text-gray-800 transition text-sm font-medium"
          >
            ← Back to Blog Resources
          </button>
        </div>
      </motion.section>

      {/* ===== POP-UP MODAL ===== */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="bg-white p-6 sm:p-10 rounded-[2rem] shadow-2xl max-w-sm w-full text-center"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-6">
                Select Your Option
              </h3>
              <div className="flex flex-col gap-3">
                <button
                  onClick={() => router.push("/insurances")}
                  className="w-full py-4 bg-[#FACC15] text-gray-900 font-bold rounded-xl active:bg-[#eab308]"
                >
                  All Insurances
                </button>
                <button
                  onClick={() => router.push("/selfpay")}
                  className="w-full py-4 bg-gray-100 text-gray-900 font-bold rounded-xl active:bg-gray-200"
                >
                  Self Pay / Out-of-Pocket
                </button>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="mt-2 text-gray-400 text-sm"
                >
                  Cancel
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
}