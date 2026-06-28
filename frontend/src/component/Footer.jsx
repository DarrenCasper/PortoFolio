import { ArrowUp, Heart } from "lucide-react";
import { motion } from "framer-motion";

export const Footer = () => {
    return (
        <footer className="py-8 px-4 bg-card border-t border-border">
            <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="flex items-center gap-1.5 text-sm text-muted-foreground"
                >
                    <span>&copy; {new Date().getFullYear()}</span>
                    <span className="text-gradient-animated font-semibold">DarrenCasper</span>
                    <span>· Built with</span>
                    <span>using React & Tailwind</span>
                </motion.div>

                <a
                    href="#hero"
                    className="p-2.5 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-all duration-300 hover:scale-110 hover:shadow-[0_0_12px_rgba(139,92,246,0.3)]"
                    aria-label="Back to top"
                >
                    <ArrowUp size={18} />
                </a>
            </div>
        </footer>
    );
};
