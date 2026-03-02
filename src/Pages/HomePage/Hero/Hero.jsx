import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";

const roles = ["Frontend Developer", "Backend Engineer", "Full Stack Developer", "UI/UX Enthusiast"];

const Hero = () => {
    const [roleIndex, setRoleIndex] = useState(0);
    const [text, setText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const currentRole = roles[roleIndex];

        const determineSpeed = () => {
            if (isDeleting) return 50;
            if (text === currentRole) return 2000;
            return 100;
        };

        const timeout = setTimeout(() => {
            if (!isDeleting && text === currentRole) {
                setIsDeleting(true);
            } else if (isDeleting && text === "") {
                setIsDeleting(false);
                setRoleIndex((prev) => (prev + 1) % roles.length);
            } else {
                
                setText((prev) => {
                    const nextText = isDeleting
                        ? currentRole.slice(0, prev.length - 1)
                        : currentRole.slice(0, prev.length + 1);
                    return nextText;
                });
            }
        }, determineSpeed());

        return () => clearTimeout(timeout);

        
    }, [text, isDeleting, roleIndex]);

    const scrollTo = (href) => {
        const id = href.replace("#", "");
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <section id="home" className="relative min-h-screen flex items-center section-padding overflow-hidden">
            {/* Background gradient orbs */}
            <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-primary/10 blur-[120px] animate-glow-pulse" />
            <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-accent/10 blur-[120px] animate-glow-pulse" style={{ animationDelay: "1.5s" }} />

            <div className="w-full max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                {/* Left Side Content */}
                <motion.div
                    initial={{ opacity: 0, x: -60 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
                    className="z-10"
                >
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-sm text-muted-foreground mb-6"
                    >
                        <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                        Available for work
                    </motion.div>

                    <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight leading-[1.1] mb-4">
                        Hi, I'm <span className="text-gradient font-black">Md Shefaul Karim</span>
                    </h1>

                    <div className="h-8 mb-6 flex items-center">
                        <span className="font-mono text-xl text-primary font-medium">
                            {text}
                            <span className="animate-pulse ml-1 inline-block w-1 h-6 bg-primary opacity-70">|</span>
                        </span>
                    </div>

                    <p className="text-muted-foreground text-lg max-w-lg mb-8 leading-relaxed">
                        Crafting exceptional digital experiences with clean code and thoughtful design.
                        Specializing in modern web applications that push boundaries.
                    </p>

                    <div className="flex flex-wrap gap-4">
                        <button
                            onClick={() => scrollTo("#contact")}
                            className="btn-primary-glow px-8 py-3 rounded-xl text-primary-foreground font-semibold text-sm transition-all duration-300"
                        >
                            Send Hi 👋
                        </button>
                        <button
                            onClick={() => scrollTo("#projects")}
                            className="px-8 py-3 rounded-xl glass font-semibold text-sm text-foreground transition-all duration-300 hover:scale-105 flex items-center gap-2"
                        >
                            View Projects <ArrowRight size={16} />
                        </button>
                    </div>
                </motion.div>

                {/* Right Side Visuals */}
                <motion.div
                    initial={{ opacity: 0, x: 60 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
                    className="relative hidden lg:flex items-center justify-center"
                >
                    <div className="relative w-80 h-80">
                        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 animate-float" />
                        <div className="absolute inset-4 rounded-full glass animate-float" style={{ animationDelay: "0.5s" }} />

                        {/* Dynamic Tech Badges */}
                        <motion.div
                            animate={{ y: [-10, 10, -10] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute -top-8 -right-8 glass-strong rounded-2xl px-5 py-3 shadow-2xl border-white/10"
                        >
                            <div className="text-xs font-bold font-mono text-primary uppercase tracking-tighter">React</div>
                            <div className="text-[10px] text-muted-foreground">Expertise</div>
                        </motion.div>

                        <motion.div
                            animate={{ y: [10, -10, 10] }}
                            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute -bottom-4 -left-8 glass-strong rounded-2xl px-5 py-3 shadow-2xl border-white/10"
                        >
                            <div className="text-xs font-bold font-mono text-accent uppercase tracking-tighter">Node.js</div>
                            <div className="text-[10px] text-muted-foreground">Backend</div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>

            {/* Animated Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2"
            >
                <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="flex flex-col items-center gap-2 text-muted-foreground cursor-pointer group"
                    onClick={() => scrollTo("#about")}
                >
                    <span className="text-[10px] font-mono uppercase tracking-[0.2em] group-hover:text-primary transition-colors">Explore</span>
                    <ChevronDown size={18} className="group-hover:text-primary transition-colors" />
                </motion.div>
            </motion.div>
        </section>
    );
};

export default Hero;