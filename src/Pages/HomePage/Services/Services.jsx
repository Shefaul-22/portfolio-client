import React from "react";
import { motion } from "framer-motion";
import useScrollReveal from "@/hooks/useScrollReveal";
import { Monitor, Server, Layers, Rocket, Zap, ShieldCheck, Code2, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

const services = [
    {
        icon: Monitor,
        title: "Frontend Excellence",
        description: "Crafting visually stunning and high-performance interfaces using React.js and Tailwind CSS. Focused on SEO and responsiveness.",
        tags: ["React.js", "Next.js", "Tailwind"],
        color: "text-blue-500",
    },
    {
        icon: Server,
        title: "Backend Architecture",
        description: "Building scalable server-side logic and robust APIs with Node.js and Express.js. Expert in JWT and middleware optimization.",
        tags: ["Node.js", "Express.js", "Socket.io"],
        color: "text-emerald-500",
    },
    {
        icon: Layers,
        title: "Full Stack Development",
        description: "Delivering end-to-end MERN stack solutions. Bridging complex MongoDB schemas with seamless React frontends.",
        tags: ["MongoDB", "MERN Stack", "Rest API"],
        color: "text-orange-500",
    },
];

const Services = () => {
    const { ref, isInView } = useScrollReveal();

    return (
        <section id="services" className="relative py-24 px-6 overflow-hidden" ref={ref}>
            {/* Background Orbs - Hero Section এর সাথে সামঞ্জস্য রেখে */}
            <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-primary/10 blur-[120px] -z-10 animate-glow-pulse" />
            <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-accent/10 blur-[120px] -z-10 animate-glow-pulse" style={{ animationDelay: "1.5s" }} />

            <div className="max-w-6xl mx-auto relative">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    className="text-center mb-20"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-sm text-muted-foreground mb-6">
                        <Code2 size={16} className="text-primary" />
                        <span className="text-[10px] font-bold uppercase tracking-[0.2em]">What I Offer</span>
                    </div>
                    <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
                        My Technical <span className="text-gradient font-black">Specialties</span>
                    </h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed">
                        I combine technical expertise with creative design to build robust full-stack applications.
                    </p>
                </motion.div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {services.map((service, i) => (
                        <motion.div
                            key={service.title}
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: i * 0.1 }}
                            whileHover={{ y: -10 }}
                            className="group relative"
                        >
                            {/* Card Body - 'glass' class used to match Hero section */}
                            <div className={cn(
                                "relative h-full flex flex-col p-10 rounded-[2.5rem] glass transition-all duration-500",
                                "border border-white/10 dark:border-white/5",
                                "hover:shadow-2xl hover:shadow-primary/5 hover:border-primary/20"
                            )}>
                                {/* Icon & Arrow */}
                                <div className="flex justify-between items-start mb-8">
                                    <div className="w-12 h-12 rounded-2xl flex items-center justify-center glass-strong group-hover:scale-110 transition-transform duration-500">
                                        <service.icon className={cn(service.color)} size={24} />
                                    </div>
                                    <ArrowUpRight className="text-muted-foreground/30 group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" size={24} />
                                </div>

                                {/* Content */}
                                <div className="flex-grow">
                                    <h3 className="text-2xl font-bold mb-4 tracking-tight group-hover:text-primary transition-colors">
                                        {service.title}
                                    </h3>
                                    <p className="text-muted-foreground leading-relaxed mb-8 text-[15px]">
                                        {service.description}
                                    </p>
                                </div>

                                {/* Tech Tags - Minimalist style */}
                                <div className="flex flex-wrap gap-2 pt-6 border-t border-white/5">
                                    {service.tags.map(tag => (
                                        <span key={tag} className="text-[9px] font-bold px-3 py-1 glass text-muted-foreground rounded-lg uppercase tracking-widest group-hover:text-foreground transition-colors">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Trust Indicators - Integrated style */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ delay: 0.8 }}
                    className="mt-24 flex flex-wrap justify-center gap-12 opacity-50"
                >
                    {[
                        { icon: Zap, text: "Performance" },
                        { icon: ShieldCheck, text: "Security" },
                        { icon: Rocket, text: "Scalability" }
                    ].map((item, index) => (
                        <div key={index} className="flex items-center gap-3">
                            <item.icon size={18} className="text-primary" />
                            <span className="text-xs font-black uppercase tracking-[0.2em]">{item.text}</span>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Services;