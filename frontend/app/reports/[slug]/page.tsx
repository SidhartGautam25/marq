// //

// "use client";
// import { Footer, NavBar } from "@/app/comp";
// import Pdfren2 from "@/app/comp/admincomp/pdfren2/Pdfren2";
// import Head from "next/head";
// import { useContext, useEffect, useState } from "react";
// import { ReportContext, ReportContextType } from "@/app/context/reportContext";
// import axios from "axios";
// import { my_url } from "@/app/utility/varr";

// export default function Page({ params }: { params: { slug: string } }) {
//   const { state, dispatch } = useContext(ReportContext) as ReportContextType;
//   const [rep, setRep] = useState(state);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);

//   useEffect(() => {
//     const fetchReport = async () => {
//       let url = `${my_url}/api/getall/report/slug?slug=${params.slug}`;

//       try {
//         const response = await axios.get(url);
//         const data = response.data?.data[0];

//         if (data) {
//           setRep(data);
//           dispatch({ type: "SET_CURRENT", payload: data });
//         } else {
//           setError("No report data found.");
//         }
//       } catch (err) {
//         console.error("Error fetching report:", err);
//         setError("Failed to fetch report.");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchReport();
//   }, []);

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   if (error) {
//     return <div>{error}</div>;
//   }

//   const title = rep?.shortTitle
//     ? `Marqstats - ${rep?.shortTitle}`
//     : "Marqstats Report";
//   const description = rep?.desc || "Data-driven insights and reports.";
//   const canonicalUrl = `https://www.marqstats.com/reports/${rep?.slug}`;

//   return (
//     <>
//       <Head>
//         {/* Dynamic Title and Meta */}
//         <title>{title}</title>
//         <meta name="description" content={description} />
//         <meta name="robots" content="index, follow" />
//         <meta
//           name="keywords"
//           content={`reports, ${rep?.title}, business reports, download ${rep?.title}`}
//         />

//         {/* Canonical URL */}
//         <link rel="canonical" href={canonicalUrl} />

//         {/* Open Graph Meta Tags */}
//         <meta property="og:title" content={title} />
//         <meta property="og:description" content={description} />
//         <meta property="og:url" content={canonicalUrl} />
//         <meta
//           property="og:image"
//           content={rep?.imageUrl || "/default-thumbnail.jpg"}
//         />
//         <meta property="og:type" content="website" />

//         {/* Twitter Meta Tags */}
//         <meta name="twitter:card" content="summary_large_image" />
//         <meta name="twitter:title" content={title} />
//         <meta name="twitter:description" content={description} />
//         <meta
//           name="twitter:image"
//           content={rep?.imageUrl || "/default-thumbnail.jpg"}
//         />
//       </Head>

//       <div>
//         <div className="bg-black">
//           <NavBar />
//         </div>

//         <div className="w-[96%] ml-auto mr-auto">
//           <Pdfren2 />
//         </div>

//         <Footer />
//       </div>
//     </>
//   );
// }

import { Footer, NavBar } from "@/app/comp";
import Pdfren2 from "@/app/comp/admincomp/pdfren2/Pdfren2";
import { useContext, useEffect, useState } from "react";
import { ReportContext, ReportContextType } from "@/app/context/reportContext";
import axios from "axios";
import { my_url } from "@/app/utility/varr";

// Dynamic Metadata Function
export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const slug = params.slug;

  try {
    const url = `${my_url}/api/getall/report/slug?slug=${slug}`;
    const response = await axios.get(url);
    const report = response.data?.data[0];

    return {
      title: report?.shortTitle || "Marqstats Report",
      description: report?.desc || "Data-driven insights and reports.",
      alternates: {
        canonical: `https://www.marqstats.com/reports/${report?.slug}`,
      },
      openGraph: {
        title: report?.shortTitle || "Marqstats Report",
        description: report?.desc || "Explore insights and business solutions.",
        url: `https://www.marqstats.com/reports/${report?.slug}`,
        images: [
          {
            url: report?.imageUrl || "/default-thumbnail.jpg",
            width: 1200,
            height: 630,
            alt: report?.title || "Marqstats Report",
          },
        ],
        type: "website",
      },
      twitter: {
        card: "summary_large_image",
        title: report?.shortTitle || "Marqstats Report",
        description: report?.desc || "Explore insights and business solutions.",
        images: [report?.imageUrl || "/default-thumbnail.jpg"],
      },
    };
  } catch (error) {
    console.error("Metadata fetch error:", error);
    return {
      title: "Marqstats Report",
      description: "Explore insights and business solutions.",
    };
  }
}

export default function Page({ params }: { params: { slug: string } }) {
  const { state, dispatch } = useContext(ReportContext) as ReportContextType;
  const [rep, setRep] = useState(state);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

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

    if (Object.keys(state).length < 2) {
      fetchReport();
    } else {
      setLoading(false);
    }
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <>
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
