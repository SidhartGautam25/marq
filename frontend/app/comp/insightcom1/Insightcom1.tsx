import ele from "@/public/assets/tech.jpg";
import { IoMdShare } from "react-icons/io";
import { IoPrintOutline } from "react-icons/io5";
interface Bloog {
  title: string;
  linkp: string;
  linkt: string;
}

const Insightcom1: React.FC<Bloog> = ({ title, linkp, linkt }) => {
  console.log("title is in is comp1 ", title);
  console.log("image is in insightcom1 component ", linkt);
  return (
    <div className="">
      <div className="flex items-center mx-10 gap-2">
        <div className="md:w-3/5 ml-5">
          <h1 className="text-2xl font-bold md:text-4xl sm:text-3xl">
            {title}
          </h1>
        </div>
        <img
          src={linkt}
          alt="top photo"
          className="w-2/5 h-[25rem]"
          width={200}
          height={100}
        />
      </div>
      <div className="md:ml-10 md:my-5 my-3 ml-7">
        <h1 className="text-blue-400">
          Transportation and travel /{" "}
          <span className="text-black">Article</span>
        </h1>
        {/* <div className="my-3 md:my-5 flex gap-5 text-2xl md:text-3xl">
          <IoMdShare />
          <IoPrintOutline/>
        </div>
        <div className="md:my-5 my-3">3.10.2000</div> */}
      </div>
    </div>
  );
};

export default Insightcom1;
