import Footer from "@/components/Footer";
import Header from "@/components/Header";
import React from "react";

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen w-full">
      <Header bgColor="bg-[#032A1D]" />
      <main>{children}</main>
      <Footer bgColor="bg-[#032A1D]" />
    </div>
  );
}
