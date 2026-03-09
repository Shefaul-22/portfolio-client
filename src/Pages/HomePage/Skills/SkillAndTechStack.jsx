import React from 'react';
import { motion } from "framer-motion";
import { Code2, Database, Terminal, Wrench, Sparkles } from "lucide-react";

const skillCategories = [
    {
        title: "Frontend Development",
        icon: <Code2 size={20} />,
        
        skills: [
            { name: "React.js", level: 90 },
            { name: "Next.js", level: 85 },
            { name: "Tailwind CSS", level: 95 },
            { name: "JavaScript", level: 90 },
            { name: "TypeScript", level: 80 }
        ],
        color: "from-blue-500 to-cyan-400"
    },
    {
        title: "Backend & Database",
        icon: <Database size={20} />,
        skills: [
            { name: "Node.js", level: 85 },
            { name: "Express.js", level: 80 },
            { name: "MongoDB", level: 85 },
            { name: "PostgreSQL", level: 70 },
            { name: "Firebase", level: 75 }
        ],
        color: "from-green-500 to-emerald-400"
    },
    {
        title: "Core Fundamentals",
        icon: <Terminal size={20} />,
        skills: [
            { name: "DSA", level: 80 },
            { name: "OOP", level: 85 },
            { name: "C++ (CP)", level: 75 },
            { name: "System Design", level: 65 }
        ],
        color: "from-purple-500 to-pink-400"
    },
    {
        title: "Tools & DevOps",
        icon: <Wrench size={20} />,
        skills: [
            { name: "Git & GitHub", level: 90 },
            { name: "Docker", level: 60 },
            { name: "Postman", level: 85 },
            { name: "Vercel", level: 90 }
        ],
        color: "from-orange-500 to-yellow-400"
    }
];

const SkillAndTechStack = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, scale: 0.95 },
        visible: { opacity: 1, scale: 1 }
    };

    return (
        <section id="skills" className="relative py-24 px-6 overflow-hidden">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] -z-10" />

            <div className="max-w-6xl mx-auto">
                <div className="flex flex-col items-center text-center mb-16 space-y-4">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass border border-white/10 text-[11px] font-black uppercase tracking-[0.2em] text-primary">
                        <Sparkles size={14} className="animate-pulse" />
                        <span>My Abilities</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-black tracking-tight">
                        Technical <span className="text-gradient">Expertise</span>
                    </h2>
                </div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-8"
                >
                    {skillCategories.map((category, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            className="group p-8 rounded-[2.5rem] glass border border-white/5 hover:border-primary/20 transition-all duration-500"
                        >
                            <div className="flex items-center gap-4 mb-10">
                                <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${category.color} p-[1px]`}>
                                    <div className="w-full h-full rounded-[calc(1rem-1px)] bg-background/90 flex items-center justify-center text-foreground transition-transform duration-500 group-hover:scale-90">
                                        {category.icon}
                                    </div>
                                </div>
                                <h3 className="text-2xl font-bold tracking-tight">{category.title}</h3>
                            </div>

                            <div className="grid gap-6">
                                {category.skills.map((skill, sIndex) => (
                                    <div key={sIndex} className="space-y-2">
                                        <div className="flex justify-between items-end">
                                            <span className="text-sm font-bold uppercase tracking-widest text-foreground/80">
                                                {skill.name}
                                            </span>
                                            <span className="text-[10px] font-mono text-primary/60">
                                                {skill.level}%
                                            </span>
                                        </div>
                                        {/* Graphical Progress Bar */}
                                        <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                                            <motion.div
                                                initial={{ width: 0 }}
                                                whileInView={{ width: `${skill.level}%` }}
                                                transition={{ duration: 1, delay: 0.5 + (sIndex * 0.1) }}
                                                className={`h-full bg-gradient-to-r ${category.color}`}
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default SkillAndTechStack;