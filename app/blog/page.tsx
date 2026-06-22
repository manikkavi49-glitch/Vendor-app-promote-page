"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

import logoImg from "../../assets/logo.png";

// Methana real posts ekka replace karanna - dan thiyenne placeholder data
const categories = ["All", "Travel Tips", "Culture", "Behind The Scenes", "Community"];

const posts = [
  {
    category: "Behind The Scenes",
    title: "Why We're Building Raahi From Inside The Travel Experience",
    excerpt: "Travel is deeply cultural, not just logistical. Here's how that shapes every product decision we make.",
    color: "bg-blue-600",
  },
  {
    category: "Travel Tips",
    title: "How To Turn Scattered Photos Into An Actual Travel Story",
    excerpt: "Your trip is more than a camera roll. A few simple habits to capture journeys you'll actually want to revisit.",
    color: "bg-emerald-500",
  },
  {
    category: "Culture",
    title: "What Local Guides Know That Apps Don't",
    excerpt: "Hidden places and unwritten rules rarely show up on a map. We talked to guides about what actually matters.",
    color: "bg-indigo-500",
  },
  {
    category: "Community",
    title: "Meet The Travelers Living Across Borders",
    excerpt: "Digital nomads, repeat backpackers, and students abroad — stories from the people who move the most.",
    color: "bg-blue-600",
  },
  {
    category: "Travel Tips",
    title: "The Difference Between A Trip And A Journey",
    excerpt: "One is a booking. The other becomes part of who you are. Here's how to make more of the second kind.",
    color: "bg-emerald-500",
  },
  {
    category: "Behind The Scenes",
    title: "Building The Intelligence Layer Travel Never Had",
    excerpt: "Why logistics platforms solved booking but never understanding — and what we're doing differently.",
    color: "bg-indigo-500",
  },
];

export default function BlogPage() {
  const [isDark, setIsDark] = useState(true);
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredPosts = activeCategory === "All" ? posts : posts.filter((p) => p.category === activeCategory);

  return (
    <main
      className={`min-h-screen font-sans overflow-x-hidden transition-colors duration-500 ${
        isDark ? "bg-[#111111] text-white selection:bg-blue-500" : "bg-[#f4f6f8] text-gray-900 selection:bg-blue-300"
      }`}
    >
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
          <span className={`text-sm font-bold tracking-[0.2em] uppercase ${isDark ? "text-indigo-400" : "text-indigo-600"}`}>
            The Raahi Blog
          </span>
          <h1 className="mt-6 text-4xl md:text-6xl font-extrabold leading-[1.1] uppercase tracking-tight">
            Stories From <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-indigo-500 to-emerald-400">
              The Road
            </span>
          </h1>
          <p className={`mt-8 text-lg md:text-xl max-w-2xl mx-auto ${isDark ? "text-gray-400" : "text-gray-600"}`}>
            Travel tips, culture notes, and what we're learning while building Raahi.
          </p>
        </motion.div>
      </section>

      {/* Category filter chips */}
      <section className="w-full max-w-5xl mx-auto px-6 pb-12 flex flex-wrap justify-center gap-3">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-5 py-2 rounded-full text-xs font-bold tracking-widest uppercase transition-colors ${
              activeCategory === cat
                ? "bg-blue-600 text-white"
                : isDark
                ? "bg-[#1a1a1a] border border-gray-800 text-gray-400 hover:text-white"
                : "bg-white border border-gray-200 text-gray-500 hover:text-black shadow-sm"
            }`}
          >
            {cat}
          </button>
        ))}
      </section>

      {/* Posts grid */}
      <section className="py-8 px-6 w-full max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {filteredPosts.map((post, i) => (
            <motion.article
              key={post.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (i % 3) * 0.12 }}
              className={`rounded-[2rem] overflow-hidden border flex flex-col hover:scale-[1.02] transition-transform cursor-pointer ${
                isDark ? "bg-[#1a1a1a] border-gray-800" : "bg-white border-gray-200 shadow-xl"
              }`}
            >
              <div className={`h-40 ${post.color} flex items-center justify-center`}>
                <span className="text-white/70 text-sm font-bold tracking-widest uppercase">[ Cover Image ]</span>
              </div>
              <div className="p-8 flex flex-col flex-1">
                <span className={`text-xs font-bold tracking-widest uppercase ${isDark ? "text-gray-500" : "text-gray-400"}`}>
                  {post.category}
                </span>
                <h3 className="text-xl font-extrabold mt-3 mb-3 leading-snug">{post.title}</h3>
                <p className={`text-sm font-medium flex-1 ${isDark ? "text-gray-400" : "text-gray-600"}`}>{post.excerpt}</p>
                <div
                  className={`mt-6 text-xs font-extrabold tracking-widest uppercase flex items-center gap-2 w-fit ${
                    isDark ? "text-white" : "text-black"
                  }`}
                >
                  Read More <span>→</span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {filteredPosts.length === 0 && (
          <p className={`text-center mt-12 ${isDark ? "text-gray-500" : "text-gray-400"}`}>No posts in this category yet.</p>
        )}
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