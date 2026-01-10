"use client";

import React from "react";
import { Comfortaa } from "next/font/google";
import {
  FileText,
  Sparkles,
  CheckCircle2,
  MessageCircle,
  ShieldCheck,
  ChevronRight,
} from "lucide-react";

const comfortaa = Comfortaa({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function KetamineStaffGuide() {
  const handlePrint = () => window.print();

  return (
    <div
      className={`${comfortaa.className} min-h-screen bg-gradient-to-b from-slate-50 via-slate-100 to-slate-200 py-10 print:bg-white print:py-0`}
    >
      {/* TOP BAR (SCREEN ONLY) */}
      <div className="max-w-[980px] mx-auto px-4 mb-6 print:hidden">
        <div className="flex items-center justify-between rounded-2xl border border-white/60 bg-white/70 backdrop-blur-xl shadow-[0_20px_60px_-35px_rgba(0,0,0,0.35)] px-5 py-4">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-[#81c4e1] to-[#4aa9d8] grid place-items-center shadow-sm">
              <Sparkles size={18} className="text-white" />
            </div>
            <div className="leading-tight">
              <p className="text-[12px] uppercase tracking-[0.25em] text-slate-400 font-bold">
                Staff Handout
              </p>
              <p className="text-sm font-bold text-slate-900">
                Ketamine for Chronic Pain — Simple Guide
              </p>
            </div>
          </div>

          <button
            onClick={handlePrint}
            className="group relative inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#81c4e1] to-[#4aa9d8] px-6 py-3 text-white font-bold shadow-lg shadow-[#81c4e1]/30 hover:opacity-95 active:scale-[0.99] transition"
          >
            <FileText size={18} />
            Download / Print
            <span className="absolute -inset-[2px] rounded-full opacity-0 group-hover:opacity-100 transition bg-white/10" />
          </button>
        </div>
      </div>

      {/* PAGE */}
      <article className="mx-auto w-[980px] max-w-[980px] print:w-full">
        <div className="relative overflow-hidden rounded-[28px] bg-white shadow-[0_35px_120px_-60px_rgba(0,0,0,0.45)] ring-1 ring-black/5 print:shadow-none print:rounded-none">
          {/* Accent bar */}
          <div className="h-2 w-full bg-gradient-to-r from-[#81c4e1] via-[#4aa9d8] to-[#81c4e1]" />

          {/* CONTENT WRAP */}
          <div className="p-10 print:p-0">
            {/* HEADER (SINGLE HEADER ONLY — PRINT SAFE) */}
            <header className="pb-8 border-b border-slate-200">
              <div className="flex items-start justify-between gap-6">
                <div className="min-w-0">
                  {/* ✅ Your logo */}
                  <img
                    src="/logo73.png"
                    alt="Urgent Care Plus & Wellness"
                    className="h-14 object-contain mb-4"
                  />

                  <p className="text-[12px] uppercase tracking-[0.35em] text-slate-400 font-bold">
                    Urgent Care Plus &amp; Wellness
                  </p>

                  <h1 className="mt-2 text-3xl font-extrabold tracking-tight text-slate-900">
                    Ketamine for Chronic Pain
                  </h1>

                  <p className="mt-1 text-lg font-bold text-[#4aa9d8]">
                    A Simple Guide for Staff
                  </p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    <span className="inline-flex items-center gap-2 rounded-full bg-slate-50 border border-slate-200 px-3 py-1 text-[12px] font-bold text-slate-700">
                      <ShieldCheck size={14} className="text-[#4aa9d8]" />
                      Plain-language staff handout
                    </span>
                    <span className="inline-flex items-center gap-2 rounded-full bg-slate-50 border border-slate-200 px-3 py-1 text-[12px] font-bold text-slate-700">
                      <MessageCircle size={14} className="text-[#4aa9d8]" />
                      Patient-friendly scripts included
                    </span>
                  </div>
                </div>

                <div className="hidden md:block h-24 w-24 rounded-3xl bg-gradient-to-br from-[#81c4e1]/20 to-[#4aa9d8]/10 border border-slate-200" />
              </div>
            </header>

            {/* QUICK NAV / CONTENTS */}
            <section className="mt-8 grid grid-cols-12 gap-8 avoid-break">
              <div className="col-span-12">
                <div className="rounded-2xl border border-slate-200 bg-white p-6">
                  <p className="text-[12px] uppercase tracking-[0.35em] text-slate-400 font-bold">
                    Contents
                  </p>

                  <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-2 text-[13px]">
                    {[
                      "1. Why We Use Ketamine for Chronic Pain",
                      "2. What Is Ketamine? (In Simple Terms)",
                      "3. Understanding Chronic Pain (Easy Explanation)",
                      "4. The Key Problem: Overactive Pain Signals",
                      "5. How Ketamine Works (Plain Language)",
                      "6. Why Ketamine Helps When Other Treatments Fail",
                      "7. What Conditions Respond Well",
                      "8. Why Pain Relief Lasts After the Infusion",
                      "9. Common Side Effects (Reassurance for Patients)",
                      "10. How to Explain Ketamine to a Patient (Scripts)",
                      "11. Setting Realistic Expectations",
                      "12. Why Our Clinic Offers Ketamine",
                      "13. Key Takeaway for Staff",
                    ].map((item) => (
                      <div
                        key={item}
                        className="flex items-center justify-between rounded-xl border border-slate-200 bg-slate-50 px-4 py-2"
                      >
                        <span className="font-bold text-slate-800">{item}</span>
                        <ChevronRight size={16} className="text-slate-400" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* MAIN CONTENT */}
            <main className="mt-10 space-y-8 text-[13px] leading-relaxed text-slate-800">
              <SectionCard
                title="1. Why We Use Ketamine for Chronic Pain"
                icon={<CheckCircle2 size={18} className="text-white" />}
              >
                <p>
                  Many people with chronic pain are not hurting because of ongoing
                  injury, but because their nervous system has become overactive.
                </p>

                <p className="mt-4 font-extrabold text-slate-900">
                  Think of it like this:
                </p>

                <div className="mt-3 rounded-2xl border border-slate-200 bg-gradient-to-b from-slate-50 to-white p-6">
                  <p className="font-extrabold text-slate-900">
                    The pain alarm system is stuck in the “ON” position.
                  </p>
                  <p className="mt-2">
                    Ketamine helps reset that pain system.
                  </p>
                </div>
              </SectionCard>

              <SectionCard
                title="2. What Is Ketamine? (In Simple Terms)"
                icon={<CheckCircle2 size={18} className="text-white" />}
              >
                <p>
                  Ketamine is a medication that has been used safely in hospitals
                  for over <strong>50 years</strong>.
                </p>

                <p className="mt-4 font-extrabold text-slate-900">
                  At low doses, it is:
                </p>

                <ul className="mt-2 grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {[
                    "NOT anesthesia",
                    "NOT a narcotic",
                    "NOT a sedative that stops breathing",
                  ].map((x) => (
                    <li
                      key={x}
                      className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-2 font-bold text-slate-800"
                    >
                      {x}
                    </li>
                  ))}
                </ul>

                <p className="mt-4">
                  Instead, it works on the brain and spinal cord to calm pain
                  signals.
                </p>
              </SectionCard>

              <SectionCard
                title="3. Understanding Chronic Pain (Easy Explanation)"
                icon={<CheckCircle2 size={18} className="text-white" />}
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="rounded-2xl border border-slate-200 bg-white p-6">
                    <p className="text-[11px] uppercase tracking-[0.35em] text-slate-400 font-bold">
                      Acute Pain (Normal Pain)
                    </p>
                    <ul className="mt-3 list-disc ml-5 space-y-1 text-[12px]">
                      <li>Happens after injury or surgery</li>
                      <li>Goes away as the body heals</li>
                    </ul>
                  </div>

                  <div className="rounded-2xl border border-slate-200 bg-gradient-to-b from-slate-50 to-white p-6">
                    <p className="text-[11px] uppercase tracking-[0.35em] text-slate-400 font-bold">
                      Chronic Pain
                    </p>
                    <ul className="mt-3 list-disc ml-5 space-y-1 text-[12px]">
                      <li>Lasts months or years</li>
                      <li>
                        Pain signals keep firing even when tissues are healed
                      </li>
                      <li>Brain and spinal cord become over-sensitive</li>
                    </ul>

                    <div className="mt-4 rounded-xl border border-[#81c4e1]/40 bg-[#81c4e1]/10 px-4 py-3">
                      <p className="font-extrabold text-slate-900">
                        This is called central sensitization.
                      </p>
                    </div>
                  </div>
                </div>
              </SectionCard>

              <SectionCard
                title="4. The Key Problem: Overactive Pain Signals"
                icon={<CheckCircle2 size={18} className="text-white" />}
              >
                <p>
                  Inside the nervous system are pain “switches” called{" "}
                  <strong>NMDA receptors</strong>.
                </p>

                <p className="mt-4 font-extrabold text-slate-900">
                  In chronic pain:
                </p>

                <ul className="mt-2 grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {[
                    "These switches stay turned ON",
                    "Pain signals get louder over time",
                    "Regular pain meds often stop working",
                  ].map((x) => (
                    <li
                      key={x}
                      className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-2 font-bold text-slate-800"
                    >
                      {x}
                    </li>
                  ))}
                </ul>
              </SectionCard>

              <SectionCard
                title="5. How Ketamine Works (Plain Language)"
                icon={<CheckCircle2 size={18} className="text-white" />}
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {[
                    "Turns down overactive pain switches",
                    "Interrupts abnormal pain signaling",
                    "Helps the brain “relearn” normal pain response",
                  ].map((x) => (
                    <div
                      key={x}
                      className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 font-bold text-slate-800"
                    >
                      ✔ {x}
                    </div>
                  ))}
                </div>

                <div className="mt-4 rounded-2xl border border-slate-200 bg-gradient-to-b from-slate-50 to-white p-6">
                  <p className="font-extrabold text-slate-900">
                    Think of ketamine as:
                  </p>
                  <p className="mt-2 italic text-slate-700">
                    “Rebooting a frozen computer instead of just clicking harder.”
                  </p>
                </div>
              </SectionCard>

              <SectionCard
                title="6. Why Ketamine Helps When Other Treatments Fail"
                icon={<CheckCircle2 size={18} className="text-white" />}
              >
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {[
                    "Works differently than opioids",
                    "Can help when pain meds no longer work",
                    "Reduces nerve-related pain",
                    "Can improve pain for weeks or months, not just hours",
                  ].map((x) => (
                    <li
                      key={x}
                      className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 font-bold text-slate-800"
                    >
                      {x}
                    </li>
                  ))}
                </ul>
              </SectionCard>

              <SectionCard
                title="7. What Conditions Respond Well"
                icon={<CheckCircle2 size={18} className="text-white" />}
              >
                <p>
                  Ketamine works best for pain involving the nervous system, such as:
                </p>
                <ul className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-2 list-disc ml-5">
                  <li>Nerve pain</li>
                  <li>CRPS</li>
                  <li>Fibromyalgia</li>
                  <li>Chronic migraines</li>
                  <li>Post-surgical pain that never resolved</li>
                  <li>Centralized or unexplained chronic pain</li>
                </ul>
              </SectionCard>

              <SectionCard
                title="8. Why Pain Relief Lasts After the Infusion"
                icon={<CheckCircle2 size={18} className="text-white" />}
              >
                <p className="font-extrabold text-slate-900">
                  Patients often ask:
                </p>
                <p className="mt-2 italic text-slate-700">
                  “Why does it last after the IV is done?”
                </p>

                <p className="mt-4 font-extrabold text-slate-900">Because ketamine:</p>
                <ul className="mt-2 grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {[
                    "Calms overactive nerve pathways",
                    "Reduces pain memory in the brain",
                    "Allows the nervous system to reset",
                  ].map((x) => (
                    <li
                      key={x}
                      className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 font-bold text-slate-800"
                    >
                      {x}
                    </li>
                  ))}
                </ul>

                <div className="mt-4 rounded-xl border border-slate-200 bg-white px-5 py-4">
                  <p className="font-extrabold text-slate-900">
                    It’s not just covering pain, it’s changing how pain is processed.
                  </p>
                </div>
              </SectionCard>

              <SectionCard
                title="9. Common Side Effects (Reassurance for Patients)"
                icon={<CheckCircle2 size={18} className="text-white" />}
              >
                <p>
                  At low doses, side effects are usually mild and temporary:
                </p>
                <ul className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-2 list-disc ml-5">
                  <li>Feeling floaty or detached</li>
                  <li>Lightheadedness</li>
                  <li>Nausea</li>
                  <li>Mild anxiety</li>
                </ul>

                <div className="mt-5 rounded-2xl border border-[#81c4e1]/40 bg-[#81c4e1]/10 p-6">
                  <p className="font-extrabold text-slate-900 mb-2">Important facts:</p>
                  <ul className="space-y-1 text-[12px] text-slate-800">
                    <li>✔ Breathing stays normal</li>
                    <li>✔ Patients remain responsive</li>
                    <li>✔ Effects wear off quickly</li>
                  </ul>

                  <p className="mt-4 font-extrabold text-slate-900">
                    Staff role:
                  </p>
                  <p className="mt-1">
                    Reassure, calm, and normalize the experience.
                  </p>
                </div>
              </SectionCard>

              <SectionCard
                title="10. How to Explain Ketamine to a Patient (Scripts)"
                icon={<CheckCircle2 size={18} className="text-white" />}
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <ScriptBox
                    title="Short Version"
                    text="“Ketamine works by calming overactive pain signals in the brain and spinal cord. It helps reset the nervous system rather than just masking pain.”"
                  />
                  <ScriptBox
                    title="Analogy Patients Understand"
                    text="“Your pain system is stuck in high gear. Ketamine helps shift it back toward normal.”"
                  />
                  <ScriptBox
                    title='When Patients Ask “Is It a Drug?”'
                    text="“It’s a medication used safely in hospitals for decades. At low doses, it’s used specifically to treat chronic pain and nerve-related pain.”"
                  />
                  <ScriptBox
                    title='When Patients Ask “Will I Be Asleep?”'
                    text="“No. You’ll be awake and breathing on your own. Some people feel relaxed or disconnected, but we monitor you closely the entire time.”"
                  />
                </div>
              </SectionCard>

              <SectionCard
                title="11. Setting Realistic Expectations"
                icon={<CheckCircle2 size={18} className="text-white" />}
              >
                <p className="font-extrabold text-slate-900">
                  Staff should reinforce:
                </p>
                <ul className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {[
                    "Ketamine is not an instant cure",
                    "Relief may improve gradually",
                    "Multiple sessions are often needed",
                    "Goal is better function and quality of life",
                  ].map((x) => (
                    <li
                      key={x}
                      className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 font-bold text-slate-800"
                    >
                      {x}
                    </li>
                  ))}
                </ul>
              </SectionCard>

              <SectionCard
                title="12. Why Our Clinic Offers Ketamine"
                icon={<CheckCircle2 size={18} className="text-white" />}
              >
                <p className="font-extrabold text-slate-900">
                  We use ketamine because it:
                </p>
                <ul className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {[
                    "Treats the root cause of chronic pain",
                    "Reduces reliance on opioids",
                    "Helps patients who feel “out of options”",
                    "Is supported by growing medical evidence",
                  ].map((x) => (
                    <li
                      key={x}
                      className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 font-bold text-slate-800"
                    >
                      {x}
                    </li>
                  ))}
                </ul>
              </SectionCard>

              {/* 13 — KEY TAKEAWAY */}
              <section className="avoid-break">
                <div className="rounded-[22px] overflow-hidden border border-slate-900 bg-gradient-to-b from-slate-950 to-slate-900 text-white">
                  <div className="px-7 py-6 flex items-center gap-3 border-b border-white/10">
                    <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-[#81c4e1] to-[#4aa9d8] grid place-items-center">
                      <ShieldCheck size={18} className="text-white" />
                    </div>
                    <div>
                      <p className="text-[12px] uppercase tracking-[0.35em] text-white/60 font-bold">
                        Key Takeaway
                      </p>
                      <h3 className="text-lg font-extrabold tracking-tight">
                        13. Key Takeaway for Staff
                      </h3>
                    </div>
                  </div>

                  <div className="px-7 py-6 space-y-3 text-[12px] text-white/85">
                    <p className="text-white font-extrabold">
                      Ketamine is not a painkiller.
                      <br />
                      It is a nervous system reset therapy for chronic pain.
                    </p>

                    <div className="rounded-xl border border-white/10 bg-white/5 px-5 py-4">
                      <p className="font-extrabold text-white mb-2">Your role:</p>
                      <ul className="space-y-1">
                        <li>✔ Educate</li>
                        <li>✔ Reassure</li>
                        <li>✔ Normalize the experience</li>
                        <li>✔ Set expectations</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>
            </main>

            {/* FOOTER */}
            <footer className="pt-12 mt-10 border-t border-slate-200">
              <div className="flex items-end justify-between gap-6">
                <div className="text-left">
                  <p className="text-[10px] font-extrabold uppercase tracking-[0.35em] text-slate-400">
                    Staff Handout
                  </p>
                  <p className="text-[11px] font-bold text-slate-500">
                    Ketamine for Chronic Pain — A Simple Guide for Staff
                  </p>
                </div>

                <div className="text-right">
                  <p className="text-[10px] font-extrabold uppercase tracking-[0.35em] text-slate-300">
                    Urgent Care Plus &amp; Wellness
                  </p>
                </div>
              </div>
            </footer>
          </div>
        </div>
      </article>

      {/* PRINT + GLOBAL */}
      <style jsx global>{`
        @media print {
          @page {
            size: A4;
            margin: 18mm 14mm 18mm 14mm;
          }

          body {
            background: white !important;
            margin: 0;
            padding: 0;
          }

          .print\\:hidden {
            display: none !important;
          }

          article,
          .shadow-\\[0_35px_120px_-60px_rgba\\(0\\,0\\,0\\,0\\.45\\)\\] {
            box-shadow: none !important;
          }

          * {
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
          }

          .avoid-break {
            page-break-inside: avoid;
            break-inside: avoid;
          }
        }
      `}</style>
    </div>
  );
}

/* ---------- Premium UI Helpers (same file) ---------- */

function SectionCard({ title, icon, children }) {
  return (
    <section className="avoid-break">
      <div className="rounded-[22px] border border-slate-200 bg-white overflow-hidden">
        <div className="px-6 py-5 flex items-center gap-3 border-b border-slate-200/70">
          <div className="h-11 w-11 rounded-2xl bg-gradient-to-br from-[#81c4e1] to-[#4aa9d8] grid place-items-center shadow-sm">
            {icon}
          </div>
          <div className="min-w-0">
            <h3 className="text-base font-extrabold tracking-tight text-slate-900">
              {title}
            </h3>
            <p className="text-[12px] text-slate-500 font-bold">
              Staff-friendly explanation and scripts
            </p>
          </div>
        </div>

        <div className="p-6 space-y-3">{children}</div>
      </div>
    </section>
  );
}

function ScriptBox({ title, text }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-gradient-to-b from-slate-50 to-white p-6">
      <p className="text-[11px] uppercase tracking-[0.35em] text-slate-400 font-bold">
        {title}
      </p>
      <p className="mt-3 font-extrabold text-slate-900 leading-snug">{text}</p>
    </div>
  );
}
