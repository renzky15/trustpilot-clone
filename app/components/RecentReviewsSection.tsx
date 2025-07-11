import React from "react";
import ReviewCard from "./ReviewCard";

const reviews = [
  {
    user: {
      name: "Roman Kromp",
      avatar:
        "https://user-images.trustpilot.com/66a87313c486d789ed38ce7a/64x64.png",
    },
    rating: 1,
    review:
      "⭐ 1 Stern – Großer Händler, katastrophaler Service Ich hatte mit vielen Online-Händlern zu tun – aber so einen enttäuschenden, kundenfeindlichen Service wie bei Galaxus habe ich noch nie erlebt. Ich meldete an...",
    company: {
      name: "galaxus.at",
      logo: "/public/file.svg",
      website: "galaxus.at",
    },
  },
  {
    user: {
      name: "Andree Wolff",
      avatar:
        "https://user-images.trustpilot.com/66a87313c486d789ed38ce7b/64x64.png",
    },
    rating: 1,
    review:
      "Bei Anreise im Hotel B&B Wuppertal wurde mir durch die Rezeption mitgeteilt, dass die Klimaanlage im gesamten Hotel defekt ist. Ein Umzug in das 300…",
    company: {
      name: "CHECK24",
      logo: "/public/file.svg",
      website: "www.check24.de",
    },
  },
  {
    user: {
      name: "Nilgün Aktan",
      avatar: undefined,
      initialBg: "#FF9900",
    },
    rating: 1,
    review:
      "Ich habe kurz nach meiner Bestellung per E-Mail um eine Stornierung gebeten, keine fünf Minuten später. Trotzdem wurde mir am nächsten Morgen…",
    company: {
      name: "Sunday Natural",
      logo: "/public/file.svg",
      website: "sunday.de",
    },
  },
  {
    user: {
      name: "Erich Gnoyke",
      avatar: undefined,
      initialBg: "#009272",
    },
    rating: 3,
    review:
      "Konstellation Rente und Einkommen aus Teilzeitbeschäftigung bei Zusammenveranlagung mit Partner, der ebenfalls Einkomme…",
    company: {
      name: "Zasta",
      logo: "/public/file.svg",
      website: "www.zasta.de",
    },
  },
  {
    user: {
      name: "Jana",
      avatar:
        "https://user-images.trustpilot.com/66a87313c486d789ed38ce7c/64x64.png",
    },
    rating: 1,
    review:
      "Was soll das? Seit letzten Samstag sind 2 Pakete laut Sendestatus in meiner Region angekommen. Das eine Paket wurde Montag früh ins…",
    company: {
      name: "DHL",
      logo: "/public/file.svg",
      website: "www.dhl.de",
    },
  },
  {
    user: {
      name: "Natascha K",
      avatar: undefined,
      initialBg: "#E6007A",
    },
    rating: 1,
    review:
      "FINGER WEG! Absolute Frechheit wie hier mit Retouren Geld gemacht wird. Wenn man Sachen bestellt hat die einem dann nicht passen, muss man auf EIGENE…",
    company: {
      name: "VintageLadies",
      logo: "/public/file.svg",
      website: "vintageladies.de",
    },
  },
  {
    user: {
      name: "Michael Wienand",
      avatar: undefined,
      initialBg: "#009272",
    },
    rating: 1,
    review:
      "Leider muss ich eine sehr negative Bewertung abgeben, da ich seit Einleiten eines Retoureprozesses vor 6 Wochen weder Geld noch meine Playstation ersetzt…",
    company: {
      name: "reBuy.de",
      logo: "/public/file.svg",
      website: "www.rebuy.de",
    },
  },
  {
    user: {
      name: "Maren Rasmussen",
      avatar:
        "https://user-images.trustpilot.com/66a87313c486d789ed38ce7d/64x64.png",
    },
    rating: 3,
    review:
      "In unserem Mehrfamilienhaus waren 2 Mitarbeiter von der Telekom unterwegs. In jedem Haushalt, der anwesend war erzählten sie ihren Spruch. Wir…",
    company: {
      name: "Deutsche Telekom",
      logo: "/public/file.svg",
      website: "telecom.de",
    },
  },
];

const RecentReviewsSection: React.FC = () => (
  <section className="w-full max-w-6xl mx-auto py-10 px-4">
    <div className="flex items-center justify-between mb-6">
      <h2 className="text-2xl md:text-3xl font-extrabold text-[#121511]">
        Neueste Bewertungen
      </h2>
      <div className="flex gap-2">
        <button
          className="rounded-full border border-[#d7d7d7] w-9 h-9 flex items-center justify-center disabled:opacity-50"
          disabled
          aria-label="SCROLL BACK"
        >
          <svg width="16" height="16" fill="none" viewBox="0 0 16 16">
            <path
              d="m3.2 7.987 6.344-6.343.375-.344.687.687-.344.375-5.656 5.625 6 6-.687.72-.375-.345-6-6-.344-.375Z"
              fill="currentColor"
            />
          </svg>
        </button>
        <button
          className="rounded-full border border-[#d7d7d7] w-9 h-9 flex items-center justify-center"
          aria-label="SCROLL FORWARD"
        >
          <svg width="16" height="16" fill="none" viewBox="0 0 16 16">
            <path
              d="m12.806 7.987-.343.375-6.344 6.344-.719-.718 6-6-5.656-5.626-.344-.375.719-.687 6.687 6.687Z"
              fill="currentColor"
            />
          </svg>
        </button>
      </div>
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {reviews.map((review, idx) => (
        <ReviewCard key={idx} {...review} />
      ))}
    </div>
  </section>
);

export default RecentReviewsSection;
