import { heroImg } from "../assets";
import SectionTitle from "./SectionTitle";

const Hero = () => {
  return (
    <div className=" flex gap-0 h-screen pt-16" id="hero">
      <div className="ml-24 mt-[10vh]">
        <SectionTitle title="Jack Gross" />
        <h1 className="text-5xl max-w-[11ch] m-0 p-0 font-bold">
          Hello, my name is Jack. I am a Visual Designer
        </h1>
        <button className="mt-8 bg-blue-400 text-white px-10 py-3 text-lg font-semibold rounded-lg hover:scale-105 transition-all ease-out active:bg-blue-200">
          Hire me
        </button>
      </div>
      <div className="relative -mr-40 h-full">
        <img
          src={heroImg}
          alt="A sketch rocket flying with smoke"
          className="h-full w-full"
        />
      </div>
    </div>
  );
};

export default Hero;
