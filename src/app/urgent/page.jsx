"use client";

import React from "react";
import { Comfortaa } from "next/font/google";
import {
  FileText,
  ShieldCheck,
  Stethoscope,
  Activity,
  AlertCircle,
  Users,
  ClipboardList,
  HeartPulse,
  Timer,
  GraduationCap,
  PhoneCall,
  ChevronRight,
  Sparkles,
} from "lucide-react";

const comfortaa = Comfortaa({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function KetamineProtocol() {
  const handlePrint = () => window.print();

  return (
    <div
      className={`${comfortaa.className} min-h-screen bg-gradient-to-b from-slate-50 via-slate-100 to-slate-200 py-10 print:bg-white print:py-0`}
    >
      {/* TOP BAR */}
      <div className="max-w-[980px] mx-auto px-4 mb-6 print:hidden">
        <div className="flex items-center justify-between rounded-2xl border border-white/60 bg-white/70 backdrop-blur-xl shadow-[0_20px_60px_-35px_rgba(0,0,0,0.35)] px-5 py-4">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-[#81c4e1] to-[#4aa9d8] grid place-items-center shadow-sm">
              <Sparkles size={18} className="text-white" />
            </div>
            <div className="leading-tight">
              <p className="text-[12px] uppercase tracking-[0.25em] text-slate-400 font-bold">
                Clinical Protocol
              </p>
              <p className="text-sm font-bold text-slate-900">
                Intravenous Ketamine Infusion for Chronic Pain
              </p>
            </div>
          </div>

          <button
            onClick={handlePrint}
            className="group relative inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#81c4e1] to-[#4aa9d8] px-6 py-3 text-white font-bold shadow-lg shadow-[#81c4e1]/30 hover:opacity-95 active:scale-[0.99] transition"
          >
            <FileText size={18} />
            Download Clinical PDF
            <span className="absolute -inset-[2px] rounded-full opacity-0 group-hover:opacity-100 transition bg-white/10" />
          </button>
        </div>
      </div>

      {/* PAGE */}
      <article className="mx-auto w-[980px] max-w-[980px] print:w-full">
        <div className="relative overflow-hidden rounded-[28px] bg-white shadow-[0_35px_120px_-60px_rgba(0,0,0,0.45)] ring-1 ring-black/5 print:shadow-none print:rounded-none">
          {/* Top accent */}
          <div className="h-2 w-full bg-gradient-to-r from-[#81c4e1] via-[#4aa9d8] to-[#81c4e1]" />

          {/* CONTENT WRAP */}
          <div className="p-10 print:p-0">
            {/* HEADER */}
            <header className="grid grid-cols-12 gap-8 pb-8 border-b border-slate-200">
              <div className="col-span-12 md:col-span-7">
                <div className="flex items-start justify-between gap-6">
                  <div className="min-w-0">
                    <img
                      src="/logo73.png"
                      alt="Logo"
                      className="h-14 object-contain mb-4"
                    />

                    <p className="text-[12px] uppercase tracking-[0.35em] text-slate-400 font-bold">
                      Urgent Care Plus &amp; Wellness
                    </p>

                    <h1 className="mt-2 text-3xl font-extrabold tracking-tight text-slate-900">
                      Clinical Guideline &amp; Protocol
                    </h1>

                    <p className="mt-1 text-lg font-bold text-[#4aa9d8]">
                      Intravenous Ketamine Infusion for Chronic Pain
                    </p>

                    <div className="mt-4 flex flex-wrap gap-2">
                      <span className="inline-flex items-center gap-2 rounded-full bg-slate-50 border border-slate-200 px-3 py-1 text-[12px] font-bold text-slate-700">
                        <ShieldCheck size={14} className="text-[#4aa9d8]" />
                        Safety-first protocol
                      </span>
                      <span className="inline-flex items-center gap-2 rounded-full bg-slate-50 border border-slate-200 px-3 py-1 text-[12px] font-bold text-slate-700">
                        <Stethoscope size={14} className="text-[#4aa9d8]" />
                        Off-label chronic pain use
                      </span>
                      <span className="inline-flex items-center gap-2 rounded-full bg-slate-50 border border-slate-200 px-3 py-1 text-[12px] font-bold text-slate-700">
                        <ClipboardList size={14} className="text-[#4aa9d8]" />
                        Documentation ready
                      </span>
                    </div>
                  </div>

                  <div className="hidden md:block h-24 w-24 rounded-3xl bg-gradient-to-br from-[#81c4e1]/20 to-[#4aa9d8]/10 border border-slate-200" />
                </div>
              </div>

              <aside className="col-span-12 md:col-span-5">
                <div className="rounded-2xl border border-slate-200 bg-gradient-to-b from-slate-50 to-white p-6">
                  <p className="text-[12px] uppercase tracking-[0.35em] text-slate-400 font-bold">
                    Policy Details
                  </p>

                  <div className="mt-4 grid grid-cols-2 gap-3 text-[12px]">
                    <div className="rounded-xl border border-slate-200 bg-white p-3">
                      <p className="text-slate-400 font-bold uppercase tracking-widest">
                        Policy #
                      </p>
                      <p className="text-slate-900 font-extrabold mt-1">
                        UCPW-KET-CP-001
                      </p>
                    </div>
                    <div className="rounded-xl border border-slate-200 bg-white p-3">
                      <p className="text-slate-400 font-bold uppercase tracking-widest">
                        Effective
                      </p>
                      <p className="text-slate-900 font-extrabold mt-1">
                        ___________
                      </p>
                    </div>
                    <div className="rounded-xl border border-slate-200 bg-white p-3 col-span-2">
                      <p className="text-slate-400 font-bold uppercase tracking-widest">
                        Medical Director
                      </p>
                      <p className="text-slate-900 font-extrabold mt-1">
                        Dr. Lukuman Afuwape, MD
                      </p>
                    </div>
                    <div className="rounded-xl border border-slate-200 bg-white p-3 col-span-2">
                      <p className="text-slate-400 font-bold uppercase tracking-widest">
                        Review Cycle
                      </p>
                      <p className="text-slate-900 font-extrabold mt-1">
                        Annual or as regulations change
                      </p>
                    </div>
                  </div>
                </div>
              </aside>
            </header>

            {/* TOC + QUICK SPECS */}
            <section className="grid grid-cols-12 gap-8 mt-8">
              <div className="col-span-12 md:col-span-7">
                <div className="rounded-2xl border border-slate-200 bg-white p-6">
                  <p className="text-[12px] uppercase tracking-[0.35em] text-slate-400 font-bold">
                    Protocol Contents
                  </p>

                  <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-2 text-[13px]">
                    {[
                      "1. Purpose",
                      "2. Regulatory & Clinical Context",
                      "3. Definitions (Adapted)",
                      "4. Indications for Use",
                      "5. Exclusion & Denial Criteria",
                      "6. Required Pre-treatment Evaluation",
                      "7. Staff Roles & Responsibilities",
                      "8. Dosing & Administration",
                      "9. Monitoring Requirements",
                      "10. Reportable Conditions & Escalation",
                      "11. Adverse Event & Emergency Response",
                      "12. Discharge Criteria",
                      "13. Follow-up & Continuity of Care",
                      "14. Staff Training & Competency",
                      "15. Program Status Statement",
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

              <div className="col-span-12 md:col-span-5">
                <div className="rounded-2xl border border-slate-200 bg-gradient-to-b from-[#81c4e1]/15 to-white p-6">
                  <p className="text-[12px] uppercase tracking-[0.35em] text-slate-400 font-bold">
                    Quick Specs
                  </p>

                  <div className="mt-4 space-y-3 text-[13px]">
                    <div className="rounded-xl border border-slate-200 bg-white p-4">
                      <p className="text-slate-400 uppercase tracking-widest font-bold text-[11px]">
                        Infusion Range
                      </p>
                      <p className="text-slate-900 font-extrabold mt-1">
                        0.1 – 0.5 mg/kg/hr IV
                      </p>
                      <p className="text-slate-500 text-[12px] mt-1">
                        &gt;0.5 mg/kg/hr requires Medical Director approval.
                      </p>
                    </div>

                    <div className="rounded-xl border border-slate-200 bg-white p-4">
                      <p className="text-slate-400 uppercase tracking-widest font-bold text-[11px]">
                        Duration
                      </p>
                      <p className="text-slate-900 font-extrabold mt-1">
                        Typically 2–4 hours
                      </p>
                    </div>

                    <div className="rounded-xl border border-slate-200 bg-white p-4">
                      <p className="text-slate-400 uppercase tracking-widest font-bold text-[11px]">
                        Monitoring
                      </p>
                      <p className="text-slate-900 font-extrabold mt-1">
                        Continuous SpO₂ + Q15 vitals
                      </p>
                      <p className="text-slate-500 text-[12px] mt-1">
                        Post-infusion recovery minimum 45–60 minutes.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* MAIN SECTIONS */}
            <main className="mt-10 space-y-8 text-[13px] leading-relaxed text-slate-800">
              {/* 1 */}
              <SectionCard
                icon={<ShieldCheck size={18} className="text-white" />}
                title="1. PURPOSE"
                accent="from-[#81c4e1] to-[#4aa9d8]"
              >
                <p>
                  This guideline establishes standardized clinical, safety,
                  monitoring, and documentation requirements for the
                  administration of intravenous ketamine infusion therapy for
                  chronic pain in an urgent care setting staffed by Nurse
                  Practitioners (NP), Physician Assistants (PA), and Medical
                  Assistants (MA).
                </p>
                <p className="mt-4 font-extrabold text-slate-900">
                  The protocol is designed to:
                </p>
                <ul className="mt-2 grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {[
                    "Ensure patient safety",
                    "Meet LegitScript and FDA safety expectations",
                    "Define clear staff responsibilities",
                    "Standardize patient selection, monitoring, and escalation pathways",
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

              {/* 2 */}
              <SectionCard
                icon={<Stethoscope size={18} className="text-white" />}
                title="2. REGULATORY & CLINICAL CONTEXT"
                accent="from-[#81c4e1] to-[#4aa9d8]"
              >
                <ul className="list-disc ml-5 space-y-1">
                  <li>Ketamine is an FDA-approved anesthetic agent</li>
                  <li>
                    Use for chronic pain is <strong>off-label</strong>
                  </li>
                </ul>

                {/* ✅ ADDED: EXACT ORIGINAL LEAD-IN */}
                <p className="mt-4 font-extrabold text-slate-900">
                  Administration requires:
                </p>
                <ul className="mt-2 list-disc ml-5 space-y-1">
                  <li>Trained licensed medical supervision</li>
                  <li>Continuous physiologic monitoring</li>
                  <li>
                    Emergency preparedness comparable to procedural sedation
                    standards
                  </li>
                </ul>
              </SectionCard>

              {/* 3 */}
              <SectionCard
                icon={<ClipboardList size={18} className="text-white" />}
                title="3. DEFINITIONS (ADAPTED)"
                accent="from-[#81c4e1] to-[#4aa9d8]"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <InfoTile
                    label="Ketamine Infusion"
                    value="Continuous IV administration over a defined period (typically 2–4 hours) for analgesic effect."
                  />
                  <InfoTile
                    label="Bolus"
                    value="Rapid IV push dose administered only when clinically indicated and only by NP/PA or Medical Director."
                  />
                  <InfoTile
                    label="Authorized Prescriber"
                    value="Medical Director, NP, or PA credentialed for ketamine therapy."
                  />
                  <InfoTile
                    label="Monitoring Period"
                    value="Active infusion time plus mandatory post-infusion recovery."
                  />
                </div>
              </SectionCard>

              {/* 4 */}
              <SectionCard
                icon={<Activity size={18} className="text-white" />}
                title="4. INDICATIONS FOR USE"
                accent="from-[#81c4e1] to-[#4aa9d8]"
              >
                <p>
                  IV ketamine therapy may be offered to adults{" "}
                  <strong>≥18 years</strong> with chronic pain refractory to
                  conventional therapies, including:
                </p>
                <ul className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-2 list-disc ml-5">
                  <li>Neuropathic pain</li>
                  <li>Fibromyalgia</li>
                  <li>Complex Regional Pain Syndrome (CRPS)</li>
                  <li>Centralized pain syndromes</li>
                  <li>Chronic pain with opioid intolerance or poor response</li>
                  <li>Chronic pain with comorbid depression or anxiety</li>
                </ul>
              </SectionCard>

              {/* 5 */}
              <SectionCard
                icon={<AlertCircle size={18} className="text-white" />}
                title="5. EXCLUSION & DENIAL CRITERIA"
                accent="from-[#ff4d4d] to-[#ff9a3c]"
                tone="danger"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <DangerBox
                    title="Absolute Exclusions"
                    items={[
                      "Uncontrolled hypertension ≥160/100",
                      "Recent myocardial infarction, unstable angina, or significant arrhythmia",
                      "Severe respiratory disease with active symptoms",
                      "History of psychosis or untreated schizophrenia",
                      "Pregnancy or breastfeeding",
                    ]}
                  />
                  <WarningBox
                    title="Conditional / Relative Exclusions"
                    items={[
                      "BP persistently ≥140/90 despite rest",
                      "Poorly controlled asthma or COPD",
                      "Untreated obstructive sleep apnea",
                      "Significant hepatic disease",
                    ]}
                  />
                </div>
                <p className="mt-4 font-bold text-slate-700">
                  Patients not meeting criteria are denied treatment,
                  documented, and referred appropriately.
                </p>
              </SectionCard>

              {/* 6 */}
              <SectionCard
                icon={<Timer size={18} className="text-white" />}
                title="6. REQUIRED PRE-TREATMENT EVALUATION"
                accent="from-[#81c4e1] to-[#4aa9d8]"
              >
                <div className="rounded-2xl border border-slate-200 bg-gradient-to-b from-slate-50 to-white p-6">
                  <p className="font-extrabold text-slate-900">
                    All patients must complete one of the following before
                    treatment:
                  </p>
                  <ul className="list-disc ml-5 mt-2 space-y-1">
                    <li>
                      Submission of recent PCP records (within{" "}
                      <strong>6–12 months</strong>), <strong>OR</strong>
                    </li>
                    <li>
                      Comprehensive in-house evaluation by <strong>NP/PA</strong>
                    </li>
                  </ul>

                  <div className="mt-4 rounded-xl border border-red-200 bg-red-50 px-4 py-3">
                    <p className="font-extrabold text-red-700">
                      Self-reported history alone is insufficient.
                    </p>
                  </div>

                  <p className="mt-5 font-extrabold text-slate-900">
                    Required Baseline Assessment
                  </p>
                  <div className="mt-2 grid grid-cols-1 md:grid-cols-2 gap-3">
                    {[
                      "Full medical history and medication review",
                      "Cardiovascular and respiratory screening",
                      "Baseline pain assessment",
                      "Mental health screening",
                      "Baseline vitals: BP, HR, RR, SpO₂",
                      "Baseline neurologic status (RASS or equivalent)",
                    ].map((x) => (
                      <div
                        key={x}
                        className="rounded-xl border border-slate-200 bg-white px-4 py-3 font-bold text-slate-800"
                      >
                        {x}
                      </div>
                    ))}
                  </div>
                </div>
              </SectionCard>

              {/* 7 */}
              <SectionCard
                icon={<Users size={18} className="text-white" />}
                title="7. STAFF ROLES & RESPONSIBILITIES (URGENT CARE–SPECIFIC)"
                accent="from-[#81c4e1] to-[#4aa9d8]"
              >
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                  <RoleCard
                    title="Medical Director"
                    items={[
                      "Program oversight",
                      "Final clinical authority",
                      "Adverse event review",
                      "Policy approval and updates",
                    ]}
                  />
                  <RoleCard
                    title="Nurse Practitioner / Physician Assistant"
                    items={[
                      "Patient evaluation and eligibility determination",
                      "Ketamine ordering and dosing",
                      "IV bolus administration (if used)",
                      "Clinical oversight during infusion",
                      "Management of adverse events",
                      "Discharge authorization",
                    ]}
                    highlight="A licensed NP or PA must be physically present in the clinic for the entire infusion and recovery period."
                  />
                  <RoleCard
                    title="Medical Assistant (MA)"
                    items={[
                      "Room preparation and equipment setup",
                      "Baseline and interval vital signs",
                      "Continuous patient observation",
                      "Documentation in EMR",
                      "Immediate notification of NP/PA for abnormalities",
                    ]}
                    highlight="MAs do NOT initiate, titrate, or bolus ketamine."
                    highlightTone="danger"
                  />
                </div>
              </SectionCard>

              {/* 8 */}
              <SectionCard
                icon={<ClipboardList size={18} className="text-white" />}
                title="8. DOSING & ADMINISTRATION (URGENT CARE–APPROPRIATE)"
                accent="from-[#81c4e1] to-[#4aa9d8]"
              >
                <div className="rounded-2xl border border-slate-200 overflow-hidden">
                  <div className="bg-gradient-to-r from-[#81c4e1] to-[#4aa9d8] px-6 py-4 text-white">
                    <p className="font-extrabold">Infusion Dosing Range</p>
                    <p className="text-[12px] opacity-90">
                      Dosing individualized based on tolerance and response.
                    </p>
                  </div>

                  <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-4">
                    <InfoTile
                      label="Infusion Dosing"
                      value="0.1 – 0.5 mg/kg/hr IV"
                    />
                    <InfoTile label="Typical Duration" value="2–4 hours" />
                    <InfoTile
                      label="Adjunct Medications (PRN, NP/PA ordered)"
                      value="Ondansetron for nausea • Clonidine for BP control • Low-dose benzodiazepine only if clinically necessary"
                    />
                  </div>
                </div>

                <div className="mt-4 rounded-xl border border-slate-200 bg-slate-50 px-5 py-4">
                  <p className="font-bold text-slate-800">
                    Higher infusion ranges (e.g.,{" "}
                    <strong>&gt;0.5 mg/kg/hr</strong>) require Medical Director
                    approval and enhanced documentation.
                  </p>
                </div>
              </SectionCard>

              {/* 9 */}
              <SectionCard
                icon={<Timer size={18} className="text-white" />}
                title="9. MONITORING REQUIREMENTS"
                accent="from-[#81c4e1] to-[#4aa9d8]"
              >
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                  <StageCard
                    title="Pre-Infusion"
                    items={[
                      "Baseline vitals",
                      "Baseline pain score",
                      "Baseline RASS",
                    ]}
                  />
                  <StageCard
                    title="During Infusion"
                    items={[
                      "Continuous pulse oximetry",
                      "BP, HR, RR every 15 minutes",
                      "Pain score every 15 minutes",
                      "Mental status monitoring (RASS)",
                    ]}
                  />
                  <StageCard
                    title="Post-Infusion Recovery"
                    items={[
                      "Minimum 45–60 minutes observation",
                      "Vitals every 15 minutes for at least 30 minutes",
                      "Patient must return to baseline mental status before discharge",
                    ]}
                  />
                </div>
              </SectionCard>

              {/* 10 */}
              <SectionCard
                icon={<AlertCircle size={18} className="text-white" />}
                title="10. REPORTABLE CONDITIONS & ESCALATION"
                accent="from-[#ff4d4d] to-[#ff9a3c]"
                tone="danger"
              >
                <div className="rounded-2xl border border-red-200 bg-red-50 p-6">
                  <p className="font-extrabold text-red-700 mb-2">
                    Immediately notify NP/PA for:
                  </p>
                  <ul className="list-disc ml-5 space-y-1 text-[12px] text-red-900">
                    <li>SBP &lt;90 or &gt;190</li>
                    <li>DBP &gt;110</li>
                    <li>RR &lt;8</li>
                    <li>SpO₂ &lt;92% on room air</li>
                    <li>Severe dissociation, hallucinations, or agitation</li>
                    <li>RASS ≤ –2</li>
                  </ul>

                  <div className="mt-4 rounded-xl border border-red-200 bg-white px-5 py-4">
                    <p className="font-extrabold text-red-700">
                      Infusion is stopped immediately for severe reactions.
                    </p>
                  </div>
                </div>
              </SectionCard>

              {/* 11 */}
              <SectionCard
                icon={<HeartPulse size={18} className="text-white" />}
                title="11. ADVERSE EVENT & EMERGENCY RESPONSE"
                accent="from-[#81c4e1] to-[#4aa9d8]"
              >
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {[
                    "Stop infusion",
                    "Support airway, breathing, circulation",
                    "Administer oxygen and supportive care",
                    "Activate EMS if indicated",
                    "Document event in EMR",
                    "Notify Medical Director",
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

              {/* 12 */}
              <SectionCard
                icon={<PhoneCall size={18} className="text-white" />}
                title="12. DISCHARGE CRITERIA"
                accent="from-[#81c4e1] to-[#4aa9d8]"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="rounded-2xl border border-slate-200 bg-white p-6">
                    <p className="font-extrabold text-slate-900 mb-3">
                      Patient may be discharged when ALL are met:
                    </p>
                    <ul className="list-disc ml-5 space-y-1 text-[12px]">
                      <li>
                        <strong>RASS = 0</strong>
                      </li>
                      <li>Stable BP at baseline</li>
                      <li>SpO₂ ≥95% or baseline</li>
                      <li>Able to tolerate oral intake</li>
                      <li>Ambulating safely (if applicable)</li>
                      <li>Responsible adult escort present</li>
                    </ul>
                  </div>

                  <div className="rounded-2xl border border-slate-900 bg-slate-950 text-white p-6">
                    <p className="font-extrabold mb-3">
                      Discharge Instructions Include:
                    </p>
                    <ul className="list-disc ml-5 space-y-1 text-[12px] text-white/90">
                      <li>No driving for 24 hours</li>
                      <li>No legal or financial decisions for 24 hours</li>
                      <li>Light activity only</li>
                      <li>Written post-sedation instructions provided</li>
                    </ul>
                  </div>
                </div>
              </SectionCard>

              {/* 13 */}
              <SectionCard
                icon={<ClipboardList size={18} className="text-white" />}
                title="13. FOLLOW-UP & CONTINUITY OF CARE"
                accent="from-[#81c4e1] to-[#4aa9d8]"
              >
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {[
                    "Reassessment after every 2–3 infusions",
                    "Dose adjustments documented",
                    "Referral to PCP, pain specialist, or behavioral health as indicated",
                    "Ketamine is positioned as adjunctive, not curative",
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

              {/* 14 */}
              <SectionCard
                icon={<GraduationCap size={18} className="text-white" />}
                title="14. STAFF TRAINING & COMPETENCY"
                accent="from-[#81c4e1] to-[#4aa9d8]"
              >
                <div className="rounded-2xl border border-slate-200 bg-gradient-to-b from-slate-50 to-white p-6">
                  <p className="font-extrabold text-slate-900 mb-3">
                    All staff involved must complete:
                  </p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {[
                      "Ketamine pharmacology training",
                      "Monitoring & sedation safety",
                      "Emergency response drills",
                      "Annual competency validation",
                    ].map((x) => (
                      <li
                        key={x}
                        className="rounded-xl border border-slate-200 bg-white px-4 py-3 font-bold text-slate-800"
                      >
                        {x}
                      </li>
                    ))}
                  </ul>
                </div>
              </SectionCard>

              {/* 15 */}
              <section className="avoid-break">
                <div className="rounded-[22px] overflow-hidden border border-slate-900 bg-gradient-to-b from-slate-950 to-slate-900 text-white">
                  <div className="px-7 py-6 flex items-center gap-3 border-b border-white/10">
                    <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-[#81c4e1] to-[#4aa9d8] grid place-items-center">
                      <ClipboardList size={18} className="text-white" />
                    </div>
                    <div>
                      <p className="text-[12px] uppercase tracking-[0.35em] text-white/60 font-bold">
                        For LegitScript
                      </p>
                      <h3 className="text-lg font-extrabold tracking-tight">
                        15. PROGRAM STATUS STATEMENT (FOR LEGITSCRIPT)
                      </h3>
                    </div>
                  </div>

                  <div className="px-7 py-6 space-y-3 text-[12px] text-white/85 italic">
                    {/* ✅ ADDED: EXACT ORIGINAL LEAD-IN */}
                    <p className="font-extrabold text-white">
                      At the time of policy implementation:
                    </p>
                    <ul className="list-disc ml-5 space-y-1 text-white/85">
                      <li>Ketamine infusion services are in pre-launch phase</li>
                      <li>No adverse outcomes have occurred</li>
                      <li>
                        Program is overseen by a board-certified Emergency
                        Medicine physician with extensive ketamine experience
                      </li>
                    </ul>
                  </div>
                </div>
              </section>
            </main>

            {/* SIGNATURE */}
            <footer className="pt-12 mt-10 border-t border-slate-200">
              <div className="flex items-end justify-between gap-6">
                <div className="w-[380px]">
                  <div className="h-10 border-b-2 border-slate-900" />
                  <p className="mt-2 text-[10px] font-bold uppercase tracking-[0.3em] text-slate-500">
                    Medical Director Signature / Date
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-[10px] font-extrabold uppercase tracking-[0.35em] text-slate-300">
                    Official Protocol
                  </p>
                  <p className="text-[11px] font-bold text-slate-500">
                    UCPW-KET-CP-001
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

function SectionCard({ icon, title, accent, tone = "default", children }) {
  const ring =
    tone === "danger"
      ? "border-red-200 bg-gradient-to-b from-red-50 to-white"
      : "border-slate-200 bg-white";

  return (
    <section className="avoid-break">
      <div className={`rounded-[22px] border ${ring} overflow-hidden`}>
        <div className="px-6 py-5 flex items-center justify-between gap-4 border-b border-slate-200/70">
          <div className="flex items-center gap-3 min-w-0">
            <div
              className={`h-11 w-11 rounded-2xl bg-gradient-to-br ${accent} grid place-items-center shadow-sm`}
            >
              {icon}
            </div>
            <div className="min-w-0">
              <h3 className="text-base font-extrabold tracking-tight text-slate-900">
                {title}
              </h3>
              <p className="text-[12px] text-slate-500 font-bold">
                Standardized clinical and safety requirements
              </p>
            </div>
          </div>
        </div>

        <div className="p-6 space-y-3">{children}</div>
      </div>
    </section>
  );
}

function InfoTile({ label, value }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5">
      <p className="text-[11px] uppercase tracking-[0.3em] text-slate-400 font-bold">
        {label}
      </p>
      <p className="mt-2 font-extrabold text-slate-900 leading-snug">{value}</p>
    </div>
  );
}

function RoleCard({ title, items, highlight, highlightTone = "info" }) {
  const highlightStyle =
    highlightTone === "danger"
      ? "border-red-200 bg-red-50 text-red-700"
      : "border-slate-200 bg-slate-50 text-slate-800";

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6">
      <p className="text-[11px] uppercase tracking-[0.35em] text-slate-400 font-bold">
        {title}
      </p>

      <ul className="mt-3 list-disc ml-5 space-y-1 text-[12px]">
        {items.map((x) => (
          <li key={x}>{x}</li>
        ))}
      </ul>

      {highlight ? (
        <div className={`mt-4 rounded-xl border px-4 py-3 ${highlightStyle}`}>
          <p className="font-extrabold text-[12px]">{highlight}</p>
        </div>
      ) : null}
    </div>
  );
}

function StageCard({ title, items }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-gradient-to-b from-slate-50 to-white p-6">
      <p className="text-[11px] uppercase tracking-[0.35em] text-slate-400 font-bold">
        {title}
      </p>
      <ul className="mt-3 list-disc ml-5 space-y-1 text-[12px]">
        {items.map((x) => (
          <li key={x}>{x}</li>
        ))}
      </ul>
    </div>
  );
}

function DangerBox({ title, items }) {
  return (
    <div className="rounded-2xl border border-red-200 bg-red-50 p-6">
      <p className="text-[11px] uppercase tracking-[0.35em] text-red-700 font-bold">
        {title}
      </p>
      <ul className="mt-3 list-disc ml-5 space-y-1 text-[12px] text-red-900">
        {items.map((x) => (
          <li key={x}>{x}</li>
        ))}
      </ul>
    </div>
  );
}

function WarningBox({ title, items }) {
  return (
    <div className="rounded-2xl border border-orange-200 bg-orange-50 p-6">
      <p className="text-[11px] uppercase tracking-[0.35em] text-orange-700 font-bold">
        {title}
      </p>
      <ul className="mt-3 list-disc ml-5 space-y-1 text-[12px] text-orange-900">
        {items.map((x) => (
          <li key={x}>{x}</li>
        ))}
      </ul>
    </div>
  );
}
