import { Trophy, Medal, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

const competitions = [
    {
        id: 1,
        name: "GEMASTIK",
        subtitle: "Garapan Mahasiswa di bidang Teknologi Informatika dan Komunikasi",
        organizer: "Kemdikbud Ristek RI",
        year: "2026",
        category: "UI/UX Design",
        role: "Peserta — UI/UX Designer",
        theme:
            "SuaraKita: Desain UX Aplikasi Pendamping Orang Tua dan Terapis untuk Memahami Kebutuhan Emosional Anak dengan Autisme Tanpa Kata",
        themeEn:
            "SuaraKita — a UX companion app helping parents & therapists understand the emotional needs of non-verbal children with autism.",
        status: "ongoing",
        statusLabel: "Ongoing",
        color: "from-violet-500 to-purple-600",
        bgGlow: "rgba(139,92,246,0.12)",
        icon: "/Images/logo-gemastik.png",
    },
    {
        id: 2,
        name: "DataQuest 4.0",
        subtitle: "Data Science & Analytics Competition",
        organizer: "Universitas Airlangga (UNAIR)",
        year: "23 Agustus - 21 September 2025",
        category: "Data Science",
        role: "Finalis",
        theme: "Data analysis and machine learning challenge organized by UNAIR.",
        themeEn: null,
        status: "finalist",
        statusLabel: "Finalist",
        color: "from-sky-500 to-blue-600",
        bgGlow: "rgba(14,165,233,0.10)",
        icon: "/Images/Logo-Branding-UNAIR-biru.png",
    },
];

const statusConfig = {
    ongoing: { label: "Ongoing", className: "bg-green-500/15 text-green-400 border-green-500/25" },
    finalist: { label: "Finalist 🏆", className: "bg-amber-500/15 text-amber-400 border-amber-500/25" },
    winner: { label: "Winner 🥇", className: "bg-yellow-500/15 text-yellow-400 border-yellow-500/25" },
};

const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
        opacity: 1,
        y: 0,
        transition: { delay: i * 0.15, duration: 0.5, ease: "easeOut" },
    }),
};

export const AchievementsSection = () => {
    return (
        <section id="achievements" className="py-20 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <motion.div
                    initial={{ opacity: 0, y: 28 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.55 }}
                >
                    <h2 className="section-heading">
                        Competitions &amp; <span className="text-gradient">Achievements</span>
                    </h2>
                    <p className="text-center text-muted-foreground mb-12 max-w-xl mx-auto text-sm">
                        Competitions I've participated in, pushing my skills beyond coursework.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {competitions.map((comp, i) => {
                        const status = statusConfig[comp.status];
                        return (
                            <motion.div
                                key={comp.id}
                                custom={i}
                                variants={cardVariants}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.15 }}
                                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                                className="glow-card p-6 hover:border-primary/35 hover:shadow-xl hover:shadow-primary/8 relative overflow-hidden text-left"
                            >
                                {/* Subtle gradient background */}
                                <div
                                    className="absolute inset-0 opacity-30 rounded-xl"
                                    style={{ background: `radial-gradient(ellipse at top left, ${comp.bgGlow}, transparent 70%)` }}
                                />

                                <div className="relative z-10">
                                    {/* Header */}
                                    <div className="flex items-start justify-between gap-3 mb-4">
                                        <div className="flex items-center gap-3">
                                            <div className={`w-11 h-11 rounded-xl bg-linear-to-br ${comp.color} flex items-center justify-center text-xl shrink-0 shadow-md`}>
                                                <img src={comp.icon} alt={comp.icon} className="w-full h-full object-contain rounded-lg" />
                                            </div>
                                            <div>
                                                <h3 className="font-bold text-base font-heading leading-tight">{comp.name}</h3>
                                                <p className="text-xs text-muted-foreground mt-0.5">{comp.organizer} · {comp.year}</p>
                                            </div>
                                        </div>
                                        <span className={`text-[10px] px-2.5 py-1 rounded-full border font-semibold shrink-0 ${status.className}`}>
                                            {status.label}
                                        </span>
                                    </div>

                                    {/* Category + Role */}
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        <span className="text-[11px] px-2 py-0.5 rounded-full bg-primary/10 text-primary border border-primary/20 font-medium">
                                            {comp.category}
                                        </span>
                                        <span className="text-[11px] px-2 py-0.5 rounded-full bg-secondary text-muted-foreground border border-border font-medium">
                                            {comp.role}
                                        </span>
                                    </div>

                                    {/* Theme */}
                                    <div className="p-3 rounded-lg bg-secondary/50 border border-border/60">
                                        <p className="text-xs text-muted-foreground leading-relaxed italic">
                                            "{comp.theme}"
                                        </p>
                                        {comp.themeEn && (
                                            <p className="text-xs text-foreground/70 mt-1.5 leading-relaxed">
                                                {comp.themeEn}
                                            </p>
                                        )}
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>

                {/* Training highlights */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="mt-8"
                >
                    <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-widest text-center mb-5">
                        Certifications &amp; Training
                    </h3>
                    <div className="flex flex-wrap justify-center gap-2.5">
                        {[
                            "Workshop on Machine Learning for Assistive Technology",
                            "Python Programming — HIMATEKKOM ITS",
                            "Webinar: Future-Ready Web Development — GENICS 2024",
                            "Guest Lecture: ML & RL for Connected Vehicles",
                            "LKMM Pra-TD V — FTEIC ITS",
                            "LKMW — ITS",
                        ].map((cert) => (
                            <span
                                key={cert}
                                className="text-xs px-3 py-1.5 rounded-full border border-border bg-card text-muted-foreground hover:border-primary/40 hover:text-foreground transition-colors duration-200"
                            >
                                {cert}
                            </span>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};
