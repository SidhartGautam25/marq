import Link from "next/link";

interface getprops {
  link: string;
  heading: string;
}
export default function Buttons({ link, heading }: getprops) {
  return (
    <>
      <Link href={link}>
        <div className="w-[100%]">
          <button className="p-3 w-[20rem] border-gray-500 border rounded-[8px] mt-5 hover:bg-gradient-to-r from-blue-700 to-black hover:text-white  text-gray-500">
            {heading}
          </button>
        </div>
      </Link>
    </>
  );
}
