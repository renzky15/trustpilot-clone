import HeroSection from "./components/HeroSection";
import Separator from "./components/Separator";
import CategoriesSection from "./components/CategoriesSection";
import AuthBannerSection from "./components/AuthBannerSection";
import TopCompaniesSection from "./components/TopCompaniesSection";
import ValuePropositionSection from "./components/ValuePropositionSection";
import RecentReviewsSection from "./components/RecentReviewsSection";
import TrustpilotAppBanner from "./components/TrustpilotAppBanner";

export default function TrustpilotHomepage() {
  return (
    <div className="min-h-screen bg-gray-50 sm:overflow-hidden md:overflow-hidden">
      {/* Header */}
      <main className="relative sm:overflow-hidden md:overflow-hidden">
        <HeroSection />
        <Separator />

        <CategoriesSection />

        {/* Top Companies Section */}
        <TopCompaniesSection
          name="Spitzenreiter in der Kategorie Bank"
          items={[
            {
              name: "Beispiel Bank 1",
              rating: 4.8,
              description:
                "Ausgezeichneter Service und vertrauenswürdige Beratung.",
            },
            {
              name: "Beispiel Bank 2",
              rating: 4.8,
              description:
                "Ausgezeichneter Service und vertrauenswürdige Beratung.",
            },
            {
              name: "Beispiel Bank 3",
              rating: 4.8,
              description:
                "Ausgezeichneter Service und vertrauenswürdige Beratung.",
            },
          ]}
        />

        <AuthBannerSection />

        <TopCompaniesSection
          name="Spitzenreiter in der Kategorie Reiseversicherung"
          items={[
            {
              name: "Beispiel Reiseversicherung",
              rating: 4.8,
              description:
                "Ausgezeichneter Service und vertrauenswürdige Beratung.",
            },
            {
              name: "Beispiel Reiseversicherung",
              rating: 4.8,
              description:
                "Ausgezeichneter Service und vertrauenswürdige Beratung.",
            },
            {
              name: "Beispiel Reiseversicherung",
              rating: 4.8,
              description:
                "Ausgezeichneter Service und vertrauenswürdige Beratung.",
            },
          ]}
        />
        <ValuePropositionSection />
        <RecentReviewsSection />
        <TrustpilotAppBanner />
      </main>
    </div>
  );
}
