"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

/** * SEO CONFIGURATION 
 * Optimized for 2026 counseling services and therapeutic support.
 */
const metadata = {
  title: "Counseling Services: Personalized Therapeutic Support",
  description: "Experience evidence-based counseling tailored to your needs. From individual therapy to family and youth support, we provide a safe space for healing.",
  keywords: [
    "counseling services 2026", 
    "individual therapy", 
    "family counseling", 
    "youth therapy", 
    "CBT and DBT therapy", 
    "group therapy sessions", 
    "mental health counseling"
  ],
  image: "/blog16.png", // Using blog16.png as requested for therapeutic context
  url: "https://growthfairness.com/counseling-services"
};

export default function CounselingServices() {
  const router = useRouter();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const serviceCards = [
    {
      title: "Individual Therapy",
      desc: "One-on-one sessions focused on navigating life transitions, managing stress, and developing personalized coping strategies.",
      link: "/individual-therapy"
    },
    {
      title: "Family Counseling",
      desc: "Strengthening familial bonds by improving communication patterns and resolving deep-seated systemic conflicts.",
      link: "/family-counseling"
    },
    {
      title: "Group Therapy",
      desc: "Find healing through shared experiences in a moderated, safe environment designed to reduce isolation.",
      link: "/group-therapy"
    },
    {
      title: "CBT & DBT",
      desc: "Evidence-based behavioral interventions to help you rewire negative thought patterns and regulate emotional states.",
      link: "/behavioral-therapy"
    },
    {
      title: "Youth Counseling",
      desc: "Specialized emotional support for children and adolescents dealing with school stress, anxiety, or behavioral changes.",
      link: "/youth-support"
    },
    {
      title: "Trauma-Informed Care",
      desc: "Safe, compassionate therapy focused on processing past trauma and reclaiming your sense of security.",
      link: "/post-traumatic-stress-disorder-PTSD-symptoms-and-causes"
    }
  ];

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
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-black mb-6 leading-tight text-gray-900 break-words">
            Therapeutic <br />
            <span
              className="font-light italic"
              style={{
                background: "linear-gradient(90deg, #EAB308, #FACC15)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Counseling Support
            </span>
          </h1>

          <p className="text-gray-600 text-lg sm:text-xl font-light leading-relaxed text-justify">
            Healing is a collaborative journey. Our counseling services are designed to provide the tools, safety, and expert guidance needed to foster lasting emotional resilience.
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
            alt="Compassionate counseling session environment"
            fill
            priority
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </motion.div>
      </section>

      {/* ===== Services Grid ===== */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="w-full max-w-7xl mx-auto px-4 sm:px-8 md:px-12 py-12 sm:py-20"
      >
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mb-4">Our Counseling Modalities</h2>
          <div className="w-24 h-1 bg-[#EAB308] mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-10">
          {serviceCards.map((service, idx) => (
            <div 
              key={idx} 
              className="group p-8 rounded-[2rem] border border-gray-100 bg-white hover:bg-yellow-50 transition-all duration-300 shadow-sm hover:shadow-md cursor-pointer flex flex-col justify-between"
              onClick={() => router.push(service.link)}
            >
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-[#A16207]">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-6 text-sm sm:text-base">
                  {service.desc}
                </p>
              </div>
              <div className="text-[#EAB308] font-bold text-sm uppercase tracking-widest flex items-center">
                View Details 
                <span className="ml-2 group-hover:translate-x-2 transition-transform">→</span>
              </div>
            </div>
          ))}
        </div>
      </motion.section>

      {/* ===== Therapy Philosophy ===== */}
      <section className="bg-gray-50 py-16 sm:py-24">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-12">Our Therapeutic Approach</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-12">
            {[
              { title: "Compassionate", text: "We prioritize a non-judgmental environment where your story is heard and honored." },
              { title: "Empowering", text: "Our goal is to equip you with practical tools to manage your mental health independently." },
              { title: "Inclusive", text: "Care that respects all identities, cultures, and diverse life experiences." }
            ].map((item, i) => (
              <div key={i}>
                <h4 className="font-bold text-[#CA8A04] text-lg mb-2">{item.title}</h4>
                <p className="text-gray-600 text-sm leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <div className="mt-16 sm:mt-24 text-center px-4 mb-20">
        <div className="max-w-4xl mx-auto p-8 sm:p-12 bg-gradient-to-br from-[#EAB308] to-[#FACC15] rounded-[2rem] sm:rounded-[4rem] text-white shadow-lg">
          <h2 className="text-2xl sm:text-4xl font-black mb-4">Begin Your Healing Journey</h2>
          <p className="text-base sm:text-xl font-light mb-8 opacity-90">
            Professional counseling can provide the clarity and support you've been looking for.
          </p>

          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-white text-gray-900 px-8 py-3 rounded-full font-bold text-base hover:bg-yellow-50 transition-all active:scale-95"
          >
            Schedule a Consultation
          </button>
        </div>
      </div>

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
              <h3 className="text-xl font-bold text-gray-900 mb-6">How would you like to pay?</h3>
              <div className="flex flex-col gap-3">
                <button onClick={() => router.push('/insurances')} className="w-full py-4 bg-[#EAB308] text-white font-bold rounded-xl active:bg-[#CA8A04]">
                  Use Insurance
                </button>
                <button onClick={() => router.push('/selfpay')} className="w-full py-4 bg-gray-100 text-gray-900 font-bold rounded-xl active:bg-gray-200">
                  Self-Pay / Private
                </button>
                <button onClick={() => setIsModalOpen(false)} className="mt-2 text-gray-400 text-sm">
                  Cancel
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}