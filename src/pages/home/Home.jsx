import React from "react";
import "./Home.scss";
import Navbar from "../../components/navbar/Navbar";
import Hero from "../../components/home/Hero/Hero";
import Header from "../../components/home/header/Header";
import img1 from "../../assets/Logo.svg";
import img2 from "../../assets/Logo-1.svg";
import img3 from "../../assets/Logo-2.svg";
import img4 from "../../assets/Logo-3.svg";
import img5 from "../../assets/Logo-4.svg";
import img6 from "../../assets/Logo-5.svg";
import img7 from "../../assets/Logo-6.svg";
import img8 from "../../assets/Logo-7.svg";
import Features from "../../components/home/features/Features";
import Stats from "../../components/home/stats/Stats";
import Review from "../../components/home/review/Review";
import Footer from "../../components/footer/Footer";

const Home = () => {
  return (
    <div className="home-page">
      <Header />
      <Navbar />

      <Hero />
      <div className="flex justify-between md:justify-center lg:justify-between mx-[5vw] mb-8 flex-wrap">
        <img className="md:m-2 scale-75 md:scale-100" src={img1} alt="" />
        <img className="md:m-2 scale-75 md:scale-100" src={img2} alt="" />
        <img className="md:m-2 scale-75 md:scale-100" src={img3} alt="" />
        <img className="md:m-2 scale-75 md:scale-100" src={img4} alt="" />
        <img className="md:m-2 scale-75 md:scale-100" src={img5} alt="" />
        <img className="md:m-2 scale-75 md:scale-100" src={img6} alt="" />
        <img className="md:m-2 scale-75 md:scale-100" src={img7} alt="" />
        <img className="md:m-2 scale-75 md:scale-100" src={img8} alt="" />
      </div>

      <Features />

      <Stats />

      <Review />

      <Footer />
    </div>
  );
};

export default Home;
