"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { IoChevronDown, IoChevronUp, IoCashOutline, IoCardOutline } from "react-icons/io5"; // Added IoCashOutline, IoCardOutline
import { FaShieldAlt, FaQuestionCircle } from "react-icons/fa"; // Added FaShieldAlt, FaQuestionCircle
import { motion, AnimatePresence } from "framer-motion";
import Typewriter from "typewriter-effect";

// Enhanced FAQ data structure to categorize major topics
const faqs = [
  {
    category: "Payment & Insurance",
    icon: FaShieldAlt,
    items: [
      {
        question: "What insurances do you accept?",
        answer: (
          <div className="text-gray-700">
            <p className="mb-3 font-semibold">We accept the following major health insurances:</p>
            
            <div className="grid sm:grid-cols-2 gap-x-4 gap-y-1 text-sm">
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
                </ul>
                <ul className="list-disc pl-6 space-y-1">
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
            </div>
            
            <p className="mt-4 p-3 bg-blue-50 border-l-4 border-blue-400 rounded-md">
              **Important:** You are responsible for any copays, coinsurance, or deductibles associated with your plan. Please verify coverage directly with your insurer.
            </p>
          </div>
        )
      },
      {
        question: "Do you accept self-pay or private-pay?",
        answer: (
          <div className="text-gray-700">
            <p className="mb-4">Yes, self-pay is accepted. Our transparent pricing is as follows:</p>
            
            {/* Pricing Table/Grid */}
            <div className="space-y-4">
                <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                    <h4 className="text-lg font-bold text-green-700 mb-1 flex items-center gap-2">
                        <IoCashOutline className="text-xl" /> Initial Diagnostic Evaluation
                    </h4>
                    <p className="text-3xl font-extrabold text-green-700">$200</p>
                    <ul className="list-disc pl-6 text-sm mt-1 space-y-0.5">
                        <li>60 minutes session</li>
                        <li>Comprehensive assessment & treatment planning</li>
                        <li>Includes medication management (if applicable)</li>
                    </ul>
                </div>
                
                <div className="p-4 bg-yellow-50 rounded-lg border border-yellow-200">
                    <h4 className="text-lg font-bold text-yellow-700 mb-1 flex items-center gap-2">
                         <IoCardOutline className="text-xl" /> Follow-up Session
                    </h4>
                    <p className="text-3xl font-extrabold text-yellow-700">$120</p>
                    <ul className="list-disc pl-6 text-sm mt-1 space-y-0.5">
                        <li>30 minutes session</li>
                        <li>Ongoing medication management & monitoring</li>
                    </ul>
                </div>

                <div className="p-4 bg-red-50 rounded-lg border border-red-200">
                    <h4 className="text-lg font-bold text-red-700 mb-1">Cancellation Policy</h4>
                    <p className="font-semibold text-red-700">$75 fee</p>
                    <p className="text-sm mt-1">
                        Must cancel at least 24 hours before your scheduled appointment time to avoid the fee.
                    </p>
                </div>
            </div>
          </div>
        )
      },
      {
        question: "Do you know your right as a patient?",
        answer:
          "Yes, under the ‘Patients First’ law, you have the right to transparent pricing for medical procedures and healthcare services. We are fully compliant with this regulation."
      }
    ]
  },
  {
    category: "Care & Eligibility",
    icon: FaQuestionCircle,
    items: [
        {
            question: "What ages of clients do you see?",
            answer: "We specialize in treating young adults and older, specifically those between the ages of 18–65+."
        },
        {
            question: "Do you offer telehealth / telepsych services?",
            answer:
              "Yes, we provide secure, private telehealth sessions via video or audio. This allows you to receive care conveniently from your chosen device and location."
        },
        {
            question: "In what state can I get psychiatric services?",
            answer:
              "Due to licensing laws, our psychiatric medication management services are currently available only to residents of **Texas**."
        },
        {
            question: "Can I get prescriptions for medications?",
            answer:
              "Yes, prescriptions are provided as part of treatment, but please note that **controlled substances** (such as benzodiazepines and stimulants) are generally **not prescribed** as a policy. We will discuss effective, non-controlled alternatives for your care."
        }
    ]
  }
];

