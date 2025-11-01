import React from "react";

const Footer = () => {
  return (
    <div>
      <div className="bg-slate-800 text-white flex flex-col items-center justify-center  w-full ">
        <div className="logo font-bold text-xl">
          <span className="text-green-600"> &lt;</span>
          Pass
          <span className="text-green-600">OP/&gt;</span>
        </div>
        <div className="flex justify-center items-center">
          Created with
          {/* <img className="w-4 m-2" src="icons/heart.png" alt="" /> */}
          <span>
            <lord-icon
              src="https://cdn.lordicon.com/nvsfzbop.json"
              trigger="in"
              delay="1500"
              stroke="bold"
              state="in-reveal"
              colors="secondary:#E63946,primary:#FF0000"
              style={{ width: "25px", height: "25px" }}
            ></lord-icon>
          </span>
          by Aditya Kumar
        </div>
      </div>
    </div>
  );
};

export default Footer;
