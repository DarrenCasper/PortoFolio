import { ArrowDown, Github, Linkedin, Instagram } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const roles = [
    "Full-Stack Developer",
    "Computer Eng. Student",
    "UI Enthusiast",
    "Problem Solver",
];

export const HeroSection = () => {
    const [currentRole, setCurrentRole] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentRole((prev) => (prev + 1) % roles.length);
        }, 2800);
        return () => clearInterval(interval);
    }, []);

    return (
        <section
            id="hero"
            className="relative min-h-screen flex flex-col items-center justify-center px-4 overflow-hidden"
        >
            <div className="container max-w-4xl mx-auto text-center z-10">
                {/* Available badge */}
                <motion.div
                    initial={{ opacity: 0, y: -16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/25 bg-primary/8 text-primary text-sm font-medium mb-7"
                >
                    <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                    Available for opportunities
                </motion.div>

                <motion.h1
                    className="text-5xl md:text-7xl font-bold tracking-tight mb-3 font-heading"
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.12, duration: 0.65 }}
                >
                    Hi, I'm{" "}
                    <span className="text-gradient-animated">DarrenCasper</span>
                </motion.h1>

                {/* Rotating role text */}
                <motion.div
                    className="h-9 overflow-hidden mb-6"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.35 }}
                >
                    <AnimatePresence mode="wait">
                        <motion.p
                            key={currentRole}
                            className="text-xl md:text-2xl text-primary font-semibold font-heading"
                            initial={{ y: 22, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: -22, opacity: 0 }}
                            transition={{ duration: 0.32, ease: "easeInOut" }}
                        >
                            {roles[currentRole]}
                        </motion.p>
                    </AnimatePresence>
                </motion.div>

                <motion.p
                    className="text-base md:text-lg text-muted-foreground max-w-xl mx-auto mb-9 leading-relaxed"
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.48, duration: 0.65 }}
                >
                    Comp. Engineering student from Surabaya — building full-stack web apps,
                    exploring backend systems, networking, and IoT. Always learning.
                </motion.p>

                {/* CTA buttons */}
                <motion.div
                    className="flex flex-wrap gap-3 justify-center mb-9"
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.65 }}
                >
                    <a href="#projects" className="cosmic-button">
                        View My Work
                    </a>
                    <a
                        href="#contact"
                        className="px-6 py-3 rounded-full border border-primary/60 text-primary hover:bg-primary/8 transition-all duration-300 font-medium font-heading hover:border-primary"
                    >
                        Contact Me
                    </a>
                </motion.div>

                {/* Social links */}
                <motion.div
                    className="flex justify-center gap-3"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.78, duration: 0.6 }}
                >
                    {[
                        { href: "https://github.com/DarrenCasper", Icon: Github, label: "GitHub" },
                        { href: "https://www.linkedin.com/in/darren-dexter-thio/", Icon: Linkedin, label: "LinkedIn" },
                        { href: "https://www.instagram.com/darren.dexter/", Icon: Instagram, label: "Instagram" },
                    ].map(({ href, Icon, label }) => (
                        <a
                            key={label}
                            href={href}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={label}
                            className="p-2.5 rounded-full border border-border hover:border-primary hover:text-primary text-muted-foreground transition-all duration-300 hover:scale-110 hover:shadow-[0_0_10px_rgba(139,92,246,0.3)]"
                        >
                            <Icon size={18} />
                        </a>
                    ))}
                </motion.div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5"
                animate={{ y: [0, 7, 0] }}
                transition={{ repeat: Infinity, duration: 2.2, ease: "easeInOut" }}
            >
                <span className="text-[10px] text-muted-foreground tracking-[0.2em] uppercase">Scroll</span>
                <ArrowDown className="h-3.5 w-3.5 text-primary/60" />
            </motion.div>
        </section>
    );
};
