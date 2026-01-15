"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

/** * SEO CONFIGURATION 
 * Optimized for 2026 mental health intervention and nervous system regulation.
 */
const metadata = {
  title: "How to Stop a Panic Spiral and Feel Grounded in Under 10 Minutes",
  description: "A comprehensive clinical guide on stopping a panic attack and ending a mental spiral. Learn sensory grounding, vagus nerve resets, and emotional regulation.",
  keywords: [
    "how to stop a panic spiral", 
    "feel grounded in 10 minutes", 
    "panic attack emergency plan", 
    "vagus nerve stimulation 2026", 
    "54321 grounding method", 
    "somatic therapy for anxiety", 
    "stopping intrusive thought spirals"
  ],
  image: "/blog27.png", 
  url: "https://growthfairness.com/blog/how-to-stop-a-panic-spiral-and-feel-grounded-in-under-10-minutes",
  publishedDate: "January 14, 2026"
};

export default function PanicSpiralBlog() {
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
            Clinical Wellness Series
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-black mb-6 leading-tight text-gray-900 break-words">
            How to Stop a Panic Spiral <br />
            <span
              className="font-light italic"
              style={{
                background: "linear-gradient(90deg, #EAB308, #FACC15)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              and Feel Grounded
            </span>
          </h1>

          <p className="text-gray-600 text-lg sm:text-xl font-light leading-relaxed text-justify">
            Panic is a physical false alarm. When your brain signals a life-threatening crisis in a safe environment, you need somatic overrides to reclaim your calm in under 10 minutes.
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
            alt="Grounding techniques visual representation"
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
            A panic spiral is a temporary biological event. It is a wave of adrenaline that must be ridden, not fought. By engaging the senses, we anchor the mind to the present.
          </p>

          <section className="mb-12 sm:mb-20">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">The Neurobiology of the Spiral</h2>
            <p className="mb-6 text-justify leading-relaxed">
              When a panic attack begins, your Amygdala—the brain’s primitive threat-detection center—triggers the Sympathetic Nervous System. This results in the "fight-or-flight" response. In a matter of seconds, your body is flooded with cortisol and epinephrine. For many, this leads to a "panic spiral": a feedback loop where the physical sensations (racing heart, shortness of breath) cause more fear, which in turn causes more adrenaline.
            </p>
            <p className="mb-6 text-justify leading-relaxed">
              To stop this, we must utilize "Bottom-Up Regulation." While "Top-Down" regulation involves using logic to calm down, panic often renders the logical Prefrontal Cortex temporarily inactive. Grounding techniques bypass the logical brain and communicate directly with the nervous system through sensory input, signaling that the body is safe.
            </p>
          </section>

          <section className="mb-12 sm:mb-20">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 border-b-4 border-[#FACC15] inline-block">
              The 5-4-3-2-1 Grounding Method
            </h2>
            <p className="mb-6 text-justify">The most effective tool for immediate de-escalation is the sensory countdown. This forces the brain to switch from internal distress to external observation.</p>
            
            

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
              <div className="bg-white p-6 rounded-xl border border-yellow-100 shadow-sm">
                <h3 className="text-lg sm:text-xl font-bold mb-4 text-[#A16207]">Phase 1: Observation</h3>
                <p className="text-gray-700 text-justify text-sm sm:text-base">
                  Identify <strong>5 things you see</strong> and <strong>4 things you can touch</strong>. Focus on textures: the roughness of your jeans, the coldness of a metal desk, or the weight of your own feet on the floor.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl border border-yellow-100 shadow-sm">
                <h3 className="text-lg sm:text-xl font-bold mb-4 text-[#A16207]">Phase 2: Auditory & Taste</h3>
                <p className="text-gray-700 text-justify text-sm sm:text-base">
                  Identify <strong>3 things you hear</strong>, <strong>2 things you can smell</strong>, and <strong>1 thing you can taste</strong>. These steps re-engage the parietal lobe and bring your focus back to your immediate environment.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-12 sm:mb-20 bg-yellow-50/50 p-5 sm:p-10 rounded-2xl sm:rounded-3xl border border-yellow-100">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8">Clinical Vagus Nerve Overrides</h2>
            <p className="mb-6 text-justify">The Vagus nerve is the longest nerve in your body and a primary component of the Parasympathetic Nervous System. Stimulating it can "force" the body to calm down.</p>
            
            <div className="space-y-4 sm:space-y-8">
              {[
                { title: "Temperature Shock (Dive Reflex)", content: "Splashing ice-cold water on your face or holding an ice cube in your hand triggers the 'Mammalian Dive Reflex.' This is a biological cheat code that instantly slows the heart rate and redirects blood to the brain and heart, breaking the panic loop." },
                { title: "The 4-7-8 Breathing Technique", content: "Inhale for 4 seconds, hold for 7, and exhale forcefully through your mouth for 8 seconds. The extended exhale is the most important part; it signals to the brain that there is no physical threat, allowing the adrenaline to dissipate." },
                { title: "Somatic Shaking", content: "Stand up and gently shake your arms and legs. Just as animals shake after a stressful event to discharge energy, somatic shaking helps release the pent-up tension stored in your muscles during a spiral." }
              ].map((item, idx) => (
                <div key={idx} className="bg-white p-5 rounded-xl shadow-sm border border-gray-100">
                  <h4 className="font-bold text-[#CA8A04] text-lg mb-2">{item.title}</h4>
                  <p className="text-justify text-sm sm:text-base">{item.content}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-12 sm:mb-20">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">Long-Term Resilience Strategy</h2>
            <p className="mb-6 text-justify leading-relaxed">
              While grounding stops the immediate spiral, building a resilient nervous system prevents future attacks. This involves "Window of Tolerance" work—learning to identify the subtle signs of rising anxiety before they reach the level of a panic attack.
            </p>
            <p className="text-justify leading-relaxed">
              Clinical approaches like <strong>Cognitive Behavioral Therapy (CBT)</strong> and <strong>Dialectical Behavior Therapy (DBT)</strong> are highly effective. They teach you to challenge the "catastrophic thinking" that fuels the spiral, helping you realize that while a panic attack is uncomfortable, it is not dangerous.
            </p>
          </section>

          <section className="mb-12 sm:mb-20">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">Panic Attack vs. Anxiety Attack</h2>
            
            <div className="w-full overflow-hidden rounded-xl border border-gray-200 mt-6">
              <div className="overflow-x-auto">
                <table className="w-full min-w-[500px] text-left border-collapse">
                  <thead>
                    <tr className="bg-[#EAB308] text-white">
                      <th className="p-3 sm:p-4 border-b border-yellow-700">Feature</th>
                      <th className="p-3 sm:p-4 border-b border-yellow-700">Panic Attack</th>
                      <th className="p-3 sm:p-4 border-b border-yellow-700">Anxiety Spiral</th>
                    </tr>
                  </thead>
                  <tbody className="text-sm sm:text-base">
                    <tr>
                      <td className="p-3 sm:p-4 border-b border-gray-100 font-bold">Onset</td>
                      <td className="p-3 sm:p-4 border-b border-gray-100">Sudden, often without a trigger.</td>
                      <td className="p-3 sm:p-4 border-b border-gray-100 italic">Gradual, usually tied to a stressor.</td>
                    </tr>
                    <tr className="bg-yellow-50/30">
                      <td className="p-3 sm:p-4 border-b border-gray-100 font-bold">Duration</td>
                      <td className="p-3 sm:p-4 border-b border-gray-100">Peaks in 10 mins, ends quickly.</td>
                      <td className="p-3 sm:p-4 border-b border-gray-100 italic">Can last for hours or days.</td>
                    </tr>
                    <tr>
                      <td className="p-3 sm:p-4 border-b border-gray-100 font-bold">Primary Feeling</td>
                      <td className="p-3 sm:p-4 border-b border-gray-100">Terror, "I am dying."</td>
                      <td className="p-3 sm:p-4 border-b border-gray-100 italic">Dread, "Something bad will happen."</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </section>
        </div>

        {/* ===== Extended FAQ (10 Questions) ===== */}
        <section className="mt-16 sm:mt-24 pt-12 border-t border-yellow-100">
          <h2 className="text-2xl sm:text-4xl font-black mb-10 text-gray-900 text-center">
            Panic & Grounding FAQ
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8">
            {[
              { q: "Can a panic attack hurt my heart?", a: "No. While it feels like a heart attack, it is a psychological event. Your heart is designed to handle temporary spikes in adrenaline safely." },
              { q: "Is grounding just a distraction?", a: "No. It is a biological intervention that shifts brain activity from the emotional centers to the sensory and logical centers." },
              { q: "Why do I feel lightheaded?", a: "Panic often causes hyperventilation, which changes the CO2 levels in your blood, making you feel dizzy or tingly." },
              { q: "Does caffeine trigger spirals?", a: "Yes. Caffeine mimics the physical symptoms of panic, which can trick a sensitive brain into starting a full-blown attack." },
              { q: "How do I help someone else?", a: "Keep your voice low, stay calm, and coach them through the 5-4-3-2-1 technique. Do not tell them to 'calm down'—that often adds pressure." },
              { q: "Is 'Box Breathing' better than 4-7-8?", a: "Both are effective. Box breathing is great for focus, while 4-7-8 is specifically designed to maximize Vagus nerve stimulation." },
              { q: "Why do I feel exhausted after?", a: "A panic attack uses a massive amount of glucose and energy. Your body is entering a 'recovery' phase after a high-stress event." },
              { q: "Can I use an ice pack?", a: "Yes! Placing an ice pack on your chest or the back of your neck is an excellent way to stimulate the Vagus nerve and break a spiral." },
              { q: "When should I see a doctor?", a: "If you have more than two attacks a month or if you are avoiding places because of the fear of having an attack." },
              { q: "Will I ever be 'cured'?", a: "Panic disorder is highly treatable. Most people learn to manage their symptoms so effectively that attacks stop altogether." }
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
            <h2 className="text-2xl sm:text-4xl font-black mb-4">Reclaim Your Calm Today.</h2>
            <p className="text-base sm:text-xl font-light mb-8 opacity-90">
              Panic is manageable, and you don't have to face it alone. Let’s build your clinical roadmap to peace.
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