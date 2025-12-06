"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const services = [
  {
    title: "Medication Management",
    desc: "Prescribing, monitoring, and optimizing psychiatric medications to support your mental wellness journey.",
    image: "/medication.jpg",
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
      
      {/* HERO SECTION - MAXIMIZED FOR SIZE AND IMPACT */}
      <section className="w-full bg-[#F7FBFD] py-24 lg:py-40 min-h-[550px] flex items-center"> {/* Added min-h and flex items-center */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          // Added items-center to ensure vertical alignment within the grid columns
          className="max-w-7xl mx-auto px-6 lg:px-16 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center" 
        >
          
          {/* IMAGE (Left Side - Maximized) */}
          <div className="flex justify-center lg:justify-start">
            <Image
              src="/services.png"
              alt="Our Services"
              width={450} // Significantly larger image size
              height={450} // Significantly larger image size
              // Added max-w-full to ensure responsiveness and w-full for full utilization of the grid space
              className="rounded-3xl shadow-2xl object-cover max-w-full h-auto" 
            />
          </div>
          
          {/* TEXT (Right Side - Large and Aligned) */}
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-extrabold text-gray-900 md:text-7xl leading-tight"> {/* Increased text size further */}
              Our <span className="text-[#FFAA00]">Services</span>
            </h1>

            <p className="text-gray-700 mt-6 text-xl md:text-2xl max-w-xl lg:max-w-full mx-auto lg:mx-0">
              Compassionate, professional mental health care tailored to your unique needs and delivered virtually or in-person.
            </p>

            <a
                href="/appointments"
                className="mt-8 px-10 py-4 bg-[#FFAA00] text-white font-bold text-lg rounded-full shadow-lg hover:bg-[#e09900] transition inline-block transform hover:scale-105" // Larger button
            >
                Start Your Journey
            </a>
          </div>
        </motion.div>
      </section>

      {/* SERVICES LIST (Image Left, Text Right) */}
      <section className="max-w-7xl mx-auto px-6 lg:px-16 mt-20 space-y-20">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          >
            {/* IMAGE (Left Column) */}
            <div>
              <Image
                src={service.image}
                alt={service.title}
                width={700}
                height={500}
                className="rounded-3xl shadow-lg object-cover w-full h-auto"
              />
            </div>

            {/* TEXT (Right Column) */}
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