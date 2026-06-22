"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

import logoImg from "../../assets/logo.png";

const storySections = [
  {
    tag: "Where It Started",
    title: "Travel Began Before Maps Existed",
    color: "text-blue-500",
    body:
      "Human travel began long before maps, passports, or booking platforms — with people crossing rivers, mountains, and seas in search of food, safety, trade, and meaning. Every journey had a story, but most of those stories disappeared the moment the traveler returned home. Trade routes and pilgrimages eventually gave travel structure, yet each journey still lived only in memory, diaries, or scattered photographs. There was never a unified way to understand travel as a continuous, evolving experience. That gap still exists today.",
  },
  {
    tag: "The Problem",
    title: "Logistics Got Easy. Meaning Didn't.",
    color: "text-indigo-400",
    body:
      "Flights, hotels, tours, and experiences are all bookable within seconds now. We moved from paper maps to GPS, from travel agents to booking platforms, from paper tickets to digital confirmations. But one thing never evolved: the travel experience itself as structured intelligence. Travel is still disconnected across platforms, scattered across photos and reviews, and never understood as one continuous journey. You can book a trip in seconds — but you still can't truly understand your own travel history.",
  },
  {
    tag: "Who We're For",
    title: "The Invisible Majority of Travelers",
    color: "text-emerald-400",
    body:
      "Every day, millions of people travel — solo backpackers, families on annual holidays, students exploring new cities, pilgrims, digital nomads. But most of their journeys disappear. Unless you actively document it, the moment fades into scattered memories and photos buried in a gallery you never revisit. There is no unified travel identity, no system that understands your journey over time. Travel exists, but it isn't connected.",
  },
  {
    tag: "What's Changed",
    title: "Three Technologies Converged",
    color: "text-blue-500",
    body:
      "Smartphones now put a powerful sensing device in every traveler's pocket — capturing photos, location, motion, and context automatically. AI and computer understanding can now analyze images, text, and behavior to find patterns in human experience. And the digital infrastructure of travel — flights, hotels, maps, payments, reviews — is already in place. Together, these three shifts mean travel is no longer just something you experience. It's something that can be structured, understood, and extended.",
  },
  {
    tag: "Our Approach",
    title: "A Platform Built for Real Travelers",
    color: "text-indigo-400",
    body:
      "Raahi is built for people who actually move — backpackers exploring continents, families building annual traditions, students discovering new cities, locals exploring their own country, and nomads living across borders. We connect travelers, guides, local experiences, and communities in one ecosystem, so the social connection travel already creates in real life finally exists digitally too.",
  },
  {
    tag: "Why It Matters",
    title: "Understanding Travel Means Understanding People",
    color: "text-emerald-400",
    body:
      "Technology alone isn't enough — travel is deeply cultural. Every region carries unwritten rules, local behaviors, hidden places, and social expectations. Raahi is built from inside the travel experience, not outside of it, shaped by people who travel frequently, understand cultural nuance, and respect local identity.",
  },
];

export default function AboutUsPage() {
  const [isDark, setIsDark] = useState(true);

  return (
    <main
      className={`min-h-screen font-sans overflow-x-hidden transition-colors duration-500 ${
        isDark ? "bg-[#111111] text-white selection:bg-blue-500" : "bg-[#f4f6f8] text-gray-900 selection:bg-blue-300"
      }`}
    >
      {/* Navbar */}
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

      {/* Hero */}
      <section className="w-full max-w-7xl mx-auto px-6 pt-36 pb-32 gap-16 text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <span className={`text-sm font-bold tracking-[0.2em] uppercase ${isDark ? "text-blue-400" : "text-blue-600"}`}>
            About Raahi
          </span>
          <h1 className="mt-6 text-4xl md:text-6xl font-extrabold leading-[1.1] uppercase tracking-tight">
            We&rsquo;re Building The <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-indigo-500 to-emerald-400">
              Intelligence Layer
            </span>{" "}
            <br />
            Of Travel
          </h1>
          <p className={`mt-8 text-lg md:text-xl max-w-2xl mx-auto ${isDark ? "text-gray-400" : "text-gray-600"}`}>
            Platforms like booking sites and maps solved logistics. No one has solved how travel itself is understood. That&rsquo;s the gap Raahi exists to close.
          </p>
        </motion.div>
      </section>

      {/* Story sections - alternating card layout */}
      <section className="py-12 px-6 w-full max-w-5xl mx-auto flex flex-col gap-6">
        {storySections.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className={`p-8 md:p-12 rounded-[2rem] border ${isDark ? "bg-[#1a1a1a] border-gray-800" : "bg-white border-gray-200 shadow-sm"}`}
          >
            <span className={`text-xs font-bold tracking-widest uppercase ${s.color}`}>{s.tag}</span>
            <h3 className="text-2xl md:text-3xl font-extrabold mt-3 mb-5 leading-tight">{s.title}</h3>
            <p className={`text-base md:text-lg leading-relaxed font-medium ${isDark ? "text-gray-400" : "text-gray-600"}`}>
              {s.body}
            </p>
          </motion.div>
        ))}
      </section>

      {/* Closing statement */}
      <section className="py-32 px-6 w-full max-w-4xl mx-auto text-center">
        <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
          <h2 className="text-3xl md:text-5xl font-extrabold mb-6 tracking-tight uppercase leading-tight">
            From &ldquo;Where Did You Go?&rdquo; <br className="hidden md:block" /> To &ldquo;What Kind Of Journey <br className="hidden md:block" /> Are You Living?&rdquo;
          </h2>
          <p className={`text-lg mb-10 ${isDark ? "text-gray-400" : "text-gray-600"}`}>
            That shift is what we&rsquo;re building, one journey at a time.
          </p>
          <Link
            href="/vision"
            className="inline-block bg-blue-600 text-white font-bold py-4 px-10 rounded-xl hover:bg-blue-500 transition-colors uppercase tracking-wide shadow-lg shadow-blue-900/30"
          >
            Read Our Vision
          </Link>
        </motion.div>
      </section>

      {/* Footer */}
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