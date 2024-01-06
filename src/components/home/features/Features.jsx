import { IoMdArrowRoundForward } from "react-icons/io";
import { CiGlobe } from "react-icons/ci";
import { RiKey2Fill } from "react-icons/ri";
import { FiLock } from "react-icons/fi";
import "./Features.scss";

const Features = () => {
  return (
    <div className="features my-24">
      <div className="m-auto my-12 w-[90%] md:w-[70vw] lg:w-[40vw]">
        <h1 className="text-[10vw] md:text-[4vw] lg:text-[2.5vw] font-bold text-center ">
          Elevating Card Programs with Cutting-Edge Technology
        </h1>
        <h2 className="text-center my-6 md:my-2">
          consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
        </h2>
        <h4 className="text-[#582066] font-medium text-lg flex items-center justify-center">
          Compare all Pro Features <IoMdArrowRoundForward />
        </h4>
      </div>
      <div className="feature-cards lg:flex px-[5vw]">
        <div className="feature-card my-12 md:my-6">
          <div className="svg text-4xl md:text-2xl p-4 md:p-2 bg-[#F4EFF6] text-[#582066] hover:text-[#f4eff6] cursor-pointer hover:bg-[#582066] transition duration-500 m-auto rounded-full">
            <CiGlobe className="m-auto " />
          </div>
          <h3 className="text-center font-bold text-lg my-5 md:my-2">Global Accepted</h3>
          <p className="text-md md:w-[80%] m-auto text-center">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum,
            cupiditate praesentium nesciunt quidem temporibus eveniet.
          </p>
        </div>
        <div className="feature-card my-12 md:my-6">
          <div className="svg text-4xl md:text-2xl p-4 md:p-2 bg-[#F4EFF6] text-[#582066] hover:text-[#f4eff6] cursor-pointer hover:bg-[#582066] transition duration-500 m-auto rounded-full">
            <RiKey2Fill className="m-auto " />
          </div>
          <h3 className="text-center font-bold text-lg my-5 md:my-2">Biometric Integrated</h3>
          <p className="text-md md:w-[80%] m-auto text-center">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum,
            cupiditate praesentium nesciunt quidem temporibus eveniet.
          </p>
        </div>
        <div className="feature-card my-12 md:my-6">
          <div className="svg text-4xl md:text-2xl p-4 md:p-2 bg-[#F4EFF6] text-[#582066] hover:text-[#f4eff6] cursor-pointer hover:bg-[#582066] transition duration-500 m-auto rounded-full">
            <FiLock className="m-auto " />
          </div>
          <h3 className="text-center font-bold text-lg my-5 md:my-2">Fully Secured</h3>
          <p className="text-md md:w-[80%] m-auto text-center">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum,
            cupiditate praesentium nesciunt quidem temporibus eveniet.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Features;
