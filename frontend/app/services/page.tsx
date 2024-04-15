import { Footer, NavBar, ServiceHero, ServiceOffer } from "../comp";

export default function Home() {
  return (
    <div className="">
        <div className=" bg-gray-900">
            <NavBar/>
        </div>
        <ServiceHero/>
        <ServiceOffer/>
        <Footer/>
    </div>
  );
}
