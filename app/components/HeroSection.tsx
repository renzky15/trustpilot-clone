import { Search } from "lucide-react";
import HeroShapes from "./HeroShapes";
import { Input } from "./ui/input";

export default function HeroSection() {
  return (
    <>
      {/* Background Shapes */}
      <div className="bg-[#FCFBF3] overflow-hidden py-10">
        <div className="relative max-w-4xl mx-auto px-4 py-16 text-center">
          {/* SVG Hero Animation Background */}
          <HeroShapes />
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight">
            Finden Sie ein Unternehmen,
            <br />
            dem Sie vertrauen können
          </h1>
          <p className="text-2xl font-bold font-trustpilot-reg mb-8">
            Finden, lesen und schreiben Sie Bewertungen.
          </p>

          {/* Search Bar */}
          <form
            className="flex bg-white rounded-full shadow-lg border border-gray-200 overflow-hidden items-center max-w-10/12 mx-auto"
            role="search"
          >
            <Input
              type="search"
              name="query"
              placeholder="Unternehmen oder Kategorie suchen "
              className="flex-1 border-0 px-6 py-7.5 text-lg focus:ring-0 focus:outline-none rounded-full focus-visible:ring-0 focus-visible:ring-offset-0 font-medium"
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
              className="ml-2 flex items-center justify-center bg-[#3C56BD] hover:bg-[#F2F4FE] text-white rounded-full w-12 h-12 p-0 mx-2"
              aria-label="Unternehmen oder Kategorie suchen "
              type="submit"
              data-search-button-button="true"
            >
              <span className="flex items-center justify-center">
                <Search className="w-3 h-3" aria-hidden="true" />
              </span>
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
