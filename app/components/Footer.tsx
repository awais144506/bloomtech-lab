'use client';

import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full bg-[#666555] px-14 py-10 text-white">
      <div className="relative flex flex-col items-center">
        <div className="md:absolute md:left-0 md:top-0">
          <a href="https://www.humanrightsfirst.org/" target="_blank" rel="noopener noreferrer">
            <Image
              src="/logo.png"
              alt="Human Rights First Logo"
              width={150}
              height={80}
              className="object-contain"
            />
          </a>
        </div>
        <div className="flex flex-col items-center text-center space-y-1 mb-10">
          <p className="text-lg">Human Rights First</p>
          <p className="text-lg">75 Broad St, 31st Floor</p>
          <p className="text-lg">New York, New York 10004 US</p>
          <p className="pt-6 text-lg">For Media Inquiries call 202-370-333</p>
        </div>
      </div>
      <nav className="flex flex-wrap items-center justify-center gap-x-12 gap-y-4">
        <button className="text-lg font-medium hover:text-amber-200 transition-colors">About Us</button>
        <button className="text-lg font-medium hover:text-amber-200 transition-colors">Contact Us</button>
        <button className="text-lg font-medium hover:text-amber-200 transition-colors">Press</button>
        <button className="text-lg font-medium hover:text-amber-200 transition-colors">Terms & Privacy</button>
        <button className="text-lg font-medium hover:text-amber-200 transition-colors">Sign Up</button>
        <button className="text-lg font-medium hover:text-amber-200 transition-colors">Careers</button>
      </nav>
    </footer>
  );
}