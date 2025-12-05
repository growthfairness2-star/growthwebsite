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
} from "react-icons/fa";

export default function RaymondProfile() {
  return (
    <div className="w-full min-h-screen bg-[#F4FAFC] pb-20">
      {/* HEADER AREA */}
      <section className="max-w-6xl mx-auto px-6 lg:px-0 py-12 lg:py-20">
        <div className="bg-white shadow-md rounded-3xl p-6 lg:p-10 grid lg:grid-cols-2 gap-10">

          {/* LEFT — IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex justify-center"
          >
            <Image
              src="/provider.jpg"
              width={340}
              height={340}
              alt="Raymond Obiajulu"
              className="rounded-2xl object-cover shadow-lg"
            />
          </motion.div>

          {/* RIGHT — INTRO TEXT */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-3xl lg:text-4xl font-bold text-gray-900">
              Raymond Obiajulu
            </h1>
            <p className="text-gray-700 mt-2">
              Psychiatric Mental Health NP  
            </p>
            <p className="text-gray-600">5 years of experience</p>

            <div className="mt-6 space-y-3 text-gray-700">
              <p className="flex items-center gap-3">
                <FaMapMarkerAlt className="text-[#FFAA00]" /> Virtual
              </p>
              <p className="flex items-center gap-3">
                <FaHeartbeat className="text-[#FFAA00]" />
                Anxiety, Bipolar disorder, Depression, Anger management
              </p>
              <p className="flex items-center gap-3">
                <FaCheckCircle className="text-[#FFAA00]" />
                Medication management, Individual therapy
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* MAIN CONTENT AREA */}
      <section className="max-w-6xl mx-auto px-6 space-y-10">

        {/* Nice to Meet You */}
        <div className="bg-white p-6 lg:p-8 rounded-2xl shadow-sm">
          <h2 className="text-xl font-semibold">Nice to meet you!</h2>
          <p className="mt-3 text-gray-700 leading-relaxed">
            Mental Health NP. I've worked in healthcare for over a decade,
            treating a wide range of conditions including Anxiety, Depression,
            PTSD, OCD, Sleep Disorder, Mood Disorders, Grief, Bipolar Disorder,
            ADHD, etc.  
            <br /><br />
            I don't consider this work—it's my passion.  
            <em>"The best way to find yourself is to lose yourself in the service of others."</em>
          </p>
        </div>

        {/* Approach */}
        <div className="bg-white p-6 lg:p-8 rounded-2xl shadow-sm">
          <h2 className="text-xl font-semibold">My approach to therapy</h2>
          <p className="mt-3 text-gray-700 leading-relaxed">
            My approach is evidence-based with a holistic focus. I create 
            personalized treatment plans tailored to each individual's needs 
            and life goals.
          </p>
        </div>

        {/* What to Expect */}
        <div className="bg-white p-6 lg:p-8 rounded-2xl shadow-sm">
          <h2 className="text-xl font-semibold">What you can expect from me</h2>
          <p className="mt-3 text-gray-700 leading-relaxed">
            Every patient receives a care plan they are excited about.  
            You will always feel supported, respected, and understood — 
            just like I treat my own close friends.
          </p>
        </div>

        {/* About Me */}
        <div className="bg-white p-6 lg:p-8 rounded-2xl shadow-sm">
          <h2 className="text-xl font-semibold">About me</h2>

          <div className="mt-3 space-y-3 text-gray-700">
            <p className="flex items-center gap-3">
              <FaUser className="text-[#FFAA00]" /> Black or African descent, Cisgender Male
            </p>
            <p className="flex items-center gap-3">
              <FaUser className="text-[#FFAA00]" /> Holistic, Open-minded, Warm
            </p>
          </div>
        </div>

        {/* Qualifications */}
        <div className="bg-white p-6 lg:p-8 rounded-2xl shadow-sm">
          <h2 className="text-xl font-semibold">Qualification and insurance</h2>

          <div className="mt-4 space-y-4 text-gray-700">
            <p><strong>Years of experience:</strong> 5 years</p>
            <p><strong>Training:</strong> MSN (Walden University)</p>
            <p><strong>License type:</strong> APN – Texas</p>
            <p><strong>Licensed in:</strong> Texas</p>
            <p>
              <strong>Insurance accepted:</strong><br />
              Aetna, Blue Cross Blue Shield, Carelon Behavioral Health, Cigna,
              Oscar, Oxford, United Healthcare, and more.
            </p>
          </div>
        </div>

        {/* CARE DETAILS */}
        <div className="bg-white p-6 lg:p-8 rounded-2xl shadow-sm">
          <h2 className="text-xl font-semibold">Care details</h2>

          <ul className="mt-4 space-y-3 text-gray-700">
            <li><strong>Top specialties:</strong> Anxiety, Bipolar disorder, Depression, Anger management</li>
            <li><strong>More specialties:</strong> ADHD, OCD, Sleep disorder, Stress, Trauma, PTSD</li>
            <li><strong>Therapy methods:</strong> CBT, Motivational Interviewing, Behavior Modification</li>
            <li><strong>Care types:</strong> Medication management, Individual therapy</li>
            <li><strong>Ages served:</strong> Adults, Seniors</li>
            <li className="flex items-center gap-2">
              <FaLanguage className="text-[#FFAA00]" /> English, Igbo
            </li>
          </ul>
        </div>

        {/* BOOK SESSION BUTTON */}
        <div className="flex justify-center pt-6">
          <motion.button
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            whileHover={{ scale: 1.03 }}
            className="px-8 py-4 bg-[#FFAA00] text-white rounded-xl font-semibold text-lg shadow-md hover:bg-[#e69a00]"
            onClick={() => (window.location.href = "/appointments")}
          >
            Book a Session
          </motion.button>
        </div>
      </section>
    </div>
  );
}
