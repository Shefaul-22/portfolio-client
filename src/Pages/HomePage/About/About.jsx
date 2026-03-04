import React from "react";
import { motion } from "framer-motion";

import { User, Code2, Trophy, Terminal, Cpu, Target, Rocket, ShieldCheck, FileText, Download } from "lucide-react";

const stats = [
    { label: "Years of Experience", value: "1+", icon: Trophy },
    { label: "Projects Delivered", value: "10+", icon: Code2 },
    { label: "Core Technologies", value: "12+", icon: Terminal },
];

const skills = [
    "React.js", "Next.js", "Node.js", "Express.js",
    "MongoDB", "Tailwind CSS", "TypeScript", "Framer Motion",
    "DSA", "OOP", "C++ (CP)", "Git & GitHub"
];

const About = () => {
    return (
        <section id="about" className="relative py-24 px-6 overflow-hidden bg-background transition-colors duration-500">
            {/* Background Glows */}
            <div className="absolute top-1/4 right-0 w-[500px] h-[500px] rounded-full bg-primary/10 dark:bg-primary/5 blur-[120px] -z-10 animate-pulse" />
            <div className="absolute bottom-0 left-0 w-[300px] h-[300px] rounded-full bg-accent/10 dark:bg-accent/5 blur-[100px] -z-10" />

            <div className="max-w-6xl mx-auto relative">
                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    {/* Left Side: Visual Storytelling */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative"
                    >
                        <div className="relative w-full aspect-[4/5] max-w-md mx-auto lg:mx-0">
                            <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-br from-primary/30 to-accent/30 rotate-6 border border-primary/10 dark:border-white/5" />

                            <div className="absolute inset-0 rounded-[2.5rem] glass overflow-hidden border border-black/5 dark:border-white/10 group shadow-2xl">
                                <img
                                    src="https://i.ibb.co.com/ym949rcg/01300108645.jpg"
                                    alt="Md Shefaul Karim"
                                    className="w-full h-full object-cover transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
                            </div>

                            <motion.div
                                animate={{ y: [0, -15, 0] }}
                                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute -bottom-6 -right-6 glass-strong p-6 rounded-3xl border border-primary/20 dark:border-white/10 shadow-2xl backdrop-blur-2xl z-20"
                            >
                                <div className="flex items-center gap-4">
                                    <div className="p-3 bg-primary/10 dark:bg-primary/20 rounded-2xl shadow-inner">
                                        <ShieldCheck className="text-primary" size={28} />
                                    </div>
                                    <div>
                                        <div className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground font-black">Quality Assurance</div>
                                        <div className="text-base font-extrabold text-foreground uppercase tracking-tight">Clean & Robust Code</div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>

                    {/* Right Side: Professional Narrative */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full glass border border-primary/20 dark:border-white/10 text-xs font-black uppercase tracking-[0.2em] text-primary mb-10 shadow-sm">
                            <Rocket size={14} className="animate-bounce" />
                            <span>About My Professional DNA</span>
                        </div>

                        <h2 className="text-4xl md:text-6xl font-black mb-8 tracking-tighter text-foreground leading-[1.1]">
                            Turning Complex Problems into <span className="text-gradient">Scalable Solutions</span>
                        </h2>

                        <div className="space-y-6 text-muted-foreground text-lg leading-relaxed font-medium">
                            <p>
                                I am <span className="text-foreground font-bold underline decoration-primary/30 underline-offset-4">Md Shefaul Karim</span>, a Full Stack Developer specializing in architecting high-performance digital experiences. My foundation in <span className="text-primary font-bold">Competitive Programming</span> has ingrained a "performance-first" mindset, allowing me to build systems that are as efficient as they are elegant.
                            </p>

                            <p>
                                For me, development isn't just about writing code; it's about solving business challenges through technology. By leveraging deep expertise in <span className="text-foreground font-bold italic">Data Structures (DSA)</span> and <span className="text-foreground font-bold italic">System Architecture (OOP)</span>, I ensure that every application I deliver is optimized for speed, security, and long-term scalability.
                            </p>
                        </div>

                        {/* Metrics Grid */}
                        <div className="grid grid-cols-3 gap-4 my-12">
                            {stats.map((stat, i) => (
                                <div key={i} className="glass p-5 rounded-3xl border border-black/5 dark:border-white/5 hover:border-primary/40 transition-all duration-500 group relative overflow-hidden">
                                    <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                                    <stat.icon size={24} className="text-primary mb-4 group-hover:scale-110 group-hover:rotate-6 transition-transform" />
                                    <div className="text-2xl font-black text-foreground mb-1 tracking-tight">{stat.value}</div>
                                    <div className="text-[10px] uppercase tracking-widest text-muted-foreground font-bold">{stat.label}</div>
                                </div>
                            ))}
                        </div>

                        {/* Skills Matrix */}
                        <div className="space-y-8">
                            <div className="space-y-6">
                                <div className="flex items-center gap-4">
                                    <span className="text-[11px] font-black uppercase tracking-[0.5em] text-muted-foreground/60 whitespace-nowrap">Technical Arsenal</span>
                                    <div className="h-[1px] w-full bg-gradient-to-r from-primary/20 to-transparent" />
                                </div>
                                <div className="flex flex-wrap gap-2.5">
                                    {skills.map((skill) => (
                                        <span
                                            key={skill}
                                            className="text-[10px] font-black px-5 py-2.5 glass rounded-xl border border-black/5 dark:border-white/10 hover:border-primary/50 hover:text-primary transition-all duration-300 cursor-default text-muted-foreground uppercase tracking-[0.15em]"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
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
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;