"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

/** * SEO CONFIGURATION 
 * Optimized for 2026 emotional recovery, post-conflict healing, and nervous system regulation.
 */
const metadata = {
  title: "Simple Ways to Heal Emotionally After a Hard Conversation or Conflict",
  description: "A clinical guide on recovering from the emotional drain of conflict. Learn how to regulate your nervous system and process difficult conversations.",
  keywords: [
    "heal after hard conversation", 
    "emotional recovery after conflict 2026", 
    "nervous system regulation post-argument", 
    "how to stop ruminating after a fight", 
    "emotional hangover relief", 
    "somatic healing for relationships", 
    "mental health recovery conflict"
  ],
  image: "/blog30.png", 
  url: "https://growthfairness.com/blog/simple-ways-to-heal-emotionally-after-a-hard-conversation-or-conflict",
  publishedDate: "January 16, 2026"
};

export default function ConflictRecoveryBlog() {
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
          className="w-full md:w-1/2 px-6 py-12 md:p-20 text-center md:text-left"
        >
          <p className="text-[#A16207] font-bold tracking-widest uppercase text-xs mb-3">
            Published: {metadata.publishedDate}
          </p>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black mb-5 leading-tight text-gray-900 break-words">
            Heal Emotionally <br className="hidden lg:block" /> After a Hard 
            <span
              className="font-light italic block mt-1"
              style={{
                background: "linear-gradient(90deg, #EAB308, #FACC15)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Conversation or Conflict
            </span>
          </h1>

          <p className="text-gray-600 text-base sm:text-lg font-light leading-relaxed text-justify max-w-xl">
            Conflict is biologically taxing. When the shouting stops or the heavy talk ends, your body remains in a state of high alert. Healing begins by bringing your nervous system back to safety.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
          className="w-full md:w-1/2 h-[250px] sm:h-[350px] md:h-[70vh] relative"
        >
          <Image
            src={metadata.image}
            alt="Emotional healing and peace after a difficult interaction"
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
          
          <p className="text-lg sm:text-xl leading-relaxed mb-10 font-serif italic border-l-4 sm:border-l-8 border-[#EAB308] pl-4 sm:pl-8 text-gray-700 text-justify">
            The "emotional hangover" is real. It is the physiological residue of adrenaline and cortisol that lingers long after the words have been spoken.
          </p>

          <section className="mb-12 sm:mb-20">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">Phase 1: Physiological De-escalation</h2>
            <p className="mb-6 text-justify leading-relaxed">
              During a hard conversation, your body enters a state of **Sympathetic Nervous System** arousal. Your heart rate increases, your breathing becomes shallow, and your muscles tense. Even after the conversation ends, your brain may remain in "defense mode," scanning for further threats.
            </p>
            <p className="mb-6 text-justify leading-relaxed">
              The first step in healing is to signal to your body that the threat has passed. This is not a time for logic; it is a time for somatic intervention. Engaging in "low and slow" breathing or light movement helps flush the excess cortisol from your system, allowing your Prefrontal Cortex to come back online so you can process the event rationally.
            </p>
          </section>

          <section className="mb-12 sm:mb-20">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6 border-b-4 border-[#FACC15] inline-block">
              Immediate Post-Conflict Steps
            </h2>
            <p className="mb-8 text-justify leading-relaxed">
              Use the "Triple-A" approach to manage the first 60 minutes after a difficult interaction. This prevents the conflict from turning into a long-term emotional wound.
            </p>

            

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
              <div className="bg-white p-6 rounded-xl border border-yellow-100 shadow-sm">
                <h3 className="text-base sm:text-lg font-bold mb-4 text-[#A16207]">Acknowledge the Drain</h3>
                <p className="text-gray-700 text-justify text-sm">
                  Do not jump immediately into another complex task. Acknowledge that your "emotional battery" is at 5%. Give yourself permission to be "unproductive" for an hour. This reduces the secondary stress of trying to perform while dysregulated.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl border border-yellow-100 shadow-sm">
                <h3 className="text-base sm:text-lg font-bold mb-4 text-[#A16207]">Anchor the Body</h3>
                <p className="text-gray-700 text-justify text-sm">
                  Drink a glass of cold water or take a brief walk. Physical sensations pull you out of the "mental replay" loop. The goal is to move from the abstract pain of the conversation back into the concrete reality of your physical surroundings.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-12 sm:mb-20 bg-yellow-50/50 p-6 sm:p-10 rounded-2xl sm:rounded-3xl border border-yellow-100">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-8">Somatic Recovery Tools</h2>
            <p className="mb-6 text-justify">These techniques help "reset" your Vagus nerve, which is often overstimulated during a conflict.</p>
            
            <div className="space-y-4">
              {[
                { title: "The Physiological Sigh", content: "Take a deep breath in through the nose, followed by a second short 'pop' of air at the very top, then a long, slow exhale through the mouth. Doing this 3 times is the fastest way to offload carbon dioxide and lower your heart rate." },
                { title: "Constructive Rest Position", content: "Lie on your back with your knees bent and feet flat on the floor. This position allows the Psoas muscle (the 'fight or flight' muscle) to release tension that was held during the hard conversation." },
                { title: "Weighted Pressure", content: "Use a weighted blanket or place a heavy pillow on your chest. Deep pressure touch therapy triggers the release of oxytocin and dopamine, counteracting the stress hormones from the conflict." }
              ].map((item, idx) => (
                <div key={idx} className="bg-white p-5 rounded-xl shadow-sm border border-gray-100">
                  <h4 className="font-bold text-[#CA8A04] text-base mb-2">{item.title}</h4>
                  <p className="text-justify text-sm">{item.content}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-12 sm:mb-20">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">Phase 2: Ending the Rumination Loop</h2>
            <p className="mb-6 text-justify leading-relaxed">
              Once the body is calm, the mind often takes over with **Post-Event Processing**. This is the habit of replaying the conversation, thinking of what you "should" have said, or obsessing over the other person's tone.
            </p>
            <p className="mb-6 text-justify leading-relaxed">
              To stop this, practice **Cognitive Compartmentalization**. Tell yourself: "I will think about this for 15 minutes at 6:00 PM, but not right now." If the thought returns, gently remind yourself that it has a scheduled time. This gives your brain a sense of control and prevents the conflict from bleeding into the rest of your day.
            </p>
          </section>

          <section className="mb-12 sm:mb-20">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">Conflict Recovery Checklist</h2>
            <div className="w-full overflow-hidden rounded-xl border border-gray-200 mt-6">
              <div className="overflow-x-auto">
                <table className="w-full min-w-[500px] text-left border-collapse">
                  <thead>
                    <tr className="bg-[#EAB308] text-white">
                      <th className="p-3 border-b border-yellow-700">Action Type</th>
                      <th className="p-3 border-b border-yellow-700">Recommended Task</th>
                      <th className="p-3 border-b border-yellow-700">Psychological Benefit</th>
                    </tr>
                  </thead>
                  <tbody className="text-sm">
                    <tr>
                      <td className="p-3 border-b border-gray-100 font-bold">Physical</td>
                      <td className="p-3 border-b border-gray-100">Warm bath or shower.</td>
                      <td className="p-3 border-b border-gray-100">Soothes muscle tension.</td>
                    </tr>
                    <tr className="bg-yellow-50/30">
                      <td className="p-3 border-b border-gray-100 font-bold">Environmental</td>
                      <td className="p-3 border-b border-gray-100 italic">Change your physical room.</td>
                      <td className="p-3 border-b border-gray-100 italic">Breaks the mental association.</td>
                    </tr>
                    <tr>
                      <td className="p-3 border-b border-gray-100 font-bold">Social</td>
                      <td className="p-3 border-b border-gray-100 font-bold">Talk to a "Neutral" third party.</td>
                      <td className="p-3 border-b border-gray-100">Gains objective perspective.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </section>
        </div>

        {/* ===== FAQ Section (10 Questions) ===== */}
        <section className="mt-16 sm:mt-24 pt-12 border-t border-yellow-100">
          <h2 className="text-xl sm:text-3xl font-black mb-10 text-gray-900 text-center">
            Conflict Recovery FAQ
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8">
            {[
              { q: "Why do I feel so tired after a hard talk?", a: "Your body used a massive amount of glucose and oxygen during 'fight or flight.' This is a natural energy crash." },
              { q: "How long does an emotional hangover last?", a: "Typically 2 to 24 hours, depending on the intensity of the conflict and your existing stress levels." },
              { q: "Should I apologize immediately?", a: "Not necessarily. If you are still dysregulated, your apology might not be genuine. Wait until your heart rate is normal." },
              { q: "Why can't I stop replaying the fight?", a: "This is 'rumination.' Your brain is trying to find a solution or a way to protect you in the future." },
              { q: "Is it okay to go to sleep angry?", a: "Recent research suggests that 'never go to bed angry' is outdated. Sleep can actually help process emotions and reduce reactivity." },
              { q: "What if the other person won't talk?", a: "Focus on your own regulation. You cannot control their timing, only your own internal state." },
              { q: "Does writing it down help?", a: "Yes. Journaling moves the conflict from the emotional right brain to the logical left brain, helping you make sense of it." },
              { q: "Why do I feel shaky or cold?", a: "As adrenaline leaves the system, your blood vessels constrict and your muscles release, which can cause 'the shakes' or chills." },
              { q: "When is a conflict 'unhealthy'?", a: "If it involves name-calling, threats, or physical intimidation, it has moved from conflict to toxicity and requires professional intervention." },
              { q: "How do I bring it up again later?", a: "Use 'I' statements and focus on the future solution rather than re-litigating the past mistakes." }
            ].map((item, idx) => (
              <div key={idx} className="bg-yellow-50/30 p-6 rounded-2xl border border-yellow-100">
                <h3 className="font-bold text-[#A16207] text-sm mb-3">{item.q}</h3>
                <p className="text-gray-700 text-xs sm:text-sm text-justify">{item.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ===== CTA ===== */}
        <div className="mt-16 sm:mt-24 text-center">
          <div className="p-8 sm:p-12 bg-gradient-to-br from-[#EAB308] to-[#FACC15] rounded-[2rem] sm:rounded-[3rem] text-white shadow-lg">
            <h2 className="text-xl sm:text-3xl font-black mb-4">Protect your peace.</h2>
            <p className="text-sm sm:text-lg font-light mb-8 opacity-90">
              Difficult conversations are part of life, but staying stuck in the pain doesn't have to be. Let's build your resilience.
            </p>

            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-white text-gray-900 px-8 py-3 rounded-full font-bold text-sm hover:bg-yellow-50 transition-all active:scale-95"
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
              <h3 className="text-lg font-bold text-gray-900 mb-6">Select an Option</h3>
              <div className="flex flex-col gap-3">
                <button onClick={() => router.push('/insurances')} className="w-full py-4 bg-[#EAB308] text-white font-bold rounded-xl active:bg-[#CA8A04]">
                  Check Insurance
                </button>
                <button onClick={() => router.push('/selfpay')} className="w-full py-4 bg-gray-100 text-gray-900 font-bold rounded-xl active:bg-gray-200">
                  Self-Pay Rates
                </button>
                <button onClick={() => setIsModalOpen(false)} className="mt-2 text-gray-400 text-xs">
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