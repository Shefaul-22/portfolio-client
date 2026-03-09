import React from "react";
import { motion } from "framer-motion";
import { Code2, Trophy, Terminal, Rocket, ShieldCheck, Users, Coffee, Heart } from "lucide-react";

const stats = [
    { label: "Years of Experience", value: "1+", icon: Trophy },
    { label: "Projects Delivered", value: "10+", icon: Code2 },
    { label: "Core Technologies", value: "12+", icon: Terminal },
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

                    {/* Right Side: Professional & Personal Narrative */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full glass border border-primary/20 dark:border-white/10 text-xs font-black uppercase tracking-[0.2em] text-primary mb-8 shadow-sm">
                            <Rocket size={14} className="animate-bounce" />
                            <span>About My Professional DNA</span>
                        </div>

                        <h2 className="text-4xl md:text-5xl font-black mb-6 tracking-tighter text-foreground leading-[1.1]">
                            Turning Complex Problems into <span className="text-gradient">Scalable Solutions</span>
                        </h2>

                        <div className="space-y-4 text-muted-foreground text-md leading-relaxed font-medium mb-8">
                            <p>
                                I am <span className="text-foreground font-bold underline decoration-primary/30 underline-offset-4">Md Shefaul Karim</span>, a Full Stack Developer specializing in architecting high-performance digital experiences. My foundation in <span className="text-primary font-bold">Competitive Programming</span> has ingrained a "performance-first" mindset, allowing me to build systems that are as efficient as they are elegant.
                            </p>

                            <p>
                                For me, development isn't just about writing code; it's about solving business challenges through technology. By leveraging deep expertise in <span className="text-foreground font-bold italic">Data Structures (DSA)</span> and <span className="text-foreground font-bold italic">System Architecture (OOP)</span>, I ensure that every application I deliver is optimized for speed, security, and long-term scalability.
                            </p>

                            <p>
                                Beyond code, I am a <b>Project Lead</b> and a natural leader. I served as the <b>University Football Team Captain</b>, leading my team to become <b>Champions twice</b> in the last three championships. This leadership translates into my development work, where I manage projects with precision and team spirit.
                            </p>

                            <p>
                                I have a deep passion for <b>continuous growth</b>—exploring new frameworks and mastering emerging patterns is what keeps me hungry for knowledge every single day.
                            </p>
                        </div>

                        {/* Metrics Grid */}
                        <div className="grid grid-cols-3 gap-3 mb-8">
                            {
                                stats.map((stat, i) => (
                                    <div key={i} className="glass p-4 rounded-2xl border border-black/5 dark:border-white/5 hover:border-primary/40 transition-all duration-500 group relative overflow-hidden hover:scale-105">
                                        <stat.icon size={20} className="text-primary mb-2 group-hover:scale-110 transition-transform" />
                                        <div className="text-xl font-black text-foreground mb-0.5 tracking-tight">{stat.value}</div>
                                        <div className="text-[9px] uppercase tracking-widest text-muted-foreground font-bold leading-tight">{stat.label}</div>
                                    </div>
                                ))}
                        </div>

                        {/* Personal Traits / Leadership List */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {[
                                { icon: <Users size={16} />, title: "Project Lead at University", desc: "Expert in team coordination." },
                                { icon: <Trophy size={16} />, title: "2x Football Champion", desc: "Proven field leadership." },
                            ].map((trait, i) => (
                                <div key={i} className="flex items-center gap-3 p-3 glass rounded-xl border border-white/5 group hover:bg-white/5  hover:scale-105 hover:transition-colors transition-all duration-700">
                                    <div className="p-2 bg-primary/10 rounded-lg text-primary group-hover:scale-110 transition-transform">
                                        {trait.icon}
                                    </div>
                                    <div>
                                        <div className="text-xs font-bold text-foreground">{trait.title}</div>
                                        <div className="text-[10px] text-muted-foreground">{trait.desc}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;