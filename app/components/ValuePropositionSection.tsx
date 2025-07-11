"use client";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";

const ValuePropositionSection = () => (
  <section
    className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 py-14 px-10 rounded-2xl bg-[#B2F9CD] shadow-lg"
    id="value-proposition"
  >
    {/* Left: About Section */}
    <div className="flex-1 min-w-6/12">
      <h2 className="hidden md:block text-3xl font-extrabold mb-2">
        Wir sind Trustpilot
      </h2>
      <h2 className="md:hidden text-2xl font-bold mb-2">Wir sind Trustpilot</h2>
      <p className="text-lg font-normal text-black mb-6">
        Wir sind ein Bewertungsportal, das allen offen steht. Unser Ziel ist es,
        das universelle Symbol für Vertrauenswürdigkeit zu werden, indem wir
        Verbrauchern dabei helfen, vertrauensvoll einzukaufen, und indem wir
        Unternehmen helfen, sich zu verbessern.
      </p>
      <div className="mt-4">
        <Link href="/about">
          <Button
            variant="ghost"
            className="font-bold bg-black text-white px-6 py-5.5 text-sm rounded-full hover:text-black hover:bg-[#a9edc3] "
          >
            Was wir tun
          </Button>
        </Link>
      </div>
    </div>
    {/* Right: Report Box */}
    <div className="flex-1 flex flex-col items-center md:items-end">
      <div className="bg-[#00552C] border border-emerald-400 text-white rounded-xl p-6 flex flex-row items-center gap-6 w-full max-w-lg shadow-md">
        <div className="flex-1">
          <h3 className="text-lg font-bold mb-1 text-[#e4e2e2]">
            Der neue Trust Report ist da!
          </h3>
          <p className="text-base mb-4 text-[#e4e2e2]">
            Erfahren Sie, welche Maßnahmen wir ergriffen haben, um Sie zu
            schützen und Vertrauen auf unserem Portal zu fördern.
          </p>
          <a
            href="https://corporate.trustpilot.com/trust/trust-report-2025"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block border text-sm border-white text-[#e4e2e2] font-bold px-5 py-3 rounded-full hover:bg-[#56a789] hover:border-transparent transition-colors"
          >
            Zum Report
          </a>
        </div>
        <div className="flex-shrink-0">
          <Image
            src="https://consumersite-assets.trustpilot.net/consumersite-home/public/trust-report-image.png"
            alt="Trust Report-Bild"
            width={108}
            height={108}
            className="rounded-lg"
          />
        </div>
      </div>
    </div>
  </section>
);

export default ValuePropositionSection;
