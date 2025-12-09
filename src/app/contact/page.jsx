"use client";

import { useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

export default function ContactPage() {
  const router = useRouter();

  // ⭐⭐⭐ Load + Render reCAPTCHA manually (FIXES invisibility)
  useEffect(() => {
    // Define callback BEFORE loading script
    window.onloadCallback = function () {
      if (window.grecaptcha) {
        window.grecaptcha.render("recaptcha-container", {
          sitekey: "6LcrlyUsAAAAABQPTXrs2gpQb-vuwFoeCyEtXaP_",
        });
      }
    };

    // Load script
    const script = document.createElement("script");
    script.src = "https://www.google.com/recaptcha/api.js?onload=onloadCallback";
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
  }, []);

  const goToClinicianForms = () => router.push("/forms");
  const goToPatientAppointments = () => router.push("/appointments");

  return (
    <div className="w-full bg-[#F4FAFC]">

      {/* HEADER */}
      <section className="text-center py-16 px-6">
        <h1 className="text-4xl font-bold text-gray-900 tracking-tight">Contact Us</h1>
        <p className="mt-4 text-gray-600 max-w-3xl mx-auto leading-relaxed text-lg">
          Your mental health is our priority. We are here to support you with psychiatric assessment, 
          diagnosis, and expert medication management.
        </p>
      </section>

      {/* PATHWAYS */}
      <section className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8 px-6 pb-16">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          whileHover={{ scale: 1.03 }}
          onClick={goToClinicianForms}
          className="bg-[#7DB8CE] text-white text-center py-10 rounded-2xl shadow-xl cursor-pointer transition-all border-b-8 border-black/10"
        >
          <p className="text-2xl font-black uppercase tracking-wide">Are you a clinician?</p>
          <p className="mt-2 text-white/90 font-medium italic">Refer a Client for Med Management</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          whileHover={{ scale: 1.03 }}
          onClick={goToPatientAppointments}
          className="bg-[#FFAA00] text-white text-center py-10 rounded-2xl shadow-xl cursor-pointer transition-all border-b-8 border-black/10"
        >
          <p className="text-2xl font-black uppercase tracking-wide">Are you a patient?</p>
          <p className="mt-2 text-white/90 font-medium italic">Book an Appointment Online</p>
        </motion.div>
      </section>

      {/* INFO */}
      <section className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10 text-center px-6 py-10">
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <h3 className="font-bold text-gray-900 text-xl">Open Hours</h3>
          <p className="mt-2 text-gray-600">
            Mon–Sat<br/>
            <span className="text-[#FFAA00] font-semibold">9:00 AM – 7:00 PM</span>
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm">
          <h3 className="font-bold text-gray-900 text-xl">Get in Touch</h3>
          <p className="mt-2 text-gray-600 leading-relaxed">
            Call/Text: 832-449-6276 <br />
            Fax: 713-554-1811 <br />
            <span className="text-[#7DB8CE] font-medium">info@growthfairness.com</span>
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm">
          <h3 className="font-bold text-gray-900 text-xl">Address</h3>
          <p className="mt-2 text-gray-600">
            12337 Jones Road<br/>
            Houston, TX 77070
          </p>
        </div>
      </section>

      {/* MAP + FORM */}
      <section className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 px-6 py-16">

        {/* MAP */}
        <div className="w-full h-[500px] rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18..."
            width="100%"
            height="100%"
            loading="lazy"
            className="border-0"
          ></iframe>
        </div>

        {/* FORM */}
        <div className="bg-white p-8 rounded-2xl shadow-2xl border border-gray-100">
          <h3 className="text-2xl font-black text-gray-900 mb-6 uppercase tracking-tight">
            Direct Inquiry Form
          </h3>

          <form
            className="space-y-5"
            method="POST"
            action="/api/contact"
            encType="multipart/form-data"
          >
            <input
              name="name"
              type="text"
              placeholder="Full Name"
              required
              className="w-full p-4 border rounded-xl text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-[#7DB8CE]"
            />

            <input
              name="email"
              type="email"
              placeholder="Email Address"
              required
              className="w-full p-4 border rounded-xl text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-[#7DB8CE]"
            />

            <textarea
              name="message"
              placeholder="How can we help?"
              rows={5}
              required
              className="w-full p-4 border rounded-xl text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-[#7DB8CE]"
            ></textarea>

            {/* FILE UPLOAD */}
            <div>
              <label className="font-semibold text-gray-700">Upload File (Optional)</label>
              <input
                type="file"
                name="file"
                className="w-full mt-2 p-3 border rounded-xl bg-white text-gray-900"
              />
            </div>

            {/* CONSENT */}
            <label className="flex items-start gap-3 text-gray-700 text-sm leading-snug">
              <input type="checkbox" name="consent" required className="mt-1" />
              <span>
                I consent to GrowthFairness Psychiatry receiving my information for contact purposes.
              </span>
            </label>

            {/* ⭐⭐⭐ GOOGLE RECAPTCHA (fixed version) */}
            <div id="recaptcha-container" className="mt-4"></div>

            <button
              type="submit"
              className="w-full bg-black text-white py-4 rounded-xl font-black text-lg hover:bg-[#FFAA00] transition-all duration-300"
            >
              SUBMIT MESSAGE
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
