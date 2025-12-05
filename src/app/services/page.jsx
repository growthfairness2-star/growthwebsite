"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const services = [
  {
    title: "Medication Management",
    desc: "Prescribing, monitoring, and optimizing psychiatric medications to support your mental wellness journey.",
    image: "/homemeds.jpg", // replace with an image you have OR keep services.png
  },
  {
    title: "Psychiatric Evaluation",
    desc: "A comprehensive mental health assessment to understand your symptoms, history, and the best course of treatment.",
    image: "/homeabout.jpg",
  },
  {
    title: "Psychotherapy (Talk Therapy)",
    desc: "A supportive, confidential space to explore emotions, manage anxiety or depression, and improve overall well-being.",
    image: "/homedepression.jpg",
  },
  {
    title: "Telepsychiatry",
    desc: "Connect with a licensed psychiatric provider from anywhere — safe, secure, and convenient virtual care.",
    image: "/homecta.jpg",
  },
];

export default function ServicesPage() {
  return (
    <div className="w-full pb-24">

      {/* HERO SECTION */}
      <section className="relative w-full h-[380px] flex items-center justify-center bg-[#F7FBFD]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center px-6"
        >
          <Image
            src="/services.png"
            alt="Services"
            width={120}
            height={120}
            className="mx-auto mb-4"
          />

          <h1 className="text-4xl font-extrabold text-gray-900">
            Our Services
          </h1>

          <p className="text-gray-600 mt-3 max-w-2xl mx-auto text-lg">
            Compassionate, professional mental health care tailored to your needs.
          </p>
        </motion.div>
      </section>

      {/* SERVICES LIST */}
      <section className="max-w-7xl mx-auto px-6 lg:px-16 mt-20 space-y-20">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
              index % 2 === 1 ? "lg:flex-row-reverse" : ""
            }`}
          >
            {/* IMAGE */}
            <div>
              <Image
                src={service.image}
                alt={service.title}
                width={600}
                height={400}
                className="rounded-3xl shadow-lg object-cover"
              />
            </div>

            {/* TEXT */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                {service.title}
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                {service.desc}
              </p>

              <a
                href="/appointments"
                className="px-8 py-3 bg-[#FFAA00] text-white font-semibold rounded-full shadow hover:bg-[#e09900] transition inline-block"
              >
                Book an Appointment
              </a>
            </div>
          </motion.div>
        ))}
      </section>
    </div>
  );
}
