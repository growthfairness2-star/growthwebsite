"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

/** * SEO CONFIGURATION 
 * Optimized for 2025 trauma-informed care and PTSD recovery trends.
 */
const metadata = {
  title: "PTSD Symptoms & Causes: A Guide to Post-Traumatic Stress Recovery",
  description: "Understand the signs of Post-Traumatic Stress Disorder (PTSD), its root causes, and how modern psychiatry helps individuals regain control after trauma.",
  keywords: [
    "PTSD symptoms 2025", 
    "post-traumatic stress disorder causes", 
    "complex PTSD treatment", 
    "trauma therapy options", 
    "EMDR for PTSD", 
    "flashback management techniques", 
    "healing from trauma"
  ],
  image: "/blog10.png", // As requested: blog10.png
  url: "https://growthfairness.com/blog/post-traumatic-stress-disorder-PTSD-symptoms-and-causes"
};

export default function PTSDGuideBlog() {
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
            PTSD: <br />
            <span
              className="font-light italic"
              style={{
                background: "linear-gradient(90deg, #EAB308, #FACC15)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Reclaiming Peace
            </span>
          </h1>

          <p className="text-gray-600 text-lg sm:text-xl font-light leading-relaxed text-justify">
            Trauma changes the brain, but healing is possible. Explore the clinical pathways to managing PTSD and moving toward a life of safety and presence.
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
            alt="Healing path representing recovery from trauma"
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
            PTSD is a natural response to an unnatural event. It is the brain's way of staying "on guard" long after the danger has passed.
          </p>

          <section className="mb-12 sm:mb-20">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">What is PTSD?</h2>
            <p className="mb-6 text-justify leading-relaxed">
              Post-Traumatic Stress Disorder (PTSD) can develop after witnessing or experiencing a terrifying event. While many people experience short-term distress after trauma, PTSD involves symptoms that persist for months or years, significantly interfering with daily life.
            </p>
          </section>

          <section className="mb-12 sm:mb-20">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 border-b-4 border-[#FACC15] inline-block">
              Root Causes of PTSD
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
              <div className="bg-white">
                <h3 className="text-lg sm:text-xl font-bold mb-4 text-[#A16207]">1. Direct Trauma</h3>
                <p className="text-gray-700 text-justify">
                  Experiences such as physical assault, military combat, natural disasters, or severe accidents that threaten physical integrity.
                </p>
              </div>

              <div className="bg-white">
                <h3 className="text-lg sm:text-xl font-bold mb-4 text-[#A16207]">2. Indirect Trauma</h3>
                <p className="text-gray-700 text-justify">
                  Learning about a traumatic event happening to a close loved one or being repeatedly exposed to the graphic details of others' trauma (vicarious trauma).
                </p>
              </div>
            </div>
          </section>

          <section className="mb-12 sm:mb-20 bg-yellow-50/50 p-5 sm:p-10 rounded-2xl sm:rounded-3xl border border-yellow-100">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8">Four Primary Symptom Clusters</h2>

            <div className="space-y-4 sm:space-y-8">
              {[
                { title: "Intrusive Memories", content: "Unwanted distressing memories, flashbacks where you relive the event, or nightmares about the trauma." },
                { title: "Avoidance", content: "Trying to avoid thinking about the event or steering clear of places, people, or activities that trigger memories." },
                { title: "Negative Changes in Thinking", content: "Feeling detached from others, lack of interest in activities, or persistent negative beliefs about yourself or the world." },
                { title: "Changes in Physical Reactivity", content: "Being easily startled, always being 'on guard' (hypervigilance), or experiencing bursts of anger/irritability." }
              ].map((cluster, idx) => (
                <div key={idx} className="bg-white p-5 rounded-xl shadow-sm border border-gray-100">
                  <h4 className="font-bold text-[#CA8A04] text-lg mb-2">{cluster.title}</h4>
                  <p className="text-justify text-sm sm:text-base">{cluster.content}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-12 sm:mb-20">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">Evidence-Based Pathways to Recovery</h2>

            <div className="w-full overflow-hidden rounded-xl border border-gray-200">
              <div className="overflow-x-auto">
                <table className="w-full min-w-[500px] text-left border-collapse">
                  <thead>
                    <tr className="bg-[#EAB308] text-white">
                      <th className="p-3 sm:p-4 border-b border-yellow-700">Therapy Type</th>
                      <th className="p-3 sm:p-4 border-b border-yellow-700">How it Works</th>
                      <th className="p-3 sm:p-4 border-b border-yellow-700">Goal</th>
                    </tr>
                  </thead>
                  <tbody className="text-sm sm:text-base">
                    <tr>
                      <td className="p-3 sm:p-4 border-b border-gray-100 font-bold">EMDR</td>
                      <td className="p-3 sm:p-4 border-b border-gray-100">Uses eye movements to process traumatic memories.</td>
                      <td className="p-3 sm:p-4 border-b border-gray-100">Reduce emotional impact.</td>
                    </tr>
                    <tr className="bg-yellow-50/30">
                      <td className="p-3 sm:p-4 border-b border-gray-100 font-bold">CBT-P</td>
                      <td className="p-3 sm:p-4 border-b border-gray-100">Focuses on changing negative thought patterns.</td>
                      <td className="p-3 sm:p-4 border-b border-gray-100">Regain cognitive control.</td>
                    </tr>
                    <tr>
                      <td className="p-3 sm:p-4 border-b border-gray-100 font-bold">Exposure Therapy</td>
                      <td className="p-3 sm:p-4 border-b border-gray-100">Safe, gradual re-introduction to triggers.</td>
                      <td className="p-3 sm:p-4 border-b border-gray-100">Desensitization.</td>
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
            Common Questions
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8">
            {[
              { q: "Does PTSD ever go away completely?", a: "While the memory remains, the symptoms can be managed so they no longer disrupt your life. Many people achieve significant recovery through therapy." },
              { q: "Can you develop PTSD months after an event?", a: "Yes, this is known as 'delayed-onset PTSD.' Symptoms may not appear until six months or even years after the trauma occurs." },
              { q: "Is PTSD only for combat veterans?", a: "No. PTSD can affect anyone who has experienced trauma, including survivors of accidents, abuse, or medical emergencies." },
              { q: "What is 'Complex PTSD'?", a: "C-PTSD results from repeated, long-term trauma (like childhood neglect or domestic abuse) rather than a single event." }
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
            <h2 className="text-2xl sm:text-4xl font-black mb-4">Start your healing journey.</h2>
            <p className="text-base sm:text-xl font-light mb-8 opacity-90">
              Trauma-informed care can help you navigate the path back to yourself. Connect with a specialist today.
            </p>

            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-white text-gray-900 px-8 py-3 rounded-full font-bold text-base hover:bg-yellow-50 transition-all active:scale-95"
            >
              Book An Apponitment
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
              <h3 className="text-xl font-bold text-gray-900 mb-6">Select An Option</h3>
              <div className="flex flex-col gap-3">
                <button onClick={() => router.push('/insurances')} className="w-full py-4 bg-[#EAB308] text-white font-bold rounded-xl active:bg-[#CA8A04]">
                  Check Insurance
                </button>
                <button onClick={() => router.push('/selfpay')} className="w-full py-4 bg-gray-100 text-gray-900 font-bold rounded-xl active:bg-gray-200">
                  Self-Pay Options
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