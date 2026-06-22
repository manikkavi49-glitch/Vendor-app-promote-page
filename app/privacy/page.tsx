"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-gray-200">
      
      {/* Back Button */}
      <nav className="max-w-5xl mx-auto px-6 py-12">
        <Link href="/" className="inline-flex items-center gap-2 text-sm uppercase tracking-widest font-bold hover:text-emerald-400 transition-colors">
          <span>←</span> Back to Home
        </Link>
      </nav>

      {/* Main Content */}
      <article className="max-w-3xl mx-auto px-6 pb-32">
        <header className="mb-20">
          <h1 className="text-6xl md:text-7xl font-black mb-6 tracking-tighter text-white">Privacy<br/>Policy</h1>
          <p className="text-emerald-500 font-bold tracking-widest uppercase text-xs">Last Updated: June 2026</p>
        </header>

        <div className="space-y-12 leading-relaxed text-lg">
          <section>
            <h2 className="text-2xl font-bold text-white mb-6">1. Introduction</h2>
            <p>Welcome to Raahi. We operate a dual-sided marketplace connecting Buyers with Experts. By using our platform, you acknowledge this Privacy Policy.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-6">2. Information Collection</h2>
            <p className="mb-8">We collect data to provide a seamless premium experience. This includes:</p>
            
            <div className="grid grid-cols-1 gap-4">
              {["User Identity & Profile Info", "Financial & Transaction Data", "Professional License Info", "Biometric Identity Verification"].map((item) => (
                <div key={item} className="p-6 rounded-2xl bg-gray-900 border border-gray-800 hover:border-emerald-500/50 transition-colors font-medium">
                  {item}
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-6">3. Usage & Security</h2>
            <p>Your data powers our intelligent systems. We use advanced machine learning to detect fraud and improve search relevance, ensuring your journey remains secure.</p>
          </section>

          <section className="p-10 rounded-[2rem] bg-gradient-to-r from-gray-900 to-gray-800 border border-gray-700 mt-12">
            <h3 className="text-xl font-bold text-white mb-2">Privacy Questions?</h3>
            <p className="text-gray-400">Reach out to our team at any time.</p>
            <a href="mailto:privacy@raahi.io" className="text-emerald-400 font-bold hover:underline mt-4 inline-block">privacy@raahi.io</a>
          </section>
        </div>
      </article>
    </main>
  );
}