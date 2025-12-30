"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

/** * SEO CONFIGURATION 
 * Optimized for 2026 Cultural Psychiatry and Inclusive Mental Health Care.
 */
const metadata = {
  title: "Mental Health and Culture: Bridging Heritage and Healing",
  description: "Explore the intersection of cultural background and mental health. Learn why culturally responsive care is essential for effective psychiatric outcomes.",
  keywords: [
    "mental health and culture", 
    "culturally responsive psychiatry", 
    "identity and mental health", 
    "inclusive therapy", 
    "ethnicity and mental wellbeing",
    "cultural stigma in psychiatry"
  ],
  image: "/therapy.png", 
  url: "https://growthfairness.com/tag/mental-health-and-culture"
};

export default function CultureMentalHealth() {
  const router = useRouter();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const articleCards = [
    {
      title: "Breaking Cultural Stigma",
      desc: "How traditional views on mental illness impact help-seeking behavior and how to navigate these conversations with family.",
      link: "/tag/breaking-mental-health-stigma"
    },
    {
      title: "The Role of Identity in Therapy",
      desc: "Understanding how race, gender, and religion shape our internal world and our response to clinical treatment.",
      link: "/tag/cultural-background-and-mental-health"
    },
    {
      title: "Generational Trauma",
      desc: "An exploration of how cultural history and family legacies influence the mental health of younger generations.",
      link: "/post-traumatic-stress-disorder-PTSD-symptoms-and-causes"
    }
  ];

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
            Healing Beyond <br />
            <span
              className="font-light italic"
              style={{
                background: "linear-gradient(90deg, #EAB308, #FACC15)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Boundaries
            </span>
          </h1>

          <p className="text-gray-600 text-lg sm:text-xl font-light leading-relaxed text-justify">
            Your culture is not a barrier to care; it is a vital component of your recovery. We specialize in culturally responsive treatments that honor your identity while providing clinical excellence.
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
            alt="Culturally inclusive mental health support"
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
            Cultural background dictates how we describe pain, how we perceive providers, and which support systems we trust. A "one-size-fits-all" approach ignores the rich context of your life.
          </p>

          <section className="mb-12 sm:mb-20">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">The Biopsychosocial-Cultural Model</h2>
            <p className="mb-6 text-justify leading-relaxed">
              Clinical outcomes improve significantly when providers account for the specific social stressors faced by different communities, such as immigration stress, racial fatigue, or linguistic nuances in describing emotional distress.
            </p>
            
          </section>

          <div className="text-center mb-16 pt-12">
            <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mb-4">Culturally Responsive Guides</h2>
            <div className="w-24 h-1 bg-[#EAB308] mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-10 not-prose">
            {articleCards.map((article, idx) => (
              <div 
                key={idx} 
                className="group p-8 rounded-[2rem] border border-gray-100 bg-white hover:bg-yellow-50 transition-all duration-300 shadow-sm hover:shadow-md cursor-pointer flex flex-col justify-between"
                onClick={() => router.push(article.link)}
              >
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-[#A16207]">{article.title}</h3>
                  <p className="text-gray-600 leading-relaxed mb-6 text-sm">
                    {article.desc}
                  </p>
                </div>
                <div className="text-[#EAB308] font-bold text-xs uppercase tracking-widest flex items-center">
                  Read Article 
                  <span className="ml-2 group-hover:translate-x-2 transition-transform">→</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* ===== Philosophy Section ===== */}
      <section className="bg-gray-50 py-16 sm:py-24">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-12">Care That Honors You</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-12">
            {[
              { title: "Identity First", text: "Recognizing how your unique identity shapes your mental health journey." },
              { title: "Inclusive", text: "Providing a safe space for all religions, races, and cultural backgrounds." },
              { title: "Evidence-Based", text: "Combining modern clinical psychiatry with culturally competent care." }
            ].map((item, i) => (
              <div key={i}>
                <h4 className="font-bold text-[#CA8A04] text-lg mb-2">{item.title}</h4>
                <p className="text-gray-600 text-sm leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <div className="mt-16 sm:mt-24 text-center px-4 mb-20">
        <div className="max-w-4xl mx-auto p-8 sm:p-12 bg-gradient-to-br from-[#EAB308] to-[#FACC15] rounded-[2rem] sm:rounded-[4rem] text-white shadow-lg">
          <h2 className="text-2xl sm:text-4xl font-black mb-4">Connect With a Provider Who Understands.</h2>
          <p className="text-base sm:text-xl font-light mb-8 opacity-90">
            Professional psychiatric care that respects your cultural background and identity.
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