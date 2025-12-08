"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { 
  FaDollarSign, FaUserClock, FaCreditCard, FaLock, 
  FaStar, FaInfoCircle, FaPhoneAlt, FaEnvelope, FaCalendarCheck 
} from "react-icons/fa";

export default function SelfPayPage() {
  const [activeTab, setActiveTab] = useState("payment"); // 'payment' or 'appointment'

  // Payment Links
  const stripe200 = "https://checkout.stripe.com/c/pay/cs_live_a1jjJD8GymFlzf9hyGZTadCiQ5xvFSra3QAqliZZbywjln0jYAMpg5eCGq#fidnandhYHdWcXxpYCc%2FJ2FgY2RwaXEnKSdkdWxOYHwnPyd1blppbHNgWjA0SjRzVEdDMHVpZHVjT10wUzZcM0djdDJjMG5NdTRmRG9Ea0BpVDF3U2pLY3JAa2FBVWRQdFJKTkRjdlBGTW83Yn93fFdCfU12cDxfdkkxc31SS081U3I3NTV3Vl9sUTZCcicpJ2N3amhWYHdzYHcnP3F3cGApJ2dkZm5id2pwa2FGamlqdyc%2FJyZjY2NjY2MnKSdpZHxqcHFRfHVgJz8ndmxrYmlgWmxxYGgnKSdga2RnaWBVaWRmYG1qaWFgd3YnP3F3cGB4JSUl";
  const stripe120 = "https://checkout.stripe.com/c/pay/cs_live_a1oPm1StSmERDkvOHGBGq41EpfAR6x0XJ9ZUaeTbmO2fNQ4cFEFntvqX4u#fidnandhYHdWcXxpYCc%2FJ2FgY2RwaXEnKSdkdWxOYHwnPyd1blppbHNgWjA0SjRzVEdDMHVpZHVjT10wUzZcM0djdDJjMG5NdTRmRG9Ea0BpVDF3U2pLY3JAa2FBVWRQdFJKTkRjdlBGTW83Yn93fFdCfU12cDxfdkkxc31SS081U3I3NTV3Vl9sUTZCcicpJ2N3amhWYHdzYHcnP3F3cGApJ2dkZm5id2pwa2FGamlqdyc%2FJyZjY2NjY2MnKSdpZHxqcHFRfHVgJz8ndmxrYmlgWmxxYGgnKSdga2RnaWBVaWRmYG1qaWFgd3YnP3F3cGB4JSUl";
  const stripe100 = "https://checkout.stripe.com/c/pay/cs_live_a1B9urElK59hKEFhIsbkR0czs4WxOM5Jmp1xRhlqjPXSJgCTMhyu7LYyuS#fidnandhYHdWcXxpYCc%2FJ2FgY2RwaXEnKSdkdWxOYHwnPyd1blppbHNgWjA0SjRzVEdDMHVpZHVjT10wUzZcM0djdDJjMG5NdTRmRG9Ea0BpVDF3U2pLY3JAa2FBVWRQdFJKTkRjdlBGTW83Yn93fFdCfU12cDxfdkkxc31SS081U3I3NTV3Vl9sUTZCcicpJ2N3amhWYHdzYHcnP3F3cGApJ2dkZm5id2pwa2FGamlqdyc%2FJyZjY2NjY2MnKSdpZHxqcHFRfHVgJz8ndmxrYmlgWmxxYGgnKSdga2RnaWBVaWRmYG1qaWFgd3YnP3F3cGB4JSUl";
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
    <div className="min-h-screen bg-white text-gray-900">
      
      {/* 1. HERO SECTION */}
      <div className="w-full bg-[#F4FAFC] border-b border-gray-100 py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight text-gray-900 tracking-tighter">
                    GrowthFairness <span className="text-[#FFAA00]">Private Portal</span>
                </h1>
                <p className="mt-4 text-xl text-gray-700 max-w-lg">
                    Manage your mental wellness from a single dashboard. Pay for services or secure your next session below.
                </p>
            </div>

            <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="flex justify-center"
            >
                <Image
                    src="/selfpay.jpg"
                    alt="Portal Dashboard"
                    width={500}
                    height={400}
                    className="rounded-3xl shadow-2xl object-cover"
                />
            </motion.div>
        </div>
      </div>

      {/* 2. TAB TOGGLE SYSTEM */}
      <div className="max-w-2xl mx-auto px-6 mt-12 mb-8">
        <div className="bg-gray-100 p-1 rounded-2xl flex relative overflow-hidden">
            <button 
                onClick={() => setActiveTab('payment')}
                className={`flex-1 flex items-center justify-center gap-2 py-4 text-lg font-bold transition-all relative z-10 ${activeTab === 'payment' ? 'text-gray-900' : 'text-gray-500'}`}
            >
                <FaDollarSign /> Make a Payment
            </button>
            <button 
                onClick={() => setActiveTab('appointment')}
                className={`flex-1 flex items-center justify-center gap-2 py-4 text-lg font-bold transition-all relative z-10 ${activeTab === 'appointment' ? 'text-gray-900' : 'text-gray-500'}`}
            >
                <FaCalendarCheck /> Book Appointment
            </button>
            {/* Animated Slider Backdrop */}
            <motion.div 
                className="absolute top-1 bottom-1 left-1 bg-white rounded-xl shadow-md"
                initial={false}
                animate={{ x: activeTab === 'payment' ? '0%' : '98%' }}
                style={{ width: '49%' }}
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
            />
        </div>
      </div>

      {/* 3. DYNAMIC CONTENT AREA */}
      <div className="max-w-7xl mx-auto px-6 lg:px-16 pb-20">
        <AnimatePresence mode="wait">
            {activeTab === 'payment' ? (
                <motion.div 
                    key="payment-tab"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                >
                    <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3 py-10">
                        <motion.article className="relative bg-white border-4 border-[#FFAA00] rounded-3xl p-8 shadow-2xl flex flex-col transform transition-all">
                            <div className="absolute -top-4 right-6 bg-[#FFAA00] text-gray-900 text-xs font-bold uppercase px-3 py-1 rounded-full shadow-md">Recommended</div>
                            <FaUserClock className="text-4xl text-[#FFAA00] mb-4" />
                            <h3 className="text-2xl font-bold mb-1">Initial Consult</h3>
                            <div className="text-5xl font-extrabold text-gray-900 my-6">$200</div>
                            <ul className="space-y-3 mb-8">
                                <FeatureItem text="Comprehensive assessment" />
                                <FeatureItem text="Diagnostic evaluation" />
                                <FeatureItem text="Medication management" />
                                <FeatureItem text="Supportive therapy" />
                            </ul>
                            <ActionButton stripeLink={stripe200} isFeatured={true} />
                        </motion.article>

                        <article className="bg-white border border-gray-200 rounded-3xl p-8 shadow-lg flex flex-col">
                            <FaUserClock className="text-4xl text-gray-500 mb-4" />
                            <h3 className="text-2xl font-bold mb-1">Follow-up Consult</h3>
                            <div className="text-5xl font-extrabold text-gray-900 my-6">$120</div>
                            <ul className="space-y-3 mb-8">
                                <FeatureItem text="Medication refill & adjustment" />
                                <FeatureItem text="Brief psychotherapy" />
                                <FeatureItem text="Progress planning" />
                                <FeatureItem text="30-minute session" />
                            </ul>
                            <ActionButton stripeLink={stripe120} />
                        </article>

                        <article className="bg-white border border-gray-200 rounded-3xl p-8 shadow-lg flex flex-col">
                            <FaDollarSign className="text-4xl text-gray-500 mb-4" />
                            <h3 className="text-2xl font-bold mb-1">Administrative Fee</h3>
                            <div className="text-5xl font-extrabold text-gray-900 my-6">$100</div>
                            <ul className="space-y-3 mb-8">
                                <FeatureItem text="Official letters & reports" />
                                <FeatureItem text="Provider consultation" />
                                <FeatureItem text="Detailed records" />
                                <FeatureItem text="Admin documentation" />
                            </ul>
                            <ActionButton stripeLink={stripe100} />
                        </article>
                    </div>

                    {/* CUSTOM BILL */}
                    <section className="mt-8">
                        <div className="bg-black text-white rounded-[40px] p-8 md:p-12 shadow-2xl relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-[#FFAA00] blur-[100px] opacity-10"></div>
                            <div className="grid lg:grid-cols-2 gap-10 items-center">
                                <div>
                                    <h2 className="text-3xl font-black text-[#FFAA00] mb-4 uppercase">Custom Bill Pay</h2>
                                    <p className="text-gray-300 text-lg leading-relaxed mb-6"> Fulfill exact amounts previously agreed upon with GrowthFairness Psychiatry, PLLC.</p>
                                    <div className="space-y-2 border-l border-[#FFAA00]/40 pl-6 text-sm">
                                        <p><FaPhoneAlt className="inline mr-2 text-[#FFAA00]"/> (832) 449-6276</p>
                                        <p><FaEnvelope className="inline mr-2 text-[#FFAA00]"/> info@growthfairness.com</p>
                                    </div>
                                </div>
                                <div className="bg-white/5 p-6 rounded-3xl border border-white/10 backdrop-blur-sm">
                                    <ActionButton stripeLink={stripeCustomBill} isFeatured={true} />
                                </div>
                            </div>
                        </div>
                    </section>
                </motion.div>
            ) : (
                <motion.div 
                    key="appointment-tab"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="py-10"
                >
                    <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
                        <div className="p-8 bg-gray-50 border-b border-gray-100 flex items-center justify-between">
                            <div>
                                <h3 className="text-2xl font-bold text-gray-900">Live Scheduler</h3>
                                <p className="text-gray-500">Select your preferred date and time to reserve your appointment.</p>
                            </div>
                            <FaInfoCircle className="text-gray-400 text-2xl" />
                        </div>
                        <div className="w-full">
                            <iframe 
                                src="https://ehr.charmtracker.com/publicCal.sas?method=getCal&digest=04215c313b1c953d96519b97deb749efeef2f42393af6fbb54c15310aafaee1f5385f436ad42bc02967f905c2f4771da1fd5a4982bdad" 
                                width="100%" 
                                height="800" 
                                className="w-full border-none"
                                style={{ overflow: "hidden" }}
                            />
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
      </div>

      {/* 4. FOOTER POLICY */}
      <div className="max-w-7xl mx-auto px-6 lg:px-16 pb-16">
        <div className="p-8 rounded-2xl bg-[#FFF9E5] border-l-4 border-[#FFAA00] shadow-sm">
            <p className="text-gray-700 text-sm italic">
                <strong>Policy:</strong> A mandatory <strong>$75 fee</strong> is charged for appointments cancelled less than 24 hours in advance or no-shows.
            </p>
        </div>
      </div>
    </div>
  );
}