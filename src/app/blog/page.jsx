"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function BlogComingSoon() {
  return (
    <div className="w-full bg-[#F5FAFD] min-h-screen flex items-center py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-16 grid lg:grid-cols-2 gap-16 items-center">

        {/* LEFT TEXT SECTION */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
            Our Blog is Coming Soon
          </h1>

          <p className="mt-6 text-lg text-gray-700 max-w-lg">
            We’re working on creating helpful articles, mental health resources,
            and expert insights to support your wellness journey.  
            <br /><br />
            Check back soon for updates, or explore our services while you wait.
          </p>

          <button
            onClick={() => (window.location.href = "/appointments")}
            className="mt-8 px-8 py-4 bg-[#FFAA00] text-white font-semibold rounded-xl text-lg shadow-md hover:bg-[#E69900] transition"
          >
            Book an Appointment
          </button>
        </motion.div>

        {/* RIGHT IMAGE SECTION */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center"
        >
          <Image
            src="/blog.png"   // <-- replace with your image name
            alt="Blog Coming Soon"
            width={550}
            height={550}
            className="rounded-3xl shadow-xl object-cover"
          />
        </motion.div>

      </div>
    </div>
  );
}
