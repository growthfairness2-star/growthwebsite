"use client";

export default function PatientReferralForm() {
  return (
    <div className="w-full bg-[#F4FAFC] min-h-screen py-20 px-4 md:px-10">

      {/* HEADER */}
      <div className="max-w-5xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900">Patient Referral Form</h1>
        <p className="text-gray-600 mt-4 text-lg">
          Please complete this secure referral form. Our team will contact the patient promptly.
        </p>
      </div>

      {/* FULL-WIDTH ZOHO FORM */}
      <div className="w-full max-w-5xl mx-auto">
        <iframe
          aria-label="patient_referral_form"
          frameBorder="0"
          style={{ height: "1200px", width: "100%", border: "none" }}
          src="https://forms.zohopublic.com/growthfairness2gm1/form/patientreferralform/formperma/2G26vsqwHESrUjgr41qD951_Sa5lO-D46YWiO1cw7e4"
        ></iframe>
      </div>

    </div>
  );
}
