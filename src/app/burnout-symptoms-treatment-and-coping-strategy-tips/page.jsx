"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Footer from "../Footer";
import { motion, AnimatePresence } from "framer-motion";

/** * SEO CONFIGURATION 
 * Optimized for 2025 search trends regarding workplace wellness.
 */
const metadata = {
  title: "Burnout: Symptoms, Treatment, and Coping Strategy Tips",
  description: "Recognize the signs of chronic exhaustion and learn clinical strategies to recover from burnout and regain your mental energy.",
  keywords: [
    "burnout recovery strategies", 
    "occupational burnout symptoms", 
    "signs of emotional exhaustion", 
    "burnout vs depression", 
    "work-life balance tips", 
    "preventing burnout at work", 
    "mental health for professionals"
  ],
  image: "/blog-burnout.png", // Ensure this image exists in your public folder
  url: "https://growthfairness.com/burnout-guide"
};

export default function BurnoutGuideBlog() {
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
      <section className="flex flex-col md:flex-row items-center justify-between overflow-hidden bg-orange-50/30 shadow-sm border-b border-orange-100 rounded-b-[2rem] md:rounded-b-[3rem]">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="w-full md:w-1/2 px-5 py-10 md:p-24 text-center md:text-left"
        >
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-black mb-6 leading-tight text-gray-900 break-words">
            Burnout: <br />
            <span
              className="font-light italic"
              style={{
                background: "linear-gradient(90deg, #F97316, #FB923C)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Symptoms & Recovery
            </span>
          </h1>

          <p className="text-gray-600 text-lg sm:text-xl font-light leading-relaxed text-justify">
            A comprehensive look at the syndrome resulting from chronic workplace stress that hasn't been successfully managed.
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
            alt="Person feeling exhausted but seeking help for burnout"
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
          
          <p className="text-lg sm:text-2xl leading-relaxed mb-10 font-serif italic border-l-4 sm:border-l-8 border-[#F97316] pl-4 sm:pl-8 text-gray-700 text-justify">
            Burnout is not a sign of weakness; it is a sign that you have been strong for too long without the necessary support or resources to replenish your internal battery.
          </p>

          <section className="mb-12 sm:mb-20">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">What is Burnout?</h2>
            <p className="mb-6 text-justify leading-relaxed">
              The World Health Organization (WHO) classifies burnout as an "occupational phenomenon." It is defined by three dimensions: feelings of energy depletion, increased mental distance from one’s job (cynicism), and reduced professional efficacy.
            </p>
          </section>

          <section className="mb-12 sm:mb-20">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 border-b-4 border-[#FB923C] inline-block">
              The Three Pillars of Burnout
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
              <div className="bg-white">
                <h3 className="text-lg sm:text-xl font-bold mb-4 text-[#C2410C]">1. Emotional Exhaustion</h3>
                <p className="text-gray-700 text-justify">
                  This is the "core" of burnout. You feel drained, used up, and like you have nothing left to give to your clients, coworkers, or family.
                </p>
              </div>

              <div className="bg-white">
                <h3 className="text-lg sm:text-xl font-bold mb-4 text-[#C2410C]">2. Depersonalization</h3>
                <p className="text-gray-700 text-justify">
                  A defensive mechanism where you become cynical or detached from your work. You may start seeing people as "tasks" rather than humans.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-12 sm:mb-20 bg-orange-50/50 p-5 sm:p-10 rounded-2xl sm:rounded-3xl border border-orange-100">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8">Coping Strategy Tips</h2>

            <div className="space-y-4 sm:space-y-8">
              {[
                { title: "The 'Rule of Three'", content: "Identify only three critical tasks each day. Achieving small wins helps combat the feeling of reduced efficacy." },
                { title: "Digital Decoupling", content: "Create a 'shutdown ritual' where work notifications are disabled. Physical separation from devices is key to mental rest." },
                { title: "Somatic Grounding", content: "Burnout lives in the body. Use progressive muscle relaxation or movement to signal safety to your nervous system." }
              ].map((type, idx) => (
                <div key={idx} className="bg-white p-5 rounded-xl shadow-sm border border-gray-100">
                  <h4 className="font-bold text-[#F97316] text-lg mb-2">{type.title}</h4>
                  <p className="text-justify text-sm sm:text-base">{type.content}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-12 sm:mb-20">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">Symptom Checklist</h2>

            <div className="w-full overflow-hidden rounded-xl border border-gray-200">
              <div className="overflow-x-auto">
                <table className="w-full min-w-[500px] text-left border-collapse">
                  <thead>
                    <tr className="bg-[#F97316] text-white">
                      <th className="p-3 sm:p-4 border-b border-orange-700">Physical Signs</th>
                      <th className="p-3 sm:p-4 border-b border-orange-700">Emotional Signs</th>
                      <th className="p-3 sm:p-4 border-b border-orange-700">Workplace Signs</th>
                    </tr>
                  </thead>
                  <tbody className="text-sm sm:text-base">
                    <tr>
                      <td className="p-3 sm:p-4 border-b border-gray-100">Chronic Headaches</td>
                      <td className="p-3 sm:p-4 border-b border-gray-100">Sense of Failure</td>
                      <td className="p-3 sm:p-4 border-b border-gray-100">Isolation</td>
                    </tr>
                    <tr className="bg-orange-50/30">
                      <td className="p-3 sm:p-4 border-b border-gray-100">Lowered Immunity</td>
                      <td className="p-3 sm:p-4 border-b border-gray-100">Loss of Motivation</td>
                      <td className="p-3 sm:p-4 border-b border-gray-100">Procrastination</td>
                    </tr>
                    <tr>
                      <td className="p-3 sm:p-4 border-b border-gray-100">Sleep Changes</td>
                      <td className="p-3 sm:p-4 border-b border-gray-100">Increased Irritability</td>
                      <td className="p-3 sm:p-4 border-b border-gray-100">Lower Productivity</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </section>
        </div>

        {/* ===== People Also Ask ===== */}
        <section className="mt-16 sm:mt-24 pt-12 border-t border-orange-100">
          <h2 className="text-2xl sm:text-4xl font-black mb-10 text-gray-900 text-center">
            People Also Ask
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8">
            {[
              { q: "Is burnout the same as depression?", a: "While they share symptoms like exhaustion, burnout is usually situation-specific (work/caregiving), whereas depression affects all areas of life." },
              { q: "How long does burnout recovery take?", a: "Recovery depends on the severity, but typically ranges from several weeks to several months of consistent lifestyle changes." },
              { q: "Can you recover from burnout without quitting?", a: "Often yes, through boundary setting, role adjustments, and professional therapy to address underlying stress responses." },
              { q: "What is the fastest way to heal?", a: "Prioritizing sleep, seeking clinical support, and identifying the 'root cause' of the stress rather than just treating the symptoms." }
            ].map((item, idx) => (
              <div key={idx} className="bg-orange-50/20 p-6 rounded-2xl border border-orange-100">
                <h3 className="font-bold text-[#C2410C] text-lg mb-3">{item.q}</h3>
                <p className="text-gray-700 text-sm sm:text-base text-justify">{item.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ===== CTA ===== */}
        <div className="mt-16 sm:mt-24 text-center">
          <div className="p-8 sm:p-12 bg-gradient-to-br from-[#F97316] to-[#FB923C] rounded-[2rem] sm:rounded-[4rem] text-white shadow-lg">
            <h2 className="text-2xl sm:text-4xl font-black mb-4">Are you feeling burnt out?</h2>
            <p className="text-base sm:text-xl font-light mb-8 opacity-90">
              Recovery starts with a single step. Let us help you find your balance again.
            </p>

            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-white text-gray-900 px-8 py-3 rounded-full font-bold text-base hover:bg-gray-100 transition-all active:scale-95"
            >
              Consult a Specialist
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
              <h3 className="text-xl font-bold text-gray-900 mb-6">Take Action Today</h3>
              <div className="flex flex-col gap-3">
                <button onClick={() => router.push('/insurances')} className="w-full py-4 bg-[#F97316] text-white font-bold rounded-xl active:bg-[#ea580c]">
                  Use Insurance
                </button>
                <button onClick={() => router.push('/selfpay')} className="w-full py-4 bg-gray-100 text-gray-900 font-bold rounded-xl active:bg-gray-200">
                  Self Pay
                </button>
                <button onClick={() => setIsModalOpen(false)} className="mt-2 text-gray-400 text-sm">
                  Maybe later
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
}