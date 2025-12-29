"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

/** * SEO CONFIGURATION 
 * Optimized for 2026 trauma recovery, emotional regulation, and PTSD support.
 */
const metadata = {
  title: "Understanding and Regulating Emotional Triggers from Past Trauma",
  description: "Learn how to identify, understand, and safely regulate emotional triggers related to past trauma. Discover clinical grounding techniques and trauma-informed care.",
  keywords: [
    "emotional triggers trauma 2026", 
    "PTSD trigger management", 
    "regulating trauma responses", 
    "somatic grounding techniques", 
    "trauma-informed therapy", 
    "hypervigilance relief", 
    "healing from past trauma"
  ],
  image: "/blog16.png", 
  url: "https://growthfairness.com/blog/how-to-understand-and-regulate-emotional-triggers-from-past-trauma",
  publishedDate: "January 2, 2026"
};

export default function TraumaTriggersBlog() {
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
            Healing Echoes: <br />
            <span
              className="font-light italic"
              style={{
                background: "linear-gradient(90deg, #EAB308, #FACC15)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Understanding Triggers
            </span>
          </h1>

          <p className="text-gray-600 text-lg sm:text-xl font-light leading-relaxed text-justify">
            A trigger is a bridge back to a difficult past. By learning to recognize these signals, we can dismantle the alarm system and reclaim our sense of safety in the present.
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
            alt="Compassionate environment for trauma recovery"
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
            Trauma lives in the body. When we are triggered, our brain treats a present-day memory as a present-day threat, activating the "fight-flight-freeze" response.
          </p>

          <section className="mb-12 sm:mb-20">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">What is a Trigger?</h2>
            <p className="mb-6 text-justify leading-relaxed">
              Triggers are sensory reminders—a scent, a tone of voice, a specific location—that cause the brain to bypass logic and go straight to survival mode. Understanding that your reaction is a biological protective mechanism is the first step toward regulation.
            </p>
          </section>

          <section className="mb-12 sm:mb-20">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 border-b-4 border-[#FACC15] inline-block">
              Somatic Regulation Strategies
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
              <div className="bg-white">
                <h3 className="text-lg sm:text-xl font-bold mb-4 text-[#A16207]">1. The "Window of Tolerance"</h3>
                <p className="text-gray-700 text-justify">
                  Learn to identify when you are becoming hyper-aroused (anxious/panicked) or hypo-aroused (numb/shutdown). Regulation is the art of staying within your optimal "window" of functioning.
                </p>
              </div>

              <div className="bg-white">
                <h3 className="text-lg sm:text-xl font-bold mb-4 text-[#A16207]">2. Anchoring to the Present</h3>
                <p className="text-gray-700 text-justify">
                  Use physical weight—like a weighted blanket or pressing your feet firmly into the floor—to remind your nervous system that you are in a safe, physical space right now.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-12 sm:mb-20 bg-yellow-50/50 p-5 sm:p-10 rounded-2xl sm:rounded-3xl border border-yellow-100">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8">Clinical Trauma Interventions</h2>
            
            <div className="space-y-4 sm:space-y-8">
              {[
                { title: "Trauma-Informed Care", content: "A clinical approach that assumes an individual is more likely than not to have a history of trauma, prioritizing safety and choice in every session." },
                { title: "Grounding Skills", content: "Techniques like the 5-4-3-2-1 method or cold-water exposure to the face can 'reset' the vagus nerve and stop a panic spiral." },
                { title: "Medication for Hypervigilance", content: "Sometimes, the nervous system is so 'stuck' in high alert that medication is used to quiet the background noise, allowing therapy to be effective." }
              ].map((item, idx) => (
                <div key={idx} className="bg-white p-5 rounded-xl shadow-sm border border-gray-100">
                  <h4 className="font-bold text-[#CA8A04] text-lg mb-2">{item.title}</h4>
                  <p className="text-justify text-sm sm:text-base">{item.content}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-12 sm:mb-20">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">Trigger Awareness Table</h2>
            <div className="w-full overflow-hidden rounded-xl border border-gray-200">
              <div className="overflow-x-auto">
                <table className="w-full min-w-[500px] text-left border-collapse">
                  <thead>
                    <tr className="bg-[#EAB308] text-white">
                      <th className="p-3 sm:p-4 border-b border-yellow-700">Trigger Category</th>
                      <th className="p-3 sm:p-4 border-b border-yellow-700">Body Signal</th>
                      <th className="p-3 sm:p-4 border-b border-yellow-700">Regulation Tool</th>
                    </tr>
                  </thead>
                  <tbody className="text-sm sm:text-base">
                    <tr>
                      <td className="p-3 sm:p-4 border-b border-gray-100 font-bold">Auditory/Sound</td>
                      <td className="p-3 sm:p-4 border-b border-gray-100">Tight chest, shallow breath.</td>
                      <td className="p-3 sm:p-4 border-b border-gray-100 italic">Diaphragmatic breathing.</td>
                    </tr>
                    <tr className="bg-yellow-50/30">
                      <td className="p-3 sm:p-4 border-b border-gray-100 font-bold">Interpersonal</td>
                      <td className="p-3 sm:p-4 border-b border-gray-100">Flushing, urge to flee.</td>
                      <td className="p-3 sm:p-4 border-b border-gray-100 italic">The "Step Away" boundary.</td>
                    </tr>
                    <tr>
                      <td className="p-3 sm:p-4 border-b border-gray-100 font-bold">Internal Memory</td>
                      <td className="p-3 sm:p-4 border-b border-gray-100">Dissociation or "spacing out."</td>
                      <td className="p-3 sm:p-4 border-b border-gray-100 italic">Scent/Olfactory grounding.</td>
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
            Trauma FAQ
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8">
            {[
              { q: "Can triggers disappear over time?", a: "Triggers may not disappear entirely, but with treatment, their intensity fades and your ability to manage them increases." },
              { q: "Is it okay to avoid my triggers?", a: "In the early stages of healing, avoidance can be a safety tool. Long-term, we work on 'titrated exposure' to build your resilience." },
              { q: "How can I support a triggered partner?", a: "Stay calm, use a low voice, and ask 'What do you need right now?' rather than trying to fix the emotion immediately." },
              { q: "Is medication necessary for trauma?", a: "Not always, but it can be a vital support for sleep, nightmares, or extreme hypervigilance during the healing process." }
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
            <h2 className="text-2xl sm:text-4xl font-black mb-4">You are not your past.</h2>
            <p className="text-base sm:text-xl font-light mb-8 opacity-90">
              Healing from trauma is a process of reclaiming your power. We are here to provide the clinical support you need to feel safe again.
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