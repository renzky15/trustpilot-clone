"use client";
import { Search } from "lucide-react";
import HeroShapes from "./HeroShapes";
import { Input } from "./ui/input";
import SearchDropdown from "./SearchDropdown";
import { useRef, useState } from "react";

export default function HeroSection() {
  const [showDropdown, setShowDropdown] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);
  return (
    <>
      {/* Background Shapes */}
      <div className="bg-[#FCFBF3] py-10 z-10">
        <div className="relative max-w-4xl w-full mx-auto px-4 sm:px-4 py-10 sm:py-16 text-center">
          {/* SVG Hero Animation Background */}
          <HeroShapes />
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-extrabold mb-4 leading-tight break-words">
            Finden Sie ein Unternehmen,
            <br />
            dem Sie vertrauen können
          </h1>
          <p className="text-base sm:text-2xl font-bold font-trustpilot-reg mb-8">
            Finden, lesen und schreiben Sie Bewertungen.
          </p>

          {/* Search Bar */}
          <form
            ref={formRef}
            className="flex bg-white rounded-full shadow-lg border border-gray-200 items-center w-full max-w-sm sm:max-w-lg lg:max-w-2xl mx-auto"
            role="search"
            onFocus={() => setShowDropdown(true)}
            onBlur={(e) => {
              // Only close if focus leaves the form and its children
              if (!formRef.current?.contains(e.relatedTarget as Node)) {
                setShowDropdown(false);
              }
            }}
          >
            <Input
              type="search"
              name="query"
              placeholder="Unternehmen oder Kategorie suchen "
              className="flex-1 border-0 px-4 sm:px-6 py-4 sm:py-7.5 text-base sm:text-lg focus:ring-0 focus:outline-none rounded-full focus-visible:ring-0 focus-visible:ring-offset-0 font-medium min-w-0"
              data-home-search-input="true"
              aria-label="search input field"
              autoComplete="off"
            />
            <Input
              type="search"
              name="autocomplete query"
              placeholder=""
              className="hidden"
              data-home-search-input="true"
              readOnly
              disabled
              aria-hidden="true"
              aria-label="Search suggestion"
              autoComplete="off"
            />
            <button
              name="search-button"
              className="ml-2 flex items-center justify-center bg-[#3C56BD] hover:bg-[#F2F4FE] text-white hover:text-black rounded-full w-8 h-8 p-0 mx-2 sm:h-12 sm:w-12 lg:h-12 lg:w-12"
              aria-label="Unternehmen oder Kategorie suchen "
              type="submit"
              data-search-button-button="true"
            >
              <span className="flex items-center justify-center">
                <Search className="w-3 h-3" aria-hidden="true" />
              </span>
            </button>
          </form>
          <div className="relative w-full max-w-sm sm:max-w-lg lg:max-w-3xl mx-auto">
            <SearchDropdown visible={showDropdown} />
          </div>
        </div>
      </div>
    </>
  );
}
