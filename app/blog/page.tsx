"use client";
import BlogSection from "@/components/BlogSection";
import { ChevronDown, ChevronLeft, ChevronRight } from "lucide-react";
import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";

const blogData = [
  {
    category: "Empfohlen",
    articles: [
      {
        title:
          "Smart spring cleaning: Getting rid of unwanted household items,\n ethically",
        date: "31. Januar 2024",
        description: "Donate unwanted items during a house clean out",
        link: "#",
      },
    ],
  },
  {
    category: "Trends zum Thema Vertrauen",
    articles: [
      {
        title: "Parcel delivery scams to watch out for all year round",
        date: "31. Januar 2024",
        description:
          "Trends zum Thema VertrauenParcel delivery scams to watch out for all year round",
        link: "#",
      },
      {
        title: "Romance scams: Spot the signs",
        date: "17. Januar 2024",
        description: "Trends zum Thema VertrauenRomance scams: Spot the signs",
        link: "#",
      },
      {
        title:
          "Holiday hoaxes: How scammers take advantage of the holiday season",
        date: "10. November 2023",
        description:
          "Trends zum Thema VertrauenHoliday hoaxes: How scammers take advantage of the holiday season",
        link: "#",
      },
      {
        title: "Gift card scams: What to look out for and how to avoid them",
        date: "1. November 2023",
        description:
          "Trends zum Thema VertrauenGift card scams: What to look out for and how to avoid them",
        link: "#",
      },
    ],
  },
  {
    category: "Bewertungen sind wichtig",
    articles: [
      {
        title: "4 tips for sharing perfect product review photos",
        date: "4. März 2024",
        description:
          "Bewertungen sind wichtig4 tips for sharing perfect product review photos",
        link: "#",
      },
      {
        title: "A critical analysis of the five-star experience",
        date: "12. September 2023",
        description:
          "Bewertungen sind wichtigA critical analysis of the five-star experience",
        link: "#",
      },
      {
        title: "The case for leaving 2, 3, and 4-star reviews",
        date: "4. September 2023",
        description:
          "Bewertungen sind wichtigThe case for leaving 2, 3, and 4-star reviews",
        link: "#",
      },
      {
        title: "How companies use your reviews to get better",
        date: "1. September 2023",
        description:
          "Bewertungen sind wichtigHow companies use your reviews to get better",
        link: "#",
      },
    ],
  },
  {
    category: "Sicherheit für Verbraucher",
    articles: [
      {
        title:
          "Personal liability insurance: Coverage when you’re held responsible ",
        date: "20. Mai 2024",
        description:
          "Sicherheit für VerbraucherPersonal liability insurance: Coverage when you’re held responsible ",
        link: "#",
      },
      {
        title:
          "Understanding auto insurance: Comprehensive, full coverage, and liability explained",
        date: "17. Mai 2024",
        description:
          "Sicherheit für VerbraucherUnderstanding auto insurance: Comprehensive, full coverage, and liability explained",
        link: "#",
      },
      {
        title:
          "Life insurance: Understanding term, whole, and supplemental policies",
        date: "15. Mai 2024",
        description:
          "Sicherheit für VerbraucherLife insurance: Understanding term, whole, and supplemental policies",
        link: "#",
      },
      {
        title:
          "Disability insurance: Short-term, long-term, and everything in between",
        date: "15. Mai 2024",
        description:
          "Sicherheit für VerbraucherDisability insurance: Short-term, long-term, and everything in between",
        link: "#",
      },
    ],
  },
  {
    category: "Rund um Trustpilot",
    articles: [
      {
        title: "Trustpilot Pride & Allies: Our recommended resources",
        date: "12. August 2022",
        description:
          "Rund um TrustpilotTrustpilot Pride & Allies: Our recommended resources",
        link: "#",
      },
      {
        title: "Trustpilot is sponsoring Pride Copenhagen 2022 🏳️‍🌈🎉",
        date: "15. Juli 2022",
        description:
          "Rund um TrustpilotTrustpilot is sponsoring Pride Copenhagen 2022 🏳️‍🌈🎉",
        link: "#",
      },
      {
        title: "Meet the pets of Trustpilot: 2021 Edition",
        date: "8. November 2021",
        description:
          "Rund um TrustpilotMeet the pets of Trustpilot: 2021 Edition",
        link: "#",
      },
      {
        title: "Introducing Trustpilot Pride & Allies",
        date: "20. August 2021",
        description: "Rund um TrustpilotIntroducing Trustpilot Pride & Allies",
        link: "#",
      },
    ],
  },
];

