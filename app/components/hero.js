import React from "react";

export default function Hero() {
  return (
    <section className="w-full py-20 px-6 lg:px-20 bg-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        
        {/* LEFT SIDE TEXT */}
        <div>
          <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
            Your Mind Deserves<br />
            <span style={{ color: '#FFD54F' }}>Care, Clarity & Support.</span>
          </h1>

          <p className="mt-6 text-lg text-gray-600">
            We provide expert mental-health care designed to bring calm, balance, 
            and emotional well-being to your everyday life.
          </p>

          <div className="mt-8 flex gap-4">
            <button 
              className="px-6 py-3 rounded-lg text-white font-semibold"
              style={{ backgroundColor: '#FFD54F' }}
            >
              Get Started
            </button>

            <button className="px-6 py-3 rounded-lg border border-gray-400 text-gray-700 font-semibold">
              Learn More
            </button>
          </div>
        </div>

        {/* RIGHT SIDE VIDEO */}
        <div className="rounded-xl overflow-hidden shadow-lg">
          <video 
            src="/hero-video.mp4"
            autoPlay 
            loop 
            muted 
            playsInline
            className="w-full h-full object-cover"
          />
        </div>

      </div>
    </section>
  );
}
