import Image from "next/image";
import img1 from "@/public/assets/report-img1.png";
import { convert } from "@/app/utility/subind";
import { ReportContext, ReportContextType } from "@/app/context/reportContext";
import { useContext, useState } from "react";
import { title } from "process";
import { useRouter } from "next/navigation";
import {
  CurrRelatedContext,
  CurrRelatedContextType,
} from "@/app/context/currRelated";
import { my_url } from "@/app/utility/varr";
import axios from "axios";

export interface RepProps {
  rep: Record<string, any>;
}

const Card: React.FC<RepProps> = ({ rep }) => {
  //console.log("rep is my friend ", rep);
  const date = rep.createdAt;
  const year = date?.substring(0, 4);
  const mon = date?.substring(5, 7);
  const month = convert(mon);
  const { state, dispatch } = useContext(ReportContext) as ReportContextType;
  const { state3, dispatch3 } = useContext(
    CurrRelatedContext
  ) as CurrRelatedContextType;
  const router = useRouter();
  const [rel, setRel] = useState<Record<string, any>[]>([]);

  const clickfun = async () => {
    console.log("click fun my friend at card component ", rep);
    dispatch({
      type: "SET_CURRENT",
      payload: rep,
    });
    let temp = rep.slug.replace(/\s/g, "-");
    router.push(`/reports/${temp}`);

    // let related = state.related;
    // console.log("related eeeeports are ", related);
    // // const [rel, setRel] = useState<Record<string, any>[]>([]);

    // let url = `${my_url}/api/getall/reports/related`;
    // // try {
    // console.log("requesting related report for this in card section ", url);
    // console.log("url is ", url);
    // const daata = await axios.get(url, {
    //   params: {
    //     f: related[0],
    //     s: related[1],
    //     t: related[2],
    //   },
    // });

    // console.log("daata on related report section is ", daata);
    // if (daata) {
    //   // setLoading(false);
    //   // console.log("daaaaaattatatata is ", daata.data);
    //   setRel([...daata.data]);
    //   // setLen(daata.data.len);
    // }

    // dispatch3({
    //   type: "SET_CURRENT_RELATED",
    //   payload: daata.data,
    // });
    // // } catch (err) {}

    //  let temp = rep.slug.replace(/\s/g, "-");
    //  router.push(`/report/${temp}`);
  };
  //report card page

  return (
    <>
      <div
        className="card md:flex bg-gray-200 rounded-[8px]  border border-gray-300 md:h-[17rem] cursor-pointer  ease-in-out duration-300 hover:scale-[1.02]"
        onClick={clickfun}
      >
        <div
          className=" relative md:flex-[1] flex items-center p-3 md:h-full h-[15rem] rounded-bl-[8px] rounded-tl-[8px]"
          style={{
            backgroundImage: `url(${rep?.linki2})`,
            //
            backgroundSize: "cover",
            // backgroundRepeat: "no-repeat",
          }}
        >
          <div className="w-full ">
            {/* <Image src={img1} alt="" className="md:w-full object-contain md:object-cover  h-[15rem] md:h-[18rem]  inline-block"/> */}
            <div className=" md:p-8 p-5 bg-white opacity-80 w-full">
              <div className="md:text-[13px] text-[10px] line-clamp-3">
                {rep.title}
              </div>
              <div className="h-[1px] w-full bg-black mt-2"></div>
            </div>
            <span className=" p-3 bg-gray-600 absolute bottom-0 right-0 text-white text-[12px]">
              {month} {year}
            </span>
          </div>
        </div>

        <div className="right flex-[1] flex flex-col justify-between p-6 md:ml-5 md:p-5 md:gap-14 gap-3">
          <div className=" text-gray-600">
            <div className="md:line-clamp-4 line-clamp-3">{rep.subTitle}</div>
          </div>
          <div className=" text-gray-900 flex flex-col justify-center bg-white items-center">
            <div className="">Study Period : 2019–2030</div>
            <div className="">Base Year : 2023 </div>
            <div className="">Forecast Period : 2024–2030</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
