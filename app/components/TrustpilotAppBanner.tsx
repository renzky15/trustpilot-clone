import Image from "next/image";
import React from "react";

const AppStoreBadge = () => (
  <Image
    width={0}
    height={0}
    src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
    alt="Laden im App Store"
    className="h-10 w-auto"
  />
);

const PhoneIllustration = () => (
  <svg
    width="80"
    height="120"
    viewBox="0 0 80 120"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="block"
  >
    <rect
      x="8"
      y="8"
      width="64"
      height="104"
      rx="12"
      fill="#fff"
      stroke="#009272"
      strokeWidth="2"
    />
    <rect x="16" y="20" width="48" height="80" rx="6" fill="#E6F7F1" />
    <rect
      x="24"
      y="32"
      width="32"
      height="16"
      rx="3"
      fill="#009272"
      fillOpacity=".2"
    />
    <rect
      x="24"
      y="54"
      width="32"
      height="8"
      rx="2"
      fill="#009272"
      fillOpacity=".2"
    />
    <rect
      x="24"
      y="68"
      width="32"
      height="24"
      rx="3"
      fill="#009272"
      fillOpacity=".2"
    />
    <circle cx="40" cy="104" r="3" fill="#D1D5DB" />
  </svg>
);

const TrustpilotAppBanner: React.FC = () => (
  <section className="w-full max-w-6xl mx-auto my-8 px-4">
    <div className="flex items-center bg-white border border-gray-200 rounded-2xl p-6 md:p-10 min-h-[160px]">
      <div className="flex-shrink-0 mr-6 md:mr-10">
        <PhoneIllustration />
      </div>
      <div className="flex flex-col gap-3">
        <div className="font-bold text-lg md:text-xl text-[#222]">
          Besser informiert einkaufen mit der Trustpilot-App
        </div>
        <div className="text-gray-800 text-base md:text-lg">
          Finden Sie Unternehmen, lesen oder schreiben Sie Bewertungen –
          jederzeit und überall.
        </div>
        <div className="mt-2">
          <AppStoreBadge />
        </div>
      </div>
    </div>
  </section>
);

export default TrustpilotAppBanner;
