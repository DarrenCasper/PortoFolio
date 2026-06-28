import express from "express";
import nodemailer from "nodemailer";
import cors from "cors";
import rateLimit from "express-rate-limit";
import { config } from "dotenv";

config();

const app = express();
const PORT = process.env.PORT || 3001;

// CORS — restrict to your deployed frontend origin in production
app.use(
    cors({
        origin: process.env.ALLOWED_ORIGIN || "*",
        methods: ["GET", "POST"],
    })
);

app.use(express.json());

// Rate limiting: max 5 contact submissions per IP per 15 minutes
const contactLimiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 5,
    standardHeaders: true,
    legacyHeaders: false,
    message: { error: "Too many messages sent. Please try again in 15 minutes." },
});

const transporter = nodemailer.createTransport({
    service: process.env.EMAIL_SERVICE || "gmail",
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS, // use an App Password for Gmail
    },
});

app.post("/api/contact", contactLimiter, async (req, res) => {
    const { name, email, message } = req.body ?? {};

    if (!name?.trim() || !email?.trim() || !message?.trim()) {
        return res.status(400).json({ error: "All fields are required." });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        return res.status(400).json({ error: "Invalid email address." });
    }

    if (message.length > 5000) {
        return res.status(400).json({ error: "Message is too long (max 5000 characters)." });
    }

    try {
        await transporter.sendMail({
            from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
            to: process.env.RECIPIENT_EMAIL || process.env.EMAIL_USER,
            replyTo: email,
            subject: `[Portfolio] New message from ${name}`,
            html: `
                <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; background: #f9fafb; border-radius: 12px;">
                    <h2 style="color: #7c3aed; margin-top: 0;">New Portfolio Contact</h2>
                    <table style="width: 100%; border-collapse: collapse;">
                        <tr>
                            <td style="padding: 8px 0; color: #6b7280; font-size: 14px; width: 80px;">Name</td>
                            <td style="padding: 8px 0; font-weight: 600;">${escapeHtml(name)}</td>
                        </tr>
                        <tr>
                            <td style="padding: 8px 0; color: #6b7280; font-size: 14px;">Email</td>
                            <td style="padding: 8px 0;">
                                <a href="mailto:${escapeHtml(email)}" style="color: #7c3aed;">${escapeHtml(email)}</a>
                            </td>
                        </tr>
                    </table>
                    <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 16px 0;" />
                    <p style="color: #6b7280; font-size: 14px; margin-bottom: 8px;">Message:</p>
                    <div style="background: #fff; padding: 16px; border-radius: 8px; border: 1px solid #e5e7eb; white-space: pre-wrap; font-size: 15px; line-height: 1.6;">
                        ${escapeHtml(message)}
                    </div>
                    <p style="color: #9ca3af; font-size: 12px; margin-top: 16px;">
                        Sent from your portfolio contact form · ${new Date().toUTCString()}
                    </p>
                </div>
            `,
        });

        res.json({ success: true, message: "Email sent successfully!" });
    } catch (err) {
        console.error("Nodemailer error:", err.message);
        res.status(500).json({ error: "Failed to send email. Please try again later." });
    }
});

app.get("/health", (_req, res) => res.json({ status: "ok", timestamp: new Date().toISOString() }));

app.listen(PORT, () => {
    console.log(`Backend running on http://localhost:${PORT}`);
});

function escapeHtml(str) {
    return String(str)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}
