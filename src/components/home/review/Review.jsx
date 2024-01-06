import React from "react";
import companyLogo from "../../../assets/Company logo.svg";
import { LuCreditCard } from "react-icons/lu";
import { FiHeadphones, FiStar } from "react-icons/fi";
import reviewImage from "../../../assets/reviewImg.svg";
import { FaStar } from "react-icons/fa";
const Review = () => {
  return (
    <div className="review p-[5vw] md:w-[80%] lg:w-[50%] m-auto">
      <img src={companyLogo} className="m-auto" alt="" />
      <h2 className="text-xl font-medium text-center my-4">
        I had the pleasure of experiencing the next generation of card solutions
        with this incredible product. It's refreshing to see such innovation in
        the financial industry.
      </h2>
      <div className="reviewer flex flex-col items-center my-8">
        <img src={reviewImage} className="" alt="" />
        <h2 className="my-1">Nick Babich</h2>
        <p className="flex">
          <FaStar className="text-[#E3AD54]" />
          <FaStar className="text-[#E3AD54]" />
          <FaStar className="text-[#E3AD54]" />
          <FaStar className="text-[#E3AD54]" />
          <FaStar className="text-[#E3AD54]" />
        </p>
      </div>
      <div className="">
        <h1 className="text-[10vw] md:text-[4vw] lg:text-[2.5vw] font-bold text-center ">
          Unlock Limitless Possibilities with Our New Card Solutions
        </h1>
      </div>
      <div className="sm:flex justify-center">
        <button className="flex bg-[#582066] animated-button-dark text-white items-center p-2 px-16 md:px-4 rounded-lg my-6 me-1 w-[100%] md:w-[unset]">
          Unlock your Card <LuCreditCard className="text-xl ms-2" />
        </button>
        <button className="flex bg-[#EEEFEF] animated-button-light text-[#5A6475] items-center p-2 px-14 md:px-4 rounded-lg my-6 ms-1 w-[100%] md:w-[unset]">
          Customer Support <FiHeadphones className="text-xl ms-2" />
        </button>
      </div>
    </div>
  );
};

export default Review;
