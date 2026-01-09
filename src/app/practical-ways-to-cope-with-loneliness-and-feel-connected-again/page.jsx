"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

/** * SEO CONFIGURATION 
 * Optimized for 2026 social health, emotional regulation, and community reintegration.
 */
const metadata = {
  title: "Practical Ways to Cope with Loneliness and Feel Connected Again",
  description: "Loneliness is a physical and emotional signal that needs addressing. Explore clinical tools to overcome isolation and build meaningful social bonds.",
  keywords: [
    "cope with loneliness 2026", 
    "feeling connected again", 
    "overcoming social isolation", 
    "building meaningful relationships", 
    "social anxiety recovery", 
    "community belonging strategies", 
    "emotional health support"
  ],
  image: "/blog21.png", 
  url: "https://growthfairness.com/blog/practical-ways-to-cope-with-loneliness-and-feel-connected-again",
  publishedDate: "January 7, 2026"
};

export default function LonelinessRecoveryBlog() {
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
          {/* HEADING SIZE: Moderate scale as requested */}
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-black mb-6 leading-tight text-gray-900 break-words">
            Practical Ways to Cope <br />
            <span
              className="font-light italic"
              style={{
                background: "linear-gradient(90deg, #EAB308, #FACC15)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              with Loneliness & Feel Connected Again
            </span>
          </h1>

          <p className="text-gray-600 text-lg sm:text-xl font-light leading-relaxed text-justify">
            Loneliness is not a personal failure but a biological alarm. It is the brain signaling a need for social nutrients just as hunger signals a need for food.
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
            alt="Communal setting representing connection and warmth"
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
            Connection is the foundation of human survival. By 2026 we recognize that social isolation impacts physical health as much as chronic inflammation.
          </p>

          <section className="mb-12 sm:mb-20">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">The Science of Social Hunger</h2>
            <p className="mb-6 text-justify leading-relaxed">
              Loneliness triggers the same neural pathways as physical pain. When we are isolated the body enters a state of high alert which increases cortisol and makes us more sensitive to perceived social threats. Breaking this cycle requires a gentle approach to nervous system regulation.
            </p>
            <p className="mb-6 text-justify leading-relaxed">
              We must differentiate between being alone and being lonely. Solitude is a choice that can lead to restoration whereas loneliness is a perceived lack of meaningful intimacy. In our clinical practice we focus on building social self efficacy.
            </p>
          </section>

          <section className="mb-12 sm:mb-20">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 border-b-4 border-[#FACC15] inline-block">
              Strategies for Reconnecting
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
              <div className="bg-white">
                <h3 className="text-lg sm:text-xl font-bold mb-4 text-[#A16207]">1. Micro Interactions</h3>
                <p className="text-gray-700 text-justify">
                  Brief exchanges with a neighbor or a barista can lower feelings of isolation. These micro moments signal to the brain that you are part of a community.
                </p>
              </div>

              <div className="bg-white">
                <h3 className="text-lg sm:text-xl font-bold mb-4 text-[#A16207]">2. Vulnerability in Small Doses</h3>
                <p className="text-gray-700 text-justify">
                  Authentic connection is built on shared truth. Try sharing a small and low stakes detail about your day with someone you trust to build emotional intimacy.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-12 sm:mb-20 bg-yellow-50/50 p-5 sm:p-10 rounded-2xl sm:rounded-3xl border border-yellow-100">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8">Clinical Support for Social Wellness</h2>
            
            <div className="space-y-4 sm:space-y-8">
              {[
                { title: "Social Cognition Training", content: "We work on retraining the brain to interpret neutral social signals accurately rather than assuming rejection." },
                { title: "Building a Third Place", content: "Identify community hubs that align with your values to facilitate natural and organic interactions." },
                { title: "Addressing Social Fatigue", content: "We provide tools to manage social battery depletion so that you can engage consistently without feeling overwhelmed." }
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
            Loneliness & Connection FAQ
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8">
            {[
              { q: "Is it possible to feel lonely while in a relationship", a: "Yes. Loneliness is about the quality of connection and not just the presence of another person." },
              { q: "How do I start a conversation with social anxiety", a: "Start with a simple observation about the environment or ask an open ended question." },
              { q: "Does social media help or hurt loneliness", a: "It depends. Passive scrolling often increases inadequacy while active communication can foster belonging." },
              { q: "Why do I feel lonely even when I am busy", a: "Busyness is not the same as connection. You need meaningful interaction to satisfy social hunger." },
              { q: "How many friends do I need", a: "Most people find that having two or three close and reliable relationships is more effective than dozens of acquaintances." },
              { q: "Can loneliness cause physical symptoms", a: "Absolutely. Chronic loneliness can lead to headaches and fatigue or sleep disturbances." },
              { q: "What if no one understands me", a: "Seek out communities with shared experiences whether that is a support group or a hobbyist club." },
              { q: "Is loneliness a symptom of depression", a: "It can be. While universal it is also a common feature of clinical depression and should be monitored." },
              { q: "How do I deal with the fear of rejection", a: "Reframe rejection as a data point rather than a judgment of your worth. Not every interaction will lead to a bond." },
              { q: "When should I see a therapist", a: "If your feelings lead to an inability to function in daily life or a deep sense of hopelessness." }
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
            <h2 className="text-2xl sm:text-4xl font-black mb-4">You do not have to be alone.</h2>
            <p className="text-base sm:text-xl font-light mb-8 opacity-90">
              Connection is a skill that can be rebuilt. Let us help you find your way back.
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