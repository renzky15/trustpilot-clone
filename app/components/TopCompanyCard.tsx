import { Star } from "lucide-react";
import React from "react";

interface TopCompanyCardProps {
  name: string;
  rating: number;
  description: string;
}

const TopCompanyCard: React.FC<TopCompanyCardProps> = ({
  name,
  rating,
  description,
}) => (
  <div className="bg-white rounded-xl border border-gray-300 px-6 py-5 hover:shadow-md transition-shadow">
    <div className="flex flex-col items-start space-y-3 space-x-3">
      <div className="w-15 h-15 border border-gray-300 rounded-lg"></div>
      <div>
        <h3 className="font-bold">{name}</h3>
        <p className="text-sm text-gray-500 font-normal">{description}</p>
        <div className="flex items-center space-x-1">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-4 h-4 fill-green-500 text-green-500" />
          ))}
          <span className="text-sm ml-2">{rating}</span>
        </div>
      </div>
    </div>
  </div>
);

export default TopCompanyCard;
