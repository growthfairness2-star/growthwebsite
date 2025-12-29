"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

/** * SEO CONFIGURATION 
 * Optimized for 2025 depression management, motivation strategies, and mental health recovery.
 */
const metadata = {
  title: "Healthy Ways to Navigate Depression & Rebuild Daily Motivation",
  description: "Discover effective strategies to manage depression, find joy, and gradually rebuild your motivation. Learn about self-care, professional support, and lifestyle changes.",
  keywords: [
    "healthy ways to navigate depression 2025", 
    "rebuilding daily motivation", 
    "depression management strategies", 
    "self-care for depression", 
    "finding joy with depression", 
    "lifestyle changes for mood", 
    "professional help for depression"
  ],
  image: "/blog13.png", 
  url: "https://growthfairness.com/blog/healthy-ways-to-navigate-depression-and-rebuild-daily-motivation"
};

export default function DepressionMotivationGuide() {
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
            Finding Your Light: <br />
            <span
              className="font-light italic"
              style={{
                background: "linear-gradient(90deg, #EAB308, #FACC15)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Beyond Depression
            </span>
          </h1>

          <p className="text-gray-600 text-lg sm:text-xl font-light leading-relaxed text-justify">
            Depression can dim the world, but your light hasn't gone out. Learn practical, compassionate ways to navigate its challenges and rekindle your daily motivation.
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
            alt="Person finding a glimmer of hope amidst shadows, symbolizing overcoming depression"
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
            Depression is more than just sadness; it’s a complex condition that affects your energy, sleep, appetite, and ability to experience joy. But it is treatable, and recovery is possible.
          </p>

          <section className="mb-12 sm:mb-20">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">Small Steps, Big Impact: Rebuilding Motivation</h2>
            <p className="mb-6 text-justify leading-relaxed">
              When motivation is scarce, expecting grand gestures of productivity can be overwhelming. The key is to start small, celebrating tiny victories.
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>The 5-Minute Rule:</strong> Commit to an activity for just five minutes. Often, once you start, you’ll find the energy to continue.</li>
              <li><strong>Prioritize Self-Care Basics:</strong> Focus on getting enough sleep, nourishing your body, and staying hydrated. These fundamentals provide a stable base.</li>
              <li><strong>Micro-Goals:</strong> Instead of "clean the house," try "wash one dish" or "make the bed." Each completed task releases a small dose of dopamine.</li>
            </ul>
          </section>

          <section className="mb-12 sm:mb-20">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 border-b-4 border-[#FACC15] inline-block">
              Cognitive Strategies for Depression
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
              <div className="bg-white">
                <h3 className="text-lg sm:text-xl font-bold mb-4 text-[#A16207]">1. Challenge Negative Thoughts</h3>
                <p className="text-gray-700 text-justify">
                  Depression often distorts thinking. Practice identifying negative thought patterns (e.g., "all-or-nothing thinking," "catastrophizing") and replace them with more balanced, realistic perspectives.
                </p>
              </div>

              <div className="bg-white">
                <h3 className="text-lg sm:text-xl font-bold mb-4 text-[#A16207]">2. Behavioral Activation</h3>
                <p className="text-gray-700 text-justify">
                  Even when you don't feel like it, engaging in activities you once enjoyed can gradually reactivate your brain's reward system, improving mood and energy over time.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-12 sm:mb-20 bg-yellow-50/50 p-5 sm:p-10 rounded-2xl sm:rounded-3xl border border-yellow-100">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8">Holistic & Professional Support</h2>

            <div className="space-y-4 sm:space-y-8">
              {[
                { title: "Psychotherapy (CBT, DBT)", content: "Talk therapy provides tools to cope with depressive thoughts, manage emotions, and develop healthier behavioral patterns." },
                { title: "Medication Management", content: "Antidepressants can help restore chemical imbalances, making it easier to engage in therapy and daily activities." },
                { title: "Mind-Body Connection", content: "Incorporating gentle exercise, yoga, meditation, and spending time in nature can significantly boost mood and reduce symptoms." }
              ].map((item, idx) => (
                <div key={idx} className="bg-white p-5 rounded-xl shadow-sm border border-gray-100">
                  <h4 className="font-bold text-[#CA8A04] text-lg mb-2">{item.title}</h4>
                  <p className="text-justify text-sm sm:text-base">{item.content}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-12 sm:mb-20">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">Building Your Depression Toolkit</h2>
            <div className="w-full overflow-hidden rounded-xl border border-gray-200">
              <div className="overflow-x-auto">
                <table className="w-full min-w-[500px] text-left border-collapse">
                  <thead>
                    <tr className="bg-[#EAB308] text-white">
                      <th className="p-3 sm:p-4 border-b border-yellow-700">Area of Support</th>
                      <th className="p-3 sm:p-4 border-b border-yellow-700">Practical Tool</th>
                      <th className="p-3 sm:p-4 border-b border-yellow-700">Benefit</th>
                    </tr>
                  </thead>
                  <tbody className="text-sm sm:text-base">
                    <tr>
                      <td className="p-3 sm:p-4 border-b border-gray-100 font-bold">Emotional</td>
                      <td className="p-3 sm:p-4 border-b border-gray-100">Journaling or Mood Tracking</td>
                      <td className="p-3 sm:p-4 border-b border-gray-100 italic">Identify triggers, track progress.</td>
                    </tr>
                    <tr className="bg-yellow-50/30">
                      <td className="p-3 sm:p-4 border-b border-gray-100 font-bold">Physical</td>
                      <td className="p-3 sm:p-4 border-b border-gray-100">Gentle Movement (Walks, Stretching)</td>
                      <td className="p-3 sm:p-4 border-b border-gray-100 italic">Boost endorphins, improve sleep.</td>
                    </tr>
                    <tr>
                      <td className="p-3 sm:p-4 border-b border-gray-100 font-bold">Social</td>
                      <td className="p-3 sm:p-4 border-b border-gray-100">Connect with a trusted friend/family</td>
                      <td className="p-3 sm:p-4 border-b border-gray-100 italic">Reduce isolation, feel understood.</td>
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
            Depression & Motivation FAQs
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8">
            {[
              { q: "Is it normal to feel no motivation with depression?", a: "Yes, low motivation and anhedonia (loss of pleasure) are core symptoms of depression. It's not a personal failing." },
              { q: "How long does depression last?", a: "Duration varies greatly. With effective treatment, many individuals see significant improvement within weeks to months." },
              { q: "What if I can't even get out of bed?", a: "On severe days, focus on the absolute minimum: hydration, a small bite of food, and reaching out to one trusted person. Start there." },
              { q: "Can diet affect depression?", a: "Emerging research shows a strong link between gut health and mood. A balanced diet can complement psychiatric treatment." }
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
            <h2 className="text-2xl sm:text-4xl font-black mb-4">You deserve to feel better.</h2>
            <p className="text-base sm:text-xl font-light mb-8 opacity-90">
              Let's work together to navigate depression and rekindle your zest for life.
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