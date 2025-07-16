import React from "react";
import BlogCard from "./BlogCard";

type Article = {
  title: string;
  date: string;
  description: string;
  link: string;
};

type BlogSectionProps = {
  category: string;
  articles: Article[];
};

const BlogSection: React.FC<BlogSectionProps> = ({ category, articles }) => (
  <section className="py-12 border-b border-gray-300 last:border-0">
    <div className="flex justify-between items-center pb-9">
      <h2 className="text-[32px] font-bold">{category}</h2>
      <button className="font-medium text-[#1A66FF]">Weitere Artikel</button>
    </div>
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
      {articles.map((article, idx) => (
        <BlogCard
          key={idx}
          image="/parcel-delivery-scams.webp" // Placeholder image, replace with real image if available
          category={category}
          title={article.title}
          date={article.date}
          link={article.link}
        />
      ))}
    </div>
  </section>
);

export default BlogSection;
