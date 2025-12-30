"use client";

import React, { useRef } from "react";

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
  { name: "Allison Tyner", text: "Exceptional psychiatric care and professional guidance." }
];

export default function ReviewStage() {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === 'left' ? scrollLeft - clientWidth : scrollLeft + clientWidth;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  return (
    <section className="bg-white py-20 font-sans selection:bg-[#FFAA00] selection:text-white overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-8 lg:px-12">
        
        {/* HEADER SECTION */}
        <div className="flex flex-col lg:flex-row justify-between items-end mb-16 border-b-2 border-black pb-8">
          <h2 className="text-[12vw] lg:text-[120px] font-black leading-[0.8] tracking-tighter text-[#1A1A1A]">
            REVIEW<span className="text-[#FFAA00]">S.</span>
          </h2>
          
          <div className="flex flex-col items-end mt-8 lg:mt-0">
            {/* NAVIGATION ARROWS (STAINLESS CSS) */}
            <div className="flex gap-2 mb-6">
              <button 
                onClick={() => scroll('left')}
                className="w-12 h-12 flex items-center justify-center border-2 border-black hover:bg-[#FFAA00] transition-all group"
                aria-label="Previous"
              >
                <span className="border-t-2 border-l-2 border-black w-3 h-3 -rotate-45 ml-1"></span>
              </button>
              <button 
                onClick={() => scroll('right')}
                className="w-12 h-12 flex items-center justify-center border-2 border-black hover:bg-[#FFAA00] transition-all"
                aria-label="Next"
              >
                <span className="border-t-2 border-r-2 border-black w-3 h-3 rotate-45 mr-1"></span>
              </button>
            </div>
            <p className="text-lg font-bold uppercase tracking-widest text-black">GrowthFairness Psychiatry</p>
          </div>
        </div>

        {/* HORIZONTAL SLIDER CONTAINER */}
        <div 
          ref={scrollRef}
          className="flex overflow-x-auto gap-8 no-scrollbar snap-x snap-mandatory pb-10"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {testimonials.map((review, index) => (
            <div 
              key={index} 
              className="min-w-[300px] md:min-w-[450px] snap-start flex flex-col border-l-2 border-gray-100 pl-8 transition-all hover:border-[#FFAA00]"
            >
              {/* STAR ICONS (CSS ONLY) */}
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="text-[#FFAA00]">★</div>
                ))}
              </div>

              <blockquote className="text-xl md:text-2xl font-medium text-[#1A1A1A] leading-snug mb-10 italic">
                "{review.text}"
              </blockquote>

              <div className="mt-auto">
                <div className="text-sm font-black uppercase tracking-tighter border-b-2 border-[#FFAA00] inline-block mb-1">
                  {review.name}
                </div>
                <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                  Verified Patient
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}