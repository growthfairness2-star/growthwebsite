"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

/** * SEO CONFIGURATION 
 * Optimized for 2026 Medication Management and Mental Health Literacy.
 */
const metadata = {
  title: "Why Mental Health Awareness Matters in Medication Management",
  description: "Learn how mental health awareness improves medication adherence and treatment outcomes. Discover the importance of informed psychiatric care.",
  keywords: [
    "medication management awareness 2026", 
    "psychiatric medication adherence", 
    "mental health literacy", 
    "informed consent in psychiatry", 
    "managing psychiatric side effects", 
    "holistic medication management"
  ],
  image: "/therapy.png", 
  url: "https://growthfairness.com/why-mental-health-awareness-matters-in-medication-management"
};

export default function MedicationAwareness() {
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
            Awareness in <br />
            <span
              className="font-light italic"
              style={{
                background: "linear-gradient(90deg, #EAB308, #FACC15)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Prescription Care
            </span>
          </h1>

          <p className="text-gray-600 text-lg sm:text-xl font-light leading-relaxed text-justify">
            Medication management is more than just a prescription—it is an ongoing partnership built on education, awareness, and biological precision.
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
            alt="Clinical psychiatric consultation focused on medication management"
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
            True recovery happens when patients understand the 'why' behind their treatment. Awareness reduces stigma and empowers individuals to actively participate in their healing.
          </p>

          <section className="mb-12 sm:mb-20">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 font-black">The Intersection of Education and Adherence</h2>
            <p className="mb-6 text-justify leading-relaxed">
              When individuals are aware of how their medication interacts with brain chemistry, adherence rates skyrocket. Understanding side effect profiles and therapeutic lag times (the time it takes for a medication to start working) prevents premature discontinuation of essential treatments.
            </p>
            
          </section>

          <section className="mb-12 sm:mb-20">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 border-b-4 border-[#FACC15] inline-block">
              Key Pillars of Informed Management
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
              <div className="p-6 bg-yellow-50/30 rounded-2xl border border-yellow-100">
                <h3 className="text-lg sm:text-xl font-bold mb-4 text-[#A16207]">Collaborative Monitoring</h3>
                <p className="text-gray-700 text-justify text-sm">
                  Regular check-ins to evaluate efficacy and adjust dosages, ensuring the medication evolves with your changing needs.
                </p>
              </div>
              <div className="p-6 bg-yellow-50/30 rounded-2xl border border-yellow-100">
                <h3 className="text-lg sm:text-xl font-bold mb-4 text-[#A16207]">Reducing Medication Stigma</h3>
                <p className="text-gray-700 text-justify text-sm">
                  Normalizing the use of pharmacological support as a valid tool for biological mental health conditions.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-12 sm:mb-20">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">A Holistic Perspective</h2>
            <p className="mb-6 text-justify leading-relaxed">
              Medication management is most effective when paired with therapeutic awareness. This dual approach addresses both the biological symptoms and the behavioral patterns of mental health.
            </p>
            
          </section>
        </div>
      </motion.section>

      {/* ===== CTA ===== */}
      <div className="mt-8 sm:mt-16 text-center px-4 mb-20">
        <div className="max-w-4xl mx-auto p-8 sm:p-12 bg-gradient-to-br from-[#EAB308] to-[#FACC15] rounded-[2rem] sm:rounded-[4rem] text-white shadow-lg">
          <h2 className="text-2xl sm:text-4xl font-black mb-4">Expert Guidance You Can Trust.</h2>
          <p className="text-base sm:text-xl font-light mb-8 opacity-90">
            Ready to optimize your mental health through professional medication management?
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