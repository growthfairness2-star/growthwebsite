"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

/** * SEO CONFIGURATION 
 * Optimized for 2025 psychiatric medication management and safety protocols.
 */
const metadata = {
  title: "Psychiatric Medication Management: Personalized Treatment Plans",
  description: "Explore professional medication management services. Learn how our psychiatric specialists optimize your treatment for safety, efficacy, and long-term wellness.",
  keywords: [
    "psychiatric medication management 2025", 
    "medication monitoring services", 
    "personalized psychiatry", 
    "antidepressant management", 
    "mood stabilizer adjustment", 
    "psychotropic medication safety", 
    "holistic psychiatric care"
  ],
  image: "/therapy.png", 
  url: "https://growthfairness.com/blog/medication-management-2"
};

export default function MedicationManagementBlog() {
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
            Precision Care: <br />
            <span
              className="font-light italic"
              style={{
                background: "linear-gradient(90deg, #EAB308, #FACC15)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Medication Management
            </span>
          </h1>

          <p className="text-gray-600 text-lg sm:text-xl font-light leading-relaxed text-justify">
            Effective psychiatric care isn't just about the prescription—it's about a continuous, expert partnership to ensure your treatment is safe, effective, and tailored to your unique biology.
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
            alt="Professional clinical consultation and care"
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
            Our goal is to achieve the maximum clinical benefit with the minimum necessary dosage, prioritizing your long-term health and daily quality of life.
          </p>

          <section className="mb-12 sm:mb-20">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">What is Medication Management?</h2>
            <p className="mb-6 text-justify leading-relaxed">
              Psychiatric medication management is an outpatient service where a psychiatrist or psychiatric nurse practitioner reviews your symptoms, prescribes medications when necessary, and provides ongoing monitoring to adjust dosages and manage potential side effects.
            </p>
          </section>

          <section className="mb-12 sm:mb-20">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 border-b-4 border-[#FACC15] inline-block">
              The Collaborative Process
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
              <div className="bg-white">
                <h3 className="text-lg sm:text-xl font-bold mb-4 text-[#A16207]">1. Comprehensive Evaluation</h3>
                <p className="text-gray-700 text-justify">
                  We look beyond your current symptoms, reviewing your medical history, lifestyle, and past responses to treatments to find the most compatible options for your body.
                </p>
              </div>

              <div className="bg-white">
                <h3 className="text-lg sm:text-xl font-bold mb-4 text-[#A16207]">2. Ongoing Optimization</h3>
                <p className="text-gray-700 text-justify">
                  Your brain chemistry is dynamic. Regular follow-ups allow us to fine-tune your regimen as you progress through different stages of recovery or face life changes.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-12 sm:mb-20 bg-yellow-50/50 p-5 sm:p-10 rounded-2xl sm:rounded-3xl border border-yellow-100">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8">Our Safety & Efficacy Standards</h2>

            <div className="space-y-4 sm:space-y-8">
              {[
                { title: "Side Effect Management", content: "Proactively identifying and addressing physical or emotional side effects to ensure you feel comfortable and empowered by your treatment." },
                { title: "Drug Interaction Reviews", content: "Meticulous cross-checking with other supplements or medications you may be taking to prevent adverse reactions." },
                { title: "Education and Informed Consent", content: "Providing clear information on how medications work, potential risks, and expected timelines so you can make informed decisions." }
              ].map((item, idx) => (
                <div key={idx} className="bg-white p-5 rounded-xl shadow-sm border border-gray-100">
                  <h4 className="font-bold text-[#CA8A04] text-lg mb-2">{item.title}</h4>
                  <p className="text-justify text-sm sm:text-base">{item.content}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-12 sm:mb-20">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">Treatment Monitoring Table</h2>

            <div className="w-full overflow-hidden rounded-xl border border-gray-200">
              <div className="overflow-x-auto">
                <table className="w-full min-w-[500px] text-left border-collapse">
                  <thead>
                    <tr className="bg-[#EAB308] text-white">
                      <th className="p-3 sm:p-4 border-b border-yellow-700">Service Area</th>
                      <th className="p-3 sm:p-4 border-b border-yellow-700">What We Monitor</th>
                      <th className="p-3 sm:p-4 border-b border-yellow-700">Frequency</th>
                    </tr>
                  </thead>
                  <tbody className="text-sm sm:text-base">
                    <tr>
                      <td className="p-3 sm:p-4 border-b border-gray-100 font-bold">Initial Phase</td>
                      <td className="p-3 sm:p-4 border-b border-gray-100">Tolerability and acute symptom relief.</td>
                      <td className="p-3 sm:p-4 border-b border-gray-100">Weekly to Bi-weekly</td>
                    </tr>
                    <tr className="bg-yellow-50/30">
                      <td className="p-3 sm:p-4 border-b border-gray-100 font-bold">Stabilization</td>
                      <td className="p-3 sm:p-4 border-b border-gray-100">Dosage optimization and lifestyle synergy.</td>
                      <td className="p-3 sm:p-4 border-b border-gray-100">Monthly</td>
                    </tr>
                    <tr>
                      <td className="p-3 sm:p-4 border-b border-gray-100 font-bold">Maintenance</td>
                      <td className="p-3 sm:p-4 border-b border-gray-100">Prevention of relapse and long-term health.</td>
                      <td className="p-3 sm:p-4 border-b border-gray-100">Every 3 - 6 Months</td>
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
            Medication Questions
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8">
            {[
              { q: "Will I be on medication forever?", a: "Not necessarily. Many people use medication to reach a period of stability before working with their provider to safely taper off." },
              { q: "How long does it take to work?", a: "While some effects can be felt quickly, most psychiatric medications take 4 to 6 weeks to reach full therapeutic effect." },
              { q: "What if I miss a dose?", a: "Most providers advise taking it as soon as you remember, unless it's close to the next dose. Always consult your specific provider's instructions." },
              { q: "Can I use therapy alongside medication?", a: "Absolutely. Research consistently shows that a combination of medication management and therapy produces the best long-term outcomes." }
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
            <h2 className="text-2xl sm:text-4xl font-black mb-4">Start your optimized care today.</h2>
            <p className="text-base sm:text-xl font-light mb-8 opacity-90">
              Expert supervision can make all the difference in your mental health journey. Connect with a specialist to review your needs.
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