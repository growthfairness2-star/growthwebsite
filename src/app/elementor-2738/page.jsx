"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

/** * SEO CONFIGURATION 
 * Focused on crisis intervention and immediate support accessibility.
 */
const metadata = {
  title: "Crisis Support & Mental Health Resources | Immediate Help Guide",
  description: "Find essential resources for suicide prevention, mental health crises, and life challenges. Access 24/7 hotlines, text support, and clinical guidance.",
  keywords: [
    "suicide prevention resources", 
    "mental health crisis help", 
    "988 lifeline information", 
    "crisis text line", 
    "life crisis support services", 
    "emergency mental health help", 
    "free mental health resources 2025"
  ],
  image: "/therapy.png", 
  url: "https://growthfairness.com/blog/useful-resources-for-suicide-mental-health-and-life-crisis"
};

export default function CrisisResourcesGuide() {
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
          <div className="inline-block px-4 py-1 mb-4 text-xs font-bold tracking-widest text-white uppercase bg-red-500 rounded-full animate-pulse">
            Immediate Help Available
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-black mb-6 leading-tight text-gray-900 break-words">
            You Are Not Alone: <br />
            <span
              className="font-light italic"
              style={{
                background: "linear-gradient(90deg, #EAB308, #FACC15)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Crisis Resources
            </span>
          </h1>

          <p className="text-gray-600 text-lg sm:text-xl font-light leading-relaxed text-justify">
            A curated directory of 24/7 support services and professional tools designed to help you navigate through life’s most difficult moments.
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
            alt="Supportive hands or a peaceful environment representing help"
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
          
          <div className="bg-red-50 border-l-8 border-red-500 p-6 mb-12 rounded-r-2xl">
            <h2 className="text-red-800 text-xl font-bold mb-2 mt-0">Emergency Contact</h2>
            <p className="text-red-700 m-0 text-lg">
              If you or someone you know is in immediate danger, please call <strong>911</strong> or go to the nearest emergency room.
            </p>
          </div>

          <section className="mb-12 sm:mb-20">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 border-b-4 border-[#FACC15] inline-block">
              24/7 Crisis Support Hotlines
            </h2>
            <p className="mb-8 text-justify leading-relaxed">
              These services are free, confidential, and available every hour of every day. You do not need an appointment to talk to someone who cares.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 bg-white border border-gray-200 rounded-2xl shadow-sm">
                <h3 className="text-xl font-bold text-[#A16207] mb-2">988 Suicide & Crisis Lifeline</h3>
                <p className="text-gray-600 mb-4 text-sm">Call or text <strong>988</strong> (English and Spanish).</p>
                <p className="text-gray-700 text-justify text-sm">Provides 24/7, free and confidential support for people in distress and prevention resources for you or your loved ones.</p>
              </div>

              <div className="p-6 bg-white border border-gray-200 rounded-2xl shadow-sm">
                <h3 className="text-xl font-bold text-[#A16207] mb-2">Crisis Text Line</h3>
                <p className="text-gray-600 mb-4 text-sm">Text <strong>HOME</strong> to <strong>741741</strong>.</p>
                <p className="text-gray-700 text-justify text-sm">Connect with a volunteer Crisis Counselor for free, 24/7 support via text messaging.</p>
              </div>
            </div>
          </section>

          <section className="mb-12 sm:mb-20 bg-yellow-50/50 p-5 sm:p-10 rounded-2xl sm:rounded-3xl border border-yellow-100">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8">Specialized Resources</h2>

            <div className="space-y-4 sm:space-y-8">
              {[
                { title: "The Trevor Project", content: "Dedicated to providing crisis intervention and suicide prevention services to LGBTQ+ young people under 25. Call 1-866-488-7386." },
                { title: "Veterans Crisis Line", content: "Dial 988 and press 1. This service connects Veterans and their loved ones with qualified, caring Department of Veterans Affairs responders." },
                { title: "SAMHSA’s National Helpline", content: "Call 1-800-662-HELP (4357). A confidential, free, 24/7 information service for individuals and family members facing mental or substance use disorders." }
              ].map((res, idx) => (
                <div key={idx} className="bg-white p-5 rounded-xl shadow-sm border border-gray-100">
                  <h4 className="font-bold text-[#CA8A04] text-lg mb-2">{res.title}</h4>
                  <p className="text-justify text-sm sm:text-base">{res.content}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-12 sm:mb-20">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">Levels of Mental Health Care</h2>

            <div className="w-full overflow-hidden rounded-xl border border-gray-200">
              <div className="overflow-x-auto">
                <table className="w-full min-w-[500px] text-left border-collapse">
                  <thead>
                    <tr className="bg-[#EAB308] text-white">
                      <th className="p-3 sm:p-4 border-b border-yellow-700">Service Level</th>
                      <th className="p-3 sm:p-4 border-b border-yellow-700">Best For...</th>
                      <th className="p-3 sm:p-4 border-b border-yellow-700">Urgency</th>
                    </tr>
                  </thead>
                  <tbody className="text-sm sm:text-base">
                    <tr>
                      <td className="p-3 sm:p-4 border-b border-gray-100 font-bold">Inpatient/ER</td>
                      <td className="p-3 sm:p-4 border-b border-gray-100">Active safety risk or self-harm</td>
                      <td className="p-3 sm:p-4 border-b border-gray-100 text-red-600 font-bold">Immediate</td>
                    </tr>
                    <tr className="bg-yellow-50/30">
                      <td className="p-3 sm:p-4 border-b border-gray-100 font-bold">Crisis Hotlines</td>
                      <td className="p-3 sm:p-4 border-b border-gray-100">De-escalation and talking through pain</td>
                      <td className="p-3 sm:p-4 border-b border-gray-100 font-bold text-yellow-600">High</td>
                    </tr>
                    <tr>
                      <td className="p-3 sm:p-4 border-b border-gray-100 font-bold">Psychiatry/Therapy</td>
                      <td className="p-3 sm:p-4 border-b border-gray-100">Long-term management and healing</td>
                      <td className="p-3 sm:p-4 border-b border-gray-100">Scheduled</td>
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
            Helpful Information
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8">
            {[
              { q: "What happens when I call 988?", a: "You will be connected to a trained counselor at a local crisis center who will listen, provide support, and connect you with resources if needed." },
              { q: "Is it really confidential?", a: "Yes. All crisis hotlines are required by law to maintain confidentiality unless there is an immediate risk of harm to yourself or others." },
              { q: "How do I help a friend in crisis?", a: "Ask them directly if they are thinking about suicide. Listen without judgment and stay with them until they are connected to professional help." },
              { q: "What is a 'Safety Plan'?", a: "A personalized list of coping strategies and support people you can turn to when you start to feel a crisis approaching." }
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
            <h2 className="text-2xl sm:text-4xl font-black mb-4">Take the next step toward healing.</h2>
            <p className="text-base sm:text-xl font-light mb-8 opacity-90">
              When you are ready for professional follow-up care, our specialists are here to support your long-term wellness.
            </p>

            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-white text-gray-900 px-8 py-3 rounded-full font-bold text-base hover:bg-yellow-50 transition-all active:scale-95"
            >
              Get Professional Care
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
              <h3 className="text-xl font-bold text-gray-900 mb-6">Clinical Support</h3>
              <div className="flex flex-col gap-3">
                <button onClick={() => router.push('/insurances')} className="w-full py-4 bg-[#EAB308] text-white font-bold rounded-xl active:bg-[#CA8A04]">
                  Use My Insurance
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