import Image from "next/image";
import React from "react";

interface Company {
  name: string;
  logo: string;
  website: string;
}

interface ReviewCardProps {
  user: {
    name: string;
    avatar?: string;
    initialBg?: string;
  };
  rating: number;
  review: string;
  company: Company;
}

const ReviewCard: React.FC<ReviewCardProps> = ({
  user,
  rating,
  review,
  company,
}) => (
  <div className="bg-white rounded-2xl border border-gray-200  flex flex-col justify-between h-full min-h-[200px] hover:shadow-lg">
    <div className="flex items-center gap-3 mb-2 p-4">
      {user.avatar ? (
        <Image
          src={user.avatar}
          alt={user.name}
          width={0}
          height={0}
          className="w-10 h-10 rounded-full object-cover"
        />
      ) : (
        <div
          className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-lg"
          style={{ background: user.initialBg || "#009272" }}
        >
          {user.name[0]}
        </div>
      )}
      <div>
        <div className="font-bold text-sm">{user.name}</div>
        <Image
          width={0}
          height={0}
          src={`https://cdn.trustpilot.net/brand-assets/4.1.0/stars/stars-${rating}.svg`}
          alt={`Bewertet mit ${rating} von 5 Sternen`}
          className="w-28"
        />
      </div>
    </div>
    <div className="text-base font-normal text-gray-900 mb-4 line-clamp-4 px-4">
      {review}
    </div>
    <div className="flex items-center gap-2 border-t border-gray-200 px-4 py-4 pt-2 mt-auto">
      <Image
        width={0}
        height={0}
        src={company.logo}
        alt={company.name}
        className="w-8 h-8 rounded"
      />
      <div className="">
        <div className="font-semibold text-sm font-medium">{company.name}</div>
        <div className="text-xs text-gray-500">{company.website}</div>
      </div>
    </div>
  </div>
);

export default ReviewCard;
