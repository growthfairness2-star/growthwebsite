"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { IoChevronDown, IoMenu, IoClose } from "react-icons/io5";

export default function Header() {
  const router = useRouter();
  const [openMenu, setOpenMenu] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  // Close menus on mouse leave for desktop elite UX
  const toggleMenu = (menuName) => {
    setOpenMenu(openMenu === menuName ? null : menuName);
  };

  const go = (route) => {
    router.push(route);
    setOpenMenu(null);
    setMobileOpen(false);
  };

  return (
    // REMOVED 'sticky top-0' - Header now flows with the scroll
    <header className="w-full bg-white z-[9999] border-b border-gray-100 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-16 py-5 flex items-center justify-between">

        {/* LOGO - Precision Rendering */}
        <button 
          onClick={() => go("/")} 
          className="flex items-center transition hover:opacity-80"
        >
          <Image 
            src="/logofile.png" 
            width={240} 
            height={50} 
            alt="Mental Health Balance Logo" 
            priority
          />
        </button>

        {/* DESKTOP NAV - Horizon System Typography */}
        <nav className="hidden lg:flex items-center gap-6 text-[#101112] font-black text-sm uppercase tracking-widest">

          <button onClick={() => go("/")} className="hover:text-[#FFAA00] transition">
            Home
          </button>

          {/* ABOUT DROPDOWN */}
          <div className="relative group">
            <button
              onMouseEnter={() => setOpenMenu("about")}
              onClick={() => toggleMenu("about")}
              className="flex items-center gap-1 hover:text-[#FFAA00] transition"
            >
              About <IoChevronDown className={`transition-transform duration-300 ${openMenu === "about" ? "rotate-180" : ""}`} />
            </button>

            {openMenu === "about" && (
              <div 
                onMouseLeave={() => setOpenMenu(null)}
                className="absolute top-full left-0 bg-white shadow-2xl rounded-2xl py-4 w-56 border border-gray-100 mt-2 z-[9999]"
              >
                <button onClick={() => go("/services")} className="block w-full px-6 py-2.5 text-left hover:bg-gray-50 hover:text-[#FFAA00] transition">Services</button>
                <button onClick={() => go("/team")} className="block w-full px-6 py-2.5 text-left hover:bg-gray-50 hover:text-[#FFAA00] transition">Our Team</button>
                <button onClick={() => go("/faq")} className="block w-full px-6 py-2.5 text-left hover:bg-gray-50 hover:text-[#FFAA00] transition">FAQ</button>
              </div>
            )}
          </div>

          {/* CONDITIONS DROPDOWN */}
          <div className="relative group">
            <button
              onMouseEnter={() => setOpenMenu("conditions")}
              onClick={() => toggleMenu("conditions")}
              className="flex items-center gap-1 hover:text-[#FFAA00] transition"
            >
              Conditions <IoChevronDown className={`transition-transform duration-300 ${openMenu === "conditions" ? "rotate-180" : ""}`} />
            </button>

            {openMenu === "conditions" && (
              <div 
                onMouseLeave={() => setOpenMenu(null)}
                className="absolute top-full left-0 bg-white shadow-2xl rounded-2xl py-4 w-64 border border-gray-100 mt-2 z-[9999] grid grid-cols-1"
              >
                {["Anxiety", "Depression", "ADHD", "OCD", "Bipolar Disorder", "PTSD"].map((cond) => (
                    <button 
                        key={cond}
                        onClick={() => go(`/${cond.toLowerCase().replace(" ", "")}`)} 
                        className="block px-6 py-2.5 text-left hover:bg-gray-50 hover:text-[#FFAA00] transition"
                    >
                        {cond}
                    </button>
                ))}
              </div>
            )}
          </div>

          {/* PAYMENT DROPDOWN */}
          <div className="relative group">
            <button
              onMouseEnter={() => setOpenMenu("payment")}
              onClick={() => toggleMenu("payment")}
              className="flex items-center gap-1 hover:text-[#FFAA00] transition"
            >
              Billing <IoChevronDown className={`transition-transform duration-300 ${openMenu === "payment" ? "rotate-180" : ""}`} />
            </button>

            {openMenu === "payment" && (
              <div 
                onMouseLeave={() => setOpenMenu(null)}
                className="absolute top-full left-0 bg-white shadow-2xl rounded-2xl py-4 w-52 border border-gray-100 mt-2 z-[9999]"
              >
                <button onClick={() => go("/insurances")} className="block w-full px-6 py-2.5 text-left hover:bg-gray-50 hover:text-[#FFAA00] transition">Insurances</button>
                <button onClick={() => go("/selfpay")} className="block w-full px-6 py-2.5 text-left hover:bg-gray-50 hover:text-[#FFAA00] transition">Self-Pay</button>
              </div>
            )}
          </div>

          <button onClick={() => go("/appointments")} className="hover:text-[#FFAA00] transition">
            Sessions
          </button>

          {/* RESOURCES */}
          <div className="relative group">
            <button
              onMouseEnter={() => setOpenMenu("resources")}
              onClick={() => toggleMenu("resources")}
              className="flex items-center gap-1 hover:text-[#FFAA00] transition"
            >
              Library <IoChevronDown className={`transition-transform duration-300 ${openMenu === "resources" ? "rotate-180" : ""}`} />
            </button>

            {openMenu === "resources" && (
              <div 
                onMouseLeave={() => setOpenMenu(null)}
                className="absolute top-full left-0 bg-white shadow-2xl rounded-2xl py-4 w-52 border border-gray-100 mt-2 z-[9999]"
              >
                <button onClick={() => go("/blog")} className="block w-full px-6 py-2.5 text-left hover:bg-gray-50 hover:text-[#FFAA00] transition">Blog</button>
                <button onClick={() => go("/forms")} className="block w-full px-6 py-2.5 text-left hover:bg-gray-50 hover:text-[#FFAA00] transition">Patient Forms</button>
              </div>
            )}
          </div>

          {/* CTA PRIMARY BUTTON */}
          <button 
            onClick={() => go("/contact")} 
            className="bg-[#101112] text-white px-6 py-2.5 rounded-xl hover:bg-[#FFAA00] transition-all shadow-md"
          >
            Contact
          </button>
        </nav>

        {/* MOBILE BURGER */}
        <button
          className="lg:hidden text-3xl text-[#101112]"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <IoClose /> : <IoMenu />}
        </button>
      </div>

      {/* MOBILE MENU - High Velocity interaction */}
      {mobileOpen && (
        <div className="lg:hidden bg-white shadow-xl px-6 py-6 space-y-2 text-[#101112] font-black uppercase text-sm z-[9999] border-t border-gray-50">
          <button onClick={() => go("/")} className="block w-full text-left py-3 border-b border-gray-50">Home</button>
          
          <div className="py-2">
            <button onClick={() => toggleMenu("about-m")} className="flex justify-between w-full py-1 text-[#FFAA00]">
              About <IoChevronDown />
            </button>
            {openMenu === "about-m" && (
              <div className="pl-4 py-2 space-y-3 text-xs">
                <button onClick={() => go("/services")} className="block">Services</button>
                <button onClick={() => go("/team")} className="block">Our Team</button>
              </div>
            )}
          </div>

          <button onClick={() => go("/appointments")} className="block w-full text-left py-3 border-b border-gray-50">Appointments</button>
          <button onClick={() => go("/insurances")} className="block w-full text-left py-3 border-b border-gray-50">Payment</button>
          <button onClick={() => go("/contact")} className="block w-full text-left py-3 text-[#3DBBBB]">Contact</button>
        </div>
      )}
    </header>
  );
}