"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

/** * SEO CONFIGURATION 
 * Optimized for 2026 emotional burnout recovery and mental health balance.
 */
const metadata = {
  title: "Practical Ways to Recover from Emotional Burnout and Feel Balanced Again",
  description: "Are you feeling emotionally exhausted? Discover clinical and practical strategies to reverse burnout, restore your energy, and find emotional balance.",
  keywords: [
    "emotional burnout recovery 2026", 
    "signs of emotional exhaustion", 
    "restoring mental energy", 
    "burnout treatment options", 
    "emotional regulation skills", 
    "mental health balance tips", 
    "recovering from compassion fatigue"
  ],
  image: "/blog18.png", 
  url: "https://growthfairness.com/blog/practical-ways-to-recover-from-emotional-burnout-and-feel-balanced-again",
  publishedDate: "January 4, 2026"
};

export default function BurnoutRecoveryBlog() {
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
            Refilling the Well: <br />
            <span
              className="font-light italic"
              style={{
                background: "linear-gradient(90deg, #EAB308, #FACC15)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Burnout Recovery
            </span>
          </h1>

          <p className="text-gray-600 text-lg sm:text-xl font-light leading-relaxed text-justify">
            Emotional burnout isn't just "being tired"—it's a state of total depletion. Recovery isn't about working harder; it's about learning the art of strategic rest and emotional boundaries.
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
            alt="Person reflecting and recovering from emotional exhaustion"
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
            When you reach the point of burnout, your internal resources are exhausted. The journey back to balance requires a shift from "giving" to "receiving."
          </p>

          <section className="mb-12 sm:mb-20">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">Recognizing the Three Stages of Burnout</h2>
            <p className="mb-6 text-justify leading-relaxed">
              Burnout doesn't happen overnight. It typically progresses through three clinical markers:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Emotional Exhaustion:</strong> Feeling drained, used up, and unable to face another day.</li>
              <li><strong>Depersonalization:</strong> Developing a cynical, detached, or numb attitude toward work and relationships.</li>
              <li><strong>Reduced Accomplishment:</strong> A sense that your actions no longer matter or make a difference.</li>
            </ul>
          </section>

          <section className="mb-12 sm:mb-20">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 border-b-4 border-[#FACC15] inline-block">
              Pathways to Recovery
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
              <div className="bg-white">
                <h3 className="text-lg sm:text-xl font-bold mb-4 text-[#A16207]">1. Radical Rest (Not Just Sleep)</h3>
                <p className="text-gray-700 text-justify">
                  True rest involves sensory, social, and creative breaks. Turn off notifications, step away from social obligations, and allow your brain to enter a "default mode" state.
                </p>
              </div>

              <div className="bg-white">
                <h3 className="text-lg sm:text-xl font-bold mb-4 text-[#A16207]">2. Re-evaluating Values</h3>
                <p className="text-gray-700 text-justify">
                  Burnout is often a sign that your current lifestyle is mismatched with your core values. Recovery involves pruning away the "shoulds" to make room for what truly nourishes you.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-12 sm:mb-20 bg-yellow-50/50 p-5 sm:p-10 rounded-2xl sm:rounded-3xl border border-yellow-100">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8">The Clinical Check-list</h2>
            <p className="mb-6 text-gray-700 italic">When to seek professional intervention for burnout:</p>
            
            <div className="space-y-4 sm:space-y-8">
              {[
                { title: "Sleep Architecture", content: "If you are 'tired but wired' and unable to reach deep sleep, a psychiatric provider can help reset your circadian rhythm." },
                { title: "Neurochemical Support", content: "Chronic burnout can lead to neurotransmitter depletion. Targeted treatment can help restore the chemical balance needed for motivation and joy." },
                { title: "Boundaries Coaching", content: "Therapy provides a safe space to practice the difficult conversations required to set limits in your professional and personal life." }
              ].map((item, idx) => (
                <div key={idx} className="bg-white p-5 rounded-xl shadow-sm border border-gray-100">
                  <h4 className="font-bold text-[#CA8A04] text-lg mb-2">{item.title}</h4>
                  <p className="text-justify text-sm sm:text-base">{item.content}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-12 sm:mb-20">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">Burnout vs. Depression</h2>
            <div className="w-full overflow-hidden rounded-xl border border-gray-200">
              <div className="overflow-x-auto">
                <table className="w-full min-w-[500px] text-left border-collapse">
                  <thead>
                    <tr className="bg-[#EAB308] text-white">
                      <th className="p-3 sm:p-4 border-b border-yellow-700">Feature</th>
                      <th className="p-3 sm:p-4 border-b border-yellow-700">Burnout</th>
                      <th className="p-3 sm:p-4 border-b border-yellow-700">Depression</th>
                    </tr>
                  </thead>
                  <tbody className="text-sm sm:text-base">
                    <tr>
                      <td className="p-3 sm:p-4 border-b border-gray-100 font-bold">Context</td>
                      <td className="p-3 sm:p-4 border-b border-gray-100">Usually tied to high-stress roles/tasks.</td>
                      <td className="p-3 sm:p-4 border-b border-gray-100 italic">Pervasive across all areas of life.</td>
                    </tr>
                    <tr className="bg-yellow-50/30">
                      <td className="p-3 sm:p-4 border-b border-gray-100 font-bold">Hope</td>
                      <td className="p-3 sm:p-4 border-b border-gray-100">Improves with distance/rest.</td>
                      <td className="p-3 sm:p-4 border-b border-gray-100 italic">Feeling of hopelessness remains.</td>
                    </tr>
                    <tr>
                      <td className="p-3 sm:p-4 border-b border-gray-100 font-bold">Primary Emotion</td>
                      <td className="p-3 sm:p-4 border-b border-gray-100">Frustration and exhaustion.</td>
                      <td className="p-3 sm:p-4 border-b border-gray-100 italic">Sadness and loss of interest.</td>
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
            Recovering from Burnout
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8">
            {[
              { q: "How long does burnout recovery take?", a: "Depending on the severity, it can take anywhere from a few weeks to several months of dedicated rest and change." },
              { q: "Can I recover while still working?", a: "Yes, but it requires radical changes to your workflow, boundaries, and how you spend your time outside of work." },
              { q: "What is 'Compassion Fatigue'?", a: "A specific type of burnout common in healthcare and caregiving roles where you lose the ability to feel empathy for others." },
              { q: "Does meditation help burnout?", a: "It can, but for someone in deep burnout, sometimes 'active rest' like walking in nature or gentle movement is more effective than silent sitting." }
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
            <h2 className="text-2xl sm:text-4xl font-black mb-4">Restore your energy.</h2>
            <p className="text-base sm:text-xl font-light mb-8 opacity-90">
              Burnout is a signal that your system needs support. Let's build a clinical roadmap to help you feel like yourself again.
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