"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa";

const allReviews = [
  { name: "Anthony Weaver", text: "I recommend Raymond. Getting back on my medication has always been a challenge but with the Right person, it can be easy and smooth! Very Easy to talk to and get you where you need to be. Thank you to Raymond and Growthfairness Psychiatry for the best support." },
  { name: "Askia Rahman", text: "Dr. Raymond has been very helpful to me in managing my medication as well as encouraging a healthy lifestyle. I’ve been doing much better since our first meeting and I am very grateful." },
  { name: "Moron I Am", text: "Amazing place! Affordable even without insurance. When I lost my insurance, the office did its best to keep me covered with medicine for as long as they can ..." },
  { name: "Tom Peters", text: "Dr. Raymond has been very supportive and helpful to my mental health journey. He is a great listener and always a good sounding board. I recommend Dr Raymond for anyone looking for a mental health advocate." },
  { name: "Jelesa Gregory", text: "Meeting with Raymond has truly made a difference in my life. He manages the medicine while also making sure to stress the importance of a healthy lifestyle. I’d recommend him to anyone." },
  { name: "Nelson Victoria", text: "Great help with any issue you might have and great support when responding." },
  { name: "Kevin Argueta", text: "Good doctor and always caring about his patients." },
  { name: "Dr I. Ezeh", text: "I have worked with Dr Ray. He provided quality and compassionate care. I highly recommend him." },
  { name: "Obinna Akah", text: "Awesome and truly care about there members and well being. A definitely 5 star!!" },
  { name: "ABC Family Ngodo", text: "The service which my entire family did receive when we are going through mental breakdown from the loss of our was very therapeutic" },
  { name: "Logan Wooley", text: "Good doctors and fast service" },
  { name: "Prosper", text: "Great mental health and psychiatric care. Thank you." },
  { name: "Allison Tyner", text: "" } // Rating only
];

export default function ReviewWall() {
  return (
    <section className="bg-white py-24">
      <div className="max-w-[1400px] mx-auto px-6">
        
        {/* TOP HEADER: Clean & Bold */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-20 border-b border-gray-100 pb-12">
          <div className="max-w-2xl">
            <h2 className="text-sm font-bold tracking-[0.4em] text-[#FFAA00] uppercase mb-4">
              Patient Experiences
            </h2>
            <h3 className="text-5xl md:text-7xl font-black text-[#1A1A1A] tracking-tighter">
              The Standard <br /> of <span className="text-gray-300">Care.</span>
            </h3>
          </div>
          <div className="flex flex-col items-start md:items-end">
             <div className="flex text-[#FFAA00] text-xl mb-2">
                {[...Array(5)].map((_, i) => <FaStar key={i} />)}
             </div>
             <p className="text-gray-400 font-medium">Based on verified Google Reviews</p>
          </div>
        </div>

        {/* MASONRY-STYLE GRID: All reviews included */}
        <div className="columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-8 space-y-8">
          {allReviews.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="break-inside-avoid group relative bg-white border border-gray-100 p-8 rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] hover:border-[#FFAA00]/30 transition-all duration-500"
            >
              {/* Star Rating */}
              <div className="flex text-[#FFAA00] text-[10px] mb-4 gap-0.5">
                {[...Array(5)].map((_, i) => <FaStar key={i} />)}
              </div>

              {/* Review Text */}
              {review.text ? (
                <p className="text-[#444] leading-relaxed text-sm md:text-base font-medium mb-6">
                  “{review.text}”
                </p>
              ) : (
                <p className="text-gray-300 italic text-sm mb-6">Rated 5.0 stars</p>
              )}

              {/* Author Info */}
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center text-[#1A1A1A] text-xs font-bold border border-gray-100 group-hover:bg-[#FFAA00] group-hover:text-white transition-colors">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#1A1A1A] leading-none">
                    {review.name}
                  </h4>
                  <p className="text-[10px] text-gray-400 uppercase tracking-widest mt-1">
                    Verified
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}