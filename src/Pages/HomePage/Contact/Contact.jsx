import React, { useRef } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter, Sparkles } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import Swal from 'sweetalert2';
import emailjs from '@emailjs/browser';

const Contact = () => {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        Swal.fire({
            title: 'Sending Message...',
            text: 'Please wait while we deliver your email.',
            allowOutsideClick: false,
            showConfirmButton: false,
            background: '#0f172a',
            color: '#fff',
            didOpen: () => {
                Swal.showLoading(); 
            }
        });


        emailjs.sendForm(
            import.meta.env.VITE_EMAILJS_SERVICE_ID,
            import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
            form.current,
            import.meta.env.VITE_EMAILJS_PUBLIC_KEY
        )
            .then((result) => {
                Swal.fire({
                    title: 'Success!',
                    text: 'Your message has been sent to Shefaul.',
                    icon: 'success',
                    background: '#0f172a',
                    color: '#fff',
                    confirmButtonColor: '#3b82f6',
                });
                e.target.reset();
            }, (error) => {
                Swal.fire({
                    title: 'Error!',
                    text: 'Failed to send message. Please try again.',
                    icon: 'error',
                    background: '#0f172a',
                    color: '#fff',
                });
            });
    };

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
                customClass: { popup: 'rounded-[2rem] border border-white/10 glass' }
            }).then((result) => {
                if (result.isConfirmed) {
                    window.location.href = item.link;
                } else if (result.dismiss === Swal.DismissReason.cancel) {
                    navigator.clipboard.writeText(item.value);
                    Swal.fire({
                        title: 'Copied!',
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
        <section id="contact" className="relative py-24 px-6 bg-background overflow-hidden">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] -z-10" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] -z-10" />

            <div className="max-w-6xl mx-auto">
                <div className="flex flex-col items-center justify-center text-center mb-16 gap-6">
                    <div className="relative p-[1.5px] overflow-hidden rounded-full group">
                        <div className="absolute inset-0 bg-[conic-gradient(from_0deg,transparent_0deg,transparent_90deg,#3b82f6_180deg,transparent_270deg)] animate-[spin_3s_linear_infinite]" />
                        <div className="relative z-10 inline-flex items-center gap-2 px-6 py-2 rounded-full glass backdrop-blur-xl border border-white/5 text-[11px] font-black uppercase tracking-[0.2em] text-primary">
                            <Sparkles size={14} className="text-primary animate-pulse" />
                            <span>Get In Touch</span>
                        </div>
                    </div>
                    <div className="space-y-4">
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-foreground leading-[1.1]">
                            Let's Build Something <br />
                            <span className="bg-gradient-to-r from-primary to-blue-300 bg-clip-text text-transparent">Extraordinary</span> Together
                        </h2>
                    </div>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 items-start">
                    {/* Left Side Info */}
                    <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} className="space-y-8">
                        <div className="space-y-6">
                            {[
                                { icon: <Mail size={20} />, label: "Email", value: "cse1805022brur@gmail.com", link: "mailto:cse1805022brur@gmail.com" },
                                { icon: <Phone size={20} />, label: "Phone", value: "+880 1300 108645", link: "tel:+8801300108645" },
                                { icon: <MapPin size={20} />, label: "Location", value: "Rangpur, Bangladesh", link: "#" }
                            ].map((item, index) => (
                                <a key={index} href={item.link} onClick={(e) => handleContactClick(e, item)} className="group flex items-center gap-5 p-4 rounded-2xl glass border border-white/5 hover:border-primary/20 transition-all duration-300">
                                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all shadow-lg shadow-primary/5">
                                        {item.icon}
                                    </div>
                                    <div>
                                        <p className="text-[10px] font-black uppercase tracking-widest text-muted-foreground/60">{item.label}</p>
                                        <p className="text-foreground font-bold">{item.value}</p>
                                    </div>
                                </a>
                            ))}
                        </div>
                        <div className="pt-4">
                            <div className="flex gap-4">
                                {[
                                    { icon: <Github size={20} />, link: "https://github.com/Shefaul-22" },
                                    { icon: <Linkedin size={20} />, link: "https://www.linkedin.com/in/mohammad-shefaul-karim-24b2b52ba" },
                                    { icon: <FaWhatsapp size={20} />, link: "https://wa.me/8801300108645" },
                                    { icon: <Twitter size={20} />, link: "#" },
                                ].map((social, i) => (
                                    <a key={i} href={social.link} target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full glass border border-white/10 flex items-center justify-center text-muted-foreground hover:text-primary transition-all">
                                        {social.icon}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Side Form */}
                    <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} className="glass-strong p-8 rounded-[2.5rem] border border-white/10 shadow-2xl relative">

                        <form ref={form} onSubmit={sendEmail} className="space-y-5">
                            <div className="grid md:grid-cols-2 gap-5">
                                <div className="space-y-2">
                                    <label className="text-[11px] font-bold uppercase tracking-widest text-muted-foreground ml-1">Full Name</label>
                                    <input
                                        name="from_name" // {{from_name}}
                                        type="text" required placeholder="John Doe"
                                        className="w-full bg-secondary/20 border border-white/5 rounded-2xl px-5 py-4 text-sm focus:outline-none focus:border-primary/50 text-white"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[11px] font-bold uppercase tracking-widest text-muted-foreground ml-1">Email Address</label>
                                    <input
                                        name="from_email" // {{from_email}}
                                        type="email" required placeholder="john@example.com"
                                        className="w-full bg-secondary/20 border border-white/5 rounded-2xl px-5 py-4 text-sm focus:outline-none focus:border-primary/50 text-white"
                                    />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-[11px] font-bold uppercase tracking-widest text-muted-foreground ml-1">Subject</label>
                                <input
                                    name="subject"
                                    type="text" required placeholder="Project Inquiry"
                                    className="w-full bg-secondary/20 border border-white/5 rounded-2xl px-5 py-4 text-sm focus:outline-none focus:border-primary/50 text-white"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-[11px] font-bold uppercase tracking-widest text-muted-foreground ml-1">Message</label>
                                <textarea
                                    name="message" //  {{message}}
                                    rows="5" required placeholder="Tell me about your project..."
                                    className="w-full bg-secondary/20 border border-white/5 rounded-2xl px-5 py-4 text-sm focus:outline-none focus:border-primary/50 text-white resize-none"
                                />
                            </div>
                            <button type="submit" className="w-full group relative flex items-center justify-center gap-3 py-4 glass border border-primary/20 text-primary font-black uppercase tracking-[0.2em] text-[11px] rounded-2xl overflow-hidden transition-all hover:bg-primary/5  cursor-pointer">
                                <span className="relative z-10 flex items-center gap-2">
                                    Send Message
                                    <Send size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
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