"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import Footer from "../Footer";

/** * SEO CONFIGURATION 
 * Title: Book a Mental Health Consultation | Specialized Clinical Care
 * Description: Schedule your appointment with our expert clinical team. We provide specialized care for various mental health conditions with flexible insurance and self-pay options.
 */
const metadata = {
  title: "Book a Mental Health Consultation | Specialized Clinical Care",
  description: "Schedule your appointment with our expert clinical team. We provide specialized care for various mental health conditions with flexible insurance and self-pay options.",
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
  const router = useRouter();
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-[#F9FAFB]">
      <title>{metadata.title}</title>
      <meta name="description" content={metadata.description} />
      <meta name="keywords" content={metadata.keywords.join(", ")} />

      {/* ===== Hero Section ===== */}
      <section className="relative flex-grow flex items-center justify-center overflow-hidden py-20 px-6">
        {/* Background Accents */}
        <div className="absolute top-0 left-0 w-full h-full -z-10">
          <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-yellow-100 rounded-full blur-[120px] opacity-40" />
          <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-yellow-50 rounded-full blur-[100px] opacity-50" />
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl w-full text-center"
        >
          <span className="inline-block px-5 py-2 mb-8 text-xs font-black tracking-[0.2em] text-[#8A6D3B] uppercase bg-yellow-100 rounded-full">
            Clinical Excellence • Compassionate Care
          </span>
          
          <h1 className="text-5xl md:text-7xl font-black text-gray-900 mb-8 leading-[1.1] text-justify md:text-center">
            Specialized Care for Your <span className="text-[#E1C16E] italic">Complete Wellbeing.</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-600 mb-12 font-light leading-relaxed text-justify">
            Mental health is not a one-size-fits-all journey. Whether you are seeking 
            support for mood disorders, cognitive challenges, or personal growth, our 
            multidisciplinary team provides the evidence-based tools and clinical 
            expertise to help you achieve lasting stability and clarity.
          </p>

          {/* ===== Universal CTA Card ===== */}
          <motion.div 
            whileHover={{ scale: 1.01 }}
            className="relative p-1 bg-gradient-to-r from-[#FACC15] via-[#E1C16E] to-[#FACC15] rounded-[3rem] shadow-2xl overflow-hidden"
          >
            <div className="bg-white rounded-[2.8rem] p-10 md:p-16">
              <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-4">
                Ready to start your journey?
              </h2>
              <p className="text-lg md:text-xl text-gray-500 mb-10 font-medium text-justify md:text-center">
                We specialize in a wide range of conditions and are here to help you 
                navigate your path to recovery. Take the first step today.
              </p>
              
              <button 
                onClick={() => setIsModalOpen(true)}
                className="group relative inline-flex items-center justify-center px-14 py-5 font-bold text-white transition-all duration-300 bg-gray-900 rounded-2xl hover:bg-gray-800 hover:shadow-2xl transform hover:-translate-y-1"
              >
                Book an Appointment
              </button>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* ===== Universal Selection Modal ===== */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-black/60 backdrop-blur-md">
            <motion.div 
              initial={{ scale: 0.9, opacity: 0, y: 30 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 30 }}
              className="bg-white p-10 md:p-12 rounded-[2.5rem] shadow-2xl max-w-sm w-full text-center border border-gray-100"
            >
              <div className="w-20 h-20 bg-yellow-50 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-[#E1C16E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                </svg>
              </div>
              
              <h3 className="text-2xl font-black text-gray-900 mb-2">Selection Option</h3>
              <p className="text-gray-500 mb-8 font-medium">Please choose your payment or coverage method to view available times.</p>
              
              <div className="flex flex-col gap-4">
                <button 
                  onClick={() => router.push('/insurances')}
                  className="w-full py-4 bg-[#FACC15] text-gray-900 font-extrabold rounded-2xl hover:shadow-lg transition-all transform hover:-translate-y-1"
                >
                  Insurance
                </button>
                <button 
                  onClick={() => router.push('/selfpay')}
                  className="w-full py-4 bg-gray-900 text-white font-extrabold rounded-2xl hover:shadow-lg transition-all transform hover:-translate-y-1"
                >
                  Self Pay
                </button>
                <button 
                  onClick={() => setIsModalOpen(false)}
                  className="mt-6 text-gray-400 hover:text-gray-600 text-xs font-black uppercase tracking-widest transition-colors"
                >
                  Go Back
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