"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

/** * SEO CONFIGURATION 
 * Optimized for 2025 sleep health and wellness trends.
 */
const metadata = {
  title: "Insomnia: What It Is, Causes, Symptoms & Treatment Guide",
  description: "Understand the root causes of sleep disorders. Learn about CBT-I, sleep hygiene, and clinical treatments to overcome insomnia and reclaim your rest.",
  keywords: [
    "insomnia treatment 2025", 
    "causes of chronic insomnia", 
    "sleep hygiene tips", 
    "CBT-I for sleep", 
    "signs of sleep deprivation", 
    "how to fall asleep faster", 
    "sleep aid vs natural remedies"
  ],
  image: "/blog-insomnia.png", // Ensure this image exists in your public folder
  url: "https://growthfairness.com/blog/insomnia"
};

export default function InsomniaGuideBlog() {
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
            Insomnia: <br />
            <span
              className="font-light italic"
              style={{
                background: "linear-gradient(90deg, #EAB308, #FACC15)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Symptoms & Recovery
            </span>
          </h1>

          <p className="text-gray-600 text-lg sm:text-xl font-light leading-relaxed text-justify">
            A comprehensive guide to understanding sleep disorders and the clinical protocols designed to help you reclaim your night.
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
            alt="Person struggling to sleep or resting after treatment"
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
            Sleep is the foundation of mental health. Insomnia isn't just "being tired"; it is a physiological disruption that affects how you think, feel, and live.
          </p>

          <section className="mb-12 sm:mb-20">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">What is Insomnia?</h2>
            <p className="mb-6 text-justify leading-relaxed">
              Insomnia is a clinical sleep disorder characterized by difficulty falling asleep, staying asleep, or waking up too early. When these patterns persist for more than three months, it is classified as chronic insomnia, requiring professional intervention.
            </p>
          </section>

          <section className="mb-12 sm:mb-20">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 border-b-4 border-[#FACC15] inline-block">
              The Three Pillars of Sleep Disruption
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
              <div className="bg-white">
                <h3 className="text-lg sm:text-xl font-bold mb-4 text-[#A16207]">1. Cognitive Hyperarousal</h3>
                <p className="text-gray-700 text-justify">
                  This is the "racing mind" at night. Your brain remains in an active state of problem-solving or anxiety, preventing the transition to sleep.
                </p>
              </div>

              <div className="bg-white">
                <h3 className="text-lg sm:text-xl font-bold mb-4 text-[#A16207]">2. Circadian Misalignment</h3>
                <p className="text-gray-700 text-justify">
                  A disconnect between your internal biological clock and your external environment, often caused by irregular schedules or blue light exposure.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-12 sm:mb-20 bg-yellow-50/50 p-5 sm:p-10 rounded-2xl sm:rounded-3xl border border-yellow-100">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8">Clinical Treatment Strategies</h2>

            <div className="space-y-4 sm:space-y-8">
              {[
                { title: "CBT-I Protocol", content: "Cognitive Behavioral Therapy for Insomnia is the gold standard, focusing on stimulus control and sleep restriction to reset the sleep drive." },
                { title: "Environmental Optimization", content: "Creating a 'Sleep Sanctuary' by controlling variables like core body temperature (65°F), noise levels, and total darkness." },
                { title: "Sleep Hygiene Rituals", content: "Consistent wake times and wind-down periods that signal to the nervous system that it is safe to downregulate." }
              ].map((type, idx) => (
                <div key={idx} className="bg-white p-5 rounded-xl shadow-sm border border-gray-100">
                  <h4 className="font-bold text-[#CA8A04] text-lg mb-2">{type.title}</h4>
                  <p className="text-justify text-sm sm:text-base">{type.content}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-12 sm:mb-20">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">Symptom Checklist</h2>

            <div className="w-full overflow-hidden rounded-xl border border-gray-200">
              <div className="overflow-x-auto">
                <table className="w-full min-w-[500px] text-left border-collapse">
                  <thead>
                    <tr className="bg-[#EAB308] text-white">
                      <th className="p-3 sm:p-4 border-b border-yellow-700">Nighttime Signs</th>
                      <th className="p-3 sm:p-4 border-b border-yellow-700">Daytime Signs</th>
                      <th className="p-3 sm:p-4 border-b border-yellow-700">Mood Signs</th>
                    </tr>
                  </thead>
                  <tbody className="text-sm sm:text-base">
                    <tr>
                      <td className="p-3 sm:p-4 border-b border-gray-100">Trouble falling asleep</td>
                      <td className="p-3 sm:p-4 border-b border-gray-100">Morning Fatigue</td>
                      <td className="p-3 sm:p-4 border-b border-gray-100">Increased Anxiety</td>
                    </tr>
                    <tr className="bg-yellow-50/30">
                      <td className="p-3 sm:p-4 border-b border-gray-100">Waking during night</td>
                      <td className="p-3 sm:p-4 border-b border-gray-100">Lower Productivity</td>
                      <td className="p-3 sm:p-4 border-b border-gray-100">Irritability</td>
                    </tr>
                    <tr>
                      <td className="p-3 sm:p-4 border-b border-gray-100">Non-restorative sleep</td>
                      <td className="p-3 sm:p-4 border-b border-gray-100">Daytime Drowsiness</td>
                      <td className="p-3 sm:p-4 border-b border-gray-100">Lack of Focus</td>
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
            People Also Ask
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8">
            {[
              { q: "Is insomnia a mental illness?", a: "Insomnia is a sleep disorder, but it is often comorbid with mental health conditions like anxiety or depression." },
              { q: "How long until sleep deprivation is dangerous?", a: "Short-term deprivation affects focus; long-term insomnia increases risks for cardiovascular issues and weakened immunity." },
              { q: "Can I fix insomnia without pills?", a: "Yes, clinical research shows CBT-I is more effective long-term than sleep medications for chronic cases." },
              { q: "Why do I wake up at 3 AM?", a: "This is often a result of blood sugar fluctuations or 'stress spikes' (cortisol) that pull you out of your sleep cycle." }
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
            <h2 className="text-2xl sm:text-4xl font-black mb-4">Ready for restorative sleep?</h2>
            <p className="text-base sm:text-xl font-light mb-8 opacity-90">
              Professional support can help you break the cycle of sleeplessness. Let's find your balance.
            </p>

            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-white text-gray-900 px-8 py-3 rounded-full font-bold text-base hover:bg-yellow-50 transition-all active:scale-95"
            >
              Consult a Specialist
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
              <h3 className="text-xl font-bold text-gray-900 mb-6">Take Action Today</h3>
              <div className="flex flex-col gap-3">
                <button onClick={() => router.push('/insurances')} className="w-full py-4 bg-[#EAB308] text-white font-bold rounded-xl active:bg-[#CA8A04]">
                  All Insurances
                </button>
                <button onClick={() => router.push('/selfpay')} className="w-full py-4 bg-gray-100 text-gray-900 font-bold rounded-xl active:bg-gray-200">
                  Self Pay / out-of-pocket
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