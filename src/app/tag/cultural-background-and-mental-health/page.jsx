"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

/** * SEO CONFIGURATION 
 * Optimized for 2025 cultural psychiatry and diversity in mental health.
 */
const metadata = {
  title: "Cultural Background & Mental Health: Bridging Identity and Care",
  description: "Understand how your cultural background, heritage, and identity shape your mental health journey. Explore the importance of culturally responsive psychiatric care.",
  keywords: [
    "cultural background and mental health 2025", 
    "culturally responsive psychiatry", 
    "impact of heritage on mental health", 
    "multicultural mental health support", 
    "breaking cultural stigma", 
    "inclusive mental healthcare", 
    "identity and emotional wellness"
  ],
  image: "/therapy.png", 
  url: "https://growthfairness.com/tag/cultural-background-and-mental-health"
};

export default function CulturalBackgroundGuide() {
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
            Your Identity: <br />
            <span
              className="font-light italic"
              style={{
                background: "linear-gradient(90deg, #EAB308, #FACC15)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Heritage & Health
            </span>
          </h1>

          <p className="text-gray-600 text-lg sm:text-xl font-light leading-relaxed text-justify">
            Mental health does not exist in a vacuum. Your cultural background provides the context for how you experience, express, and heal from emotional distress.
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
            alt="Representation of diverse cultural backgrounds and global unity"
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
            Effective treatment requires a provider who sees you as a whole person—honoring your traditions, language, and the unique values of your community.
          </p>

          <section className="mb-12 sm:mb-20">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">The Intersection of Culture and Care</h2>
            <p className="mb-6 text-justify leading-relaxed">
              Culture influences everything from the words we use to describe our feelings to our level of comfort with clinical environments. In many backgrounds, mental health is deeply intertwined with spiritual beliefs, family duties, and community standing.
            </p>
          </section>

          <section className="mb-12 sm:mb-20">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 border-b-4 border-[#FACC15] inline-block">
              Key Cultural Factors in Wellness
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
              <div className="bg-white">
                <h3 className="text-lg sm:text-xl font-bold mb-4 text-[#A16207]">1. Collectivist vs. Individualist</h3>
                <p className="text-gray-700 text-justify">
                  Understanding whether your culture prioritizes the needs of the group/family or the individual helps tailor therapeutic goals that feel authentic and sustainable.
                </p>
              </div>

              <div className="bg-white">
                <h3 className="text-lg sm:text-xl font-bold mb-4 text-[#A16207]">2. Help-Seeking Behaviors</h3>
                <p className="text-gray-700 text-justify">
                  Different cultures have varying levels of trust in medical systems. We focus on building bridges that respect traditional healing while providing modern psychiatric support.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-12 sm:mb-20 bg-yellow-50/50 p-5 sm:p-10 rounded-2xl sm:rounded-3xl border border-yellow-100">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8">What is Culturally Responsive Care?</h2>

            <div className="space-y-4 sm:space-y-8">
              {[
                { title: "Linguistic Competence", content: "Care that respects your primary language and the cultural nuances behind your expressions of grief, joy, and anxiety." },
                { title: "Trauma-Informed Heritage", content: "Recognizing the impact of generational trauma, migration, and systemic issues on a community's mental well-being." },
                { title: "Holistic Integration", content: "Working alongside your existing support systems, whether they are religious leaders, community elders, or extended family." }
              ].map((item, idx) => (
                <div key={idx} className="bg-white p-5 rounded-xl shadow-sm border border-gray-100">
                  <h4 className="font-bold text-[#CA8A04] text-lg mb-2">{item.title}</h4>
                  <p className="text-justify text-sm sm:text-base">{item.content}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-12 sm:mb-20">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">Inclusive Treatment Strategies</h2>

            <div className="w-full overflow-hidden rounded-xl border border-gray-200">
              <div className="overflow-x-auto">
                <table className="w-full min-w-[500px] text-left border-collapse">
                  <thead>
                    <tr className="bg-[#EAB308] text-white">
                      <th className="p-3 sm:p-4 border-b border-yellow-700">Cultural Aspect</th>
                      <th className="p-3 sm:p-4 border-b border-yellow-700">Potential Barrier</th>
                      <th className="p-3 sm:p-4 border-b border-yellow-700">Clinical Solution</th>
                    </tr>
                  </thead>
                  <tbody className="text-sm sm:text-base">
                    <tr>
                      <td className="p-3 sm:p-4 border-b border-gray-100 font-bold">Stigma</td>
                      <td className="p-3 sm:p-4 border-b border-gray-100">Fear of family shame or loss of status.</td>
                      <td className="p-3 sm:p-4 border-b border-gray-100">Confidential, private telepsychiatry.</td>
                    </tr>
                    <tr className="bg-yellow-50/30">
                      <td className="p-3 sm:p-4 border-b border-gray-100 font-bold">Somatization</td>
                      <td className="p-3 sm:p-4 border-b border-gray-100">Expressing emotional pain as physical pain.</td>
                      <td className="p-3 sm:p-4 border-b border-gray-100">Integrative medical/mental evaluation.</td>
                    </tr>
                    <tr>
                      <td className="p-3 sm:p-4 border-b border-gray-100 font-bold">Faith/Spirituality</td>
                      <td className="p-3 sm:p-4 border-b border-gray-100">Feeling care conflicts with religious beliefs.</td>
                      <td className="p-3 sm:p-4 border-b border-gray-100">Collaborative, faith-respecting therapy.</td>
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
            Culture & Care FAQs
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8">
            {[
              { q: "Why does my background matter in therapy?", a: "Your background shapes your worldview. Discussing it ensures your provider doesn't misinterpret your behaviors or goals." },
              { q: "Can a provider from a different culture help me?", a: "Yes, provided they practice cultural humility and are willing to learn about and respect your specific values." },
              { q: "What if my family doesn't believe in therapy?", a: "We can work on strategies to seek help privately or find ways to explain the clinical benefits to them in a way they understand." },
              { q: "Is 'Cultural Competence' a real thing?", a: "Yes. It is a set of clinical skills that allow providers to work effectively across different cultural and linguistic backgrounds." }
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
            <h2 className="text-2xl sm:text-4xl font-black mb-4">A safe space for every story.</h2>
            <p className="text-base sm:text-xl font-light mb-8 opacity-90">
              Access mental health care that understands and honors your identity.
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