import TopCompanyCard from "./TopCompanyCard";
import { Button } from "./ui/button";
import React from "react";

interface TopCompanyItem {
  name: string;
  rating: number;
  description: string;
}

interface TopCompaniesSectionProps {
  name: string;
  items: TopCompanyItem[];
}

const TopCompaniesSection: React.FC<TopCompaniesSectionProps> = ({
  name,
  items,
}) => (
  <div className="max-w-6xl mx-auto px-4 py-12">
    <div className="flex items-center justify-between mb-8">
      <h2 className="text-2xl font-bold">{name}</h2>
      <Button
        variant="outline"
        size="sm"
        className="text-[color:var(--outline)] bg-transparent"
      >
        Mehr anzeigen
      </Button>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {items.map((item, idx) => (
        <TopCompanyCard
          key={item.name + idx}
          name={item.name}
          rating={item.rating}
          description={item.description}
        />
      ))}
    </div>
  </div>
);

export default TopCompaniesSection;
