import { Toaster } from "react-hot-toast";
import { Navbar } from "../component/Navbar";
import { ThemeToggle } from "../component/ThemeToggle";
import { StarBackground } from "../component/StarBackground";
import { HeroSection } from "../component/Hero";
import { AboutSection } from "../component/AboutSection";
import { SkillsSection } from "../component/Skill";
import { OrganizationsSection } from "../component/Organizations";
import { AchievementsSection } from "../component/Achievement";
import { ProjectsSection } from "../component/Project";
import { ContactSection } from "../component/Contact";
import { Footer } from "../component/Footer";

export const Home = () => {
    return (
        <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
            <Toaster
                position="top-right"
                toastOptions={{
                    style: {
                        background: "hsl(var(--card))",
                        color: "hsl(var(--foreground))",
                        border: "1px solid hsl(var(--border))",
                        borderRadius: "0.75rem",
                        fontSize: "0.875rem",
                    },
                    success: {
                        iconTheme: { primary: "#a78bfa", secondary: "hsl(var(--card))" },
                    },
                    error: {
                        iconTheme: { primary: "#f87171", secondary: "hsl(var(--card))" },
                    },
                }}
            />
            <ThemeToggle />
            <StarBackground />
            <Navbar />
            <main>
                <HeroSection />
                <AboutSection />
                <SkillsSection />
                <OrganizationsSection />
                <AchievementsSection />
                <ProjectsSection />
                <ContactSection />
            </main>
            <Footer />
        </div>
    );
};
