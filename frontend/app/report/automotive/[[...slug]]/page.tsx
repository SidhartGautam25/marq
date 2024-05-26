import { Footer, NavBar } from "@/app/comp";
import PdfDescription from "@/app/comp/admincomp/pdfdescription/pdfdescription";
import { type } from "os";

export default function Page({ params }: { params: { slug?: string[] } }) {
  console.log("ypur type is ", typeof params.slug);
  const arr = params.slug;
  console.log(arr![0]);
  console.log("hii everybody");
  const title = arr![2];

  return (
    <div>
      <div className="bg-black">
        <NavBar />
      </div>
      {/* <h1>My Page info is :{typeof params.slug}</h1>; */}
      <PdfDescription />
      <Footer />
    </div>
  );
}
