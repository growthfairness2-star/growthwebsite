"use client";

import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

const conditions = [
  {
    name: "Depression",
    image: "/homedepression.jpg",
    description:
      "We provide evidence-based treatment for depression using medication management, psychotherapy, and holistic approaches tailored to each individual."
  },
  {
    name: "Anxiety",
    image: "/homeanxiety.jpg",
    description:
      "Our anxiety care includes personalized strategies to improve coping skills, reduce symptoms, and restore emotional balance."
  },
  {
    name: "ADHD",
    image: "/homeadhd.jpg",
    description:
      "We diagnose and treat ADHD in teens and adults, offering medication management and behavioral support for improved daily functioning."
  },
  {
    name: "PTSD",
    image: "/homeptsd.jpg",
    description:
      "Our trauma-informed therapy and psychiatric care help patients process trauma, reduce triggers, and regain emotional safety."
  },
  {
    name: "Schizophrenia",
    image: "/homeschizo.jpg",
    description:
      "Comprehensive psychiatric support, medication stabilization, and long-term treatment plans for schizophrenia and related disorders."
  },
  {
    name: "Substance Use",
    image: "/homesubstance.jpg",
    description:
      "We assist individuals struggling with substance use through supportive therapy and integrated psychiatric care."
  }
];

export default function ConditionsTabs() {
  const [active, setActive] = useState(0);
  const router = useRouter();

  const goToBooking = () => {
    router.push("/appointments");
  };

  return (
    <section className="w-full py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-16">

        {/* Section Title - CENTERED */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="text-4xl font-bold text-gray-900 mb-10 text-center"
        >
          Psychiatric & Mental Health Conditions We Treat
        </motion.h2>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {conditions.map((item, index) => (
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              key={index}
              onClick={() => setActive(index)}
              className={`px-6 py-2 rounded-full border transition font-medium ${
                active === index
                  ? "bg-[#FFAA00] text-black border-[#FFAA00]"
                  : "border-gray-300 text-gray-700 hover:bg-gray-100"
              }`}
            >
              {item.name}
            </motion.button>
          ))}
        </div>

        {/* ACTIVE CONTENT */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* IMAGE ANIMATION */}
          <AnimatePresence mode="wait">
            <motion.div
              key={conditions[active].image}
              initial={{ opacity: 0, scale: 0.9, x: -40 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              exit={{ opacity: 0, scale: 0.9, x: 40 }}
              transition={{ duration: 0.4 }}
            >
              <Image
                src={conditions[active].image}
                width={700}
                height={500}
                alt={conditions[active].name}
                className="rounded-xl shadow-lg"
              />
            </motion.div>
          </AnimatePresence>

          {/* TEXT ANIMATION */}
          <AnimatePresence mode="wait">
            <motion.div
              key={conditions[active].name}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -40 }}
              transition={{ duration: 0.4 }}
            >
              <h3 className="text-3xl font-semibold mb-4 text-gray-900">
                {conditions[active].name}
              </h3>

              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                {conditions[active].description}
              </p>

              {/* BOOK APPOINTMENT BUTTON */}
              <motion.button
                onClick={goToBooking}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                className="px-6 py-3 bg-[#FFAA00] text-black font-medium rounded-lg hover:opacity-90 transition"
              >
                Book Appointment
              </motion.button>
            </motion.div>
          </AnimatePresence>

        </div>
      </div>
    </section>
  );
}
