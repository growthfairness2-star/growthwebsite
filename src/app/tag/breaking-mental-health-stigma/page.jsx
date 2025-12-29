"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

/** * SEO CONFIGURATION 
 * Focused on advocacy, de-stigmatization, and mental health education for 2025.
 */
const metadata = {
  title: "Breaking Mental Health Stigma: Advocacy and Education Guide",
  description: "Join the movement to end mental health stigma. Learn how to challenge myths, foster supportive communities, and prioritize wellness without shame.",
  keywords: [
    "breaking mental health stigma 2025", 
    "ending mental illness myths", 
    "mental health advocacy", 
    "how to talk about mental health", 
    "reducing stigma", 
    "mental health awareness", 
    "supportive community building"
  ],
  image: "/therapy.png", 
  url: "https://growthfairness.com/blog/breaking-mental-health-stigma"
};

export default function BreakingStigmaBlog() {
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
            End the Silence: <br />
            <span
              className="font-light italic"
              style={{
                background: "linear-gradient(90deg, #EAB308, #FACC15)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Breaking Stigma
            </span>
          </h1>

          <p className="text-gray-600 text-lg sm:text-xl font-light leading-relaxed text-justify">
            Stigma thrives in the dark. By speaking openly and educating ourselves, we replace shame with support and pave the way for collective healing.
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
            alt="Compassionate support and open communication"
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
            Stigma is not just a social barrier; it is a clinical one. It prevents millions of individuals from seeking the life-saving psychiatric care they deserve.
          </p>

          <section className="mb-12 sm:mb-20">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">What is Mental Health Stigma?</h2>
            <p className="mb-6 text-justify leading-relaxed">
              Stigma involves the negative stereotypes, prejudice, and discrimination directed toward people with mental health conditions. It can manifest as social exclusion, workplace bias, or internalized shame that makes an individual feel "broken" or "less than."
            </p>
          </section>

          <section className="mb-12 sm:mb-20">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 border-b-4 border-[#FACC15] inline-block">
              Strategies for Change
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
              <div className="bg-white">
                <h3 className="text-lg sm:text-xl font-bold mb-4 text-[#A16207]">1. Conscious Language</h3>
                <p className="text-gray-700 text-justify">
                  Using "person-first" language—such as "a person with schizophrenia" rather than "a schizophrenic"—humanizes the individual and recognizes that they are more than their diagnosis.
                </p>
              </div>

              <div className="bg-white">
                <h3 className="text-lg sm:text-xl font-bold mb-4 text-[#A16207]">2. Open Advocacy</h3>
                <p className="text-gray-700 text-justify">
                  Sharing lived experiences (when safe to do so) normalize the conversation. Advocacy turns "private struggles" into "public support," making it easier for others to come forward.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-12 sm:mb-20 bg-yellow-50/50 p-5 sm:p-10 rounded-2xl sm:rounded-3xl border border-yellow-100">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8">The Impact of Reducing Stigma</h2>

            <div className="space-y-4 sm:space-y-8">
              {[
                { title: "Increased Help-Seeking", content: "When shame is removed, people are 40% more likely to pursue professional treatment in the early stages of a condition." },
                { title: "Stronger Support Systems", content: "Families and communities become better equipped to provide the empathy and practical help needed for long-term recovery." },
                { title: "Policy and Funding", content: "Reduced stigma leads to better legislative support, insurance parity, and research funding for mental health services." }
              ].map((item, idx) => (
                <div key={idx} className="bg-white p-5 rounded-xl shadow-sm border border-gray-100">
                  <h4 className="font-bold text-[#CA8A04] text-lg mb-2">{item.title}</h4>
                  <p className="text-justify text-sm sm:text-base">{item.content}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-12 sm:mb-20">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">Challenging Common Myths</h2>

            <div className="w-full overflow-hidden rounded-xl border border-gray-200">
              <div className="overflow-x-auto">
                <table className="w-full min-w-[500px] text-left border-collapse">
                  <thead>
                    <tr className="bg-[#EAB308] text-white">
                      <th className="p-3 sm:p-4 border-b border-yellow-700">The Myth</th>
                      <th className="p-3 sm:p-4 border-b border-yellow-700">The Reality</th>
                      <th className="p-3 sm:p-4 border-b border-yellow-700">Action Step</th>
                    </tr>
                  </thead>
                  <tbody className="text-sm sm:text-base">
                    <tr>
                      <td className="p-3 sm:p-4 border-b border-gray-100 font-bold">Mental illness is a choice.</td>
                      <td className="p-3 sm:p-4 border-b border-gray-100">It is a complex biological condition.</td>
                      <td className="p-3 sm:p-4 border-b border-gray-100 italic">Educate with facts.</td>
                    </tr>
                    <tr className="bg-yellow-50/30">
                      <td className="p-3 sm:p-4 border-b border-gray-100 font-bold">Treatment is a crutch.</td>
                      <td className="p-3 sm:p-4 border-b border-gray-100">Therapy and meds are medical tools.</td>
                      <td className="p-3 sm:p-4 border-b border-gray-100 italic">Support clinical care.</td>
                    </tr>
                    <tr>
                      <td className="p-3 sm:p-4 border-b border-gray-100 font-bold">"They're just dramatic."</td>
                      <td className="p-3 sm:p-4 border-b border-gray-100">Symptoms are real and debilitating.</td>
                      <td className="p-3 sm:p-4 border-b border-gray-100 italic">Listen with empathy.</td>
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
            Stigma & Awareness FAQs
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8">
            {[
              { q: "How can I tell if I'm internalizing stigma?", a: "If you feel 'weak' for needing help or try to hide your symptoms out of fear of being judged, you may be experiencing self-stigma." },
              { q: "What should I do if a friend makes a stigmatizing joke?", a: "Gently correct them. Let them know that mental health struggles are common and that jokes can make it harder for people to seek help." },
              { q: "Is stigma worse in certain cultures?", a: "Stigma varies across cultures; some prioritize 'saving face.' Culturally responsive care addresses these specific nuances." },
              { q: "Does the media contribute to stigma?", a: "Historically, yes. However, modern media is increasingly portraying mental health with more accuracy and compassion." }
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
            <h2 className="text-2xl sm:text-4xl font-black mb-4">Be the change you want to see.</h2>
            <p className="text-base sm:text-xl font-light mb-8 opacity-90">
              Seeking help is an act of courage, not a cause for shame. Let's take the first step toward your wellness together.
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