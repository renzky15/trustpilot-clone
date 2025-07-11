"use client";
import React, { useState } from "react";
import { Button } from "./ui/button";
import Image from "next/image";

interface HeaderProps {
  showSearch?: boolean;
}

const navLinks = [
  { href: "#", label: "Bewertung abgeben" },
  { href: "#", label: "Kategorien" },
  { href: "#", label: "Blog" },
  { href: "#", label: "Einloggen" },
];

const Header: React.FC<HeaderProps> = ({ showSearch }) => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="w-full bg-[#1C1B1B] text-[#EBE9EC] px-4 py-3 font-trustpilot-reg text-sm font-semibold sticky top-0 z-50">
      <div className="max-w-6xl w-full mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-3 md:gap-0">
        <div className="flex flex-col md:flex-row md:items-center md:space-x-2 w-full">
          <div className="flex items-center justify-between w-full md:w-auto">
            <Image
              src="https://cdn.trustpilot.net/brand-assets/4.3.0/logo-white.svg"
              alt="Trustpilot Logo"
              width={140}
              height={32}
              className="object-contain"
            />
            {/* Mobile menu button */}
            <button
              className="md:hidden p-2 ml-2 rounded focus:outline-none focus:ring-2 focus:ring-white"
              aria-label="Menü öffnen"
              onClick={() => setMobileOpen(true)}
            >
              <svg
                width="28"
                height="28"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
          {showSearch && (
            <input
              type="search"
              placeholder="Unternehmen oder Kategorie suchen …"
              className="mt-3 md:mt-0 md:ml-4 px-4 py-2 rounded-lg bg-white text-black w-full md:w-80 max-w-full md:max-w-xs focus:outline-none border border-gray-200 shadow-sm"
            />
          )}
        </div>
        {/* Desktop nav */}
        <nav className="hidden md:flex items-center space-x-6 mt-3 md:mt-0">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className=" hover:text-white hover:underline hover:underline-offset-[25px] decoration-4 xl:min-w-fit"
            >
              {link.label}
            </a>
          ))}
          <Button className="bg-[#9CC6FF] hover:bg-[#3B4769] text-black font-bold px-6 py-5.5 rounded-full hover:text-white">
            Für Unternehmen
          </Button>
        </nav>
      </div>
      {/* Mobile nav overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-90 flex flex-col items-center justify-center md:hidden">
          <button
            className="absolute top-6 right-6 p-2 rounded focus:outline-none focus:ring-2 focus:ring-white"
            aria-label="Menü schließen"
            onClick={() => setMobileOpen(false)}
          >
            <svg
              width="28"
              height="28"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          <nav className="flex flex-col items-center gap-8 mt-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-white text-xl font-bold hover:underline"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <Button
              className="bg-[#9CC6FF] hover:bg-[#3B4769] text-black font-bold px-8 py-4 rounded-full hover:text-white mt-4"
              onClick={() => setMobileOpen(false)}
            >
              Für Unternehmen
            </Button>
          </nav>
        </div>
      )}
    </div>
  );
};

export default Header;
