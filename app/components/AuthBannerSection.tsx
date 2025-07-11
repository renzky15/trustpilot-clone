"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Button } from "./ui/button";

const AUTH_IMAGES = [
  [
    {
      src: "https://consumersite-assets.trustpilot.net/consumersite-home/public/authenticationBanner/auth_banner_1-1.jpg",
      alt: "authenticationBanner/auth_banner_1-1.jpg",
    },
    {
      src: "https://consumersite-assets.trustpilot.net/consumersite-home/public/authenticationBanner/auth_banner_1-3.jpg",
      alt: "authenticationBanner/auth_banner_1-3.jpg",
    },
  ],
  [
    {
      src: "https://consumersite-assets.trustpilot.net/consumersite-home/public/authenticationBanner/auth_banner_2-5.jpg",
      alt: "authenticationBanner/auth_banner_2-5.jpg",
    },
    {
      src: "https://consumersite-assets.trustpilot.net/consumersite-home/public/authenticationBanner/auth_banner_2-6.jpg",
      alt: "authenticationBanner/auth_banner_2-6.jpg",
    },
  ],
  [
    {
      src: "https://consumersite-assets.trustpilot.net/consumersite-home/public/authenticationBanner/auth_banner_3-2.jpg",
      alt: "authenticationBanner/auth_banner_3-2.jpg",
    },
    {
      src: "https://consumersite-assets.trustpilot.net/consumersite-home/public/authenticationBanner/auth_banner_3-3.jpg",
      alt: "authenticationBanner/auth_banner_3-3.jpg",
    },
  ],
];

const OAUTH = [
  {
    href: "/users/connect?redirect=%2f&source_cta=auth_banner_google",
    src: "https://consumersite-assets.trustpilot.net/consumersite-home/public/authenticationBanner/google-logo.svg",
    alt: "Google",
    width: 22,
    height: 22,
  },
  {
    href: "/users/connect?redirect=%2f&source_cta=auth_banner_facebook",
    src: "https://consumersite-assets.trustpilot.net/consumersite-home/public/authenticationBanner/facebook-logo.svg",
    alt: "Facebook",
    width: 24,
    height: 24,
  },
  {
    href: "/users/connect?redirect=%2f&source_cta=auth_banner_apple",
    src: "https://consumersite-assets.trustpilot.net/consumersite-home/public/authenticationBanner/apple-logo.svg",
    alt: "Apple",
    width: 24,
    height: 24,
  },
];

const AuthBannerSection = () => {
  // Only one image is flipped at a time (randomly)
  const [flippedIndex, setFlippedIndex] = useState<number | null>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setFlippedIndex((prev) => {
        let next;
        do {
          next = Math.floor(Math.random() * AUTH_IMAGES.length);
        } while (next === prev && AUTH_IMAGES.length > 1);
        return next;
      });
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 py-14 px-10 rounded-3xl bg-[#FEEED6]/60">
      {/* Left: Text and Buttons */}
      <div className="flex-1 min-w-[320px]">
        <h2 className="hidden md:block text-3xl font-extrabold mb-2">
          Erleichtern Sie Millionen anderer Menschen die Wahl
        </h2>
        <h2 className="md:hidden text-2xl font-bold mb-2">
          Erleichtern Sie Millionen anderer Menschen die Wahl
        </h2>
        <p className="text-lg text-black mb-6">
          Teilen Sie Ihre Erfahrung auf Trustpilot, wo echte Bewertungen einen
          echten Unterschied machen.
        </p>
        <div className="flex items-center gap-3">
          <Button
            variant="ghost"
            className=" bg-black text-white  py-6 px-6 rounded-full text-base font-bold text-center transition-colors hover:text-black hover:bg-[#eddbc1]"
          >
            Einloggen oder anmelden
          </Button>
          <div className="border-l border-black w-0.5 h-10 "></div>
          <div className="flex gap-2">
            {OAUTH.map((oauth) => (
              <a
                key={oauth.alt}
                href={oauth.href}
                target="_self"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center border border-gray-900 rounded-full p-2 shadow-sm hover:shadow-md transition"
              >
                <Image
                  src={oauth.src}
                  alt={oauth.alt}
                  width={oauth.width}
                  height={oauth.height}
                />
              </a>
            ))}
          </div>
        </div>
      </div>
      {/* Right: Flipping Images */}
      <div className="flex-1 flex flex-row gap-4 h-72 w-full max-w-6/12">
        {AUTH_IMAGES.map((pair, idx) => (
          <div
            key={idx}
            className="w-40 h-full rounded-xl overflow-hidden shadow-lg perspective-[800px]"
          >
            <div
              className={`relative w-full h-full transition-transform duration-1000 [transform-style:preserve-3d] ${
                flippedIndex === idx ? "rotate-y-180" : ""
              }`}
            >
              {/* Front */}
              <div className="absolute inset-0 w-full h-full [backface-visibility:hidden]">
                <Image
                  src={pair[0].src}
                  alt={pair[0].alt}
                  width={400}
                  height={400}
                  className="object-cover w-full h-full"
                />
              </div>
              {/* Back */}
              <div className="absolute inset-0 w-full h-full [backface-visibility:hidden] rotate-y-180">
                <Image
                  src={pair[1].src}
                  alt={pair[1].alt}
                  width={400}
                  height={400}
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AuthBannerSection;
