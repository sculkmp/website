import { Head } from "./head";
import { Navbar } from "@/components/navbar";
import React from "react";
import { siteConfig } from "@/config/site";
import MaintenancePage from "@/pages/maintenance";

export default function DefaultLayout({
                                        children,
                                      }: {
  children: React.ReactNode;
}) {
  if (siteConfig.maintenance) {
    return <MaintenancePage />;
  }

  return (
    <div className="relative flex flex-col h-screen">
      <Head title={"Home"}/>
      <Navbar />
      <main className="container mx-auto max-w-7xl px-6 flex-grow pt-16">
        {children}
      </main>
      {/* todo: add footer */}
    </div>
  );
}