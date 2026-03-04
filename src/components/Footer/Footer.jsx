import React from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Facebook, Mail, ArrowUpCircle } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    const currentYear = new Date().getFullYear();

    const socialLinks = [
        { icon: <Github size={18} />, link: "https://github.com/Shefaul-22" },
        { icon: <Linkedin size={18} />, link: "https://www.linkedin.com/in/mohammad-shefaul-karim-24b2b52ba" },
        { icon: <FaWhatsapp size={18} />, link: "https://wa.me/8801300108645" },
        { icon: <Facebook size={18} />, link: "#" },
    ];

    const navLinks = [
        { name: "Home", href: "#home" },
        { name: "About", href: "#about" },
        { name: "Projects", href: "#projects" },
        { name: "Contact", href: "#contact" },
    ];

    return (
        <footer className="relative bg-background border-t border-white/5 pt-16 pb-8 px-6 overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

            <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16 items-center text-center md:text-left">

                    {/* Brand Section */}
                    <div className="space-y-4">
                        <div className="text-2xl font-black tracking-tighter text-foreground flex items-center gap-3">
                            <img

                                className="w-14 h-14 rounded-full"

                                src="https://i.ibb.co.com/KtMj2J8/extra-large.png" alt="" />
                            <span className="text-primary">SHEFAUL</span>
                        </div>
                        <p className="text-muted-foreground text-sm max-w-xs mx-auto md:mx-0 leading-relaxed">
                            Crafting high-performance web applications with a focus on clean code and exceptional user experiences.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div className="flex flex-wrap justify-center gap-6">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="text-sm font-bold uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors"
                            >
                                {link.name}
                            </a>
                        ))}
                    </div>

                    {/* Social & Scroll to Top */}
                    <div className="flex flex-col items-center md:items-end gap-6">
                        <div className="flex gap-4">
                            {socialLinks.map((social, i) => (
                                <a
                                    key={i}
                                    href={social.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 rounded-xl glass border border-white/10 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/30 transition-all duration-300"
                                >
                                    {social.icon}
                                </a>
                            ))}
                        </div>
                        <button
                            onClick={scrollToTop}
                            className="group flex items-center gap-2 text-xs font-black uppercase tracking-widest text-muted-foreground hover:text-primary transition-all duration-300"
                        >
                            Back to top
                            <ArrowUpCircle size={20} className="group-hover:-translate-y-1 transition-transform" />
                        </button>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground/50">
                    <p>© {currentYear} Md Shefaul Karim. All rights reserved.</p>
                    <div className="flex gap-6">
                        <span>Built with React & Tailwind</span>
                        <span className="text-primary/40">•</span>
                        <span>Designed for Impact</span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;