// Reusable Accordion Item Component
const AccordionItem = ({ question, answer, isOpen, toggle }) => (
    <motion.div 
        className={`rounded-xl shadow-lg transition-all duration-300 ${isOpen ? 'bg-[#FFF9E5] border border-[#FFAA00]/50' : 'bg-white border border-gray-100 hover:shadow-md'}`}
        layout
    >
        <button
            onClick={toggle}
            className={`flex justify-between w-full text-left px-6 py-5 text-lg font-semibold transition-colors duration-300 ${isOpen ? 'text-gray-900' : 'text-gray-800 hover:text-gray-900'}`}
        >
            {question}
            <motion.div
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ duration: 0.3 }}
                className="flex items-center"
            >
                <IoChevronDown className={`text-2xl ${isOpen ? 'text-[#FFAA00]' : 'text-gray-500'}`} />
            </motion.div>
        </button>

        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-6 pb-6 text-gray-600 overflow-hidden"
                >
                    <div className="pt-2 leading-relaxed">{answer}</div>
                </motion.div>
            )}
        </AnimatePresence>
    </motion.div>
);


export default function FAQPage() {
  const [open, setOpen] = useState(null);

  const toggle = (i) => {
    setOpen(open === i ? null : i);
  };

  // Function to map FAQs with unique global index
  const renderFaqs = () => {
    let globalIndex = 0;
    return faqs.map((category, catIndex) => {
      const categoryItems = category.items.map((item, itemIndex) => {
        const currentIndex = globalIndex++;
        return (
          <AccordionItem
            key={currentIndex}
            question={item.question}
            answer={item.answer}
            isOpen={open === currentIndex}
            toggle={() => toggle(currentIndex)}
          />
        );
      });
      return (
        <div key={catIndex} className="space-y-8">
            <h2 className="text-3xl font-extrabold text-gray-900 border-b-4 border-[#FFAA00] inline-block pb-1 flex items-center gap-3">
                <category.icon className="text-[#FFAA00]" />
                {category.category}
            </h2>
            <div className="space-y-4">
                {categoryItems}
            </div>
        </div>
      );
    });
  };

  return (
    <div className="w-full">

      {/* HERO SECTION - Enhanced Visuals */}
      <section className="w-full py-24 lg:py-32 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-16 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* TEXT WITH TYPING EFFECT */}
          <div>
            <h1 className="text-5xl lg:text-6xl font-extrabold text-gray-900 mb-4">
              Your Questions, <span className="text-[#FFAA00]">Answered.</span>
            </h1>

            <div className="text-2xl font-medium text-gray-700 h-10">
              <Typewriter
                options={{
                  strings: [
                    "We provide clear information on insurance & fees.",
                    "Learn about our telehealth and care policies.",
                    "Your path to mental wellness starts with clarity."
                  ],
                  autoStart: true,
                  loop: true
                }}
              />
            </div>

            <p className="text-gray-600 mt-6 text-lg">
              Find detailed answers about our services, insurance, telehealth options, patient rights, and more.
            </p>
          </div>

          {/* IMAGE RIGHT SIDE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center"
          >
            <Image
              src="/faq.png"
              width={550}
              height={550}
              alt="Illustration of a person asking questions"
              className="rounded-3xl shadow-2xl object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* FAQ ACCORDION SECTION - Categorized and Polished */}
      <section className="w-full bg-[#F4F9FA] py-20 lg:py-24">
        <div className="max-w-5xl mx-auto px-6 lg:px-16 space-y-12">
            {renderFaqs()}
        </div>
      </section>

      {/* COMBINED CTA SECTION - Integrated and Prominent */}
      <section className="w-full py-20 bg-white">
        <div className="max-w-4xl mx-auto p-8 rounded-2xl shadow-xl bg-gray-50 border-t-4 border-[#FFAA00] text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 mb-4">
                Ready to Start Your Journey?
            </h2>
            <p className="text-xl text-gray-700 mb-8">
                Your questions are answered. Let's take the next step towards personalized care.
            </p>

            <Link
                href="/book-an-appointment"
                className="inline-block px-10 py-4 bg-[#FFAA00] text-gray-900 font-bold rounded-full text-xl shadow-lg transition transform hover:bg-[#e69a00] hover:scale-[1.02]"
            >
                Book Your First Appointment
            </Link>
        </div>
      </section>
    </div>
  );
}