import Image from "next/image";
import React from "react";

interface SearchDropdownProps {
  visible: boolean;
}

const sampleCompanies = [
  {
    name: "DF Automotive",
    url: "www.df-automotive.de",
    reviews: 489,
    rating: 4.4,
    logo: "/company1.png",
  },
  {
    name: "DomainFactory",
    url: "www.df.eu",
    reviews: 4775,
    rating: 4.1,
    logo: "/company2.png",
  },
  {
    name: "DF- SPORTSPECIALIST",
    url: "www.df-sportspecialist.it",
    reviews: 1317,
    rating: 3.5,
    logo: "/company3.png",
  },
  {
    name: "Dieselfixneuss",
    url: "dieselfixneuss.de",
    reviews: 1852,
    rating: 4.7,
    logo: "/company4.png",
  },
  {
    name: "DFS Furniture",
    url: "www.dfs.co.uk",
    reviews: 548111,
    rating: 4.8,
    logo: "/company5.png",
  },
];

const sampleCategories = [
  {
    name: "Kfz-Ersatzteilgeschäft",
    desc: "Die besten Unternehmen in der Kategorie Kfz-Ersatzteilgeschäft",
    icon: "/category1.svg",
  },
  {
    name: "Herrenmodengeschäft",
    desc: "Die besten Unternehmen in der Kategorie Herrenmodengeschäft",
    icon: "/category2.svg",
  },
  {
    name: "Reifenhandel",
    desc: "Die besten Unternehmen in der Kategorie Reifenhandel",
    icon: "/category3.svg",
  },
];

const SearchDropdown: React.FC<SearchDropdownProps> = ({ visible }) => {
  if (!visible) return null;
  return (
    <div className="absolute left-0 sm:left-1/2 sm:-translate-x-1/2 mt-2 w-full sm:max-w-2xl bg-white rounded-2xl shadow-xl border border-gray-200 z-50 overflow-x-hidden">
      <div className="p-3 sm:p-4">
        <div className="text-xs font-bold text-gray-500 mb-2 text-left">
          Unternehmen
        </div>
        {sampleCompanies.map((c, i) => (
          <div
            key={i}
            className={`flex items-center justify-between px-2 py-3 sm:py-2 rounded-lg hover:bg-gray-100 cursor-pointer ${
              i === 2 ? "bg-[#F2F4FE]" : ""
            }`}
          >
            <div className="flex items-center gap-3">
              <Image
                width={0}
                height={0}
                src={c.logo}
                alt={c.name}
                className="w-8 h-8 rounded"
              />
              <div>
                <div className="font-bold text-sm text-left">{c.name}</div>
                <div className="text-xs text-gray-500 text-left">
                  {c.url} · {c.reviews.toLocaleString()} Bewertungen
                </div>
              </div>
            </div>
            <div
              className={`flex items-center gap-1 px-2 py-1 rounded ${
                c.rating >= 4.5
                  ? "bg-[#00B67A]"
                  : c.rating >= 4
                  ? "bg-[#73CF11]"
                  : "bg-[#FFCC00]"
              }`}
            >
              <svg
                width="16"
                height="16"
                fill="currentColor"
                className="text-white"
              >
                <path d="M8 12.472l-4.472 2.35.854-4.98L1 6.678l5.014-.728L8 1.5l1.986 4.45 5.014.728-3.382 3.164.854 4.98z" />
              </svg>
              <span className="text-xs font-bold text-white">
                {c.rating.toFixed(1)}
              </span>
            </div>
          </div>
        ))}
        <div className="text-xs font-bold text-gray-500 mt-4 mb-2 text-left">
          Kategorien
        </div>
        {sampleCategories.map((cat, i) => (
          <div
            key={i}
            className="flex items-center gap-3 px-2 py-3 sm:py-2 rounded-lg hover:bg-gray-100 cursor-pointer"
          >
            <Image
              width={0}
              height={0}
              src={cat.icon}
              alt={cat.name}
              className="w-6 h-6"
            />
            <div>
              <div className="font-bold text-sm text-left">{cat.name}</div>
              <div className="text-xs text-gray-500 text-left">{cat.desc}</div>
            </div>
          </div>
        ))}
        <button className="w-full mt-4 bg-[#3C56BD] hover:bg-[#2a3e8c] text-white font-bold py-3 rounded-full text-base flex items-center justify-center gap-2">
          Alle Ergebnisse anzeigen <span aria-hidden>→</span>
        </button>
      </div>
    </div>
  );
};

export default SearchDropdown;
