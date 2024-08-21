import React from "react";
import NextHead from "next/head";
import { siteConfig } from "@/config/site";

interface HeadProps {
  title?: string;
  description?: string;
}

export const Head: React.FC<HeadProps> = ({ title, description }) => {
  const pageTitle = title + " | " + siteConfig.name;
  const pageDescription = description || siteConfig.description;

  return (
    <NextHead>
      <title>{pageTitle}</title>
      <meta content={pageDescription} name="description" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={pageDescription} />
      <meta property="og:site_name" content={siteConfig.name} />
      <meta property="og:image" content="/sculk.webp" />
      <meta property="og:url" content="https://sculkmp.org/" />
      <meta property="og:type" content="website" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={pageDescription} />
      <meta name="twitter:image" content="/sculk.webp" />
      <meta property="twitter:card" content="summary" />
      <meta property="keywords" name="keywords"
            content="Sculk, sculk, sculkmp, sculk-mp, sculk mp, minecraft, bedrock, mcpe, mcbe, minecraft-bedrock, software, software-bedrock" />
      <meta
        key="viewport"
        content="viewport-fit=cover, width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
        name="viewport"
      />
      <link href="/favicon.ico" rel="icon" />
    </NextHead>
  );
};