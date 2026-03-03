import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github as GithubIcon, Code2, Sparkles, ArrowUpRight } from "lucide-react";

const categories = ["All", "Full Stack", "Frontend"];

const projects = [

    {
        title: "Civic Care",
        description: "A digital urban governance platform that allows citizens to report local infrastructure issues like broken roads or streetlights, track resolution status, and engage with city authorities in real-time.",
        tech: ["React.js", "Node.js", "MongoDB", "Express", "Firebase"],
        category: "Full Stack",
        image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?q=80&w=2070&auto=format&fit=crop",
        live: "https://public-care.web.app",
        github: "https://github.com/Shefaul-22/Civic-Care-Client",
    },

    {
        title: "RentWheels",
        description: "A premium car rental platform featuring a seamless booking system, real-time availability, and a dynamic user dashboard for effortless vehicle management.",
        tech: ["React.js", "Firebase", "Node.js", "MongoDB", "Tailwind"],
        category: "Full Stack",
        image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2070&auto=format&fit=crop",
        live: "https://rentwheels-car.web.app",
        github: "https://github.com/Shefaul-22/rentwheels-client",
    },
    {
        title: "GameHub Library",
        description: "A comprehensive game discovery platform where users can explore, filter, and review their favorite titles with a high-performance modern UI.",
        tech: ["React.js", "Tailwind CSS", "Firebase", "Rest API"],
        category: "Frontend",
        image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=2070&auto=format&fit=crop",
        live: "https://gamehub-library.web.app",
        github: "https://github.com/Shefaul-22/gamehub-library",
    },

    {
        title: "Lingo Learning",
        description: "An interactive English-to-Bangla dictionary with smart search and vocabulary building features tailored for language enthusiasts.",
        tech: ["React.js", "Tailwind CSS", "Netlify", "JSON Data"],
        category: "Frontend",
        image: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?q=80&w=1973&auto=format&fit=crop",
        live: "https://ephemeral-ganache-c9b327.netlify.app",
        github: "https://github.com/Shefaul-22/English-to-Bangla-Learning-Dictionary",
    },
];

const Projects = () => {
    const [activeTab, setActiveTab] = useState("All");

    const filteredProjects = activeTab === "All"
        ? projects
        : projects.filter(p => p.category === activeTab);

    return (
        <section id="projects" className="relative py-24 px-6 bg-background">
            <div className="max-w-6xl mx-auto">

                {/* Header Section */}
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
                    <div className="max-w-2xl">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-[10px] font-bold uppercase tracking-widest text-primary mb-4">
                            <Sparkles size={12} />
                            <span>Portfolio</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-black tracking-tight text-foreground leading-tight">
                            Featured <span className="text-primary">Projects</span> & <br /> Technical Case Studies
                        </h2>
                        <p className="mt-4 text-muted-foreground font-medium max-w-lg italic">
                            Transforming complex ideas into functional digital experiences through clean code and intuitive design.
                        </p>
                    </div>

                    {/* Filter Tabs */}
                    <div className="flex p-1 bg-secondary/20 backdrop-blur-md rounded-2xl border border-white/5 self-start shadow-sm">
                        {categories.map((tab) => (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(tab)}
                                className={`relative px-6 py-2.5 text-xs font-bold uppercase tracking-widest transition-all duration-300 rounded-xl ${activeTab === tab ? "text-primary" : "text-muted-foreground hover:text-foreground"
                                    }`}
                            >
                                {activeTab === tab && (
                                    <motion.div
                                        layoutId="activeTab"
                                        className="absolute inset-0 bg-primary/5 rounded-xl border border-primary/20 shadow-inner"
                                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                    />
                                )}
                                <span className="relative z-10">{tab}</span>
                            </button>
                        ))}
                    </div>
                </div>

                {/* Projects Grid */}
                <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <AnimatePresence mode="popLayout">
                        {filteredProjects.map((project) => (
                            <motion.div
                                key={project.title}
                                layout
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                className="group flex flex-col glass rounded-[2.5rem] overflow-hidden border border-white/5 hover:border-primary/20 transition-all duration-500 shadow-xl"
                            >
                                {/* Top: Image Area */}
                                <div className="relative aspect-[16/10] overflow-hidden">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute top-4 right-4">
                                        <span className="px-3 py-1 rounded-full glass-strong text-[9px] font-black uppercase tracking-widest text-primary border border-primary/20">
                                            {project.category}
                                        </span>
                                    </div>
                                </div>

                                {/* Bottom: Content Area */}
                                <div className="p-8 flex flex-col flex-grow">
                                    <div className="flex items-center gap-2 mb-3">
                                        <Code2 size={16} className="text-primary" />
                                        <h3 className="text-xl font-bold text-foreground tracking-tight group-hover:text-primary transition-colors">
                                            {project.title}
                                        </h3>
                                    </div>

                                    <p className="text-muted-foreground text-sm leading-relaxed mb-6 font-medium line-clamp-3">
                                        {project.description}
                                    </p>

                                    {/* Tech Stack Tags - Updated to # Style */}
                                    <div className="flex flex-wrap gap-x-3 gap-y-1 mb-8 mt-auto">
                                        {project.tech.map((t) => (
                                            <span key={t} className="text-[11px] font-bold text-primary/70 tracking-tight">
                                                <span className="text-muted-foreground/40 font-light">#</span>{t.toLowerCase().replace(/\s+/g, '')}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Glassmorphism Action Buttons */}
                                    <div className="flex gap-3">
                                        <a
                                            href={project.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex-1 inline-flex items-center justify-center gap-2 py-3 rounded-2xl glass border border-white/10 text-muted-foreground hover:text-primary hover:border-primary/30 text-[11px] font-black uppercase tracking-widest transition-all duration-300"
                                        >
                                            <GithubIcon size={14} />
                                            Source
                                        </a>
                                        <a
                                            href={project.live}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex-1 inline-flex items-center justify-center gap-2 py-3 rounded-2xl glass-strong border border-primary/20 text-primary hover:bg-primary/10 text-[11px] font-black uppercase tracking-widest transition-all duration-300 group/btn"
                                        >
                                            Live Demo
                                            <ArrowUpRight size={14} className="group-hover/btn:-translate-y-0.5 group-hover/btn:translate-x-0.5 transition-transform" />
                                        </a>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div>
        </section>
    );
};

export default Projects;