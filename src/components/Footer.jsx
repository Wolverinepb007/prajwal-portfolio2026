import React from 'react';
import { profile } from '../data/portfolioData';

export default function Footer() {
  return (
    <footer className="py-16 border-t border-white/10 text-center text-[#9ca3af]">
      <div className="max-w-[1100px] mx-auto px-8">
        <p>&copy; {new Date().getFullYear()} {profile.name}. All rights reserved.</p>
        <p className="mt-4 text-xs font-mono opacity-70">Built with React & Passion</p>
      </div>
    </footer>
  );
}
