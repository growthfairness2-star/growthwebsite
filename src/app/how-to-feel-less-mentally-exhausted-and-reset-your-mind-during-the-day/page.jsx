"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

/** * SEO CONFIGURATION 
 * Optimized for 2026 cognitive recovery, Attention Restoration Theory (ART), and mental burnout.
 */
const metadata = {
  title: "How to Feel Less Mentally Exhausted and Reset Your Mind During the Day",
  description: "A deep clinical dive into cognitive fatigue. Learn evidence-based strategies to restore directed attention and manage mental energy.",
  keywords: [
    "reduce mental exhaustion 2026", 
    "cognitive restoration theory", 
    "reset mind during workday", 
    "stop brain fog clinical tips", 
    "neuroplasticity and rest", 
    "mental energy management", 
    "overcoming burnout"
  ],
  image: "/blog31.png", 
  url: "https://growthfairness.com/blog/how-to-feel-less-mentally-exhausted-and-reset-your-mind-during-the-day",
  publishedDate: "January 17, 2026"
};

export default function MentalExhaustionBlog() {
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
          {/* Compact Heading Size */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-black mb-5 leading-tight text-gray-900 break-words">
            Feel Less Mentally Exhausted <br className="hidden lg:block" /> and Reset 
            <span
              className="font-light italic block mt-1"
              style={{
                background: "linear-gradient(90deg, #EAB308, #FACC15)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Your Mind During the Day
            </span>
          </h1>

          <p className="text-gray-600 text-base sm:text-lg font-light leading-relaxed text-justify max-w-xl">
            Mental exhaustion isn't a personality trait—it's a physiological state where your cognitive reserves are depleted. Recovery requires more than just sleep; it requires active neurological restoration.
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
            alt="Person finding mental clarity and peace"
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
          
          <p className="text-lg sm:text-xl leading-relaxed mb-10 font-serif italic border-l-4 border-[#EAB308] pl-4 sm:pl-8 text-gray-700 text-justify">
            True mental rest is not the absence of thought, but the absence of *effortful* thought. To heal the mind, we must transition from active focus to effortless observation.
          </p>

          <section className="mb-12">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">The Neuroscience of Directed Attention Fatigue</h2>
            <p className="mb-6 text-justify leading-relaxed">
              In the modern era, our brains are subjected to a constant barrage of stimuli that demand "Directed Attention." This is a finite resource managed primarily by the Prefrontal Cortex. Every email we filter, every notification we ignore, and every decision we make—no matter how small—consumes metabolic energy in the form of glucose. When this resource is exhausted, we enter a state known as **Directed Attention Fatigue (DAF)**.
            </p>
            <p className="mb-6 text-justify leading-relaxed">
              DAF manifests as brain fog, irritability, a lack of self-control, and a significant drop in problem-solving ability. Most people attempt to "power through" this exhaustion with caffeine or sheer willpower. However, research into **Attention Restoration Theory (ART)** suggests that the Prefrontal Cortex cannot be forced into recovery; it must be allowed to rest by engaging the "Involuntary Attention" system—the part of our brain that responds to soft fascinations like the movement of leaves or the flow of water.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">The Role of the Default Mode Network</h2>
            <p className="mb-6 text-justify leading-relaxed">
              When we stop focusing on a specific task, the brain doesn't simply shut off. Instead, it activates the **Default Mode Network (DMN)**. This network is crucial for "mental housekeeping"—it consolidates memories, processes emotions, and fosters creative synthesis. 
            </p>
            <p className="mb-6 text-justify leading-relaxed">
              The problem with modern "breaks" (like scrolling through social media) is that they never allow the DMN to activate. Scrolling is a high-intensity cognitive task that requires constant evaluation and visual processing. To truly reset your mind during the day, you must experience periods of "Boredom Advocacy"—short windows of time where the brain has no external input to process, allowing the DMN to clear the "cognitive cobwebs" accumulated during your deep work sessions.
            </p>
          </section>

          

          <section className="mb-12">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6 border-b-4 border-[#FACC15] inline-block">
              Strategic Reset Protocols
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
              <div className="bg-white p-6 rounded-xl border border-yellow-100 shadow-sm">
                <h3 className="text-base sm:text-lg font-bold mb-4 text-[#A16207]">1. Sensory Deprivation Blocks</h3>
                <p className="text-gray-700 text-justify text-sm">
                  Close your eyes and use noise-canceling headphones for exactly five minutes. By removing 80% of your sensory input, you allow the thalamus to stop filtering external noise and focus on internal recalibration. This "dark break" is far more restorative than a 20-minute nap for cognitive clarity.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl border border-yellow-100 shadow-sm">
                <h3 className="text-base sm:text-lg font-bold mb-4 text-[#A16207]">2. The 'Soft Fascination' Walk</h3>
                <p className="text-gray-700 text-justify text-sm">
                  Walk without a podcast or music. Focus on "soft" stimuli—the way the light hits a building or the sound of your own footsteps. This engages the involuntary attention system, allowing the directed attention mechanisms in the Prefrontal Cortex to go "offline" and recharge.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-12 bg-yellow-50/50 p-6 sm:p-10 rounded-2xl sm:rounded-3xl border border-yellow-100">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-8">Clinical Somatic Resets</h2>
            <p className="mb-6 text-justify">Mental exhaustion often creates physical tension. Use these clinical somatic resets to break the feedback loop between a tired mind and a stressed body.</p>
            
            <div className="space-y-4">
              {[
                { title: "The Physiological Sigh", content: "Double-inhale through the nose followed by a long, slow exhale. This is the fastest biological way to offload CO2 and downregulate the nervous system, reducing the 'frantic' feeling of being overwhelmed." },
                { title: "Vagal Toning (Cold Exposure)", content: "Apply a cold compress to your neck or splash cold water on your face. This stimulates the Vagus nerve, signaling the heart to slow down and moving you from 'Fight or Flight' to 'Rest and Digest'." },
                { title: "Optokinetic Reset", content: "Allow your eyes to move side-to-side horizontally for 30 seconds. Lateral eye movements have been shown in EMDR and other clinical studies to reduce the intensity of stressful thoughts and lower amygdala activation." }
              ].map((item, idx) => (
                <div key={idx} className="bg-white p-5 rounded-xl shadow-sm border border-gray-100">
                  <h4 className="font-bold text-[#CA8A04] text-base mb-2">{item.title}</h4>
                  <p className="text-justify text-sm">{item.content}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">Cognitive Pacing: Managing the Energy Envelope</h2>
            <p className="mb-6 text-justify leading-relaxed">
              Healing from mental exhaustion requires a shift from "reactive" to "proactive" energy management. This is often called **Pacing**. Instead of waiting until you are exhausted to take a break, you must implement scheduled "interstitial pauses"—small gaps between tasks that prevent the buildup of cognitive tension.
            </p>
            <p className="mb-6 text-justify leading-relaxed">
              When we move instantly from a high-stakes meeting to an intense email thread, we suffer from **Attention Residue**. Part of our brain is still processing the previous task, which makes the new task more exhausting. A 2-minute "buffer zone" between tasks allows the brain to fully disconnect from the old data and prepare for the new, significantly reducing the cumulative drain of the workday.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">The Daily Mental Audit</h2>
            <div className="w-full overflow-hidden rounded-xl border border-gray-200 mt-6">
              <div className="overflow-x-auto">
                <table className="w-full min-w-[600px] text-left border-collapse">
                  <thead>
                    <tr className="bg-[#EAB308] text-white">
                      <th className="p-4 border-b border-yellow-700">Audit Metric</th>
                      <th className="p-4 border-b border-yellow-700">The Exhaustion Trigger</th>
                      <th className="p-4 border-b border-yellow-700">The Restorative Shift</th>
                    </tr>
                  </thead>
                  <tbody className="text-sm">
                    <tr>
                      <td className="p-4 border-b border-gray-100 font-bold">Visual Load</td>
                      <td className="p-4 border-b border-gray-100">8+ hours of blue light/screens.</td>
                      <td className="p-4 border-b border-gray-100">20-minute 'analog' window every 3 hours.</td>
                    </tr>
                    <tr className="bg-yellow-50/30">
                      <td className="p-4 border-b border-gray-100 font-bold">Acoustic Load</td>
                      <td className="p-4 border-b border-gray-100">Constant background noise/music.</td>
                      <td className="p-4 border-b border-gray-100 italic">15 minutes of total silence after lunch.</td>
                    </tr>
                    <tr>
                      <td className="p-4 border-b border-gray-100 font-bold">Decision Load</td>
                      <td className="p-4 border-b border-gray-100">High-frequency small choices.</td>
                      <td className="p-4 border-b border-gray-100 font-bold">Automation of morning/evening routines.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </section>
        </div>

        {/* ===== FAQ Section (10 Unique Questions) ===== */}
        <section className="mt-16 sm:mt-24 pt-12 border-t border-yellow-100">
          <h2 className="text-xl sm:text-3xl font-black mb-10 text-gray-900 text-center">
            Daily Mental Reset FAQ
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8">
            {[
              { q: "Is mental exhaustion the same as burnout?", a: "No. Mental exhaustion is an acute state of cognitive depletion that can be fixed with proper rest. Burnout is a chronic syndrome involving emotional detachment and a sense of futility." },
              { q: "Why do I feel more tired after a weekend of 'relaxing'?", a: "Often, what we call 'relaxing' (socializing, travel, high-stimulus entertainment) still requires directed attention. True rest requires low-stimulation 'soft fascination' environments." },
              { q: "Can caffeine cure mental exhaustion?", a: "Caffeine masks exhaustion by blocking adenosine receptors, but it doesn't replenish the metabolic resources the brain needs. It eventually leads to a larger 'crash' once it wears off." },
              { q: "What is 'Decision Fatigue'?", a: "It's the psychological phenomenon where the quality of your decisions deteriorates after a long session of making choices, as your willpower is a finite resource." },
              { q: "How does dehydration affect mental energy?", a: "The brain is roughly 75% water. Even 1% dehydration can cause cognitive impairment, making every mental task feel twice as difficult and exhausting." },
              { q: "Does 'binaural beats' help with mental resets?", a: "Some studies suggest they can help shift the brain into alpha or theta waves (associated with relaxation and focus), but they should not replace silent rest." },
              { q: "Why do I get 'brain fog' around 3:00 PM?", a: "This is a natural dip in your circadian rhythm. Your core body temperature drops, and your brain temporarily reduces alertness as part of its daily cycle." },
              { q: "Is multi-tasking actually possible?", a: "No. The brain 'context switches' between tasks rapidly. This switching costs a massive amount of metabolic energy, leading to faster mental exhaustion." },
              { q: "What is 'Attention Residue'?", a: "It is the cognitive cost of switching tasks. Parts of your focus remain on the previous task for up to 20 minutes, reducing your efficiency on the current one." },
              { q: "Can certain foods help with mental stamina?", a: "Foods rich in Omega-3s and complex carbohydrates provide a steady stream of glucose to the brain, preventing the 'sugar crashes' that mimic mental exhaustion." }
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
            <h2 className="text-xl sm:text-3xl font-black mb-4">Protect your mental energy.</h2>
            <p className="text-sm sm:text-lg font-light mb-8 opacity-90">
              Mental clarity is a skill you can build. Let's work together to design a lifestyle that keeps you energized and focused.
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