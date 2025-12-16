"use client";

import { useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

export default function ContactPage() {
  const router = useRouter();

  const goToClinicianForms = () => router.push("/forms");
  const goToPatientAppointments = () => router.push("/appointments");

  return (
    <div className="w-full bg-[#F4FAFC]">
      {/* HEADER */}
      <section className="text-center py-16 px-6">
        <h1 className="text-4xl font-bold text-gray-900 tracking-tight">
          Contact Us
        </h1>
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
            Mon–Sat
            <br />
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
            12337 Jones Road
            <br />
            Houston, TX 77070
          </p>
        </div>
      </section>

      {/* MAP + ZOHO FORM */}
      <section className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 px-6 py-16">
        {/* MAP - REDUCED MOBILE HEIGHT */}
        <div className="w-full h-[300px] md:h-[500px] rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
          <iframe
            // --- UPDATED SRC HERE ---
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3460.016391485603!2d-95.55627682414341!3d30.0768340158434!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640d0f41334c2bf%3A0xc3f982d61d900662!2s12337%20Jones%20Rd%2C%20Houston%2C%20TX%2077070%2C%20USA!5e0!3m2!1sen!2sng!4v1701388800000!5m2!1sen!2sng"
            width="100%"
            height="100%"
            loading="lazy"
            className="border-0"
          ></iframe>
        </div>

        {/* ZOHO EMBED FORM */}
        <div className="bg-white p-6 md:p-8 rounded-2xl shadow-2xl border border-gray-100">
          <h3 className="text-2xl font-black text-gray-900 mb-6 uppercase tracking-tight">
            Direct Inquiry Form
          </h3>

          <iframe
            aria-label="Contact Us"
            frameBorder="0"
            style={{ height: "600px", width: "100%", border: "none" }}
            src="https://forms.zohopublic.com/growthfairness2gm1/form/ContactUs/formperma/Q1qTNXG-jfO7hj8tk-8q2N9yzdnOi9kLn-E7CP1Sl4c"
          ></iframe>
        </div>
      </section>
    </div>
  );
}