"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

/** * SEO CONFIGURATION 
 * Optimized for 2025 digital mental health and online psychiatry trends.
 */
const metadata = {
  title: "Online Psychiatry Care: Telehealth Benefits & Virtual Treatment Guide",
  description: "Access professional psychiatric evaluations and medication management from home. Learn how online psychiatry works, insurance coverage, and digital care benefits.",
  keywords: [
    "online psychiatry care 2025", 
    "telehealth mental health services", 
    "virtual psychiatric evaluation", 
    "online medication management", 
    "benefits of telepsychiatry", 
    "is online therapy effective", 
    "affordable virtual psychiatry"
  ],
  image: "/therapy.png", 
  url: "https://growthfairness.com/blog/online-psychiatry"
};

export default function PsychiatryCareGuide() {
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
            Virtual Care: <br />
            <span
              className="font-light italic"
              style={{
                background: "linear-gradient(90deg, #EAB308, #FACC15)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Online Psychiatry
            </span>
          </h1>

          <p className="text-gray-600 text-lg sm:text-xl font-light leading-relaxed text-justify">
            Bridging the gap between clinical expertise and the comfort of your home through secure, modern telepsychiatry protocols.
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
            alt="Person attending a virtual therapy session on a laptop"
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
            Mental health care should be accessible, not a burden. Online psychiatry leverages technology to provide high-quality medical evaluations without geographical barriers.
          </p>

          <section className="mb-12 sm:mb-20">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">What is Online Psychiatry?</h2>
            <p className="mb-6 text-justify leading-relaxed">
              Online psychiatry, or telepsychiatry, is a subset of telemedicine that provides a range of services including psychiatric evaluations, therapy, and medication management via secure high-definition video conferencing.
            </p>
          </section>

          <section className="mb-12 sm:mb-20">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 border-b-4 border-[#FACC15] inline-block">
              Advantages of Digital Care
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
              <div className="bg-white">
                <h3 className="text-lg sm:text-xl font-bold mb-4 text-[#A16207]">1. Unmatched Accessibility</h3>
                <p className="text-gray-700 text-justify">
                  Eliminate travel time and costs. Access top-tier psychiatric specialists regardless of your physical location, especially beneficial for those in rural areas.
                </p>
              </div>

              <div className="bg-white">
                <h3 className="text-lg sm:text-xl font-bold mb-4 text-[#A16207]">2. Increased Privacy</h3>
                <p className="text-gray-700 text-justify">
                  Attend appointments from the safety and privacy of your own home, reducing the stigma sometimes associated with entering a physical clinical office.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-12 sm:mb-20 bg-yellow-50/50 p-5 sm:p-10 rounded-2xl sm:rounded-3xl border border-yellow-100">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8">The Virtual Consultation Process</h2>

            <div className="space-y-4 sm:space-y-8">
              {[
                { title: "Initial Assessment", content: "A comprehensive video-based evaluation where medical history, current symptoms, and mental health goals are discussed thoroughly." },
                { title: "Medication Management", content: "E-prescribing allows medications to be sent directly to your local pharmacy after a clinical review during your session." },
                { title: "Integrated Therapy", content: "Combining medical intervention with evidence-based talk therapy for a holistic approach to mental wellness." }
              ].map((type, idx) => (
                <div key={idx} className="bg-white p-5 rounded-xl shadow-sm border border-gray-100">
                  <h4 className="font-bold text-[#CA8A04] text-lg mb-2">{type.title}</h4>
                  <p className="text-justify text-sm sm:text-base">{type.content}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-12 sm:mb-20">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">Conditions Treated Online</h2>

            <div className="w-full overflow-hidden rounded-xl border border-gray-200">
              <div className="overflow-x-auto">
                <table className="w-full min-w-[500px] text-left border-collapse">
                  <thead>
                    <tr className="bg-[#EAB308] text-white">
                      <th className="p-3 sm:p-4 border-b border-yellow-700">Mood Disorders</th>
                      <th className="p-3 sm:p-4 border-b border-yellow-700">Anxiety & Stress</th>
                      <th className="p-3 sm:p-4 border-b border-yellow-700">Focus & Behavior</th>
                    </tr>
                  </thead>
                  <tbody className="text-sm sm:text-base">
                    <tr>
                      <td className="p-3 sm:p-4 border-b border-gray-100">Major Depression</td>
                      <td className="p-3 sm:p-4 border-b border-gray-100">Generalized Anxiety</td>
                      <td className="p-3 sm:p-4 border-b border-gray-100">ADHD Management</td>
                    </tr>
                    <tr className="bg-yellow-50/30">
                      <td className="p-3 sm:p-4 border-b border-gray-100">Bipolar Disorder</td>
                      <td className="p-3 sm:p-4 border-b border-gray-100">Social Phobia</td>
                      <td className="p-3 sm:p-4 border-b border-gray-100">OCD Support</td>
                    </tr>
                    <tr>
                      <td className="p-3 sm:p-4 border-b border-gray-100">Postpartum Support</td>
                      <td className="p-3 sm:p-4 border-b border-gray-100">PTSD Treatment</td>
                      <td className="p-3 sm:p-4 border-b border-gray-100">Sleep Optimization</td>
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
              { q: "Is online psychiatry as effective as in-person?", a: "Yes, clinical studies show that telepsychiatry is equivalent to in-person care in terms of diagnostic accuracy and treatment effectiveness." },
              { q: "Does insurance cover virtual visits?", a: "Most major insurance providers now cover telepsychiatry at the same rate as traditional office visits." },
              { q: "Can online psychiatrists prescribe medication?", a: "Yes, licensed psychiatrists can prescribe most non-controlled medications electronically to your preferred pharmacy." },
              { q: "What technology do I need?", a: "A smartphone, tablet, or computer with a camera and a stable internet connection is all that's required." }
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
            <h2 className="text-2xl sm:text-4xl font-black mb-4">Quality care, wherever you are.</h2>
            <p className="text-base sm:text-xl font-light mb-8 opacity-90">
              Skip the waiting room and connect with a board-certified psychiatric provider today.
            </p>

            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-white text-gray-900 px-8 py-3 rounded-full font-bold text-base hover:bg-yellow-50 transition-all active:scale-95"
            >
              Book Your Virtual Session
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
              <h3 className="text-xl font-bold text-gray-900 mb-6">Start Your Journey</h3>
              <div className="flex flex-col gap-3">
                <button onClick={() => router.push('/insurances')} className="w-full py-4 bg-[#EAB308] text-white font-bold rounded-xl active:bg-[#CA8A04]">
                  Check My Insurance
                </button>
                <button onClick={() => router.push('/selfpay')} className="w-full py-4 bg-gray-100 text-gray-900 font-bold rounded-xl active:bg-gray-200">
                  Self Pay / out-of-pocket
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