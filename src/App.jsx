import Random from "./components/Random"
import Tag from "./components/Tag";

export default function App() {
  return (

    <div className="w-full h-screen flex flex-col background relative overflow-x-hidden items-center">
      <h1 className=" ">
      RANDOM GIFS</h1>
      <div className="flex flex-col w-full items-center gap-y-10 mt-[30px]">
        <Random />
        <Tag />
      </div>
    </div>

  );
}
