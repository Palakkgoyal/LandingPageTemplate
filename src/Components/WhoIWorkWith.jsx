import { whoIWorkWithImg } from "../assets";
import SectionTitle from "./SectionTitle";

const WhoIWorkWith = () => {
  return (
    <div
      className="bg-blue-900 overflow-hidden relative text-white flex gap-0 h-screen justify-around items-center pt-16"
      id="hero"
    >
      <div className="ml-24 z-10">
        <SectionTitle title="Who I Work With" textClasses="text-[#FFD700]" spanClasses="bg-[#FFD700]" />
        <h3 className="text-6xl mt-4 max-w-[18ch] p-0 font-semibold leading-tight">
          Art Direction for global leading brands
        </h3>
        <p className="mt-12 max-w-[37ch]">
          I research and create breakthrough delightful leading visual designers
        </p>
      </div>
      <div className="relative h-[400px]">
        <img
          src={whoIWorkWithImg}
          alt="A sketch rocket flying with smoke"
          className="h-full w-full"
        />
      </div>
      <span className="absolute border -right-20 border-solid w-[800px] h-[800px] border-gray-500 rounded-full "></span>
      <span className="absolute border -right-20 border-solid w-[1000px] h-[1000px] border-gray-500 rounded-full "></span>
    </div>
  );
};

export default WhoIWorkWith;
