import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight, ChevronDown, Github, Linkedin, Twitter, Facebook, FileText, Download } from "lucide-react";

import { FaWhatsapp } from "react-icons/fa";

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
        <section id="home" className="relative min-h-screen flex items-center section-padding overflow-hidden mt-6 md:mt-12">
            {/* Social Icons Left Side */}
            <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 1 }}
                className="hidden xl:flex flex-col items-center gap-6 absolute left-10 top-1/2 -translate-y-1/2 z-50"
            >
                {[
                    { icon: <Github size={20} />, link: "https://github.com/Shefaul-22" },
                    { icon: <Linkedin size={20} />, link: "https://www.linkedin.com/in/mohammad-shefaul-karim-24b2b52ba" },
                    { icon: <FaWhatsapp size={20} />, link: "https://wa.me/8801300108645" },
                    { icon: <Twitter size={20} />, link: "#" },
                    { icon: <Facebook size={20} />, link: "#" }
                ].map((social, i) => (
                    <a
                        key={i}
                        href={social.link}
                        target="_blank"
                        className="text-muted-foreground hover:text-primary transition-all duration-300 hover:-translate-y-1"
                    >
                        {social.icon}
                    </a>
                ))}
                <div className="w-[1px] h-20 bg-gradient-to-b from-primary/50 to-transparent mt-2" />
            </motion.div>

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
                        <span className="w-2 h-2 rounded-full bg-primary font-bold animate-pulse" />
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
                            className="btn-primary-glow px-8 py-3 cursor-pointer rounded-xl text-primary-foreground font-semibold text-sm transition-all duration-300"
                        >
                            Send Hi 👋
                        </button>
                        <button
                            onClick={() => scrollTo("#projects")}
                            className="px-8 py-3 rounded-xl glass font-semibold cursor-pointer text-sm text-foreground transition-all duration-300 hover:scale-105 flex items-center gap-2"
                        >
                            View Projects <ArrowRight size={16} />
                        </button>
                    </div>

                    {/* --- Download CV Button --- */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 }}
                        className="pt-4"
                    >
                        <a
                            href="/resume.pdf"
                            download="Md_Shefaul_Karim_Resume.pdf"
                            className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-primary text-primary-foreground font-bold text-sm group transition-all duration-300 hover:shadow-[0_0_30px_rgba(var(--primary),0.4)] hover:scale-[1.02] active:scale-95"
                        >
                            <FileText size={18} className="group-hover:rotate-12 transition-transform" />
                            <span>Download Resume</span>
                            <Download size={18} className="ml-2 group-hover:translate-y-1 transition-transform" />
                        </a>
                    </motion.div>
                </motion.div>

                {/* Right Side Visuals */}
                <motion.div
                    initial={{ opacity: 0, x: 60 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
                    className="relative flex items-center justify-center mt-12 lg:mt-0"
                >
                    <div className="relative w-80 h-80">
                        {/* Animated Background Rings */}
                        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 animate-float" />
                        <div className="absolute inset-4 rounded-full glass animate-float" style={{ animationDelay: "0.5s" }} />

                        {/* --- Image Container --- */}
                        <div className="absolute inset-4 rounded-full overflow-hidden border-2 border-white/10 z-10 animate-float" style={{ animationDelay: "0.5s" }}>
                            <img
                                src="https://i.ibb.co.com/ym949rcg/01300108645.jpg" // Placeholder Image
                                alt="Md Shefaul Karim"
                                className="w-full h-full object-fit bg-primary/5"
                            />
                        </div>
                        {/* ----------------------- */}

                        {/* Dynamic Tech Badges */}
                        <motion.div
                            animate={{ y: [-10, 10, -10] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute -top-8 -right-8 glass-strong rounded-2xl px-5 py-3 shadow-2xl border-white/10 z-20"
                        >
                            <div className="text-xs font-bold font-mono text-primary uppercase tracking-tighter">React / Next.js</div>
                            <div className="text-[10px] text-muted-foreground">Expertise</div>
                        </motion.div>

                        <motion.div
                            animate={{ y: [10, -10, 10] }}
                            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute -bottom-4 -left-8 glass-strong rounded-2xl px-5 py-3 shadow-2xl border-white/10 z-20"
                        >
                            <div className="text-xs font-bold font-mono text-accent uppercase tracking-tighter">Node.js | Java</div>
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