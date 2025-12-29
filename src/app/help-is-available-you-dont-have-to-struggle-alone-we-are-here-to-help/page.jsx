"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

/** * SEO CONFIGURATION 
 * Optimized for 2025 compassionate support and mental health accessibility.
 */
const metadata = {
  title: "Help is Available: You Don't Have to Struggle Alone",
  description: "Find immediate support and professional mental health care. We provide a safe space for healing, growth, and recovery. Reach out today—we are here to help.",
  keywords: [
    "mental health support 2025", 
    "finding help for depression", 
    "anxiety support services", 
    "professional counseling help", 
    "mental health outreach", 
    "compassionate psychiatric care", 
    "recovery support systems"
  ],
  image: "/therapy.png", 
  url: "https://growthfairness.com/blog/help-is-available-you-dont-have-to-struggle-alone-we-are-here-to-help"
};

export default function HelpAvailableGuide() {
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
            A Safe Space: <br />
            <span
              className="font-light italic"
              style={{
                background: "linear-gradient(90deg, #EAB308, #FACC15)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              We are Here to Help
            </span>
          </h1>

          <p className="text-gray-600 text-lg sm:text-xl font-light leading-relaxed text-justify">
            Struggling isn't a sign of weakness; it's a part of being human. Whether you're facing a life crisis or just need a supportive ear, you don't have to do it by yourself.
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
            alt="Warm and inviting environment symbolizing peace and help"
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
            The first step toward recovery is the most courageous one. By reaching out, you are reclaiming your power and opening the door to a brighter, more stable future.
          </p>

          <section className="mb-12 sm:mb-20">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">Why Reach Out Now?</h2>
            <p className="mb-6 text-justify leading-relaxed">
              Mental health challenges often feel isolating, creating a cycle where the struggle prevents the search for help. Breaking that cycle early can prevent symptoms from worsening and provide you with immediate coping tools to navigate your current situation.
            </p>
          </section>

          <section className="mb-12 sm:mb-20">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 border-b-4 border-[#FACC15] inline-block">
              Our Commitment to You
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
              <div className="bg-white">
                <h3 className="text-lg sm:text-xl font-bold mb-4 text-[#A16207]">1. Non-Judgmental Care</h3>
                <p className="text-gray-700 text-justify">
                  Every person’s journey is unique. We provide a judgment-free zone where you can share your thoughts, fears, and experiences openly.
                </p>
              </div>

              <div className="bg-white">
                <h3 className="text-lg sm:text-xl font-bold mb-4 text-[#A16207]">2. Collaborative Healing</h3>
                <p className="text-gray-700 text-justify">
                  You are the expert on your own life. We work alongside you to create a treatment plan that aligns with your personal goals and values.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-12 sm:mb-20 bg-yellow-50/50 p-5 sm:p-10 rounded-2xl sm:rounded-3xl border border-yellow-100">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8">How We Support You</h2>

            <div className="space-y-4 sm:space-y-8">
              {[
                { title: "Immediate Crisis Navigation", content: "Helping you de-escalate intense emotional moments and find safe, actionable steps forward." },
                { title: "Long-Term Psychiatric Management", content: "Consistent follow-up care to ensure stability, growth, and the prevention of future crises." },
                { title: "Personalized Skill Building", content: "Learning tangible tools for mindfulness, emotional regulation, and healthy communication." }
              ].map((service, idx) => (
                <div key={idx} className="bg-white p-5 rounded-xl shadow-sm border border-gray-100">
                  <h4 className="font-bold text-[#CA8A04] text-lg mb-2">{service.title}</h4>
                  <p className="text-justify text-sm sm:text-base">{service.content}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-12 sm:mb-20">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">What to Expect</h2>

            <div className="w-full overflow-hidden rounded-xl border border-gray-200">
              <div className="overflow-x-auto">
                <table className="w-full min-w-[500px] text-left border-collapse">
                  <thead>
                    <tr className="bg-[#EAB308] text-white">
                      <th className="p-3 sm:p-4 border-b border-yellow-700">The First Session</th>
                      <th className="p-3 sm:p-4 border-b border-yellow-700">Ongoing Care</th>
                      <th className="p-3 sm:p-4 border-b border-yellow-700">The Goal</th>
                    </tr>
                  </thead>
                  <tbody className="text-sm sm:text-base">
                    <tr>
                      <td className="p-3 sm:p-4 border-b border-gray-100">Intake and listening to your story.</td>
                      <td className="p-3 sm:p-4 border-b border-gray-100">Regular check-ins and strategy adjustment.</td>
                      <td className="p-3 sm:p-4 border-b border-gray-100 font-bold">Emotional Stability</td>
                    </tr>
                    <tr className="bg-yellow-50/30">
                      <td className="p-3 sm:p-4 border-b border-gray-100">Identifying immediate triggers.</td>
                      <td className="p-3 sm:p-4 border-b border-gray-100">Building a toolkit of coping habits.</td>
                      <td className="p-3 sm:p-4 border-b border-gray-100 font-bold">Mental Resilience</td>
                    </tr>
                    <tr>
                      <td className="p-3 sm:p-4 border-b border-gray-100">Establishing trust.</td>
                      <td className="p-3 sm:p-4 border-b border-gray-100">Processing past experiences.</td>
                      <td className="p-3 sm:p-4 border-b border-gray-100 font-bold">Life Satisfaction</td>
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
              { q: "Is it really confidential?", a: "Yes. All sessions and communications are protected by HIPAA regulations and medical ethics standards." },
              { q: "What if I can't afford long-term care?", a: "We work with various insurance providers and offer self-pay options to make care as accessible as possible." },
              { q: "How soon can I see someone?", a: "We prioritize urgent requests and often have openings within the same week for new consultations." },
              { q: "Do I need to be in 'crisis' to get help?", a: "Not at all. Seeking help early is the best way to prevent a crisis from ever happening." }
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
            <h2 className="text-2xl sm:text-4xl font-black mb-4">Start your journey today.</h2>
            <p className="text-base sm:text-xl font-light mb-8 opacity-90">
              You are deserving of support. Let's take that first step together.
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