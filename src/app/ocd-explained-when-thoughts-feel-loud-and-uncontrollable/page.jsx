"use client";
import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";
import Footer from "../Footer"; // Ensure the path matches your project structure

export default function OCDExplainedWhenThoughtsFeelLoudAndUncontrollable() {
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
            OCD Explained When Thoughts Feel Loud and Uncontrollable
          </h1>

          <p className="text-gray-600 text-sm md:text-base mb-6">Dec 15, 2025</p>

          <p className="text-gray-700 text-base md:text-lg leading-relaxed max-w-xl mx-auto md:mx-0 text-justify">
            Obsessive thoughts can feel intrusive overwhelming and impossible to
            ignore. For many people the mind becomes filled with repeated
            thoughts that demand attention and create intense emotional
            discomfort.
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
            src="/blog1.png"
            alt="Understanding obsessive thoughts"
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
          Obsessive compulsive experiences are often misunderstood as habits or
          preferences but they are driven by intense internal pressure. Thoughts
          may arrive suddenly repeating the same message again and again. These
          thoughts are not wanted yet they feel urgent and convincing. The mind
          signals danger or responsibility even when no real threat exists. This
          creates distress confusion and mental fatigue that can interfere with
          daily life.
        </p>

        <p className="text-lg leading-relaxed mb-6 text-justify">
          When these thoughts appear many people feel compelled to respond in
          some way. Actions or mental rituals may develop as an attempt to
          reduce discomfort or restore a sense of certainty. Relief may come
          briefly but the thoughts often return stronger. This cycle can feel
          exhausting and frustrating especially when others do not see the
          internal struggle taking place.
        </p>

        <p className="text-lg leading-relaxed mb-6 text-justify">
          It is important to understand that these thoughts do not reflect
          character values or intentions. They are symptoms of a brain seeking
          reassurance and control. Fighting the thoughts or judging them often
          increases distress. Learning to observe them without reacting
          immediately can begin to weaken their intensity. This takes practice
          patience and support.
        </p>

        <p className="text-lg leading-relaxed mb-6 text-justify">
          Support for obsessive compulsive experiences focuses on building
          tolerance for uncertainty and reducing fear based responses.
          Professional guidance can provide structured tools to change how
          thoughts are handled rather than trying to erase them. Progress is
          possible and meaningful. The mind can learn that thoughts do not
          require action. With care consistency and understanding peace can
          gradually return.
        </p>

        {/* ===== CALL TO ACTION BANNER ===== */}
        <div className="mt-16 sm:mt-24 text-center">
          <div className="p-8 sm:p-12 bg-gradient-to-br from-[#FACC15] to-[#E1C16E] rounded-[2rem] sm:rounded-[4rem] text-white shadow-lg">
            <h2 className="text-2xl sm:text-4xl font-black mb-4">
              Need support managing OCD?
            </h2>
            <p className="text-base sm:text-xl font-light mb-8 opacity-90">
              We are here to help you regain control and find peace.
            </p>

            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-white text-gray-900 px-8 py-3 rounded-full font-bold text-base hover:bg-gray-100 transition-all active:scale-95"
            >
              Book an Appointment
            </button>
          </div>
        </div>

        {/* SECONDARY CTA */}
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