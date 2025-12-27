"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

/** * SEO CONFIGURATION 
 * Focused on culturally competent care and the intersection of heritage and health.
 */
const metadata = {
  title: "Mental Health & Cultural Beliefs: Navigating Heritage and Healing",
  description: "Explore how cultural values, traditions, and beliefs shape our mental health journey. Learn about culturally competent care and breaking the stigma across diverse communities.",
  keywords: [
    "mental health and culture 2025", 
    "culturally competent psychiatry", 
    "cultural stigma in mental health", 
    "heritage and healing", 
    "diverse mental health resources", 
    "cultural barriers to therapy", 
    "cross-cultural psychology benefits"
  ],
  image: "/therapy.png", 
  url: "https://growthfairness.com/blog/mental-health-and-cultural-beliefs"
};

export default function CulturalMentalHealthGuide() {
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
            Inclusive Healing: <br />
            <span
              className="font-light italic"
              style={{
                background: "linear-gradient(90deg, #EAB308, #FACC15)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Culture & Beliefs
            </span>
          </h1>

          <p className="text-gray-600 text-lg sm:text-xl font-light leading-relaxed text-justify">
            Our identity is rooted in our heritage. Understanding the intersection of cultural values and mental wellness is essential for authentic and effective healing.
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
            alt="Diverse individuals in a supportive community setting"
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
            Cultural competence is not just a clinical buzzword; it is the practice of honoring a person's lived experience, traditions, and worldview within their treatment plan.
          </p>

          <section className="mb-12 sm:mb-20">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">How Culture Shapes Mental Health</h2>
            <p className="mb-6 text-justify leading-relaxed">
              Culture influences everything from how we describe pain to whom we seek out for help. It can provide a strong sense of community and resilience, but it can also present unique barriers, such as stigma or the pressure to "keep things in the family."
            </p>
          </section>

          <section className="mb-12 sm:mb-20">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 border-b-4 border-[#FACC15] inline-block">
              Breaking Cultural Barriers
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
              <div className="bg-white">
                <h3 className="text-lg sm:text-xl font-bold mb-4 text-[#A16207]">1. Language & Expression</h3>
                <p className="text-gray-700 text-justify">
                  Mental health symptoms often present differently across languages. Culturally competent care ensures that "somatic" symptoms (like physical pain caused by stress) are recognized and validated.
                </p>
              </div>

              <div className="bg-white">
                <h3 className="text-lg sm:text-xl font-bold mb-4 text-[#A16207]">2. De-stigmatization</h3>
                <p className="text-gray-700 text-justify">
                  Many cultures view mental illness as a personal failing or spiritual crisis. Education and sensitive clinical dialogue help bridge the gap between tradition and modern medicine.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-12 sm:mb-20 bg-yellow-50/50 p-5 sm:p-10 rounded-2xl sm:rounded-3xl border border-yellow-100">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8">Dimensions of Culturally Competent Care</h2>

            <div className="space-y-4 sm:space-y-8">
              {[
                { title: "Religious & Spiritual Inclusion", content: "Recognizing the role of faith, prayer, and spiritual leaders in a patient's support network and healing process." },
                { title: "Family & Community Dynamics", content: "Understanding collectivist vs. individualist cultures and how family involvement can be a powerful tool in recovery." },
                { title: "Historical Context", content: "Acknowledging generational trauma and the impact of systemic barriers on a community's trust in medical institutions." }
              ].map((dim, idx) => (
                <div key={idx} className="bg-white p-5 rounded-xl shadow-sm border border-gray-100">
                  <h4 className="font-bold text-[#CA8A04] text-lg mb-2">{dim.title}</h4>
                  <p className="text-justify text-sm sm:text-base">{dim.content}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-12 sm:mb-20">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">Navigating Care Across Cultures</h2>

            <div className="w-full overflow-hidden rounded-xl border border-gray-200">
              <div className="overflow-x-auto">
                <table className="w-full min-w-[500px] text-left border-collapse">
                  <thead>
                    <tr className="bg-[#EAB308] text-white">
                      <th className="p-3 sm:p-4 border-b border-yellow-700">Perspective</th>
                      <th className="p-3 sm:p-4 border-b border-yellow-700">Common Beliefs</th>
                      <th className="p-3 sm:p-4 border-b border-yellow-700">Therapeutic Approach</th>
                    </tr>
                  </thead>
                  <tbody className="text-sm sm:text-base">
                    <tr>
                      <td className="p-3 sm:p-4 border-b border-gray-100 font-bold">Western/Clinical</td>
                      <td className="p-3 sm:p-4 border-b border-gray-100">Individualism, diagnosis-focused</td>
                      <td className="p-3 sm:p-4 border-b border-gray-100">Cognitive Behavioral Therapy</td>
                    </tr>
                    <tr className="bg-yellow-50/30">
                      <td className="p-3 sm:p-4 border-b border-gray-100 font-bold">Collectivist</td>
                      <td className="p-3 sm:p-4 border-b border-gray-100">Family honor, community health</td>
                      <td className="p-3 sm:p-4 border-b border-gray-100">Family-systems, group support</td>
                    </tr>
                    <tr>
                      <td className="p-3 sm:p-4 border-b border-gray-100 font-bold">Holistic/Traditional</td>
                      <td className="p-3 sm:p-4 border-b border-gray-100">Mind-body-spirit connection</td>
                      <td className="p-3 sm:p-4 border-b border-gray-100">Integrative medicine & mindfulness</td>
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
            Culture & Mental Health FAQs
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8">
            {[
              { q: "What is 'Cultural Competence' in psychiatry?", a: "It is the provider's ability to understand, communicate with, and effectively interact with people across cultures, respecting their diverse beliefs." },
              { q: "Can I bring my spiritual beliefs into therapy?", a: "Absolutely. A good therapist will welcome your spiritual life as a resource for your mental and emotional well-being." },
              { q: "Why is there so much stigma in some cultures?", a: "Stigma often stems from a lack of information, historical trauma, or the fear that a mental health struggle brings shame to the family unit." },
              { q: "How do I find a therapist who understands my background?", a: "Look for providers who specialize in 'Culturally Responsive Therapy' or who have experience working with your specific community or language." }
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
            <h2 className="text-2xl sm:text-4xl font-black mb-4">Care that honors your story.</h2>
            <p className="text-base sm:text-xl font-light mb-8 opacity-90">
              Our specialists are trained to provide compassionate care that respects your culture, your heritage, and your unique identity.
            </p>

            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-white text-gray-900 px-8 py-3 rounded-full font-bold text-base hover:bg-yellow-50 transition-all active:scale-95"
            >
              Connect with a Provider
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
              <h3 className="text-xl font-bold text-gray-900 mb-6">Personalized Care</h3>
              <div className="flex flex-col gap-3">
                <button onClick={() => router.push('/insurances')} className="w-full py-4 bg-[#EAB308] text-white font-bold rounded-xl active:bg-[#CA8A04]">
                  Check Insurance Coverage
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