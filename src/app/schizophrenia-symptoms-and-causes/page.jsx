"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

/** * SEO CONFIGURATION 
 * Optimized for 2025 schizophrenia awareness, early intervention, and clinical treatment.
 */
const metadata = {
  title: "Schizophrenia Symptoms & Causes: Understanding the Spectrum of Care",
  description: "A comprehensive guide to schizophrenia. Learn about positive and negative symptoms, cognitive impacts, biological causes, and modern treatment pathways.",
  keywords: [
    "schizophrenia symptoms 2025", 
    "causes of schizophrenia", 
    "early signs of psychosis", 
    "managing hallucinations and delusions", 
    "schizophrenia medication management", 
    "cognitive symptoms of schizophrenia", 
    "support for schizophrenia families"
  ],
  image: "/blog11.png", // As requested: blog11.png
  url: "https://growthfairness.com/blog/schizophrenia-symptoms-and-causes"
};

export default function SchizophreniaGuideBlog() {
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
            Schizophrenia: <br />
            <span
              className="font-light italic"
              style={{
                background: "linear-gradient(90deg, #EAB308, #FACC15)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Clarity & Support
            </span>
          </h1>

          <p className="text-gray-600 text-lg sm:text-xl font-light leading-relaxed text-justify">
            Moving beyond the stigma to understand a complex neurobiological condition. Early diagnosis and integrated care are the cornerstones of a fulfilling life.
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
            alt="Symbolic representation of mental clarity and structured support"
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
            Schizophrenia is a serious mental disorder in which people interpret reality abnormally. While it requires lifelong treatment, modern psychiatric interventions allow many to manage symptoms effectively.
          </p>

          <section className="mb-12 sm:mb-20">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">What Causes Schizophrenia?</h2>
            <p className="mb-6 text-justify leading-relaxed">
              It is not caused by a single factor. Current research points to a combination of <strong>genetics</strong>, <strong>brain chemistry</strong> (imbalances in dopamine and glutamate), and <strong>environmental triggers</strong> during brain development.
            </p>
          </section>

          <section className="mb-12 sm:mb-20">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 border-b-4 border-[#FACC15] inline-block">
              Understanding Symptoms
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
              <div className="bg-white">
                <h3 className="text-lg sm:text-xl font-bold mb-4 text-[#A16207]">1. Positive Symptoms</h3>
                <p className="text-gray-700 text-justify">
                  "Positive" refers to added behaviors: hallucinations (hearing or seeing things), delusions (false beliefs), and disorganized thinking or motor behavior.
                </p>
              </div>

              <div className="bg-white">
                <h3 className="text-lg sm:text-xl font-bold mb-4 text-[#A16207]">2. Negative Symptoms</h3>
                <p className="text-gray-700 text-justify">
                  "Negative" refers to a lack of normal function: social withdrawal, lack of emotion (flat affect), reduced speaking, and difficulty following through with plans.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-12 sm:mb-20 bg-yellow-50/50 p-5 sm:p-10 rounded-2xl sm:rounded-3xl border border-yellow-100">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8">Integrated Treatment Pathway</h2>

            <div className="space-y-4 sm:space-y-8">
              {[
                { title: "Antipsychotic Medications", content: "The primary tool for managing dopamine levels to reduce hallucinations and delusions." },
                { title: "Psychosocial Interventions", content: "Social skills training, family therapy, and vocational rehabilitation to help the individual thrive in their community." },
                { title: "Coordinated Specialty Care (CSC)", content: "A team-based approach for those experiencing their first episode of psychosis, focusing on recovery-oriented treatment." }
              ].map((path, idx) => (
                <div key={idx} className="bg-white p-5 rounded-xl shadow-sm border border-gray-100">
                  <h4 className="font-bold text-[#CA8A04] text-lg mb-2">{path.title}</h4>
                  <p className="text-justify text-sm sm:text-base">{path.content}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-12 sm:mb-20">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">Cognitive Impacts</h2>

            <div className="w-full overflow-hidden rounded-xl border border-gray-200">
              <div className="overflow-x-auto">
                <table className="w-full min-w-[500px] text-left border-collapse">
                  <thead>
                    <tr className="bg-[#EAB308] text-white">
                      <th className="p-3 sm:p-4 border-b border-yellow-700">Domain</th>
                      <th className="p-3 sm:p-4 border-b border-yellow-700">How it’s Affected</th>
                      <th className="p-3 sm:p-4 border-b border-yellow-700">Supportive Strategy</th>
                    </tr>
                  </thead>
                  <tbody className="text-sm sm:text-base">
                    <tr>
                      <td className="p-3 sm:p-4 border-b border-gray-100 font-bold">Working Memory</td>
                      <td className="p-3 sm:p-4 border-b border-gray-100">Difficulty using information immediately after learning it.</td>
                      <td className="p-3 sm:p-4 border-b border-gray-100">Written lists and digital alerts.</td>
                    </tr>
                    <tr className="bg-yellow-50/30">
                      <td className="p-3 sm:p-4 border-b border-gray-100 font-bold">Executive Function</td>
                      <td className="p-3 sm:p-4 border-b border-gray-100">Trouble processing information to make decisions.</td>
                      <td className="p-3 sm:p-4 border-b border-gray-100">Breaking tasks into micro-steps.</td>
                    </tr>
                    <tr>
                      <td className="p-3 sm:p-4 border-b border-gray-100 font-bold">Attention</td>
                      <td className="p-3 sm:p-4 border-b border-gray-100">Hard to focus for extended periods.</td>
                      <td className="p-3 sm:p-4 border-b border-gray-100">Quiet, structured environments.</td>
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
              { q: "Is schizophrenia a 'split personality'?", a: "No. This is a common myth. Schizophrenia involves a 'split' from reality, not a split identity (which is Dissociative Identity Disorder)." },
              { q: "When do symptoms usually appear?", a: "Typically in the late teens to early 30s. Men often show symptoms earlier than women." },
              { q: "Can someone with schizophrenia work?", a: "Yes. With proper medication and support services like vocational rehab, many individuals hold jobs and lead productive lives." },
              { q: "What should I do if a loved one shows signs?", a: "Encourage a psychiatric evaluation immediately. Early intervention significantly improves long-term outcomes." }
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
            <h2 className="text-2xl sm:text-4xl font-black mb-4">Navigating the path together.</h2>
            <p className="text-base sm:text-xl font-light mb-8 opacity-90">
              Comprehensive care can transform the trajectory of schizophrenia. Connect with our psychiatric specialists for a tailored treatment plan.
            </p>

            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-white text-gray-900 px-8 py-3 rounded-full font-bold text-base hover:bg-yellow-50 transition-all active:scale-95"
            >
              Book An Appointment
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