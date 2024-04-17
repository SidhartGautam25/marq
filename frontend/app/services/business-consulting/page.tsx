import { Buss, Conserv, Footer, NavBar } from "../../comp";

export default function Home() {
  return (
    <div className="">
      <div className=" bg-gray-900">
        <NavBar />
      </div>
      <div className="lg:mx-36 xl:mx-36 mx-10 md:mx-20">
        <Conserv />
        <Buss />
      </div>
      <Footer />
    </div>
  );
}
