"use client";
import { NavBar, Insightcom1, Insightcomp2, Footer } from "@/app/comp";
import axios from "axios";
import { useEffect, useState } from "react";
import { Worker } from "@react-pdf-viewer/core";
import { Viewer } from "@react-pdf-viewer/core";
import { useRouter } from "next/navigation";
import { my_url } from "@/app/utility/varr";

// Import styles
import "@react-pdf-viewer/toolbar/lib/styles/index.css";
// Import the styles
import "@react-pdf-viewer/core/lib/styles/index.css";
import { useContext } from "react";
import { BlogContext, BlogContextType } from "@/app/context/blogContext";

interface BlogInt {
  title: string;
  linkp: string;
  linkt: string;
}

const NoSSR: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }

  return <>{children}</>;
};
export default function Page({ params }: { params: { slug: string } }) {
  const [blog, setBlog] = useState<Record<string, any>[]>([]);
  const router = useRouter();

  // let daata;
  const { state, dispatch } = useContext(BlogContext) as BlogContextType;
  console.log("state in insigth of a specific iis ", state);

  function clickedBlog(ind: number) {
    let title = blog[ind].title;
    let rep = blog[ind];
    console.log("clicked blog is ", rep);
    dispatch({
      type: "SET_CURRENT",
      payload: {
        title: rep.title,
        linkp: rep.linkp,
        createdAt: rep.createdAt,
        industry: rep.industry,
        subind: rep.subind,
        linkt: rep.linkt,
      },
    });
    router.push(`/insight/${blog[ind].title}`);
  }

  useEffect(() => {
    // Code inside this function will run after every render
    // You can perform side effects, such as data fetching, subscriptions, or DOM manipulations here

    // For example, you can fetch data from an API
    // const dev_url = "http://localhost:8800";
    // const prod_url = "https://admin-backend-1-ekoa.onrender.com";
    const fetchReport = async () => {
      console.log("fetch report called");
      console.log(
        "params slug is  in insight is ",
        decodeURIComponent(params.slug)
      );
      let url = `${my_url}/api/getall/related-blogs?industry=${state.industry}`;

      //let url = `${dev_url}/api/getall/reports?industry=${ind}&page=${page}&subind=${query}`;

      try {
        console.log("request sent");
        const daata = await axios.get(url);
        console.log("data is in insgiht ", daata);
        let relatedBlogs = daata.data.related;
        // let item: Record<string, any>;
        relatedBlogs = relatedBlogs.filter(
          (item: Record<string, any>) => item.title !== state.ctitle
        );
        setBlog([...relatedBlogs]);
        console.log("related reports are ", daata);
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
    <NoSSR>
      <div className="bg-gray-800">
        <NavBar />
      </div>

      <Insightcom1
        title={state.ctitle}
        linkp={state.clinkp}
        linkt={state.clinkt}
      />
      <div className="flex flex-col md:flex-row">
        <div className="flex-[7]">
          <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
            <Viewer
              fileUrl={
                state.clinkp
                  ? state.clinkp
                  : "https://res.cloudinary.com/dkzpbucfz/image/upload/v1713940823/pics/lu1fo2x4kk4v9qmd5r6s.pdf"
              }
              // fileUrl="https://res.cloudinary.com/dkzpbucfz/image/upload/v1713940823/pics/lu1fo2x4kk4v9qmd5r6s.pdf"
              // initialPage={currentpage}
              // onPageChange={({ currentPage }) => setCurrentpage(currentPage)}
            />
          </Worker>
        </div>
        <div className="flex-[2] flex flex-col gap-5 md:ml-2 items-center md:items-start">
          <div className=" text-center w-[90%] mt-5 md:mt-0">
            <h1 className="text-2xl font-semibold uppercase">
              Similar Insight
            </h1>
          </div>
          <div className=" flex flex-col gap-5">
            {blog.map((insight, index) => (
              <div
                key={index}
                className=""
                onClick={() => {
                  clickedBlog(index);
                }}
              >
                <Insightcomp2 linkt={insight.linkt} title={insight.title} />
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </NoSSR>
  );
}
