"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

export default function SchizophreniaBeyondTheMythsUnderstandingRealityPerception() {
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
            Schizophrenia Beyond the Myths Understanding Reality Perception
          </h1>

          <p className="text-gray-600 text-sm md:text-base mb-6">
            December 15 2025
          </p>

          <p className="text-gray-700 text-base md:text-lg leading-relaxed max-w-xl mx-auto md:mx-0 text-justify">
            Schizophrenia is often surrounded by fear and misunderstanding.
            In reality it is a complex mental health condition that affects how a person
            experiences thoughts perceptions and meaning.
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
            src="/blog4.png"
            alt="Understanding schizophrenia and perception"
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
          Schizophrenia affects the way the brain processes information.
          People living with this condition may experience changes in how they interpret
          reality. Thoughts can feel disorganized or disconnected. Sounds images or ideas
          may seem more intense or unusually meaningful. These experiences are not a choice
          and they are not a reflection of weakness or character.
        </p>

        <p className="text-lg leading-relaxed mb-6 text-justify">
          One of the most challenging aspects of schizophrenia is the feeling of being
          misunderstood. A person may struggle to explain what they are experiencing.
          Conversations can become difficult and social withdrawal may follow.
          This isolation often comes from confusion or fear rather than a lack of interest
          in others. Compassion and patience from loved ones can make a powerful difference.
        </p>

        <p className="text-lg leading-relaxed mb-6 text-justify">
          Another important truth is that schizophrenia does not erase identity.
          People with this condition still have goals creativity humor and emotional depth.
          With the right support many are able to build meaningful routines and relationships.
          Stability often comes gradually through consistent care understanding environments
          and professional guidance tailored to individual needs.
        </p>

        <p className="text-lg leading-relaxed mb-6 text-justify">
          Education plays a key role in reducing stigma.
          When schizophrenia is viewed with empathy rather than fear it becomes easier to
          recognize the human experience behind the diagnosis. Recovery is not about forcing
          someone to be different. It is about helping them feel safe grounded and supported.
          With understanding structure and hope people living with schizophrenia can find
          clarity purpose and moments of peace in their lives.
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
            Explore Mental Health Resources
          </button>
        </div>
      </motion.section>
    </div>
  );
}
