"use client";

import { useRef } from "react";
import { Button } from "./ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

export default function CategoriesSection() {
  const categories = [
    {
      name: "Bank",
      icon: "https://consumersite-assets.trustpilot.net/consumersite-home/public/categories-icons/_rebrand/banks.svg",
    },
    {
      name: "Reiseversicherung",
      icon: "https://consumersite-assets.trustpilot.net/consumersite-home/public/categories-icons/_rebrand/travel_insurance.svg",
    },
    {
      name: "Autohändler",
      icon: "https://consumersite-assets.trustpilot.net/consumersite-home/public/categories-icons/_rebrand/car_dealer.svg",
    },
    {
      name: "Möbelgeschäft",
      icon: "https://consumersite-assets.trustpilot.net/consumersite-home/public/categories-icons/_rebrand/furniture_store.svg",
    },
    {
      name: "Juweliergeschäft",
      icon: "https://consumersite-assets.trustpilot.net/consumersite-home/public/categories-icons/_rebrand/jewelry_store.svg",
    },
    {
      name: "Bekleidungsgeschäft",
      icon: "https://consumersite-assets.trustpilot.net/consumersite-home/public/categories-icons/_rebrand/clothing_store.svg",
    },
    {
      name: "Elektronik & Technologie",
      icon: "https://consumersite-assets.trustpilot.net/consumersite-home/public/categories-icons/_rebrand/electronics_technology.svg",
    },
    {
      name: "Fitness- und Ernährungsanbieter",
      icon: "https://consumersite-assets.trustpilot.net/consumersite-home/public/categories-icons/_rebrand/fitness_nutrition_center.svg",
    },
  ];

  const categoriesContainerRef = useRef<HTMLDivElement>(null);

  const scrollCategories = (direction: "left" | "right") => {
    const container = categoriesContainerRef.current;
    if (!container) return;
    const scrollAmount = 200;
    container.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };
  return (
    <div>
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold">Wonach suchen Sie?</h2>
          <div className="flex items-center space-x-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => scrollCategories("left")}
            >
              <ChevronLeft className="w-4 h-4 rounded-full text-[color:var(--outline)]" />
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => scrollCategories("right")}
            >
              <ChevronRight className="w-4 h-4 rounded-full text-[color:var(--outline)]" />
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="text-[color:var(--outline)] bg-transparent rounded-full"
            >
              Mehr anzeigen
            </Button>
          </div>
        </div>

        <div
          ref={categoriesContainerRef}
          className="flex overflow-x-auto flex-nowrap gap-x-4 py-2 px-1 scrollbar-hide"
        >
          {categories.map((category, index) => (
            <div
              key={index}
              className="flex flex-col items-center p-4 transition-shadow cursor-pointer w-auto min-w-fit"
            >
              <Image
                src={category.icon}
                alt={category.name}
                width={30}
                height={30}
                className="mb-2"
              />
              <span className="text-sm hover:underline hover:underline-offset-1 text-center font-normal">
                {category.name}
              </span>
            </div>
          ))}
        </div>
      </div>
      {/* Business CTA Banner */}
      <div className="relative max-w-6xl mx-auto px-4 bg-pink-200/80 hover:bg-pink-100 rounded-4xl transform transition-colors overflow-hidden">
        <div className="p-6 flex items-center justify-between">
          <div>
            <h3 className="text-lg font-bold mb-1">
              Sie möchten Ihr Unternehmen voranbringen?
            </h3>
            <p>
              Verbessern Sie Ihre Reputation mit echten Bewertungen auf
              Trustpilot.
            </p>
          </div>
          <Button className="bg-gray-900 hover:bg-gray-800 text-white px-6 py-6 rounded-full whitespace-nowrap ml-4 z-20">
            Los geht&apos;s
          </Button>
        </div>

        <div className="absolute right-14 top-3 bottom-0 flex items-end h-full w-[250px] pointer-events-none z-10">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 504 76"
            width="100%"
            height="100%"
            preserveAspectRatio="none"
            style={{ width: "100%", height: "100%" }}
          >
            <defs>
              <clipPath id="__lottie_element_13">
                <rect width="504" height="76" x="0" y="0"></rect>
              </clipPath>
            </defs>
            <g clipPath="url(#__lottie_element_13)">
              <g transform="matrix(1,0,0,1,0,58.34567642211914)">
                <path
                  fill="#ffc5d4"
                  d="M0,8C0,3.58,3.58,0,8,0C8,0,80,0,80,0C84.42,0,88,3.58,88,8C88,8,88,17.65,88,17.65C88,17.65,0,17.65,0,17.65C0,17.65,0,8,0,8C0,8,0,8,0,8z"
                />
              </g>
              <g transform="matrix(1,0,0,1,104,41.725303649902344)">
                <path
                  fill="#ffc5d4"
                  d="M0,8C0,3.58,3.58,0,8,0C8,0,80,0,80,0C84.42,0,88,3.58,88,8C88,8,88,34.27,88,34.27C88,34.27,0,34.27,0,34.27C0,34.27,0,8,0,8C0,8,0,8,0,8z"
                />
              </g>
              <g transform="matrix(1,0,0,1,208,33.861114501953125)">
                <path
                  fill="#ffc5d4"
                  d="M0,8C0,3.58,3.58,0,8,0C8,0,80,0,80,0C84.42,0,88,3.58,88,8C88,8,88,42.14,88,42.14C88,42.14,0,42.14,0,42.14C0,42.14,0,8,0,8C0,8,0,8,0,8z"
                />
              </g>
              <g transform="matrix(1,0,0,1,312,17.654321670532227)">
                <path
                  fill="#ffc5d4"
                  d="M0,8C0,3.58,3.58,0,8,0C8,0,80,0,80,0C84.42,0,88,3.58,88,8C88,8,88,58.35,88,58.35C88,58.35,0,58.35,0,58.35C0,58.35,0,8,0,8C0,8,0,8,0,8z"
                />
              </g>
              <g transform="matrix(1,0,0,1,416,3.1018524169921875)">
                <path
                  fill="#ffc5d4"
                  d="M0,8C0,3.58,3.58,0,8,0C8,0,80,0,80,0C84.42,0,88,3.58,88,8C88,8,88,72.90,88,72.90C88,72.90,0,72.90,0,72.90C0,72.90,0,8,0,8C0,8,0,8,0,8z"
                />
              </g>
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}
