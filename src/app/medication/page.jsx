"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { IoChevronDown } from "react-icons/io5";

export default function MedicationManagementPage() {
  const faqs = [
    {
      question: "How does medication management work?",
      answer:
        "We assess your symptoms, medical history, and treatment goals to determine whether medication is appropriate. If prescribed, we monitor your response closely to ensure safety, effectiveness, and minimal side effects.",
    },
    {
      question: "Do I need medication forever?",
      answer:
        "Not necessarily. Many individuals use medication temporarily during periods of high stress or acute symptoms, while others benefit from long-term support. Treatment is personalized to your unique needs.",
    },
    {
      question: "Can medications be adjusted if I don’t feel well on them?",
      answer:
        "Yes. Medication management is an ongoing process. We can adjust dosage, switch medications, or explore alternative options to ensure the best clinical outcome.",
    },
    {
      question: "What conditions can medication help with?",
      answer:
        "Medication can support treatment for depression, anxiety, bipolar disorder, PTSD, ADHD, OCD, sleep disorders, mood instability, and more.",
    },
    {
      question: "Are controlled substances prescribed?",
      answer:
        "We do not prescribe stimulant medications or benzodiazepines. However, we offer safe, effective alternatives for anxiety, ADHD, insomnia, and mood conditions.",
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

      {/* HERO SECTION */}
      <section className="max-w-7xl mx-auto px-6 lg:px-16 py-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

        {/* IMAGE LEFT */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Image
            src="/medication.jpg"
            width={650}
            height={500}
            alt="Medication Management"
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
            Medication Management  
          </h1>

          <p className="text-lg text-gray-600 mt-6 leading-relaxed">
            Safe, effective medication management plays a powerful role in healing.  
            Our approach focuses on choosing the right medication at the right dose —  
            always centered on your comfort, safety, and long-term well-being.
          </p>

          <p className="text-lg text-gray-600 mt-4 leading-relaxed">
            We partner with you by monitoring progress, adjusting medications when needed,  
            and providing clear education so you feel informed and supported every step of the way.
          </p>

          <Link
            href="/appointments"
            className="mt-10 inline-block bg-[#FFAA00] text-black font-semibold px-8 py-4 rounded-xl shadow-lg hover:bg-[#e09a00] transition"
          >
            Book Appointment
          </Link>
        </motion.div>

      </section>

      {/* INSURANCE SECTION */}
      <section className="py-20 bg-[#F4F9FA]">
        <div className="max-w-7xl mx-auto px-6 lg:px-16 text-center">

          <h2 className="text-3xl font-bold text-gray-900 mb-6">Insurances We Accept</h2>
          <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
            We work with major insurance providers to make psychiatric care accessible and affordable.
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

          {/* LEFT SIDE IMAGE */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Image
              src="/faq.png"
              width={600}
              height={500}
              alt="FAQ Image"
              className="rounded-xl shadow-lg object-cover"
            />
          </motion.div>

          {/* RIGHT SIDE FAQ ACCORDION */}
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
