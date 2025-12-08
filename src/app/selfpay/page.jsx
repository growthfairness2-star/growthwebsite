"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { 
  FaDollarSign, FaUserClock, FaCreditCard, FaLock, 
  FaCalendarAlt, FaStar, FaInfoCircle, FaPhoneAlt, FaEnvelope 
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
  
  const ButtonGroup = ({ stripeLink, isFeatured = false }) => (
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
    <div className="min-h-screen bg-white text-gray-900 pb-20">
      
      {/* 1. HERO SECTION */}
      <div className="w-full bg-[#F4FAFC] border-b border-gray-100 py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight text-gray-900">
                    GrowthFairness <span className="text-[#FFAA00]">Private Pay</span>
                </h1>
                <p className="mt-4 text-xl text-gray-700 max-w-lg">
                    Manage your clinical services and bills with transparency. 
                    Choose your session type or pay a custom invoice securely.
                </p>
                <div className="mt-6 flex items-center gap-3 text-lg font-semibold text-[#FFAA00]">
                    <FaStar /> Secure Stripe Checkout
                </div>
            </div>

            <motion.div
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="flex justify-center"
            >
                <Image
                    src="/selfpay.jpg"
                    alt="Clinical Payments"
                    width={500}
                    height={400}
                    className="rounded-3xl shadow-2xl object-cover"
                />
            </motion.div>
        </div>
      </div>
      
      {/* 2. CLINICAL SERVICE TIERS */}
      <section className="max-w-7xl mx-auto px-6 lg:px-16 py-16">
        <h2 className="text-3xl font-black mb-12 text-center text-gray-800 uppercase tracking-tight">Clinical Service Levels</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          
          <motion.article className="relative bg-white border-4 border-[#FFAA00] rounded-3xl p-8 shadow-2xl flex flex-col transform hover:scale-[1.02] transition-all">
            <div className="absolute -top-4 right-6 bg-[#FFAA00] text-gray-900 text-xs font-black uppercase px-3 py-1 rounded-full">Primary Intake</div>
            <FaUserClock className="text-4xl text-[#FFAA00] mb-4" />
            <h3 className="text-2xl font-bold mb-1">Initial Consult</h3>
            <div className="text-5xl font-black text-gray-900 my-6">$200</div>
            <ul className="space-y-3 mb-8">
              <FeatureItem text="Comprehensive assessment" />
              <FeatureItem text="Diagnostic evaluation" />
              <FeatureItem text="Medication management" />
            </ul>
            <ButtonGroup stripeLink={stripe200} isFeatured={true} />
          </motion.article>

          <article className="bg-white border border-gray-200 rounded-3xl p-8 shadow-lg flex flex-col">
            <FaUserClock className="text-4xl text-gray-400 mb-4" />
            <h3 className="text-2xl font-bold mb-1">Follow-up</h3>
            <div className="text-5xl font-black text-gray-900 my-6">$120</div>
            <ul className="space-y-3 mb-8">
              <FeatureItem text="Medication refill & adjustment" />
              <FeatureItem text="Talk therapy integration" />
              <FeatureItem text="Progress review" />
            </ul>
            <ButtonGroup stripeLink={stripe120} />
          </article>

          <article className="bg-white border border-gray-200 rounded-3xl p-8 shadow-lg flex flex-col">
            <FaDollarSign className="text-4xl text-gray-400 mb-4" />
            <h3 className="text-2xl font-bold mb-1">Administrative</h3>
            <div className="text-5xl font-black text-gray-900 my-6">$100</div>
            <ul className="space-y-3 mb-8">
              <FeatureItem text="Detailed record requests" />
              <FeatureItem text="Provider consultation fees" />
              <FeatureItem text="Official documentation/letters" />
            </ul>
            <ButtonGroup stripeLink={stripe100} />
          </article>
        </div>
      </section>

      {/* 3. NEW CUSTOM BILL TABLE */}
      <section className="max-w-4xl mx-auto px-6 lg:px-16 mt-12">
        <div className="bg-black text-white rounded-[40px] p-8 md:p-12 shadow-2xl border-2 border-white/10 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#FFAA00] blur-[120px] opacity-20"></div>
            
            <div className="grid lg:grid-cols-2 gap-10 items-center">
                <div>
                    <h2 className="text-3xl font-black text-[#FFAA00] mb-4 uppercase">Pay My Bill</h2>
                    <p className="text-gray-300 text-lg leading-relaxed mb-6">
                        Out-of-Pocket Payment. Pay the exact amount agreed upon with <strong>GrowthFairness Psychiatry, PLLC</strong>.
                    </p>
                    
                    <div className="space-y-3 mb-8">
                        <p className="text-sm font-semibold flex items-center gap-2 text-white">
                            <FaInfoCircle className="text-[#FFAA00]" /> Not sure how much to pay?
                        </p>
                        <div className="flex flex-col gap-2">
                            <a href="tel:8324496276" className="flex items-center gap-3 text-gray-400 hover:text-white transition">
                                <FaPhoneAlt size={14}/> (832) 449-6276
                            </a>
                            <a href="mailto:info@growthfairness.com" className="flex items-center gap-3 text-gray-400 hover:text-white transition">
                                <FaEnvelope size={14}/> info@growthfairness.com
                            </a>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col items-center justify-center bg-white/5 p-8 rounded-3xl border border-white/10 backdrop-blur-sm">
                    <h4 className="text-sm font-bold text-[#FFAA00] tracking-widest uppercase mb-2">Secure Custom Amount</h4>
                    <p className="text-gray-400 text-xs mb-8 text-center uppercase tracking-tighter">Powered by Stripe Connect</p>
                    <a
                        href={stripeCustomBill}
                        target="_blank"
                        className="group w-full flex items-center justify-center gap-4 bg-[#FFAA00] hover:bg-white text-black font-black px-10 py-5 rounded-2xl transition-all duration-300 transform hover:-translate-y-1"
                    >
                        <FaCreditCard /> PAY BILL NOW
                    </a>
                </div>
            </div>
        </div>
      </section>

      {/* 4. POLICY */}
      <div className="max-w-7xl mx-auto px-6 lg:px-16 mt-20">
        <div className="p-8 rounded-2xl bg-[#FFF9E5] border-l-4 border-[#FFAA00]">
            <h3 className="text-xl font-bold text-gray-900 mb-2">Transparency & Cancellation</h3>
            <p className="text-gray-700 leading-relaxed italic">
                A mandatory **$75 fee** is applied to appointments cancelled less than 24 hours in advance.
            </p>
        </div>
      </div>
    </div>
  );
}