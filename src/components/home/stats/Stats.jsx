import { IoMdArrowRoundForward } from "react-icons/io";
import { BiExpand } from "react-icons/bi";
import { HiOutlineCreditCard } from "react-icons/hi2";
import mobile from "../../../assets/mobile.svg";
import star from "../../../assets/Group 12.svg";

const Stats = () => {
  return (
    <div className="stats my-24">
      <div className="m-auto my-12 w-[90%] md:w-[70vw] lg:w-[40vw]">
        <h1 className="text-[10vw] md:text-[4vw] lg:text-[2.5vw] font-bold text-center">
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

      {/* spending section  */}
      <div className="spending px-4 md:px-24 lg:px-36 lg:flex justify-between my-20">
        <div className="rounded">
          <img src={mobile} alt="" />
        </div>
        <div className="bg-[#FAF9FF] lg:w-[50%] my-5 lg:my-0 lg:flex  rounded lg:ms-8 p-2 md:p-16 relative">
          <img className="absolute md:left-8 md:top-20" src={star} alt="" />
          <div className="spending-card bg-white border-s-2 border-t-2 p-3 md:p-8 lg:py-4 lg:my-auto rounded-xl">
            <div className="flex justify-between">
              <div className="">
                <h2 className="md:text-2xl font-bold">Spending</h2>
                <h4 className="flex items-center my-2 text-[#5A6475]">
                  <HiOutlineCreditCard className="text-xl me-2"/> 2345 visa card
                </h4>
              </div>
              <BiExpand  className="text-2xl"/>
            </div>
            <div className="text-2xl md:text-4xl font-medium flex items-center">
              127.14 <span className=" text-sm md:text-lg ms-2">USD</span>
            </div>
            <div className="text-[3vw] md:text-lg text-[#5A6475] font-medium flex justify-between my-4">
              <span>vs last week</span> <span>Last Purchased ( Feb 24 19:59 UTC-5 )</span>
            </div>
            <div className="">
              <div className="text-[#5A6475] font-medium flex justify-between my-1 text-[4vw] md:text-lg md:my-4">
                <span className="w-[30%] ms-1">400 USD</span>
                <span className="w-[35%] ms-1">1000 USD</span>
                <span className="w-[30%] ms-1">5000 USD</span>
              </div>
              <div className="flex justify-between">
                <div className="h-[3vw] md:h-[1.3vw] rounded-s-2xl bg-[#EFE4F2] w-[30%]"><div className="h-[3vw] md:h-[1.3vw] rounded-s-2xl w-[100%] bg-[#582066]"></div></div>
                <div className="h-[3vw] md:h-[1.3vw] w-[35%] bg-[#EFE4F2]"><div className="h-[3vw] md:h-[1.3vw] w-[60%] bg-[#582066]"></div></div>
                <div className="h-[3vw] md:h-[1.3vw] rounded-e-2xl bg-[#EFE4F2] w-[30%]"><div className="h-[3vw] md:h-[1.3vw] w-[0%] rounded-e-2xl bg-[#582066]"></div></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* features section */}
      <div className="feature-cards lg:flex px-[5vw]">
        <div className="feature-card my-10">
          <h2 className="text-[#582066] text-[14vw] md:text-[5vw] lg:text-[2.5vw] font-medium text-center">
            2 Million
          </h2>
          <h3 className="text-center font-bold my-2">Global Accepted</h3>
          <p className="text-md m-auto text-center md:w-[40%] lg:w-[80%]">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          </p>
        </div>
        <div className="feature-card my-10">
          <h2 className="text-[#582066] text-[14vw] md:text-[5vw] lg:text-[2.5vw] font-medium text-center">
            1K
          </h2>
          <h3 className="text-center font-bold my-2">Global Accepted</h3>
          <p className="text-md m-auto text-center md:w-[40%] lg:w-[80%]">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          </p>
        </div>
        <div className="feature-card my-10">
          <h2 className="text-[#582066] text-[14vw] md:text-[5vw] lg:text-[2.5vw] font-medium text-center">
            $73 Million
          </h2>
          <h3 className="text-center font-bold my-2">Global Accepted</h3>
          <p className="text-md m-auto text-center md:w-[40%] lg:w-[80%]">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          </p>
        </div>
        <div className="feature-card my-10">
          <h2 className="text-[#582066] text-[14vw] md:text-[5vw] lg:text-[2.5vw] font-medium text-center">
            2.0
          </h2>
          <h3 className="text-center font-bold my-2">Global Accepted</h3>
          <p className="text-md m-auto text-center md:w-[40%] lg:w-[80%]">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Stats;
