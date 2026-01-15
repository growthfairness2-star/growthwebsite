"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

/** * SEO CONFIGURATION 
 * Optimized for 2026 social anxiety management, public confidence, and exposure therapy.
 */
const metadata = {
  title: "Practical Ways to Reduce Social Anxiety and Feel More Confident in Public",
  description: "A comprehensive clinical guide on overcoming social anxiety. Learn evidence-based strategies to navigate public spaces with confidence and ease.",
  keywords: [
    "practical ways to reduce social anxiety", 
    "confidence in public 2026", 
    "social anxiety exposure therapy", 
    "how to stop social anxiety", 
    "cognitive reframing for social fear", 
    "public speaking anxiety tips", 
    "socially anxious to confident"
  ],
  image: "/blog28.png", 
  url: "https://growthfairness.com/blog/practical-ways-to-reduce-social-anxiety-and-feel-more-confident-in-public",
  publishedDate: "January 14, 2026"
};

export default function SocialAnxietyBlog() {
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
            Practical Ways to Reduce <br className="hidden lg:block" /> Social Anxiety 
            <span
              className="font-light italic block mt-1"
              style={{
                background: "linear-gradient(90deg, #EAB308, #FACC15)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              and Feel More Confident
            </span>
          </h1>

          <p className="text-gray-600 text-base sm:text-lg font-light leading-relaxed text-justify max-w-xl">
            Social anxiety is a hyper-active safety mechanism. By retraining your brain's perception of "social threat," you can navigate public life with genuine ease.
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
            alt="Confidence and social ease in public settings"
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
            Confidence is not the absence of anxiety; it is the decision that your social goals are more important than your social fears.
          </p>

          <section className="mb-12 sm:mb-20">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">The Neurobiology of Social Evaluation</h2>
            <p className="mb-6 text-justify leading-relaxed">
              To understand how to reduce social anxiety, we must first understand why it exists. Social anxiety is an evolutionary survival trait. For our ancestors, being rejected by the tribe meant a loss of resources, protection, and potentially, life. Consequently, our brains developed an acute sensitivity to social feedback. In the modern world, this translates to an overactive Amygdala during simple interactions.
            </p>
            <p className="mb-6 text-justify leading-relaxed">
              When you feel anxious in public, your brain is treating a social "mistake" (like stuttering or spilling a drink) as a life-threatening predator. This results in the **Spotlight Effect**—the belief that everyone is watching and judging you. In reality, most people are suffering from their own "spotlight," focusing entirely on their own appearance and behavior.
            </p>
          </section>

          <section className="mb-12 sm:mb-20">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6 border-b-4 border-[#FACC15] inline-block">
              The Strategic Exposure Ladder
            </h2>
            <p className="mb-8 text-justify leading-relaxed">
              Curing social anxiety requires **Habituation**. This means repeatedly putting yourself in mildly stressful situations until your nervous system realizes they aren't dangerous.
            </p>

            

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
              <div className="bg-white p-6 rounded-xl border border-yellow-100 shadow-sm">
                <h3 className="text-base sm:text-lg font-bold mb-4 text-[#A16207]">Phase 1: Observation</h3>
                <p className="text-gray-700 text-justify text-sm">
                  Go to a crowded place, like a mall or park, and sit for 20 minutes. Do not look at your phone. This is a "safety behavior" that keeps you in your head. Instead, watch the crowd and notice that most people are completely unaware of your presence.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl border border-yellow-100 shadow-sm">
                <h3 className="text-base sm:text-lg font-bold mb-4 text-[#A16207]">Phase 2: Brief Verbal Contact</h3>
                <p className="text-gray-700 text-justify text-sm">
                  Engage in a "micro-interaction." Ask a store clerk for the location of an item you already see. The goal isn't to get information—it's to practice the physical act of speaking while your heart rate is elevated.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-12 sm:mb-20 bg-yellow-50/50 p-6 sm:p-10 rounded-2xl sm:rounded-3xl border border-yellow-100">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-8">Invisible Grounding Techniques</h2>
            <p className="mb-6 text-justify">Use these somatic tools to regulate your body while in the middle of a social interaction.</p>
            
            <div className="space-y-4">
              {[
                { title: "Peripheral Expansion", content: "Broaden your vision to include the far left and right of the room. This 'soft focus' activates the parasympathetic nervous system, which is the direct opposite of the 'tunnel vision' caused by anxiety." },
                { title: "The Weight of the Feet", content: "Focus entirely on the sensation of your feet touching the ground inside your shoes. This proprioceptive input reminds your brain that you are physically grounded and safe in the present space." },
                { title: "Diaphragmatic Pacing", content: "Take slow, shallow breaths into your belly rather than your chest. Chest breathing signals 'danger' to the brain, while belly breathing signals 'rest'." }
              ].map((item, idx) => (
                <div key={idx} className="bg-white p-5 rounded-xl shadow-sm border border-gray-100">
                  <h4 className="font-bold text-[#CA8A04] text-base mb-2">{item.title}</h4>
                  <p className="text-justify text-sm">{item.content}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-12 sm:mb-20">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">Cognitive Reframing</h2>
            <p className="mb-6 text-justify leading-relaxed">
              When we are socially anxious, we treat our thoughts as facts. If we think "I look stupid," we believe we *actually* look stupid. Clinical recovery involves **Cognitive Restructuring**: challenging these thoughts with evidence.
            </p>
            <p className="mb-6 text-justify leading-relaxed">
              Instead of "Mind Reading" (assuming you know what others think), practice "Fact-Checking." Ask yourself: "What evidence do I have that this person is judging me?" Usually, the evidence is zero. By moving from a mindset of a victim to that of a curious scientist, you reduce the emotional weight of public interactions.
            </p>
          </section>

          <section className="mb-12 sm:mb-20">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">Confidence Habit Checklist</h2>
            <div className="w-full overflow-hidden rounded-xl border border-gray-200 mt-6">
              <div className="overflow-x-auto">
                <table className="w-full min-w-[500px] text-left border-collapse">
                  <thead>
                    <tr className="bg-[#EAB308] text-white">
                      <th className="p-3 border-b border-yellow-700">Preparation</th>
                      <th className="p-3 border-b border-yellow-700">During Event</th>
                      <th className="p-3 border-b border-yellow-700">Reflection</th>
                    </tr>
                  </thead>
                  <tbody className="text-sm">
                    <tr>
                      <td className="p-3 border-b border-gray-100 font-bold">Posture Check (Open)</td>
                      <td className="p-3 border-b border-gray-100">External Focus (Listen)</td>
                      <td className="p-3 border-b border-gray-100">No Self-Criticism</td>
                    </tr>
                    <tr className="bg-yellow-50/30">
                      <td className="p-3 border-b border-gray-100 font-bold">Accept the Anxiety</td>
                      <td className="p-3 border-b border-gray-100 italic">3-Second Eye Contact</td>
                      <td className="p-3 border-b border-gray-100 italic">Celebrate the Effort</td>
                    </tr>
                    <tr>
                      <td className="p-3 border-b border-gray-100 font-bold">Limit Caffeine</td>
                      <td className="p-3 border-b border-gray-100 font-bold">Speak Clearly (Slowly)</td>
                      <td className="p-3 border-b border-gray-100">Plan a Reward</td>
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
            Social Anxiety & Confidence FAQ
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8">
            {[
              { q: "Is social anxiety just shyness?", a: "No. Shyness is a personality trait; social anxiety is a clinical fear that can prevent you from working or forming relationships." },
              { q: "How long does it take to see progress?", a: "With consistent exposure work and therapy, many people notice a significant reduction in public anxiety within 8 to 12 weeks." },
              { q: "Why do I feel hot or shaky?", a: "Adrenaline redirects blood flow to your muscles and skin, preparing you to run. This causes the physical symptoms of flushing and trembling." },
              { q: "What is the best way to stop ruminating after a party?", a: "Focus on 'The Five-Minute Rule.' Allow yourself five minutes to reflect, then deliberately switch to a different, engaging task." },
              { q: "Do social skills workshops help?", a: "Yes, because they provide a safe, structured environment to practice interactions and receive positive reinforcement." },
              { q: "Can I use alcohol to cope?", a: "Relying on 'liquid courage' is a safety behavior that prevents your brain from learning that you are safe while sober. It often increases anxiety the next day." },
              { q: "How do I deal with 'awkward silences'?", a: "Accept that silence is a natural part of conversation. Often, the other person is also thinking of what to say next." },
              { q: "Is social anxiety hereditary?", a: "There is a genetic component, but it is also heavily influenced by environment and early social experiences." },
              { q: "Should I tell my boss about my anxiety?", a: "This depends on your workplace culture, but many find that being open about their needs allows for helpful accommodations." },
              { q: "Will I ever be 100% anxiety-free?", a: "The goal isn't to have zero anxiety, but to have so much confidence in your ability to handle anxiety that it no longer stops you." }
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
            <h2 className="text-xl sm:text-3xl font-black mb-4">You deserve to be seen.</h2>
            <p className="text-sm sm:text-lg font-light mb-8 opacity-90">
              Social anxiety doesn't have to define your public life. Let's work together to unlock your natural confidence.
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