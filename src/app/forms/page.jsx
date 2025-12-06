"use client";

import { useState } from "react";

export default function PatientReferralForm() {
  const [formData, setFormData] = useState({
    patientName: "",
    dob: "",
    phone: "",
    email: "",
    gender: "",
    insurance: "",
    referralReason: "",
    notes: "",
    providerName: "",
    providerPhone: "",
    providerEmail: "",
    file: null,
  });

  const insuranceOptions = [
    "Aetna", "Blue Cross Blue Shield", "Cigna", "Oscar", "Oxford",
    "United Healthcare", "UMR", "GEHA", "Meritain Health", "Evernorth",
    "Harvard Pilgrim", "Tufts Health", "Boone Chapman", "Nippon Life",
    "Coventry", "UHealth", "Optum", "Optum Health", "Carelon", "Other"
  ];

  const genders = ["Male", "Female", "Non-binary", "Prefer not to say"];

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formDataToSend = new FormData();
    for (const key in formData) {
      formDataToSend.append(key, formData[key]);
    }

    const res = await fetch("/api/referral", {
      method: "POST",
      body: formDataToSend,
    });

    const data = await res.json();

    if (data.success) {
      alert("Referral submitted successfully!");
    } else {
      alert("Error submitting form.");
    }
  };

  return (
    <div className="w-full bg-[#F4FAFC] min-h-screen py-20 px-6">

      <div className="max-w-3xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900">Patient Referral Form</h1>
        <p className="text-gray-600 mt-4 text-lg">
          Please complete this secure referral form. Our team will contact the patient promptly.
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="max-w-3xl mx-auto bg-white shadow-xl rounded-2xl p-8 border border-gray-100"
      >

        {/* PATIENT INFO */}
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">
          Patient Information
        </h2>

        <div className="grid md:grid-cols-2 gap-6">

          <div>
            <label className="block text-gray-700 font-medium mb-1">Patient Name</label>
            <input
              type="text"
              name="patientName"
              onChange={handleChange}
              required
              className="w-full p-3 rounded-lg border"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-1">Date of Birth</label>
            <input
              type="date"
              name="dob"
              onChange={handleChange}
              required
              className="w-full p-3 rounded-lg border"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-1">Phone Number</label>
            <input
              type="text"
              name="phone"
              onChange={handleChange}
              required
              className="w-full p-3 rounded-lg border"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-1">Email Address</label>
            <input
              type="email"
              name="email"
              onChange={handleChange}
              className="w-full p-3 rounded-lg border"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-1">Gender</label>
            <select
              name="gender"
              onChange={handleChange}
              required
              className="w-full p-3 rounded-lg border"
            >
              <option value="">Select Gender</option>
              {genders.map((g, i) => (
                <option key={i} value={g}>{g}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-1">Insurance Provider</label>
            <select
              name="insurance"
              onChange={handleChange}
              className="w-full p-3 rounded-lg border"
            >
              <option value="">Select Insurance</option>
              {insuranceOptions.map((opt, i) => (
                <option key={i} value={opt}>{opt}</option>
              ))}
            </select>
          </div>

        </div>

        {/* REFERRAL DETAILS */}
        <h2 className="text-2xl font-semibold text-gray-800 mt-10 mb-6">
          Referral Details
        </h2>

        <div className="grid gap-6">

          <div>
            <label className="block text-gray-700 font-medium mb-1">Reason for Referral</label>
            <textarea
              name="referralReason"
              rows={4}
              required
              onChange={handleChange}
              className="w-full p-3 rounded-lg border"
            ></textarea>
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-1">Additional Notes</label>
            <textarea
              name="notes"
              rows={4}
              onChange={handleChange}
              className="w-full p-3 rounded-lg border"
            ></textarea>
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-1">Upload Documents (Optional)</label>
            <input
              type="file"
              name="file"
              onChange={handleChange}
              className="w-full"
            />
          </div>

        </div>

        {/* PROVIDER INFO */}
        <h2 className="text-2xl font-semibold text-gray-800 mt-10 mb-6">
          Referring Provider Information
        </h2>

        <div className="grid md:grid-cols-2 gap-6">

          <div>
            <label className="block text-gray-700 font-medium mb-1">Provider Name</label>
            <input
              type="text"
              name="providerName"
              required
              onChange={handleChange}
              className="w-full p-3 rounded-lg border"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-1">Provider Phone</label>
            <input
              type="text"
              name="providerPhone"
              required
              onChange={handleChange}
              className="w-full p-3 rounded-lg border"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-1">Provider Email</label>
            <input
              type="email"
              name="providerEmail"
              onChange={handleChange}
              className="w-full p-3 rounded-lg border"
            />
          </div>

        </div>

        <button
          type="submit"
          className="w-full mt-10 bg-[#FFAA00] text-white py-3 rounded-xl font-semibold text-lg hover:bg-[#e69a00] transition shadow-lg"
        >
          Submit Referral
        </button>

      </form>
    </div>
  );
}
