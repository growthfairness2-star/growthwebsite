import React from "react";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="w-full bg-[#F4F9FA] pb-16">
      {/* HERO TOP */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 px-6 lg:px-16 pt-20 items-center">
        
        {/* LEFT TEXT */}
        <div>
          <h1 className="text-4xl lg:text-6xl font-bold text-[#1A1A1A] leading-tight">
            Elevating emotional wellness<br />
            and strong bonds for all
          </h1>

          <p className="mt-6 text-lg text-gray-600 leading-relaxed max-w-lg">
            Discover the power of compassionate care designed to support your emotional well-being,
            strengthen your relationships, and help you move through life with clarity and confidence.
          </p>

          <div className="mt-8">
            <button className="px-8 py-3 rounded-xl font-semibold text-white shadow-md"
              style={{ backgroundColor: "#FFAA00" }}
            >
              Book a Session
            </button>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative">
          <Image 
            src="/hero.png"
            width={700}
            height={700}
            alt="Hero Image"
            className="rounded-2xl object-cover"
          />
        </div>
      </div>

      {/* COUNSELLING SERVICE CARDS */}
      <div className="max-w-7xl mx-auto px-6 lg:px-16 mt-16">
        <h2 className="text-xl font-medium text-gray-700 mb-4">
          What types of service do you want?
        </h2>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 bg-white p-6 rounded-3xl shadow-md">
          
          {/* Item 1 */}
          <div className="p-5 rounded-xl border hover:shadow-sm transition">
            <p className="font-semibold text-gray-900">Individual Counselling</p>
            <p className="text-sm text-gray-500">For myself</p>
          </div>

          {/* Item 2 */}
          <div className="p-5 rounded-xl border hover:shadow-sm transition">
            <p className="font-semibold text-gray-900">Couple Counselling</p>
            <p className="text-sm text-gray-500">For me or my partner</p>
          </div>

          {/* Item 3 (highlighted like your image) */}
          <div className="p-5 rounded-xl text-white transition"
            style={{ backgroundColor: "#1F3D42" }}
          >
            <p className="font-semibold">Family Counselling</p>
            <p className="text-sm opacity-80">For my family member</p>
          </div>

          {/* Item 4 */}
          <div className="p-5 rounded-xl border hover:shadow-sm transition">
            <p className="font-semibold text-gray-900">Teens Counselling</p>
            <p className="text-sm text-gray-500">For my child (13–17)</p>
          </div>
        </div>
      </div>
    </section>
  );
}
