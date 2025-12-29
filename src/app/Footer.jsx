"use client";

import Image from "next/image";
import Link from "next/link";
import { 
  FaFacebookF, 
  FaInstagram, 
  FaLinkedinIn, 
  FaYoutube, 
  FaTiktok 
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6"; // Using the modern X icon

export default function Footer() {
  const psychologyTodayUrl = "https://www.psychologytoday.com/us/psychiatrists/growthfairness-psychiatry-pllc-raymond-obiajulu-houston-tx/1172295";
  
  // Base social URL
  const socialHandle = "growthfairness";

  const socialLinks = [
    { name: "Facebook", icon: <FaFacebookF />, url: `https://facebook.com/${socialHandle}`, color: "bg-[#1877F2]" },
    { name: "Instagram", icon: <FaInstagram />, url: `https://instagram.com/${socialHandle}`, color: "bg-[#E4405F]" },
    { name: "X", icon: <FaXTwitter />, url: `https://x.com/${socialHandle}`, color: "bg-[#000000]" },
    { name: "LinkedIn", icon: <FaLinkedinIn />, url: `https://linkedin.com/company/${socialHandle}`, color: "bg-[#0A66C2]" },
    { name: "YouTube", icon: <FaYoutube />, url: `https://youtube.com/@${socialHandle}`, color: "bg-[#FF0000]" },
    { name: "TikTok", icon: <FaTiktok />, url: `https://tiktok.com/@${socialHandle}`, color: "bg-[#000000]" },
  ];

  return (
    <footer className="w-full bg-[#F4F9FA] text-[#1A1A1A] py-16 mt-20 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-16 grid grid-cols-1 md:grid-cols-4 gap-12">
        
        {/* COLUMN 1 — BRANDING & SOCIALS */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <Image
            src="/logoweb.png"
            width={280}
            height={60}
            alt="GrowthFairness Logo"
            className="mb-6"
          />

          <p className="text-gray-600 mb-3">Secured & Verified by:</p>

          <div className="flex items-center gap-4 mb-8">
            <Link
              href={psychologyTodayUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition-opacity"
            >
              <Image src="/logo1.png" width={120} height={60} alt="Security Logo 1" />
            </Link>
            <Image src="/logo3.png" width={120} height={60} alt="Security Logo 2" />
          </div>

          <h3 className="text-lg font-semibold mb-4">Follow Us on Social Media</h3>

          <div className="flex flex-wrap justify-center md:justify-start gap-3 text-xl">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-2.5 rounded-full text-white ${social.color} hover:scale-110 transition-transform`}
                aria-label={social.name}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        {/* COLUMN 2 — CONTACT INFO */}
        <div className="text-center md:text-left">
          <h3 className="text-xl font-semibold mb-4 text-[#FFAA00]">
            GrowthFairness Psychiatry, PLLC.
          </h3>

          <p className="mb-1 text-gray-700 font-medium">Call / Text:</p>
          <a href="tel:8324496276" className="block mb-4 hover:text-[#FFAA00] transition-colors">
            832-449-6276
          </a>

          <p className="mb-1 text-gray-700 font-medium">Fax:</p>
          <a href="fax:7135541811" className="block mb-4 hover:text-[#FFAA00] transition-colors">
            713-554-1811
          </a>

          <p className="mb-1 text-gray-700 font-medium">Email:</p>
          <a href="mailto:info@growthfairness.com" className="block mb-4 hover:text-[#FFAA00] transition-colors">
            info@growthfairness.com
          </a>

          <p className="mb-1 text-gray-700 font-medium">Business Address:</p>
          <a
            href="https://maps.google.com/?q=12337+Jones+Road+Houston+Texas+77070"
            target="_blank"
            rel="noopener noreferrer"
            className="block leading-relaxed hover:text-[#FFAA00] transition-colors"
          >
            12337 Jones Road,<br />
            Houston, Texas 77070
          </a>
        </div>

        {/* COLUMNS 3 & 4 — LINKS */}
        <div className="flex flex-row md:contents gap-2 sm:gap-8 px-2 md:px-0">
          <div className="flex-1 text-left">
            <h3 className="text-lg md:text-xl font-semibold mb-4 text-[#FFAA00]">Quick Links</h3>
            <ul className="space-y-3 text-gray-700 text-sm md:text-base">
              <li><Link href="/" className="hover:text-[#FFAA00]">Home</Link></li>
              <li><Link href="/team" className="hover:text-[#FFAA00]">Team</Link></li>
              <li><Link href="/services" className="hover:text-[#FFAA00]">Services</Link></li>
              <li><Link href="/contact" className="hover:text-[#FFAA00]">Contact</Link></li>
              <li><Link href="/appointments" className="hover:text-[#FFAA00]">Book Appointment</Link></li>
              <li><Link href="/forms" className="hover:text-[#FFAA00]">Patient Forms</Link></li>
            </ul>
          </div>

          <div className="flex-1 text-left">
            <h3 className="text-lg md:text-xl font-semibold mb-4 text-[#FFAA00]">Our Services</h3>
            <ul className="space-y-3 text-gray-700 text-sm md:text-base">
              <li><Link href="/medication" className="hover:text-[#FFAA00]">Medication Management</Link></li>
              <li><Link href="/evaluation" className="hover:text-[#FFAA00]">Psychiatric Evaluation</Link></li>
              <li><Link href="/therapy" className="hover:text-[#FFAA00]">Psychotherapy</Link></li>
              <li><Link href="/telepsychiatry" className="hover:text-[#FFAA00]">Telepsychiatry</Link></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="text-center text-gray-600 text-sm mt-12 border-t border-gray-200 pt-8">
        © {new Date().getFullYear()} GrowthFairness Psychiatry, PLLC. All Rights Reserved.
      </div>
    </footer>
  );
}