"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

/** * SEO CONFIGURATION 
 * Optimized for 2025 bipolar disorder management, stability, and routine-building.
 */
const metadata = {
  title: "Living Well with Bipolar Disorder: Building Stability and Routine",
  description: "Discover actionable strategies for managing Bipolar Disorder. Learn the importance of routine, medication adherence, and early warning sign detection for long-term stability.",
  keywords: [
    "managing bipolar disorder 2025", 
    "bipolar stability tips", 
    "routine for bipolar disorder", 
    "bipolar warning signs", 
    "mood tracking strategies", 
    "living well with bipolar", 
    "psychiatric care for bipolar"
  ],
  image: "/blog14.png", 
  url: "https://growthfairness.com/blog/living-well-with-bipolar-disorder-building-stability-and-routine",
  publishedDate: "December 31, 2025"
};

export default function BipolarStabilityBlog() {
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
            Balance & Flow: <br />
            <span
              className="font-light italic"
              style={{
                background: "linear-gradient(90deg, #EAB308, #FACC15)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Stability in Routine
            </span>
          </h1>

          <p className="text-gray-600 text-lg sm:text-xl font-light leading-relaxed text-justify">
            Bipolar disorder is a lifelong journey, but it is one that can be navigated with grace. By building a foundation of routine, you can dampen the highs and support the lows.
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
            alt="Compassionate support and emotional balance"
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
            Stability isn't about the absence of mood swings; it's about having the tools and routines in place to manage them effectively when they arise.
          </p>

          <section className="mb-12 sm:mb-20">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">The Power of "Social Rhythm"</h2>
            <p className="mb-6 text-justify leading-relaxed">
              Social Rhythm Therapy (SRT) suggests that stabilizing your daily activities—like when you eat, exercise, and socialize—helps regulate the body's internal clock, which is often disrupted in those living with Bipolar Disorder.
            </p>
          </section>

          <section className="mb-12 sm:mb-20">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 border-b-4 border-[#FACC15] inline-block">
              Core Pillars of Stability
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
              <div className="bg-white">
                <h3 className="text-lg sm:text-xl font-bold mb-4 text-[#A16207]">1. Sleep Hygiene</h3>
                <p className="text-gray-700 text-justify">
                  Sleep disruption is often the first trigger for a manic or depressive episode. Maintaining a strict sleep-wake cycle is one of the most powerful non-pharmacological tools available.
                </p>
              </div>

              <div className="bg-white">
                <h3 className="text-lg sm:text-xl font-bold mb-4 text-[#A16207]">2. Medication Adherence</h3>
                <p className="text-gray-700 text-justify">
                  Consistency is key. Modern mood stabilizers and antipsychotics are designed to maintain a therapeutic baseline, preventing the extreme oscillations of mood.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-12 sm:mb-20 bg-yellow-50/50 p-5 sm:p-10 rounded-2xl sm:rounded-3xl border border-yellow-100">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8">Detecting Early Warning Signs</h2>
            <p className="mb-6 text-gray-700 italic">Recognizing "The Shift" before it becomes a crisis:</p>
            
            <div className="space-y-4 sm:space-y-8">
              {[
                { title: "Mania Warning Signs", content: "Decreased need for sleep, rapid speech, increased spending, or an unusual influx of 'big ideas' and projects." },
                { title: "Depression Warning Signs", content: "Social withdrawal, sleeping too much, loss of interest in hobbies, or feeling a sense of 'heaviness' in the limbs." },
                { title: "The Action Plan", content: "Having a pre-written plan to contact your psychiatrist and trusted loved ones the moment these 'red flags' appear." }
              ].map((item, idx) => (
                <div key={idx} className="bg-white p-5 rounded-xl shadow-sm border border-gray-100">
                  <h4 className="font-bold text-[#CA8A04] text-lg mb-2">{item.title}</h4>
                  <p className="text-justify text-sm sm:text-base">{item.content}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-12 sm:mb-20">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">Routine Check-In Table</h2>
            <div className="w-full overflow-hidden rounded-xl border border-gray-200">
              <div className="overflow-x-auto">
                <table className="w-full min-w-[500px] text-left border-collapse">
                  <thead>
                    <tr className="bg-[#EAB308] text-white">
                      <th className="p-3 sm:p-4 border-b border-yellow-700">Daily Task</th>
                      <th className="p-3 sm:p-4 border-b border-yellow-700">Purpose</th>
                      <th className="p-3 sm:p-4 border-b border-yellow-700">Status</th>
                    </tr>
                  </thead>
                  <tbody className="text-sm sm:text-base">
                    <tr>
                      <td className="p-3 sm:p-4 border-b border-gray-100 font-bold">Mood Tracking</td>
                      <td className="p-3 sm:p-4 border-b border-gray-100">Identifying patterns and triggers.</td>
                      <td className="p-3 sm:p-4 border-b border-gray-100 italic">Critical</td>
                    </tr>
                    <tr className="bg-yellow-50/30">
                      <td className="p-3 sm:p-4 border-b border-gray-100 font-bold">Physical Activity</td>
                      <td className="p-3 sm:p-4 border-b border-gray-100">Burning off excess energy or boosting dopamine.</td>
                      <td className="p-3 sm:p-4 border-b border-gray-100 italic">Recommended</td>
                    </tr>
                    <tr>
                      <td className="p-3 sm:p-4 border-b border-gray-100 font-bold">Social Connection</td>
                      <td className="p-3 sm:p-4 border-b border-gray-100">Preventing isolation during depressive phases.</td>
                      <td className="p-3 sm:p-4 border-b border-gray-100 italic">Daily Goal</td>
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
            Questions on Bipolar Wellness
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8">
            {[
              { q: "Can I manage bipolar without meds?", a: "While lifestyle is vital, bipolar is primarily a biological brain disorder. Medication is almost always the cornerstone of effective management." },
              { q: "What is 'Hypomania'?", a: "A less severe form of mania that may feel like high productivity, but can still lead to poor decision-making or escalate into full mania." },
              { q: "How do I explain my diagnosis to others?", a: "Focus on facts: explain it as a condition of mood regulation, similar to how diabetes is a condition of insulin regulation." },
              { q: "Does caffeine affect bipolar?", a: "Yes. For many, caffeine can trigger hypomanic symptoms or disrupt the essential sleep patterns needed for stability." }
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
            <h2 className="text-2xl sm:text-4xl font-black mb-4">You deserve stability.</h2>
            <p className="text-base sm:text-xl font-light mb-8 opacity-90">
              Let's work together to build a treatment plan that honors your goals and protects your peace.
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