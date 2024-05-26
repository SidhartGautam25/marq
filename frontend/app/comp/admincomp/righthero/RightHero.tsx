"use client";
import Link from "next/link";
import Pdfren from "../pdfren/Pdfren";

interface ChildComponentProps {
  reports: Record<string, any>[];
}

const RightHero: React.FC<ChildComponentProps> = () => {
  return (
    <>
      <div className=" flex-[3]">
        <div className=" min-h-[40rem] rounded-lg m-2 flex-[3]">
          <Pdfren />
        </div>
      </div>
    </>
  );
};
export default RightHero;
//this
