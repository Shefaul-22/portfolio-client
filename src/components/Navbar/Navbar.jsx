import { useState, useEffect, forwardRef } from "react";
import { NavLink as RouterNavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Moon, Sun } from "lucide-react";
import { cn } from "@/lib/utils";
import useTheme from "@/hooks/useTheme";

const NavLink = forwardRef(({ className, activeClassName, pendingClassName, to, ...props }, ref) => {
    return (
        <RouterNavLink
            ref={ref}
            to={to}
            className={({ isActive, isPending }) =>
                cn(className, isActive && activeClassName, isPending && pendingClassName)
            }
            {...props}
        />
    );
});
NavLink.displayName = "NavLink";

const navLinks = [
    { label: "Home", href: "#home" },
    { label: "Services", href: "#services" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Certificate", href: "#certificate" },

    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
];

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("home");
    const { theme, setTheme } = useTheme();

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        const observerOptions = {
            root: null,
            rootMargin: "-10% 0px -40% 0px",
            threshold: [0.1, 0.5],
        };

        const observerCallback = (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting && entry.intersectionRatio > 0.1) {
                    setActiveSection(entry.target.id);
                }
            });
        };

        const observer = new IntersectionObserver(observerCallback, observerOptions);

        navLinks.forEach(({ href }) => {
            const el = document.querySelector(href);
            if (el) observer.observe(el);
        });

        return () => observer.disconnect();
    }, []);

    const scrollTo = (href) => {
        setMobileOpen(false);
        const id = href.replace("#", "");
        const el = document.getElementById(id);

        if (el) {
            const offset = 100;
            const bodyRect = document.body.getBoundingClientRect().top;
            const elementRect = el.getBoundingClientRect().top;
            const elementPosition = elementRect - bodyRect;
            const offsetPosition = elementPosition - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            });

            setActiveSection(id);
        }
    };

    return (
        <motion.nav
            initial={{ y: -100, x: "-50%", opacity: 0 }}
            animate={{ y: 0, x: "-50%", opacity: 1 }}
            transition={{ duration: 0.8, ease: "circOut" }}
            className={cn(
                "fixed top-6 left-1/2 z-50 transition-all duration-500 rounded-full border",
                "w-[92%] max-w-6xl mx-auto",
                scrolled
                    ? "bg-background/60 backdrop-blur-md border-white/10 shadow-xl py-2 px-6" // Glassmorphism komano hoyeche ekhane
                    : "bg-white/5 backdrop-blur-md border-white/10 py-4 px-8"
            )}
        >
            <div className="flex items-center justify-between gap-4">
                <div
                    onClick={() => scrollTo("#home")}
                    className=" w-14 h-14 rounded-full"
                >
                    <img

                        className="w-14 h-14 rounded-full"

                        src="https://i.ibb.co.com/KtMj2J8/extra-large.png" alt="Logo image" />
                </div>

                <div className="hidden md:flex items-center gap-4 bg-white/7 rounded-full px-3 py-1 border border-white/5">
                    {
                        navLinks.map(({ label, href }) => (
                            <button
                                key={href}
                                onClick={() => scrollTo(href)}
                                className={cn(
                                    "relative px-5 py-2 text-sm font-medium transition-all duration-300 rounded-full cursor-pointer",
                                    activeSection === href.slice(1)
                                        ? "text-primary"
                                        : "text-foreground/70 hover:text-foreground"
                                )}
                            >
                                {label}
                                {
                                    activeSection === href.slice(1) && (
                                        <motion.div
                                            layoutId="activeNav"
                                            className="absolute inset-0 bg-primary/10 rounded-full border border-primary/20 -z-10"
                                            transition={{ type: "spring", stiffness: 380, damping: 30 }}
                                        />
                                    )}
                            </button>
                        ))}
                </div>

                <div className="flex items-center gap-3">
                    <button
                        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                        className="p-2.5 rounded-full bg-white/5 border border-white/10 text-muted-foreground hover:text-primary transition-all active:scale-90"
                    >
                        {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
                    </button>

                    <button
                        onClick={() => setMobileOpen(!mobileOpen)}
                        className="md:hidden p-2.5 rounded-full bg-white/5 border border-white/10 text-muted-foreground transition-all"
                    >
                        {mobileOpen ? <X size={22} /> : <Menu size={22} />}
                    </button>
                </div>
            </div>

            <AnimatePresence>
                {
                    mobileOpen && (
                        <motion.div
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 15 }}
                            className="absolute top-[110%] left-0 right-0 bg-background/95 backdrop-blur-sm rounded-3xl overflow-hidden md:hidden border border-white/10 shadow-2xl"
                        >
                            <div className="p-4 flex flex-col gap-2">
                                {navLinks.map(({ label, href }) => (
                                    <button
                                        key={href}
                                        onClick={() => scrollTo(href)}
                                        className={cn(
                                            "w-full text-center px-4 py-4 rounded-2xl text-base font-medium transition-all",
                                            activeSection === href.slice(1)
                                                ? "bg-primary/10 text-primary border border-primary/20"
                                                : "hover:bg-white/5 text-muted-foreground"
                                        )}
                                    >
                                        {label}
                                    </button>
                                ))}
                            </div>
                        </motion.div>
                    )}
            </AnimatePresence>
        </motion.nav>
    );
};

export default Navbar;