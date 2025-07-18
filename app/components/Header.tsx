"use client";
import React, { useState, useEffect } from "react";
import { Button } from "./ui/button";
import Image from "next/image";

interface HeaderProps {
  showSearch?: boolean;
  bgColor: string;
}

const navLinks = [
  { href: "#", label: "Bewertung abgeben" },
  { href: "#", label: "Kategorien" },
  { href: "#", label: "Blog" },
  { href: "#", label: "Einloggen" },
];

const Header: React.FC<HeaderProps> = ({ showSearch, bgColor }) => {
  const [mobileOpen, setMobileOpen] = useState(false);

  // Automatically close mobile nav on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMobileOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      className={`w-full ${bgColor} text-[#EBE9EC] px-4 py-3 font-trustpilot-reg text-sm font-semibold sticky top-0 z-50`}
    >
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
              aria-label={mobileOpen ? "Menü schließen" : "Menü öffnen"}
              onClick={() => setMobileOpen((open) => !open)}
            >
              {mobileOpen ? (
                // Close (X) icon
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
              ) : (
                // Hamburger icon
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
              )}
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
      {/* Mobile nav overlay and panel */}
      <div>
        {/* Overlay */}
        <div
          className={`fixed left-0 right-0 top-14 z-40 bg-[#1c1c1c]/30 bg-opacity-70 transition-opacity duration-300 ${
            mobileOpen
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          }`}
          onClick={() => setMobileOpen(false)}
          aria-hidden="true"
        />
        {/* Slide-in panel */}
        <div
          className={`fixed top-17 right-0 h-[calc(100vh-56px)] w-80 max-w-full bg-[#1c1c1c] z-20 shadow-lg flex flex-col transition-transform duration-300 ease-in-out ${
            mobileOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {/* Top bar with search */}
          <div className="flex items-center justify-between px-4 py-4 border-b border-[#23242a]">
            <Button className="w-full bg-transparent border border-[#3B4769] text-[#9CC6FF] font-bold py-2 rounded-full hover:bg-[#1a1a1a] hover:text-white mr-2">
              Für Unternehmen
            </Button>
          </div>
          {/* Search icon and nav links */}
          <div className="flex flex-col px-4 pt-4">
            <div className="flex items-center mb-6">
              <svg
                width="20"
                height="20"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="text-[#9CC6FF] mr-2"
              >
                <circle
                  cx="11"
                  cy="11"
                  r="8"
                  stroke="#9CC6FF"
                  strokeWidth="2"
                />
                <line
                  x1="21"
                  y1="21"
                  x2="16.65"
                  y2="16.65"
                  stroke="#9CC6FF"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
              <input
                type="search"
                placeholder="Suchen …"
                className="flex-1 px-3 py-2 rounded-lg bg-[#23242a] text-white placeholder-[#9CC6FF] focus:outline-none border border-[#23242a]"
              />
            </div>
            <nav className="flex flex-col gap-2 w-full">
              <a
                href="#"
                className="text-[#9CC6FF] font-bold py-2 flex items-center border-b border-[#23242a] hover:bg-[#23242a] transition-colors"
              >
                Einloggen <span className="ml-auto">→</span>
              </a>
              <a
                href="#"
                className="text-white font-bold py-2 border-b border-[#23242a] hover:bg-[#23242a] transition-colors"
              >
                Bewertung abgeben
              </a>
              <a
                href="#"
                className="text-white font-bold py-2 border-b border-[#23242a] hover:bg-[#23242a] transition-colors"
              >
                Kategorien
              </a>
              <a
                href="#"
                className="text-white font-bold py-2 hover:bg-[#23242a] transition-colors"
              >
                Blog
              </a>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
