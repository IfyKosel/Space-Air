import React from "react";
import type { Metadata } from "next";
import Sidebar from "@/components/Sidebar/Sidebar";
import Navbar from "@/components/Navbar/Navbar";

export const metadata: Metadata = {
  title: "Air Pocket: Back Office",
  description: "Admin control of Air Pocket",
};

export default function AnalyticsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <main className="w-full flex">
        <Sidebar />
        <div className="flex flex-col w-full">
          <Navbar />
          <div className="w-full min-h-[calc(100vh-3.8rem)] bg-[#F5F6FA]">
            {children}
          </div>
        </div>
      </main>
    </section>
  );
}
