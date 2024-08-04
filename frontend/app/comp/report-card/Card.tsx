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
      payload: rep,
    });
    let temp = rep.slug.replace(/\s/g, "-");
    router.push(`/report/${temp}`);
  }

  return (
    <>
      <div
        className="card md:flex bg-gray-100 rounded-[5px] md:rounded-br-[4rem] border-2 border-black md:h-[17rem]"
        onClick={clickfun}
      >
        <div
          className=" relative md:flex-[1] flex items-center p-3 md:h-full h-[15rem]"
          style={{
            backgroundImage: `url(${rep.linki2})`,
            backgroundSize: "cover",
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
            <span className=" p-3 bg-blue-500 absolute bottom-0 right-0">
              {month} {year}
            </span>
          </div>
        </div>

        <div className="right flex-[1] flex flex-col justify-between p-6 md:ml-5 md:p-5 md:gap-14 gap-3">
          <div className=" text-gray-600">
            <div className="md:line-clamp-4 line-clamp-3">{rep.desc}</div>
          </div>
          <div className=" text-gray-900 flex flex-col justify-center bg-white items-center">
            <div className="">Study Period: {rep.study}</div>
            <div className="">Base Year: {rep.base}</div>
            <div className="">Forecost Period: {rep.forcast}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
