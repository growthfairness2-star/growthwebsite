"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

export default function ContactPage() {
  const router = useRouter();

  const handleNavigation = () => {
    router.push("/forms");
  };

  return (
    <div className="w-full bg-[#F4FAFC]">

      {/* HEADER */}
      <section className="text-center py-16 px-6">
        <h1 className="text-4xl font-bold text-gray-900">Contact Us</h1>
        <p className="mt-4 text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Your mental health is our priority. Feel free to contact us with your questions.
          We are here to help you with your mental health issues. We currently offer
          psychiatric assessment, evaluation, diagnosis, and medication management.
        </p>
      </section>

      {/* REFERRAL BUTTONS - Updated to be unique and link to /forms */}
      <section className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6 px-6 pb-16">
        
        {/* Clinician Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={{ scale: 1.02 }}
          onClick={handleNavigation}
          className="bg-[#7DB8CE] text-white text-center py-8 rounded-xl shadow cursor-pointer hover:shadow-lg transition"
        >
          <p className="text-xl font-semibold">Are you a clinician?</p>
          <p className="mt-2">Refer a Client for Med Management</p>
        </motion.div>

        {/* Patient Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={{ scale: 1.02 }}
          onClick={handleNavigation}
          className="bg-[#7DB8CE] text-white text-center py-8 rounded-xl shadow cursor-pointer hover:shadow-lg transition"
        >
          <p className="text-xl font-semibold">Are you a patient?</p>
          <p className="mt-2">Request an Appointment or Consultation</p>
        </motion.div>

      </section>

      {/* THREE INFO COLUMNS */}
      <section className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10 text-center px-6 py-10">
        <div>
          <h3 className="font-semibold text-gray-900 text-xl">Open Hours</h3>
          <p className="mt-2 text-gray-600">
            Monday to Saturday <br /> 9am to 7pm
          </p>
        </div>

        <div>
          <h3 className="font-semibold text-gray-900 text-xl">Get in Touch</h3>
          <p className="mt-2 text-gray-600">
            Call / Text: 8324496276 <br />
            Fax: 7135541811 <br />
            info@growthfairness.com
          </p>
        </div>

        <div>
          <h3 className="font-semibold text-gray-900 text-xl">Address</h3>
          <p className="mt-2 text-gray-600">
            BUSINESS ADDRESS: 12337 <br />
            Jones Road, Houston <br />
            Texas 77070.
          </p>
        </div>
      </section>

      {/* MAP + FORM */}
      <section className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 px-6 py-16">

        {/* MAP */}
        <div className="w-full h-[500px] rounded-xl overflow-hidden shadow">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3455.578635839958!2d-95.6027063!3d29.98565!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640d1df68157771%3A0xc66c11d279318898!2s12337%20Jones%20Rd%2C%20Houston%2C%20TX%2077070!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
            width="100%"
            height="100%"
            loading="lazy"
            className="border-0"
          ></iframe>
        </div>

        {/* FORM */}
        <div className="bg-white p-8 rounded-xl shadow">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">
            Have Questions? Contact Us!
          </h3>

          <form className="space-y-4">
            <input
              type="text"
              placeholder="Name"
              className="w-full p-3 border rounded-md focus:ring-2 focus:ring-blue-300"
            />

            <input
              type="email"
              placeholder="Email Address"
              className="w-full p-3 border rounded-md focus:ring-2 focus:ring-blue-300"
            />

            <textarea
              placeholder="Message"
              rows={6}
              className="w-full p-3 border rounded-md focus:ring-2 focus:ring-blue-300"
            ></textarea>

            <input type="file" className="w-full" />

            <div className="w-full">
              <div className="bg-gray-100 border rounded-md p-6 text-center text-gray-500">
                reCAPTCHA placeholder
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-[#FFAA00] text-white py-3 rounded-lg font-semibold hover:bg-[#e09a00] transition"
            >
              Send
            </button>
          </form>
        </div>
      </section>

      {/* CRISIS SECTION */}
      <section className="bg-[#EAF6FA] py-20 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">

          {/* TEXT */}
          <div>
            <h2 className="text-2xl font-bold text-center md:text-left text-gray-900 mb-6">
              Having mental health crisis? Call 911 or 988 or go to your
              local emergency room for help.
            </h2>

            <p className="text-gray-600 leading-relaxed">
              If you or someone you know is considering suicide or having 
              mental health crisis, call “911” or visit your local emergency 
              room or contact the National Suicide Prevention Lifeline by 
              dialing “988” or 1–800–273–TALK (8255) or text “STRENGTH” to the 
              Crisis Text Line at 741–741.
            </p>
          </div>

          {/* IMAGE */}
          <div className="w-full h-[350px] rounded-xl overflow-hidden shadow">
            <Image
              src="/homeanxiety.jpg"
              alt="mental crisis help"
              width={600}
              height={400}
              className="object-cover w-full h-full"
            />
          </div>
        </div>

        {/* Additional paragraph */}
        <div className="max-w-5xl mx-auto mt-12 text-center text-gray-600 leading-relaxed">
          <p>
            During a mental health crisis, it is critical to prioritize your safety
            and well-being. If you feel safe doing so, contact a trustworthy friend or
            family member who can offer support.
            They can help you assure your immediate safety and seek professional
            assistance.
          </p>

          <p className="mt-6">
            Many cities have crisis hotlines or mental health groups that can
            provide emergency aid. You are not alone — there are people who
            care and want to assist you.
          </p>
        </div>
      </section>

    </div>
  );
}