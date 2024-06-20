"use client";
import { NavBar, Insightcom1, Insightcomp2, Footer } from "@/app/comp";
import axios from "axios";
import { useEffect, useState } from "react";

import { Worker } from "@react-pdf-viewer/core";
import { Viewer } from "@react-pdf-viewer/core";

// Import styles
import "@react-pdf-viewer/toolbar/lib/styles/index.css";
// Import the styles
import "@react-pdf-viewer/core/lib/styles/index.css";

interface BlogInt {
  title: string;
  linkp: string;
  linkt: string;
}
export default function Page({ params }: { params: { slug: string } }) {
  const [blog, setBlog] = useState<BlogInt>({
    title: "",
    linkp: "",
    linkt: "",
  });
  console.log("blog is ", blog);
  let pdfurl = blog.linkp;
  // let daata;

  useEffect(() => {
    // Code inside this function will run after every render
    // You can perform side effects, such as data fetching, subscriptions, or DOM manipulations here

    // For example, you can fetch data from an API
    const dev_url = "http://localhost:8800";
    const prod_url = "https://admin-backend-1-ekoa.onrender.com";
    const fetchReport = async () => {
      console.log("fetch report called");
      let url = `${dev_url}/api/getall/blog?title=${params.slug}`;

      //let url = `${dev_url}/api/getall/reports?industry=${ind}&page=${page}&subind=${query}`;

      try {
        console.log("request sent");
        const daata = await axios.get(url);
        console.log("data is ", daata.data[0].title);
        setBlog({
          title: daata.data[0].title,
          linkp: daata.data[0].linkp,
          linkt: daata.data[0].linkt,
        });
      } catch (err) {}
    };
    fetchReport();

    // You can also return a cleanup function from useEffect
    // This cleanup function will be executed before the component is unmounted or re-rendered
    return () => {
      // Code inside this cleanup function will run before the component is unmounted or re-rendered
      // You can perform cleanup tasks here, such as unsubscribing from subscriptions or clearing timers
    };
  }, []);
  return (
    <>
      <div className="bg-gray-800">
        <NavBar />
      </div>
      {console.log("before going ", blog.title)}
      <Insightcom1 title={blog.title} linkp={blog.linkp} linkt={blog.linkt} />
      <div className="flex">
        <div className="flex-[6]">
          <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
            <Viewer
              fileUrl={
                pdfurl
                  ? pdfurl
                  : "https://res.cloudinary.com/dkzpbucfz/image/upload/v1713940823/pics/lu1fo2x4kk4v9qmd5r6s.pdf"
              }
              // fileUrl="https://res.cloudinary.com/dkzpbucfz/image/upload/v1713940823/pics/lu1fo2x4kk4v9qmd5r6s.pdf"
              // initialPage={currentpage}
              // onPageChange={({ currentPage }) => setCurrentpage(currentPage)}
            />
          </Worker>
        </div>
        <div className="flex-[2] flex flex-col gap-5 items-center">
          <h1 className="text-3xl font-semibold uppercase">Similar Insight</h1>
          <div className="w-[85%] flex flex-col gap-5">
            <Insightcomp2 />
            <Insightcomp2 />
            <Insightcomp2 />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}