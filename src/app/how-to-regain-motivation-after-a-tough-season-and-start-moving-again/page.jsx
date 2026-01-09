"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

/** * SEO CONFIGURATION 
 * Optimized for 2026 motivation recovery, burnout management, and behavioral activation.
 */
const metadata = {
  title: "How to Regain Motivation After a Tough Season and Start Moving Again",
  description: "Rebuilding momentum after a difficult period requires patience and clinical strategy. Learn how to overcome emotional exhaustion and find your drive again.",
  keywords: [
    "regain motivation 2026", 
    "rebuilding momentum after burnout", 
    "how to start over after a tough season", 
    "finding drive again", 
    "behavioral activation tools", 
    "mental health recovery steps", 
    "overcoming emotional exhaustion"
  ],
  image: "/blog20.png", 
  url: "https://growthfairness.com/blog/how-to-regain-motivation-after-a-tough-season-and-start-moving-again",
  publishedDate: "January 6, 2026"
};

export default function MotivationRecoveryBlog() {
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
          {/* HEADING SIZE: Moderate scale */}
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-black mb-6 leading-tight text-gray-900 break-words">
            How to Regain Motivation <br />
            <span
              className="font-light italic"
              style={{
                background: "linear-gradient(90deg, #EAB308, #FACC15)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              After a Tough Season & Start Moving
            </span>
          </h1>

          <p className="text-gray-600 text-lg sm:text-xl font-light leading-relaxed text-justify">
            A "tough season" can leave your internal battery depleted. In 2026 we understand that motivation isn't something you wait for; it is something you build through small and intentional actions.
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
            alt="A person stepping into the light representing a fresh start"
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
            Momentum is the cure for stagnation. When you have been through a difficult period your brain prioritizes safety over growth. Reclaiming your drive requires teaching your nervous system that it is safe to expand again.
          </p>

          <section className="mb-12 sm:mb-20">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">The Biology of Stagnation</h2>
            <p className="mb-6 text-justify leading-relaxed">
              After a season of high stress or emotional loss the body often enters a state of "functional freeze." This is a biological conservation mode where your brain limits your energy expenditure to prevent further burnout. What feels like laziness is actually a protective mechanism. To regain motivation we must first acknowledge this state without judgment.
            </p>
            <p className="mb-6 text-justify leading-relaxed">
              In clinical settings we focus on behavioral activation. This means moving the body even when the mind isn't ready. By performing small and manageable tasks you trigger a dopamine response that slowly rewires the brain to seek out more activity. Motivation follows action rather than the other way around.
            </p>
          </section>

          <section className="mb-12 sm:mb-20">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 border-b-4 border-[#FACC15] inline-block">
              Steps to Rebuild Momentum
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
              <div className="bg-white">
                <h3 className="text-lg sm:text-xl font-bold mb-4 text-[#A16207]">1. Lower the Bar</h3>
                <p className="text-gray-700 text-justify">
                  When you are recovering from a tough season your capacity is different. Set "micro-goals" that are so small they are impossible to fail. A five-minute walk or answering one email is enough to start the engine.
                </p>
              </div>

              <div className="bg-white">
                <h3 className="text-lg sm:text-xl font-bold mb-4 text-[#A16207]">2. Audit Your Energy</h3>
                <p className="text-gray-700 text-justify">
                  Identify what is currently draining your energy versus what restores it. Motivation cannot flourish in an environment of constant depletion. Prioritize rest as a productive part of your recovery journey.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-12 sm:mb-20 bg-yellow-50/50 p-5 sm:p-10 rounded-2xl sm:rounded-3xl border border-yellow-100">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8">Clinical Tools for Drive</h2>
            
            <div className="space-y-4 sm:space-y-8">
              {[
                { title: "Compassionate Accountability", content: "We help you balance the need for rest with the necessity of movement. Being kind to yourself doesn't mean standing still; it means moving at a sustainable pace." },
                { title: "Neuro-Reframing", content: "We work on changing the internal dialogue from 'I should be doing more' to 'I am building my capacity one step at a time.' This reduces the shame that kills motivation." },
                { title: "Value-Aligned Action", content: "Motivation is strongest when it is connected to what you care about. We help you reconnect with your core values to provide a natural pull toward your goals." }
              ].map((item, idx) => (
                <div key={idx} className="bg-white p-5 rounded-xl shadow-sm border border-gray-100">
                  <h4 className="font-bold text-[#CA8A04] text-lg mb-2">{item.title}</h4>
                  <p className="text-justify text-sm sm:text-base">{item.content}</p>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* ===== People Also Ask (10 FAQs) ===== */}
        <section className="mt-16 sm:mt-24 pt-12 border-t border-yellow-100">
          <h2 className="text-2xl sm:text-4xl font-black mb-10 text-gray-900 text-center">
            Motivation & Recovery FAQ
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8">
            {[
              { q: "How long does it take to get motivation back", a: "There is no fixed timeline. It depends on the severity of the season you just exited. Consistency in small steps is more important than speed." },
              { q: "Why do I feel guilty for resting", a: "Social conditioning often equates worth with productivity. Remember that rest is a biological necessity for long-term drive." },
              { q: "Can a lack of motivation be a sign of depression", a: "Yes. If your lack of drive is accompanied by persistent sadness or loss of interest in everything it may be clinical depression." },
              { q: "How do I deal with a setback", a: "Setbacks are a normal part of the process. Don't view them as a failure; view them as a sign that you might need to adjust your pace." },
              { q: "Is it okay to start over completely", a: "Absolutely. Sometimes a tough season is a signal that your old path no longer serves you. Starting over is an act of courage." },
              { q: "How does physical health impact motivation", a: "Hormonal imbalances or poor sleep can mimic a lack of drive. Always ensure your basic physical needs are being met." },
              { q: "What is the fastest way to build momentum", a: "The fastest way is the most sustainable way. Small daily wins build a compound effect that eventually feels effortless." },
              { q: "Should I tell my boss I am struggling", a: "This depends on your workplace culture. Focus on discussing your workload and deadlines rather than deep personal struggles if you feel unsure." },
              { q: "How do I stop comparing myself to others", a: "Limit your social media consumption and remind yourself that you are seeing a highlight reel while you are in a recovery phase." },
              { q: "When should I seek professional help", a: "If you feel 'stuck' for more than a few weeks or if the thought of moving forward feels completely impossible." }
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
            <h2 className="text-2xl sm:text-4xl font-black mb-4">Your next chapter starts here.</h2>
            <p className="text-base sm:text-xl font-light mb-8 opacity-90">
              Recovery is not a straight line but you don't have to walk it alone. Let's rebuild your momentum together.
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