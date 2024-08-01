import React from "react";
import { useState, useContext } from "react";
import { ReportContext, ReportContextType } from "@/app/context/reportContext";

const MarketOverview = () => {
  const { state, dispatch } = useContext(ReportContext) as ReportContextType;
  return (
    <div id="overview" className="container mx-auto p-4">
      <h1 className="text-xl font-semibold mb-4">{state?.moTitle}</h1>
      {/* <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Est porro quae
        cumque nemo ab, rem, eveniet eos qui doloribus odio ea, minus dolorum
        maiores dolorem error minima illum voluptate. Facilis, quidem!
        Cupiditate, possimus? Ipsam dolores eum quae, earum aspernatur
        perspiciatis, esse numquam, itaque facere suscipit perferendis corrupti.
        Ea optio itaque, ullam ducimus mollitia fugit culpa cumque velit nobis
        vel, amet odio soluta accusantium sunt sapiente accusamus. In saepe
        suscipit quae. Repudiandae omnis porro sed consequatur provident vitae
        neque dicta voluptates magni? Ut iure consequatur accusamus, molestias
        rem reprehenderit voluptates quo aliquid saepe, ea cum cupiditate?
        Numquam hic facilis similique ullam.
      </p> */}
      {/* {state.mo} */}
      <div
        // className="mt-6 border border-gray-300 p-4 min-h-[200px]"
        dangerouslySetInnerHTML={{ __html: state?.moDesc }}
      />
    </div>
  );
};

export default MarketOverview;
