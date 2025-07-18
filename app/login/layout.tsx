import Footer from "@/components/Footer";
import Header from "@/components/Header";
import React from "react";

export default function LoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen w-full">
      <Header bgColor="bg-[#1C1B1B]" />
      <main>{children}</main>
      <Footer bgColor="bg-[#1C1B1B]" />
    </div>
  );
}
