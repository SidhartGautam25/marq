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
  Slider
} from "./comp";
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
        <div className="">
          <Homefour />
        </div>
        <Blogs />
        <Slid />
        <Homefive />
        <Homesix />
        <Slider/>

        <Footer />
      </div>
    </div>
  );
}
