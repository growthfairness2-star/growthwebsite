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
  keywords: ["comprehensive anxiety guide", "neurobiology of anxiety", "GAD vs Panic Disorder", "CBT for anxiety", "anxiety symptoms and causes", "mental health education", "anxiety treatment protocols"]
};

export default function ComprehensiveAnxietyBlog() {
  const router = useRouter();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <title>{metadata.title}</title>
      <meta name="description" content={metadata.description} />

      {/* ===== Hero Section ===== */}
      <section className="flex flex-col md:flex-row items-center justify-between overflow-hidden bg-white shadow-sm border-b border-yellow-50 rounded-b-[3rem]">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="w-full md:w-1/2 px-6 py-12 md:p-24 text-center md:text-left"
        >
          <h1 className="text-4xl md:text-6xl font-black mb-8 leading-tight text-gray-900">
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
          <p className="text-gray-600 text-xl font-light leading-relaxed text-justify">
            An exhaustive exploration into the mechanics of worry and the science of recovery.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
          className="w-full md:w-1/2 h-[40vh] md:h-[80vh] relative"
        >
          <Image
            src="/blog6.png" 
            alt="Educational guide to mental health"
            fill
            priority
            className="object-cover"
          />
        </motion.div>
      </section>

      {/* ===== Deep Dive Content ===== */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="max-w-5xl mx-auto px-6 md:px-12 py-20 text-gray-800"
      >
        <div className="prose prose-lg max-w-none">
          <p className="text-2xl leading-relaxed mb-12 font-serif italic border-l-8 border-[#FACC15] pl-8 text-gray-700 text-justify">
            Anxiety is not merely "stress." It is a sophisticated, albeit often misaligned, survival mechanism. To truly understand anxiety disorders, one must look beyond the surface-level nervousness and into the intricate architecture of the human brain and the history of the individual.
          </p>

          <section className="mb-20">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">What Exactly is Anxiety?</h2>
            <p className="mb-6 text-justify">
              At its core, anxiety is the body’s "smoke detector." In a healthy state, it alerts us to potential threats, sharpening our focus and preparing us for action. However, an anxiety disorder occurs when this smoke detector becomes hypersensitive, sounding a deafening alarm at the slightest hint of steam or even when there is no smoke at all.
            </p>
            <p className="text-justify">
              Clinically, it is defined by a state of apprehension or dread regarding future uncertainties. While fear is a response to a <em>real and present</em> danger, anxiety is a response to a <em>perceived and future</em> threat.
            </p>
          </section>

          <section className="mb-20">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 border-b-4 border-[#FACC15] inline-block">The Multifaceted Causes</h2>
            <div className="grid md:grid-cols-2 gap-10 mt-8">
              <div>
                <h3 className="text-xl font-bold mb-4 text-[#8A6D3B]">1. Neurobiology & Genetics</h3>
                <p className="text-gray-700 text-justify">
                  Research indicates that individuals with anxiety often have imbalances in neurotransmitters—the brain's chemical messengers. Serotonin, dopamine, and GABA play pivotal roles in regulating mood and relaxation. Furthermore, if a first-degree relative struggles with anxiety, the likelihood of developing a disorder increases, suggesting a strong hereditary component.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4 text-[#8A6D3B]">2. Environmental Triggers</h3>
                <p className="text-gray-700 text-justify">
                  The "nature vs. nurture" debate concludes that both matter. Chronic exposure to high-stress environments, childhood trauma (ACEs), or sudden life-altering events (like the loss of a loved one or financial instability) can "rewire" the brain to remain in a state of hyper-vigilance.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-20 bg-gray-50 p-10 rounded-3xl border border-yellow-100">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Clinical Classifications: The Types</h2>
            <div className="space-y-8">
              {[
                { title: "Generalized Anxiety Disorder (GAD)", content: "Characterized by at least six months of excessive, persistent worry about a variety of different things (e.g., money, health, family) rather than one specific event. Individuals often feel 'on edge' constantly." },
                { title: "Panic Disorder", content: "This involves recurrent, unexpected panic attacks. These are sudden periods of intense fear that may include palpitations, sweating, shaking, shortness of breath, or a feeling that one is 'going crazy' or dying." },
                { title: "Social Anxiety Disorder", content: "More than just shyness, this is an intense fear of being scrutinized or negatively evaluated by others in social or performance situations, leading to significant avoidance behaviors." },
                { title: "Specific Phobias & Agoraphobia", content: "Agoraphobia involves fear and avoidance of places or situations that might cause panic or feelings of being trapped, while specific phobias target distinct objects like heights, needles, or animals." }
              ].map((type, idx) => (
                <div key={idx} className="bg-white p-6 rounded-xl shadow-sm">
                  <h4 className="font-bold text-[#E1C16E] text-xl mb-2">{type.title}</h4>
                  <p className="text-justify">{type.content}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-20">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">The Symptomatology</h2>
            <p className="mb-6 text-justify">Anxiety manifests in a triad of symptoms: Physical, Cognitive, and Behavioral.</p>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-[#FACC15] text-gray-900">
                    <th className="p-4 border">Physical</th>
                    <th className="p-4 border">Cognitive</th>
                    <th className="p-4 border">Behavioral</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td className="p-4 border">Tachycardia</td><td className="p-4 border">Catastrophizing</td><td className="p-4 border">Avoidance</td></tr>
                  <tr className="bg-yellow-50"><td className="p-4 border">GI Distress</td><td className="p-4 border">Hyper-focus</td><td className="p-4 border">Withdrawal</td></tr>
                  <tr><td className="p-4 border">Muscle Tension</td><td className="p-4 border">Brain fog</td><td className="p-4 border">Checking behaviors</td></tr>
                </tbody>
              </table>
            </div>
          </section>
        </div>

        {/* ===== People Also Ask Section ===== */}
        <section className="mt-24 pt-16 border-t-2 border-yellow-100">
          <h2 className="text-4xl font-black mb-12 text-gray-900 text-center tracking-tight">People Also Ask</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { q: "What are 5 symptoms of anxiety?", a: "1. Physical tension (jaw clenching, tight shoulders). 2. Rapid, shallow breathing. 3. Intrusive, repetitive thoughts. 4. Persistent fatigue despite sleeping. 5. A constant sense of 'dread' without a clear cause." },
              { q: "What to do when you're anxious?", a: "Engage the parasympathetic nervous system via 'box breathing' (inhale 4s, hold 4s, exhale 4s, hold 4s). Ground yourself using the 5-4-3-2-1 method: name 5 things you see, 4 you feel, 3 you hear, 2 you smell, and 1 you taste." },
              { q: "Can I live a normal life with anxiety?", a: "Yes. Anxiety is a chronic condition for many, but it is not a life sentence. With tools like therapy and possibly medication, individuals lead highly successful careers." },
              { q: "When does worry become a disorder?", a: "Worry becomes a clinical disorder when it is 'maladaptive'—meaning it prevents you from functioning at work, school, or in your personal life for six months or longer." }
            ].map((item, idx) => (
              <div key={idx} className="bg-[#FFFCF0] p-8 rounded-3xl border border-[#FEF3C7]">
                <h3 className="font-bold text-[#8A6D3B] text-xl mb-4">{item.q}</h3>
                <p className="text-gray-700 text-justify">{item.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ===== Final CTA Section ===== */}
        <div className="mt-24 text-center">
          <div className="p-12 bg-gradient-to-br from-[#FACC15] to-[#E1C16E] rounded-[4rem] text-white shadow-xl">
            <h2 className="text-3xl md:text-5xl font-black mb-6">Do you want to manage anxiety?</h2>
            <p className="text-xl md:text-2xl font-light mb-10 opacity-90">We are here to help you navigate your journey to peace.</p>
            <button 
              onClick={() => setIsModalOpen(true)}
              className="bg-white text-gray-900 px-10 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-all shadow-lg"
            >
              Book an Appointment
            </button>
          </div>
        </div>
      </motion.section>

      {/* ===== Selection Modal ===== */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-black/50 backdrop-blur-sm">
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white p-8 md:p-12 rounded-[2rem] shadow-2xl max-w-md w-full text-center"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Select Your Option</h3>
              <p className="text-gray-600 mb-8">How would you like to proceed with your payment?</p>
              
              <div className="flex flex-col gap-4">
                <button 
                  onClick={() => router.push('/insurances')}
                  className="w-full py-4 bg-[#FACC15] text-gray-900 font-bold rounded-xl hover:bg-[#eab308] transition-colors"
                >
                  Insurance
                </button>
                <button 
                  onClick={() => router.push('/selfpay')}
                  className="w-full py-4 bg-gray-100 text-gray-900 font-bold rounded-xl hover:bg-gray-200 transition-colors"
                >
                  Self Pay
                </button>
                <button 
                  onClick={() => setIsModalOpen(false)}
                  className="mt-4 text-gray-400 hover:text-gray-600 text-sm font-medium"
                >
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