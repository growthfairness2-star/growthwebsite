"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

/** * SEO CONFIGURATION 
 * Optimized for 2026 mental health, intrusive thoughts management, and OCD recovery.
 */
const metadata = {
  title: "How to Quiet Intrusive Thoughts Without Fighting Your Mind",
  description: "Learn clinical strategies to manage intrusive thoughts. Discover how to use acceptance, cognitive defusion, and mindfulness to quiet your mind.",
  keywords: [
    "how to quiet intrusive thoughts", 
    "stop fighting your mind 2026", 
    "intrusive thoughts treatment", 
    "ACT for intrusive thoughts", 
    "cognitive defusion techniques", 
    "unwanted thoughts relief", 
    "mental health guide intrusive thoughts"
  ],
  image: "/blog29.png", 
  url: "https://growthfairness.com/blog/how-to-quiet-intrusive-thoughts-without-fighting-your-mind",
  publishedDate: "January 15, 2026"
};

export default function IntrusiveThoughtsBlog() {
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
            How to Quiet <br className="hidden lg:block" /> Intrusive Thoughts 
            <span
              className="font-light italic block mt-1"
              style={{
                background: "linear-gradient(90deg, #EAB308, #FACC15)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Without Fighting Your Mind
            </span>
          </h1>

          <p className="text-gray-600 text-base sm:text-lg font-light leading-relaxed text-justify max-w-xl">
            Intrusive thoughts are like mental pop-up ads. The more you try to click them away, the more they reappear. True quiet comes from changing your relationship with the thought, not the thought itself.
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
            alt="Mental clarity and peaceful thought management"
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
            Thinking a thought is not the same as wanting it, and certainly not the same as doing it. Your brain is a suggestion engine; you are the observer.
          </p>

          <section className="mb-12 sm:mb-20">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">The Irony of Suppression</h2>
            <p className="mb-6 text-justify leading-relaxed">
              In psychology, there is a concept known as **Ironic Process Theory**. If you are told "don't think of a white bear," your brain must constantly monitor for white bears to ensure you aren't thinking of them, which paradoxically keeps the thought at the forefront of your mind. Intrusive thoughts operate on this exact mechanism.
            </p>
            <p className="mb-6 text-justify leading-relaxed">
              When an unwanted thought appears—whether it's a fear of hurting someone, a cringing memory, or an existential doubt—our instinct is to fight it. We argue with the thought, try to prove it wrong, or beg it to go away. This "fight" signals to the brain that the thought is dangerous. The brain, wanting to protect you, then keeps the "danger" (the thought) on high alert. To quiet the mind, we must stop the battle.
            </p>
          </section>

          <section className="mb-12 sm:mb-20">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6 border-b-4 border-[#FACC15] inline-block">
              Cognitive Defusion: Creating Distance
            </h2>
            <p className="mb-8 text-justify leading-relaxed">
              The goal of Acceptance and Commitment Therapy (ACT) is "defusion"—learning to see a thought as just a sequence of words or an image, rather than an absolute truth.
            </p>

            

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
              <div className="bg-white p-6 rounded-xl border border-yellow-100 shadow-sm">
                <h3 className="text-base sm:text-lg font-bold mb-4 text-[#A16207]">The Labeling Technique</h3>
                <p className="text-gray-700 text-justify text-sm">
                  Instead of saying "I’m going to lose my job," rephrase it as: "I am having the thought that I might lose my job." This simple linguistic shift reminds your brain that you are the container for the thought, not the thought itself.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl border border-yellow-100 shadow-sm">
                <h3 className="text-base sm:text-lg font-bold mb-4 text-[#A16207]">The Radio Metaphor</h3>
                <p className="text-gray-700 text-justify text-sm">
                  Treat intrusive thoughts like a background radio playing in a shop. You can’t turn the radio off, but you don’t have to sit and listen to every lyric. You can continue your shopping (your life) while the noise exists in the background.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-12 sm:mb-20 bg-yellow-50/50 p-6 sm:p-10 rounded-2xl sm:rounded-3xl border border-yellow-100">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-8">Clinical Tools for Mental Stillness</h2>
            <p className="mb-6 text-justify">When the mental noise becomes overwhelming, use these evidence-based somatic and cognitive resets.</p>
            
            <div className="space-y-4">
              {[
                { title: "The 'Leaves on a Stream' Exercise", content: "Visualize your thoughts as leaves floating down a gentle stream. As each intrusive thought appears, place it on a leaf and watch it float past. Do not try to stop the stream or speed it up; simply observe the transit." },
                { title: "Objectification", content: "Give the thought a physical form. What color is it? What texture? If the thought 'I'm not safe' was a physical object, what would it look like? By turning an abstract fear into a concrete object, you reduce its perceived power over your reality." },
                { title: "Guided Sensory Anchoring", content: "Engage in 'Heavy Work' like pushing against a wall or stretching. Intense physical input forces the brain to prioritize sensory data over internal abstract loops, effectively 'crowding out' the intrusive thought." }
              ].map((item, idx) => (
                <div key={idx} className="bg-white p-5 rounded-xl shadow-sm border border-gray-100">
                  <h4 className="font-bold text-[#CA8A04] text-base mb-2">{item.title}</h4>
                  <p className="text-justify text-sm">{item.content}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-12 sm:mb-20">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">Breaking the "Thought-Action" Fusion</h2>
            <p className="mb-6 text-justify leading-relaxed">
              A major driver of intrusive thought distress is **Thought-Action Fusion**—the belief that thinking about something makes it more likely to happen, or that thinking a "bad" thing makes you a "bad" person.
            </p>
            <p className="mb-6 text-justify leading-relaxed">
              In clinical settings, we remind patients that the human brain is a random-fire machine. It produces thousands of thoughts a day, many of which are nonsense. A "violent" intrusive thought in a peaceful person is actually a sign of how much they value peace—the brain is highlighting the thing that is most contrary to their character.
            </p>
          </section>

          <section className="mb-12 sm:mb-20">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">Managing the Mental Loop</h2>
            <div className="w-full overflow-hidden rounded-xl border border-gray-200 mt-6">
              <div className="overflow-x-auto">
                <table className="w-full min-w-[500px] text-left border-collapse">
                  <thead>
                    <tr className="bg-[#EAB308] text-white">
                      <th className="p-3 border-b border-yellow-700">The Instinct (What to stop)</th>
                      <th className="p-3 border-b border-yellow-700">The Intervention (What to do)</th>
                      <th className="p-3 border-b border-yellow-700">The Outcome</th>
                    </tr>
                  </thead>
                  <tbody className="text-sm">
                    <tr>
                      <td className="p-3 border-b border-gray-100 font-bold">Arguing with the thought.</td>
                      <td className="p-3 border-b border-gray-100">Acknowledging and labeling.</td>
                      <td className="p-3 border-b border-gray-100">Reduced mental fatigue.</td>
                    </tr>
                    <tr className="bg-yellow-50/30">
                      <td className="p-3 border-b border-gray-100 font-bold">Seeking constant reassurance.</td>
                      <td className="p-3 border-b border-gray-100 italic">Accepting uncertainty.</td>
                      <td className="p-3 border-b border-gray-100 italic">Increased brain resilience.</td>
                    </tr>
                    <tr>
                      <td className="p-3 border-b border-gray-100 font-bold">Trying to "push" it away.</td>
                      <td className="p-3 border-b border-gray-100 font-bold">Floating with the thought.</td>
                      <td className="p-3 border-b border-gray-100">Spontaneous quiet.</td>
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
            Intrusive Thoughts FAQ
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8">
            {[
              { q: "Are intrusive thoughts a sign of a secret desire?", a: "No. In fact, they are often 'ego-dystonic,' meaning they are the opposite of your true values and desires." },
              { q: "Does everyone have intrusive thoughts?", a: "Yes. Research suggests that over 90% of the population experiences intrusive thoughts occasionally." },
              { q: "Can intrusive thoughts be a symptom of OCD?", a: "Yes. When intrusive thoughts become chronic and lead to repetitive behaviors (compulsions) to find relief, they may indicate OCD." },
              { q: "Will they ever go away completely?", a: "The goal is to stop them from being 'sticky.' When you stop fearing them, they pass through your mind much faster." },
              { q: "Is 'Thought Stopping' (snapping a rubber band) effective?", a: "Generally no. Modern clinical practice finds that suppressing thoughts often makes them rebound more aggressively." },
              { q: "Why are my thoughts so dark?", a: "Your brain's survival mechanism often scans for the 'worst-case scenario' to protect you. A dark thought is often just a misfiring safety check." },
              { q: "Does stress make them worse?", a: "Absolutely. When your nervous system is taxed, your brain's ability to filter out random mental noise decreases." },
              { q: "How can I tell the difference between a thought and an impulse?", a: "Thoughts are mental events. Impulses are driven by desire. If the thought causes you distress or horror, it's a thought, not a desire." },
              { q: "Should I tell people about my thoughts?", a: "Discussing them with a therapist is highly beneficial. Sharing with trusted friends can also reduce the shame that keeps the thoughts 'sticky.'" },
              { q: "What is the best therapy for this?", a: "ERP (Exposure and Response Prevention) and ACT (Acceptance and Commitment Therapy) are the gold standards." }
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
            <h2 className="text-xl sm:text-3xl font-black mb-4">Peace of mind is possible.</h2>
            <p className="text-sm sm:text-lg font-light mb-8 opacity-90">
              You are not your thoughts. Let's work together to help you find the mental stillness you deserve.
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