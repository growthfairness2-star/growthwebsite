"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link"; // Added this import

/** * SEO CONFIGURATION */
const metadata = {
  title: "Book a Mental Health Consultation | Specialized Clinical Care",
  description:
    "Schedule your appointment with our expert clinical team. We provide specialized care for various mental health conditions with flexible insurance and self-pay options.",
  keywords: [
    "mental health booking",
    "schedule therapy session",
    "psychiatric consultation",
    "insurance for mental health",
    "self pay psychiatric care",
    "clinical mental health support"
  ]
};

export default function GeneralBookingPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-[#F9FAFB] overflow-x-hidden">
      <title>{metadata.title}</title>
      <meta name="description" content={metadata.description} />
      <meta name="keywords" content={metadata.keywords.join(", ")} />

      {/* ===== Hero Section (Split & Moderate) ===== */}
      <section className="relative py-20 px-4 sm:px-6">
        {/* Background accents */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-yellow-100 rounded-full blur-[120px] opacity-40" />
          <div className="absolute bottom-[-10%] left-[-10%] w-[450px] h-[450px] bg-yellow-50 rounded-full blur-[100px] opacity-50" />
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* LEFT — TEXT */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-5 py-2 mb-6 text-xs font-black tracking-[0.2em] text-[#8A6D3B] uppercase bg-yellow-100 rounded-full">
              Clinical Excellence • Compassionate Care
            </span>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-gray-900 mb-6 leading-tight">
              Specialized Care for Your{" "}
              <span className="text-[#E1C16E] italic">Complete Wellbeing.</span>
            </h1>

            <p className="text-lg sm:text-xl text-gray-600 font-light leading-relaxed text-justify">
              Mental health is not a one-size-fits-all journey. Whether you are
              seeking support for mood disorders, cognitive challenges, or
              personal growth, our multidisciplinary team provides the
              evidence-based tools and clinical expertise to help you achieve
              lasting stability and clarity.
            </p>
          </motion.div>

          {/* RIGHT — CTA CARD */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="relative p-1 bg-gradient-to-r from-[#FACC15] via-[#E1C16E] to-[#FACC15] rounded-[2.5rem] shadow-xl"
          >
            <div className="bg-white rounded-[2.3rem] p-8 sm:p-10 text-center">
              <h2 className="text-2xl sm:text-3xl font-black text-gray-900 mb-4">
                Ready to start your journey?
              </h2>

              <p className="text-gray-500 mb-8 font-medium text-justify">
                We specialize in a wide range of conditions and are here to help
                you navigate your path to recovery. Take the first step today.
              </p>

              <button
                onClick={() => setIsModalOpen(true)}
                className="w-full py-4 bg-gray-900 text-white font-extrabold rounded-2xl hover:bg-gray-800 transition-all"
              >
                Book an Appointment
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ===== Selection Modal ===== */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-md">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white p-8 rounded-[2rem] shadow-2xl max-w-sm w-full text-center"
            >
              <h3 className="text-2xl font-black text-gray-900 mb-2">
                Selection Option
              </h3>
              <p className="text-gray-500 mb-8 font-medium">
                Please choose your payment or coverage method to view available
                times.
              </p>

              <div className="flex flex-col gap-4">
                {/* INSURANCE — UPDATED LINK */}
                <a
                  href="https://care.headway.co/providers/raymond-obiajulu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-4 bg-[#FACC15] text-gray-900 font-extrabold rounded-2xl hover:shadow-lg transition-all flex items-center justify-center"
                >
                  Insurance
                </a>

                {/* SELF PAY — NOW REDIRECTS TO /self-pay */}
                <Link
                  href="/self-pay"
                  className="w-full py-4 bg-gray-900 text-white font-extrabold rounded-2xl hover:shadow-lg transition-all flex items-center justify-center"
                >
                  Self Pay
                </Link>

                <button
                  onClick={() => setIsModalOpen(false)}
                  className="mt-4 text-gray-400 hover:text-gray-600 text-xs font-black uppercase tracking-widest"
                >
                  Go Back
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}