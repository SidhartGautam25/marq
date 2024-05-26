import { Footer, NavBar, Relatedarticle, RightHero } from "../../comp";
export default function Page() {
  return (
    <div className="">
      <div className=" bg-gray-900">
        <NavBar />
      </div>
      <h1>Slug part</h1>
      <div className="flex">
        <RightHero />
        <Relatedarticle />
      </div>
      <Footer />
    </div>
  );
}
//this
