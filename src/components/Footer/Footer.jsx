import React from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Facebook, ArrowUpCircle } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    const currentYear = new Date().getFullYear();

    const socialLinks = [
        { icon: <Github size={18} />, link: "https://github.com/Shefaul-22", label: "Github" },
        { icon: <Linkedin size={18} />, link: "https://www.linkedin.com/in/mohammad-shefaul-karim-24b2b52ba", label: "LinkedIn" },
        { icon: <FaWhatsapp size={18} />, link: "https://wa.me/8801300108645", label: "WhatsApp" },
        { icon: <Facebook size={18} />, link: "#", label: "Facebook" },
    ];

    const navLinks = [
        { name: "Home", href: "#home" },
        { name: "About", href: "#about" },
        { name: "Projects", href: "#projects" },
        { name: "Contact", href: "#contact" },
    ];

    return (
        <footer className="relative bg-[#030014] border-t border-white/5 pt-20 pb-10 px-6 overflow-hidden">
            {/* Elegant Background Decoration */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
            <div className="absolute -bottom-24 left-1/2 -translate-x-1/2 w-96 h-96 bg-primary/10 blur-[120px] rounded-full pointer-events-none" />

            <div className="max-w-6xl mx-auto relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-16 items-start text-center md:text-left">

                    {/* Brand Section */}
                    <div className="space-y-6">
                        <div className="flex items-center justify-center md:justify-start gap-4 group">
                            <div className="relative">
                                <img
                                    className="w-14 h-14 rounded-2xl border-2 border-primary/20 group-hover:border-primary/50 transition-all duration-500 object-cover"
                                    src="https://i.ibb.co.com/KtMj2J8/extra-large.png"
                                    alt="Shefaul"
                                />
                                <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 border-2 border-[#030014] rounded-full" />
                            </div>
                            <div className="flex flex-col">
                                <span className="text-2xl font-black tracking-tighter text-white">
                                    SHEFAUL<span className="text-primary">.</span>
                                </span>
                                <span className="text-[10px] font-bold text-primary/60 uppercase tracking-[0.3em]">Web Developer</span>
                            </div>
                        </div>
                        <p className="text-muted-foreground text-sm max-w-xs mx-auto md:mx-0 leading-relaxed font-medium">
                            Building digital experiences that combine modern aesthetics with high-performance functionality.
                        </p>
                    </div>

                    {/* Quick Links with Hover Effect */}
                    <div className="flex flex-col items-center space-y-4">
                        <h4 className="text-white font-bold uppercase tracking-widest text-xs">Navigation</h4>
                        <div className="grid grid-cols-2 gap-x-8 gap-y-3">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    className="text-sm font-semibold text-muted-foreground hover:text-primary transition-all duration-300 flex items-center gap-2 group"
                                >
                                    <span className="w-1 h-1 rounded-full bg-primary scale-0 group-hover:scale-100 transition-transform" />
                                    {link.name}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Social & Scroll to Top */}
                    <div className="flex flex-col items-center md:items-end gap-8">
                        <div className="space-y-4 w-full text-center md:text-right">
                            <h4 className="text-white font-bold uppercase tracking-widest text-xs">Let's Connect</h4>
                            <div className="flex justify-center md:justify-end gap-3">
                                {socialLinks.map((social, i) => (
                                    <motion.a
                                        whileHover={{ y: -5 }}
                                        key={i}
                                        href={social.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-11 h-11 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/30 transition-all duration-300"
                                        aria-label={social.label}
                                    >
                                        {social.icon}
                                    </motion.a>
                                ))}
                            </div>
                        </div>

                        <button
                            onClick={scrollToTop}
                            className="group flex items-center gap-3 px-6 py-2 rounded-full border border-white/5 hover:border-primary/20 bg-white/5 transition-all duration-500"
                        >
                            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground group-hover:text-primary">Back to top</span>
                            <ArrowUpCircle size={18} className="text-muted-foreground group-hover:text-primary group-hover:-translate-y-1 transition-all" />
                        </button>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-10 border-t border-white/5 flex flex-col md:row justify-between items-center gap-6">
                    <p className="text-[11px] font-medium text-muted-foreground/60 flex items-center gap-2">
                        © {currentYear} Md Shefaul Karim | All Rights Reserved
                    </p>

                    
                </div>
            </div>
        </footer>
    );
};

export default Footer;