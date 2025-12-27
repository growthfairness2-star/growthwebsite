"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

/** * SEO CONFIGURATION 
 * Optimized for 2025 mental wellness and psychotherapy trends.
 */
const metadata = {
  title: "The Benefits of Therapy: How Counseling Transforms Mental Health",
  description: "Discover the long-term emotional and physical benefits of therapy. From stress management to improved relationships, learn how professional support builds resilience.",
  keywords: [
    "benefits of psychotherapy 2025", 
    "why go to therapy", 
    "emotional intelligence benefits", 
    "therapy for stress management", 
    "long-term impact of counseling", 
    "mental health resilience", 
    "cognitive behavioral therapy advantages"
  ],
  image: "/therapy.png", // Image set to therapy.png as requested
  url: "https://growthfairness.com/blog/benefits-of-therapy"
};

export default function TherapyBenefitsGuide() {
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
            Better Life: <br />
            <span
              className="font-light italic"
              style={{
                background: "linear-gradient(90deg, #EAB308, #FACC15)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Benefits of Therapy
            </span>
          </h1>

          <p className="text-gray-600 text-lg sm:text-xl font-light leading-relaxed text-justify">
            Beyond solving problems, therapy is a proactive tool for personal growth, emotional mastery, and lasting mental resilience.
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
            alt="Person experiencing relief and clarity during a therapy session"
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
            Investing in your mental health doesn't just change your thoughts—it changes the way you experience the world and interact with the people you love.
          </p>

          <section className="mb-12 sm:mb-20">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">Why Therapy Matters</h2>
            <p className="mb-6 text-justify leading-relaxed">
              Psychotherapy provides a neutral, science-backed environment to process complex emotions. In 2025, therapy is increasingly recognized not just as a treatment for crisis, but as a standard practice for maintaining peak cognitive and emotional performance.
            </p>
          </section>

          <section className="mb-12 sm:mb-20">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 border-b-4 border-[#FACC15] inline-block">
              Core Pillars of Healing
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
              <div className="bg-white">
                <h3 className="text-lg sm:text-xl font-bold mb-4 text-[#A16207]">1. Emotional Regulation</h3>
                <p className="text-gray-700 text-justify">
                  Gain tools to manage high-stress situations without becoming overwhelmed. Therapy helps you move from "reacting" to "responding."
                </p>
              </div>

              <div className="bg-white">
                <h3 className="text-lg sm:text-xl font-bold mb-4 text-[#A16207]">2. Pattern Recognition</h3>
                <p className="text-gray-700 text-justify">
                  Identify and break recurring negative cycles in relationships and career by understanding the root causes of your behavioral habits.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-12 sm:mb-20 bg-yellow-50/50 p-5 sm:p-10 rounded-2xl sm:rounded-3xl border border-yellow-100">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8">Clinical Advantages</h2>

            <div className="space-y-4 sm:space-y-8">
              {[
                { title: "Neuroplasticity", content: "Evidence shows that therapy can physically rewire the brain's pathways, strengthening areas responsible for focus and emotional control." },
                { title: "Physical Health Link", content: "By reducing chronic stress and cortisol levels, therapy significantly lowers the risk of heart disease and improves sleep quality." },
                { title: "Relationship Depth", content: "Develop better communication skills and boundaries, leading to more fulfilling connections with partners, family, and colleagues." }
              ].map((type, idx) => (
                <div key={idx} className="bg-white p-5 rounded-xl shadow-sm border border-gray-100">
                  <h4 className="font-bold text-[#CA8A04] text-lg mb-2">{type.title}</h4>
                  <p className="text-justify text-sm sm:text-base">{type.content}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-12 sm:mb-20">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">Therapy Outcomes Guide</h2>

            <div className="w-full overflow-hidden rounded-xl border border-gray-200">
              <div className="overflow-x-auto">
                <table className="w-full min-w-[500px] text-left border-collapse">
                  <thead>
                    <tr className="bg-[#EAB308] text-white">
                      <th className="p-3 sm:p-4 border-b border-yellow-700">Internal Gains</th>
                      <th className="p-3 sm:p-4 border-b border-yellow-700">Social Gains</th>
                      <th className="p-3 sm:p-4 border-b border-yellow-700">Workplace Gains</th>
                    </tr>
                  </thead>
                  <tbody className="text-sm sm:text-base">
                    <tr>
                      <td className="p-3 sm:p-4 border-b border-gray-100">Self-Confidence</td>
                      <td className="p-3 sm:p-4 border-b border-gray-100">Clear Boundaries</td>
                      <td className="p-3 sm:p-4 border-b border-gray-100">Decision Making</td>
                    </tr>
                    <tr className="bg-yellow-50/30">
                      <td className="p-3 sm:p-4 border-b border-gray-100">Trauma Processing</td>
                      <td className="p-3 sm:p-4 border-b border-gray-100">Conflict Resolution</td>
                      <td className="p-3 sm:p-4 border-b border-gray-100">Burnout Prevention</td>
                    </tr>
                    <tr>
                      <td className="p-3 sm:p-4 border-b border-gray-100">Anxiety Reduction</td>
                      <td className="p-3 sm:p-4 border-b border-gray-100">Effective Empathy</td>
                      <td className="p-3 sm:p-4 border-b border-gray-100">Better Focus</td>
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
              { q: "Do I need a diagnosis to go to therapy?", a: "No. Many people use therapy for personal growth, navigation of life transitions, or simply to understand themselves better." },
              { q: "How long does it take to see results?", a: "While some feel relief after one session, clinical improvements in habits and thought patterns usually occur after 8–12 consistent sessions." },
              { q: "Can therapy help with physical pain?", a: "Yes, through the 'mind-body connection,' therapy can reduce chronic pain associated with stress, tension, and psychosomatic symptoms." },
              { q: "Is therapy worth the cost?", a: "Investing in therapy is shown to increase long-term earning potential and decrease future medical costs by preventing chronic illness." }
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
            <h2 className="text-2xl sm:text-4xl font-black mb-4">Start your transformation.</h2>
            <p className="text-base sm:text-xl font-light mb-8 opacity-90">
              Unlocking the best version of yourself starts with a single conversation. You deserve to feel your best.
            </p>

            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-white text-gray-900 px-8 py-3 rounded-full font-bold text-base hover:bg-yellow-50 transition-all active:scale-95"
            >
              Find Your Therapist
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
              <h3 className="text-xl font-bold text-gray-900 mb-6">Invest in Yourself</h3>
              <div className="flex flex-col gap-3">
                <button onClick={() => router.push('/insurances')} className="w-full py-4 bg-[#EAB308] text-white font-bold rounded-xl active:bg-[#CA8A04]">
                  Use Insurance
                </button>
                <button onClick={() => router.push('/selfpay')} className="w-full py-4 bg-gray-100 text-gray-900 font-bold rounded-xl active:bg-gray-200">
                  Self Pay Options
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