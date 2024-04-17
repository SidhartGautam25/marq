import Image from "next/image";
import React from "react";
import marketImage from "@/public/marketImage.jpg";

export default function Marketass() {
  return (
    <div className="text-center py-4 px-4">
      <div className="inline-block">
        {/* Ensure the path to the image is correct */}
        <Image
          src={marketImage}
          alt="Market Analysis"
          width={900}
          height={900}
          objectFit="cover"
        />
      </div>
      <h2 className="text-2xl font-semibold mt-8 mb-4">
        Through our on-demand market assessment solutions, we help organizations
        take well-informed strategic decisions.
      </h2>
      <p className="mb-4 text-left">
        Not all requirements are standard, and we understand how business
        decisions depend on detailed understanding of key aspects. We offer
        fully customized research solutions across all the industries and
        sub-industries we cover.
      </p>
      <div className="text-left mx-auto" style={{ maxWidth: "1100px" }}>
        <h3 className="font-semibold text-lg">
          Our Market Assessment solutions are inclusive of:
        </h3>
        <ul className="list-disc list-inside">
          <li>Growth Dynamics</li>
          <li>Market Opportunities</li>
          <li>Regional Insights</li>
          <li>Competitive Landscape</li>
          <li>Value-Chain Analysis</li>
          <li>Go-to-Market Strategy </li>
          <li>Market Sizing</li>
          <li>Competitor Trend Analysis</li>
          <li>Customer Insights </li>
          <li> Pricing Analysis </li>
          <li>Innovation & Sustainability</li>
        </ul>
      </div>
    </div>
  );
}
