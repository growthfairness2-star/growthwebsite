"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

export default function PsychiatricEvaluation() {
  // INSURANCE IMAGES (1–16)
  const insuranceLogos = Array.from({ length: 16 }).map((_, i) => `/insurances${i + 1}.jpeg`);

  return (
    <section className="w-full bg-white pb-20">

      {/* HERO SECTION */}
      <div className="relative w-full h-[450px] rounded-b-[40px] overflow-hidden">
        <Image
          src="/psy.jpg"
          fill
          alt="Psychiatric Evaluation"
          className="object-cover brightness-90"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-extrabold text-white text-center"
          >
            Psychiatric Evaluation
          </motion.h1>
        </div>
      </div>

      {/* ABOUT SECTION */}
      <div className="max-w-6xl mx-auto px-6 lg:px-16 mt-16">
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-gray-900 mb-6"
        >
          Understanding Your Mind — With Clarity and Compassion
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-lg text-gray-700 leading-relaxed mb-8"
        >
          A psychiatric evaluation is the first step in understanding your mental health.
          It gives you a clear, accurate diagnosis and helps your provider create a treatment 
          plan tailored to your needs. Whether you're experiencing anxiety, depression, ADHD, 
          trauma symptoms, or major changes in mood or behavior, an evaluation provides the 
          clarity and direction you deserve.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-lg text-gray-700 leading-relaxed"
        >
          At GrowthFairness Psychiatry, we conduct modern, evidence-based psychiatric 
          evaluations through a safe, compassionate, and judgment-free approach — 
          designed to get to the heart of what you're experiencing.
        </motion.p>
      </div>

      {/* WHAT TO EXPECT SECTION */}
      <div className="max-w-6xl mx-auto px-6 lg:px-16 mt-20">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">What to Expect During Your Evaluation</h2>

        <div className="grid md:grid-cols-2 gap-8">

          {[
            "Discussion about your symptoms, thoughts, and daily experiences.",
            "Review of medical history, mental health history, and family background.",
            "Screening for conditions like depression, anxiety, ADHD, PTSD, and more.",
            "Evaluation of mood, concentration, memory, and emotional patterns.",
            "Personalized recommendations and next steps for treatment."
          ].map((point, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="p-6 rounded-xl bg-[#F8FBFD] border border-gray-200 shadow-sm"
            >
              <p className="text-gray-800 text-lg">{point}</p>
            </motion.div>
          ))}

        </div>
      </div>

      {/* CONDITIONS */}
      <div className="max-w-6xl mx-auto px-6 lg:px-16 mt-20">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Conditions We Frequently Diagnose</h2>

        <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 text-gray-700 text-lg">
          {[
            "Depression",
            "Anxiety Disorders",
            "ADHD (Teens & Adults)",
            "PTSD & Trauma Disorders",
            "Bipolar Disorder",
            "Obsessive-Compulsive Disorder (OCD)",
            "Schizophrenia Spectrum Disorders",
            "Substance Use Concerns"
          ].map((item, idx) => (
            <li key={idx} className="bg-gray-50 p-4 rounded-lg border">
              {item}
            </li>
          ))}
        </ul>
      </div>

      {/* INSURANCES */}
      <div className="max-w-6xl mx-auto px-6 lg:px-16 mt-24">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Insurance We Accept</h2>

        <p className="text-gray-600 mb-6">
          We partner with major insurance providers to make psychiatric care accessible and affordable.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8">
          {insuranceLogos.map((src, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              className="bg-white border rounded-xl shadow p-3 flex justify-center items-center"
            >
              <Image src={src} width={120} height={80} alt={`Insurance ${i + 1}`} />
            </motion.div>
          ))}
        </div>
      </div>

      {/* FAQ SECTION */}
      <div className="max-w-6xl mx-auto px-6 lg:px-16 mt-24">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>

        <div className="space-y-6">

          {[
            {
              q: "How long does a psychiatric evaluation take?",
              a: "Most evaluations take 45–60 minutes depending on your needs and the complexity of symptoms."
            },
            {
              q: "Do I need to prepare anything before my appointment?",
              a: "No preparation is required, but bringing notes about your symptoms can be helpful."
            },
            {
              q: "Will I get a diagnosis during the first visit?",
              a: "In most cases, yes. Your provider will discuss your results and treatment recommendations with you."
            },
            {
              q: "Is this covered by insurance?",
              a: "Yes. Most major insurance plans cover psychiatric evaluations. We also offer self-pay options."
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

      {/* CTA */}
      <div className="text-center mt-20">
        <Link
          href="/appointments"
          target="_blank"
          className="px-10 py-4 bg-[#FFAA00] text-black rounded-xl text-lg font-semibold hover:opacity-90 transition"
        >
          Book Appointment
        </Link>
      </div>

    </section>
  );
}
