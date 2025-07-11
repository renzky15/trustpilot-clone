import React from "react";
import { Button } from "./ui/button";
import Image from "next/image";

export default function Header() {
  return (
    <div className="bg-[#1C1B1B] text-[#EBE9EC] px-4 py-3 font-trustpilot-reg text-sm font-semibold">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Image
            src="https://cdn.trustpilot.net/brand-assets/4.3.0/logo-white.svg"
            alt="Trustpilot Logo"
            width={140} // or your preferred width
            height={32} // or your preferred height
            className="object-contain" // ensures the logo scales nicely
          />
        </div>
        <nav className="hidden md:flex items-center space-x-6">
          <a
            href="#"
            className=" hover:text-white hover:underline hover:underline-offset-[25px] decoration-4"
          >
            Bewertung abgeben
          </a>
          <a
            href="#"
            className=" hover:text-white hover:underline hover:underline-offset-[25px] decoration-4"
          >
            Kategorien
          </a>
          <a
            href="#"
            className=" hover:text-white hover:underline hover:underline-offset-[25px] decoration-4"
          >
            Blog
          </a>
          <a
            href="#"
            className=" hover:text-white hover:underline hover:underline-offset-[25px] decoration-4"
          >
            Einloggen
          </a>
          <Button className="bg-[#9CC6FF] hover:bg-[#3B4769] text-black font-bold px-6 py-5.5 rounded-full hover:text-white">
            Für Unternehmen
          </Button>
        </nav>
      </div>
    </div>
  );
}
