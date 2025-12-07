"use client";

import React, { useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { IoChevronDown, IoMenu, IoClose } from "react-icons/io5";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const router = useRouter();
  const [isPending, startTransition] = useTransition(); 
  const [openMenu, setOpenMenu] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  const toggleMenu = (menuName) => {
    setOpenMenu(openMenu === menuName ? null : menuName);
  };

  const go = (route) => {
    setOpenMenu(null);
    setMobileOpen(false);
    startTransition(() => {
      router.push(route);
    });
  };

  const conditionLinks = ["Anxiety", "Depression", "ADHD", "OCD", "Bipolar", "PTSD", "Schizophrenia"];

  return (
    <header className="w-full bg-white z-[9999] border-b border-gray-100 relative shadow-sm">
      {isPending && (
        <div className="absolute top-0 left-0 right-0 h-1 bg-[#FFAA00] animate-pulse z-[10000]" />
      )}

      <div className="max-w-7xl mx-auto px-6 lg:px-16 py-4 flex items-center justify-between">
        
        {/* LOGO */}
        <button onClick={() => go("/")} className="transition active:scale-95">
          <Image src="/logoweb.png" width={220} height={40} alt="Logo" priority />
        </button>

        {/* ================= DESKTOP NAV ================= */}
        <nav className="hidden lg:flex items-center gap-6 text-[#101112] font-black text-sm uppercase tracking-widest">
          <button onClick={() => go("/")} className="hover:text-[#FFAA00] transition">Home</button>

          <div className="relative group">
            <button onMouseEnter={() => setOpenMenu("about")} className="flex items-center gap-1 hover:text-[#FFAA00]">
              About <IoChevronDown />
            </button>
            {openMenu === "about" && (
              <div onMouseLeave={() => setOpenMenu(null)} className="absolute top-full left-0 bg-white shadow-2xl rounded-2xl py-4 w-52 border border-gray-100 mt-2">
                <button onClick={() => go("/team")} className="block w-full px-6 py-2.5 text-left hover:bg-gray-50 hover:text-[#FFAA00] transition">Our Team</button>
                <button onClick={() => go("/faq")} className="block w-full px-6 py-2.5 text-left hover:bg-gray-50 hover:text-[#FFAA00] transition">FAQ</button>
              </div>
            )}
          </div>

          <button onClick={() => go("/services")} className="hover:text-[#FFAA00] transition">Services</button>

          <div className="relative group">
            <button onMouseEnter={() => setOpenMenu("cond")} className="flex items-center gap-1 hover:text-[#FFAA00]">
              Conditions <IoChevronDown />
            </button>
            {openMenu === "cond" && (
              <div onMouseLeave={() => setOpenMenu(null)} className="absolute top-full left-0 bg-white shadow-2xl rounded-2xl py-4 w-60 border border-gray-100 mt-2">
                {conditionLinks.map(c => (
                  <button key={c} onClick={() => go(`/${c.toLowerCase()}`)} className="block w-full px-6 py-2.5 text-left hover:bg-gray-50 hover:text-[#FFAA00] transition">{c}</button>
                ))}
              </div>
            )}
          </div>

          <button onClick={() => go("/appointments")} className="hover:text-[#FFAA00] transition">Sessions</button>
          <button onClick={() => go("/contact")} className="bg-[#101112] text-white px-6 py-2.5 rounded-xl hover:bg-[#FFAA00] transition">Contact</button>
        </nav>

        {/* MOBILE BURGER */}
        <button className="lg:hidden text-3xl text-[#101112]" onClick={() => setMobileOpen(true)}>
          <IoMenu />
        </button>
      </div>

      {/* ================= MOBILE SLIDE-OVER DRAWER ================= */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              onClick={() => setMobileOpen(false)}
              className="fixed inset-0 bg-[#102A43]/40 backdrop-blur-md z-[9998] lg:hidden"
            />
            
            <motion.div 
              initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-[85%] max-w-[400px] bg-white z-[9999] shadow-2xl p-6 flex flex-col lg:hidden overflow-y-auto"
            >
              <div className="flex justify-between items-center mb-10 border-b pb-6">
                <span className="font-black text-[#101112] uppercase tracking-widest text-sm">Navigation</span>
                <button onClick={() => setMobileOpen(false)} className="text-3xl"><IoClose /></button>
              </div>

              <div className="space-y-6">
                <button onClick={() => go("/")} className="w-full text-left text-lg font-black text-[#101112]">Home</button>

                {/* Grid-Optimized Conditions - Text Visibility Fix */}
                <div>
                  <button onClick={() => toggleMenu("cond-m")} className="flex justify-between w-full font-black text-[#101112] text-lg uppercase tracking-tight">
                    Conditions <IoChevronDown className={openMenu === "cond-m" ? "rotate-180" : ""} />
                  </button>
                  {openMenu === "cond-m" && (
                    <div className="grid grid-cols-2 gap-3 mt-4">
                      {conditionLinks.map(c => (
                        <button 
                          key={c} 
                          onClick={() => go(`/${c.toLowerCase()}`)} 
                          className="p-4 bg-[#F0F4F8] text-[13px] font-black rounded-xl text-center border-2 border-[#E2E8F0] text-[#101112] uppercase tracking-wider active:bg-[#FFAA00] active:text-white transition-colors"
                        >
                          {c}
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                {/* About & Team Group - Text Visibility Fix */}
                <div>
                  <button onClick={() => toggleMenu("about-m")} className="flex justify-between w-full font-black text-[#101112] text-lg uppercase tracking-tight">
                    Practice <IoChevronDown className={openMenu === "about-m" ? "rotate-180" : ""} />
                  </button>
                  {openMenu === "about-m" && (
                    <div className="grid grid-cols-1 gap-2 mt-4">
                      <button onClick={() => go("/services")} className="p-4 bg-[#F0F4F8] text-[14px] font-black rounded-xl text-left border-2 border-[#E2E8F0] text-[#101112] uppercase tracking-widest">Clinical Services</button>
                      <button onClick={() => go("/team")} className="p-4 bg-[#F0F4F8] text-[14px] font-black rounded-xl text-left border-2 border-[#E2E8F0] text-[#101112] uppercase tracking-widest">Meet the Team</button>
                      <button onClick={() => go("/faq")} className="p-4 bg-[#F0F4F8] text-[14px] font-black rounded-xl text-left border-2 border-[#E2E8F0] text-[#101112] uppercase tracking-widest">Support FAQ</button>
                    </div>
                  )}
                </div>

                <button onClick={() => go("/appointments")} className="w-full text-left text-lg font-black text-[#FFAA00] uppercase tracking-tight">Sessions</button>
              </div>

              <div className="mt-auto pt-10">
                <button onClick={() => go("/contact")} className="w-full bg-[#101112] text-white py-5 rounded-2xl font-black text-lg shadow-xl uppercase tracking-widest">Contact Now</button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}