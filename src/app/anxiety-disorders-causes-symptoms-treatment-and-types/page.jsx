"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Footer from "../Footer";
import { motion, AnimatePresence } from "framer-motion";

/** * SEO CONFIGURATION */
const metadata = {
  title: "Anxiety Disorders: Causes, Symptoms, Treatment & Types",
  description: "A deep-dive educational guide on the neurobiology, types, and recovery paths for anxiety disorders.",
  keywords: [
    "comprehensive anxiety guide", 
    "neurobiology of anxiety", 
    "GAD vs Panic Disorder", 
    "CBT for anxiety", 
    "anxiety symptoms and causes", 
    "mental health education", 
    "anxiety treatment protocols"
  ],
  image: "/blog6.png",
  url: "https://growthfairness.com/anxiety-disorders-guide"
};

export default function ComprehensiveAnxietyBlog() {
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

      <meta property="og:type" content="article" />
      <meta property="og:url" content={metadata.url} />
      <meta property="og:title" content={metadata.title} />
      <meta property="og:description" content={metadata.description} />
      <meta property="og:image" content={metadata.image} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={metadata.url} />
      <meta name="twitter:title" content={metadata.title} />
      <meta name="twitter:description" content={metadata.description} />
      <meta name="twitter:image" content={metadata.image} />

      {/* ===== Hero Section ===== */}
      <section className="flex flex-col md:flex-row items-center justify-between overflow-hidden bg-white shadow-sm border-b border-yellow-50 rounded-b-[2rem] md:rounded-b-[3rem]">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="w-full md:w-1/2 px-6 py-12 md:p-24 text-center md:text-left"
        >
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-black mb-6 sm:mb-8 leading-tight text-gray-900">
            Anxiety Disorders: <br />
            <span
              className="font-light italic"
              style={{
                background: "linear-gradient(90deg, #FACC15, #E1C16E)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Causes, Symptoms, Treatment & Types
            </span>
          </h1>

          <p className="text-gray-600 text-lg sm:text-xl font-light leading-relaxed text-justify">
            An exhaustive exploration into the mechanics of worry and the science of recovery.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
          className="w-full md:w-1/2 h-[300px] sm:h-[400px] md:h-[80vh] relative"
        >
          <Image
            src={metadata.image}
            alt="Educational guide to mental health and anxiety disorders"
            fill
            priority
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </motion.div>
      </section>

      {/* ===== Deep Dive Content ===== */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="max-w-5xl mx-auto px-5 sm:px-6 md:px-12 py-16 sm:py-20 text-gray-800"
      >
        <div className="prose prose-base sm:prose-lg max-w-none">
          <p className="text-lg sm:text-2xl leading-relaxed mb-10 sm:mb-12 font-serif italic border-l-4 sm:border-l-8 border-[#FACC15] pl-4 sm:pl-8 text-gray-700 text-justify">
            Anxiety is not merely "stress." It is a sophisticated, albeit often misaligned, survival mechanism. To truly understand anxiety disorders, one must look beyond the surface-level nervousness and into the intricate architecture of the human brain.
          </p>

          <section className="mb-16 sm:mb-20">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">What Exactly is Anxiety?</h2>
            <p className="mb-6 text-justify">
              At its core, anxiety is the body’s "smoke detector." In a healthy state, it alerts us to potential threats, sharpening our focus and preparing us for action. However, an anxiety disorder occurs when this smoke detector becomes hypersensitive, sounding a alarm at the slightest hint of steam.
            </p>
            <p className="text-justify">
              Clinically, it is defined by a state of apprehension regarding future uncertainties. While fear is a response to a <em>real and present</em> danger, anxiety is a response to a <em>perceived and future</em> threat.
            </p>
          </section>

          <section className="mb-16 sm:mb-20">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 border-b-4 border-[#FACC15] inline-block">
              The Multifaceted Causes
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 mt-8">
              <div>
                <h3 className="text-lg sm:text-xl font-bold mb-4 text-[#8A6D3B]">1. Neurobiology & Genetics</h3>
                <p className="text-gray-700 text-justify">
                  Research indicates that individuals with anxiety often have imbalances in neurotransmitters—Serotonin, dopamine, and GABA play pivotal roles. If a first-degree relative struggles with anxiety, the likelihood of developing a disorder increases.
                </p>
              </div>

              <div>
                <h3 className="text-lg sm:text-xl font-bold mb-4 text-[#8A6D3B]">2. Environmental Triggers</h3>
                <p className="text-gray-700 text-justify">
                  Chronic exposure to high-stress environments or childhood trauma (ACEs) can "rewire" the brain to remain in a state of hyper-vigilance.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-16 sm:mb-20 bg-gray-50 p-5 sm:p-10 rounded-3xl border border-yellow-100">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8">Clinical Classifications: The Types</h2>

            <div className="space-y-6 sm:space-y-8">
              {[
                { title: "Generalized Anxiety Disorder (GAD)", content: "Characterized by at least six months of excessive, persistent worry about a variety of things rather than one specific event." },
                { title: "Panic Disorder", content: "Involves recurrent, unexpected panic attacks—sudden periods of intense fear that include palpitations and shortness of breath." },
                { title: "Social Anxiety Disorder", content: "An intense fear of being scrutinized or negatively evaluated by others in social or performance situations." },
                { title: "Specific Phobias & Agoraphobia", content: "Agoraphobia involves avoidance of places that might cause panic, while specific phobias target distinct objects." }
              ].map((type, idx) => (
                <div key={idx} className="bg-white p-5 sm:p-6 rounded-xl shadow-sm">
                  <h4 className="font-bold text-[#E1C16E] text-lg sm:text-xl mb-2">{type.title}</h4>
                  <p className="text-justify">{type.content}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-16 sm:mb-20">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">The Symptomatology</h2>

            {/* FIXED: Added a shadow indicator and better container for mobile scrolling */}
            <div className="relative">
              <div className="overflow-x-auto pb-4 -mx-1 px-1">
                <table className="w-full min-w-[500px] text-left border-collapse border-spacing-0">
                  <thead>
                    <tr className="bg-[#FACC15] text-gray-900">
                      <th className="p-4 border border-yellow-200">Physical</th>
                      <th className="p-4 border border-yellow-200">Cognitive</th>
                      <th className="p-4 border border-yellow-200">Behavioral</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="p-4 border border-gray-100">Tachycardia</td>
                      <td className="p-4 border border-gray-100">Catastrophizing</td>
                      <td className="p-4 border border-gray-100">Avoidance</td>
                    </tr>
                    <tr className="bg-yellow-50/50">
                      <td className="p-4 border border-gray-100">GI Distress</td>
                      <td className="p-4 border border-gray-100">Hyper-focus</td>
                      <td className="p-4 border border-gray-100">Withdrawal</td>
                    </tr>
                    <tr>
                      <td className="p-4 border border-gray-100">Muscle Tension</td>
                      <td className="p-4 border border-gray-100">Brain fog</td>
                      <td className="p-4 border border-gray-100">Checking behaviors</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="md:hidden text-xs text-gray-400 mt-2 italic">← Scroll table horizontally to see more →</p>
            </div>
          </section>
        </div>

        {/* ===== People Also Ask ===== */}
        <section className="mt-20 sm:mt-24 pt-14 sm:pt-16 border-t-2 border-yellow-100">
          <h2 className="text-3xl sm:text-4xl font-black mb-10 sm:mb-12 text-gray-900 text-center tracking-tight">
            People Also Ask
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {[
              { q: "What are 5 symptoms of anxiety?", a: "Physical tension, rapid breathing, intrusive thoughts, persistent fatigue, and a constant sense of dread." },
              { q: "What to do when you're anxious?", a: "Engage the parasympathetic nervous system via 'box breathing' and use the 5-4-3-2-1 grounding method." },
              { q: "Can I live a normal life with anxiety?", a: "Yes. With tools like therapy and possibly medication, individuals lead highly successful careers." },
              { q: "When does worry become a disorder?", a: "When it is 'maladaptive'—meaning it prevents you from functioning for six months or longer." }
            ].map((item, idx) => (
              <div key={idx} className="bg-[#FFFCF0] p-6 sm:p-8 rounded-3xl border border-[#FEF3C7]">
                <h3 className="font-bold text-[#8A6D3B] text-lg sm:text-xl mb-4">{item.q}</h3>
                <p className="text-gray-700 text-justify">{item.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ===== CTA ===== */}
        <div className="mt-20 sm:mt-24 text-center">
          <div className="p-6 sm:p-12 bg-gradient-to-br from-[#FACC15] to-[#E1C16E] rounded-[2.5rem] sm:rounded-[4rem] text-white shadow-xl">
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-black mb-6">Do you want to manage anxiety?</h2>
            <p className="text-lg sm:text-xl md:text-2xl font-light mb-8 sm:mb-10 opacity-90">
              We are here, to help you navigate your journey to peace.
            </p>

            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-white text-gray-900 px-8 sm:px-10 py-3 sm:py-4 rounded-full font-bold text-base sm:text-lg hover:bg-gray-100 transition-all shadow-lg active:scale-95"
            >
              Book an Appointment
            </button>
          </div>
        </div>
      </motion.section>

      {/* ===== Modal ===== */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white p-6 sm:p-8 md:p-12 rounded-[2rem] shadow-2xl max-w-md w-full text-center"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Select Your Option</h3>
              <div className="flex flex-col gap-4 mt-8">
                <button onClick={() => router.push('/insurances')} className="w-full py-4 bg-[#FACC15] text-gray-900 font-bold rounded-xl hover:bg-[#eab308] transition-colors">
                  Insurance
                </button>
                <button onClick={() => router.push('/selfpay')} className="w-full py-4 bg-gray-100 text-gray-900 font-bold rounded-xl hover:bg-gray-200 transition-colors">
                  Self Pay
                </button>
                <button onClick={() => setIsModalOpen(false)} className="mt-4 text-gray-400 text-sm font-medium hover:text-gray-600">
                  Cancel
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
}