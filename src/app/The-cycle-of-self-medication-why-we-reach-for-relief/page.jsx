"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

export default function SelfMedicationCycle() {
  const router = useRouter();

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <div
      className="min-h-screen flex flex-col"
      style={{
        background:
          "linear-gradient(180deg, #FAFAF8 0%, #FDFCF9 60%, #F7F5EF 100%)",
      }}
    >
      {/* ===== HERO SECTION ===== */}
      <section className="flex flex-col md:flex-row items-center justify-between overflow-hidden bg-white/80 backdrop-blur-sm shadow-sm rounded-b-[2rem]">
        {/* TEXT SIDE */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="w-full md:w-1/2 p-10 md:p-20 text-center md:text-left"
        >
          <h1
            className="text-3xl md:text-5xl font-bold mb-4 leading-snug"
            style={{
              background: "linear-gradient(90deg, #000000ff, #a2dd0cff)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            The Cycle of Self-Medication: Why We Reach for Relief
          </h1>

          <p className="text-gray-600 text-sm md:text-base mb-6">
            Dec 16, 2025
          </p>

          <p className="text-gray-700 text-base md:text-lg leading-relaxed max-w-xl mx-auto md:mx-0 text-justify">
            Substance use often begins not as a search for a high, but as a
            desperate search for a "normal." For many, it is a survival
            mechanism used to quiet the internal noise of trauma, anxiety, or
            unseen emotional pain.
          </p>
        </motion.div>

        {/* IMAGE SIDE */}
        <motion.div
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="w-full md:w-1/2 h-[40vh] md:h-[70vh] relative"
        >
          <Image
            src="/blog5.png"
            alt="The cycle of self medication and mental health"
            fill
            priority
            className="object-cover object-center rounded-bl-[2rem] md:rounded-none"
          />
        </motion.div>
      </section>

      {/* ===== MAIN CONTENT ===== */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        animate="show"
        className="max-w-4xl mx-auto px-6 md:px-10 py-16 text-gray-800"
      >
        <p className="text-lg leading-relaxed mb-6 text-justify">
          The term "self-medication" refers to the use of substances—whether
          alcohol, prescription drugs, or illicit ones—to manage the symptoms of
          an underlying mental health condition. When the weight of depression
          becomes too heavy, or when anxiety makes the world feel dangerously
          unpredictable, the brain naturally looks for an escape. For a brief
          moment, a substance might provide the silence, the energy, or the
          numbness that the person has been craving. This initial relief is
          often where the cycle begins.
        </p>

        <p className="text-lg leading-relaxed mb-6 text-justify">
          Unfortunately, what starts as a temporary solution quickly transforms
          into a new problem. The brain is an incredibly adaptive organ; when it
          is repeatedly introduced to a substance, it begins to adjust its own
          chemistry. This leads to tolerance, meaning the "relief" becomes
          harder to achieve and requires more of the substance. As the effects
          wear off, the original mental health symptoms often return with
          increased intensity, creating a rebound effect that makes the internal
          pain feel even more unbearable than before.
        </p>

        <p className="text-lg leading-relaxed mb-6 text-justify">
          Breaking this cycle is rarely a matter of willpower alone. It is a
          complex physiological and psychological battle. Many people feel
          immense shame, believing their struggle is a character flaw rather
          than a neurological response to pain. However, it is vital to
          recognize that the substance use is often a symptom of something
          deeper. Treating the substance use without addressing the underlying
          anxiety, trauma, or depression is like trying to put out a fire while
          the gas line is still open.
        </p>

        <p className="text-lg leading-relaxed mb-6 text-justify">
          The path to recovery involves untangling these two threads: the
          dependence on the substance and the mental health challenges that
          fueled it. This is often referred to as "dual diagnosis" care. It
          requires building new, healthy coping mechanisms that can eventually
          take the place of the substance. This process involves rewiring the
          brain’s reward system and learning to navigate difficult emotions
          without the "buffer" that substances once provided.
        </p>

        <p className="text-lg leading-relaxed mb-6 text-justify">
          If you or someone you love is caught in this loop, remember that the
          reach for relief is a human instinct. Recovery isn't just about
          stopping a behavior; it’s about healing the hurt that made that
          behavior feel necessary in the first place. With professional support,
          patience, and a holistic approach to mental wellness, it is possible
          to find a lasting peace that doesn't disappear when the substance
          wears off.
        </p>

        {/* CTA BUTTON */}
        <div className="mt-12 text-center">
          <button
            onClick={() => router.push("/blog")}
            className="px-8 py-3 rounded-full font-semibold text-white shadow-md transition hover:opacity-90"
            style={{
              background: "linear-gradient(90deg, #000000ff, #000000ff)",
            }}
          >
            Explore More Insights
          </button>
        </div>
      </motion.section>
    </div>
  );
}