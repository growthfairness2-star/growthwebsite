"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link"; // Use Link for navigation
import { motion } from "framer-motion";
import { MdMedicalServices, MdPsychology, MdLaptopMac, MdOutlineHealthAndSafety, MdOutlineVerified } from "react-icons/md"; // Added MdOutlineHealthAndSafety, MdOutlineVerified
import { BiConversation } from "react-icons/bi";
import { FaUserMd, FaShieldAlt } from "react-icons/fa"; // Added FaUserMd, FaShieldAlt

export default function Hero() {

  // Swipe-up variant (unchanged, but well-implemented)
  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.15, // Slightly faster transition
        duration: 0.6,
        ease: "easeOut"
      }
    })
  };

  // Service Card Data for cleaner mapping
  const services = [
    { 
      title: "Medication Management", 
      icon: MdMedicalServices, 
      description: "Monitoring and adjusting medication to optimize treatment.", 
      href: "/medication" 
    },
    { 
      title: "Psychiatric Evaluation", 
      icon: FaUserMd, // Changed icon for a more professional look
      description: "Comprehensive mental-health assessment and personalized diagnosis.", 
      href: "/evaluation" 
    },
    { 
      title: "Psychotherapy", 
      icon: BiConversation, 
      description: "Emotional support and guidance to help you heal and grow.", 
      href: "/therapy" 
    },
    { 
      title: "Telepsychiatry", 
      icon: MdLaptopMac, 
      description: "Receive expert mental-health care securely from the comfort of home.", 
      href: "/telepsychiatry" 
    },
  ];

  return (
    <section className="w-full bg-white pb-20"> {/* Changed primary background to white, will use the light blue for accent */}
      
      {/* HERO TOP */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 px-6 lg:px-16 pt-24 items-center">

        {/* LEFT TEXT & CTA */}
        <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
        >
          {/* Subheading/Pill */}
          <div className="inline-flex items-center gap-2 text-sm font-semibold text-[#FFAA00] bg-[#FFFAF2] px-4 py-1 rounded-full border border-[#FFE6B8] mb-4">
              <FaShieldAlt className="text-sm" /> CONFIDENTIAL & PROFESSIONAL CARE
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#1A1A1A] leading-tight">
            Elevating Emotional Wellness and <span className="text-[#306EFF]">Clarity</span>
          </h1> {/* Use a secondary color for emphasis */}

          <p className="mt-6 text-xl text-gray-700 leading-relaxed max-w-lg">
            Compassionate, professional mental-health care designed to help you 
            regain clarity, balance, and peace — wherever you are on your journey.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            {/* PRIMARY CTA */}
            <Link 
              href="/appointments"
              className="px-8 py-4 rounded-xl font-bold text-lg text-white shadow-xl transition transform hover:scale-[1.03] hover:shadow-2xl flex items-center justify-center sm:justify-start"
              style={{ backgroundColor: "#FFAA00" }}
            >
              Book Your Session
            </Link>
            
            {/* SECONDARY CTA */}
            <Link 
              href="/insurances"
              className="px-8 py-4 rounded-xl font-semibold text-lg text-gray-800 border border-gray-300 bg-white hover:bg-gray-50 transition flex items-center justify-center sm:justify-start"
            >
              Check Insurance Coverage
            </Link>
          </div>
          
          {/* Trust Badges */}
          <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3 text-gray-600 text-sm font-medium">
            <span className="flex items-center gap-2"><MdOutlineVerified className="text-[#306EFF]" /> Licensed in Texas</span>
            <span className="flex items-center gap-2"><MdOutlineHealthAndSafety className="text-[#306EFF]" /> Secure Telehealth</span>
          </div>

        </motion.div>

        {/* HERO IMAGE */}
        <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative flex justify-center lg:justify-end"
        >
            <div className="bg-[#F4F9FA] p-4 rounded-[30px] shadow-2xl shadow-blue-100/70"> {/* Accent Background for image */}
                <Image 
                    src="/hero.png"
                    width={550}
                    height={550}
                    alt="Illustration of a person seeking mental health clarity"
                    className="rounded-2xl object-cover"
                />
            </div>
        </motion.div>
      </div>

      {/* --- */}

      {/* SERVICES WITH MOTION - Enhanced Grid */}
      <div className="max-w-7xl mx-auto px-6 lg:px-16 mt-20">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-10">
          Our Comprehensive Services
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 bg-[#F4F9FA] p-8 rounded-3xl shadow-inner"> {/* New Accent Background for cards */}

          {services.map((service, i) => (
            <motion.div
              key={i}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={cardVariants}
              className="p-6 rounded-2xl bg-white border border-gray-100 shadow-lg hover:shadow-xl transition flex flex-col items-center text-center group"
            >
              <service.icon size={50} className="mb-4 text-[#FFAA00] group-hover:text-[#306EFF] transition-colors" />
              <p className="font-bold text-gray-900 text-xl mb-2">{service.title}</p>
              <p className="text-sm text-gray-600 mt-2 flex-grow">
                {service.description}
              </p>
              <Link href={service.href} className="text-[#FFAA00] font-bold text-sm mt-4 inline-block hover:text-[#e69a00] transition">
                Learn More →
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}