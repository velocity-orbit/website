'use client';
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/careers", label: "Careers" },
  { href: "/team", label: "Team" },
  { href: "/about", label: "About Us" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="h-20 w-full flex items-center justify-between px-4 text-gray-200 relative z-50">
      {/* Logo */}
      <div className="flex items-center gap-4 text-white">
        <Image src="/Logo.png" alt="logo" height={30} width={30} />
        <span className="text-xl font-bold">Velocity Orbit</span>
      </div>

      {/* Desktop links */}
      <div className="hidden md:flex items-center gap-12">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="font-semibold transition duration-300 hover:text-white hover:drop-shadow-[0_0_8px_rgba(255,255,255)]"
          >
            {link.label}
          </Link>
        ))}
      </div>

      {/* Hamburger button */}
      <button
        className="md:hidden flex flex-col justify-center items-center gap-[5px] w-8 h-8 focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
      >
        <span className={`block h-0.5 w-6 bg-white transition-all duration-300 ${isOpen ? "rotate-45 translate-y-[7px]" : ""}`} />
        <span className={`block h-0.5 w-6 bg-white transition-all duration-300 ${isOpen ? "opacity-0" : ""}`} />
        <span className={`block h-0.5 w-6 bg-white transition-all duration-300 ${isOpen ? "-rotate-45 -translate-y-[7px]" : ""}`} />
      </button>

      {/* Mobile menu dropdown */}
      <div
        className={`md:hidden absolute top-20 left-0 w-full bg-black/95 backdrop-blur-md border-t border-white/10 flex flex-col items-start px-6 gap-0 overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-96 py-4" : "max-h-0"
        }`}
      >
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            onClick={() => setIsOpen(false)}
            className="w-full py-3 font-semibold text-gray-200 border-b border-white/10 last:border-0 transition duration-300 hover:text-white hover:drop-shadow-[0_0_8px_rgba(255,255,255)]"
          >
            {link.label}
          </Link>
        ))}
      </div>
    </nav>
  );
}
