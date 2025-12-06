"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image"; // Import Image component
import { FaDollarSign, FaUserClock, FaCreditCard, FaLock, FaCalendarAlt, FaStar, FaInfoCircle } from "react-icons/fa"; // Updated icons

export default function SelfPayPage() {
  const stripeLink = "https://buy.stripe.com/3cI5kD9YN16GgUub6eak000";

  // Reusable component for a styled feature list item
  const FeatureItem = ({ text }) => (
    <li className="flex items-start gap-2 text-sm text-gray-700">
      <FaLock className="text-[#306EFF] flex-shrink-0 mt-1" size={12} />
      {text}
    </li>
  );
  
  // Custom button group for payment/booking
  const ButtonGroup = ({ isFeatured = false }) => (
    <div className="space-y-3 mt-auto pt-6">
        <a
            href={stripeLink}
            target="_blank"
            rel="noopener noreferrer"
            className={`w-full flex items-center justify-center gap-2 font-bold rounded-xl px-5 py-3 shadow-lg transition transform hover:scale-[1.01]
                ${isFeatured ? 'bg-[#FFAA00] text-gray-900 hover:bg-[#e69900]' : 'bg-[#306EFF] text-white hover:bg-[#2052c2]'}
            `}
        >
            <FaCreditCard /> Pay Now
        </a>
        <Link
            href="/appointments"
            className="w-full flex items-center justify-center gap-2 border border-gray-300 bg-gray-50 hover:bg-gray-100 text-gray-800 font-medium rounded-xl px-5 py-3 transition"
        >
            <FaCalendarAlt /> Book Appointment
        </Link>
    </div>
  );

  return (
    <div className="min-h-screen bg-white text-gray-900">
      
      {/* 1. HERO SECTION - Clean, Image-Focused Header */}
      <div className="w-full bg-[#F4FAFC] border-b border-gray-100 py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* LEFT: Text Content */}
            <div>
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight text-gray-900">
                    Transparent <span className="text-[#FFAA00]">Private Pay</span> Options
                </h1>
                <p className="mt-4 text-xl text-gray-700 max-w-lg">
                    Transparent pricing for out-of-pocket appointments. Choose a service, 
                    securely pay with Stripe, or book an appointment below.
                </p>
                <div className="mt-6 flex items-center gap-3 text-lg font-semibold text-[#FFAA00]">
                    <FaStar /> Trusted Payment & Booking Process
                </div>
            </div>

            {/* RIGHT: Image (selfpay.jpg) */}
            <motion.div
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="flex justify-center"
            >
                <Image
                    src="/selfpay.jpg"
                    alt="Self Pay and Private Payment Options"
                    width={500}
                    height={400}
                    className="rounded-3xl shadow-2xl object-cover"
                />
            </motion.div>
        </div>
      </div>
      
      {/* --- */}

      {/* 2. PRICING GRID - Enhanced Differentiation & Visual Clarity */}
      <section className="max-w-7xl mx-auto px-6 lg:px-16 py-16 lg:py-24">
        
        <h2 className="text-3xl font-bold mb-12 text-center text-gray-800">Choose Your Service Level</h2>

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          
          {/* Card 1: Initial Intake Consult (FEATURED CARD) */}
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.1 }}
            className="relative bg-white border-4 border-[#FFAA00] rounded-3xl p-8 shadow-2xl flex flex-col transform hover:scale-[1.02] transition-all duration-300"
          >
            <div className="absolute -top-4 right-6 bg-[#FFAA00] text-gray-900 text-sm font-bold uppercase px-3 py-1 rounded-full shadow-md">
                Recommended
            </div>
            
            <FaUserClock className="text-4xl text-[#FFAA00] mb-4" />
            <h3 className="text-2xl font-bold mb-1">Initial Intake Consult</h3>
            <p className="text-sm text-gray-500 mb-6">Out-of-Pocket payment · up to 60 min</p>

            <div className="text-5xl font-extrabold text-gray-900 mb-6 flex items-center">
              <span className="text-4xl">$</span>200
            </div>

            <ul className="space-y-3 mb-8">
              <FeatureItem text="Comprehensive assessment" />
              <FeatureItem text="Diagnostic evaluation" />
              <FeatureItem text="Medication management" />
              <FeatureItem text="Talk / supportive therapy" />
            </ul>

            <ButtonGroup isFeatured={true} />
          </motion.article>

          {/* Card 2: Follow-up Consult */}
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true, amount: 0.1 }}
            className="bg-white border border-gray-200 rounded-3xl p-8 shadow-lg flex flex-col"
          >
            <FaUserClock className="text-4xl text-gray-500 mb-4" />
            <h3 className="text-2xl font-bold mb-1">Follow-up Consult</h3>
            <p className="text-sm text-gray-500 mb-6">Out-of-Pocket payment · 30 min</p>

            <div className="text-5xl font-extrabold text-gray-900 mb-6 flex items-center">
              <span className="text-4xl">$</span>120
            </div>

            <ul className="space-y-3 mb-8">
              <FeatureItem text="Medication management & refill" />
              <FeatureItem text="Brief assessment" />
              <FeatureItem text="Talk / supportive therapy" />
              <FeatureItem text="Ongoing care planning" />
            </ul>
            
            <ButtonGroup />
          </motion.article>

          {/* Card 3: Administrative Fees & Other Payments (Consolidated) */}
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true, amount: 0.1 }}
            className="bg-white border border-gray-200 rounded-3xl p-8 shadow-lg flex flex-col"
          >
            <FaDollarSign className="text-4xl text-gray-500 mb-4" />
            <h3 className="text-2xl font-bold mb-1">Fees & Custom Payments</h3>
            <p className="text-sm text-gray-500 mb-6">Administrative or Custom Bills</p>

            <div className="text-5xl font-extrabold text-gray-900 mb-6 flex items-center">
              <span className="text-4xl">$</span>100+
            </div>

            <ul className="space-y-3 mb-8">
              <FeatureItem text="Administrative Fees ($100)" />
              <FeatureItem text="Letters, reports, or detailed records requested" />
              <FeatureItem text="Consultation with other providers" />
              <FeatureItem text="Pay any outstanding bill or custom amount" />
            </ul>
            
            <ButtonGroup />
          </motion.article>
          
        </div>
      </section>

      {/* --- */}
      
      {/* 3. POLICY & DISCLAIMER AREA */}
      <div className="max-w-7xl mx-auto px-6 lg:px-16 pb-16">
        <div className="p-8 rounded-2xl bg-[#FFF9E5] border-l-4 border-[#FFAA00] shadow-md">
            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                <FaInfoCircle className="text-[#FFAA00]" />
                Important Financial Policies
            </h3>
            <p className="text-gray-700 leading-relaxed text-lg">
                **No-Show or Late Cancellation:** A mandatory **$75 fee** is charged for appointments cancelled less than **24 hours** in advance or for no-shows. <br />
                **Transparent Pricing:** We adhere to the **'Patients First’** law, ensuring clear and transparent pricing for all services.
            </p>
        </div>
      </div>

      {/* --- */}

      {/* 4. CALENDAR & BOOKING AREA (Retained Iframe) */}
      <section className="max-w-7xl mx-auto px-6 lg:px-16 pb-24">
        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
          <div className="p-6 bg-gray-50 border-b border-gray-100">
            <h3 className="text-2xl font-bold text-gray-900">Book Your Appointment Now</h3>
            <p className="text-gray-600 mt-1">
              Use the live scheduler below to see available times and instantly reserve your session.
            </p>
          </div>

          <div style={{ minHeight: 650 }}>
            <iframe
              width="100%"
              height="750"
              src="https://ehr.charmtracker.com/publicCal.sas?method=getCal&digest=04215c313b1c953d96519b97deb749efeef2f42393af6fbb54c15310aafaee1f5385f436ad42bc02967f905c2f4771da1fd5a498e982bdad"
              style={{ border: 0 }}
              loading="lazy"
              title="Booking Calendar"
            />
          </div>
        </div>
      </section>
    </div>
  );
}