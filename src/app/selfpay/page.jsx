"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { 
  FaDollarSign, FaUserClock, FaCreditCard, FaLock, 
  FaStar, FaInfoCircle, FaPhoneAlt, FaEnvelope 
} from "react-icons/fa";

export default function SelfPayPage() {
  // Clinical Payment Links
  const stripe200 = "https://checkout.stripe.com/c/pay/cs_live_a1jjJD8GymFlzf9hyGZTadCiQ5xvFSra3QAqliZZbywjln0jYAMpg5eCGq#fidnandhYHdWcXxpYCc%2FJ2FgY2RwaXEnKSdkdWxOYHwnPyd1blppbHNgWjA0SjRzVEdDMHVpZHVjT10wUzZcM0djdDJjMG5NdTRmRG9Ea0BpVDF3U2pLY3JAa2FBVWRQdFJKTkRjdlBGTW83Yn93fFdCfU12cDxfdkkxc31SS081U3I3NTV3Vl9sUTZCcicpJ2N3amhWYHdzYHcnP3F3cGApJ2dkZm5id2pwa2FGamlqdyc%2FJyZjY2NjY2MnKSdpZHxqcHFRfHVgJz8ndmxrYmlgWmxxYGgnKSdga2RnaWBVaWRmYG1qaWFgd3YnP3F3cGB4JSUl";
  const stripe120 = "https://checkout.stripe.com/c/pay/cs_live_a1oPm1StSmERDkvOHGBGq41EpfAR6x0XJ9ZUaeTbmO2fNQ4cFEFntvqX4u#fidnandhYHdWcXxpYCc%2FJ2FgY2RwaXEnKSdkdWxOYHwnPyd1blppbHNgWjA0SjRzVEdDMHVpZHVjT10wUzZcM0djdDJjMG5NdTRmRG9Ea0BpVDF3U2pLY3JAa2FBVWRQdFJKTkRjdlBGTW83Yn93fFdCfU12cDxfdkkxc31SS081U3I3NTV3Vl9sUTZCcicpJ2N3amhWYHdzYHcnP3F3cGApJ2dkZm5id2pwa2FGamlqdyc%2FJyZjY2NjY2MnKSdpZHxqcHFRfHVgJz8ndmxrYmlgWmxxYGgnKSdga2RnaWBVaWRmYG1qaWFgd3YnP3F3cGB4JSUl";
  const stripe100 = "https://checkout.stripe.com/c/pay/cs_live_a1B9urElK59hKEFhIsbkR0czs4WxOM5Jmp1xRhlqjPXSJgCTMhyu7LYyuS#fidnandhYHdWcXxpYCc%2FJ2FgY2RwaXEnKSdkdWxOYHwnPyd1blppbHNgWjA0SjRzVEdDMHVpZHVjT10wUzZcM0djdDJjMG5NdTRmRG9Ea0BpVDF3U2pLY3JAa2FBVWRQdFJKTkRjdlBGTW83Yn93fFdCfU12cDxfdkkxc31SS081U3I3NTV3Vl9sUTZCcicpJ2N3amhWYHdzYHcnP3F3cGApJ2dkZm5id2pwa2FGamlqdyc%2FJyZjY2NjY2MnKSdpZHxqcHFRfHVgJz8ndmxrYmlgWmxxYGgnKSdga2RnaWBVaWRmYG1qaWFgd3YnP3F3cGB4JSUl";
  
  // Custom Bill Payment Link
  const stripeCustomBill = "https://buy.stripe.com/3cI5kD9YN16GgUub6eak000";

  const FeatureItem = ({ text }) => (
    <li className="flex items-start gap-2 text-sm text-gray-700">
      <FaLock className="text-[#306EFF] flex-shrink-0 mt-1" size={12} />
      {text}
    </li>
  );
  
  const ActionButton = ({ stripeLink, isFeatured = false }) => (
    <div className="mt-auto pt-6">
        <a
            href={stripeLink}
            target="_blank"
            rel="noopener noreferrer"
            className={`w-full flex items-center justify-center gap-2 font-black rounded-xl px-5 py-4 shadow-lg transition transform hover:scale-[1.02] active:scale-95
                ${isFeatured ? 'bg-[#FFAA00] text-gray-900 hover:bg-[#e69900]' : 'bg-[#306EFF] text-white hover:bg-[#2052c2]'}
            `}
        >
            <FaCreditCard /> PAY NOW
        </a>
    </div>
  );

  return (
    <div className="min-h-screen bg-white text-gray-900 pb-20">
      
      {/* 1. HERO SECTION */}
      <div className="w-full bg-[#F4FAFC] border-b border-gray-100 py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight text-gray-900">
                    Transparent <span className="text-[#FFAA00]">Private Pay</span> Options
                </h1>
                <p className="mt-4 text-xl text-gray-700 max-w-lg">
                    Manage payments securely with Stripe. Choose a tier or satisfy custom balances below.
                </p>
                <div className="mt-6 flex items-center gap-3 text-lg font-semibold text-[#FFAA00]">
                    <FaStar /> Secure & HIPAA Compliant Processes
                </div>
            </div>

            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                className="flex justify-center"
            >
                <Image
                    src="/selfpay.jpg"
                    alt="Clinical Billing"
                    width={500}
                    height={400}
                    className="rounded-3xl shadow-2xl object-cover"
                />
            </motion.div>
        </div>
      </div>
      
      {/* 2. PRICING GRID - Full Content Preserved */}
      <section className="max-w-7xl mx-auto px-6 lg:px-16 py-16 lg:py-24">
        <h2 className="text-3xl font-bold mb-12 text-center text-gray-800">Choose Your Service Level</h2>

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          
          <motion.article className="relative bg-white border-4 border-[#FFAA00] rounded-3xl p-8 shadow-2xl flex flex-col transform hover:scale-[1.02] transition-all">
            <div className="absolute -top-4 right-6 bg-[#FFAA00] text-gray-900 text-xs font-bold uppercase px-3 py-1 rounded-full shadow-md">Recommended</div>
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
            <ActionButton stripeLink={stripe200} isFeatured={true} />
          </motion.article>

          <article className="bg-white border border-gray-200 rounded-3xl p-8 shadow-lg flex flex-col">
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
            <ActionButton stripeLink={stripe120} />
          </article>

          <article className="bg-white border border-gray-200 rounded-3xl p-8 shadow-lg flex flex-col">
            <FaDollarSign className="text-4xl text-gray-500 mb-4" />
            <h3 className="text-2xl font-bold mb-1">Fees & Custom Payments</h3>
            <p className="text-sm text-gray-500 mb-6">Administrative Fees ($100)</p>
            <div className="text-5xl font-extrabold text-gray-900 mb-6 flex items-center">
              <span className="text-4xl">$</span>100
            </div>
            <ul className="space-y-3 mb-8">
              <FeatureItem text="Letters, reports, or detailed records" />
              <FeatureItem text="Consultation with other providers" />
              <FeatureItem text="Administrative documentation" />
            </ul>
            <ActionButton stripeLink={stripe100} />
          </article>
        </div>
      </section>

      {/* 3. CUSTOM BILL TABLE */}
      <section className="max-w-4xl mx-auto px-6 lg:px-16 mt-8">
        <div className="bg-black text-white rounded-[40px] p-8 md:p-12 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#FFAA00] blur-[120px] opacity-20"></div>
            <div className="grid lg:grid-cols-2 gap-10 items-center relative z-10">
                <div>
                    <h2 className="text-3xl font-black text-[#FFAA00] mb-4 uppercase">Pay My Bill</h2>
                    <p className="text-gray-300 text-lg leading-relaxed mb-6">
                        Out-of-Pocket Payment. Fulfill exact amounts previously agreed upon with GrowthFairness.
                    </p>
                    <div className="space-y-3 border-l border-[#FFAA00]/40 pl-6">
                        <p className="text-sm font-semibold flex items-center gap-2 text-white"><FaInfoCircle className="text-[#FFAA00]" /> Support:</p>
                        <a href="tel:8324496276" className="flex items-center gap-3 text-gray-400 hover:text-white transition"><FaPhoneAlt size={12}/> (832) 449-6276</a>
                        <a href="mailto:info@growthfairness.com" className="flex items-center gap-3 text-gray-400 hover:text-white transition"><FaEnvelope size={12}/> info@growthfairness.com</a>
                    </div>
                </div>
                <div className="bg-white/5 p-8 rounded-3xl border border-white/10 backdrop-blur-sm">
                    <ActionButton stripeLink={stripeCustomBill} isFeatured={true} />
                </div>
            </div>
        </div>
      </section>

      {/* 4. POLICY */}
      <div className="max-w-7xl mx-auto px-6 lg:px-16 mt-20">
        <div className="p-8 rounded-2xl bg-[#FFF9E5] border-l-4 border-[#FFAA00] shadow-md">
            <p className="text-gray-700 leading-relaxed italic text-sm">
                *Note: A mandatory <strong>$75 fee</strong> is charged for appointments cancelled less than 24 hours in advance or for no-shows.
            </p>
        </div>
      </div>
    </div>
  );
}