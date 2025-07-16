"use client";
import BlogSection from "@/components/BlogSection";
import { ChevronLeft, ChevronRight } from "lucide-react";
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

  const updateScrollButtons = () => {
    if (navRef.current) {
      setCanScrollLeft(navRef.current.scrollLeft > 0);
      setCanScrollRight(
        navRef.current.scrollLeft + navRef.current.clientWidth <
          navRef.current.scrollWidth - 1
      );
    }
  };

  useEffect(() => {
    updateScrollButtons();
    const nav = navRef.current;
    if (nav) {
      nav.addEventListener("scroll", updateScrollButtons);
      window.addEventListener("resize", updateScrollButtons);
      return () => {
        nav.removeEventListener("scroll", updateScrollButtons);
        window.removeEventListener("resize", updateScrollButtons);
      };
    }
  }, []);

  const scrollNav = (dir: "left" | "right") => {
    if (navRef.current) {
      const amount = 200;
      navRef.current.scrollBy({
        left: dir === "left" ? -amount : amount,
        behavior: "smooth",
      });
    }
  };
  const featured = blogData[0];
  const featuredArticle = featured.articles[0];
  return (
    <main>
      <div className="w-full mx-auto bg-[#FCEDE2]">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-8 flex-grow w-9/12">
            <span className="text-2xl font-bold text-gray-900 whitespace-nowrap">
              Der Trustpilot-Blog
            </span>
            <nav role="navigation" className="flex items-center flex-1 min-w-0">
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
                className="flex items-center gap-4 overflow-x-auto whitespace-nowrap scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent px-2 py-4.5"
                style={{ scrollBehavior: "smooth" }}
              >
                {blogData.map((cat, index) => (
                  <li
                    key={index}
                    className={`px-2 py-1 mt-4 flex items-center decoration-3 no-underline underline-offset-[23px] group hover:underline`}
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
          </div>
          <form className="ml-8 w-full relative">
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
      </div>
      <div className="max-w-7xl mx-auto py-10">
        {/* Featured Section */}
        <h1 className="text-3xl md:text-4xl font-bold pt-5">
          {featured.category}
        </h1>
        <div className="flex flex-col md:flex-row items-stretch gap-8 border-b border-gray-300 pb-22 pt-12">
          <div className="flex-1 flex flex-col">
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
                  className="inline-block bg-blue-600 text-white px-6 py-5 rounded  font-medium transition"
                >
                  Jetzt lesen
                </a>
              </div>
            </div>
          </div>
          <a
            href={featuredArticle.link}
            className="block flex-1 min-w-[300px] max-w-6/12 aspect-[16/9] relative"
          >
            <Image
              width={0}
              height={0}
              src="/donating-unwanted-items.webp"
              alt={featuredArticle.description}
              fill
              className="object-cover"
              sizes="(max-width: 767px) 50vw, 35vw"
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
