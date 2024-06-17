"use client";
import { NavBar, Insightcom1, Insightcomp2, Footer } from "@/app/comp";
import axios from "axios";
import { useEffect, useState } from "react";
interface BlogInt {
  title: string;
}
export default function Page({ params }: { params: { slug: string } }) {
  const [blog, setBlog] = useState<BlogInt>({ title: "" });

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
        console.log("data is ", daata.data);
        setBlog(daata.data);
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
      <Insightcom1 />
      <div className="flex mx-20">
        <div className="flex-[4]">PDF RENDER HERE</div>
        <div className="flex-[1]">
          <h1 className="text-3xl font-semibold my-2">Similar Insight</h1>
          <Insightcomp2 />
          <Insightcomp2 />
          <Insightcomp2 />
        </div>
      </div>
      <Footer />
    </>
  );
}
