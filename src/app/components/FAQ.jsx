"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { IoChevronDown } from "react-icons/io5";

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
              <li>Cancellation must be at least 24 hours before appointment.</li>
            </ul>
          </li>
        </ol>
      </div>
    )
  },
  {
    question: "What ages of clients do we see?",
    answer: "At this time, we only see young adults 18–65 and older."
  },
  {
    question: "Do you offer telehealth / telepsych services?",
    answer:
      "Yes, your mental health services can be offered remotely through secured private video/audio technology. You can access personalized care from a cellphone, tablet, or computer."
  },
  {
    question: "In what state can I get psychiatric services?",
    answer:
      "Our psychiatric medication management services are only available across the state of Texas."
  },
  {
    question: "Can I get prescriptions for medications?",
    answer:
      "You can get prescriptions for medications that your provider prescribes during your telehealth visit. Controlled substances, such as benzodiazepines and stimulants, are not prescribed. Alternatives will be provided."
  },
  {
    question: "Do you know your right as a patient?",
    answer:
      "Learn more about “Patients First” – a new law requiring providers to give transparent pricing information for hospital stays, medical procedures, and healthcare services."
  }
];

export default function FAQ() {
  const [open, setOpen] = useState(null);

  const toggle = (index) => {
    setOpen(open === index ? null : index);
  };

  return (
    <section className="w-full py-20 bg-[#F4F9FA]">
      <div className="max-w-7xl mx-auto px-6 lg:px-16 grid grid-cols-1 lg:grid-cols-2 gap-16">

        {/* IMAGE */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Image
            src="/faq.png"
            width={600}
            height={500}
            alt="FAQ"
            className="rounded-xl shadow-lg object-cover"
          />
        </motion.div>

        {/* ACCORDION */}
        <div>
          <h2 className="text-4xl font-bold text-gray-900 mb-8">Frequently Asked Questions</h2>

          <div className="space-y-4">
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
                      <div className="mt-2">{item.answer}</div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
