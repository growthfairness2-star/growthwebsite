"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

/** * SEO CONFIGURATION 
 * Optimized for 2025 personality disorder awareness and clinical guidance.
 */
const metadata = {
  title: "Borderline Personality Disorder (BPD): Symptoms, Causes & Recovery",
  description: "Understand the complexities of Borderline Personality Disorder. Explore BPD symptoms, underlying causes, and evidence-based treatments like DBT.",
  keywords: [
    "BPD symptoms 2025", 
    "causes of borderline personality disorder", 
    "DBT for BPD", 
    "emotional dysregulation treatment", 
    "BPD relationship patterns", 
    "fear of abandonment help", 
    "managing BPD mood swings"
  ],
  image: "/blog9.png", // As requested: blog9.png
  url: "https://growthfairness.com/blog/borderline-personality-disorder-symptoms-and-causes"
};

export default function BPDGuideBlog() {
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
            BPD: <br />
            <span
              className="font-light italic"
              style={{
                background: "linear-gradient(90deg, #EAB308, #FACC15)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Stability & Healing
            </span>
          </h1>

          <p className="text-gray-600 text-lg sm:text-xl font-light leading-relaxed text-justify">
            A comprehensive clinical overview of Borderline Personality Disorder, focusing on understanding emotional intensity and the path to a regulated life.
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
            alt="Abstract representation of emotional complexity and healing"
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
            Borderline Personality Disorder is characterized by a pervasive pattern of instability in emotions, self-image, and relationships. It is not a character flaw; it is a treatable mental health condition.
          </p>

          <section className="mb-12 sm:mb-20">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">What causes BPD?</h2>
            <p className="mb-6 text-justify leading-relaxed">
              While the exact cause is unknown, research suggests a combination of genetics, brain structure (specifically in areas governing impulse control and emotional regulation), and environmental factors such as childhood trauma or unstable early relationships.
            </p>
          </section>

          <section className="mb-12 sm:mb-20">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 border-b-4 border-[#FACC15] inline-block">
              Core Symptom Clusters
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
              <div className="bg-white">
                <h3 className="text-lg sm:text-xl font-bold mb-4 text-[#A16207]">1. Affective Instability</h3>
                <p className="text-gray-700 text-justify">
                  Extreme "mood crashes" or intense episodes of anger, depression, and anxiety that can last from a few hours to a few days.
                </p>
              </div>

              <div className="bg-white">
                <h3 className="text-lg sm:text-xl font-bold mb-4 text-[#A16207]">2. Interpersonal Chaos</h3>
                <p className="text-gray-700 text-justify">
                  A pattern of intense and unstable relationships, often alternating between extreme idealization and devaluation (splitting).
                </p>
              </div>
            </div>
          </section>

          <section className="mb-12 sm:mb-20 bg-yellow-50/50 p-5 sm:p-10 rounded-2xl sm:rounded-3xl border border-yellow-100">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8">Clinical Treatment Modalities</h2>

            <div className="space-y-4 sm:space-y-8">
              {[
                { title: "Dialectical Behavior Therapy (DBT)", content: "The gold standard for BPD, focusing on mindfulness, distress tolerance, and interpersonal effectiveness." },
                { title: "Schema Therapy", content: "Helps patients identify 'schemas' or deeply held negative beliefs about themselves and the world to change long-standing patterns." },
                { title: "Medication Management", content: "While no drug is FDA-approved specifically for BPD, clinicians use mood stabilizers and antidepressants to manage specific symptoms." }
              ].map((type, idx) => (
                <div key={idx} className="bg-white p-5 rounded-xl shadow-sm border border-gray-100">
                  <h4 className="font-bold text-[#CA8A04] text-lg mb-2">{type.title}</h4>
                  <p className="text-justify text-sm sm:text-base">{type.content}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-12 sm:mb-20">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">Diagnostic Criteria Checklist</h2>

            <div className="w-full overflow-hidden rounded-xl border border-gray-200">
              <div className="overflow-x-auto">
                <table className="w-full min-w-[500px] text-left border-collapse">
                  <thead>
                    <tr className="bg-[#EAB308] text-white">
                      <th className="p-3 sm:p-4 border-b border-yellow-700">Emotional Signs</th>
                      <th className="p-3 sm:p-4 border-b border-yellow-700">Behavioral Signs</th>
                      <th className="p-3 sm:p-4 border-b border-yellow-700">Cognitive Signs</th>
                    </tr>
                  </thead>
                  <tbody className="text-sm sm:text-base">
                    <tr>
                      <td className="p-3 sm:p-4 border-b border-gray-100">Chronic feelings of emptiness</td>
                      <td className="p-3 sm:p-4 border-b border-gray-100">Impulsive spending or driving</td>
                      <td className="p-3 sm:p-4 border-b border-gray-100">Paranoid ideation</td>
                    </tr>
                    <tr className="bg-yellow-50/30">
                      <td className="p-3 sm:p-4 border-b border-gray-100">Intense, inappropriate anger</td>
                      <td className="p-3 sm:p-4 border-b border-gray-100">Frantic efforts to avoid abandonment</td>
                      <td className="p-3 sm:p-4 border-b border-gray-100">Severe dissociative symptoms</td>
                    </tr>
                    <tr>
                      <td className="p-3 sm:p-4 border-b border-gray-100">Rapid mood shifts</td>
                      <td className="p-3 sm:p-4 border-b border-gray-100">Self-harming behaviors</td>
                      <td className="p-3 sm:p-4 border-b border-gray-100">Unstable self-image</td>
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
              { q: "Can BPD be cured?", a: "While it is a chronic condition, many individuals achieve 'remission' where they no longer meet the diagnostic criteria after consistent therapy." },
              { q: "How is BPD different from Bipolar Disorder?", a: "BPD involves rapid mood shifts triggered by social events, while Bipolar moods are often sustained for weeks and are more biological." },
              { q: "Is BPD rare?", a: "No, it affects approximately 1.6% of the general population, though some estimates suggest it could be as high as 5.9%." },
              { q: "What is 'Splitting'?", a: "It is a defense mechanism where a person views things/people as entirely good or entirely bad, with no middle ground." }
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
            <h2 className="text-2xl sm:text-4xl font-black mb-4">You deserve emotional peace.</h2>
            <p className="text-base sm:text-xl font-light mb-8 opacity-90">
              Specialized BPD care can help you build a life worth living. Let us help you find the right therapist today.
            </p>

            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-white text-gray-900 px-8 py-3 rounded-full font-bold text-base hover:bg-yellow-50 transition-all active:scale-95"
            >
              Get Specialized Support
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
              <h3 className="text-xl font-bold text-gray-900 mb-6">Start Your Recovery</h3>
              <div className="flex flex-col gap-3">
                <button onClick={() => router.push('/insurances')} className="w-full py-4 bg-[#EAB308] text-white font-bold rounded-xl active:bg-[#CA8A04]">
                  Browse Insurances
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