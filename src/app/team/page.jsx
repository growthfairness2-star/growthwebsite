"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  FaMapMarkerAlt,
  FaUser,
  FaHeartbeat,
  FaClock,
  FaLanguage,
  FaCheckCircle,
  FaStethoscope,
  FaAward,
} from "react-icons/fa"; // Added FaStethoscope, FaAward

// Define a list of key specialties for a cleaner display
const keySpecialties = [
    "Anxiety",
    "Depression",
    "Bipolar Disorder",
    "Anger Management",
    "ADHD",
];

// Component for a styled icon-text item
const InfoItem = ({ icon: Icon, text }) => (
    <div className="flex items-start gap-3 text-gray-700">
        <Icon className="text-[#FFAA00] mt-1 flex-shrink-0" size={18} />
        <p className="leading-relaxed">{text}</p>
    </div>
);

export default function RaymondProfile() {
  return (
    <div className="w-full min-h-screen bg-white pb-20"> {/* Changed background to white for cleaner look */}
      
      {/* PROFESSIONAL HEADER AREA (Stays Wide) */}
      <section className="bg-[#F4FAFC] border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6 lg:px-0 py-12 lg:py-16">
          <div className="bg-white rounded-3xl p-6 lg:p-10 shadow-xl grid lg:grid-cols-3 gap-10"> {/* Changed shadow and layout */}

            {/* LEFT — IMAGE & CONTACT INFO */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-1 flex flex-col items-center text-center"
            >
              <Image
                src="/provider.jpg"
                width={280} // Slightly reduced size to balance the layout
                height={280}
                alt="Raymond Obiajulu"
                className="rounded-full object-cover shadow-2xl border-4 border-[#FFAA00] mb-6" // Rounded image, accent border, stronger shadow
              />
              
              <h1 className="text-3xl font-bold text-gray-900">
                Raymond Obiajulu
              </h1>
              <p className="text-xl font-semibold text-[#306EFF] mt-1"> {/* Secondary color for title */}
                Psychiatric Mental Health NP  
              </p>
              <p className="text-gray-600 italic">5 years of experience</p>

              <div className="mt-8 w-full space-y-4">
                <InfoItem icon={FaMapMarkerAlt} text="Virtual Care (Licensed in Texas)" />
                <InfoItem icon={FaClock} text="Accepting New Patients" />
                <InfoItem icon={FaLanguage} text="Languages: English, Igbo" />
              </div>
            </motion.div>

            {/* RIGHT — PROFILE SUMMARY & CTA (Spans 2 columns on desktop) */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-2 space-y-8"
            >
                {/* 1. Specialties & Services */}
                <div>
                    <h2 className="text-2xl font-bold text-gray-800 border-b pb-2 mb-4 border-[#FFAA00]">
                        Key Expertise
                    </h2>
                    
                    <h3 className="text-lg font-semibold text-gray-700 mt-4 mb-2">Top Specialties</h3>
                    <div className="flex flex-wrap gap-3">
                        {keySpecialties.map((spec) => (
                            <span 
                                key={spec}
                                className="px-4 py-1.5 bg-[#FFAA00] text-white font-medium rounded-full text-sm shadow-sm"
                            >
                                {spec}
                            </span>
                        ))}
                    </div>

                    <h3 className="text-lg font-semibold text-gray-700 mt-6 mb-2">Services Provided</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <InfoItem icon={FaCheckCircle} text="Medication Management" />
                        <InfoItem icon={FaCheckCircle} text="Individual Therapy" />
                        <InfoItem icon={FaCheckCircle} text="CBT, Motivational Interviewing" />
                        <InfoItem icon={FaCheckCircle} text="Adults & Seniors" />
                    </div>
                </div>

                {/* 2. Insurance Block */}
                <div className="p-5 bg-[#F4FAFC] rounded-xl border border-gray-200">
                    <h3 className="text-lg font-semibold text-gray-800 mb-3 flex items-center gap-2">
                        <FaAward className="text-[#306EFF]" />
                        Insurance Accepted
                    </h3>
                    <p className="text-sm text-gray-700 leading-relaxed">
                        Aetna, Blue Cross Blue Shield, Carelon Behavioral Health, Cigna,
                        Oscar, Oxford, United Healthcare, and more.
                    </p>
                </div>

                {/* 3. CTA */}
                <div className="pt-4">
                    <motion.button
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.98 }}
                        className="w-full py-4 bg-[#FFAA00] text-white rounded-xl font-bold text-lg shadow-lg hover:bg-[#e69a00] transition"
                        onClick={() => (window.location.href = "/appointments")}
                    >
                        Book a Session with Raymond
                    </motion.button>
                </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* MAIN CONTENT AREA (2-Column for desktop) */}
      <section className="max-w-6xl mx-auto px-6 lg:px-0 mt-12 grid lg:grid-cols-3 gap-10">

        {/* LEFT COLUMN (Bio & Approach - 2/3 width) */}
        <div className="lg:col-span-2 space-y-10">

            {/* Nice to Meet You / Bio */}
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 p-6 lg:p-8 rounded-2xl shadow-md border-t-4 border-[#FFAA00]/70"
            >
                <h2 className="text-2xl font-bold text-gray-900 mb-4">👋 Nice to Meet You!</h2>
                <p className="mt-3 text-gray-700 leading-relaxed">
                    As a dedicated Mental Health NP, I've worked in healthcare for over a decade,
                    treating a wide range of complex conditions including Anxiety, Depression,
                    PTSD, OCD, Sleep Disorder, Mood Disorders, Grief, Bipolar Disorder,
                    ADHD, and more.  
                    <br /><br />
                    I don't consider this work—it's my passion. My goal is to empower you toward meaningful, lasting mental wellness.
                    <em> "The best way to find yourself is to lose yourself in the service of others."</em>
                </p>
            </motion.div>

            {/* Approach */}
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-white p-6 lg:p-8 rounded-2xl shadow-md border border-gray-100"
            >
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <FaStethoscope className="text-[#306EFF]" /> My Approach to Care
                </h2>
                <p className="text-gray-700 leading-relaxed">
                    My approach is evidence-based with a holistic focus. I firmly believe in a collaborative partnership, where we create 
                    personalized treatment plans tailored to your specific needs, values, and long-term life goals. I utilize techniques 
                    from CBT, Motivational Interviewing, and Behavior Modification to achieve lasting results.
                </p>
            </motion.div>

            {/* What to Expect */}
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
                className="bg-white p-6 lg:p-8 rounded-2xl shadow-md border border-gray-100"
            >
                <h2 className="text-2xl font-bold text-gray-900 mb-4">What You Can Expect</h2>
                <p className="text-gray-700 leading-relaxed">
                    Every patient receives a care plan they are excited about.  You will always feel fully supported, respected, and deeply understood. My commitment is to provide a non-judgmental, safe space where you can explore your challenges and celebrate your progress.
                </p>
            </motion.div>

        </div>

        {/* RIGHT COLUMN (Qualifications & Personal - 1/3 width) */}
        <div className="lg:col-span-1 space-y-10">
            
            {/* Qualifications / Training Block */}
            <div className="bg-[#F4FAFC] p-6 rounded-2xl shadow-md border border-gray-200">
                <h2 className="text-xl font-bold text-gray-900 mb-4 border-b pb-2 border-gray-300">
                    Qualifications
                </h2>
                <div className="mt-4 space-y-3 text-gray-700">
                    <p><strong>Years of experience:</strong> 5 years</p>
                    <p><strong>Training:</strong> MSN (Walden University)</p>
                    <p><strong>License type:</strong> APN – Texas</p>
                    <p><strong>Licensed in:</strong> Texas</p>
                </div>
            </div>

            {/* About Me Block */}
            <div className="bg-[#F4FAFC] p-6 rounded-2xl shadow-md border border-gray-200">
                <h2 className="text-xl font-bold text-gray-900 mb-4 border-b pb-2 border-gray-300">
                    Background
                </h2>
                <div className="mt-4 space-y-3 text-gray-700">
                    <InfoItem icon={FaUser} text="Black or African descent, Cisgender Male" />
                    <InfoItem icon={FaUser} text="Holistic, Open-minded, Warm approach" />
                </div>
            </div>
            
        </div>
      </section>
      
    </div>
  );
}