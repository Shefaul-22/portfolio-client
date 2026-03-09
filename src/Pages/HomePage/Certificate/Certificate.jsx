import React from 'react';
import { motion } from "framer-motion";
import { GraduationCap, Calendar, MapPin, BookOpen, ExternalLink, Image as ImageIcon, Award, Code2 } from "lucide-react";

const educationData = [
    {
        type: "academic",
        degree: "M.Sc. in Computer Science & Engineering",
        institution: "Begum Rokeya University, Rangpur",
        duration: "2024 - Present",
        status: "In Progress",
        description: "Focusing on advanced computing and system architecture.",
        color: "from-blue-500 to-cyan-400",
        certificateLink: "#",
        imageUrl: ""
    },
    {
        type: "academic",
        degree: "B.Sc. in Computer Science & Engineering",
        institution: "Begum Rokeya University, Rangpur",
        duration: "2019 - 2023",
        status: "Completed",
        description: "Solid foundation in DSA, Web Technologies, and Software Engineering.",
        color: "from-purple-500 to-pink-400",
        certificateLink: "https://i.ibb.co.com/F4S7npjD/bsc-image.jpg",
        imageUrl: "https://i.ibb.co.com/F4S7npjD/bsc-image.jpg"
    },
    {
        type: "skill",
        degree: "Full Stack Web Development",
        institution: "Programming Hero",
        duration: "2023 - 2024",
        status: "Certified",
        description: "Mastered MERN Stack (MongoDB, Express, React, Node.js) with Firebase and clean UI/UX practices.",
        color: "from-orange-500 to-yellow-400",
        certificateLink: "#",
        imageUrl: "https://via.placeholder.com/400x200"
    },
    {
        type: "skill",
        degree: "Full Stack development with Next.js & Advanced React Mastery",
        institution: "Udemy / Specialized Training",
        duration: "2024",
        status: "Certified",
        description: "Deep dive into Next.js, TypeScript, and modern UI libraries like Shadcn, Material UI, and DaisyUI.",
        color: "from-emerald-500 to-teal-400",
        certificateLink: "#",
        imageUrl: "https://via.placeholder.com/400x200"
    }
];

const Certificate = () => {
    return (
        <section id="certificate" className="relative py-24 px-6 overflow-hidden">
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px] -z-10" />

            <div className="max-w-5xl mx-auto">
                {/* Header */}
                <div className="flex flex-col items-center text-center mb-16 space-y-4">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass border border-white/10 text-[11px] font-black uppercase tracking-[0.2em] text-primary">
                        <Award size={14} className="animate-pulse" />
                        <span>Growth & Learning</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-black tracking-tight text-foreground">
                        Academic & <span className="text-gradient">Professional</span> Journey
                    </h2>
                </div>

                {/* Timeline */}
                <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 md:before:mx-auto before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-primary/20 before:to-transparent">

                    {
                        educationData.map((edu, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className={`relative flex items-start justify-between md:justify-normal group ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
                            >
                                {/* Dot Icon */}
                                <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white/10 bg-background shadow-xl shrink-0 md:absolute md:left-1/2 md:-translate-x-1/2 z-10 transition-transform group-hover:scale-110">
                                    {edu.type === "academic" ? <GraduationCap size={16} className="text-primary" /> : <Code2 size={16} className="text-primary" />}
                                </div>

                                {/* Card */}
                                <div className="w-[calc(100%-4rem)] md:w-[45%] p-6 rounded-[2.5rem] glass border border-white/5 hover:border-primary/40 transition-all duration-500 shadow-sm hover:shadow-primary/5 ">
                                    <div className="flex flex-col gap-4">
                                        <div className="flex flex-wrap items-center justify-between gap-2">
                                            <span className={`text-[9px] font-bold px-3 py-1 rounded-full bg-gradient-to-r ${edu.color} text-white uppercase tracking-wider`}>
                                                {edu.status}
                                            </span>
                                            <div className="flex items-center gap-1 text-muted-foreground text-[11px] font-mono">
                                                <Calendar size={12} />
                                                {edu.duration}
                                            </div>
                                        </div>

                                        <div>
                                            <h3 className="text-lg font-black text-foreground mb-1 group-hover:text-primary transition-colors leading-tight">{edu.degree}</h3>
                                            <div className="flex items-center gap-1.5 text-xs font-semibold text-primary/80">
                                                {edu.type === "academic" ? <MapPin size={12} /> : <BookOpen size={12} />}
                                                {edu.institution}
                                            </div>
                                        </div>

                                        <p className="text-xs text-muted-foreground leading-relaxed">
                                            {edu.description}
                                        </p>

                                        {/* Certificate Section */}
                                        <div className="pt-2 space-y-3">
                                            {edu.imageUrl && (
                                                <div className="relative rounded-2xl overflow-hidden border border-white/5 aspect-[16/9] group/img">
                                                    <img
                                                        src={edu.imageUrl}
                                                        alt="Certificate Preview"
                                                        className="w-full h-full object-cover opacity-60 group-hover/img:opacity-100 transition-opacity duration-500"
                                                    />
                                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-3 opacity-0 group-hover/img:opacity-100 transition-opacity">
                                                        <span className="text-[10px] text-white flex items-center gap-1 font-bold">
                                                            <ImageIcon size={12} /> Preview Document
                                                        </span>
                                                    </div>
                                                </div>
                                            )}

                                            <a
                                                href={edu.certificateLink}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center gap-2 text-[11px] font-bold text-primary hover:underline transition-all group/link"
                                            >
                                                {edu.type === "academic" ? "Academic Transcript" : "Verify Certification"}
                                                <ExternalLink size={12} className="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                </div>
            </div>
        </section>
    );
};

export default Certificate;