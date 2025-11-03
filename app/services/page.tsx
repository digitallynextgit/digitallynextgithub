import React from "react";
import type { Metadata } from "next";
import { buildMetadata, webPageJsonLd } from "@/app/utils/seo";
import Script from "next/script";
import Banner from "../components/services/Banner";
import BannerAssets from "../components/services/BannerAssets";
import Service1 from "../components/services/Service1";
import Service2 from "../components/services/Service2";
import Service3 from "../components/services/Service3";
import Service4 from "../components/services/Service4";
import Service5 from "../components/services/Service5";
import Service6 from "../components/services/Service6";
import Service7 from "../components/services/Service7";
import Service8 from "../components/services/Service8";
import Service9 from "../components/services/Service9";

export default function ServicesPage() {
  return (
    <main>
      <Script id="ld-services-webpage" type="application/ld+json">
        {JSON.stringify(
          webPageJsonLd({
            title: "Services | DigitallyNext",
            description:
              "Explore DigitallyNext services: SEO, performance marketing, social media, content, and UX.",
            path: "/services",
          })
        )}
      </Script>
      <Banner />
      <BannerAssets />
      <Service1 />
      <Service2 />
      <Service3 />
      <Service4 />
      <Service5 />
      <Service6 />
      <Service7 />
      <Service8 />
      <Service9 />
    </main>
  );
}

export const metadata: Metadata = buildMetadata({
  title: "Services | DigitallyNext",
  description:
    "Explore DigitallyNext services: SEO, performance marketing, social media, content, and UX.",
  path: "/services",
  keywords: [
    "Digital marketing services",
    "SEO",
    "performance marketing",
    "social media",
    "content",
    "UX",
  ],
});