import { ReportContext, ReportContextType } from "@/app/context/reportContext";
import React, { useContext } from "react";

const KeyMarket = () => {
  const { state, dispatch } = useContext(ReportContext) as ReportContextType;
  return (
    <div id="keymar" className="container mx-auto p-4">
      {/* Main Heading */}
      <h1 className="text-xl font-bold mb-2">{state?.kmtTitle}</h1>

      {/* Subheading */}
      <h2 className="text-lg font-semibold mb-4">{state?.kmtsh1}</h2>

      {/* Description */}
      {/* <p className="mb-6">
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
      <div
        // className="mt-6 border border-gray-300 p-4 min-h-[200px]"
        dangerouslySetInnerHTML={{ __html: state?.kmtdesc1 }}
      />

      {/* Image */}
      <div className="mb-6">
        <img
          src={state?.kmti1}
          alt="Market Overview Image"
          className="w-full h-auto rounded shadow-md"
        />
      </div>

      {/* Subheading */}
      <h2 className="text-lg font-semibold mb-4">{state?.kmtsh2}</h2>

      {/* Description */}
      <div
        // className="mt-6 border border-gray-300 p-4 min-h-[200px]"
        dangerouslySetInnerHTML={{ __html: state?.kmtdesc2 }}
      />

      {/* Image */}
      <div className="mb-6">
        <img
          src={state?.kmti2}
          alt="Market Overview Image"
          className="w-full h-auto rounded shadow-md"
        />
      </div>
    </div>
  );
};

export default KeyMarket;
