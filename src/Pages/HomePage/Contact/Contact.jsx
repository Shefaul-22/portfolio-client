import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter, Sparkles, MessageSquare } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import Swal from 'sweetalert2';

const Contact = () => {




    const handleContactClick = (e, item) => {

        if (item.label === "Email" || item.label === "Phone") {
            e.preventDefault();

            Swal.fire({
                title: `Connect via ${item.label}`,
                text: item.value,
                icon: 'info',
                background: '#0f172a',
                color: '#fff',
                showCancelButton: true,
                confirmButtonColor: '#3b82f6',
                cancelButtonColor: '#64748b',
                confirmButtonText: item.label === "Email" ? 'Send Email' : 'Call Now',
                cancelButtonText: 'Copy to Clipboard',
                customClass: {
                    popup: 'rounded-[2rem] border border-white/10 glass',
                }
            }).then((result) => {
                if (result.isConfirmed) {
                    window.location.href = item.link;
                } else if (result.dismiss === Swal.DismissReason.cancel) {
                    navigator.clipboard.writeText(item.value);
                    Swal.fire({
                        title: 'Copied!',
                        text: 'Copied to clipboard successfully.',
                        icon: 'success',
                        timer: 1500,
                        showConfirmButton: false,
                        background: '#0f172a',
                        color: '#fff',
                    });
                }
            });
        }
    };
    return (
        <section className="relative py-24 px-6 bg-background overflow-hidden">
            {/* Background Decorative Glows */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] -z-10" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] -z-10" />

            <div className="max-w-6xl mx-auto">
                {/* Header Section */}
                <div className="flex flex-col items-center justify-center text-center mb-16 gap-6">

                    {/* Professional Badge with Running Border Animation */}
                    <div className="relative p-[1.5px] overflow-hidden rounded-full group">
                        {/* The Animated Gradient Border */}
                        <div className="absolute inset-0 bg-[conic-gradient(from_0deg,transparent_0deg,transparent_90deg,#3b82f6_180deg,transparent_270deg)] animate-[spin_3s_linear_infinite]" />

                        <div className="absolute inset-0 bg-gradient-to-r from-primary via-[#6366f1] to-[#0ea5e9] bg-[length:200%_auto] animate-[gradient_3s_linear_infinite] opacity-40 group-hover:opacity-100 transition-opacity duration-500 blur-[2px]" />

                        {/* Inner Glass Content */}
                        <div className="relative z-10 inline-flex items-center gap-2 px-6 py-2 rounded-full glass backdrop-blur-xl border border-white/5 text-[11px] font-black uppercase tracking-[0.2em] text-primary">
                            <Sparkles size={14} className="text-primary animate-pulse" />
                            <span>Get In Touch</span>
                        </div>
                    </div>

                    {/* Typography with Professional Contrast */}
                    <div className="space-y-4">
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-foreground leading-[1.1]">
                            Let's Build Something <br />
                            <span className="bg-gradient-to-r from-primary to-blue-300 bg-clip-text text-transparent">
                                Extraordinary
                            </span> Together
                        </h2>

                        <p className="max-w-xl mx-auto text-muted-foreground text-base md:text-lg font-medium leading-relaxed italic opacity-80">
                            "Transforming complex business challenges into seamless digital experiences. My inbox is always open for groundbreaking ideas."
                        </p>
                    </div>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 items-start">

                    {/* Left Side: Contact Info & Socials */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="space-y-8"
                    >
                        <p className="text-muted-foreground font-medium max-w-md text-lg">
                            Whether you have a question, a project idea, or just want to say hi, my inbox is always open.
                        </p>

                        <div id="contact" className="space-y-6">
                            {[
                                { icon: <Mail size={20} />, label: "Email", value: "cse1805022brur@gmail.com", link: "mailto:cse1805022brur@gmail.com" },
                                { icon: <Phone size={20} />, label: "Phone", value: "+880 1300 108645", link: "tel:+8801300108645" },
                                { icon: <MapPin size={20} />, label: "Location", value: "Rangpur, Bangladesh", link: "#" }
                            ].map((item, index) => (
                                <a
                                    key={index}
                                    href={item.link}
                                    onClick={(e) => handleContactClick(e, item)}
                                    className="group flex items-center gap-5 p-4 rounded-2xl glass border border-white/5 hover:border-primary/20 transition-all duration-300"
                                >
                                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300 shadow-lg shadow-primary/5">
                                        {item.icon}
                                    </div>
                                    <div>
                                        <p className="text-[10px] font-black uppercase tracking-widest text-muted-foreground/60">{item.label}</p>
                                        <p className="text-foreground font-bold">{item.value}</p>
                                    </div>
                                </a>
                            ))}
                        </div>

                        {/* Social Links */}
                        <div className="pt-4">
                            <p className="text-[10px] font-black uppercase tracking-widest text-muted-foreground/60 mb-4">Connect with me</p>
                            <div className="flex gap-4">
                                {[
                                    { icon: <Github size={20} />, link: "https://github.com/Shefaul-22" },

                                    { icon: <Linkedin size={20} />, link: "https://www.linkedin.com/in/mohammad-shefaul-karim-24b2b52ba" },

                                    { icon: <FaWhatsapp size={20} />, link: "https://wa.me/8801300108645" },

                                    { icon: <Twitter size={20} />, link: "#" },



                                ].map((social, i) => (
                                    <a
                                        key={i}
                                        href={social.link}
                                        target="_blank"
                                        className="w-12 h-12 rounded-full glass border border-white/10 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/30 hover:-translate-y-1 transition-all duration-300"
                                    >
                                        {social.icon}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Side: Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="glass-strong p-8 md:p-10 rounded-[2.5rem] border border-white/10 shadow-2xl relative"
                    >
                        <div className="absolute -top-6 -right-6 w-20 h-20 bg-primary/20 rounded-full blur-3xl" />

                        <form className="space-y-5">
                            <div className="grid md:grid-cols-2 gap-5">
                                <div className="space-y-2">
                                    <label className="text-[11px] font-bold uppercase tracking-widest text-muted-foreground ml-1">Full Name</label>
                                    <input
                                        type="text"
                                        placeholder="John Doe"
                                        className="w-full bg-secondary/20 border border-white/5 rounded-2xl px-5 py-4 text-sm focus:outline-none focus:border-primary/50 transition-all placeholder:text-muted-foreground/80 font-medium"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[11px] font-bold uppercase tracking-widest text-muted-foreground ml-1">Email Address</label>
                                    <input
                                        type="email"
                                        placeholder="john@example.com"
                                        className="w-full bg-secondary/20 border border-white/5 rounded-2xl px-5 py-4 text-sm focus:outline-none focus:border-primary/50 transition-all placeholder:text-muted-foreground/80 font-medium"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-[11px] font-bold uppercase tracking-widest text-muted-foreground ml-1">Subject</label>
                                <input
                                    type="text"
                                    placeholder="Project Inquiry"
                                    className="w-full bg-secondary/20 border border-white/5 rounded-2xl px-5 py-4 text-sm focus:outline-none focus:border-primary/50 transition-all placeholder:text-muted-foreground/80 font-medium"
                                />
                            </div>

                            <div className="space-y-2">
                                <label className="text-[11px] font-bold uppercase tracking-widest text-muted-foreground ml-1">Message</label>
                                <textarea
                                    rows="5"
                                    placeholder="Tell me about your project..."
                                    className="w-full bg-secondary/20 border border-white/5 rounded-2xl px-5 py-4 text-sm focus:outline-none focus:border-primary/50 transition-all placeholder:text-muted-foreground/80 font-medium resize-none"
                                />
                            </div>

                            <button className="w-full group relative flex items-center justify-center gap-3 py-4 glass border border-primary/20 text-primary font-black uppercase tracking-[0.2em] text-[11px] rounded-2xl overflow-hidden transition-all duration-300 hover:border-primary/50 hover:bg-primary/5 active:scale-95 shadow-lg shadow-primary/5">
                                {/* Subtle Glow Effect on Hover */}
                                <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                                <span className="relative z-10 flex items-center gap-2">
                                    Send Message
                                    <Send size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                                </span>
                            </button>
                        </form>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default Contact;