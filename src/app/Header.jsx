"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { IoChevronDown, IoMenu, IoClose } from "react-icons/io5";

export default function Header() {
  const router = useRouter();
  const [openMenu, setOpenMenu] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  const toggleMenu = (menuName) => {
    setOpenMenu(openMenu === menuName ? null : menuName);
  };

  const go = (route) => {
    router.push(route);
    setOpenMenu(null);
    setMobileOpen(false);
  };

  return (
    <header className="w-full bg-white shadow-sm  z-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-16 py-4 flex items-center justify-between">

        {/* Logo */}
        <button onClick={() => go("/")} className="flex items-center gap-2">
          <Image src="/logofile.png" width={280} height={50} alt="Logo" />
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8 text-gray-800 font-medium">

          <button onClick={() => go("/")} className="hover:text-[#FFAA00] transition">
            Home
          </button>

          {/* ABOUT */}
          <div className="relative">
            <button
              onClick={() => toggleMenu("about")}
              className="flex items-center gap-1 hover:text-[#FFAA00] transition"
            >
              About <IoChevronDown />
            </button>

            {openMenu === "about" && (
              <div className="absolute top-8 bg-white shadow-lg rounded-xl py-3 w-44">
                <button onClick={() => go("/services")} className="block px-4 py-2 hover:bg-gray-100">Services</button>
                <button onClick={() => go("/team")} className="block px-4 py-2 hover:bg-gray-100">Our Team</button>
                <button onClick={() => go("/faq")} className="block px-4 py-2 hover:bg-gray-100">FAQ</button>
              </div>
            )}
          </div>

          {/* PAYMENT METHODS */}
          <div className="relative">
            <button
              onClick={() => toggleMenu("payment")}
              className="flex items-center gap-1 hover:text-[#FFAA00] transition"
            >
              Payment Methods <IoChevronDown />
            </button>

            {openMenu === "payment" && (
              <div className="absolute top-8 bg-white shadow-lg rounded-xl py-3 w-44">
                <button onClick={() => go("/insurances")} className="block px-4 py-2 hover:bg-gray-100">Insurances</button>
                <button onClick={() => go("/selfpay")} className="block px-4 py-2 hover:bg-gray-100">Self-Pay</button>
              </div>
            )}
          </div>

          <button onClick={() => go("/appointments")} className="hover:text-[#FFAA00] transition">Appointments</button>

          {/* RESOURCES */}
          <div className="relative">
            <button
              onClick={() => toggleMenu("resources")}
              className="flex items-center gap-1 hover:text-[#FFAA00] transition"
            >
              Resources <IoChevronDown />
            </button>

            {openMenu === "resources" && (
              <div className="absolute top-8 bg-white shadow-lg rounded-xl py-3 w-44">
                <button onClick={() => go("/blog")} className="block px-4 py-2 hover:bg-gray-100">Blog</button>
                <button onClick={() => go("/forms")} className="block px-4 py-2 hover:bg-gray-100">Forms</button>
              </div>
            )}
          </div>

          <button onClick={() => go("/contact")} className="hover:text-[#FFAA00] transition">Contact</button>
        </nav>

        {/* MOBILE BURGER */}
        <button
          className="lg:hidden text-3xl text-gray-700"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <IoClose /> : <IoMenu />}
        </button>
      </div>

      {/* MOBILE MENU */}
      {mobileOpen && (
        <div className="lg:hidden bg-white shadow-lg px-6 py-4 space-y-4 text-gray-800 font-medium">

          <button onClick={() => go("/")} className="block w-full text-left py-2">Home</button>

          {/* ABOUT */}
          <div>
            <button
              onClick={() => toggleMenu("about")}
              className="flex justify-between w-full py-2"
            >
              About <IoChevronDown />
            </button>

            {openMenu === "about" && (
              <div className="pl-4 space-y-2">
                <button onClick={() => go("/services")} className="block w-full text-left py-1">Services</button>
                <button onClick={() => go("/team")} className="block w-full text-left py-1">Our Team</button>
                <button onClick={() => go("/faq")} className="block w-full text-left py-1">FAQ</button>
              </div>
            )}
          </div>

          {/* PAYMENT METHODS */}
          <div>
            <button
              onClick={() => toggleMenu("payment")}
              className="flex justify-between w-full py-2"
            >
              Payment Methods <IoChevronDown />
            </button>

            {openMenu === "payment" && (
              <div className="pl-4 space-y-2">
                <button onClick={() => go("/insurances")} className="block w-full text-left py-1">Insurances</button>
                <button onClick={() => go("/selfpay")} className="block w-full text-left py-1">Self-Pay</button>
              </div>
            )}
          </div>

          <button onClick={() => go("/appointments")} className="block w-full text-left py-2">
            Appointments
          </button>

          {/* RESOURCES */}
          <div>
            <button
              onClick={() => toggleMenu("resources")}
              className="flex justify-between w-full py-2"
            >
              Resources <IoChevronDown />
            </button>

            {openMenu === "resources" && (
              <div className="pl-4 space-y-2">
                <button onClick={() => go("/blog")} className="block w-full text-left py-1">Blog</button>
                <button onClick={() => go("/forms")} className="block w-full text-left py-1">Forms</button>
              </div>
            )}
          </div>

          <button onClick={() => go("/contact")} className="block w-full text-left py-2">
            Contact
          </button>
        </div>
      )}
    </header>
  );
}
