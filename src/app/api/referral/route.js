import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    // Read submitted form data
    const form = await req.formData();
    const entries = Object.fromEntries(form.entries());

    // Check required environment variables
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      throw new Error("Missing EMAIL_USER or EMAIL_PASS in environment variables.");
    }

    // Optional file upload
    let attachment = null;
    const file = form.get("file");

    if (file && typeof file !== "string") {
      const buffer = Buffer.from(await file.arrayBuffer());
      attachment = {
        filename: file.name,
        content: buffer,
      };
    }

    // Create Gmail SMTP transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER, // your Gmail address
        pass: process.env.EMAIL_PASS, // 16-digit App Password (NO SPACES)
      },
    });

    // Construct HTML email body
    const htmlBody = `
      <h2>New Patient Referral</h2>

      <h3>Patient Information</h3>
      <p><strong>Name:</strong> ${entries.patientName}</p>
      <p><strong>Date of Birth:</strong> ${entries.dob}</p>
      <p><strong>Phone:</strong> ${entries.phone}</p>
      <p><strong>Email:</strong> ${entries.email}</p>
      <p><strong>Gender:</strong> ${entries.gender}</p>
      <p><strong>Insurance:</strong> ${entries.insurance}</p>

      <h3>Referral Reason</h3>
      <p>${entries.referralReason}</p>

      <h3>Additional Notes</h3>
      <p>${entries.notes || "None"}</p>

      <h3>Referring Provider Information</h3>
      <p><strong>Name:</strong> ${entries.providerName}</p>
      <p><strong>Phone:</strong> ${entries.providerPhone}</p>
      <p><strong>Email:</strong> ${entries.providerEmail}</p>
    `;

    // Send the email
    await transporter.sendMail({
      from: `"GrowthFairness Referrals" <${process.env.EMAIL_USER}>`,
      to: "growthfairness2@gmail.com",
      subject: "New Patient Referral Submission",
      html: htmlBody,
      attachments: attachment ? [attachment] : [],
    });

    return Response.json({ success: true });
  } catch (err) {
    console.error("Referral API Error:", err);
    return Response.json(
      { success: false, error: err.message },
      { status: 500 }
    );
  }
}
