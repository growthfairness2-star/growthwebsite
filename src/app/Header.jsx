"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { IoChevronDown, IoMenu, IoClose } from "react-icons/io5";

export default function Header() {
  const router = useRouter();
  const [openMenu, setOpenMenu] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  // Elite UX: anticipate desktop intent with hover, use clicks for mobile
  const toggleMenu = (menuName) => {
    setOpenMenu(openMenu === menuName ? null : menuName);
  };

  const go = (route) => {
    router.push(route);
    setOpenMenu(null);
    setMobileOpen(false);
  };

  return (
    <header className="w-full bg-white z-[9999] border-b border-gray-100 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-16 py-5 flex items-center justify-between">

        {/* LOGO */}
        <button onClick={() => go("/")} className="flex items-center transition hover:opacity-80">
          <Image src="/logofile.png" width={240} height={50} alt="Logo" priority />
        </button>

        {/* ================= DESKTOP NAV ================= */}
        <nav className="hidden lg:flex items-center gap-6 text-[#101112] font-black text-sm uppercase tracking-widest">
          <button onClick={() => go("/")} className="hover:text-[#FFAA00] transition">Home</button>

          {/* ABOUT */}
          <div className="relative group">
            <button onMouseEnter={() => setOpenMenu("about")} className="flex items-center gap-1 hover:text-[#FFAA00] transition">
              About <IoChevronDown className={`transition-transform duration-300 ${openMenu === "about" ? "rotate-180" : ""}`} />
            </button>
            {openMenu === "about" && (
              <div onMouseLeave={() => setOpenMenu(null)} className="absolute top-full left-0 bg-white shadow-2xl rounded-2xl py-4 w-56 border border-gray-100 mt-2 z-[9999]">
                <button onClick={() => go("/services")} className="block w-full px-6 py-2.5 text-left hover:bg-gray-50 hover:text-[#FFAA00] transition">Services</button>
                <button onClick={() => go("/team")} className="block w-full px-6 py-2.5 text-left hover:bg-gray-50 hover:text-[#FFAA00] transition">Our Team</button>
                <button onClick={() => go("/faq")} className="block w-full px-6 py-2.5 text-left hover:bg-gray-50 hover:text-[#FFAA00] transition">FAQ</button>
              </div>
            )}
          </div>

          {/* CONDITIONS */}
          <div className="relative group">
            <button onMouseEnter={() => setOpenMenu("conditions")} className="flex items-center gap-1 hover:text-[#FFAA00] transition">
              Conditions <IoChevronDown className={`transition-transform duration-300 ${openMenu === "conditions" ? "rotate-180" : ""}`} />
            </button>
            {openMenu === "conditions" && (
              <div onMouseLeave={() => setOpenMenu(null)} className="absolute top-full left-0 bg-white shadow-2xl rounded-2xl py-4 w-64 border border-gray-100 mt-2 z-[9999]">
                {["Anxiety", "Depression", "ADHD", "OCD", "Bipolar Disorder", "PTSD"].map((cond) => (
                  <button key={cond} onClick={() => go(`/${cond.toLowerCase().replace(" ", "")}`)} className="block w-full px-6 py-2.5 text-left hover:bg-gray-50 hover:text-[#FFAA00] transition">{cond}</button>
                ))}
              </div>
            )}
          </div>

          {/* BILLING */}
          <div className="relative group">
            <button onMouseEnter={() => setOpenMenu("payment")} className="flex items-center gap-1 hover:text-[#FFAA00] transition">
              Billing <IoChevronDown className={`transition-transform duration-300 ${openMenu === "payment" ? "rotate-180" : ""}`} />
            </button>
            {openMenu === "payment" && (
              <div onMouseLeave={() => setOpenMenu(null)} className="absolute top-full left-0 bg-white shadow-2xl rounded-2xl py-4 w-52 border border-gray-100 mt-2 z-[9999]">
                <button onClick={() => go("/insurances")} className="block w-full px-6 py-2.5 text-left hover:bg-gray-50 hover:text-[#FFAA00] transition">Insurances</button>
                <button onClick={() => go("/selfpay")} className="block w-full px-6 py-2.5 text-left hover:bg-gray-50 hover:text-[#FFAA00] transition">Self-Pay</button>
              </div>
            )}
          </div>

          <button onClick={() => go("/appointments")} className="hover:text-[#FFAA00] transition">Sessions</button>

          {/* RESOURCES */}
          <div className="relative group">
            <button onMouseEnter={() => setOpenMenu("resources")} className="flex items-center gap-1 hover:text-[#FFAA00] transition">
              Library <IoChevronDown className={`transition-transform duration-300 ${openMenu === "resources" ? "rotate-180" : ""}`} />
            </button>
            {openMenu === "resources" && (
              <div onMouseLeave={() => setOpenMenu(null)} className="absolute top-full left-0 bg-white shadow-2xl rounded-2xl py-4 w-52 border border-gray-100 mt-2 z-[9999]">
                <button onClick={() => go("/blog")} className="block w-full px-6 py-2.5 text-left hover:bg-gray-50 hover:text-[#FFAA00] transition">Blog</button>
                <button onClick={() => go("/forms")} className="block w-full px-6 py-2.5 text-left hover:bg-gray-50 hover:text-[#FFAA00] transition">Patient Forms</button>
              </div>
            )}
          </div>

          <button onClick={() => go("/contact")} className="bg-[#101112] text-white px-6 py-2.5 rounded-xl hover:bg-[#FFAA00] transition shadow-md">Contact</button>
        </nav>

        {/* MOBILE BURGER */}
        <button className="lg:hidden text-3xl text-[#101112]" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <IoClose /> : <IoMenu />}
        </button>
      </div>

      {/* ================= MOBILE NAV (FULL PARITY) ================= */}
      {mobileOpen && (
        <div className="lg:hidden bg-white shadow-2xl px-6 py-6 h-screen overflow-y-auto space-y-4 text-[#101112] font-black uppercase text-sm z-[9999] border-t border-gray-50">
          
          <button onClick={() => go("/")} className="block w-full text-left py-3 border-b border-gray-50">Home</button>
          
          {/* ABOUT ACCORDION */}
          <div>
            <button onClick={() => toggleMenu("about-m")} className={`flex justify-between w-full py-3 border-b border-gray-50 ${openMenu === "about-m" ? "text-[#FFAA00]" : ""}`}>
              About <IoChevronDown className={openMenu === "about-m" ? "rotate-180" : ""} />
            </button>
            {openMenu === "about-m" && (
              <div className="pl-6 py-3 space-y-4 text-xs tracking-wider border-b border-gray-50 bg-gray-50/50 rounded-lg">
                <button onClick={() => go("/services")} className="block w-full text-left">Services</button>
                <button onClick={() => go("/team")} className="block w-full text-left">Our Team</button>
                <button onClick={() => go("/faq")} className="block w-full text-left">FAQ</button>
              </div>
            )}
          </div>

          {/* CONDITIONS ACCORDION */}
          <div>
            <button onClick={() => toggleMenu("cond-m")} className={`flex justify-between w-full py-3 border-b border-gray-50 ${openMenu === "cond-m" ? "text-[#FFAA00]" : ""}`}>
              Conditions <IoChevronDown className={openMenu === "cond-m" ? "rotate-180" : ""} />
            </button>
            {openMenu === "cond-m" && (
              <div className="grid grid-cols-1 pl-6 py-3 gap-4 text-xs tracking-wider border-b border-gray-50 bg-gray-50/50 rounded-lg">
                {["Anxiety", "Depression", "ADHD", "OCD", "Bipolar Disorder", "PTSD"].map(c => (
                  <button key={c} onClick={() => go(`/${c.toLowerCase().replace(" ", "")}`)} className="block text-left">{c}</button>
                ))}
              </div>
            )}
          </div>

          {/* BILLING ACCORDION */}
          <div>
            <button onClick={() => toggleMenu("bill-m")} className={`flex justify-between w-full py-3 border-b border-gray-50 ${openMenu === "bill-m" ? "text-[#FFAA00]" : ""}`}>
              Billing <IoChevronDown className={openMenu === "bill-m" ? "rotate-180" : ""} />
            </button>
            {openMenu === "bill-m" && (
              <div className="pl-6 py-3 space-y-4 text-xs tracking-wider border-b border-gray-50 bg-gray-50/50 rounded-lg">
                <button onClick={() => go("/insurances")} className="block w-full text-left">Insurances</button>
                <button onClick={() => go("/selfpay")} className="block w-full text-left">Self-Pay</button>
              </div>
            )}
          </div>

          <button onClick={() => go("/appointments")} className="block w-full text-left py-3 border-b border-gray-50">Sessions</button>

          {/* LIBRARY ACCORDION */}
          <div>
            <button onClick={() => toggleMenu("lib-m")} className={`flex justify-between w-full py-3 border-b border-gray-50 ${openMenu === "lib-m" ? "text-[#FFAA00]" : ""}`}>
              Library <IoChevronDown className={openMenu === "lib-m" ? "rotate-180" : ""} />
            </button>
            {openMenu === "lib-m" && (
              <div className="pl-6 py-3 space-y-4 text-xs tracking-wider border-b border-gray-50 bg-gray-50/50 rounded-lg">
                <button onClick={() => go("/blog")} className="block w-full text-left">Health Blog</button>
                <button onClick={() => go("/forms")} className="block w-full text-left">Patient Forms</button>
              </div>
            )}
          </div>

          <button onClick={() => go("/contact")} className="block w-full text-left py-3 text-[#3DBBBB]">Finalize Connection</button>
        </div>
      )}
    </header>
  );
}