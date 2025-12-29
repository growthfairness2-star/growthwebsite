"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

/** * SEO CONFIGURATION 
 * Optimized for 2026 stress management techniques and cortisol regulation.
 */
const metadata = {
  title: "Simple Techniques to Manage Chronic Stress and Protect Your Mental Health",
  description: "Chronic stress impacts every system in the body. Learn evidence-based techniques to lower cortisol, set boundaries, and protect your long-term mental well-being.",
  keywords: [
    "manage chronic stress 2026", 
    "protecting mental health from stress", 
    "cortisol reduction techniques", 
    "burnout prevention psychiatry", 
    "daily stress relief habits", 
    "work-life balance mental health", 
    "stress management for professionals"
  ],
  image: "/blog17.png", 
  url: "https://growthfairness.com/blog/simple-techniques-to-manage-chronic-stress-and-protect-your-mental-health",
  publishedDate: "January 3, 2026"
};

export default function ChronicStressBlog() {
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
          <p className="text-[#A16207] font-bold tracking-widest uppercase text-sm mb-4">
            Published: {metadata.publishedDate}
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-black mb-6 leading-tight text-gray-900 break-words">
            Stress Proof: <br />
            <span
              className="font-light italic"
              style={{
                background: "linear-gradient(90deg, #EAB308, #FACC15)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Daily Protection
            </span>
          </h1>

          <p className="text-gray-600 text-lg sm:text-xl font-light leading-relaxed text-justify">
            Stress is an inevitable part of life, but chronic stress is a silent health crisis. Protecting your mental health requires a proactive, system-based approach to rest and recovery.
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
            alt="Person practicing stress management techniques"
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
            Chronic stress keeps the body in a state of high alert, depleting your emotional reserves and impacting everything from sleep to cardiovascular health.
          </p>

          <section className="mb-12 sm:mb-20">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">The Biology of Burnout</h2>
            <p className="mb-6 text-justify leading-relaxed">
              When we experience stress over long periods, our cortisol levels remain elevated. This can lead to "brain fog," irritability, and a weakened immune system. Managing stress isn't just about feeling better—it's about clinical prevention.
            </p>
          </section>

          <section className="mb-12 sm:mb-20">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 border-b-4 border-[#FACC15] inline-block">
              Daily Management Tools
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
              <div className="bg-white">
                <h3 className="text-lg sm:text-xl font-bold mb-4 text-[#A16207]">1. Non-Sleep Deep Rest (NSDR)</h3>
                <p className="text-gray-700 text-justify">
                  Techniques like Yoga Nidra or guided body scans for just 10–20 minutes can significantly lower autonomic arousal and reset your nervous system without requiring actual sleep.
                </p>
              </div>

              <div className="bg-white">
                <h3 className="text-lg sm:text-xl font-bold mb-4 text-[#A16207]">2. The "Power of No"</h3>
                <p className="text-gray-700 text-justify">
                  Protecting your mental health requires firm boundaries. Learning to decline non-essential commitments is a fundamental skill in preventing the cumulative load of chronic stress.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-12 sm:mb-20 bg-yellow-50/50 p-5 sm:p-10 rounded-2xl sm:rounded-3xl border border-yellow-100">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8">Clinical Approaches to Stress</h2>
            
            <div className="space-y-4 sm:space-y-8">
              {[
                { title: "Psychiatric Consultation", content: "Chronic stress can often mask or trigger clinical anxiety and depression. A professional evaluation can determine if your stress levels require clinical intervention." },
                { title: "Biofeedback Strategies", content: "Learning to monitor and control your heart rate variability (HRV) can provide tangible, real-time data on your stress response." },
                { title: "Targeted Nutrition", content: "Stress depletes vital B-vitamins and magnesium. A psychiatric provider can help tailor your nutrition and supplementation to support your adrenal health." }
              ].map((item, idx) => (
                <div key={idx} className="bg-white p-5 rounded-xl shadow-sm border border-gray-100">
                  <h4 className="font-bold text-[#CA8A04] text-lg mb-2">{item.title}</h4>
                  <p className="text-justify text-sm sm:text-base">{item.content}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-12 sm:mb-20">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">Stress Assessment Table</h2>
            <div className="w-full overflow-hidden rounded-xl border border-gray-200">
              <div className="overflow-x-auto">
                <table className="w-full min-w-[500px] text-left border-collapse">
                  <thead>
                    <tr className="bg-[#EAB308] text-white">
                      <th className="p-3 sm:p-4 border-b border-yellow-700">Stress Indicator</th>
                      <th className="p-3 sm:p-4 border-b border-yellow-700">Early Sign</th>
                      <th className="p-3 sm:p-4 border-b border-yellow-700">Recovery Action</th>
                    </tr>
                  </thead>
                  <tbody className="text-sm sm:text-base">
                    <tr>
                      <td className="p-3 sm:p-4 border-b border-gray-100 font-bold">Physical</td>
                      <td className="p-3 sm:p-4 border-b border-gray-100">Jaw clenching or headaches.</td>
                      <td className="p-3 sm:p-4 border-b border-gray-100 italic">Progressive muscle relaxation.</td>
                    </tr>
                    <tr className="bg-yellow-50/30">
                      <td className="p-3 sm:p-4 border-b border-gray-100 font-bold">Cognitive</td>
                      <td className="p-3 sm:p-4 border-b border-gray-100">Inability to focus/indecision.</td>
                      <td className="p-3 sm:p-4 border-b border-gray-100 italic">"Digital detox" or time-blocking.</td>
                    </tr>
                    <tr>
                      <td className="p-3 sm:p-4 border-b border-gray-100 font-bold">Emotional</td>
                      <td className="p-3 sm:p-4 border-b border-gray-100">Sudden irritability or apathy.</td>
                      <td className="p-3 sm:p-4 border-b border-gray-100 italic">Social connection or therapy.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </section>
        </div>

        {/* ===== People Also Ask ===== */}
        <section className="mt-16 sm:mt-24 pt-12 border-t border-yellow-100">
          <h2 className="text-2xl sm:text-4xl font-black mb-10 text-gray-900 text-center">
            Stress Management FAQ
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8">
            {[
              { q: "Can stress cause physical illness?", a: "Yes. Chronic stress is linked to heart disease, digestive issues, and a compromised immune system." },
              { q: "How long does it take to 'reset'?", a: "While acute relief can happen in minutes, reversing the effects of chronic burnout often takes weeks of consistent lifestyle changes." },
              { q: "Are all types of stress bad?", a: "No. 'Eustress' (positive stress) can motivate us. The danger lies in 'Distress' that is constant and lacks a recovery period." },
              { q: "Does meditation actually work?", a: "Clinically, yes. Meditation has been shown to physically thicken the prefrontal cortex, the part of the brain responsible for regulating emotions." }
            ].map((item, idx) => (
              <div key={idx} className="bg-yellow-50/30 p-6 rounded-2xl border border-yellow-100">
                <h3 className="font-bold text-[#A16207] text-lg mb-3">{item.q}</h3>
                <p className="text-gray-700 text-sm sm:text-base text-justify">{item.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ===== CTA ===== */}
        <div className="mt-16 sm:mt-24 text-center">
          <div className="p-8 sm:p-12 bg-gradient-to-br from-[#EAB308] to-[#FACC15] rounded-[2rem] sm:rounded-[4rem] text-white shadow-lg">
            <h2 className="text-2xl sm:text-4xl font-black mb-4">Protect your peace.</h2>
            <p className="text-base sm:text-xl font-light mb-8 opacity-90">
              You don't have to carry the weight of chronic stress alone. Let's create a clinical plan to restore your wellness.
            </p>

            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-white text-gray-900 px-8 py-3 rounded-full font-bold text-base hover:bg-yellow-50 transition-all active:scale-95"
            >
              Book an Appointment
            </button>
          </div>
        </div>
      </motion.section>

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
              <h3 className="text-xl font-bold text-gray-900 mb-6">Select an Option</h3>
              <div className="flex flex-col gap-3">
                <button onClick={() => router.push('/insurances')} className="w-full py-4 bg-[#EAB308] text-white font-bold rounded-xl active:bg-[#CA8A04]">
                  Use Insurance
                </button>
                <button onClick={() => router.push('/selfpay')} className="w-full py-4 bg-gray-100 text-gray-900 font-bold rounded-xl active:bg-gray-200">
                  Self-Pay / Private
                </button>
                <button onClick={() => setIsModalOpen(false)} className="mt-2 text-gray-400 text-sm">
                  Maybe later
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}