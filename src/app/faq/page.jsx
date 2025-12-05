"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { IoChevronDown } from "react-icons/io5";
import { motion, AnimatePresence } from "framer-motion";
import Typewriter from "typewriter-effect";

const faqs = [
  {
    question: "What insurances do you accept?",
    answer: (
      <div>
        <p className="mb-2">We accept the following <strong>health insurances:</strong></p>
        <ul className="list-disc pl-6 space-y-1">
          <li>Oscar Health</li>
          <li>Blue Cross Blue Shield of Texas</li>
          <li>United Healthcare</li>
          <li>Oxford</li>
          <li>Cigna</li>
          <li>Aetna</li>
          <li>Optum Behavioral Health</li>
          <li>UMR</li>
          <li>Golden Rule</li>
          <li>US Health Group</li>
          <li>GEHA</li>
          <li>Harvard Pilgrim Health</li>
          <li>TUFTS</li>
          <li>Meritain</li>
          <li>Coventry</li>
          <li>Nippon Life Benefits</li>
          <li>Chapman Boone</li>
          <li>Evernorth</li>
        </ul>
        <p className="mt-3">
          You’re responsible for any copays, coinsurance, or deductibles associated with your plan.
          Your insurance will cover the rest.
        </p>
      </div>
    )
  },
  {
    question: "Do you accept self-pay or private-pay?",
    answer: (
      <div>
        <p>Yes, self-pay is accepted as below:</p>
        <ol className="list-decimal pl-6 space-y-2 mt-2">
          <li>
            <strong>Initial diagnostic evaluation:</strong>
            <ul className="list-disc pl-6">
              <li><strong>$200</strong></li>
              <li>60 minutes</li>
              <li>Comprehensive assessment</li>
              <li>Medication management</li>
            </ul>
          </li>
          <li>
            <strong>Follow-up session:</strong>
            <ul className="list-disc pl-6">
              <li><strong>$120</strong></li>
              <li>30 minutes</li>
              <li>Medication management</li>
            </ul>
          </li>
          <li>
            <strong>No-show or late cancellation:</strong>
            <ul className="list-disc pl-6">
              <li><strong>$75 fee</strong></li>
              <li>Must cancel 24 hours before appointment.</li>
            </ul>
          </li>
        </ol>
      </div>
    )
  },
  {
    question: "What ages of clients do you see?",
    answer: "We only see young adults between ages 18–65 and older."
  },
  {
    question: "Do you offer telehealth / telepsych services?",
    answer:
      "Yes, we provide secure, private telehealth sessions via video or audio from your chosen device and location."
  },
  {
    question: "In what state can I get psychiatric services?",
    answer:
      "Our psychiatric medication management services are available only in Texas."
  },
  {
    question: "Can I get prescriptions for medications?",
    answer:
      "Yes, but controlled substances (benzodiazepines, stimulants) are not prescribed. Alternatives will be provided."
  },
  {
    question: "Do you know your right as a patient?",
    answer:
      "The ‘Patients First’ law requires transparent pricing for medical procedures and healthcare services."
  }
];

export default function FAQPage() {
  const [open, setOpen] = useState(null);

  const toggle = (i) => {
    setOpen(open === i ? null : i);
  };

  return (
    <div className="w-full">

      {/* HERO SECTION */}
      <section className="w-full py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* TEXT WITH TYPING EFFECT */}
          <div>
            <h1 className="text-5xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h1>

            <div className="text-2xl font-medium text-[#FFAA00] h-10">
              <Typewriter
                options={{
                  strings: [
                    "Your questions, answered clearly.",
                    "Learn more about our services.",
                    "We're here to help you understand your care."
                  ],
                  autoStart: true,
                  loop: true
                }}
              />
            </div>

            <p className="text-gray-600 mt-4 text-lg">
              Find detailed answers about our services, insurance, telehealth options, patient rights, and more.
            </p>
          </div>

          {/* IMAGE RIGHT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Image
              src="/faq.png"
              width={600}
              height={500}
              alt="FAQ Image"
              className="rounded-xl shadow-lg"
            />
          </motion.div>
        </div>
      </section>

      {/* FAQ ACCORDION SECTION */}
      <section className="w-full bg-[#F4F9FA] py-20">
        <div className="max-w-5xl mx-auto px-6 lg:px-16">
          <div className="space-y-6">
            {faqs.map((item, i) => (
              <div key={i} className="border border-gray-200 rounded-xl bg-white">
                <button
                  onClick={() => toggle(i)}
                  className="flex justify-between w-full text-left px-6 py-4 text-lg font-medium text-gray-900"
                >
                  {item.question}
                  <motion.div
                    animate={{ rotate: open === i ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <IoChevronDown className="text-2xl" />
                  </motion.div>
                </button>

                <AnimatePresence>
                  {open === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="px-6 pb-6 text-gray-600 overflow-hidden"
                    >
                      <div>{item.answer}</div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="w-full py-20 bg-white text-center">
        <h2 className="text-3xl font-bold mb-6">Do you want to book an appointment?</h2>

        <Link
          href="/book-an-appointment"
          className="px-8 py-4 bg-[#FFAA00] text-black font-semibold rounded-lg text-lg hover:opacity-90 transition"
        >
          Book Appointment
        </Link>
      </section>
    </div>
  );
}
