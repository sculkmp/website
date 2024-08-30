import { Navbar } from "@/components/navbar";
import React from "react";
import { siteConfig } from "@/config/site";
import MaintenancePage from "@/pages/maintenance";
import { SEO } from "@/layouts/SEO";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  if (siteConfig.maintenance) {
    return <MaintenancePage />;
  }

  return (
    <div className="relative flex flex-col min-h-screen">
      <SEO title="Home" />
      <Navbar />
      <main className="flex-grow">
        {children}
      </main>
      {/* TODO: add footer */}
    </div>
  );
}