import { ArrowRight, ExternalLink, Github } from "lucide-react";
import { motion } from "framer-motion";

const projects = [
    {
        id: 1,
        title: "VoucherIn — E-Commerce Platform",
        description:
            "Full-stack e-commerce web app with product catalog, voucher system (% / fixed / shipping), shopping cart, JWT auth, and an admin dashboard with sales analytics.",
        gradient: "from-violet-600/20 via-purple-500/10 to-indigo-600/20",
        tags: ["React", "Node.js", "Express", "MySQL", "Tailwind", "JWT"],
        image: "/Images/ecommerce.png",
        demoUrl: "#",
        githubUrl: "https://github.com/DarrenCasper/E-Commerce-Website",
        featured: true,
    },
    {
        id: 2,
        title: "AI Anime Assistant",
        description:
            "Web-based anime search and recommendation platform with an integrated AI chat assistant that helps users discover and discuss anime titles.",
        gradient: "from-sky-500/20 via-cyan-500/10 to-blue-600/20",
        tags: ["JavaScript", "Node.js", "Express", "AI API"],
        image: "/Images/Animate.png",
        demoUrl: "#",
        githubUrl: "https://github.com/DarrenCasper/AI-Anime-Assistant",
        featured: true,
    },
    {
        id: 3,
        title: "FlexiNode — Smart Delivery",
        description:
            "Smart last-mile delivery demo app with traffic-aware route tracking and QR-code-based package handoff, built as a mobile-first experience.",
        gradient: "from-emerald-600/20 via-teal-500/10 to-cyan-600/20",
        tags: ["Flutter", "Dart", "Firebase"],
        image: "/Images/flexinode.jpeg",
        demoUrl: "#",
        githubUrl: "https://github.com/DarrenCasper",
        featured: false,
    },
    {
        id: 4,
        title: "Echo's Realm",
        description:
            "A 2D platformer game featuring a unique realm-switching mechanic — switch between the physical and echo realms to solve puzzles and defeat enemies.",
        image: "/Images/Images3.jpeg",
        tags: ["C++", "SFML"],
        demoUrl: "#",
        githubUrl: "https://github.com/DarrenCasper/SFML-Echo-s-Realm",
        featured: false,
    },
    {
        id: 5,
        title: "Anime Countdown",
        description:
            "A functional anime schedule countdown website built with vanilla JavaScript — my first real web project.",
        image: "/Images/Images1.png",
        tags: ["HTML", "CSS", "JavaScript"],
        demoUrl: "https://darrencasper.github.io/anime-countdown/",
        githubUrl: "https://github.com/DarrenCasper/anime-countdown",
        featured: false,
    },
    {
        id: 6,
        title: "Noa AI",
        description:
            "A conversational AI chatbot assistant built with Node.js on the backend, featuring natural language interactions and an intuitive chat interface.",
        gradient: "from-rose-500/20 via-pink-400/10 to-fuchsia-500/20",
        tags: ["JavaScript", "Node.js", "AI API"],
        image: "/Images/noa.png",
        demoUrl: "#",
        githubUrl: "https://github.com/DarrenCasper/Noa_AI",
        featured: false,
    },
];

const tagColors = {
    React: "bg-sky-500/10 text-sky-400 border-sky-500/20",
    "Node.js": "bg-green-500/10 text-green-400 border-green-500/20",
    Express: "bg-slate-500/10 text-slate-300 border-slate-500/20",
    MySQL: "bg-orange-500/10 text-orange-400 border-orange-500/20",
    Tailwind: "bg-cyan-500/10 text-cyan-400 border-cyan-500/20",
    JWT: "bg-yellow-500/10 text-yellow-400 border-yellow-500/20",
    JavaScript: "bg-yellow-500/10 text-yellow-400 border-yellow-500/20",
    "AI API": "bg-violet-500/10 text-violet-400 border-violet-500/20",
    Flutter: "bg-blue-500/10 text-blue-400 border-blue-500/20",
    Dart: "bg-blue-500/10 text-blue-300 border-blue-500/20",
    Firebase: "bg-amber-500/10 text-amber-400 border-amber-500/20",
    "C++": "bg-purple-500/10 text-purple-400 border-purple-500/20",
    SFML: "bg-green-600/10 text-green-300 border-green-600/20",
    HTML: "bg-orange-500/10 text-orange-400 border-orange-500/20",
    CSS: "bg-blue-500/10 text-blue-400 border-blue-500/20",
    Python: "bg-yellow-500/10 text-yellow-300 border-yellow-500/20",
    UDP: "bg-slate-500/10 text-slate-300 border-slate-500/20",
    Networking: "bg-teal-500/10 text-teal-400 border-teal-500/20",
};

