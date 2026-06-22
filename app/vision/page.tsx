"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

// home page eke widihatama, assets folder eken logo.png import karanawa
// methana "vision" eka app/vision/page.tsx widihata thiyenawa nam, path eka ../../assets/logo.png wenna ona
import logoImg from "../../assets/logo.png";

const pillars = [
  {
    title: "Local Voices First",
    desc: "Every itinerary, recommendation, and experience is shaped by the people who actually live in a place — not algorithms guessing from the outside.",
    badge: "Community",
    color: "bg-blue-600",
  },
  {
    title: "Ecological Wisdom",
    desc: "We design around the land, not over it. Traditional knowledge and environmental care guide how we choose partners and routes.",
    badge: "Sustainability",
    color: "bg-emerald-500",
  },
  {
    title: "Radical Transparency",
    desc: "Pricing, sourcing, and impact are visible — not buried in fine print. Travelers should know exactly where their money goes.",
    badge: "Trust",
    color: "bg-indigo-500",
  },
  {
    title: "Human, Not Transactional",
    desc: "Travel is a relationship between people and places. We build technology that supports that relationship instead of replacing it.",
    badge: "Connection",
    color: "bg-blue-600",
  },
];

const longTermPoints = [
  "Build the best system for understanding human travel",
  "Capture journeys automatically from real-world data",
  "Turn fragmented experiences into structured, lasting memory",
  "Connect travelers through shared identity and context",
  "Activate meaningful, contextual commerce around real journeys",
  "Stay deeply rooted in local culture while scaling globally",
];

