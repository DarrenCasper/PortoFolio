import { Mail, MapPin, Phone, Send, Linkedin, Instagram, Github, Loader2 } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";
import toast from "react-hot-toast";

const API_URL = import.meta.env.VITE_API_URL ?? "";

const contactInfo = [
    {
        Icon: Mail,
        label: "Email",
        value: "darrendexterthio@gmail.com",
        href: "mailto:darrendexterthio@gmail.com",
    },
    {
        Icon: Phone,
        label: "Phone",
        value: "+62 858-9424-9596",
        href: "tel:+6285894249596",
    },
    {
        Icon: MapPin,
        label: "Location",
        value: "Surabaya, Jawa Timur",
        href: "https://maps.google.com/?q=Surabaya,Indonesia",
    },
];

const socials = [
    { href: "https://www.linkedin.com/in/darren-dexter-thio/", Icon: Linkedin, label: "LinkedIn" },
    { href: "https://www.instagram.com/darren.dexter/", Icon: Instagram, label: "Instagram" },
    { href: "https://github.com/DarrenCasper", Icon: Github, label: "GitHub" },
];

export const ContactSection = () => {
    const [form, setForm] = useState({ name: "", email: "", message: "" });
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            const res = await fetch(`${API_URL}/api/contact`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(form),
            });

            if (!res.ok) {
                const contentType = res.headers.get("content-type") ?? "";
                const data = contentType.includes("application/json")
                    ? await res.json()
                    : null;
                throw new Error(
                    data?.error ?? `Server error (${res.status}). Is the backend running?`
                );
            }

            const data = await res.json();

            toast.success("Message sent! I'll get back to you soon. 🚀", {
                duration: 5000,
            });
            setForm({ name: "", email: "", message: "" });
        } catch (err) {
            toast.error(err.message ?? "Failed to send. Please try again.", {
                duration: 5000,
            });
        } finally {
            setLoading(false);
        }
    };

    return (
        <section id="contact" className="py-24 px-4 relative bg-secondary/20">
            <div className="absolute inset-0 bg-linear-to-b from-transparent via-primary/3 to-transparent pointer-events-none" />

            <div className="container mx-auto max-w-5xl relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="section-heading">
                        Get In <span className="text-gradient">Touch</span>
                    </h2>
                    <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                        Have a project in mind or want to collaborate? Feel free to reach out —
                        I'm always open to new opportunities.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {/* Left: contact info + socials */}
                    <motion.div
                        className="space-y-8"
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.6 }}
                    >
                        <div>
                            <h3 className="text-2xl font-semibold mb-6 text-left">
                                Contact Information
                            </h3>

                            <div className="space-y-5">
                                {contactInfo.map(({ Icon, label, value, href }) => (
                                    <div key={label} className="flex items-start gap-4 group">
                                        <div className="p-3 rounded-xl bg-primary/10 shrink-0 group-hover:bg-primary/20 transition-colors duration-300">
                                            <Icon className="h-5 w-5 text-primary" />
                                        </div>
                                        <div className="text-left">
                                            <h4 className="font-medium text-sm text-muted-foreground">{label}</h4>
                                            <a
                                                href={href}
                                                target={href.startsWith("http") ? "_blank" : undefined}
                                                rel="noopener noreferrer"
                                                className="text-foreground hover:text-primary transition-colors duration-300 font-medium"
                                            >
                                                {value}
                                            </a>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div>
                            <h4 className="font-medium mb-4 text-left">Connect With Me</h4>
                            <div className="flex gap-3">
                                {socials.map(({ href, Icon, label }) => (
                                    <a
                                        key={label}
                                        href={href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label={label}
                                        className="p-3 rounded-xl border border-border hover:border-primary hover:text-primary text-muted-foreground transition-all duration-300 hover:scale-110 hover:shadow-[0_0_12px_rgba(139,92,246,0.3)] hover:bg-primary/5"
                                    >
                                        <Icon size={20} />
                                    </a>
                                ))}
                            </div>
                        </div>

                        {/* Decorative card */}
                        <div className="p-5 rounded-xl border border-primary/20 bg-primary/5">
                            <p className="text-sm text-muted-foreground text-left leading-relaxed">
                                💡 <span className="text-foreground font-medium">Quick response:</span> I typically
                                reply within 24 hours. For urgent matters, feel free to reach out directly via phone.
                            </p>
                        </div>
                    </motion.div>

                    {/* Right: form */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.6 }}
                        className="glow-card p-8 hover:border-primary/30"
                    >
                        <h3 className="text-2xl font-semibold mb-6 text-left">Send a Message</h3>

                        <form onSubmit={handleSubmit} className="space-y-5">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium mb-2 text-left">
                                    Your Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    required
                                    value={form.name}
                                    onChange={handleChange}
                                    placeholder="Darren Dexter..."
                                    className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-200 text-sm"
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-medium mb-2 text-left">
                                    Your Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    required
                                    value={form.email}
                                    onChange={handleChange}
                                    placeholder="you@example.com"
                                    className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-200 text-sm"
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium mb-2 text-left">
                                    Your Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    required
                                    rows={5}
                                    value={form.message}
                                    onChange={handleChange}
                                    placeholder="Hey, I'd like to talk about..."
                                    className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-200 text-sm resize-none"
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={loading}
                                className="cosmic-button w-full flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100"
                            >
                                {loading ? (
                                    <>
                                        <Loader2 size={16} className="animate-spin" />
                                        Sending...
                                    </>
                                ) : (
                                    <>
                                        Send Message
                                        <Send size={16} />
                                    </>
                                )}
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
