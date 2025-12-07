"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function PsychotherapyPage() {
  return (
    <section className="w-full bg-white pb-20">

      {/* ================= HERO SECTION ================= */}
      <div className="relative w-full h-[450px] lg:h-[550px] rounded-b-[40px] overflow-hidden">
        <Image
          src="/therapy.png"
          alt="Psychotherapy"
          fill
          className="object-cover brightness-90"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl lg:text-6xl font-extrabold text-white text-center"
          >
            Psychotherapy
          </motion.h1>
        </div>
      </div>

      {/* ================= ABOUT SECTION ================= */}
      <div className="max-w-6xl mx-auto px-6 lg:px-16 mt-16">
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-gray-900 mb-6"
        >
          Evidence-Based Talk Therapy for Emotional Healing & Growth
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-lg text-gray-700 leading-relaxed mb-6"
        >
          Psychotherapy — also known as talk therapy — is a collaborative, supportive space 
          where you can explore your thoughts, emotions, behaviors, and life patterns with a 
          trained mental health professional. It helps you gain clarity, reduce emotional distress, 
          and build healthier coping strategies.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-lg text-gray-700 leading-relaxed"
        >
          Whether you're navigating anxiety, depression, trauma, relationship stress, or major 
          life transitions, psychotherapy empowers you to heal and create meaningful change 
          at your own pace — in a safe, compassionate environment.
        </motion.p>
      </div>

      {/* ================= BENEFITS SECTION ================= */}
      <div className="max-w-6xl mx-auto px-6 lg:px-16 mt-20">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Benefits of Psychotherapy</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            "Gain emotional clarity and understanding",
            "Improve communication and relationships",
            "Develop healthier coping mechanisms",
            "Reduce anxiety, depression, and stress symptoms",
            "Heal from trauma and painful experiences",
            "Learn to manage negative thinking patterns"
          ].map((text, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="bg-[#F8FBFD] border border-gray-200 rounded-xl p-6 shadow-sm"
            >
              <p className="text-gray-800 text-lg">{text}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ================= CONDITIONS WE TREAT ================= */}
      <div className="max-w-6xl mx-auto px-6 lg:px-16 mt-20">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Psychotherapy Helps With</h2>

        <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 text-gray-700 text-lg">
          {[
            "Depression",
            "Generalized Anxiety",
            "Social Anxiety",
            "PTSD & Trauma Recovery",
            "Relationship & Family Difficulties",
            "Bipolar Disorder (Supportive Therapy)",
            "Grief & Loss",
            "Stress & Burnout",
            "Life Transitions",
          ].map((item, idx) => (
            <li key={idx} className="bg-gray-50 p-4 border rounded-lg">
              {item}
            </li>
          ))}
        </ul>
      </div>

      {/* ================= INSURANCES SECTION ================= */}
      <div className="max-w-6xl mx-auto px-6 lg:px-16 mt-24">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Insurance We Accept</h2>

        <p className="text-gray-600 mb-6">
          We work with major insurance providers to ensure therapy remains accessible.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8">
          {[
            "insurances1.jpeg",
            "insurances2.jpeg",
            "insurances3.jpeg",
            "insurances4.jpeg",
            "insurances5.jpeg",
          ].map((logo, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              className="bg-white border rounded-xl shadow p-3 flex justify-center items-center"
            >
              <Image src={`/${logo}`} width={120} height={80} alt="Insurance Logo" />
            </motion.div>
          ))}
        </div>
      </div>

      {/* ================= FAQ SECTION ================= */}
      <div className="max-w-6xl mx-auto px-6 lg:px-16 mt-24">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>

        <div className="space-y-6">
          {[
            {
              q: "How often do psychotherapy sessions occur?",
              a: "Most clients attend weekly or bi-weekly sessions, depending on their needs and goals."
            },
            {
              q: "Is psychotherapy confidential?",
              a: "Yes. Everything discussed in therapy is confidential, with few legal exceptions."
            },
            {
              q: "How long does psychotherapy last?",
              a: "Some clients benefit from short-term therapy (6–12 sessions), while others continue longer for deeper healing."
            },
            {
              q: "Can therapy be done virtually?",
              a: "Absolutely. We offer secure and private teletherapy sessions for convenience and comfort."
            }
          ].map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="p-6 border rounded-xl bg-gray-50"
            >
              <h3 className="font-semibold text-gray-900 text-lg mb-2">{faq.q}</h3>
              <p className="text-gray-700">{faq.a}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ================= CALL-TO-ACTION ================= */}
      <div className="text-center mt-20">
        <Link
          href="/appointments"
          className="px-10 py-4 bg-[#FFAA00] text-black rounded-xl text-lg font-semibold hover:opacity-90 transition"
        >
          Book an Appointment
        </Link>
      </div>

    </section>
  );
}
