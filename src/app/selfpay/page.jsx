"use client";

import { motion } from "framer-motion";

export default function SelfPayPage() {
  const stripeLink = "https://buy.stripe.com/3cI5kD9YN16GgUub6eak000";

  return (
    <div className="min-h-screen bg-[#F4FAFC] text-gray-900">
      {/* Top strip (soft texture or color) */}
      <div className="w-full bg-[url('/profile-bg.png')] bg-cover bg-center">
        <div className="max-w-6xl mx-auto px-6 py-14">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight">
            Self-Pay · Private Pay
          </h1>
          <p className="mt-3 text-gray-600 max-w-3xl">
            Transparent pricing for out-of-pocket appointments. Choose a service,
            securely pay with Stripe, or book an appointment below.
          </p>
        </div>
      </div>

      {/* Pricing grid */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid gap-8 md:grid-cols-2">
          {/* Card */}
          <motion.article
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white/80 backdrop-blur-sm border border-gray-100 rounded-2xl p-8 shadow-md"
          >
            <div className="flex items-start justify-between gap-6">
              <div>
                <h2 className="text-2xl font-semibold">Initial Intake Consult</h2>
                <p className="text-sm text-gray-500 mt-1">Out-of-Pocket payment · up to 60 min</p>

                <ul className="mt-4 ml-4 list-disc text-gray-700 space-y-2 text-sm">
                  <li>Comprehensive assessment</li>
                  <li>Diagnostic evaluation</li>
                  <li>Medication management</li>
                  <li>Talk / supportive therapy</li>
                </ul>
              </div>

              <div className="flex-shrink-0 text-right">
                <div className="inline-block bg-[#FFFAF2] border border-[#FFE6B8] px-4 py-2 rounded-full text-lg font-bold text-[#C06B00]">
                  $200
                </div>

                <button
                  onClick={() => window.open(stripeLink, "_blank")}
                  className="mt-6 w-full bg-[#FFAA00] hover:bg-[#e69900] text-white font-semibold rounded-lg px-5 py-2 shadow-sm transition"
                >
                  Pay Now
                </button>
              </div>
            </div>
          </motion.article>

          {/* Card */}
          <motion.article
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white/80 backdrop-blur-sm border border-gray-100 rounded-2xl p-8 shadow-md"
          >
            <div className="flex items-start justify-between gap-6">
              <div>
                <h2 className="text-2xl font-semibold">Follow-up Consult</h2>
                <p className="text-sm text-gray-500 mt-1">Out-of-Pocket payment · 30 min</p>

                <ul className="mt-4 ml-4 list-disc text-gray-700 space-y-2 text-sm">
                  <li>Medication management & refill</li>
                  <li>Brief assessment</li>
                  <li>Talk / supportive therapy</li>
                </ul>
              </div>

              <div className="flex-shrink-0 text-right">
                <div className="inline-block bg-[#FFFAF2] border border-[#FFE6B8] px-4 py-2 rounded-full text-lg font-bold text-[#C06B00]">
                  $120
                </div>

                <button
                  onClick={() => window.open(stripeLink, "_blank")}
                  className="mt-6 w-full bg-[#FFAA00] hover:bg-[#e69900] text-white font-semibold rounded-lg px-5 py-2 shadow-sm transition"
                >
                  Pay Now
                </button>
              </div>
            </div>
          </motion.article>

          {/* Admin Fees */}
          <motion.article
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white/80 backdrop-blur-sm border border-gray-100 rounded-2xl p-8 shadow-md"
          >
            <div className="flex items-start justify-between gap-6">
              <div>
                <h2 className="text-2xl font-semibold">Administrative Fees</h2>
                <p className="text-sm text-gray-500 mt-1">Out-of-Pocket payment</p>

                <ul className="mt-4 ml-4 list-disc text-gray-700 space-y-2 text-sm">
                  <li>Letters, reports, or detailed records requested</li>
                  <li>Consultation with other providers outside normal case management</li>
                </ul>
              </div>

              <div className="flex-shrink-0 text-right">
                <div className="inline-block bg-[#FFFAF2] border border-[#FFE6B8] px-4 py-2 rounded-full text-lg font-bold text-[#C06B00]">
                  $100
                </div>

                <button
                  onClick={() => window.open(stripeLink, "_blank")}
                  className="mt-6 w-full bg-[#FFAA00] hover:bg-[#e69900] text-white font-semibold rounded-lg px-5 py-2 shadow-sm transition"
                >
                  Pay Now
                </button>
              </div>
            </div>
          </motion.article>

          {/* Pay Bill (custom amount) */}
          <motion.article
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white/80 backdrop-blur-sm border border-gray-100 rounded-2xl p-8 shadow-md"
          >
            <div className="flex items-start justify-between gap-6">
              <div>
                <h2 className="text-2xl font-semibold">Pay a Bill</h2>
                <p className="text-sm text-gray-500 mt-1">Out-of-Pocket payment</p>

                <ul className="mt-4 ml-4 list-disc text-gray-700 space-y-2 text-sm">
                  <li>Enter any agreed amount on the secure Stripe checkout</li>
                  <li>Contact us if you need help: (832) 449-6276 or info@growthfairness.com</li>
                </ul>
              </div>

              <div className="flex-shrink-0 text-right">
                <div className="inline-block bg-[#FFFAF2] border border-[#FFE6B8] px-4 py-2 rounded-full text-lg font-bold text-[#C06B00]">
                  USD
                </div>

                <button
                  onClick={() => window.open(stripeLink, "_blank")}
                  className="mt-6 w-full bg-[#FFAA00] hover:bg-[#e69900] text-white font-semibold rounded-lg px-5 py-2 shadow-sm transition"
                >
                  Pay Now
                </button>
              </div>
            </div>
          </motion.article>
        </div>
      </section>

      {/* calendar + booking area */}
      <section className="max-w-6xl mx-auto px-6 pb-24">
        <div className="bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden">
          <div className="p-6">
            <h3 className="text-xl font-semibold">Book an Appointment</h3>
            <p className="text-sm text-gray-600 mt-1">
              Use the scheduler below to see available times and reserve a session.
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
