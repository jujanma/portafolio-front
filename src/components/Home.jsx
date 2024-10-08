import React from "react";
import developerHeader from "../assets/yoDeveloper.jpg";
import header from "../assets/header.png";

const Home = () => {
  return (
    <div className="h-screen w-screen overflow-hidden">
      <img src={header} alt="header" className="sm:hidden w-screen" />
      <div className="sm:h-20 min-[700px]:hidden bg-[#202029] "></div>
      <img
        src={developerHeader}
        alt="developer"
        className="absolute z-[-1] left-[65%] top-[260px] md:left-[20%] md:static h-[60%] W-[60%]"
      />
      <div className="absolute z-[-1] md:text-[40px] sm:left-0 md:w-screen p-6 md:static left-[20%] top-[40%] w-[619px] h-[250px] text-black text-[64px] font-normal">
        <p>Hi I'm Juan Manuel a FrontEnd developer</p>
      </div>
    </div>
  );
};

export default Home;
