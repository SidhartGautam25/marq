import {
  CurrRelatedContext,
  CurrRelatedContextType,
} from "@/app/context/currRelated";
import { ReportContext, ReportContextType } from "@/app/context/reportContext";
import { my_url } from "@/app/utility/varr";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useContext, useEffect, useState } from "react";

const relatedReports = [
  {
    title: "Automotive Industry with AI and Crypto",
    link: "/reports/automotive-ai-crypto",
  },
  {
    title: "Electric Vehicle Charging Infrastructure",
    link: "/reports/ev-charging-infrastructure",
  },
  {
    title: "Global Marine Propulsion Market",
    link: "/reports/marine-propulsion-market",
  },
  // Add more reports as needed
];

const Relatedreport = () => {
  const { state, dispatch } = useContext(ReportContext) as ReportContextType;
  // const [state3, dispatch3] = useContext(
  //   CurrRelatedContext
  // ) as CurrRelatedContextType;
  const { state3, dispatch3 } = useContext(
    CurrRelatedContext
  ) as CurrRelatedContextType;
  let related = state.related;
  console.log("related eports are ", related);
  // const [rel, setRel] = useState<Record<string, any>[]>([]);
  let rel = state3;
  // rel = [];
  // console.log("rel is ", state3);

  const router = useRouter();

  const clickfun = async (num: number) => {
    // console.log("click fun my friend at card component ", rep);
    dispatch({
      type: "SET_CURRENT",
      payload: rel[num],
    });
    let temp = rel[num].slug.replace(/\s/g, "-");
    router.push(`/report/${temp}`);
  };

  // function clickfun(ind: Number) {
  //   console.log("click fun my friend at card component ", rep);
  //   dispatch({
  //     type: "SET_CURRENT",
  //     payload: rep,
  //   });
  //   let temp = rep.slug.replace(/\s/g, "-");
  //   router.push(`/report/${temp}`);
  // }

  // useEffect(() => {
  //   // Code inside this function will run after every render
  //   // You can perform side effects, such as data fetching, subscriptions, or DOM manipulations here

  //   // For example, you can fetch data from an API
  //   console.log("use effect of related report section");
  //   const fetchRelated = async () => {
  //     console.log("fetch report calleddddd on related report section");
  //     let url = `${my_url}}/api/getall/reports/related?f=${related[0]} & s=${related[1]} & t=${related[2]}`;

  //     //this is reports for report store

  //     try {
  //       // setLoading(true);
  //       const daata = await axios.get(url);

  //       console.log("daata on related report section is ", daata.data);
  //       if (daata) {
  //         // setLoading(false);
  //         // console.log("daaaaaattatatata is ", daata.data);
  //         setRel([...daata.data.related]);
  //         // setLen(daata.data.len);
  //       }
  //     } catch (err) {}
  //   };
  //   fetchRelated();

  //   // You can also return a cleanup function from useEffect
  //   // This cleanup function will be executed before the component is unmounted or re-rendered
  //   return () => {
  //     // Code inside this cleanup function will run before the component is unmounted or re-rendered
  //     // You can perform cleanup tasks here, such as unsubscribing from subscriptions or clearing timers
  //   };
  // }, []);

  return (
    <div id="relatedreport" className="container mx-auto p-4">
      <h1 className="text-xl font-semibold mb-4">Related Reports</h1>
      <div className="flex flex-col gap-3">
        {rel?.map((report, index) => (
          // <Link
          //   href={report.link}
          //   key={index}
          //   className="flex items-center border-b border-gray-700"
          // >
          <div
            className="flex items-center border-b border-gray-700"
            onClick={() => clickfun(index)}
            key={index}
          >
            <div className="flex w-full">
              <div className="bg-gray-500 w-4 min-h-14"></div>
              <div className="p-4 bg-gray-100 w-full">{report.title}</div>
              {/* </Link> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Relatedreport;
