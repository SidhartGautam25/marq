import Image from "next/image";
import img1 from "@/public/assets/report-img1.png";
import { convert } from "@/app/utility/subind";
import { ReportContext, ReportContextType } from "@/app/context/reportContext";
import { useContext } from "react";
import { title } from "process";
import { useRouter } from "next/navigation";

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
  const router = useRouter();

  function clickfun() {
    console.log("click fun my friend at card component ", rep);
    dispatch({
      type: "SET_CURRENT",
      payload: {
        title: rep.title,
        desc: rep.desc,
        linki: rep.linki,
        linkp: rep.linkp,
        createdAt: rep.createdAt,
        industry: rep.industry,
        subind: rep.subind,
        cpage: 0,
      },
    });
    router.push(
      `/report/automotive/${rep.industry}/${rep.subind}/${rep.title}`
    );
  }

  return (
    <>
      <div
        className="card md:flex bg-gray-100 rounded-[5px] md:rounded-br-[4rem] border-2 border-black h-[17rem]"
        onClick={clickfun}
      >
        <div
          className="left relative md:flex-[6] overflow-hidden  md:flex md:items-center p-3"
          style={{
            backgroundImage: `url(${rep.linki})`,
            backgroundSize: "cover",
          }}
        >
          <div className="w-full">
            {/* <Image src={img1} alt="" className="md:w-full object-contain md:object-cover  h-[15rem] md:h-[18rem]  inline-block"/> */}
            <div className=" p-8 bg-white opacity-80 w-full">
              {rep.title}
              <div className="h-[1px] w-full bg-black mt-2"></div>
            </div>
            <span className=" p-3 bg-blue-500 absolute bottom-0 right-0">
              {month} {year}
            </span>
          </div>
        </div>

        <div className="right flex-[6] flex flex-col justify-between p-6 md:ml-5 md:p-5 md:gap-14">
          <div className=" text-gray-600">
            <div className="line-clamp-4">{rep.desc}</div>
          </div>
          <div className=" text-gray-900 flex flex-col justify-center bg-white items-center">
            <div className="">Study Period: 2019-2029</div>
            <div className="">Base Year: 2023</div>
            <div className="">Forecost Period: 2024-2030</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
