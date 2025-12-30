"use client";

import React from "react";
import { FaStar } from "react-icons/fa";

const testimonials = [
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
  { name: "Allison Tyner", text: "Exceptional psychiatric care and professional guidance." } // Added text for consistency
];

export default function ReviewStage() {
  return (
    <section className="bg-white py-32 font-sans selection:bg-[#FFAA00] selection:text-white">
      <div className="max-w-[1600px] mx-auto px-8 lg:px-12">
        
        {/* SECTION HEADER: BOLD ARCHITECTURAL ALIGNMENT */}
        <div className="flex flex-col lg:flex-row justify-between items-baseline mb-24 border-b-2 border-black pb-8">
          <h2 className="text-[12vw] lg:text-[150px] font-black leading-[0.8] tracking-tighter text-[#1A1A1A]">
            PROO<span className="text-[#FFAA00]">F.</span>
          </h2>
          <div className="mt-8 lg:mt-0 text-right">
            <p className="text-xl font-bold uppercase tracking-widest text-black">GrowthFairness Psychiatry</p>
            <div className="flex justify-end gap-1 text-[#FFAA00] mt-2">
              {[...Array(5)].map((_, i) => <FaStar key={i} size={20} />)}
            </div>
            <p className="text-gray-400 mt-2 font-medium">Verified Patient Documentation</p>
          </div>
        </div>

        {/* THE MASONRY GRID: TOTAL IMMERSION */}
        <div className="columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-12 space-y-12">
          {testimonials.map((review, index) => (
            <div 
              key={index} 
              className="break-inside-avoid group flex flex-col border-l border-gray-100 pl-8 pb-4 transition-all hover:border-[#FFAA00]"
            >
              {/* QUOTE DECOR: MINIMALIST LINE */}
              <div className="w-8 h-1 bg-[#FFAA00] mb-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="flex mb-4 text-[#FFAA00] text-[10px]">
                {[...Array(5)].map((_, i) => <FaStar key={i} />)}
              </div>

              <blockquote className="text-xl font-medium text-[#1A1A1A] leading-tight mb-8 tracking-tight">
                "{review.text}"
              </blockquote>

              <div className="flex items-center gap-4 mt-auto">
                <div className="text-sm font-black uppercase tracking-tighter border-b border-black pb-1">
                  {review.name}
                </div>
                <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                  Verified Patient
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* FOOTER CALL TO ACTION: BOLD & FUNCTIONAL */}
        <div className="mt-32 pt-12 border-t border-gray-100 flex flex-col items-center">
          <p className="text-gray-400 mb-6 font-medium uppercase tracking-[0.3em]">Ready for your own story?</p>
          <button className="bg-[#1A1A1A] text-white px-12 py-5 text-lg font-bold hover:bg-[#FFAA00] transition-all duration-300 rounded-full shadow-2xl hover:scale-105">
            Book a Consultation
          </button>
        </div>

      </div>
    </section>
  );
}