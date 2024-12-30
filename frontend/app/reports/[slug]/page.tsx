"use client";
import { Footer, NavBar } from "@/app/comp";
import PdfDescription from "@/app/comp/admincomp/pdfdescription/pdfdescription";
import Pdfren from "@/app/comp/admincomp/pdfren/Pdfren";
import Pdfren2 from "@/app/comp/admincomp/pdfren2/Pdfren2";
import { type } from "os";
import Head from "next/head";
import { useContext } from "react";
import { ReportContext, ReportContextType } from "@/app/context/reportContext";

export default function Page({ params }: { params: { slug: string } }) {
  // console.log("ypur type is ", typeof params.slug);
  // const arr = params.slug;
  // console.log(arr![0]);
  // console.log("hii everybody");
  // const title = arr![2];
  const { state } = useContext(ReportContext) as ReportContextType;

  return (
    <>
      <Head>
        <title>Marqstats - {state?.title}</title>
        <meta name="description" content={state?.desc} />
        <meta name="robots" content="index, follow" />
        <meta
          name="keywords"
          content={`reports, ${state?.title}, company store, business reports, PDF reports, download ${state?.title}`}
        />
        <link
          rel="canonical"
          href={`https://www.marqstats.com/reports/${state?.slug}`}
        />
        {/* <meta
          name="keywords"
          content="reports, company store, download reports, business reports, PDF reports"
        />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Report Store - Your Company Name" />
        <meta
          property="og:description"
          content="Browse and download various reports from our company store."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://www.yourcompany.com/report-store"
        />
        <meta
          property="og:image"
          content="https://www.yourcompany.com/images/report-store-thumbnail.jpg"
        /> */}
      </Head>
      <div>
        <div className="bg-black">
          <NavBar />
        </div>
        {/* <h1>My Page info is :{typeof params.slug}</h1>; */}
        {/* <PdfDescription /> */}
        <div className="">
          <div className="w-[96%] ml-auto mr-auto">
            <Pdfren2 />
            {/* <!--         <div className="flex justify-center">
          <Pdfren /> --> */}
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
}
