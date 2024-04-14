import { HomeOne, NavBar } from "./comp";
export default function Home() {
  return (
    <div className="flex h-dvh w-dvw border-4 border-green-700">
      <NavBar />
      <HomeOne />
    </div>
  );
}
