import React from "react";
import Laptop from "../assets/Laptop.jpg";

const Analytics = () => {
  return (
    <div className="w-full bg-white py-166 px-4">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
        <img className="w-[500px] mx-auto my-4" src={Laptop} alt="/" />
        <div className="flex flex-col justify-center">
          <p className="text-[#00df9a] font-bold">DATA ANALYTICS DASHBOARD</p>
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
            Manage Data Analytics Centrally
          </h1>
          <p className="">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam
            incidunt blanditiis recusandae, nihil explicabo adipisci numquam
            dolores voluptatibus rerum quidem veritatis natus corrupti nesciunt
            ad id sit mollitia perspiciatis a.
          </p>
          <button className="w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3 text-[#000300] border-solid border-2 border-[#00df9a] hover:bg-[#00df9a] hover:text-white">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
