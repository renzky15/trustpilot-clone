import Image from "next/image";
import React from "react";

interface BlogCardProps {
  image: string;
  category: string;
  categoryLink?: string;
  title: string;
  date: string;
  link: string;
}

const BlogCard: React.FC<BlogCardProps> = ({
  image,
  category,
  categoryLink,
  title,
  date,
  link,
}) => (
  <div className="bg-white overflow-hidden flex flex-col sm:flex-row lg:flex-col h-full border border-gray-200 rounded-lg">
    <a
      href={link}
      className="block relative w-full sm:w-[260px] lg:w-full flex-shrink-0"
      style={{ aspectRatio: "1/1" }}
    >
      <Image
        src={image}
        alt={title}
        fill
        sizes="(min-width: 992px) 260px, 100vw"
        className="object-cover rounded-t-lg sm:rounded-l-lg sm:rounded-t-none lg:rounded-t-lg lg:rounded-l-none"
        priority={false}
      />
    </a>
    <div className="py-4 px-4 flex flex-col justify-start flex-1">
      <a
        href={categoryLink || "#"}
        className="text-blue-600 text-sm font-medium mb-2 hover:underline"
      >
        {category}
      </a>
      <a href={link} className="block">
        <h3 className="text-[21px] text-left font-bold mb-1 leading-snug">
          {title}
        </h3>
        <span className="text-gray-500 text-xs">{date}</span>
      </a>
    </div>
  </div>
);

export default BlogCard;
