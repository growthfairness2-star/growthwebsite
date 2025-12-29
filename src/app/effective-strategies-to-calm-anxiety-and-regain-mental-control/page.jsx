"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

/** * SEO CONFIGURATION 
 * Optimized for 2025 anxiety relief techniques and cognitive control strategies.
 */
const metadata = {
  title: "Effective Strategies to Calm Anxiety & Regain Mental Control",
  description: "Explore evidence-based techniques to manage anxiety, stop panic loops, and regain emotional balance. Learn grounding exercises and cognitive strategies.",
  keywords: [
    "how to calm anxiety 2025", 
    "anxiety management strategies", 
    "regaining mental control", 
    "grounding techniques for panic", 
    "mindfulness for anxiety relief", 
    "cognitive behavioral tools", 
    "anxiety treatment options"
  ],
  image: "/blog12.png", 
  url: "https://growthfairness.com/blog/effective-strategies-to-calm-anxiety-and-regain-mental-control"
};

export default function AnxietyControlGuide() {
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
            Finding Calm: <br />
            <span
              className="font-light italic"
              style={{
                background: "linear-gradient(90deg, #EAB308, #FACC15)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Regain Control
            </span>
          </h1>

          <p className="text-gray-600 text-lg sm:text-xl font-light leading-relaxed text-justify">
            Anxiety can feel like a storm, but you are the anchor. Discover the tools to quiet the noise, steady your breath, and reclaim your mental space.
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
            alt="Person practicing mindfulness to calm anxiety"
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
            Anxiety is a survival mechanism that has been over-activated. By learning to communicate "safety" to your nervous system, you can de-escalate the panic response.
          </p>

          <section className="mb-12 sm:mb-20">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">Immediate Grounding: The 5-4-3-2-1 Method</h2>
            <p className="mb-6 text-justify leading-relaxed">
              When the mind begins to race, grounding brings you back to the physical present. This sensory checklist disrupts the "fight-or-flight" loop:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>5 things you can see:</strong> Look for small details, like a pattern on the wall.</li>
              <li><strong>4 things you can touch:</strong> Feel the texture of your clothing or a cold surface.</li>
              <li><strong>3 things you can hear:</strong> Listen for distant traffic or a clock ticking.</li>
              <li><strong>2 things you can smell:</strong> Try to catch a scent in the air or scent of your coffee.</li>
              <li><strong>1 thing you can taste:</strong> Focus on the lingering taste in your mouth.</li>
            </ul>
          </section>

          <section className="mb-12 sm:mb-20">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 border-b-4 border-[#FACC15] inline-block">
              Cognitive Anchoring
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
              <div className="bg-white">
                <h3 className="text-lg sm:text-xl font-bold mb-4 text-[#A16207]">1. Box Breathing</h3>
                <p className="text-gray-700 text-justify">
                  Inhale for 4, hold for 4, exhale for 4, and hold for 4. This regulated rhythm signals your parasympathetic nervous system to lower your heart rate and cortisol levels.
                </p>
              </div>

              <div className="bg-white">
                <h3 className="text-lg sm:text-xl font-bold mb-4 text-[#A16207]">2. Thought Challenging</h3>
                <p className="text-gray-700 text-justify">
                  Identify "catastrophizing" thoughts. Ask yourself: "Is this a fact or a feeling?" and "What is the most likely outcome, not the worst-case scenario?"
                </p>
              </div>
            </div>
          </section>

          <section className="mb-12 sm:mb-20 bg-yellow-50/50 p-5 sm:p-10 rounded-2xl sm:rounded-3xl border border-yellow-100">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8">Clinical Pathways to Stability</h2>

            <div className="space-y-4 sm:space-y-8">
              {[
                { title: "CBT-Informed Care", content: "Cognitive Behavioral Therapy focuses on changing the patterns of thinking that trigger anxiety, providing long-term structural relief." },
                { title: "Medication Management", content: "For some, the biological intensity of anxiety requires medication to 'lower the floor,' making therapy and daily life more manageable." },
                { title: "Lifestyle Integration", content: "Addressing sleep hygiene, caffeine intake, and physical movement to ensure the body has the resources to handle stress." }
              ].map((item, idx) => (
                <div key={idx} className="bg-white p-5 rounded-xl shadow-sm border border-gray-100">
                  <h4 className="font-bold text-[#CA8A04] text-lg mb-2">{item.title}</h4>
                  <p className="text-justify text-sm sm:text-base">{item.content}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-12 sm:mb-20">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">Anxiety Management Toolkit</h2>
            <div className="w-full overflow-hidden rounded-xl border border-gray-200">
              <div className="overflow-x-auto">
                <table className="w-full min-w-[500px] text-left border-collapse">
                  <thead>
                    <tr className="bg-[#EAB308] text-white">
                      <th className="p-3 sm:p-4 border-b border-yellow-700">Strategy Type</th>
                      <th className="p-3 sm:p-4 border-b border-yellow-700">Example Tool</th>
                      <th className="p-3 sm:p-4 border-b border-yellow-700">Best For</th>
                    </tr>
                  </thead>
                  <tbody className="text-sm sm:text-base">
                    <tr>
                      <td className="p-3 sm:p-4 border-b border-gray-100 font-bold">Physical</td>
                      <td className="p-3 sm:p-4 border-b border-gray-100">Progressive Muscle Relaxation</td>
                      <td className="p-3 sm:p-4 border-b border-gray-100 italic">Physical tension/racing heart.</td>
                    </tr>
                    <tr className="bg-yellow-50/30">
                      <td className="p-3 sm:p-4 border-b border-gray-100 font-bold">Cognitive</td>
                      <td className="p-3 sm:p-4 border-b border-gray-100">Scheduled "Worry Time"</td>
                      <td className="p-3 sm:p-4 border-b border-gray-100 italic">Preventing rumination all day.</td>
                    </tr>
                    <tr>
                      <td className="p-3 sm:p-4 border-b border-gray-100 font-bold">Biological</td>
                      <td className="p-3 sm:p-4 border-b border-gray-100">Targeted Supplementation/Meds</td>
                      <td className="p-3 sm:p-4 border-b border-gray-100 italic">Chronic, high-intensity anxiety.</td>
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
            Managing Your Anxiety
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8">
            {[
              { q: "Is it a panic attack or anxiety?", a: "Panic attacks are sudden, intense, and physical. Anxiety is often a long-term sense of dread or 'being on edge.'" },
              { q: "Can I cure anxiety?", a: "Anxiety is a natural emotion, but you can certainly 'cure' the disorders associated with it through therapy and lifestyle changes." },
              { q: "Should I avoid things that make me anxious?", a: "Avoidance actually grows anxiety. We work on gradual, safe exposure to help your brain realize there is no danger." },
              { q: "When is it time to see a doctor?", a: "When anxiety interferes with your work, sleep, relationships, or overall quality of life, it is time for professional support." }
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
            <h2 className="text-2xl sm:text-4xl font-black mb-4">Silence the noise.</h2>
            <p className="text-base sm:text-xl font-light mb-8 opacity-90">
              You don't have to navigate anxiety alone. Let’s work together to build your resilience.
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