const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1 } },
};

const cardVariants = {
    hidden: { opacity: 0, y: 32 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const ProjectCard = ({ project }) => {
    const hasImage = !!project.image;

    return (
        <motion.div
            variants={cardVariants}
            whileHover={{ y: -4, transition: { duration: 0.2 } }}
            className="group glow-card overflow-hidden hover:border-primary/35 hover:shadow-xl hover:shadow-primary/8 flex flex-col"
        >
            {/* Thumbnail */}
            <div className="relative h-44 overflow-hidden shrink-0">
                {hasImage ? (
                    <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                ) : (
                    <div className={`w-full h-full bg-linear-to-br ${project.gradient} flex items-center justify-center`}>
                        <span className="text-4xl opacity-30 select-none">{ }</span>
                    </div>
                )}

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-background/80 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center gap-3">
                    {project.demoUrl !== "#" && (
                        <a
                            href={project.demoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-primary text-primary-foreground text-xs font-semibold hover:shadow-[0_0_14px_rgba(139,92,246,0.5)] transition-all hover:scale-105"
                        >
                            <ExternalLink size={12} /> Live Demo
                        </a>
                    )}
                    <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 px-4 py-2 rounded-full border border-border bg-card/90 text-xs font-semibold hover:border-primary hover:text-primary transition-all hover:scale-105"
                    >
                        <Github size={12} /> Code
                    </a>
                </div>

                {project.featured && (
                    <span className="absolute top-3 left-3 px-2.5 py-0.5 rounded-full bg-primary/90 text-primary-foreground text-[10px] font-semibold tracking-wide uppercase">
                        Featured
                    </span>
                )}
            </div>

            {/* Content */}
            <div className="p-5 flex flex-col flex-1">
                <div className="flex flex-wrap gap-1.5 mb-3">
                    {project.tags.map((tag) => (
                        <span
                            key={tag}
                            className={`px-2 py-0.5 text-[10px] font-medium border rounded-full ${tagColors[tag] ?? "bg-secondary text-secondary-foreground border-border"}`}
                        >
                            {tag}
                        </span>
                    ))}
                </div>
                <h3 className="text-base font-bold text-left mb-1.5 font-heading leading-tight">{project.title}</h3>
                <p className="text-muted-foreground text-sm text-left leading-relaxed flex-1">
                    {project.description}
                </p>
            </div>
        </motion.div>
    );
};

export const ProjectsSection = () => {
    return (
        <section id="projects" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.55 }}
                >
                    <h2 className="section-heading">
                        Featured <span className="text-gradient">Projects</span>
                    </h2>
                    <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto text-sm">
                        Things I've built — ranging from full-stack web apps and mobile apps
                        to games and networking projects.
                    </p>
                </motion.div>

                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.05 }}
                >
                    {projects.map((project) => (
                        <ProjectCard key={project.id} project={project} />
                    ))}
                </motion.div>

                <motion.div
                    className="text-center mt-12"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                >
                    <a
                        className="cosmic-button inline-flex items-center gap-2"
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://github.com/DarrenCasper"
                    >
                        View All on GitHub <ArrowRight size={15} />
                    </a>
                </motion.div>
            </div>
        </section>
    );
};
