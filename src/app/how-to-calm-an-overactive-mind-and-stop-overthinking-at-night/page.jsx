"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

/** * SEO CONFIGURATION 
 * Optimized for 2026 sleep health, cognitive behavioral tools, and evening anxiety.
 */
const metadata = {
  title: "How to Calm an Overactive Mind and Stop Overthinking at Night",
  description: "Nighttime rumination can steal your rest. Discover clinical techniques to quiet an overactive mind and establish a peaceful transition to sleep.",
  keywords: [
    "stop overthinking at night 2026", 
    "calm an overactive mind", 
    "sleep anxiety relief", 
    "nighttime rumination tools", 
    "cognitive shuffles for sleep", 
    "mindfulness for insomnia", 
    "evening mental health"
  ],
  image: "/blog26.png", 
  url: "https://growthfairness.com/blog/how-to-calm-an-overactive-mind-and-stop-overthinking-at-night",
  publishedDate: "January 12, 2026"
};

export default function OverthinkingSleepBlog() {
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
            How to Calm an <br />
            <span
              className="font-light italic"
              style={{
                background: "linear-gradient(90deg, #EAB308, #FACC15)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Overactive Mind & Stop Nighttime Overthinking
            </span>
          </h1>

          <p className="text-gray-600 text-lg sm:text-xl font-light leading-relaxed text-justify">
            The silence of the night often amplifies the noise of the mind. When external distractions vanish your brain may default to scanning for problems that cannot be solved at midnight.
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
            alt="Soft moonlit room symbolizing mental peace and deep rest"
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
            Sleep is not a switch you flip but a landing you prepare for. By learning to manage your cognitive load before bed you allow your nervous system to transition safely into rest.
          </p>

          <section className="mb-12 sm:mb-20">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">The Neurobiology of Midnight Worry</h2>
            <p className="mb-6 text-justify leading-relaxed">
              In 2026 we recognize that nighttime rumination is often linked to the drop in executive function that occurs at the end of the day. Your prefrontal cortex is tired and less capable of filtering out intrusive thoughts. Meanwhile the amygdala remains vigilant especially if you have been in a state of high stress. This creates a loop where the mind identifies a concern and the body responds with a cortisol spike which makes falling asleep nearly impossible.
            </p>
            <p className="mb-6 text-justify leading-relaxed">
              Overthinking at night is rarely about finding solutions and is almost always a symptom of an unregulated nervous system. The brain is attempting to achieve a sense of safety by rehearsing every possible negative outcome. To break this cycle we must move the focus from the content of the thoughts to the physiological state of the body.
            </p>
            <p className="mb-6 text-justify leading-relaxed">
              We use clinical techniques to help patients differentiate between productive thinking and unproductive rumination. By implementing specific cognitive and somatic boundaries you can train your brain to recognize that the night is a time for recovery rather than resolution.
            </p>
          </section>

          <section className="mb-12 sm:mb-20">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 border-b-4 border-[#FACC15] inline-block">
              Practical Tools for Mental Quiet
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
              <div className="bg-white">
                <h3 className="text-lg sm:text-xl font-bold mb-4 text-[#A16207]">1. The Brain Dump Method</h3>
                <p className="text-gray-700 text-justify">
                  Transfer your thoughts from your head to paper at least two hours before sleep. Writing down your to do list or your worries signals to the brain that the information is saved and does not need to be actively rehearsed. This simple externalization lowers cognitive load and reduces the need for nighttime reminders.
                </p>
              </div>

              <div className="bg-white">
                <h3 className="text-lg sm:text-xl font-bold mb-4 text-[#A16207]">2. Cognitive Shuffling</h3>
                <p className="text-gray-700 text-justify">
                  When you are in bed and your mind starts to race use a cognitive shuffle. Picture random and unrelated images like a green apple then a wooden chair then a sailing boat. This prevents the brain from following a logical and anxiety inducing thread and mimics the disorganized imagery of the early stages of sleep.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-12 sm:mb-20 bg-yellow-50/50 p-5 sm:p-10 rounded-2xl sm:rounded-3xl border border-yellow-100">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8">Clinical Strategies for Rest</h2>
            
            <div className="space-y-4 sm:space-y-8">
              {[
                { title: "Somatic Anchoring", content: "Use the five four three two one technique to bring your awareness back to your physical senses. Focusing on the weight of the blankets or the sound of your breath helps interrupt the loop of abstract worry." },
                { title: "Worry Scheduling", content: "Assign a specific time during the day purely for worrying. When a thought arises at night tell yourself I will address this at ten tomorrow morning. This gives the thought a place to go without letting it dominate your rest." },
                { title: "Environmental Cues", content: "Your bedroom should be a sanctuary for sleep. We work on optimizing your space by removing digital triggers and using low light to signal to your brain that the day is officially over." }
              ].map((item, idx) => (
                <div key={idx} className="bg-white p-5 rounded-xl shadow-sm border border-gray-100">
                  <h4 className="font-bold text-[#CA8A04] text-lg mb-2">{item.title}</h4>
                  <p className="text-justify text-sm sm:text-base">{item.content}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-12 sm:mb-20">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">The Nighttime Transition Map</h2>
            
            <div className="w-full overflow-hidden rounded-xl border border-gray-200 mt-6">
              <div className="overflow-x-auto">
                <table className="w-full min-w-[500px] text-left border-collapse">
                  <thead>
                    <tr className="bg-[#EAB308] text-white">
                      <th className="p-3 sm:p-4 border-b border-yellow-700">Timeframe</th>
                      <th className="p-3 sm:p-4 border-b border-yellow-700">Mental Goal</th>
                      <th className="p-3 sm:p-4 border-b border-yellow-700">Recommended Action</th>
                    </tr>
                  </thead>
                  <tbody className="text-sm sm:text-base">
                    <tr>
                      <td className="p-3 sm:p-4 border-b border-gray-100 font-bold">Two Hours Pre Sleep</td>
                      <td className="p-3 sm:p-4 border-b border-gray-100">Offload information.</td>
                      <td className="p-3 sm:p-4 border-b border-gray-100 italic">Journaling or list making.</td>
                    </tr>
                    <tr className="bg-yellow-50/30">
                      <td className="p-3 sm:p-4 border-b border-gray-100 font-bold">One Hour Pre Sleep</td>
                      <td className="p-3 sm:p-4 border-b border-gray-100">Reduce sensory input.</td>
                      <td className="p-3 sm:p-4 border-b border-gray-100 italic">No screens or bright lights.</td>
                    </tr>
                    <tr>
                      <td className="p-3 sm:p-4 border-b border-gray-100 font-bold">In Bed</td>
                      <td className="p-3 sm:p-4 border-b border-gray-100">Interrupt loops.</td>
                      <td className="p-3 sm:p-4 border-b border-gray-100 italic">Cognitive shuffling.</td>
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
            Overthinking & Sleep FAQ
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8">
            {[
              { q: "Why is my overthinking worse at night", a: "Reduced executive control and a lack of external distractions allow internal thoughts to take center stage. The brain also enters a state of scanning for threats when you are vulnerable." },
              { q: "Should I stay in bed if I cannot stop thinking", a: "No. If you are awake for more than twenty minutes leave the bed and do a low stimulation activity in dim light until you feel sleepy. This prevents the bed from being associated with frustration." },
              { q: "Does white noise help with overthinking", a: "It can. Steady sound provides a neutral anchor for the brain to focus on which can help drown out the internal monologue." },
              { q: "Can blue light glasses help my nighttime anxiety", a: "They can help regulate melatonin production which improves sleep quality but they do not directly address the psychological roots of overthinking." },
              { q: "What should I do if I wake up with a panic attack", a: "Focus on cooling your body down and using long exhales. Remind yourself that you are safe and that the physical sensation will pass." },
              { q: "How does caffeine affect my thoughts ten hours later", a: "Caffeine has a long half life and can keep your nervous system in a state of subtle arousal which makes it easier for the mind to start racing at night." },
              { q: "Is it okay to listen to podcasts to fall asleep", a: "If they are low stakes and calming they can act as a useful distraction from your own thoughts. Avoid anything too engaging or stressful." },
              { q: "Why do I keep replayng conversations from years ago", a: "This is a form of social rumination where the brain attempts to resolve past perceived failures to protect you from future social rejection." },
              { q: "Can exercise in the evening cause overthinking", a: "Intense exercise spikes cortisol which may make it harder for some people to wind down. Try to keep vigorous workouts at least four hours before bed." },
              { q: "When is nighttime overthinking a sign of an anxiety disorder", a: "If it occurs almost every night and causes significant distress or impairs your ability to function during the day it is time to seek professional guidance." }
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
            <h2 className="text-2xl sm:text-4xl font-black mb-4">Peaceful nights are possible.</h2>
            <p className="text-base sm:text-xl font-light mb-8 opacity-90">
              You do not have to battle your thoughts alone. Let us help you find the quiet you deserve.
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