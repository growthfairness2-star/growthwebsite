"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

/** * SEO CONFIGURATION 
 * Optimized for 2026 emotional regulation, anger management, and relationship health.
 */
const metadata = {
  title: "How to Manage Anger and Irritability in Healthy Respectful Ways",
  description: "Anger is a natural emotion that signals a boundary has been crossed. Learn clinical techniques to process irritability and communicate with respect.",
  keywords: [
    "manage anger and irritability 2026", 
    "healthy anger expression", 
    "emotional regulation techniques", 
    "conflict resolution skills", 
    "coping with irritability", 
    "respectful communication", 
    "calming the nervous system"
  ],
  image: "/blog22.png", 
  url: "https://growthfairness.com/blog/how-to-manage-anger-and-irritability-in-healthy-respectful-ways",
  publishedDate: "January 8, 2026"
};

export default function AngerManagementBlog() {
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
          <p className="text-[#A16207] font-bold tracking-widest uppercase text-sm mb-4">
            Published: {metadata.publishedDate}
          </p>
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-black mb-6 leading-tight text-gray-900 break-words">
            How to Manage Anger <br />
            <span
              className="font-light italic"
              style={{
                background: "linear-gradient(90deg, #EAB308, #FACC15)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              and Irritability in Healthy Respectful Ways
            </span>
          </h1>

          <p className="text-gray-600 text-lg sm:text-xl font-light leading-relaxed text-justify">
            Anger is not a villainous emotion but a protective one. It tells us when our values are being threatened or our boundaries are being ignored. The goal is not to stop feeling anger but to learn how to lead it.
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
            alt="Calm water representing emotional balance and self control"
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
            Emotional intelligence is the ability to feel the fire of anger without letting it burn down your relationships. True strength is found in the pause between the impulse and the action.
          </p>

          <section className="mb-12 sm:mb-20">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">The Biology of Irritability</h2>
            <p className="mb-6 text-justify leading-relaxed">
              When we experience anger the brain undergoes a rapid shift. The amygdala triggers the release of adrenaline and cortisol which prepares the body for a fight. In this state the prefrontal cortex which handles logic and reasoning becomes less active. This is why we often say things we regret when we are angry because our higher brain functions are literally being bypassed by our survival instincts.
            </p>
            <p className="mb-6 text-justify leading-relaxed">
              Irritability is often a lower level version of this response. It can be caused by sensory overload or lack of sleep or even deep seated frustration that has not been addressed. By 2026 we view irritability as a signal that the nervous system is reaching its capacity. If we do not listen to this signal it often escalates into full blown rage.
            </p>
            <p className="mb-6 text-justify leading-relaxed">
              Managing these emotions requires a two pronged approach. We must address the immediate physiological arousal while also investigating the underlying triggers that cause the reaction in the first place.
            </p>
          </section>

          <section className="mb-12 sm:mb-20">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 border-b-4 border-[#FACC15] inline-block">
              Strategies for Respectful Regulation
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
              <div className="bg-white">
                <h3 className="text-lg sm:text-xl font-bold mb-4 text-[#A16207]">1. The Strategic Pause</h3>
                <p className="text-gray-700 text-justify">
                  When you feel the physical signs of anger like a tight chest or hot face you must implement a pause. This is not about avoiding the conflict but about giving your prefrontal cortex time to come back online. A simple five minute walk can be enough to shift from a reactive state to a responsive one.
                </p>
              </div>

              <div className="bg-white">
                <h3 className="text-lg sm:text-xl font-bold mb-4 text-[#A16207]">2. Reframing the Trigger</h3>
                <p className="text-gray-700 text-justify">
                  Often our anger is fueled by the stories we tell ourselves about why someone did something. Shifting from they are trying to annoy me to they might be having a hard day changes the emotional chemistry of the moment. Curiosity is the most effective natural antidote to anger.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-12 sm:mb-20 bg-yellow-50/50 p-5 sm:p-10 rounded-2xl sm:rounded-3xl border border-yellow-100">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8">Clinical Pathways to Calm</h2>
            
            <div className="space-y-4 sm:space-y-8">
              {[
                { title: "Somatic Grounding", content: "Anger is felt in the body before the mind. We teach patients how to use physical anchors like weighted pressure or temperature shifts to signal to the brain that the threat is not immediate." },
                { title: "Non Violent Communication", content: "Effective communication starts with identifying the underlying need. We help you move from blaming language to I statements that focus on your feelings and specific requests for change." },
                { title: "Values Based Response", content: "Who do you want to be in your most difficult moments. We work on aligning your reactions with your core values so that you can look back on your behavior with pride rather than shame." }
              ].map((item, idx) => (
                <div key={idx} className="bg-white p-5 rounded-xl shadow-sm border border-gray-100">
                  <h4 className="font-bold text-[#CA8A04] text-lg mb-2">{item.title}</h4>
                  <p className="text-justify text-sm sm:text-base">{item.content}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-12 sm:mb-20">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">Navigating the Anger Spectrum</h2>
            
            <div className="w-full overflow-hidden rounded-xl border border-gray-200 mt-6">
              <div className="overflow-x-auto">
                <table className="w-full min-w-[500px] text-left border-collapse">
                  <thead>
                    <tr className="bg-[#EAB308] text-white">
                      <th className="p-3 sm:p-4 border-b border-yellow-700">Stage</th>
                      <th className="p-3 sm:p-4 border-b border-yellow-700">Physical Sign</th>
                      <th className="p-3 sm:p-4 border-b border-yellow-700">Healthy Action</th>
                    </tr>
                  </thead>
                  <tbody className="text-sm sm:text-base">
                    <tr>
                      <td className="p-3 sm:p-4 border-b border-gray-100 font-bold">Annoyance</td>
                      <td className="p-3 sm:p-4 border-b border-gray-100">Eye rolling or sighing.</td>
                      <td className="p-3 sm:p-4 border-b border-gray-100 italic">Self check of basic needs.</td>
                    </tr>
                    <tr className="bg-yellow-50/30">
                      <td className="p-3 sm:p-4 border-b border-gray-100 font-bold">Irritability</td>
                      <td className="p-3 sm:p-4 border-b border-gray-100">Clenched jaw or muscle tension.</td>
                      <td className="p-3 sm:p-4 border-b border-gray-100 italic">Sensory reduction or rest.</td>
                    </tr>
                    <tr>
                      <td className="p-3 sm:p-4 border-b border-gray-100 font-bold">Anger</td>
                      <td className="p-3 sm:p-4 border-b border-gray-100">Increased heart rate.</td>
                      <td className="p-3 sm:p-4 border-b border-gray-100 italic">Immediate strategic pause.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </section>
        </div>

        {/* ===== People Also Ask (10 FAQs) ===== */}
        <section className="mt-16 sm:mt-24 pt-12 border-t border-yellow-100">
          <h2 className="text-2xl sm:text-4xl font-black mb-10 text-gray-900 text-center">
            Anger & Irritability FAQ
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8">
            {[
              { q: "Is it healthy to suppress my anger", a: "No. Suppression often leads to physical health issues or passive aggressive behavior. The goal is to express it in a controlled and constructive way." },
              { q: "Why am I suddenly so irritable with my family", a: "We are often most irritable with those we feel safest with. It can also be a sign of hidden stress or burnout that is leaking into your home life." },
              { q: "Does exercise help with anger", a: "Yes. Intense physical activity can help process the adrenaline and cortisol that build up during an angry episode." },
              { q: "What should I do if someone else is angry at me", a: "Maintain your own calm. Validate their feelings without necessarily agreeing with their points. If they become abusive you must set a boundary and leave the space." },
              { q: "Can diet affect my irritability", a: "Absolutely. Blood sugar crashes and excessive caffeine or lack of protein can make your nervous system much more reactive." },
              { q: "How do I teach my child to manage their anger", a: "The best way is to model healthy regulation yourself. Narrate your own process like I am feeling frustrated right now so I am going to take deep breaths." },
              { q: "Is anger a symptom of anxiety", a: "Very often. When people feel out of control or threatened they may react with anger as a way to regain a sense of power." },
              { q: "How can I apologize after an angry outburst", a: "Take full responsibility without making excuses. Acknowledge the impact of your actions and state how you plan to handle the situation differently next time." },
              { q: "What is the difference between anger and aggression", a: "Anger is an internal emotion while aggression is an external behavior intended to cause harm. You can feel angry without being aggressive." },
              { q: "When should I seek professional help for anger", a: "If your anger is causing problems in your relationships or work or if you feel like you are losing control and might hurt yourself or someone else." }
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
            <h2 className="text-2xl sm:text-4xl font-black mb-4">Master your emotions.</h2>
            <p className="text-base sm:text-xl font-light mb-8 opacity-90">
              Anger management is a skill that anyone can learn. Let us help you find a more peaceful way to live.
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