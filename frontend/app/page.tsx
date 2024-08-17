// no ssr code is in insight/page.tsx page
import {
  HomeOne,
  NavBar,
  Footer,
  Slid,
  Vision,
  Homefive,
  Homefour,
  Homesix,
  Homethree,
  Work,
  Blogs,
} from "./comp";
import Homefour2 from "./comp/newHomefour/Homefour2";
export default function Home() {
  return (
    <div className="flex flex-col w-dvw">
      <div className="min-h-dvh w-dvw ">
        <div className="bg-[url('/images/img11.jpg')]">
          <NavBar />
          <HomeOne />
        </div>
      </div>
      <div className="">
        <Work />

        <Homethree />
        <Vision />
        <Homefour2/>,
        <Blogs />
        <Slid />
        <Homefive />
        <Homesix />

        <Footer />
      </div>
    </div>
  );
}