export default function BlogPage() {
  const navRef = useRef<HTMLUListElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);
  const [isDropdownMode, setIsDropdownMode] = useState(false);
  const [blogNavOpen, setBlogNavOpen] = useState(false);

  // Update scroll button state on scroll and resize
  useEffect(() => {
    const updateScrollButtons = () => {
      if (!navRef.current) return;
      const { scrollLeft, scrollWidth, clientWidth } = navRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 1);
    };
    const ul = navRef.current;
    if (ul) {
      ul.addEventListener("scroll", updateScrollButtons);
    }
    window.addEventListener("resize", updateScrollButtons);
    // Initial check
    updateScrollButtons();
    return () => {
      if (ul) {
        ul.removeEventListener("scroll", updateScrollButtons);
      }
      window.removeEventListener("resize", updateScrollButtons);
    };
  }, [navRef]);

  useEffect(() => {
    const handleResize = () => {
      setIsDropdownMode(window.innerWidth < 980);
    };
    handleResize(); // set on mount
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isDropdownMode]);

  // Scroll the nav left or right
  const scrollNav = (dir: "left" | "right") => {
    if (!navRef.current) return;
    const scrollAmount = 200;
    navRef.current.scrollBy({
      left: dir === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };
  const featured = blogData[0];
  const featuredArticle = featured.articles[0];
  return (
    <main>
      <div className="w-full mx-auto bg-[#FCEDE2]">
        <div className="max-w-7xl mx-auto flex flex-col">
          {isDropdownMode ? (
            <>
              {/* Dropdown Header */}
              <button
                className="flex items-center justify-between w-full px-6 py-7 border-b border-gray-200 bg-white font-bold text-base"
                onClick={() => setBlogNavOpen((prev) => !prev)}
              >
                Beliebteste Artikel
                <ChevronDown
                  className={`ml-2 transition-transform duration-300 ${
                    blogNavOpen ? "rotate-180" : ""
                  }`}
                  size={18}
                />
              </button>
              {/* Dropdown Menu */}
              <div
                className={`overflow-hidden transition-all duration-300 bg-white border-b border-gray-200 ${
                  blogNavOpen ? "max-h-96" : "max-h-0"
                }`}
              >
                <ul className="flex flex-col py-2">
                  {[
                    "Beliebteste Artikel",
                    "Trends zum Thema Vertrauen",
                    "Bewertungen sind wichtig",
                    "Sicherheit für Verbraucher",
                    "Rund um Trustpilot",
                  ].map((item) => (
                    <li key={item}>
                      <a
                        href="#"
                        className="block px-6 py-4 text-gray-500 font-medium hover:bg-gray-50 text-sm"
                      >
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </>
          ) : (
            <div className="max-w-7xl mx-auto flex items-center w-full">
              <span className="text-2xl font-bold text-gray-900 whitespace-nowrap flex-shrink-0">
                Der Trustpilot-Blog
              </span>
              <nav
                ref={navRef}
                role="navigation"
                className="flex-grow min-w-0 items-center flex ml-5"
              >
                {canScrollLeft && (
                  <button
                    aria-label="scroll-category-menu-left"
                    className="p-2 hover:bg-gray-200 rounded"
                    onClick={() => scrollNav("left")}
                    type="button"
                  >
                    <span>
                      <ChevronLeft size={22} />
                    </span>
                  </button>
                )}
                <ul
                  ref={navRef}
                  className="w-full max-w-full flex flex-nowrap items-center gap-4 overflow-x-auto whitespace-nowrap scrollbar-thin scrollbar-thumb-gray-300 px-2 py-4.5"
                  style={{ scrollBehavior: "smooth" }}
                >
                  {blogData.map((cat, index) => (
                    <li
                      key={index}
                      className="px-2 py-1 mt-4 flex-shrink-0 flex items-center group hover:underline"
                    >
                      <a
                        href="#"
                        className="block focus:outline-none font-medium text-gray-500 group-hover:text-gray-900 text-sm"
                      >
                        {cat.category}
                      </a>
                    </li>
                  ))}
                </ul>
                {canScrollRight && (
                  <button
                    aria-label="scroll-category-menu-right"
                    className="p-2 hover:bg-gray-200 rounded"
                    onClick={() => scrollNav("right")}
                    type="button"
                  >
                    <span>
                      <ChevronRight size={22} />
                    </span>
                  </button>
                )}
              </nav>
              <form className="ml-8 w-[240px] relative flex-shrink-0">
                <input
                  type="text"
                  placeholder="Artikel suchen"
                  className="w-full border border-gray-300 px-4 py-3.5 pr-10 focus:outline-none focus:ring-2 focus:ring-blue-200 bg-white text-gray-900"
                />
                <button
                  type="submit"
                  className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  <svg
                    width="20"
                    height="20"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <circle cx="11" cy="11" r="7" strokeWidth="2" />
                    <path
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 21l-4.35-4.35"
                    />
                  </svg>
                </button>
              </form>
            </div>
          )}
        </div>
      </div>
      <div className="max-w-7xl mx-auto py-10 px-20 md:px-20 lg:px-0">
        {/* Featured Section */}
        <h1 className="text-3xl md:text-4xl font-bold pt-5">
          {featured.category}
        </h1>
        <div className="flex flex-col-reverse md:flex-row items-stretch gap-8 border-b border-gray-300 pb-22 pt-12">
          {/* Text content */}
          <div className="flex-1 flex flex-col justify-center">
            <div className="flex flex-col gap-4">
              <a href={featuredArticle.link} className="block">
                <span className="text-gray-500 text-xs pb-3 block">
                  {featuredArticle.date}
                </span>
                <h3 className="text-2xl md:text-3xl xl:text-[43px] font-bold mb-2 leading-12 text-left pr-[30px]">
                  {featuredArticle.title.includes(",\n") ? (
                    <>
                      {featuredArticle.title.split(",\n")[0]}
                      ,<br />
                      {featuredArticle.title.split(",\n")[1].trim()}
                    </>
                  ) : (
                    featuredArticle.title
                  )}
                </h3>
              </a>
              <div className="py-3">
                <a
                  href={featuredArticle.link}
                  className="inline-block bg-blue-600 text-white px-6 py-5 rounded font-medium transition"
                >
                  Jetzt lesen
                </a>
              </div>
            </div>
          </div>
          {/* Image */}
          <a
            href={featuredArticle.link}
            className="block w-full md:w-1/2 aspect-[16/9] relative"
          >
            <Image
              width={0}
              height={0}
              src="/donating-unwanted-items.webp"
              alt={featuredArticle.description}
              fill
              className="object-cover rounded"
              sizes="(max-width: 767px) 100vw, 50vw"
              priority
            />
          </a>
        </div>
        {/* Other blog sections */}
        {blogData.slice(1).map((section) => (
          <BlogSection
            key={section.category}
            category={section.category}
            articles={section.articles}
          />
        ))}
      </div>
    </main>
  );
}
