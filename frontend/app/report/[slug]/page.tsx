"use client";
import { Footer, NavBar } from "@/app/comp";
import PdfDescription from "@/app/comp/admincomp/pdfdescription/pdfdescription";
import Pdfren from "@/app/comp/admincomp/pdfren/Pdfren";
import Pdfren2 from "@/app/comp/admincomp/pdfren2/Pdfren2";
import { type } from "os";

export default function Page({ params }: { params: { slug: string } }) {
  // console.log("ypur type is ", typeof params.slug);
  // const arr = params.slug;
  // console.log(arr![0]);
  // console.log("hii everybody");
  // const title = arr![2];

  return (
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
  );
}
