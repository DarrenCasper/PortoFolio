import { motion } from "framer-motion";
import { cn } from "../utils/utils";

const orgs = [
    {
        role: "Ketua Divisi IJCA",
        org: "UKM IFLS ITS",
        orgFull: "ITS Foreign Language Society",
        period: "Dec 2025 – Present",
        type: "Leadership",
        description:
            "Led and coordinated IJCA division staff, ensured all division programs ran smoothly, and managed internal communication across the team.",
        color: "#16a34a",
        current: true,
        logo: null,
        initials: "IFLS",
    },
    {
        role: "Staff Ahli Kestari — INOCHI",
        org: "UKM IFLS ITS",
        orgFull: "ITS Foreign Language Society",
        period: "Apr 2026 – Present",
        type: "Event",
        description:
            "Coordinated member attendance across divisions, managed Google Forms, RSVP systems, event absenteeism tracking, and meeting minutes.",
        color: "#0ea5e9",
        current: true,
        logo: null,
        initials: "IFLS",
    },
    {
        role: "Asisten Praktikum Rangkaian Digital",
        org: "Lab-B401",
        orgFull: "Teknik Komputer ITS",
        period: "Apr 2026 – Present",
        type: "Academic",
        description:
            "Assisted in creating digital circuit laboratory modules and supervised the practicum sessions for Computer Engineering students.",
        color: "#7c3aed",
        current: true,
        logo: null,
        initials: "ITS",
    },
    {
        role: "Tutor Private",
        org: "CSSMORA ITS",
        orgFull: "Colosseum Santri ITS",
        period: "Feb 2026 – Present",
        type: "Academic",
        description:
            "Taught 5 subjects to Computer Engineering 2025-batch members, supporting their academic performance through private tutoring sessions.",
        color: "#d97706",
        current: true,
        logo: null,
        initials: "CSSM",
    },
    {
        role: "Staff Side Competition — Competitive Programming",
        org: "MAGE 11",
        orgFull: "Multimedia, Art, and Games Exhibition",
        period: "Feb 2025 – Nov 2025",
        type: "Event",
        description:
            "Supported side competition planning and competitive programming problem creation. Coordinated logistics, event flow, and participant preparation.",
        color: "#ea580c",
        current: false,
        logo: null,
        initials: "MAGE",
    },
    {
        role: "Panitia",
        org: "CEC Season 1 — HIMATEKKOM ITS",
        orgFull: "Computer Engineering Championship",
        period: "Oct – Nov 2025",
        type: "Event",
        description:
            "Supported the Computer Engineering Championship department competition series and coordinated operational needs for event execution.",
        color: "#2563eb",
        current: false,
        logo: null,
        initials: "HK",
    },
    {
        role: "Organizer",
        org: "Workshop ML for Assistive Tech",
        orgFull: "Dept. Teknik Komputer ITS",
        period: "Nov 2025",
        type: "Event",
        description:
            "Organized a workshop on machine learning applied to assistive technology within the ITS Computer Engineering Department.",
        color: "#0891b2",
        current: false,
        logo: null,
        initials: "TK",
    },
    {
        role: "Staff Divisi IJCA",
        org: "UKM IFLS ITS",
        orgFull: "ITS Foreign Language Society",
        period: "Mar 2025 – Jan 2026",
        type: "Teaching",
        description:
            "Assisted Japanese language classes as a teacher/assistant. Supported oversight of Japanese cultural competitions and coordinated internal division needs.",
        color: "#16a34a",
        current: false,
        logo: null,
        initials: "IFLS",
    },
];

const typeConfig = {
    Leadership: "bg-violet-500/10 text-violet-400 border-violet-500/20",
    Event: "bg-sky-500/10 text-sky-400 border-sky-500/20",
    Academic: "bg-amber-500/10 text-amber-400 border-amber-500/20",
    Teaching: "bg-green-500/10 text-green-400 border-green-500/20",
};

const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.08 } },
};

const itemVariants = {
    hidden: { opacity: 0, x: -24 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.45, ease: "easeOut" } },
};

export const OrganizationsSection = () => {
    return (
        <section id="organizations" className="py-20 px-4 relative bg-secondary/20">
            <div className="container mx-auto max-w-4xl">
                <motion.div
                    initial={{ opacity: 0, y: 28 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.55 }}
                >
                    <h2 className="section-heading">
                        Organizations &amp; <span className="text-gradient">Experience</span>
                    </h2>
                    <p className="text-center text-muted-foreground mb-12 max-w-xl mx-auto text-sm">
                        Roles I've taken on across student organizations, competitions, and academic activities at ITS.
                    </p>
                </motion.div>

                {/* Timeline */}
                <motion.div
                    className="relative"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.05 }}
                >
                    {/* Vertical line */}
                    <div className="absolute left-4.5 top-0 bottom-0 w-px bg-linear-to-b from-primary/40 via-border to-transparent md:left-5.5" />

                    <div className="space-y-6">
                        {orgs.map((org) => (
                            <motion.div
                                key={`${org.role}-${org.period}`}
                                variants={itemVariants}
                                className="flex gap-4 md:gap-6 relative group"
                            >
                                {/* Dot + logo */}
                                <div className="shrink-0 mt-1 relative z-10">
                                    <div
                                        className="w-9 h-9 md:w-11 md:h-11 rounded-xl border-2 border-background flex items-center justify-center text-white text-[10px] font-bold shadow-md shrink-0 font-heading"
                                        style={{ background: org.color }}
                                    >
                                        {org.logo ? (
                                            <img src={org.logo} alt={org.org} className="w-full h-full object-contain rounded-lg" />
                                        ) : (
                                            org.initials
                                        )}
                                    </div>
                                    {org.current && (
                                        <span className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-green-400 border-2 border-background" />
                                    )}
                                </div>

                                {/* Content */}
                                <div className="flex-1 pb-2">
                                    <div className="glow-card p-4 hover:border-primary/30 hover:shadow-md hover:shadow-primary/5 group-hover:-translate-y-0.5 transition-transform duration-200 text-left">
                                        <div className="flex flex-wrap items-start justify-between gap-2 mb-1.5">
                                            <div>
                                                <h3 className="font-bold text-sm font-heading leading-tight">{org.role}</h3>
                                                <p className="text-xs text-primary font-medium mt-0.5">{org.org}</p>
                                                <p className="text-[11px] text-muted-foreground">{org.orgFull}</p>
                                            </div>
                                            <div className="flex flex-col items-end gap-1.5 shrink-0">
                                                <span className={cn("text-[10px] px-2 py-0.5 rounded-full border font-medium", typeConfig[org.type])}>
                                                    {org.type}
                                                </span>
                                                <span className="text-[10px] text-muted-foreground whitespace-nowrap">
                                                    {org.period}
                                                </span>
                                            </div>
                                        </div>
                                        <p className="text-xs text-muted-foreground leading-relaxed mt-2">
                                            {org.description}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};
