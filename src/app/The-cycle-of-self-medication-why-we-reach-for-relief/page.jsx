"use client";
import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";
import Footer from "../Footer"; // Ensure the path matches your project structure

export default function SelfMedicationCycle() {
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
            The Cycle of Self-Medication: Why We Reach for Relief
          </h1>

          <p className="text-gray-600 text-sm md:text-base mb-6">Dec 16, 2025</p>

          <p className="text-gray-700 text-base md:text-lg leading-relaxed max-w-xl mx-auto md:mx-0 text-justify">
            Substance use often begins not as a search for a high, but as a
            desperate search for a "normal." For many, it is a survival
            mechanism used to quiet the internal noise of trauma, anxiety, or
            unseen emotional pain.
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
            src="/blog5.png"
            alt="The cycle of self medication and mental health"
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
          The term "self-medication" refers to the use of substances—whether
          alcohol, prescription drugs, or illicit ones—to manage the symptoms of
          an underlying mental health condition. When the weight of depression
          becomes too heavy, or when anxiety makes the world feel dangerously
          unpredictable, the brain naturally looks for an escape. For a brief
          moment, a substance might provide the silence, the energy, or the
          numbness that the person has been craving. This initial relief is
          often where the cycle begins.
        </p>

        <p className="text-lg leading-relaxed mb-6 text-justify">
          Unfortunately, what starts as a temporary solution quickly transforms
          into a new problem. The brain is an incredibly adaptive organ; when it
          is repeatedly introduced to a substance, it begins to adjust its own
          chemistry. This leads to tolerance, meaning the "relief" becomes
          harder to achieve and requires more of the substance. As the effects
          wear off, the original mental health symptoms often return with
          increased intensity, creating a rebound effect that makes the internal
          pain feel even more unbearable than before.
        </p>

        <p className="text-lg leading-relaxed mb-6 text-justify">
          Breaking this cycle is rarely a matter of willpower alone. It is a
          complex physiological and psychological battle. Many people feel
          immense shame, believing their struggle is a character flaw rather
          than a neurological response to pain. However, it is vital to
          recognize that the substance use is often a symptom of something
          deeper. Treating the substance use without addressing the underlying
          anxiety, trauma, or depression is like trying to put out a fire while
          the gas line is still open.
        </p>

        <p className="text-lg leading-relaxed mb-6 text-justify">
          The path to recovery involves untangling these two threads: the
          dependence on the substance and the mental health challenges that
          fueled it. This is often referred to as "dual diagnosis" care. It
          requires building new, healthy coping mechanisms that can eventually
          take the place of the substance. This process involves rewiring the
          brain’s reward system and learning to navigate difficult emotions
          without the "buffer" that substances once provided.
        </p>

        <p className="text-lg leading-relaxed mb-6 text-justify">
          If you or someone you love is caught in this loop, remember that the
          reach for relief is a human instinct. Recovery isn't just about
          stopping a behavior; it’s about healing the hurt that made that
          behavior feel necessary in the first place. With professional support,
          patience, and a holistic approach to mental wellness, it is possible
          to find a lasting peace that doesn't disappear when the substance
          wears off.
        </p>

        {/* ===== CALL TO ACTION BANNER ===== */}
        <div className="mt-16 sm:mt-24 text-center">
          <div className="p-8 sm:p-12 bg-gradient-to-br from-[#FACC15] to-[#E1C16E] rounded-[2rem] sm:rounded-[4rem] text-white shadow-lg">
            <h2 className="text-2xl sm:text-4xl font-black mb-4">
              Break the Cycle Today
            </h2>
            <p className="text-base sm:text-xl font-light mb-8 opacity-90">
              Recovery starts with addressing the root cause. We are here to
              support you.
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
            className="text-gray-400 hover:text-gray-600 transition text-sm font-medium"
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