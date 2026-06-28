import { useState } from "react";
import { cn } from "../utils/utils";
import { motion } from "framer-motion";

const skills = [
    // Frontend
    { name: "HTML & CSS", level: 90, category: "frontend", icon: "🌐" },
    { name: "JavaScript", level: 82, category: "frontend", icon: "⚡" },
    { name: "React", level: 72, category: "frontend", icon: "⚛️" },
    { name: "Tailwind CSS", level: 68, category: "frontend", icon: "🎨" },
    { name: "Flutter / Dart", level: 38, category: "frontend", icon: "🐦" },

    // Backend
    { name: "Node.js", level: 55, category: "backend", icon: "🟢" },
    { name: "Express.js", level: 55, category: "backend", icon: "🚂" },
    { name: "REST APIs", level: 60, category: "backend", icon: "🔌" },
    { name: "MySQL / SQL", level: 48, category: "backend", icon: "🐬" },
    { name: "MongoDB", level: 35, category: "backend", icon: "🍃" },

    // Languages
    { name: "C / C++", level: 55, category: "languages", icon: "⚙️" },
    { name: "Python", level: 50, category: "languages", icon: "🐍" },
    { name: "Dart", level: 38, category: "languages", icon: "🎯" },

    // Infrastructure & Tools
    { name: "Git / GitHub", level: 85, category: "tools", icon: "🐙" },
    { name: "Docker", level: 38, category: "tools", icon: "🐳" },
    { name: "Ubuntu Server", level: 40, category: "tools", icon: "🐧" },
    { name: "Coolify", level: 35, category: "tools", icon: "☁️" },
    { name: "Cloudflare", level: 35, category: "tools", icon: "🔶" },
    { name: "VS Code", level: 90, category: "tools", icon: "💻" },
    { name: "Arduino", level: 45, category: "tools", icon: "🔌" },
    { name: "Cisco / Networking", level: 40, category: "tools", icon: "🌐" },
];

const categories = [
    { key: "all", label: "All" },
    { key: "frontend", label: "Frontend" },
    { key: "backend", label: "Backend" },
    { key: "languages", label: "Languages" },
    { key: "tools", label: "Tools & Infra" },
];

const levelLabel = (level) => {
    if (level >= 80) return "Advanced";
    if (level >= 55) return "Intermediate";
    if (level >= 35) return "Learning";
    return "Beginner";
};

const levelColor = (level) => {
    if (level >= 80) return "text-violet-400 bg-violet-400/10 border-violet-400/20";
    if (level >= 55) return "text-blue-400 bg-blue-400/10 border-blue-400/20";
    if (level >= 35) return "text-amber-400 bg-amber-400/10 border-amber-400/20";
    return "text-slate-400 bg-slate-400/10 border-slate-400/20";
};

const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.06 } },
};

const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

export const SkillsSection = () => {
    const [activeCategory, setActiveCategory] = useState("all");

    const filteredSkills = skills.filter(
        (s) => activeCategory === "all" || s.category === activeCategory
    );

    return (
        <section id="skills" className="py-24 px-4 relative bg-secondary/20">
            <div className="container mx-auto max-w-5xl relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.55 }}
                >
                    <h2 className="section-heading">
                        My <span className="text-gradient">Skills</span>
                    </h2>
                    <p className="text-center text-muted-foreground mb-10 max-w-xl mx-auto text-sm">
                        Technologies I actively use and am currently building proficiency in —
                        from frontend UIs to backend APIs, infrastructure, and embedded systems.
                    </p>
                </motion.div>

                {/* Category filter */}
                <motion.div
                    className="flex flex-wrap justify-center gap-2 mb-10"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.15 }}
                >
                    {categories.map(({ key, label }) => (
                        <button
                            key={key}
                            onClick={() => setActiveCategory(key)}
                            className={cn(
                                "px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-250",
                                activeCategory === key
                                    ? "bg-primary text-primary-foreground shadow-[0_0_14px_rgba(139,92,246,0.35)]"
                                    : "bg-secondary/60 text-muted-foreground hover:text-foreground border border-border hover:border-primary/40"
                            )}
                        >
                            {label}
                        </button>
                    ))}
                </motion.div>

                <motion.div
                    key={activeCategory}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.05 }}
                >
                    {filteredSkills.map((skill) => (
                        <motion.div
                            key={skill.name}
                            variants={cardVariants}
                            whileHover={{ y: -3, transition: { duration: 0.2 } }}
                            className="glow-card p-5 hover:border-primary/35 hover:shadow-md hover:shadow-primary/8 text-left"
                        >
                            <div className="flex items-center justify-between mb-3">
                                <div className="flex items-center gap-2.5">
                                    <span className="text-lg leading-none">{skill.icon}</span>
                                    <span className="font-semibold text-sm font-heading">{skill.name}</span>
                                </div>
                                <span className={cn(
                                    "text-[10px] px-2 py-0.5 rounded-full border font-medium tracking-wide uppercase",
                                    levelColor(skill.level)
                                )}>
                                    {levelLabel(skill.level)}
                                </span>
                            </div>

                            <div className="w-full bg-secondary/70 h-1.5 rounded-full overflow-hidden">
                                <motion.div
                                    className="h-1.5 rounded-full bg-linear-to-r from-primary to-violet-400"
                                    initial={{ width: "0%" }}
                                    whileInView={{ width: `${skill.level}%` }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
                                />
                            </div>

                            <div className="text-right mt-1.5">
                                <span className="text-[11px] text-muted-foreground">{skill.level}%</span>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};
