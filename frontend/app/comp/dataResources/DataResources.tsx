import React from "react";
export default function DataResources() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center my-6">
      <div className="w-full md:w-1/2">
        {/* Assuming you have a video file named `market-analysis.mp4` in your public folder */}
        <video
          src="/marketvideo.mp4"
          width="100%"
          loop
          autoPlay
          muted
          style={{ maxHeight: "500px" }}
        ></video>
      </div>
      <div className="w-full md:w-1/2 p-8 text-lg font-medium">
        <p className="mb-4">
          We provide dependable data that you need to start making informed
          decisions on the opportunities and risks that the market poses for
          your company. The detailed research backed data sets covering all
          major countries across the globe provide a holistic view to enable
          comparisons of performance and market conditions.
        </p>
        <p className="mb-4">
          Reach out to us to generate deeper insights and gather competitive
          advantage with data derived using latest analysis models.
        </p>
      </div>
    </div>
  );
}