export default function VisionPage() {
  const [isDark, setIsDark] = useState(true);

  return (
    <main
      className={`min-h-screen font-sans overflow-x-hidden transition-colors duration-500 ${
        isDark ? "bg-[#111111] text-white selection:bg-blue-500" : "bg-[#f4f6f8] text-gray-900 selection:bg-blue-300"
      }`}
    >
      {/* Navbar - homepage eke ekama structure eka */}
      {/* Sticky Top Navbar */}
      <motion.nav 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className={`w-full py-4 px-8 flex justify-between items-center fixed top-0 left-0 right-0 z-50 backdrop-blur-md transition-colors duration-300 ${isDark ? 'bg-[#111111]/80 border-b border-gray-800' : 'bg-[#f4f6f8]/80 border-b border-gray-200'}`}
      >
        <Link href="/" className="flex items-center gap-3 cursor-pointer">
          {/* Import karapu logoImg eka methanata damma */}
          <Image 
            src={logoImg} 
            alt="Raahi Logo" 
            width={40}
            height={40}
            className="rounded-xl object-cover shadow-lg" 
          />
          <span className="text-2xl font-bold tracking-widest uppercase">RAAHI</span>
        </Link>

        <div className="flex items-center gap-8">
          <div className={`hidden md:flex items-center gap-8 text-xs font-bold tracking-[0.15em] uppercase ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
            {/* Real /vision page ekata link karala - anchor (#vision) wenuwata */}
            <Link href="/vision" className={`transition-colors ${isDark ? 'hover:text-white' : 'hover:text-black'}`}>Vision</Link>
            {/* Real /about-us page ekata link karala */}
            <Link href="/about-us" className={`transition-colors ${isDark ? 'hover:text-white' : 'hover:text-black'}`}>About Us</Link>
            
            <div className="relative group cursor-pointer py-2">
              <div className={`flex items-center gap-1 transition-colors ${isDark ? 'hover:text-white' : 'hover:text-black'}`}>
                Who It's For 
                <svg className="w-4 h-4 transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
              </div>
              
              <div className={`absolute top-full right-0 mt-2 w-48 border rounded-xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 flex flex-col overflow-hidden ${isDark ? 'bg-[#1a1a1a] border-gray-800' : 'bg-white border-gray-200'}`}>
                <a href="#" className={`px-6 py-4 transition-colors ${isDark ? 'hover:text-blue-400 hover:bg-gray-800' : 'hover:text-blue-600 hover:bg-gray-50'}`}>Travelers</a>
                <a href="#" className={`px-6 py-4 transition-colors ${isDark ? 'hover:text-emerald-400 hover:bg-gray-800' : 'hover:text-emerald-600 hover:bg-gray-50'}`}>Experts</a>
                <a href="#" className={`px-6 py-4 transition-colors ${isDark ? 'hover:text-blue-400 hover:bg-gray-800' : 'hover:text-blue-600 hover:bg-gray-50'}`}>Partners</a>
              </div>
            </div>

            {/* Real /blog page ekata link karala */}
            <Link href="/blog" className={`transition-colors ${isDark ? 'hover:text-white' : 'hover:text-black'}`}>Blog</Link>
          </div>

          <button 
            onClick={() => setIsDark(!isDark)} 
            className={`p-2 rounded-full transition-colors ${isDark ? 'bg-gray-800 hover:bg-gray-700 text-yellow-400' : 'bg-white shadow-md hover:bg-gray-100 text-indigo-600'}`}
            title="Toggle Light/Dark Mode"
          >
            {isDark ? (
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
            ) : (
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" /></svg>
            )}
          </button>
        </div>
      </motion.nav>

      {/* Hero - the actual Vision quote */}
      <section className="w-full max-w-7xl mx-auto px-6 pt-36 pb-32 gap-16 text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <span className={`text-sm font-bold tracking-[0.2em] uppercase ${isDark ? "text-emerald-400" : "text-emerald-600"}`}>
            Our Vision
          </span>
          <h1 className="mt-6 text-3xl md:text-5xl lg:text-6xl font-extrabold leading-[1.25] tracking-tight">
            &ldquo;To become the world&rsquo;s most trusted platform for{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-indigo-500 to-emerald-400">
              regenerative tourism
            </span>
            &rdquo;
          </h1>
          <p className={`mt-8 text-lg md:text-xl max-w-3xl mx-auto ${isDark ? "text-gray-400" : "text-gray-600"}`}>
            One that centers local voices, celebrates ecological wisdom, and keeps tourism sustainable, transparent, and human.
          </p>
        </motion.div>
      </section>

      {/* 4 Pillars Grid - reuses the "toolkit" card style from home page */}
      <section className="py-16 px-6 w-full max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-extrabold mb-4 uppercase tracking-tight"
          >
            What This Vision Means
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className={`text-lg max-w-2xl mx-auto ${isDark ? "text-gray-400" : "text-gray-600"}`}
          >
            Four commitments that shape every decision we make.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {pillars.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (i % 2) * 0.15 }}
              className={`p-10 rounded-[2rem] h-64 flex flex-col justify-center hover:scale-[1.02] transition-transform shadow-lg ${
                i % 2 === 0 ? `${p.color} text-white` : isDark ? "bg-white text-black" : "bg-gray-100 text-black border border-gray-200"
              }`}
            >
              <div
                className={`w-fit px-4 py-1 rounded-full text-sm font-bold uppercase mb-4 tracking-wider ${
                  i % 2 === 0 ? "bg-black/20 text-white" : "bg-gray-200 text-gray-700"
                }`}
              >
                {p.badge}
              </div>
              <h3 className="text-2xl font-extrabold mb-3 uppercase leading-tight">{p.title}</h3>
              <p className={`text-lg font-medium ${i % 2 === 0 ? "text-white/90" : isDark ? "text-gray-600" : "text-gray-600"}`}>
                {p.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Long-term vision checklist */}
      <section className="py-24 px-6 w-full max-w-5xl mx-auto border-t border-gray-900/50">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-extrabold mb-4 uppercase tracking-tight"
          >
            The Long Term Plan
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className={`text-lg max-w-2xl mx-auto ${isDark ? "text-gray-400" : "text-gray-600"}`}
          >
            Over 1.4 billion international travelers move every year — and billions more domestically. We&rsquo;re building the intelligence layer that travel has always been missing.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {longTermPoints.map((point, i) => (
            <motion.div
              key={point}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className={`flex items-start gap-4 p-6 rounded-2xl border ${isDark ? "bg-[#1a1a1a] border-gray-800" : "bg-white border-gray-200 shadow-sm"}`}
            >
              <div className="w-2 h-2 mt-2 rounded-full bg-emerald-500 flex-shrink-0" />
              <p className={`text-base md:text-lg font-medium ${isDark ? "text-gray-300" : "text-gray-700"}`}>{point}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 px-6 w-full max-w-4xl mx-auto text-center">
        <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
          <h2 className="text-3xl md:text-5xl font-extrabold mb-6 tracking-tight uppercase leading-tight">
            Travel Should Leave Places <br className="hidden md:block" /> Better Than It Found Them
          </h2>
          <p className={`text-lg mb-10 ${isDark ? "text-gray-400" : "text-gray-600"}`}>
            Join us as we build a more honest, human way to move through the world.
          </p>
          <Link
            href="/"
            className="inline-block bg-emerald-500 text-white font-bold py-4 px-10 rounded-xl hover:bg-emerald-400 transition-colors uppercase tracking-wide shadow-lg shadow-emerald-900/30"
          >
            Get The App
          </Link>
        </motion.div>
      </section>

      {/* Footer - homepage eke ekama footer eka */}
      <footer className={`w-full border-t py-12 ${isDark ? 'border-gray-900' : 'border-gray-200 bg-white'}`}>
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-4">
            <span className="text-2xl font-bold tracking-widest uppercase">RAAHI</span>
            <span className="text-gray-600 text-sm italic font-serif">Travel Your Way.</span>
          </div>
          <div className="flex flex-wrap justify-center gap-6 text-xs font-bold tracking-widest text-gray-500 uppercase">
            {/* Footer eke link tika - real routes walata point karala */}
            <Link href="/vision" className={`transition-colors ${isDark ? 'hover:text-white' : 'hover:text-black'}`}>Vision</Link>
            <Link href="/about-us" className={`transition-colors ${isDark ? 'hover:text-white' : 'hover:text-black'}`}>About Us</Link>
            <a href="#" className={`transition-colors ${isDark ? 'hover:text-white' : 'hover:text-black'}`}>Travelers</a>
            <a href="#" className={`transition-colors ${isDark ? 'hover:text-white' : 'hover:text-black'}`}>Experts</a>
            <Link href="/blog" className={`transition-colors ${isDark ? 'hover:text-white' : 'hover:text-black'}`}>Blog</Link>
            <a href="#" className={`transition-colors ${isDark ? 'hover:text-white' : 'hover:text-black'}`}>Privacy</a>
          </div>
        </div>
      </footer>
    </main>
  );
}