"use client";

import { useState, useRef, FormEvent } from "react";
import emailjs from "@emailjs/browser";

// ─── Replace these with your actual EmailJS credentials ───────────────────────
const EMAILJS_SERVICE_ID = "service_36s0d2p";
const EMAILJS_TEMPLATE_ID = "template_zzyak2p";
const EMAILJS_PUBLIC_KEY = "K8TGQAMXX9A0BcvdP";
// ──────────────────────────────────────────────────────────────────────────────

type FormState = {
    name: string;
    email: string;
    subject: string;
    message: string;
};

type Status = "idle" | "loading" | "success" | "error";

const INPUT_BASE =
    "w-full bg-transparent border-b-2 border-stone-700 pt-4 pb-2 px-0 text-stone-100 placeholder-transparent focus:outline-none focus:border-amber-400 transition-colors duration-300 peer";

const LABEL_BASE =
    "absolute left-0 top-4 text-stone-500 text-sm transition-all duration-300 pointer-events-none " +
    "peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-stone-500 " +
    "peer-focus:-top-4 peer-focus:text-xs peer-focus:text-amber-400 " +
    "peer-not-placeholder-shown:-top-4 peer-not-placeholder-shown:text-xs peer-not-placeholder-shown:text-stone-400";

export default function ContactSection() {
    const formRef = useRef<HTMLFormElement>(null);
    const [form, setForm] = useState<FormState>({
        name: "",
        email: "",
        subject: "",
        message: "",
    });
    const [status, setStatus] = useState<Status>("idle");
    const [errorMsg, setErrorMsg] = useState("");

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        if (!form.name || !form.email || !form.message) return;

        setStatus("loading");
        setErrorMsg("");

        try {
            await emailjs.sendForm(
                EMAILJS_SERVICE_ID,
                EMAILJS_TEMPLATE_ID,
                formRef.current!,
                EMAILJS_PUBLIC_KEY
            );
            setStatus("success");
            setForm({ name: "", email: "", subject: "", message: "" });
        } catch (err) {
            console.error(err);
            setErrorMsg("Something went wrong. Please try again.");
            setStatus("error");
        }
    };

    return (
        <section
            className="relative min-h-screen bg-stone-950 text-stone-100 overflow-hidden"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
        >
            {/* ── decorative background blobs ── */}
            <div className="noise pointer-events-none absolute inset-0" />
            <div className="absolute -top-40 -right-40 w-[520px] h-[520px] rounded-full bg-amber-500/5 blur-3xl" />
            <div className="absolute -bottom-32 -left-32 w-[400px] h-[400px] rounded-full bg-amber-600/5 blur-3xl" />

            <div className="relative z-10 max-w-4xl mx-auto px-6 py-24 lg:py-32">

                {/* ── header ── */}
                <div className="mb-20 animate-fade-up">
                    <p
                        className="text-amber-400 text-xs tracking-[0.3em] uppercase mb-4"
                        style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 500 }}
                    >
                        Get in touch
                    </p>
                    <h2
                        className="text-5xl lg:text-7xl font-bold text-stone-100 leading-tight"
                    >
                        Contact us
                    </h2>
                </div>

                <div className="grid lg:grid-cols-5 gap-16 lg:gap-24">
                    {/* ── right: form ── */}
                    <div className="lg:col-span-5 animate-fade-up-delay-2">
                        <form ref={formRef} onSubmit={handleSubmit} className="space-y-10">

                            {/* name + email row */}
                            <div className="grid sm:grid-cols-2 gap-10">
                                <div className="relative">
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={form.name}
                                        onChange={handleChange}
                                        placeholder="Your name"
                                        required
                                        className={INPUT_BASE}
                                    />
                                    <label htmlFor="name" className={LABEL_BASE}>Your name</label>
                                </div>
                                <div className="relative">
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={form.email}
                                        onChange={handleChange}
                                        placeholder="Email address"
                                        required
                                        className={INPUT_BASE}
                                    />
                                    <label htmlFor="email" className={LABEL_BASE}>Email address</label>
                                </div>
                            </div>

                            {/* subject */}
                            <div className="relative animate-fade-up-delay-3">
                                <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    value={form.subject}
                                    onChange={handleChange}
                                    placeholder="Subject"
                                    className={INPUT_BASE}
                                />
                                <label htmlFor="subject" className={LABEL_BASE}>Subject</label>
                            </div>

                            {/* message */}
                            <div className="relative animate-fade-up-delay-4">
                                <textarea
                                    id="message"
                                    name="message"
                                    value={form.message}
                                    onChange={handleChange}
                                    placeholder="Your message"
                                    required
                                    rows={5}
                                    className={`${INPUT_BASE} resize-none`}
                                />
                                <label htmlFor="message" className={LABEL_BASE}>Your message</label>
                            </div>

                            {/* submit */}
                            <div className="flex items-center gap-6 pt-2">
                                <button
                                    type="submit"
                                    disabled={status === "loading"}
                                    className="send-btn relative z-0 overflow-hidden px-10 py-3.5 border border-amber-400 text-amber-400 text-sm tracking-[0.15em] uppercase transition-colors duration-300 rounded-none disabled:opacity-40 disabled:cursor-not-allowed"
                                >
                                    {status === "loading" ? (
                                        <span className="flex items-center gap-2">
                                            <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                                            </svg>
                                            Sending…
                                        </span>
                                    ) : "Send message"}
                                </button>

                                {/* feedback */}
                                {status === "success" && (
                                    <p className="text-sm text-emerald-400 flex items-center gap-2">
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                        </svg>
                                        Message sent!
                                    </p>
                                )}
                                {status === "error" && (
                                    <p className="text-sm text-red-400">{errorMsg}</p>
                                )}
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}