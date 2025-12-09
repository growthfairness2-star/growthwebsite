"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { 
  FaDollarSign, FaUserClock, FaCreditCard, FaLock, 
  FaStar, FaInfoCircle, FaPhoneAlt, FaEnvelope, FaCalendarCheck 
} from "react-icons/fa";

export default function SelfPayPage() {
  const [activeTab, setActiveTab] = useState("payment");

  // Payment Links
  const stripe200 = "https://checkout.stripe.com/c/pay/cs_live_...";
  const stripe120 = "https://checkout.stripe.com/c/pay/cs_live_...";
  const stripe100 = "https://checkout.stripe.com/c/pay/cs_live_...";
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
      <div className="w-full bg-[#F4FAFC] border-b border-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
                <h1 className="text-4xl md:text-6xl font-extrabold leading-tight text-gray-900">
                    Patient <span className="text-[#FFAA00]">Portal</span>
                </h1>
                <p className="mt-4 text-xl text-gray-700 max-w-lg">
                    Book sessions or manage invoices securely through our medical dashboard.
                </p>
            </div>
            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="flex justify-center">
                <Image src="/selfpay.jpg" alt="Dash" width={500} height={400} className="rounded-3xl shadow-2xl" />
            </motion.div>
        </div>
      </div>

      {/* 2. UPDATED VERTICAL TAB TOGGLE SYSTEM */}
      <div className="max-w-md mx-auto px-6 mt-12 mb-8">
        <div className="bg-gray-100 p-1 rounded-2xl flex flex-col relative overflow-hidden">
            <button 
                onClick={() => setActiveTab('payment')} 
                className={`flex items-center justify-center gap-2 py-5 text-lg font-bold transition-all relative z-10 w-full ${activeTab === 'payment' ? 'text-gray-900' : 'text-gray-500'}`}
            >
                <FaDollarSign /> Pay Bill
            </button>
            <button 
                onClick={() => setActiveTab('appointment')} 
                className={`flex items-center justify-center gap-2 py-5 text-lg font-bold transition-all relative z-10 w-full ${activeTab === 'appointment' ? 'text-gray-900' : 'text-gray-500'}`}
            >
                <FaCalendarCheck /> Book Now
            </button>

            {/* Background slider animates Y instead of X */}
            <motion.div 
                className="absolute left-1 right-1 bg-white rounded-xl shadow-md" 
                animate={{ y: activeTab === 'payment' ? '0%' : '100%' }} 
                style={{ height: 'calc(50% - 4px)', top: '2px' }} 
            />
        </div>
      </div>

      {/* 3. DYNAMIC CONTENT AREA */}
      <div className="max-w-7xl mx-auto px-6 lg:px-16">
        <AnimatePresence mode="wait">
            {activeTab === 'payment' ? (
                <motion.div key="pay" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}>
                    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 py-10">
                        {/* Initial Intake */}
                        <motion.article className="bg-white border-4 border-[#FFAA00] rounded-3xl p-8 shadow-2xl flex flex-col transform transition-all">
                            <h3 className="text-2xl font-bold mb-1">Initial Intake</h3>
                            <div className="text-5xl font-black text-gray-900 my-6">$200</div>
                            <ul className="space-y-3 mb-8">
                                <FeatureItem text="Diagnostic evaluation" />
                                <FeatureItem text="Medication assessment" />
                            </ul>
                            <ActionButton stripeLink={stripe200} isFeatured={true} />
                        </motion.article>
                        
                        {/* Follow-up */}
                        <article className="bg-white border rounded-3xl p-8 shadow-lg flex flex-col">
                            <h3 className="text-2xl font-bold mb-1">Follow-up</h3>
                            <div className="text-5xl font-black text-gray-900 my-6">$120</div>
                            <ul className="space-y-3 mb-8">
                                <FeatureItem text="Medication management" />
                                <FeatureItem text="30-min clinical session" />
                            </ul>
                            <ActionButton stripeLink={stripe120} />
                        </article>

                        {/* Admin Fee */}
                        <article className="bg-white border rounded-3xl p-8 shadow-lg flex flex-col">
                            <h3 className="text-2xl font-bold mb-1">Admin Fee</h3>
                            <div className="text-5xl font-black text-gray-900 my-6">$100</div>
                            <ul className="space-y-3 mb-8">
                                <FeatureItem text="Official documentation" />
                                <FeatureItem text="Consultation services" />
                            </ul>
                            <ActionButton stripeLink={stripe100} />
                        </article>
                    </div>

                    {/* BLACK BILL BOX */}
                    <div className="bg-black text-white rounded-[40px] p-10 mt-8 relative overflow-hidden shadow-2xl">
                        <h2 className="text-3xl font-black text-[#FFAA00] mb-4">CUSTOM BILL PAY</h2>
                        <p className="text-gray-400 mb-8 max-w-lg italic font-medium leading-relaxed">
                          Pay the exact amount previously agreed upon between you and GrowthFairness Psychiatry, PLLC.
                        </p>
                        <div className="max-w-sm">
                          <ActionButton stripeLink={stripeCustomBill} isFeatured={true} />
                        </div>
                    </div>
                </motion.div>
            ) : (
                <motion.div key="book" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="py-10">
                    <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
                        <div className="w-full">
                            <iframe 
                                width="100%" 
                                height="1000" 
                                src="https://ehr.charmtracker.com/publicCal.sas?method=getCal&digest=04215c313b1c953d96519b97deb749efeef2f42393af6fbb54c15310aafaee1f5385f436ad42bc02967f905c2f4771da1fd5a4982bdad" 
                                className="border-none"
                                style={{ overflow: "hidden" }}
                                loading="lazy"
                                title="CharmTracker Scheduler"
                            />
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
      </div>
    </div>
  );
}