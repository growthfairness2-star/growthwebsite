"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

/** * SEO CONFIGURATION 
 * Optimized for 2026 Sleep Hygiene and Emotional Wellbeing.
 */
const metadata = {
  title: "Sleep and Mental Health: Why Rest is Essential for Emotional Wellbeing",
  description: "Discover the critical link between sleep quality and mental health. Learn how restorative rest regulates emotions and why sleep deprivation impacts psychiatric symptoms.",
  keywords: [
    "sleep and mental health 2026", 
    "emotional regulation and sleep", 
    "restorative sleep benefits", 
    "circadian rhythm and mood", 
    "insomnia and anxiety link", 
    "improving sleep hygiene"
  ],
  image: "/therapy.png", 
  url: "https://growthfairness.com/sleep-and-mental-health-why-rest-is-essential-for-emotional-wellbeing"
};

export default function SleepAndMentalHealth() {
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
            Rest for the <br />
            <span
              className="font-light italic"
              style={{
                background: "linear-gradient(90deg, #EAB308, #FACC15)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Resilient Mind
            </span>
          </h1>

          <p className="text-gray-600 text-lg sm:text-xl font-light leading-relaxed text-justify">
            Sleep is not a luxury; it is a biological necessity for emotional processing. Quality rest serves as the foundation for cognitive clarity and psychological health.
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
            alt="Restorative sleep environment for mental wellness"
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
            During sleep, the brain performs essential "housekeeping," clearing out toxins and consolidating emotional memories to help you face the next day with balance.
          </p>

          <section className="mb-12 sm:mb-20">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 font-black">The Bidirectional Link</h2>
            <p className="mb-6 text-justify leading-relaxed">
              The relationship between sleep and mental health is bidirectional: mental health disorders can cause sleep disturbances, and poor sleep can exacerbate psychiatric symptoms. This cycle is particularly evident in conditions like Bipolar Disorder, Generalized Anxiety, and PTSD.
            </p>
            
          </section>

          <section className="mb-12 sm:mb-20">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 border-b-4 border-[#FACC15] inline-block">
              Sleep Stages & Emotional Regulation
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
              <div className="p-8 bg-white border border-gray-100 rounded-[2rem] shadow-sm">
                <h3 className="text-xl font-bold mb-4 text-[#A16207]">REM Sleep</h3>
                <p className="text-gray-700 text-justify text-sm">
                  Rapid Eye Movement (REM) sleep is crucial for emotional processing. It allows the brain to "disarm" stressful memories, reducing their emotional impact over time.
                </p>
              </div>
              <div className="p-8 bg-white border border-gray-100 rounded-[2rem] shadow-sm">
                <h3 className="text-xl font-bold mb-4 text-[#A16207]">Deep Sleep (NREM)</h3>
                <p className="text-gray-700 text-justify text-sm">
                  Slow-wave sleep is vital for physical restoration and cognitive function, helping to maintain the executive control needed to manage anxiety.
                </p>
              </div>
            </div>
            
          </section>

          <section className="mb-12 sm:mb-20 bg-yellow-50/50 p-6 sm:p-10 rounded-3xl border border-yellow-100">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">Optimizing Sleep Hygiene</h2>
            <p className="mb-6 text-justify leading-relaxed">
              Improving your sleep environment and habits can have a profound effect on your mood. This includes maintaining a consistent schedule, limiting blue light exposure before bed, and creating a cool, dark resting space.
            </p>
          </section>
        </div>
      </motion.section>

      {/* ===== CTA ===== */}
      <div className="mt-8 sm:mt-16 text-center px-4 mb-20">
        <div className="max-w-4xl mx-auto p-8 sm:p-12 bg-gradient-to-br from-[#EAB308] to-[#FACC15] rounded-[2rem] sm:rounded-[4rem] text-white shadow-lg">
          <h2 className="text-2xl sm:text-4xl font-black mb-4">Invest in Your Rest.</h2>
          <p className="text-base sm:text-xl font-light mb-8 opacity-90">
            If sleep struggles are impacting your mental health, professional support can help you find the way back to restorative rest.
          </p>

          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-white text-gray-900 px-8 py-3 rounded-full font-bold text-base hover:bg-yellow-50 transition-all active:scale-95"
          >
            Book an Appointment
          </button>
        </div>
      </div>

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
              <h3 className="text-xl font-bold text-gray-900 mb-6">Book an Appointment</h3>
              <div className="flex flex-col gap-3">
                <button onClick={() => router.push('/insurances')} className="w-full py-4 bg-[#EAB308] text-white font-bold rounded-xl active:bg-[#CA8A04]">
                  Use Insurance
                </button>
                <button onClick={() => router.push('/selfpay')} className="w-full py-4 bg-gray-100 text-gray-900 font-bold rounded-xl active:bg-gray-200">
                  Self-Pay / Private
                </button>
                <button onClick={() => setIsModalOpen(false)} className="mt-2 text-gray-400 text-sm">
                  Cancel
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}