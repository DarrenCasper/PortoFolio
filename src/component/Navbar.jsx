import { cn } from "../utils/utils";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#organizations" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
];

export const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileOpen, setIsMobileOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("hero");

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        const sectionIds = navItems.map((item) => item.href.slice(1));
        const observers = [];

        sectionIds.forEach((id) => {
            const el = document.getElementById(id);
            if (!el) return;
            const observer = new IntersectionObserver(
                ([entry]) => {
                    if (entry.isIntersecting) setActiveSection(id);
                },
                { rootMargin: "-40% 0px -55% 0px" }
            );
            observer.observe(el);
            observers.push(observer);
        });

        return () => observers.forEach((o) => o.disconnect());
    }, []);

    // Lock body scroll when mobile menu is open
    useEffect(() => {
        document.body.style.overflow = isMobileOpen ? "hidden" : "";
        return () => { document.body.style.overflow = ""; };
    }, [isMobileOpen]);

    return (
        <nav
            className={cn(
                "fixed w-full z-40 transition-all duration-300",
                isScrolled
                    ? "py-3 bg-background/80 backdrop-blur-md shadow-sm border-b border-border/50"
                    : "py-5"
            )}
        >
            <div className="container flex items-center justify-between">
                <a
                    className="text-xl font-bold flex items-center gap-1"
                    href="#hero"
                    onClick={() => setIsMobileOpen(false)}
                >
                    <span className="text-gradient-animated font-extrabold">DarrenCasper</span>
                    <span className="text-foreground/70 font-medium text-base">.portofolio</span>
                </a>

                {/* Desktop nav */}
                <div className="hidden md:flex items-center space-x-1">
                    {navItems.map((item) => (
                        <a
                            key={item.name}
                            href={item.href}
                            className={cn(
                                "relative px-4 py-2 rounded-full text-sm font-medium transition-all duration-300",
                                activeSection === item.href.slice(1)
                                    ? "text-primary"
                                    : "text-foreground/70 hover:text-primary"
                            )}
                        >
                            {item.name}
                            {activeSection === item.href.slice(1) && (
                                <motion.span
                                    layoutId="nav-indicator"
                                    className="absolute inset-0 rounded-full bg-primary/10"
                                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                                />
                            )}
                        </a>
                    ))}
                </div>

                {/* Mobile hamburger */}
                <button
                    className="md:hidden p-2 rounded-lg text-foreground/70 hover:text-primary hover:bg-primary/10 transition-colors"
                    onClick={() => setIsMobileOpen((v) => !v)}
                    aria-label="Toggle menu"
                >
                    {isMobileOpen ? <X size={22} /> : <Menu size={22} />}
                </button>
            </div>

            {/* Mobile menu */}
            <AnimatePresence>
                {isMobileOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.25, ease: "easeInOut" }}
                        className="md:hidden overflow-hidden bg-background/95 backdrop-blur-md border-b border-border/50"
                    >
                        <div className="container py-4 flex flex-col gap-1">
                            {navItems.map((item, i) => (
                                <motion.a
                                    key={item.name}
                                    href={item.href}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.06 }}
                                    onClick={() => setIsMobileOpen(false)}
                                    className={cn(
                                        "px-4 py-3 rounded-lg text-sm font-medium transition-colors text-left",
                                        activeSection === item.href.slice(1)
                                            ? "text-primary bg-primary/10"
                                            : "text-foreground/70 hover:text-primary hover:bg-primary/5"
                                    )}
                                >
                                    {item.name}
                                </motion.a>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};
