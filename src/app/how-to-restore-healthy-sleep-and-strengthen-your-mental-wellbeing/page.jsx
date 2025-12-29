"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

/** * SEO CONFIGURATION 
 * Optimized for 2026 sleep hygiene, circadian rhythm, and mental health recovery.
 */
const metadata = {
  title: "How to Restore Healthy Sleep & Strengthen Your Mental Wellbeing",
  description: "Sleep is the foundation of mental health. Learn clinical strategies to restore your circadian rhythm, improve sleep quality, and boost emotional resilience.",
  keywords: [
    "restore healthy sleep 2026", 
    "sleep and mental health", 
    "circadian rhythm regulation", 
    "insomnia treatment options", 
    "sleep hygiene for anxiety", 
    "improving deep sleep", 
    "psychiatric sleep support"
  ],
  image: "/blog19.png", 
  url: "https://growthfairness.com/blog/how-to-restore-healthy-sleep-and-strengthen-your-mental-wellbeing",
  publishedDate: "January 5, 2026"
};

export default function SleepWellnessBlog() {
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
            Restorative Sleep: <br />
            <span
              className="font-light italic"
              style={{
                background: "linear-gradient(90deg, #EAB308, #FACC15)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              The Mental Pillar
            </span>
          </h1>

          <p className="text-gray-600 text-lg sm:text-xl font-light leading-relaxed text-justify">
            Sleep is not a luxury; it is a clinical necessity. It is the period when your brain processes emotions, clears toxins, and consolidates the resilience you need for the day ahead.
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
            alt="Calm environment optimized for healthy sleep"
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
            A single night of poor sleep can increase emotional reactivity by up to 60%. By mastering your sleep architecture, you create a buffer against stress and anxiety.
          </p>

          <section className="mb-12 sm:mb-20">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">The Circadian Connection</h2>
            <p className="mb-6 text-justify leading-relaxed">
              Our bodies operate on a 24-hour internal clock. When this rhythm is disrupted by blue light, irregular schedules, or late-night stress, our mental health suffers. Aligning your habits with natural light cycles is the most effective way to restore balance.
            </p>
          </section>

          <section className="mb-12 sm:mb-20">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 border-b-4 border-[#FACC15] inline-block">
              Daily Sleep Hygiene Checklist
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
              <div className="bg-white">
                <h3 className="text-lg sm:text-xl font-bold mb-4 text-[#A16207]">1. Morning Light Exposure</h3>
                <p className="text-gray-700 text-justify">
                  Get 10–20 minutes of natural sunlight within an hour of waking. This triggers cortisol release for energy and sets the "timer" for melatonin production later that night.
                </p>
              </div>

              <div className="bg-white">
                <h3 className="text-lg sm:text-xl font-bold mb-4 text-[#A16207]">2. The "Buffer Hour"</h3>
                <p className="text-gray-700 text-justify">
                  Dedicate the 60 minutes before bed to screen-free relaxation. Dim the lights and engage in low-stimulation activities to signal to your brain that it is safe to down-regulate.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-12 sm:mb-20 bg-yellow-50/50 p-5 sm:p-10 rounded-2xl sm:rounded-3xl border border-yellow-100">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8">Clinical Support for Sleep Disorders</h2>
            
            <div className="space-y-4 sm:space-y-8">
              {[
                { title: "CBT-I (Insomnia Focus)", content: "Cognitive Behavioral Therapy for Insomnia is the gold standard for long-term sleep improvement, addressing the thoughts and behaviors that prevent rest." },
                { title: "Medication Review", content: "Some psychiatric medications can interfere with REM sleep. A professional evaluation ensures your treatment plan supports, rather than hinders, your rest." },
                { title: "Managing Sleep Anxiety", content: "If you dread going to bed because you fear being awake, we work on de-conditioning that 'performance anxiety' around sleep." }
              ].map((item, idx) => (
                <div key={idx} className="bg-white p-5 rounded-xl shadow-sm border border-gray-100">
                  <h4 className="font-bold text-[#CA8A04] text-lg mb-2">{item.title}</h4>
                  <p className="text-justify text-sm sm:text-base">{item.content}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-12 sm:mb-20">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">Sleep Architecture Overview</h2>
            
            <div className="w-full overflow-hidden rounded-xl border border-gray-200 mt-6">
              <div className="overflow-x-auto">
                <table className="w-full min-w-[500px] text-left border-collapse">
                  <thead>
                    <tr className="bg-[#EAB308] text-white">
                      <th className="p-3 sm:p-4 border-b border-yellow-700">Sleep Phase</th>
                      <th className="p-3 sm:p-4 border-b border-yellow-700">Mental Benefit</th>
                      <th className="p-3 sm:p-4 border-b border-yellow-700">Disruption Effect</th>
                    </tr>
                  </thead>
                  <tbody className="text-sm sm:text-base">
                    <tr>
                      <td className="p-3 sm:p-4 border-b border-gray-100 font-bold">Deep Sleep (N3)</td>
                      <td className="p-3 sm:p-4 border-b border-gray-100">Physical recovery & brain detox.</td>
                      <td className="p-3 sm:p-4 border-b border-gray-100 italic">Brain fog & fatigue.</td>
                    </tr>
                    <tr className="bg-yellow-50/30">
                      <td className="p-3 sm:p-4 border-b border-gray-100 font-bold">REM Sleep</td>
                      <td className="p-3 sm:p-4 border-b border-gray-100">Emotional processing & memory.</td>
                      <td className="p-3 sm:p-4 border-b border-gray-100 italic">Irritability & anxiety.</td>
                    </tr>
                    <tr>
                      <td className="p-3 sm:p-4 border-b border-gray-100 font-bold">Light Sleep</td>
                      <td className="p-3 sm:p-4 border-b border-gray-100">Transition & metabolic regulation.</td>
                      <td className="p-3 sm:p-4 border-b border-gray-100 italic">Fragmented rest.</td>
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
            Sleep Wellness FAQ
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8">
            {[
              { q: "Is 6 hours of sleep enough?", a: "For the vast majority of adults, 7–9 hours is the clinical requirement for full cognitive and emotional restoration." },
              { q: "Can I use melatonin every night?", a: "Melatonin is a hormone, not a sedative. It is best used for short-term rhythm resets rather than a chronic sleep aid." },
              { q: "Why do I wake up at 3 AM?", a: "Middle-of-the-night waking is often tied to blood sugar dips or 'cortisol spikes' from unresolved daytime stress." },
              { q: "Does alcohol help me sleep?", a: "Alcohol acts as a sedative that helps you fall asleep, but it severely fragments your sleep quality and blocks REM cycles." }
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
            <h2 className="text-2xl sm:text-4xl font-black mb-4">Wake up to a better mind.</h2>
            <p className="text-base sm:text-xl font-light mb-8 opacity-90">
              Struggling with sleep is often a struggle with mental health. Let's address both at the root.
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