import React, { useEffect } from "react";
import { useLocation, useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
    ExternalLink,
    Github,
    ArrowLeft,
    ShieldAlert,
    Rocket,
    Layers,
    Globe
} from "lucide-react";

const ProjectDetails = () => {
    const location = useLocation();
    const { id } = useParams();


    const project = location.state?.project;


    const handleBackClick = () => {

        setTimeout(() => {
            const element = document.getElementById("projects");
            if (element) {
                element.scrollIntoView({ behavior: "smooth" });
            }
        }, 100);
    };

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    if (!project) {
        return (
            <div className="h-screen flex flex-col items-center justify-center bg-background text-white">
                <h2 className="text-2xl font-bold mb-4">Project Not Found!</h2>
                <Link to="/" className="text-primary flex items-center gap-2 hover:underline">
                    <ArrowLeft size={18} /> Back to Home
                </Link>
            </div>
        );
    }

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="min-h-screen bg-background py-32 px-6 md:px-12"
        >
            <div className="max-w-6xl mx-auto">
                {/* Back Button */}
                <Link
                    to="/"

                    onClick={handleBackClick}

                    className="inline-flex items-center gap-2 text-foreground hover:text-primary mb-12 transition-all group"
                >
                    <div className="p-2 rounded-full border border-white/10 group-hover:border-primary/50 transition-colors">
                        <ArrowLeft size={20} />
                    </div>
                    <span className="font-bold uppercase tracking-widest text-xs">Back to Projects</span>
                </Link>

                {/* Hero Section */}
                <div className="grid lg:grid-cols-2 gap-12 items-start mb-20">
                    <motion.div
                        initial={{ x: -30, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        className="space-y-6"
                    >
                        <h1 className="text-5xl md:text-7xl font-black text-white leading-tight">
                            {project.title}
                        </h1>
                        <div className="flex flex-wrap gap-2">
                            {project.tech.map((t) => (
                                <span key={t} className="px-4 py-1.5 bg-primary/5 border border-primary/20 rounded-full text-[10px] font-black uppercase text-primary tracking-tighter">
                                    {t}
                                </span>
                            ))}
                        </div>
                        <p className="text-muted-foreground text-lg leading-relaxed max-w-xl">
                            {project.description}
                        </p>

                        {/* Action Buttons */}
                        <div className="flex flex-wrap gap-4 pt-6">
                            <a href={project.live} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-8 py-4 rounded-2xl glass-strong border border-primary/20 text-primary hover:bg-primary/10 text-[11px] font-black uppercase tracking-widest transition-all duration-300 group/btn">
                                <Globe size={18} /> LIVE PROJECT
                            </a>
                            <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-8 py-4 glass border border-white/10 text-muted-foreground hover:text-primary rounded-2xl hover:border-primary/30 text-[11px] font-black uppercase tracking-widest transition-all duration-400 hover:transition-colors">

                                <Github size={18} /> GITHUB REPO
                            </a>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        className="relative rounded-[2.5rem] overflow-hidden border border-white/10 shadow-2xl"
                    >
                        <img
                            src={project.image}
                            alt={project.title}
                            className="w-full aspect-video object-cover"
                        />
                    </motion.div>
                </div>

                {/* Detailed Sections Grid */}
                <div className="grid md:grid-cols-2 gap-8">
                    {/* Main Tech Stack */}
                    <div className="p-10 rounded-[2rem] bg-secondary/10 border border-white/5 space-y-4">
                        <h3 className="flex items-center gap-3 text-2xl font-bold text-white">
                            <Layers className="text-primary" /> Core Tech Stack
                        </h3>
                        <p className="text-muted-foreground leading-relaxed">
                            This project was built using <strong>{project.tech.join(", ")}</strong>. I focused on building a scalable architecture with clean code principles.
                        </p>
                    </div>

                    {/* Challenges */}
                    <div className="p-10 rounded-[2rem] bg-red-500/5 border border-red-500/10 space-y-4">
                        <h3 className="flex items-center gap-3 text-2xl font-bold text-red-400">
                            <ShieldAlert /> Key Challenges
                        </h3>
                        <p className="text-muted-foreground leading-relaxed italic">

                            "Managing complex state transitions and ensuring real-time data synchronization across multiple components while maintaining optimal performance."
                        </p>
                    </div>

                    {/* Future Plans */}
                    <div className="md:col-span-2 p-10 rounded-[3rem] bg-green-500/5 border border-green-500/10 space-y-6">
                        <h3 className="flex items-center gap-3 text-2xl font-bold text-green-400">
                            <Rocket /> Future Improvements
                        </h3>
                        <ul className="grid md:grid-cols-2 gap-4 text-muted-foreground">
                            <li className="flex items-start gap-2">
                                <span className="h-2 w-2 mt-2 rounded-full bg-green-400 shrink-0" />
                                Implementing more advanced search and filtering algorithms.
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="h-2 w-2 mt-2 rounded-full bg-green-400 shrink-0" />
                                Adding dark mode and multi-language support (i18n).
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="h-2 w-2 mt-2 rounded-full bg-green-400 shrink-0" />
                                Enhancing mobile responsiveness and offline capabilities using PWA.
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="h-2 w-2 mt-2 rounded-full bg-green-400 shrink-0" />
                                Integrating professional analytics and user feedback systems.
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default ProjectDetails;