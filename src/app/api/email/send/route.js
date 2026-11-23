import nodemailer from "nodemailer";

export async function POST(request) {
  try {
    const data = await request.json();

    const {
      fullName,
      company,
      townCity,
      email,
      telephone,
      country,
      captchaToken,
    } = data;

    // Check captcha token
    if (!captchaToken) {
      return Response.json(
        { error: "Captcha token is missing." },
        { status: 400 },
      );
    }

    // Verify Google reCAPTCHA
    const captchaResponse = await fetch(
      "https://www.google.com/recaptcha/api/siteverify",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams({
          secret: process.env.RECAPTCHA_SECRET_KEY,
          response: captchaToken,
        }),
      },
    );

    const captchaResult = await captchaResponse.json();

    if (!captchaResult.success) {
      return Response.json(
        {
          error: "Captcha verification failed.",
        },
        { status: 400 },
      );
    }

    // Email Transporter
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_USERNAME,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    // Send Email
    await transporter.sendMail({
      from: `"Website Form" <${process.env.EMAIL_USERNAME}>`,
      to: process.env.EMAIL_USERNAME,
      subject: `New Contact Form Submission from ${fullName}`,
      html: `
        <h2>New Contact Form Submission</h2>

        <table border="1" cellpadding="10" cellspacing="0">
          <tr>
            <td><strong>Full Name</strong></td>
            <td>${fullName}</td>
          </tr>

          <tr>
            <td><strong>Company</strong></td>
            <td>${company}</td>
          </tr>

          <tr>
            <td><strong>Town / City</strong></td>
            <td>${townCity}</td>
          </tr>

          <tr>
            <td><strong>Country</strong></td>
            <td>${country}</td>
          </tr>

          <tr>
            <td><strong>Email</strong></td>
            <td>${email}</td>
          </tr>

          <tr>
            <td><strong>Telephone</strong></td>
            <td>${telephone}</td>
          </tr>
        </table>
      `,
    });

    return Response.json({
      success: true,
      message: "Email sent successfully.",
    });
  } catch (error) {
    console.error(error);

    return Response.json(
      {
        success: false,
        error: "Failed to send email.",
      },
      {
        status: 500,
      },
    );
  }
}
