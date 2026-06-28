import { Code, Server, Database, Download, Wifi } from "lucide-react";
import { motion } from "framer-motion";

const cards = [
    {
        Icon: Code,
        title: "Frontend Development",
        description:
            "Building responsive UIs with React, Tailwind CSS, and modern JavaScript. Focused on clean, accessible interfaces.",
    },
    {
        Icon: Database,
        title: "Backend & Databases",
        description:
            "Building REST APIs with Node.js and Express. Working with MySQL and MongoDB for data management.",
    },
    {
        Icon: Server,
        title: "Infrastructure & DevOps",
        description:
            "Self-hosting with Docker, Ubuntu Server, and Coolify. Managing domains and edge caching via Cloudflare.",
    },
    {
        Icon: Wifi,
        title: "Networking & Embedded",
        description:
            "Studying computer networking (Cisco, Wireshark) and building IoT prototypes with Arduino and Proteus.",
    },
];

const stats = [
    { value: "1+", label: "Year Learning" },
    { value: "20+", label: "Repos" },
    { value: "8+", label: "Technologies" },
];

const cardVariants = {
    hidden: { opacity: 0, x: 32 },
    visible: (i) => ({
        opacity: 1,
        x: 0,
        transition: { delay: i * 0.12, duration: 0.45, ease: "easeOut" },
    }),
};

export const AboutSection = () => {
    return (
        <section id="about" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <motion.div
                    initial={{ opacity: 0, y: 28 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.55 }}
                >
                    <h2 className="section-heading">
                        About <span className="text-gradient">Me</span>
                    </h2>
                    <p className="text-center text-muted-foreground mb-14 max-w-2xl mx-auto text-sm">
                        A Computer Engineering student from Surabaya — passionate about building real things
                        across the full stack and continuously growing as a developer.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
                    {/* Left */}
                    <motion.div
                        className="space-y-6"
                        initial={{ opacity: 0, x: -32 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.55 }}
                    >
                        <h3 className="text-2xl font-bold text-left font-heading">
                            Aspiring Full-Stack Developer
                        </h3>

                        <p className="text-muted-foreground text-left text-sm leading-relaxed">
                            I've been exploring web development for about a year now —
                            building full-stack apps, learning about backend systems and databases,
                            and diving into self-hosting and networking on the side.
                        </p>

                        <p className="text-muted-foreground text-left text-sm leading-relaxed">
                            Outside of web dev, I enjoy building games in C++ with SFML, writing
                            Python scripts, and experimenting with embedded systems and IoT.
                            I'm a firm believer in learning by building real projects.
                        </p>

                        {/* Stats */}
                        <div className="grid grid-cols-3 gap-3 py-2">
                            {stats.map(({ value, label }) => (
                                <div
                                    key={label}
                                    className="text-center p-3 rounded-xl bg-primary/6 border border-primary/15"
                                >
                                    <div className="text-2xl font-bold text-primary font-heading">{value}</div>
                                    <div className="text-[11px] text-muted-foreground mt-0.5 leading-tight">{label}</div>
                                </div>
                            ))}
                        </div>

                        <div className="flex flex-col sm:flex-row gap-3 pt-1">
                            <a href="#contact" className="cosmic-button">
                                Get In Touch
                            </a>
                            <a
                                href="https://docs.google.com/document/d/1h3hM3VmSqSV0YsuGFBsUP_gN-GzyDJpr-78U7NH1QEw/edit?usp=sharing"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-6 py-3 rounded-full border border-primary/60 text-primary hover:bg-primary/8 transition-all duration-300 font-medium font-heading flex items-center justify-center gap-2 hover:border-primary"
                            >
                                <Download size={15} />
                                Download CV
                            </a>
                        </div>
                    </motion.div>

                    {/* Right: 2×2 cards */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {cards.map(({ Icon, title, description }, i) => (
                            <motion.div
                                key={title}
                                custom={i}
                                variants={cardVariants}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.1 }}
                                whileHover={{ y: -3, transition: { duration: 0.2 } }}
                                className="glow-card p-5 hover:border-primary/35 hover:shadow-md hover:shadow-primary/8 text-left"
                            >
                                <div className="p-2.5 rounded-xl bg-primary/10 w-fit mb-3">
                                    <Icon className="h-5 w-5 text-primary" />
                                </div>
                                <h4 className="font-semibold text-sm mb-1.5 font-heading">{title}</h4>
                                <p className="text-muted-foreground text-xs leading-relaxed">{description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
