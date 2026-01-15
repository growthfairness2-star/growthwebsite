"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

/** * SEO CONFIGURATION 
 * Optimized for 2026 self-compassion, cognitive behavioral therapy, and inner critic management.
 */
const metadata = {
  title: "Practical Steps to Stop Self-Criticism and Build Healthier Self-Talk",
  description: "A clinical guide to silencing your inner critic. Learn evidence-based strategies from CBT and ACT to foster self-compassion and mental resilience.",
  keywords: [
    "stop self-criticism 2026", 
    "build healthy self-talk", 
    "how to silence inner critic", 
    "self-compassion techniques", 
    "cognitive behavioral therapy for self-esteem", 
    "overcoming negative self-talk", 
    "mental health resilience"
  ],
  image: "/blog332.png", 
  url: "https://growthfairness.com/blog/practical-steps-to-stop-self-criticism-and-build-healthier-self-talk",
  publishedDate: "January 18, 2026"
};

export default function SelfTalkBlog() {
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
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-black mb-5 leading-tight text-gray-900 break-words">
            Stop Self-Criticism <br className="hidden lg:block" /> and Build 
            <span
              className="font-light italic block mt-1"
              style={{
                background: "linear-gradient(90deg, #EAB308, #FACC15)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Healthier Self-Talk
            </span>
          </h1>

          <p className="text-gray-600 text-base sm:text-lg font-light leading-relaxed text-justify max-w-xl">
            Self-criticism is often a misguided protection mechanism. By learning to observe your thoughts rather than becoming them, you can build a more supportive internal dialogue.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
          className="w-full md:w-1/2 h-[250px] sm:h-[350px] md:h-[60vh] relative"
        >
          <Image
            src={metadata.image}
            alt="Gentle self-reflection and positive inner growth"
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
            The way you speak to yourself matters. You are the only person who is listening to your internal narrative 24 hours a day. Make it a safe place to be.
          </p>

          <section className="mb-12">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">Understanding the Root of the Inner Critic</h2>
            <p className="mb-6 text-justify leading-relaxed">
              In clinical psychology, we often view self-criticism as a "survival strategy" that has outlived its usefulness. Many people develop a harsh inner critic in childhood or early adulthood as a way to "beat others to the punch." The logic is simple but flawed: if I am hard on myself, I will work harder, make fewer mistakes, and prevent others from criticizing me. 
            </p>
            <p className="mb-6 text-justify leading-relaxed">
              However, neurologically, self-criticism activates the **threat-defense system** (the amygdala). When you criticize yourself, you are both the attacker and the attacked. This leads to an increase in cortisol and a decrease in dopamine, which actually hinders your ability to learn from mistakes or stay motivated. To stop this cycle, we must move from a threat-based mindset to a **care-provider mindset**.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">Cognitive Defusion: You Are Not Your Thoughts</h2>
            <p className="mb-6 text-justify leading-relaxed">
              A core tenet of Acceptance and Commitment Therapy (ACT) is the concept of **Cognitive Defusion**. Most of us are "fused" with our self-criticism—we believe the thoughts are absolute truths. If the voice says, "You're a failure," we feel like a failure.
            </p>
            <p className="mb-6 text-justify leading-relaxed">
              The first step to healthier self-talk is creating space between yourself and the critic. Instead of thinking, "I'm incompetent," practice saying, "I am having the thought that I am incompetent." This subtle shift recognizes that thoughts are just mental events—temporary strings of words—not objective reality.
            </p>
          </section>

          

          <section className="mb-12">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6 border-b-4 border-[#FACC15] inline-block">
              Daily Compassion Protocols
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
              <div className="bg-white p-6 rounded-xl border border-yellow-100 shadow-sm">
                <h3 className="text-base sm:text-lg font-bold mb-4 text-[#A16207]">1. The 'Best Friend' Reframe</h3>
                <p className="text-gray-700 text-justify text-sm">
                  When you notice a self-critical thought, ask yourself: "Would I say this to a dear friend in the exact same situation?" We are almost always more compassionate to others than to ourselves. Using this perspective allows you to tap into your natural empathy and apply it internally.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl border border-yellow-100 shadow-sm">
                <h3 className="text-base sm:text-lg font-bold mb-4 text-[#A16207]">2. Naming the Critic</h3>
                <p className="text-gray-700 text-justify text-sm">
                  Give your inner critic a name—something slightly ridiculous, like "The Grump" or "Mr. Perfection." When the voice starts, you can internally say, "Oh, there goes The Grump again, trying to keep me safe by being mean." This personification makes the critic feel less authoritative.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-12 bg-yellow-50/50 p-6 sm:p-10 rounded-2xl sm:rounded-3xl border border-yellow-100">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-8">Somatic Self-Soothing Techniques</h2>
            <p className="mb-6 text-justify">Self-criticism is felt in the body. Use these physical "anchors" to calm your nervous system when the inner voice gets loud.</p>
            
            <div className="space-y-4">
              {[
                { title: "Supportive Touch", content: "Place a hand over your heart or your cheek. This physical contact triggers the release of oxytocin, which counteracts the stress of self-judgment and signals safety to the brain." },
                { title: "The Compassionate Breath", content: "Inhale while thinking 'In' and exhale while thinking 'Kindness.' Focusing on the physical rhythm of the breath pulls you out of the abstract mental loop and back into the present moment." },
                { title: "Vertical Grounding", content: "Imagine a thread pulling you upward from the crown of your head while your feet feel heavy on the floor. An upright, open posture is incompatible with the 'shame' posture of a person under attack." }
              ].map((item, idx) => (
                <div key={idx} className="bg-white p-5 rounded-xl shadow-sm border border-gray-100">
                  <h4 className="font-bold text-[#CA8A04] text-base mb-2">{item.title}</h4>
                  <p className="text-justify text-sm">{item.content}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">Transitioning to Functional Self-Talk</h2>
            <p className="mb-6 text-justify leading-relaxed">
              The goal isn't necessarily "positive thinking," which can often feel fake or forced. Instead, aim for **Functional Thinking**. 
            </p>
            <p className="mb-6 text-justify leading-relaxed">
              Instead of moving from "I'm a failure" to "I'm the best," try moving to "I made a mistake, and I am a human who is learning." Functional self-talk is rooted in evidence and problem-solving. It acknowledges the difficulty of a situation without attacking the person facing it. Over time, these small shifts in language re-wire the neural pathways of your brain, making compassion the "default" setting rather than criticism.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">Self-Talk Audit Checklist</h2>
            <div className="w-full overflow-hidden rounded-xl border border-gray-200 mt-6">
              <div className="overflow-x-auto">
                <table className="w-full min-w-[600px] text-left border-collapse">
                  <thead>
                    <tr className="bg-[#EAB308] text-white">
                      <th className="p-4 border-b border-yellow-700">The Critical Statement</th>
                      <th className="p-4 border-b border-yellow-700">The Cognitive Distortion</th>
                      <th className="p-4 border-b border-yellow-700">The Healthy Reframe</th>
                    </tr>
                  </thead>
                  <tbody className="text-sm">
                    <tr>
                      <td className="p-4 border-b border-gray-100 font-bold">"I always mess this up."</td>
                      <td className="p-4 border-b border-gray-100">Overgeneralization</td>
                      <td className="p-4 border-b border-gray-100">"This specific task is challenging today."</td>
                    </tr>
                    <tr className="bg-yellow-50/30">
                      <td className="p-4 border-b border-gray-100 font-bold">"Everyone thinks I'm weird."</td>
                      <td className="p-4 border-b border-gray-100 italic">Mind Reading</td>
                      <td className="p-4 border-b border-gray-100 italic">"I don't actually know what they think."</td>
                    </tr>
                    <tr>
                      <td className="p-4 border-b border-gray-100 font-bold">"I should be doing more."</td>
                      <td className="p-4 border-b border-gray-100 font-bold">"Should" Statement</td>
                      <td className="p-4 border-b border-gray-100">"I am doing the best I can right now."</td>
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
            Self-Criticism & Self-Talk FAQ
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8">
            {[
              { q: "Is self-criticism ever a good motivator?", a: "Short-term, yes (fear works). Long-term, no. It leads to burnout and anxiety, whereas self-compassion fosters sustainable growth and learning." },
              { q: "How do I stop 'automatic' negative thoughts?", a: "You don't stop them from appearing, but you can stop them from staying. Use the 'Labeling' technique to recognize them as just thoughts." },
              { q: "Why do I feel 'fake' when saying kind things to myself?", a: "This is normal. Your brain is used to the 'critic' pathway. If positive talk feels fake, try 'neutral' talk like 'I am having a hard time, and that's okay.'" },
              { q: "Is self-compassion the same as being lazy?", a: "Actually, it's the opposite. People with high self-compassion are more likely to take responsibility for their mistakes because they aren't terrified of self-punishment." },
              { q: "What is the 'Inner Critic' trying to achieve?", a: "Usually, its goal is safety. It thinks if it points out every flaw, you won't be caught off guard by the judgment of others." },
              { q: "Can childhood experiences cause self-criticism?", a: "Yes. If we grew up with hyper-critical caregivers, we often internalize that voice as a way to predict and navigate our environment." },
              { q: "How long does it take to change self-talk?", a: "Neurological pathways take time. With daily practice, most people notice a significant shift in their internal tone within 8 to 12 weeks." },
              { q: "Does journaling help with self-criticism?", a: "Yes. Writing down your thoughts allows you to look at them objectively, making it easier to identify distortions and find reframes." },
              { q: "What if I can't think of anything kind to say?", a: "Start with physical kindness. A warm shower, a cup of tea, or five minutes of rest is a way of saying 'you deserve care' without words." },
              { q: "When should I seek therapy for my inner critic?", a: "If the voice leads to self-harm, deep depression, or prevents you from functioning in your daily life, professional support is highly recommended." }
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
            <h2 className="text-xl sm:text-3xl font-black mb-4">You are your own best ally.</h2>
            <p className="text-sm sm:text-lg font-light mb-8 opacity-90">
              Transforming your inner world starts with a single kind word. Let's work together to help you build the self-talk you deserve.
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