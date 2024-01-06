import "./Hero.scss";
import { IoMdArrowRoundForward } from "react-icons/io";
import mesh from "../../../assets/Mesh.png";

const Hero = () => {
  return (
    <div className="hero flex justify-center md:p-12">
      <img src={mesh} className="absolute -z-10" alt="" />
      <div className="content flex-col justify-center text-center m-5 md:m-10">
        <h4 className="text-center text-[#582066] font-medium sm:text-md md:text-2xl lg:text-lg">Seamless Experience</h4>
        <h1 className="text-[10vw] md:text-[8vw] lg:text-[4vw] font-medium w-[100%] lg:w-[50%] m-auto">Unleashing the Next Generation of Card Solutions</h1>
        <h2 className="w-[100%] md:w-[80%] m-auto lg:w-[50%]">
          consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
        </h2>
        <button className="flex bg-[#582066] text-white items-center p-2 px-4 rounded-lg m-auto mt-4 mb-2 md:my-6 animated-button-dark">
          Unlock your Card <IoMdArrowRoundForward className="text-xl ms-2"/>
        </button>
        <h4 className="text-center text-gray-500 font-medium text-md md:text-lg">* No Credit Card Required</h4>

      </div>
     
    </div>
  );
};

export default Hero;
