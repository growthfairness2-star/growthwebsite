"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { IoChevronDown } from "react-icons/io5";

export default function TelepsychiatryPage() {
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
      ),
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
      ),
    },
    {
      question: "What ages of clients do we see?",
      answer: "At this time, we only see young adults 18–65 and older.",
    },
    {
      question: "Do you offer telehealth / telepsych services?",
      answer:
        "Yes, your mental health services can be offered remotely through secured private video/audio technology. You can access personalized care from a cellphone, tablet, or computer.",
    },
    {
      question: "In what state can I get psychiatric services?",
      answer:
        "Our psychiatric medication management services are only available across the state of Texas.",
    },
    {
      question: "Can I get prescriptions for medications?",
      answer:
        "You can get prescriptions for medications that your provider prescribes during your telehealth visit. Controlled substances, such as benzodiazepines and stimulants, are not prescribed. Alternatives will be provided.",
    },
    {
      question: "Do you know your right as a patient?",
      answer:
        "Learn more about “Patients First” – a new law requiring providers to give transparent pricing information for hospital stays, medical procedures, and healthcare services.",
    },
  ];

  const [open, setOpen] = useState(null);
  const toggle = (i) => setOpen(open === i ? null : i);

  const insuranceImages = Array.from({ length: 16 }).map((_, i) => ({
    src: `/insurances${i + 1}.jpeg`,
    alt: `Insurance ${i + 1}`,
  }));

  return (
    <div className="w-full bg-white">

      {/* HERO */}
      <section className="max-w-7xl mx-auto px-6 lg:px-16 py-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* IMAGE LEFT */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Image 
            src="/telepsychiatry.jpg"
            width={650}
            height={500}
            alt="Telepsychiatry Session"
            className="rounded-2xl shadow-xl object-cover"
          />
        </motion.div>

        {/* TEXT RIGHT */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl font-bold text-gray-900 leading-tight">
            Telepsychiatry — Compassionate Care, Wherever You Are
          </h1>

          <p className="text-lg text-gray-600 mt-6 leading-relaxed">
            Our secure telepsychiatry services allow you to receive expert mental health care 
            without leaving home. Whether you’re managing anxiety, depression, ADHD, or other 
            mental health conditions, you can access personalized psychiatric support through 
            confidential video sessions.
          </p>

          <Link 
            href="/appointments"
            className="mt-10 inline-block bg-[#FFAA00] text-black font-semibold px-8 py-4 rounded-xl shadow-lg hover:bg-[#e09a00] transition"
          >
            Book Appointment
          </Link>
        </motion.div>

      </section>

      {/* INSURANCES WE ACCEPT */}
      <section className="py-20 bg-[#F4F9FA]">
        <div className="max-w-7xl mx-auto px-6 lg:px-16 text-center">

          <h2 className="text-3xl font-bold text-gray-900 mb-6">Insurances We Accept</h2>
          <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
            We partner with major insurance providers to make mental health care accessible and affordable.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8">
            {insuranceImages.map((ins, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition flex justify-center items-center"
              >
                <Image 
                  src={ins.src}
                  width={130}
                  height={90}
                  alt={ins.alt}
                  className="object-contain"
                />
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-16 grid grid-cols-1 lg:grid-cols-2 gap-16">

          {/* FAQ IMAGE */}
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

          {/* FAQ ACCORDION */}
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-8">Frequently Asked Questions</h2>

            <div className="space-y-4">
              {faqs.map((item, i) => (
                <div key={i} className="border border-gray-200 rounded-xl bg-white shadow-sm">
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

      {/* FINAL CTA */}
      <div className="text-center py-20">
        <Link
          href="/appointments"
          className="px-10 py-4 bg-[#FFAA00] text-black text-xl font-semibold rounded-xl shadow-lg hover:bg-[#e09a00] transition"
        >
          Book an Appointment
        </Link>
      </div>

    </div>
  );
}
