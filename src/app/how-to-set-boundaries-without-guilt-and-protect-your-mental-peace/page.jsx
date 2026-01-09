"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

/** * SEO CONFIGURATION 
 * Optimized for 2026 boundary setting, guilt management, and emotional protection.
 */
const metadata = {
  title: "How to Set Boundaries Without Guilt and Protect Your Mental Peace",
  description: "Setting boundaries is an act of self respect. Learn clinical methods to define your limits and communicate them clearly without feeling guilty.",
  keywords: [
    "set boundaries without guilt 2026", 
    "protect mental peace", 
    "assertive communication skills", 
    "healthy relationship limits", 
    "overcoming people pleasing", 
    "emotional boundary setting", 
    "self care and boundaries"
  ],
  image: "/blog24.png", 
  url: "https://growthfairness.com/blog/how-to-set-boundaries-without-guilt-and-protect-your-mental-peace",
  publishedDate: "January 10, 2026"
};

export default function BoundariesBlog() {
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
            How to Set Boundaries <br />
            <span
              className="font-light italic"
              style={{
                background: "linear-gradient(90deg, #EAB308, #FACC15)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Without Guilt & Protect Your Peace
            </span>
          </h1>

          <p className="text-gray-600 text-lg sm:text-xl font-light leading-relaxed text-justify">
            A boundary is not a wall to keep people out but a gate to keep yourself safe. In 2026 we recognize that healthy limits are the foundation of sustainable and honest relationships.
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
            alt="A calm and clear path representing structured personal space"
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
            Setting a boundary is a way of telling the world how to love you. When you stop overextending yourself you finally have the energy to show up fully for the things that truly matter.
          </p>

          <section className="mb-12 sm:mb-20">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">The Psychology of People Pleasing</h2>
            <p className="mb-6 text-justify leading-relaxed">
              Many of us struggle with boundaries because we associate saying no with being unkind or selfish. This often stems from early social conditioning where our value was tied to our utility to others. By 2026 clinical research has highlighted that chronic people pleasing leads to high levels of resentment and emotional exhaustion. Guilt is simply the feeling of breaking an old and unhealthy rule you once made for your survival.
            </p>
            <p className="mb-6 text-justify leading-relaxed">
              Boundaries are essential for mental peace because they reduce cognitive load. When you have clear limits you no longer have to spend energy debating every request or overanalyzing your social interactions. You simply follow your internal compass. This clarity protects your nervous system from the friction of constant self negotiation.
            </p>
            <p className="mb-6 text-justify leading-relaxed">
              We work with individuals to identify where their boundaries are being crossed. This often shows up as physical tension or irritability or a desire to avoid certain people. Recognizing these signals is the first step toward reclaiming your space and your energy.
            </p>
          </section>

          <section className="mb-12 sm:mb-20">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 border-b-4 border-[#FACC15] inline-block">
              Practical Steps to Assertive Peace
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
              <div className="bg-white">
                <h3 className="text-lg sm:text-xl font-bold mb-4 text-[#A16207]">1. Direct Communication</h3>
                <p className="text-gray-700 text-justify">
                  Boundaries fail when they are vague. Use clear and kind language like I am not able to take that on right now. You do not need to provide a long list of excuses. A simple and honest no is a complete sentence that maintains your integrity and respects the other persons time.
                </p>
              </div>

              <div className="bg-white">
                <h3 className="text-lg sm:text-xl font-bold mb-4 text-[#A16207]">2. The Guilt Reframing</h3>
                <p className="text-gray-700 text-justify">
                  When guilt arises remind yourself that you are not hurting someone by having needs. You are actually being a better friend or partner by preventing the burnout that leads to withdrawal. Guilt is an indicator of growth when you are unlearning the habit of neglecting yourself.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-12 sm:mb-20 bg-yellow-50/50 p-5 sm:p-10 rounded-2xl sm:rounded-3xl border border-yellow-100">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8">Clinical Frameworks for Limits</h2>
            
            <div className="space-y-4 sm:space-y-8">
              {[
                { title: "Internal Boundary Work", content: "Setting boundaries with yourself is just as important. We help you define limits on work hours and digital consumption to ensure your brain has the space it needs to rest and recover." },
                { title: "Scripting and Roleplay", content: "Communication is a muscle. We provide templates for difficult conversations so you can practice being assertive without being aggressive which builds the confidence needed to hold your ground." },
                { title: "The Values Filter", content: "Every yes to something you do not want to do is a no to something you value. We help you align your time and energy with your core priorities so that your boundaries feel purposeful." }
              ].map((item, idx) => (
                <div key={idx} className="bg-white p-5 rounded-xl shadow-sm border border-gray-100">
                  <h4 className="font-bold text-[#CA8A04] text-lg mb-2">{item.title}</h4>
                  <p className="text-justify text-sm sm:text-base">{item.content}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-12 sm:mb-20">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">The Boundary Health Check</h2>
            
            <div className="w-full overflow-hidden rounded-xl border border-gray-200 mt-6">
              <div className="overflow-x-auto">
                <table className="w-full min-w-[500px] text-left border-collapse">
                  <thead>
                    <tr className="bg-[#EAB308] text-white">
                      <th className="p-3 sm:p-4 border-b border-yellow-700">Type</th>
                      <th className="p-3 sm:p-4 border-b border-yellow-700">Warning Sign</th>
                      <th className="p-3 sm:p-4 border-b border-yellow-700">Healthy Limit</th>
                    </tr>
                  </thead>
                  <tbody className="text-sm sm:text-base">
                    <tr>
                      <td className="p-3 sm:p-4 border-b border-gray-100 font-bold">Time</td>
                      <td className="p-3 sm:p-4 border-b border-gray-100">Always feeling rushed.</td>
                      <td className="p-3 sm:p-4 border-b border-gray-100 italic">Protected slots for rest.</td>
                    </tr>
                    <tr className="bg-yellow-50/30">
                      <td className="p-3 sm:p-4 border-b border-gray-100 font-bold">Emotional</td>
                      <td className="p-3 sm:p-4 border-b border-gray-100">Taking on others stress.</td>
                      <td className="p-3 sm:p-4 border-b border-gray-100 italic">Knowing what is yours to carry.</td>
                    </tr>
                    <tr>
                      <td className="p-3 sm:p-4 border-b border-gray-100 font-bold">Mental</td>
                      <td className="p-3 sm:p-4 border-b border-gray-100">Decision fatigue.</td>
                      <td className="p-3 sm:p-4 border-b border-gray-100 italic">Clear digital boundaries.</td>
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
            Boundaries & Guilt FAQ
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8">
            {[
              { q: "Is it okay to change my mind after saying yes", a: "Yes. You have the right to update your boundaries as your energy and circumstances change. Honest communication is better than resentful participation." },
              { q: "What if someone gets angry at my boundary", a: "Their reaction is a reflection of their expectations and not a reflection of your worth. You are responsible for your boundary but not for their emotional response." },
              { q: "How do I set boundaries with my boss", a: "Focus on impact and efficiency. Use phrases like to give this project my best focus I need to stick to these specific working hours." },
              { q: "Does setting boundaries make me a mean person", a: "No. Boundaries actually make you a kinder person because you are less likely to act out of bitterness or hidden frustration." },
              { q: "How do I know if I need a boundary", a: "Look for feelings of resentment or dread or exhaustion. These are usually signals that your current limits are being ignored or overstepped." },
              { q: "Can boundaries be flexible", a: "Yes. Healthy boundaries are firm enough to protect you but flexible enough to allow for exceptions in true emergencies or special situations." },
              { q: "Why is it so hard to say no to family", a: "Family dynamics often have deep and long standing roles. Setting boundaries here requires patience and a commitment to your own adult identity." },
              { q: "What should I do if my boundary is ignored", a: "A boundary is about what you will do and not what they will do. If they ignore your request you must follow through with your stated consequence." },
              { q: "Is it selfish to put my needs first", a: "Putting your needs first is self preservation. You cannot pour from an empty cup and protecting your peace allows you to be more present for others." },
              { q: "When is it time to discuss boundaries in therapy", a: "If you find yourself constantly drained or unable to say no or if you feel like you have lost your sense of self in your relationships." }
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
            <h2 className="text-2xl sm:text-4xl font-black mb-4">Reclaim your peace today.</h2>
            <p className="text-base sm:text-xl font-light mb-8 opacity-90">
              Learning to set boundaries is a journey of self discovery. Let us help you find your voice and protect your energy.
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