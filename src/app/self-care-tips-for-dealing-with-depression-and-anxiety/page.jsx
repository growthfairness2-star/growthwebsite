"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

/** * SEO CONFIGURATION 
 * Optimized for 2025 self-management and holistic mental health recovery.
 */
const metadata = {
  title: "Self-Care for Depression & Anxiety: 2025 Coping Strategies Guide",
  description: "Learn practical self-care tips to manage symptoms of depression and anxiety. Discover science-backed routines for emotional regulation and mental wellness.",
  keywords: [
    "self-care for depression 2025", 
    "anxiety management tips", 
    "holistic mental health routine", 
    "coping with panic attacks", 
    "daily habits for depression", 
    "mindfulness for anxiety", 
    "mental health self-help guide"
  ],
  image: "/therapy.png", 
  url: "https://growthfairness.com/blog/self-care-tips-for-dealing-with-depression-and-anxiety"
};

export default function SelfCareMentalHealthGuide() {
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
            Gentle Steps: <br />
            <span
              className="font-light italic"
              style={{
                background: "linear-gradient(90deg, #EAB308, #FACC15)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Self-Care Mastery
            </span>
          </h1>

          <p className="text-gray-600 text-lg sm:text-xl font-light leading-relaxed text-justify">
            Self-care isn't about grand gestures; it’s about the small, consistent choices that protect your peace and rebuild your resilience.
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
            alt="Person practicing mindfulness or peaceful self-reflection"
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
            When you are struggling, even the simplest tasks can feel monumental. The goal of self-care is to lower the barrier to entry for your own well-being.
          </p>

          <section className="mb-12 sm:mb-20">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">Foundational Habits</h2>
            <p className="mb-6 text-justify leading-relaxed">
              Research shows that "Behavioral Activation"—doing things even when you don't feel like it—is one of the most effective ways to break the cycle of depression. Start with tasks that take less than five minutes.
            </p>
          </section>

          <section className="mb-12 sm:mb-20">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 border-b-4 border-[#FACC15] inline-block">
              Immediate Coping Strategies
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
              <div className="bg-white">
                <h3 className="text-lg sm:text-xl font-bold mb-4 text-[#A16207]">1. For Anxiety: Grounding</h3>
                <p className="text-gray-700 text-justify">
                  Use the 5-4-3-2-1 technique: Identify 5 things you see, 4 you can touch, 3 you hear, 2 you can smell, and 1 you can taste. This pulls your brain out of a "worry loop" and back into your body.
                </p>
              </div>

              <div className="bg-white">
                <h3 className="text-lg sm:text-xl font-bold mb-4 text-[#A16207]">2. For Depression: Movement</h3>
                <p className="text-gray-700 text-justify">
                  Depression thrives in stillness. A 10-minute walk or simply standing in direct sunlight can trigger a subtle release of serotonin and Vitamin D, helping to lift the "fog."
                </p>
              </div>
            </div>
          </section>

          <section className="mb-12 sm:mb-20 bg-yellow-50/50 p-5 sm:p-10 rounded-2xl sm:rounded-3xl border border-yellow-100">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8">Clinical Self-Care Pillars</h2>

            <div className="space-y-4 sm:space-y-8">
              {[
                { title: "Sleep Architecture", content: "Go to bed and wake up at the same time every day. Consistent circadian rhythms are the biological foundation for emotional stability." },
                { title: "Digital Boundaries", content: "Limit 'doom-scrolling' and blue light exposure, especially in the first and last hour of your day, to reduce social comparison and neuro-inflammation." },
                { title: "Nutritional Support", content: "Focus on anti-inflammatory foods like Omega-3s and complex carbohydrates that stabilize blood sugar and prevent mood crashes." }
              ].map((pill, idx) => (
                <div key={idx} className="bg-white p-5 rounded-xl shadow-sm border border-gray-100">
                  <h4 className="font-bold text-[#CA8A04] text-lg mb-2">{pill.title}</h4>
                  <p className="text-justify text-sm sm:text-base">{pill.content}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-12 sm:mb-20">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">Daily Wellness Checklist</h2>

            <div className="w-full overflow-hidden rounded-xl border border-gray-200">
              <div className="overflow-x-auto">
                <table className="w-full min-w-[500px] text-left border-collapse">
                  <thead>
                    <tr className="bg-[#EAB308] text-white">
                      <th className="p-3 sm:p-4 border-b border-yellow-700">The Morning Boost</th>
                      <th className="p-3 sm:p-4 border-b border-yellow-700">The Midday Reset</th>
                      <th className="p-3 sm:p-4 border-b border-yellow-700">The Evening Wind-down</th>
                    </tr>
                  </thead>
                  <tbody className="text-sm sm:text-base">
                    <tr>
                      <td className="p-3 sm:p-4 border-b border-gray-100">Hydration (16oz water)</td>
                      <td className="p-3 sm:p-4 border-b border-gray-100">Deep Breathing (Box Breath)</td>
                      <td className="p-3 sm:p-4 border-b border-gray-100">Gratitude Journaling</td>
                    </tr>
                    <tr className="bg-yellow-50/30">
                      <td className="p-3 sm:p-4 border-b border-gray-100">Natural Sunlight exposure</td>
                      <td className="p-3 sm:p-4 border-b border-gray-100">Physical Stretch</td>
                      <td className="p-3 sm:p-4 border-b border-gray-100">Device-Free Hour</td>
                    </tr>
                    <tr>
                      <td className="p-3 sm:p-4 border-b border-gray-100">High-Protein Breakfast</td>
                      <td className="p-3 sm:p-4 border-b border-gray-100">Social Connection (Text/Call)</td>
                      <td className="p-3 sm:p-4 border-b border-gray-100">Skin-care/Warm Shower</td>
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
            Self-Care FAQs
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8">
            {[
              { q: "Is self-care a replacement for therapy?", a: "No. Self-care is a supportive practice that works alongside clinical treatment like therapy or medication to improve overall outcomes." },
              { q: "What if I feel too tired for self-care?", a: "That is when you need it most. Focus on 'micro-self-care'—even something as small as brushing your teeth or changing your socks counts as a win." },
              { q: "Does self-care include medication?", a: "Yes. Taking prescribed medications consistently and attending doctor appointments is a profound act of self-care." },
              { q: "How do I deal with guilt for resting?", a: "Remind yourself that rest is productive. You cannot pour from an empty cup, and your brain needs downtime to process emotions." }
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
            <h2 className="text-2xl sm:text-4xl font-black mb-4">You don't have to do this alone.</h2>
            <p className="text-base sm:text-xl font-light mb-8 opacity-90">
              While self-care is powerful, professional guidance can provide the structured support you need to thrive.
            </p>

            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-white text-gray-900 px-8 py-3 rounded-full font-bold text-base hover:bg-yellow-50 transition-all active:scale-95"
            >
              Consult with a Professional
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
              <h3 className="text-xl font-bold text-gray-900 mb-6">Expert Support</h3>
              <div className="flex flex-col gap-3">
                <button onClick={() => router.push('/insurances')} className="w-full py-4 bg-[#EAB308] text-white font-bold rounded-xl active:bg-[#CA8A04]">
                  Browse Insurances
                </button>
                <button onClick={() => router.push('/selfpay')} className="w-full py-4 bg-gray-100 text-gray-900 font-bold rounded-xl active:bg-gray-200">
                  Private Pay Options
                </button>
                <button onClick={() => setIsModalOpen(false)} className="mt-2 text-gray-400 text-sm">
                  Not right now
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}