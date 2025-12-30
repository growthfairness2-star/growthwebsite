"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

/** * SEO CONFIGURATION 
 * Optimized for 2026 Psychotherapy Benefits and Personal Transformation.
 */
const metadata = {
  title: "The Power of Talk Therapy: Transform Your Life",
  description: "Explore how professional talk therapy can help you process trauma, manage stress, and build a more fulfilling life through evidence-based psychotherapy.",
  keywords: [
    "benefits of talk therapy 2026", 
    "how psychotherapy works", 
    "emotional healing through therapy", 
    "mental health transformation", 
    "finding a therapist", 
    "talk therapy techniques"
  ],
  image: "/therapy.png", 
  url: "https://growthfairness.com/power-of-talk-therapy-transform-your-life"
};

export default function PowerOfTherapy() {
  const router = useRouter();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <div className="min-h-screen flex flex-col bg-white overflow-x-hidden">
      <title>{metadata.title}</title>
      <meta name="description" content={metadata.description} />
      <meta name="keywords" content={metadata.keywords.join(", ")} />

      {/* ===== Hero Section ===== */}
      <section className="flex flex-col md:flex-row items-center justify-between overflow-hidden bg-yellow-50/40 shadow-sm border-b border-yellow-200 rounded-b-[2rem] md:rounded-b-[3rem]">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="w-full md:w-1/2 px-5 py-10 md:p-24 text-center md:text-left"
        >
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-black mb-6 leading-tight text-gray-900 break-words">
            The Power of <br />
            <span
              className="font-light italic"
              style={{
                background: "linear-gradient(90deg, #EAB308, #FACC15)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Talk Therapy
            </span>
          </h1>

          <p className="text-gray-600 text-lg sm:text-xl font-light leading-relaxed text-justify">
            Beyond just "talking," therapy is a clinical process that restructures how you relate to yourself, your past, and your future potential.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
          className="w-full md:w-1/2 h-[280px] sm:h-[400px] md:h-[80vh] relative"
        >
          <Image
            src={metadata.image}
            alt="Compassionate one-on-one psychotherapy session"
            fill
            priority
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </motion.div>
      </section>

      {/* ===== Main Content ===== */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="w-full max-w-5xl mx-auto px-4 sm:px-8 md:px-12 py-12 sm:py-20 text-gray-800"
      >
        <div className="prose prose-base sm:prose-lg max-w-full overflow-hidden break-words">
          <p className="text-lg sm:text-2xl leading-relaxed mb-10 font-serif italic border-l-4 sm:border-l-8 border-[#EAB308] pl-4 sm:pl-8 text-gray-700 text-justify">
            Talk therapy provides a safe, confidential space to explore the patterns that hold you back and develop the resilience to move forward.
          </p>

          <section className="mb-12 sm:mb-20">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 font-black">How Processing Leads to Progress</h2>
            <p className="mb-6 text-justify leading-relaxed">
              When we verbalize our internal struggles, we activate different parts of the brain that allow for emotional regulation and cognitive reappraisal. This "processing" is what leads to the profound breakthroughs often experienced in long-term psychotherapy.
            </p>
            
          </section>

          <section className="mb-12 sm:mb-20">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 border-b-4 border-[#FACC15] inline-block">
              The Long-Term Benefits
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
              <div className="p-8 bg-white border border-gray-100 rounded-[2rem] shadow-sm">
                <h3 className="text-xl font-bold mb-4 text-[#A16207]">Emotional Intelligence</h3>
                <p className="text-gray-700 text-justify text-sm">
                  Gain a deeper understanding of your triggers and emotions, allowing you to respond rather than react to life's stressors.
                </p>
              </div>
              <div className="p-8 bg-white border border-gray-100 rounded-[2rem] shadow-sm">
                <h3 className="text-xl font-bold mb-4 text-[#A16207]">Healthier Relationships</h3>
                <p className="text-gray-700 text-justify text-sm">
                  By understanding your own attachment styles and boundaries, you can foster more authentic and fulfilling connections with others.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-12 sm:mb-20 bg-yellow-50/40 p-6 sm:p-12 rounded-[3rem] border border-yellow-100">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">A Journey of Transformation</h2>
            <p className="mb-6 text-justify leading-relaxed italic">
              "Therapy is not about being 'fixed.' It is about uncovering the layers of yourself that have been buried by life’s experiences and reclaiming your voice."
            </p>
            [Image showing the stages of change in psychotherapy]
          </section>
        </div>
      </motion.section>

      {/* ===== CTA ===== */}
      <div className="mt-8 sm:mt-16 text-center px-4 mb-20">
        <div className="max-w-4xl mx-auto p-8 sm:p-12 bg-gradient-to-br from-[#EAB308] to-[#FACC15] rounded-[2rem] sm:rounded-[4rem] text-white shadow-lg">
          <h2 className="text-2xl sm:text-4xl font-black mb-4">Start Your Transformation Today.</h2>
          <p className="text-base sm:text-xl font-light mb-8 opacity-90">
            The most important conversation you will ever have is the one where you decide to prioritize your healing.
          </p>

          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-white text-gray-900 px-8 py-3 rounded-full font-bold text-base hover:bg-yellow-50 transition-all active:scale-95"
          >
            Book an Appointment
          </button>
        </div>
      </div>

      {/* ===== Modal ===== */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="bg-white p-6 sm:p-10 rounded-[2rem] shadow-2xl max-w-sm w-full text-center"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-6">Book an Appointment</h3>
              <div className="flex flex-col gap-3">
                <button onClick={() => router.push('/insurances')} className="w-full py-4 bg-[#EAB308] text-white font-bold rounded-xl active:bg-[#CA8A04]">
                  Use Insurance
                </button>
                <button onClick={() => router.push('/selfpay')} className="w-full py-4 bg-gray-100 text-gray-900 font-bold rounded-xl active:bg-gray-200">
                  Self-Pay / Private
                </button>
                <button onClick={() => setIsModalOpen(false)} className="mt-2 text-gray-400 text-sm">
                  Cancel
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}