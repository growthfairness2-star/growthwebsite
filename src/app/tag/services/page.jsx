"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

/** * SEO CONFIGURATION 
 * Optimized for 2025 psychiatric service overview and mental health accessibility.
 */
const metadata = {
  title: "Mental Health Services: Specialized Psychiatric & Therapeutic Care",
  description: "Explore our comprehensive range of mental health services, from medication management and Spravato to specialized therapy for PTSD, ADHD, and Depression.",
  keywords: [
    "psychiatric services 2025", 
    "mental health treatments", 
    "telehealth psychiatry", 
    "medication management services", 
    "Spravato treatment center", 
    "therapy for anxiety and depression", 
    "holistic mental health care"
  ],
  image: "/therapy.png", 
  url: "https://growthfairness.com/services"
};

export default function ServicesOverview() {
  const router = useRouter();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const serviceCards = [
    {
      title: "Medication Management",
      desc: "Expert psychiatric evaluation and ongoing monitoring to optimize your medication regimen for safety and efficacy.",
      link: "/medication-management-2"
    },
    {
      title: "Spravato (Esketamine)",
      desc: "FDA-approved nasal spray for treatment-resistant depression, administered under professional clinical supervision.",
      link: "/spravato-esketamine-therapy"
    },
    {
      title: "Psychotherapy",
      desc: "Evidence-based talk therapy including CBT, DBT-informed care, and trauma-focused approaches to help you process and grow.",
      link: "/tag/breaking-mental-health-stigma"
    },
    {
      title: "Trauma & PTSD Care",
      desc: "Specialized support for those recovering from traumatic events, utilizing modern protocols to reclaim peace of mind.",
      link: "/post-traumatic-stress-disorder-PTSD-symptoms-and-causes"
    },
    {
      title: "ADHD & Cognitive Support",
      desc: "Comprehensive diagnostic and management strategies to improve focus, executive function, and daily productivity.",
      link: "/services" // Placeholder or specific ADHD link if exists
    },
    {
      title: "Culturally Responsive Care",
      desc: "Mental health support that honors your heritage, identity, and unique cultural background.",
      link: "/tag/cultural-background-and-mental-health"
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
            Comprehensive <br />
            <span
              className="font-light italic"
              style={{
                background: "linear-gradient(90deg, #EAB308, #FACC15)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Mental Health Care
            </span>
          </h1>

          <p className="text-gray-600 text-lg sm:text-xl font-light leading-relaxed text-justify">
            From breakthrough clinical treatments to compassionate talk therapy, we offer a full spectrum of services designed to meet you wherever you are on your journey to wellness.
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
            alt="Compassionate healthcare services"
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
          <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mb-4">Our Specializations</h2>
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
                Learn More 
                <span className="ml-2 group-hover:translate-x-2 transition-transform">→</span>
              </div>
            </div>
          ))}
        </div>
      </motion.section>

      {/* ===== Why Choose Us Section ===== */}
      <section className="bg-gray-50 py-16 sm:py-24">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-12">Patient-Centered Excellence</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-12">
            {[
              { title: "Evidence-Based", text: "Treatments backed by clinical research and modern psychiatry." },
              { title: "Personalized", text: "No two minds are the same. We tailor every plan to your specific biology." },
              { title: "Accessible", text: "Telehealth and in-person options to fit your lifestyle and needs." }
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
          <h2 className="text-2xl sm:text-4xl font-black mb-4">Ready to get started?</h2>
          <p className="text-base sm:text-xl font-light mb-8 opacity-90">
            Take the first step toward a healthier, more balanced life today.
          </p>

          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-white text-gray-900 px-8 py-3 rounded-full font-bold text-base hover:bg-yellow-50 transition-all active:scale-95"
          >
            Book an Appointment
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