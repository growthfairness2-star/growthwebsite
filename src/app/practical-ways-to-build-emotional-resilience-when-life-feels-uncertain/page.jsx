"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

/** * SEO CONFIGURATION 
 * Optimized for 2026 psychological resilience, uncertainty management, and mental fortitude.
 */
const metadata = {
  title: "Practical Ways to Build Emotional Resilience When Life Feels Uncertain",
  description: "Uncertainty is a part of life but it does not have to be a source of constant stress. Discover clinical tools to build resilience and maintain emotional balance.",
  keywords: [
    "build emotional resilience 2026", 
    "coping with uncertainty", 
    "mental health resilience tools", 
    "emotional strength exercises", 
    "managing life changes", 
    "psychological flexibility", 
    "resilience strategies"
  ],
  image: "/blog25.png", 
  url: "https://growthfairness.com/blog/practical-ways-to-build-emotional-resilience-when-life-feels-uncertain",
  publishedDate: "January 11, 2026"
};

export default function ResilienceBlog() {
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
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-black mb-6 leading-tight text-gray-900 break-words">
            Practical Ways to Build <br />
            <span
              className="font-light italic"
              style={{
                background: "linear-gradient(90deg, #EAB308, #FACC15)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Resilience When Life Feels Uncertain
            </span>
          </h1>

          <p className="text-gray-600 text-lg sm:text-xl font-light leading-relaxed text-justify">
            Resilience is not about avoiding the storm but learning how to navigate through it. When the future is unclear your ability to adapt and remain grounded becomes your greatest asset.
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
            alt="A sturdy tree in a changing landscape representing deep roots and flexibility"
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
            True resilience is found in psychological flexibility. It is the capacity to accept what you cannot control while taking purposeful action in the areas where you still have influence.
          </p>

          <section className="mb-12 sm:mb-20">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">The Resilience Paradox</h2>
            <p className="mb-6 text-justify leading-relaxed">
              In 2026 we understand that resilience is not a trait you either have or do not have. It is a set of skills that can be developed through intentional practice. When life feels uncertain our brains naturally default to a state of threat detection. This is a survival mechanism designed to protect us from danger but in the modern world it often leads to chronic anxiety. Building resilience involves training the brain to shift from a state of survival to a state of adaptation.
            </p>
            <p className="mb-6 text-justify leading-relaxed">
              Uncertainty is often where we feel the most powerless. However resilience is built by focusing on the variables that remain within your control. This shift in perspective lowers the allostatic load on your nervous system and allows you to maintain cognitive function even under pressure. By creating islands of certainty in your daily life you provide your mind with the safety it needs to process the unknown.
            </p>
            <p className="mb-6 text-justify leading-relaxed">
              We work with patients to develop a personalized resilience toolkit. This includes learning how to regulate the nervous system and how to reframe negative thought patterns and how to maintain social connections during difficult times. These skills form a buffer that protects your mental health regardless of external circumstances.
            </p>
          </section>

          <section className="mb-12 sm:mb-20">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 border-b-4 border-[#FACC15] inline-block">
              Core Pillars of Emotional Fortitude
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
              <div className="bg-white">
                <h3 className="text-lg sm:text-xl font-bold mb-4 text-[#A16207]">1. Cognitive Reframing</h3>
                <p className="text-gray-700 text-justify">
                  Challenge the narrative of catastrophic thinking. Instead of asking what if the worst happens try asking what if I am capable of handling whatever comes. This does not mean ignoring risks but rather acknowledging your own agency and past successes in overcoming challenges.
                </p>
              </div>

              <div className="bg-white">
                <h3 className="text-lg sm:text-xl font-bold mb-4 text-[#A16207]">2. Active Acceptance</h3>
                <p className="text-gray-700 text-justify">
                  Acceptance is not giving up. It is acknowledging the reality of a situation without wasting energy on wishing it were different. When you stop fighting the reality of uncertainty you free up that energy to find solutions or simply to endure the moment with more grace.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-12 sm:mb-20 bg-yellow-50/50 p-5 sm:p-10 rounded-2xl sm:rounded-3xl border border-yellow-100">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8">Clinical Tools for Tough Times</h2>
            
            <div className="space-y-4 sm:space-y-8">
              {[
                { title: "Grounding in Routine", content: "Predictable daily actions provide a sense of stability when the big picture is blurry. We encourage maintaining a consistent wake time and meal schedule to help regulate your internal biological rhythms." },
                { title: "The Sphere of Influence", content: "We help you map out exactly what you can control versus what you cannot. Directing your effort toward your own reactions and choices reduces the feeling of helplessness that often accompanies uncertainty." },
                { title: "Meaning Making", content: "Finding a sense of purpose or learning a lesson from a difficult season is a hallmark of high resilience. We work on identifying how your current struggles might be contributing to your long term growth." }
              ].map((item, idx) => (
                <div key={idx} className="bg-white p-5 rounded-xl shadow-sm border border-gray-100">
                  <h4 className="font-bold text-[#CA8A04] text-lg mb-2">{item.title}</h4>
                  <p className="text-justify text-sm sm:text-base">{item.content}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-12 sm:mb-20">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">The Resilience Growth Scale</h2>
            
            <div className="w-full overflow-hidden rounded-xl border border-gray-200 mt-6">
              <div className="overflow-x-auto">
                <table className="w-full min-w-[500px] text-left border-collapse">
                  <thead>
                    <tr className="bg-[#EAB308] text-white">
                      <th className="p-3 sm:p-4 border-b border-yellow-700">Stage</th>
                      <th className="p-3 sm:p-4 border-b border-yellow-700">Internal Focus</th>
                      <th className="p-3 sm:p-4 border-b border-yellow-700">Daily Practice</th>
                    </tr>
                  </thead>
                  <tbody className="text-sm sm:text-base">
                    <tr>
                      <td className="p-3 sm:p-4 border-b border-gray-100 font-bold">Stabilizing</td>
                      <td className="p-3 sm:p-4 border-b border-gray-100">Safety and calm.</td>
                      <td className="p-3 sm:p-4 border-b border-gray-100 italic">Deep breathing and rest.</td>
                    </tr>
                    <tr className="bg-yellow-50/30">
                      <td className="p-3 sm:p-4 border-b border-gray-100 font-bold">Adapting</td>
                      <td className="p-3 sm:p-4 border-b border-gray-100">Flexibility and learning.</td>
                      <td className="p-3 sm:p-4 border-b border-gray-100 italic">Problem solving small tasks.</td>
                    </tr>
                    <tr>
                      <td className="p-3 sm:p-4 border-b border-gray-100 font-bold">Thriving</td>
                      <td className="p-3 sm:p-4 border-b border-gray-100">Purpose and connection.</td>
                      <td className="p-3 sm:p-4 border-b border-gray-100 italic">Helping others and goals.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </section>
        </div>

        {/* ===== People Also Ask (10 FAQs) ===== */}
        <section className="mt-16 sm:mt-24 pt-12 border-t border-yellow-100">
          <h2 className="text-2xl sm:text-4xl font-black mb-10 text-gray-900 text-center">
            Uncertainty & Resilience FAQ
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8">
            {[
              { q: "Is it normal to feel exhausted when life is uncertain", a: "Yes. Living in a state of high vigilance is physically and mentally taxing. Your brain is working overtime to predict outcomes which leads to deep fatigue." },
              { q: "How can I stop worrying about things I cannot control", a: "Acknowledge the worry and then intentionally pivot to an action you can take. Focusing on a small and tangible task can help ground your energy." },
              { q: "Can resilience be learned at any age", a: "Absolutely. Neuroplasticity allows the brain to develop new coping mechanisms and emotional regulation skills throughout your entire life." },
              { q: "What is the difference between resilience and being strong", a: "Strength often implies pushing through without feeling. Resilience is about feeling the difficulty and adapting so you can move forward in a healthy way." },
              { q: "How does social connection help with resilience", a: "Having a support system provides a safety net and helps regulate your nervous system through social buffering which reduces the impact of stress." },
              { q: "Does journaling help build emotional strength", a: "Yes. Writing about your experiences helps you process emotions and see patterns in your reactions which improves your self awareness and adaptability." },
              { q: "What should I do if I feel like I am at my breaking point", a: "Stop and focus purely on your physical safety and comfort. Reach out to a professional or a trusted friend immediately to help carry the load." },
              { q: "How can I help my children become more resilient", a: "Model healthy coping behaviors and allow them to experience and solve age appropriate challenges while providing a secure emotional base." },
              { q: "Is it okay to feel sad while trying to be resilient", a: "Yes. Resilience includes the capacity to experience the full range of human emotions without being paralyzed by them. Sadness is a natural part of the process." },
              { q: "When is uncertainty a sign of a larger mental health issue", a: "If the feeling of uncertainty leads to constant panic or an inability to perform daily tasks or thoughts of hopelessness it is time to seek professional help." }
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
            <h2 className="text-2xl sm:text-4xl font-black mb-4">You are stronger than you think.</h2>
            <p className="text-base sm:text-xl font-light mb-8 opacity-90">
              Resilience is a skill we can build together. Let us help you find your footing in an ever changing world.
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