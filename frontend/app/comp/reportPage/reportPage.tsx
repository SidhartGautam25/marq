"use client";

import { Footer, NavBar } from "@/app/comp";
import Pdfren2 from "@/app/comp/admincomp/pdfren2/Pdfren2";
import { useContext, useEffect, useState } from "react";
import { ReportContext, ReportContextType } from "@/app/context/reportContext";
import axios from "axios";
import { my_url } from "@/app/utility/varr";

export default function reportPage({ slug }: { slug: string }) {
  const { state, dispatch } = useContext(ReportContext) as ReportContextType;
  const [rep, setRep] = useState(state);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchReport = async () => {
      let url = `${my_url}/api/getall/report/slug?slug=${slug}`;

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
