"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

// Me thiyenne oya hadapu assets folder eken logo.png eka import karana widiha
import logoImg from "../assets/logo.png"


// 2. Array eka hadanna (Component function eke udata)
const videoFiles = ["/vid1.mp4", "/vid2.mp4", "/vid3.mp4"];

export default function Home() {
  const [isDark, setIsDark] = useState(true);

  return (
    <main className={`min-h-screen font-sans overflow-x-hidden transition-colors duration-500 ${isDark ? 'bg-[#111111] text-white selection:bg-blue-500' : 'bg-[#f4f6f8] text-gray-900 selection:bg-blue-300'}`}>
      
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

      {/* Split Hero Section */}
      <section className="w-full max-w-7xl mx-auto px-6 pt-36 pb-32 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative">
        <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} className="flex flex-col justify-center">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-4 leading-[1.1] uppercase">
            Elevate <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-indigo-500 to-emerald-400">
              Your Journey
            </span> <br/>
            To Premium
          </h1>
          
          <p className={`text-lg md:text-xl mb-10 max-w-md ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
            Set up your destination and go. We bring the premium travel experience right to your fingertips. Raahi is your ultimate travel partner.
          </p>

          <div className="flex flex-col gap-4 max-w-md">
            <div className="flex gap-4">
              <input type="text" placeholder="First name" className={`w-1/2 rounded-xl px-4 py-4 focus:outline-none focus:ring-1 focus:ring-blue-500 transition-all ${isDark ? 'bg-gray-900 border border-gray-800 text-white focus:border-blue-500' : 'bg-white border border-gray-300 text-black shadow-sm focus:border-blue-500'}`} />
              <input type="text" placeholder="Last name (optional)" className={`w-1/2 rounded-xl px-4 py-4 focus:outline-none focus:ring-1 focus:ring-blue-500 transition-all ${isDark ? 'bg-gray-900 border border-gray-800 text-white focus:border-blue-500' : 'bg-white border border-gray-300 text-black shadow-sm focus:border-blue-500'}`} />
            </div>
            <input type="tel" placeholder="Phone number" className={`w-full rounded-xl px-4 py-4 focus:outline-none focus:ring-1 focus:ring-blue-500 transition-all ${isDark ? 'bg-gray-900 border border-gray-800 text-white focus:border-blue-500' : 'bg-white border border-gray-300 text-black shadow-sm focus:border-blue-500'}`} />
            
            <button className="w-full bg-blue-600 text-white font-bold py-4 rounded-xl mt-2 hover:bg-blue-500 transition-colors uppercase tracking-wide shadow-lg shadow-blue-900/30">
              Text Me The App Link
            </button>
            
            {/* "Read Our Vision" - dan /vision page ekata link wela */}
            <Link href="/vision" className={`mt-4 flex items-center gap-2 text-sm font-bold tracking-widest uppercase cursor-pointer transition-colors w-fit ${isDark ? 'text-gray-400 hover:text-white' : 'text-gray-500 hover:text-black'}`}>
              Read Our Vision <span>→</span>
            </Link>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 30 }} 
          animate={{ opacity: 1, x: 0 }} 
          transition={{ duration: 0.8, delay: 0.2 }} 
          className="relative h-[550px] lg:h-[700px] w-full flex items-center justify-center overflow-hidden"
        >
          <video 
            className="w-full h-full  object-contain" 
            autoPlay 
            loop 
            muted 
            playsInline
          >
            <source src="/Product_Video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </motion.div>
      </section>

      {/* 3-Step Setup Section */}
      <section className="py-24 px-6 w-full max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-4xl md:text-5xl font-extrabold mb-4 uppercase tracking-tight">
            SECONDS TO BOOK. <br/>A PREMIUM RIDE.
          </motion.h2>
          <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className={`text-lg max-w-2xl mx-auto ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
            Your phone is the only thing you need. Open Raahi, set your destination, and relax.
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { step: "01", title: "SET DESTINATION", desc: "Open the app and enter where you want to go. Takes 5 seconds.", dot: "bg-blue-500", text: "text-blue-500" },
            { step: "02", title: "CHOOSE RIDE", desc: "Select from our premium fleet. See transparent pricing and ETAs.", dot: "bg-indigo-500", text: "text-indigo-500" },
            { step: "03", title: "ENJOY JOURNEY", desc: "Your driver arrives. Sit back, relax, and track your trip.", dot: "bg-emerald-500", text: "text-emerald-500" }
          ].map((item, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.2 }} className={`text-black p-10 rounded-[2rem] relative overflow-hidden group hover:scale-[1.02] transition-transform ${isDark ? 'bg-white' : 'bg-white shadow-xl shadow-gray-200/50 border border-gray-100'}`}>
              <h3 className="text-7xl font-black text-gray-100 absolute top-4 left-6 z-0 group-hover:text-gray-50 transition-colors">{item.step}</h3>
              <div className="relative z-10 mt-12">
                <div className="flex items-center gap-2 mb-4">
                  <div className={`w-2 h-2 rounded-full ${item.dot}`}></div>
                  <span className={`text-sm font-bold tracking-widest uppercase ${item.text}`}>Step {item.step}</span>
                </div>
                <h4 className="text-2xl font-extrabold mb-4 uppercase leading-tight">{item.title}</h4>
                <p className="text-gray-600 font-medium">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 4-Grid Toolkit Section */}
      <section className="py-24 px-6 w-full max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-4xl md:text-5xl font-extrabold mb-4 uppercase tracking-tight">
            YOUR PREMIUM TOOLKIT
          </motion.h2>
          <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className={`text-lg max-w-2xl mx-auto ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
            Everything runs through the app on your phone. Book, track, pay, and ride.
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-blue-600 p-10 rounded-[2rem] h-64 flex flex-col justify-center hover:scale-[1.02] transition-transform shadow-lg">
             <div className="bg-black/20 w-fit px-4 py-1 rounded-full text-sm font-bold uppercase mb-4 tracking-wider text-white">Premium Fleet</div>
             <p className="text-white text-lg font-medium">Access to the highest quality vehicles in the city. You never have to compromise on comfort.</p>
          </div>
          
          <div className={`p-10 rounded-[2rem] h-64 flex flex-col justify-center hover:scale-[1.02] transition-transform shadow-lg ${isDark ? 'bg-white text-black' : 'bg-gray-100 text-black border border-gray-200'}`}>
             <div className="bg-gray-200 w-fit px-4 py-1 rounded-full text-sm font-bold uppercase mb-4 tracking-wider text-gray-700">Live Tracking</div>
             <p className="text-gray-600 text-lg font-medium">Real-time GPS tracking shared securely with your loved ones for ultimate peace of mind.</p>
          </div>

          <div className="bg-emerald-500 p-10 rounded-[2rem] h-64 flex flex-col justify-center hover:scale-[1.02] transition-transform shadow-lg">
             <div className="bg-black/20 w-fit px-4 py-1 rounded-full text-sm font-bold uppercase mb-4 tracking-wider text-white">Cashless Payments</div>
             <p className="text-white text-lg font-medium">Seamlessly pay with cards, Apple Pay, or Google Pay. Just link it once.</p>
          </div>

          <div className={`p-10 rounded-[2rem] h-64 flex flex-col justify-center hover:scale-[1.02] transition-transform shadow-lg border ${isDark ? 'bg-[#1a1a1a] border-gray-800' : 'bg-white border-gray-200'}`}>
             <div className={`w-fit px-4 py-1 rounded-full text-sm font-bold uppercase mb-4 tracking-wider ${isDark ? 'bg-gray-800 text-gray-300' : 'bg-gray-100 text-gray-600'}`}>24/7 Support</div>
             <p className={`text-lg font-medium ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Have an issue? Our dedicated support team is available around the clock to assist you.</p>
          </div>
        </div>
      </section>

      {/* "Who It's For" Section */}
      <section className="py-32 px-6 w-full max-w-7xl mx-auto border-t border-gray-900/50">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }} 
            className="text-4xl md:text-6xl font-extrabold mb-4 uppercase tracking-tight"
          >
            IF YOU'RE ON THE MOVE, <br className="hidden md:block" /> THIS IS FOR YOU
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }} 
            transition={{ delay: 0.2 }} 
            className={`text-lg md:text-xl max-w-2xl mx-auto ${isDark ? 'text-gray-400' : 'text-gray-600'}`}
          >
            Whether you're traveling, organizing transport, or driving with us.
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-blue-600 text-white p-10 md:p-14 rounded-[2.5rem] flex flex-col justify-between h-full min-h-[350px] shadow-xl hover:scale-[1.02] transition-transform">
             <div>
                <div className="bg-blue-700 text-white px-5 py-2 rounded-full text-xs font-black tracking-widest uppercase w-fit mb-6 shadow-sm">
                  Travelers
                </div>
                <p className="text-lg md:text-xl font-medium leading-relaxed text-blue-50">
                  You travel frequently and want a hassle-free, premium experience. Raahi gives you access to the best fleet in the city with transparent pricing and ultimate comfort.
                </p>
             </div>
             <a href="#" className="mt-10 text-sm font-extrabold tracking-widest uppercase flex items-center gap-2 hover:translate-x-2 transition-transform w-fit">
               Learn More <span className="text-xl">→</span>
             </a>
          </div>

          <div className={`p-10 md:p-14 rounded-[2.5rem] flex flex-col justify-between h-full min-h-[350px] shadow-xl hover:scale-[1.02] transition-transform ${isDark ? 'bg-white text-black' : 'bg-gray-100 text-black border border-gray-200'}`}>
             <div>
                <div className="bg-gray-200 text-gray-800 px-5 py-2 rounded-full text-xs font-black tracking-widest uppercase w-fit mb-6 shadow-sm">
                  Families
                </div>
                <p className="text-gray-600 text-lg md:text-xl font-medium leading-relaxed">
                  Safety is your priority. Track your loved ones in real-time, share trip details instantly, and trust our verified, professional drivers to get them home safely.
                </p>
             </div>
             <a href="#" className="mt-10 text-sm font-extrabold tracking-widest uppercase flex items-center gap-2 hover:translate-x-2 transition-transform text-black w-fit">
               Learn More <span className="text-xl">→</span>
             </a>
          </div>

          <div className="bg-emerald-500 text-white p-10 md:p-14 rounded-[2.5rem] flex flex-col justify-between h-full min-h-[350px] shadow-xl hover:scale-[1.02] transition-transform">
             <div>
                <div className="bg-emerald-600 text-white px-5 py-2 rounded-full text-xs font-black tracking-widest uppercase w-fit mb-6 shadow-sm">
                  Corporate
                </div>
                <p className="text-lg md:text-xl font-medium leading-relaxed text-emerald-50">
                  You run a business and need reliable transport for your team or clients. Manage rides, automate billing, and provide a premium experience that reflects your brand.
                </p>
             </div>
             <a href="#" className="mt-10 text-sm font-extrabold tracking-widest uppercase flex items-center gap-2 hover:translate-x-2 transition-transform w-fit">
               Learn More <span className="text-xl">→</span>
             </a>
          </div>

          <div className={`p-10 md:p-14 rounded-[2.5rem] flex flex-col justify-between h-full min-h-[350px] shadow-xl border hover:scale-[1.02] transition-transform ${isDark ? 'bg-[#1a1a1a] text-white border-gray-800' : 'bg-white text-black border-gray-200'}`}>
             <div>
                <div className={`px-5 py-2 rounded-full text-xs font-black tracking-widest uppercase w-fit mb-6 shadow-sm ${isDark ? 'bg-gray-800 text-gray-300' : 'bg-gray-100 text-gray-700'}`}>
                  Partners
                </div>
                <p className={`text-lg md:text-xl font-medium leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                  You own a premium vehicle and want to maximize your earnings. Join our exclusive fleet, get 24/7 support, and drive for a platform that respects your service.
                </p>
             </div>
             <a href="#" className={`mt-10 text-sm font-extrabold tracking-widest uppercase flex items-center gap-2 hover:translate-x-2 transition-transform w-fit ${isDark ? 'text-white' : 'text-black'}`}>
               Learn More <span className="text-xl">→</span>
             </a>
          </div>
        </div>
      </section>

      {/* Vertical Videos Section */}
      <section className="py-24 px-6 w-full max-w-7xl mx-auto text-center border-t border-gray-900/50">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }} 
          className="text-4xl md:text-5xl font-extrabold mb-16 uppercase tracking-tight leading-tight"
        >
          RAAHI IS LOVED BY <span className="text-blue-500">TRAVELERS</span>, <br className="hidden md:block" /> 
          <span className="text-indigo-400">DRIVERS</span>, AND <span className="text-emerald-400">PARTNERS.</span>
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-[600px]">
          {videoFiles.map((videoPath, index) => (
            <div key={index} className="rounded-[2rem] overflow-hidden border border-gray-800 shadow-xl relative group">
              <video 
                className="w-full h-full object-cover" 
                controls 
                playsInline
              >
                <source src={videoPath} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          ))}
        </div>

      </section>

      {/* Centered CTA Section */}
      <section className="py-32 px-6 w-full max-w-4xl mx-auto text-center">
        <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
          <div className="w-16 h-16 mx-auto bg-emerald-500 rounded-full flex items-center justify-center mb-8 shadow-lg shadow-emerald-900/50">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"></path></svg>
          </div>
          <h2 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight uppercase leading-tight">
            YOUR PHONE ALREADY <br className="hidden md:block"/> HAS THE APP STORE. LET <br className="hidden md:block"/> US SEND THE LINK.
          </h2>
          <p className={`text-lg mb-10 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Enter your phone number and we'll text you the app link.</p>
          
          <form className="flex flex-col gap-4 max-w-lg mx-auto" onSubmit={(e) => e.preventDefault()}>
            <div className="flex gap-4">
              <input type="text" placeholder="First name" className={`w-1/2 rounded-xl px-4 py-4 focus:outline-none focus:ring-1 focus:ring-emerald-500 transition-colors ${isDark ? 'bg-[#1a1a1a] border border-gray-800 text-white' : 'bg-white border border-gray-300 text-black shadow-sm'}`} />
              <input type="text" placeholder="Last name (optional)" className={`w-1/2 rounded-xl px-4 py-4 focus:outline-none focus:ring-1 focus:ring-emerald-500 transition-colors ${isDark ? 'bg-[#1a1a1a] border border-gray-800 text-white' : 'bg-white border border-gray-300 text-black shadow-sm'}`} />
            </div>
            <input type="tel" placeholder="Phone number" className={`w-full rounded-xl px-4 py-4 focus:outline-none focus:ring-1 focus:ring-emerald-500 transition-colors ${isDark ? 'bg-[#1a1a1a] border border-gray-800 text-white' : 'bg-white border border-gray-300 text-black shadow-sm'}`} required />
            <button type="submit" className="w-full bg-emerald-500 text-white font-bold py-4 rounded-xl mt-2 hover:bg-emerald-400 transition-colors uppercase tracking-wide shadow-lg shadow-emerald-900/30">
              TEXT ME THE RAAHI APP LINK
            </button>
          </form>
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
            <Link href="/privacy" className={`transition-colors ${isDark ? 'hover:text-white' : 'hover:text-black'}`}>Privacy</Link>
          </div>
        </div>
      </footer>

    </main>
  );
}