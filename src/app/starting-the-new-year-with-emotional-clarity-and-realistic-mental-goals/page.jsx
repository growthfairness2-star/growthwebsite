"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

/** * SEO CONFIGURATION 
 * Optimized for 2026 mental health goals, new year resolutions, and emotional clarity.
 */
const metadata = {
  title: "Starting the New Year with Emotional Clarity and Realistic Mental Goals",
  description: "Ditch the pressure of drastic changes. Learn how to set sustainable mental health goals and find emotional clarity as you enter the new year.",
  keywords: [
    "mental health goals 2026", 
    "new year emotional clarity", 
    "realistic mental health resolutions", 
    "psychological wellness for new year", 
    "setting boundaries 2026", 
    "mindful goal setting", 
    "emotional well-being guide"
  ],
  image: "/blog15.png", 
  url: "https://growthfairness.com/blog/starting-the-new-year-with-emotional-clarity-and-realistic-mental-goals",
  publishedDate: "January 1, 2026"
};

export default function NewYearClarityBlog() {
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
            A Fresh Start: <br />
            <span
              className="font-light italic"
              style={{
                background: "linear-gradient(90deg, #EAB308, #FACC15)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Emotional Clarity
            </span>
          </h1>

          <p className="text-gray-600 text-lg sm:text-xl font-light leading-relaxed text-justify">
            The new year is often associated with high pressure and "new me" transformations. This year, we invite you to prioritize clarity over complexity and growth over perfection.
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
            alt="Person reflecting calmly at the start of a new year"
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
            Real change doesn't happen at midnight on January 1st; it happens in the consistent, small choices we make every day to protect our mental peace.
          </p>

          <section className="mb-12 sm:mb-20">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">Moving Beyond the "Resolution" Trap</h2>
            <p className="mb-6 text-justify leading-relaxed">
              Most New Year's resolutions fail because they are based on self-criticism rather than self-care. To find emotional clarity, we must shift from asking "What is wrong with me?" to "What do I need to feel whole?"
            </p>
          </section>

          <section className="mb-12 sm:mb-20">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 border-b-4 border-[#FACC15] inline-block">
              Three Pillars of Mental Clarity
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
              <div className="bg-white">
                <h3 className="text-lg sm:text-xl font-bold mb-4 text-[#A16207]">1. Radical Honest Assessment</h3>
                <p className="text-gray-700 text-justify">
                  Look back at the previous year. Identify which activities or relationships energized you and which left you drained. Clarity begins with recognizing what no longer serves your wellness.
                </p>
              </div>

              <div className="bg-white">
                <h3 className="text-lg sm:text-xl font-bold mb-4 text-[#A16207]">2. Intentional Boundaries</h3>
                <p className="text-gray-700 text-justify">
                  Emotional clarity requires space. This year, set boundaries around your time, energy, and digital consumption to protect your mental "bandwidth."
                </p>
              </div>
            </div>
          </section>

          <section className="mb-12 sm:mb-20 bg-yellow-50/50 p-5 sm:p-10 rounded-2xl sm:rounded-3xl border border-yellow-100">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8">Setting SMART Mental Health Goals</h2>
            <p className="mb-6 text-gray-700 italic">Framework for sustainable psychological growth:</p>
            
            <div className="space-y-4 sm:space-y-8">
              {[
                { title: "Specific & Measurable", content: "Instead of 'be happier,' try 'attend one therapy session per week' or 'practice 5 minutes of mindfulness daily.'" },
                { title: "Attainable & Realistic", content: "If you currently don't exercise, don't commit to a 7-day-a-week gym schedule. Start with two 15-minute walks to build confidence." },
                { title: "Time-Bound Reflection", content: "Set a date each month to check in with yourself. How are your goals feeling? Do they need to be adjusted or softened?" }
              ].map((item, idx) => (
                <div key={idx} className="bg-white p-5 rounded-xl shadow-sm border border-gray-100">
                  <h4 className="font-bold text-[#CA8A04] text-lg mb-2">{item.title}</h4>
                  <p className="text-justify text-sm sm:text-base">{item.content}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-12 sm:mb-20">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">A Month-by-Month Mental Focus</h2>
            <div className="w-full overflow-hidden rounded-xl border border-gray-200">
              <div className="overflow-x-auto">
                <table className="w-full min-w-[500px] text-left border-collapse">
                  <thead>
                    <tr className="bg-[#EAB308] text-white">
                      <th className="p-3 sm:p-4 border-b border-yellow-700">Quarter</th>
                      <th className="p-3 sm:p-4 border-b border-yellow-700">Focus Area</th>
                      <th className="p-3 sm:p-4 border-b border-yellow-700">Key Practice</th>
                    </tr>
                  </thead>
                  <tbody className="text-sm sm:text-base">
                    <tr>
                      <td className="p-3 sm:p-4 border-b border-gray-100 font-bold">Q1 (Winter)</td>
                      <td className="p-3 sm:p-4 border-b border-gray-100">Foundation & Safety</td>
                      <td className="p-3 sm:p-4 border-b border-gray-100 italic">Establishing routine and sleep.</td>
                    </tr>
                    <tr className="bg-yellow-50/30">
                      <td className="p-3 sm:p-4 border-b border-gray-100 font-bold">Q2 (Spring)</td>
                      <td className="p-3 sm:p-4 border-b border-gray-100">Action & Connection</td>
                      <td className="p-3 sm:p-4 border-b border-gray-100 italic">Social reintegration and movement.</td>
                    </tr>
                    <tr>
                      <td className="p-3 sm:p-4 border-b border-gray-100 font-bold">Q3 (Summer)</td>
                      <td className="p-3 sm:p-4 border-b border-gray-100">Reflection & Joy</td>
                      <td className="p-3 sm:p-4 border-b border-gray-100 italic">Playfulness and leisure time.</td>
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
            New Year Wellness FAQs
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8">
            {[
              { q: "What if I fail my goals in the first week?", a: "Self-compassion is the key. Perfection is the enemy of progress. Simply restart the next day without judgment." },
              { q: "How can I find 'clarity'?", a: "Clarity usually comes through quiet reflection. Try journaling for 10 minutes or sitting in silence to hear what your mind is trying to tell you." },
              { q: "Is it okay to have 'no goals'?", a: "Absolutely. If you have had a difficult year, your only goal can be 'maintenance'—simply keeping yourself safe and fed." },
              { q: "When should I seek professional help?", a: "If your goals feel impossible because of deep-seated depression or anxiety, a professional can help clear the biological hurdles first." }
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
            <h2 className="text-2xl sm:text-4xl font-black mb-4">A new year for a new peace.</h2>
            <p className="text-base sm:text-xl font-light mb-8 opacity-90">
              Don't navigate your mental health journey alone. Let's make this your most mindful year yet.
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