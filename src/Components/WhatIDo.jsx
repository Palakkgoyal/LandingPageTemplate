import { whatIDoImg } from "../assets";
import SectionTitle from "./SectionTitle";

const WhatIDo = () => {
  return (
    <div className="flex h-screen items-center justify-between gap-40">
      <div className="relative h-[300px]">
        <img
          src={whatIDoImg}
          alt="A sketch rocket flying with smoke"
          className="h-full w-full"
        />
      </div>
      <div className="mr-24">
        <SectionTitle title="What I Do" />
        <h3 className="text-2xl max-w-[30ch] font-bold mt-8 mb-10">
          I enjoy creating delightful, human-centered digital experiences.
        </h3>
        <h1 className="text-7xl m-0 p-0 font-bold pt-10 border-t border-slate-300 border-solid w-fit">
          Think. Make. Solve.
        </h1>
        <button className="mt-8 bg-blue-400 text-white px-10 py-3 text-lg font-semibold rounded-lg hover:scale-105 transition-all ease-out active:bg-blue-200">
          Contact Me
        </button>
      </div>
    </div>
  );
};

export default WhatIDo;
