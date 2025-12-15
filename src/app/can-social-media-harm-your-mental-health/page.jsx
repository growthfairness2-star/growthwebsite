"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

export default function SocialMediaAndMentalHealth() {
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
            Can Social Media Harm Your Mental Health? The Digital Well-being Check
          </h1>

          <p className="text-gray-600 text-sm md:text-base mb-6">
            Dec 15, 2025
          </p>

          <p className="text-gray-700 text-base md:text-lg leading-relaxed max-w-xl mx-auto md:mx-0 text-justify">
            Social media platforms, designed to connect us, can sometimes become
            sources of anxiety, comparison, and decreased self-esteem. Understanding
            the potential risks is the first step toward a healthier digital life.
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
            src="/health.png"
            alt="Person checking their mental health on a digital device"
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
          The constant stream of curated content often presents an idealized,
          unrealistic view of life. This can lead to what psychologists call
          'social comparison theory,' where users measure their own lives against
          the highlights of others, fostering feelings of inadequacy, envy, and
          failure. The comparison trap is especially strong among younger users
          whose sense of self-worth is still developing.
        </p>

        <p className="text-lg leading-relaxed mb-6 text-justify">
          Another significant risk is the impact on sleep and attention. Late-night
          scrolling exposes the brain to blue light, interfering with melatonin
          production and disrupting sleep cycles. Furthermore, the quick dopamine
          hits from likes and notifications train the brain to crave constant
          stimulation, making it harder to focus on complex, long-form tasks and
          contributing to 'fear of missing out' (FOMO).
        </p>

        <p className="text-lg leading-relaxed mb-6 text-justify">
          For some, excessive use can lead to social isolation despite the apparent
          "connection." Replacing face-to-face interactions with digital ones can
          deprive individuals of the non-verbal cues and emotional depth necessary
          for genuine connection, leading to increased feelings of loneliness.
          Cyberbullying and negative comments also present a direct and immediate
          threat to emotional well-being, particularly for vulnerable groups.
        </p>

        <p className="text-lg leading-relaxed mb-6 text-justify">
          Mitigating these harms involves setting clear boundaries: implementing
          "digital detox" periods, being mindful of who and what you follow, and
          intentionally prioritizing real-world activities. Using social media
          as a tool for positive interaction and support, rather than a measuring
          stick for self-worth, is key to navigating the digital world safely.
          Taking control of your feed can restore balance and protect your peace of mind.
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