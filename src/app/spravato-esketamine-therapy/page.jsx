"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

/** * SEO CONFIGURATION 
 * Optimized for 2025 breakthrough depression treatments and Spravato clinical protocols.
 */
const metadata = {
  title: "Spravato (Esketamine) Therapy: Breakthrough for Resistant Depression",
  description: "Learn about Spravato (Esketamine) nasal spray—an FDA-approved treatment for treatment-resistant depression (TRD). Discover how this rapid-acting therapy works.",
  keywords: [
    "Spravato therapy 2025", 
    "esketamine nasal spray treatment", 
    "treatment resistant depression help", 
    "rapid acting antidepressants", 
    "Spravato clinical protocol", 
    "ketamine vs esketamine", 
    "psychiatric treatment for TRD"
  ],
  image: "/therapy.png", 
  url: "https://growthfairness.com/blog/spravato-esketamine-therapy"
};

export default function SpravatoTherapyBlog() {
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
            Spravato: <br />
            <span
              className="font-light italic"
              style={{
                background: "linear-gradient(90deg, #EAB308, #FACC15)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              New Hope for TRD
            </span>
          </h1>

          <p className="text-gray-600 text-lg sm:text-xl font-light leading-relaxed text-justify">
            When traditional antidepressants haven't provided relief, Spravato (esketamine) offers a novel, rapid-acting pathway to emotional recovery and stability.
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
            alt="Advanced clinical setting for specialized therapy"
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
            Spravato is the first FDA-approved nasal spray for treatment-resistant depression (TRD). It works differently than standard SSRIs by targeting the glutamate system in the brain.
          </p>

          <section className="mb-12 sm:mb-20">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">What is Treatment-Resistant Depression?</h2>
            <p className="mb-6 text-justify leading-relaxed">
              TRD is typically diagnosed when an individual has tried at least two different antidepressant medications at adequate doses and for a sufficient duration without seeing a significant reduction in symptoms. For these patients, Spravato can be a life-changing intervention.
            </p>
          </section>

          <section className="mb-12 sm:mb-20">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 border-b-4 border-[#FACC15] inline-block">
              The Spravato Experience
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
              <div className="bg-white">
                <h3 className="text-lg sm:text-xl font-bold mb-4 text-[#A16207]">1. Clinical Supervision</h3>
                <p className="text-gray-700 text-justify">
                  Because of its rapid effects, Spravato is administered in a certified clinical office under the supervision of a healthcare provider. You will be monitored for at least two hours after each dose.
                </p>
              </div>

              <div className="bg-white">
                <h3 className="text-lg sm:text-xl font-bold mb-4 text-[#A16207]">2. Rapid Onset</h3>
                <p className="text-gray-700 text-justify">
                  Unlike oral antidepressants that can take weeks to work, some patients experience a reduction in suicidal ideation or depressive symptoms within hours or days of their first few sessions.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-12 sm:mb-20 bg-yellow-50/50 p-5 sm:p-10 rounded-2xl sm:rounded-3xl border border-yellow-100">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8">Clinical Benefits & Mechanisms</h2>

            <div className="space-y-4 sm:space-y-8">
              {[
                { title: "Neuroplasticity", content: "Spravato helps the brain form new neural connections, essentially 're-wiring' pathways that have been dampened by chronic depression." },
                { title: "Glutamate Targeting", content: "By acting on N-methyl-D-aspartate (NMDA) receptors, it restores the balance of glutamate, the brain's most abundant chemical messenger." },
                { title: "Synergistic Use", content: "Spravato is used in conjunction with a daily oral antidepressant to provide a comprehensive, multi-layered approach to recovery." }
              ].map((benefit, idx) => (
                <div key={idx} className="bg-white p-5 rounded-xl shadow-sm border border-gray-100">
                  <h4 className="font-bold text-[#CA8A04] text-lg mb-2">{benefit.title}</h4>
                  <p className="text-justify text-sm sm:text-base">{benefit.content}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-12 sm:mb-20">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">Typical Treatment Timeline</h2>

            <div className="w-full overflow-hidden rounded-xl border border-gray-200">
              <div className="overflow-x-auto">
                <table className="w-full min-w-[500px] text-left border-collapse">
                  <thead>
                    <tr className="bg-[#EAB308] text-white">
                      <th className="p-3 sm:p-4 border-b border-yellow-700">Phase</th>
                      <th className="p-3 sm:p-4 border-b border-yellow-700">Frequency</th>
                      <th className="p-3 sm:p-4 border-b border-yellow-700">Duration</th>
                    </tr>
                  </thead>
                  <tbody className="text-sm sm:text-base">
                    <tr>
                      <td className="p-3 sm:p-4 border-b border-gray-100 font-bold">Induction Phase</td>
                      <td className="p-3 sm:p-4 border-b border-gray-100">Twice weekly</td>
                      <td className="p-3 sm:p-4 border-b border-gray-100">Weeks 1 - 4</td>
                    </tr>
                    <tr className="bg-yellow-50/30">
                      <td className="p-3 sm:p-4 border-b border-gray-100 font-bold">Maintenance Phase</td>
                      <td className="p-3 sm:p-4 border-b border-gray-100">Once weekly</td>
                      <td className="p-3 sm:p-4 border-b border-gray-100">Weeks 5 - 8</td>
                    </tr>
                    <tr>
                      <td className="p-3 sm:p-4 border-b border-gray-100 font-bold">Long-term Phase</td>
                      <td className="p-3 sm:p-4 border-b border-gray-100">Once every 1-2 weeks</td>
                      <td className="p-3 sm:p-4 border-b border-gray-100">Ongoing (As needed)</td>
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
            Spravato FAQs
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8">
            {[
              { q: "What are the common side effects?", a: "Most common are dissociation (feeling disconnected), dizziness, nausea, sleepiness, and a temporary increase in blood pressure." },
              { q: "Is Spravato the same as Ketamine?", a: "Esketamine is a more potent 'version' of one part of the ketamine molecule. Spravato is the specific FDA-approved nasal spray version." },
              { q: "Can I drive home after treatment?", a: "No. You must have a pre-arranged ride home and should not drive or operate machinery until the next day after a restful sleep." },
              { q: "Does insurance cover Spravato?", a: "Yes, many commercial insurance plans and Medicare cover Spravato for patients who meet the clinical criteria for TRD." }
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
            <h2 className="text-2xl sm:text-4xl font-black mb-4">Explore breakthrough relief.</h2>
            <p className="text-base sm:text-xl font-light mb-8 opacity-90">
              Find out if Spravato is the right step for your treatment-resistant depression. Our specialists are here to guide you.
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
              <h3 className="text-xl font-bold text-gray-900 mb-6">Consultation Options</h3>
              <div className="flex flex-col gap-3">
                <button onClick={() => router.push('/insurances')} className="w-full py-4 bg-[#EAB308] text-white font-bold rounded-xl active:bg-[#CA8A04]">
                  Check Insurance Coverage
                </button>
                <button onClick={() => router.push('/selfpay')} className="w-full py-4 bg-gray-100 text-gray-900 font-bold rounded-xl active:bg-gray-200">
                  Self-Pay / Private Options
                </button>
                <button onClick={() => setIsModalOpen(false)} className="mt-2 text-gray-400 text-sm">
                  Close
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}