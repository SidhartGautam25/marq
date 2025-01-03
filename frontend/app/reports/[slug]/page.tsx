// "use client";
// import { Footer, NavBar } from "@/app/comp";
// import PdfDescription from "@/app/comp/admincomp/pdfdescription/pdfdescription";
// import Pdfren from "@/app/comp/admincomp/pdfren/Pdfren";
// import Pdfren2 from "@/app/comp/admincomp/pdfren2/Pdfren2";
// import { type } from "os";
// import Head from "next/head";
// import { useContext, useEffect, useState } from "react";
// import { ReportContext, ReportContextType } from "@/app/context/reportContext";
// import axios from "axios";
// import { my_url } from "@/app/utility/varr";

// export default function Page({ params }: { params: { slug: string } }) {
//   // console.log("ypur type is ", typeof params.slug);
//   // const arr = params.slug;
//   // console.log(arr![0]);
//   // console.log("hii everybody");
//   // const title = arr![2];
//   // let my_url="";

//   console.log("what is the params of this page ", params.slug);
//   const { state, dispatch } = useContext(ReportContext) as ReportContextType;
//   const [rep, setRep] = useState(state);

//   //this is report store
//   // Code inside this function will run after every render
//   // You can perform side effects, such as data fetching, subscriptions, or DOM manipulations here

//   // For example, you can fetch data from an API
//   // console.log("this is rep two rep comp");

//   useEffect(() => {
//     const fetchReport = async () => {
//       // console.log("fetch report called");
//       console.log("fetching report for individual report");
//       let url = `${my_url}/api/getall/report/slug?slug=${params.slug}`;

//       //this is reports for report store

//       try {
//         // setLoading(true);
//         let daata = await axios.get(url);

//         console.log(
//           "daata just after fetching it in individual report is ",
//           daata
//         );

//         // console.log("daata on leftb hero is ", daata.data);
//         if (daata) {
//           // setLoading(false);
//           console.log(
//             "daaaaaattatatata is in seperate report page ",
//             daata.data
//           );
//           daata = daata?.data?.data[0];
//           setRep(daata);
//           console.log(
//             "this is going to our current report in individual report ",
//             daata
//           );
//           dispatch({
//             type: "SET_CURRENT",
//             payload: daata,
//           });
//           // setReports([...daata.data.reports]);
//         }
//       } catch (err) {}
//     };
//     console.log("state before setting it in individual report is ", state);
//     if (Object.keys(state).length < 2) {
//       console.log("state is not present by default");
//       fetchReport();
//     }

//     // You can also return a cleanup function from useEffect
//     // This cleanup function will be executed before the component is unmounted or re-rendered
//     return () => {
//       // Code inside this cleanup function will run before the component is unmounted or re-rendered
//       // You can perform cleanup tasks here, such as unsubscribing from subscriptions or clearing timers
//     };
//   }, []);

//   return (
//     <>
//       <Head>
//         <title>Marqstats - {rep?.shortTitle}</title>
//         <meta name="description" content={rep?.desc} />
//         <meta name="robots" content="index, follow" />
//         <meta
//           name="keywords"
//           content={`reports, ${rep?.title}, company store, business reports, PDF reports, download ${state?.title}`}
//         />
//         <link
//           rel="canonical"
//           href={`https://www.marqstats.com/reports/${rep?.slug}`}
//         />
//         {/* <meta
//           name="keywords"
//           content="reports, company store, download reports, business reports, PDF reports"
//         />
//         <meta name="robots" content="index, follow" />
//         <meta property="og:title" content="Report Store - Your Company Name" />
//         <meta
//           property="og:description"
//           content="Browse and download various reports from our company store."
//         />
//         <meta property="og:type" content="website" />
//         <meta
//           property="og:url"
//           content="https://www.yourcompany.com/report-store"
//         />
//         <meta
//           property="og:image"
//           content="https://www.yourcompany.com/images/report-store-thumbnail.jpg"
//         /> */}
//       </Head>

//       <div>
//         <div className="bg-black">
//           <NavBar />
//         </div>
//         {/* <h1>My Page info is :{typeof params.slug}</h1>; */}
//         {/* <PdfDescription /> */}
//         <div className="">
//           <div className="w-[96%] ml-auto mr-auto">
//             <Pdfren2 />
//             {/* <!--         <div className="flex justify-center">
//           <Pdfren /> --> */}
//           </div>
//         </div>

//         <Footer />
//       </div>
//     </>
//   );
// }

"use client";
import { Footer, NavBar } from "@/app/comp";
import Pdfren2 from "@/app/comp/admincomp/pdfren2/Pdfren2";
import Head from "next/head";
import { useContext, useEffect, useState } from "react";
import { ReportContext, ReportContextType } from "@/app/context/reportContext";
import axios from "axios";
import { my_url } from "@/app/utility/varr";

export default function Page({ params }: { params: { slug: string } }) {
  const { state, dispatch } = useContext(ReportContext) as ReportContextType;
  const [rep, setRep] = useState(state);
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState<string | null>(null); // Error state

  useEffect(() => {
    const fetchReport = async () => {
      let url = `${my_url}/api/getall/report/slug?slug=${params.slug}`;

      try {
        const response = await axios.get(url);
        const data = response.data?.data[0];

        if (data) {
          setRep(data);
          dispatch({ type: "SET_CURRENT", payload: data });
        } else {
          setError("No report data found.");
        }
      } catch (err) {
        console.error("Error fetching report:", err);
        setError("Failed to fetch report.");
      } finally {
        setLoading(false);
      }
    };

    // Fetch only if no state is present
    if (Object.keys(state).length < 2) {
      fetchReport();
    } else {
      setLoading(false);
    }
  }, []);

  // Show loader if still fetching
  if (loading) {
    return <div>Loading...</div>;
  }

  // Show error if occurred
  if (error) {
    return <div>{error}</div>;
  }

  return (
    <>
      <Head>
        {/* Dynamic Title and Meta */}
        <title>
          {rep?.shortTitle
            ? `Marqstats - ${rep?.shortTitle}`
            : "Marqstats Report"}
        </title>
        <meta
          name="description"
          content={rep?.desc || "Data-driven insights and reports."}
        />
        <meta name="robots" content="index, follow" />
        <meta
          name="keywords"
          content={`reports, ${rep?.title}, business reports, download ${rep?.title}`}
        />

        {/* Canonical URL */}
        <link
          rel="canonical"
          href={`https://www.marqstats.com/reports/${rep?.slug}`}
        />

        {/* Open Graph Meta Tags */}
        <meta property="og:title" content={rep?.title || "Marqstats Report"} />
        <meta
          property="og:description"
          content={rep?.desc || "Explore insights and business solutions."}
        />
        <meta
          property="og:url"
          content={`https://www.marqstats.com/reports/${rep?.slug}`}
        />
        <meta
          property="og:image"
          content={rep?.imageUrl || "/default-thumbnail.jpg"}
        />
        <meta property="og:type" content="website" />

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={rep?.title || "Marqstats Report"} />
        <meta
          name="twitter:description"
          content={rep?.desc || "Explore insights and business solutions."}
        />
        <meta
          name="twitter:image"
          content={rep?.imageUrl || "/default-thumbnail.jpg"}
        />
      </Head>

      {/* Main Page Content */}
      <div>
        <div className="bg-black">
          <NavBar />
        </div>

        <div className="w-[96%] ml-auto mr-auto">
          <Pdfren2 />
        </div>

        <Footer />
      </div>
    </>
  );
}
