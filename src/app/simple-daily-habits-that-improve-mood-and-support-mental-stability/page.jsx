"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

/** * SEO CONFIGURATION 
 * Optimized for 2026 mental stability, habit formation, and emotional wellness.
 */
const metadata = {
  title: "Simple Daily Habits That Improve Mood and Support Mental Stability",
  description: "Consistency is the foundation of mental health. Discover small daily practices that stabilize your mood and build long term psychological resilience.",
  keywords: [
    "daily habits for mood improvement 2026", 
    "support mental stability", 
    "emotional wellness routines", 
    "micro habits for mental health", 
    "stabilizing mood naturally", 
    "resilience building habits", 
    "mental health consistency"
  ],
  image: "/blog23.png", 
  url: "https://growthfairness.com/blog/simple-daily-habits-that-improve-mood-and-support-mental-stability",
  publishedDate: "January 9, 2026"
};

export default function MentalStabilityBlog() {
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
            Simple Daily Habits <br />
            <span
              className="font-light italic"
              style={{
                background: "linear-gradient(90deg, #EAB308, #FACC15)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              That Improve Mood & Support Stability
            </span>
          </h1>

          <p className="text-gray-600 text-lg sm:text-xl font-light leading-relaxed text-justify">
            Mental stability is not a fixed destination but a result of repeated small choices. By focusing on tiny and manageable rituals you can create a reliable baseline for your emotional health.
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
            alt="Morning sunlight and a healthy routine symbolizing stability"
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
            Stability comes from the predictable rhythms of life. When the world feels chaotic your daily habits serve as an anchor that keeps you from drifting into emotional distress.
          </p>

          <section className="mb-12 sm:mb-20">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">The Power of Micro Habits</h2>
            <p className="mb-6 text-justify leading-relaxed">
              In 2026 we have moved away from the idea of radical life overhauls. Research shows that micro habits which are actions that take less than two minutes to perform are the most effective way to build long term mental resilience. These tiny successes signal to the brain that you are in control which lowers the baseline of anxiety and improves overall mood stability.
            </p>
            <p className="mb-6 text-justify leading-relaxed">
              Stability is often a matter of biological regulation. By aligning your habits with your natural circadian rhythms and blood sugar levels you provide your brain with the stable environment it needs to process stress. When your body feels safe and predictable your mind can follow suit.
            </p>
            <p className="mb-6 text-justify leading-relaxed">
              We focus on habits that address the four pillars of mental wellness which include sleep hygiene and intentional movement and social connection and nutritional support. When these pillars are steady the highs and lows of life become much easier to navigate.
            </p>
          </section>

          <section className="mb-12 sm:mb-20">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 border-b-4 border-[#FACC15] inline-block">
              Daily Rituals for Emotional Balance
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
              <div className="bg-white">
                <h3 className="text-lg sm:text-xl font-bold mb-4 text-[#A16207]">1. Morning Light Exposure</h3>
                <p className="text-gray-700 text-justify">
                  Viewing natural sunlight within thirty minutes of waking triggers the release of serotonin and sets your internal clock. This simple act improves your mood during the day and ensures better sleep quality at night which is essential for emotional regulation.
                </p>
              </div>

              <div className="bg-white">
                <h3 className="text-lg sm:text-xl font-bold mb-4 text-[#A16207]">2. Intentional Deceleration</h3>
                <p className="text-gray-700 text-justify">
                  Spend five minutes in the afternoon doing nothing at all. This means no phone and no work and no input. Allowing your brain a moment of quiet prevents the accumulation of sensory overload and helps maintain focus and patience throughout the evening.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-12 sm:mb-20 bg-yellow-50/50 p-5 sm:p-10 rounded-2xl sm:rounded-3xl border border-yellow-100">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8">Building Your Stability Framework</h2>
            
            <div className="space-y-4 sm:space-y-8">
              {[
                { title: "The Gratitude Audit", content: "End your day by identifying three specific things that went well. This trains the brain to look for positive data points rather than defaulting to a negativity bias which is common during periods of stress." },
                { title: "Hydration and Neurochemistry", content: "Brain fog and irritability are often early signs of dehydration. Drinking water consistently throughout the day supports the transport of nutrients needed for neurotransmitter production." },
                { title: "Physical Anchoring", content: "A quick stretch or a brief walk changes your physiological state. Movement is one of the fastest ways to break a cycle of rumination and bring your focus back to the present moment." }
              ].map((item, idx) => (
                <div key={idx} className="bg-white p-5 rounded-xl shadow-sm border border-gray-100">
                  <h4 className="font-bold text-[#CA8A04] text-lg mb-2">{item.title}</h4>
                  <p className="text-justify text-sm sm:text-base">{item.content}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-12 sm:mb-20">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">The Habit Stability Map</h2>
            
            <div className="w-full overflow-hidden rounded-xl border border-gray-200 mt-6">
              <div className="overflow-x-auto">
                <table className="w-full min-w-[500px] text-left border-collapse">
                  <thead>
                    <tr className="bg-[#EAB308] text-white">
                      <th className="p-3 sm:p-4 border-b border-yellow-700">Time of Day</th>
                      <th className="p-3 sm:p-4 border-b border-yellow-700">Habit Focus</th>
                      <th className="p-3 sm:p-4 border-b border-yellow-700">Stability Benefit</th>
                    </tr>
                  </thead>
                  <tbody className="text-sm sm:text-base">
                    <tr>
                      <td className="p-3 sm:p-4 border-b border-gray-100 font-bold">Morning</td>
                      <td className="p-3 sm:p-4 border-b border-gray-100">Sunlight and Protein.</td>
                      <td className="p-3 sm:p-4 border-b border-gray-100 italic">Hormonal alignment.</td>
                    </tr>
                    <tr className="bg-yellow-50/30">
                      <td className="p-3 sm:p-4 border-b border-gray-100 font-bold">Afternoon</td>
                      <td className="p-3 sm:p-4 border-b border-gray-100">Movement and Hydration.</td>
                      <td className="p-3 sm:p-4 border-b border-gray-100 italic">Energy maintenance.</td>
                    </tr>
                    <tr>
                      <td className="p-3 sm:p-4 border-b border-gray-100 font-bold">Evening</td>
                      <td className="p-3 sm:p-4 border-b border-gray-100">Digital Sunset and Reflection.</td>
                      <td className="p-3 sm:p-4 border-b border-gray-100 italic">Nervous system cooling.</td>
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
            Mood & Habit FAQ
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8">
            {[
              { q: "How long does it take for a habit to improve my mood", a: "Some habits like sunlight exposure can show results in days while others like consistent gratitude may take a few weeks to rewire your thinking patterns." },
              { q: "What is the single most important habit for mental health", a: "Quality sleep is the foundation. Without it your brain lacks the resources to manage emotions or stay focused regardless of other habits." },
              { q: "Can I do too many new habits at once", a: "Yes. Overwhelming yourself with too many changes can lead to failure and guilt. Start with just one or two small changes until they feel automatic." },
              { q: "How do I get back on track after a bad day", a: "Focus on the very next small habit. Do not try to make up for lost time and simply return to your routine without self criticism." },
              { q: "Do these habits work if I have a clinical diagnosis", a: "Habits are a powerful supplement to professional treatment. They provide a stable environment for therapy and medication to be more effective." },
              { q: "Why is protein important for my mood", a: "Protein provides the amino acids that serve as the building blocks for neurotransmitters like dopamine and serotonin." },
              { q: "How does screen time affect my stability", a: "Constant notifications and blue light keep your brain in a state of high arousal which can lead to anxiety and sleep fragmentation." },
              { q: "Is it better to exercise in the morning or evening", a: "For mood stability morning exercise is often better as it provides an early energy boost and supports your natural sleep cycle." },
              { q: "How can I remember to do my habits", a: "Use habit stacking by attaching a new habit to an existing one. For example drink water while your morning coffee is brewing." },
              { q: "When should I seek help if habits are not enough", a: "If you are consistently following healthy routines but still feel a deep sense of despair or inability to function it is time to talk to a professional." }
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
            <h2 className="text-2xl sm:text-4xl font-black mb-4">Small steps lead to big changes.</h2>
            <p className="text-base sm:text-xl font-light mb-8 opacity-90">
              Your journey to stability begins with the choices you make today. Let us help you build a routine that works.
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