import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-slate-800 text-white">
      <div className="mycontainer flex items-center justify-between px-4 h-13 py-5">
        <div className="logo font-bold text-2xl flex items-center">
          <span>
            <lord-icon
              src="https://cdn.lordicon.com/srupsmbe.json"
              trigger="in"
              delay="500"
              state="in-reveal"
              colors="primary:#ffffff,secondary:#08a88a"
              style={{ width: "50px", height: "40px" }}
            ></lord-icon>
          </span>
          <span className="text-green-600"> &lt;</span>
          Pass
          <span className="text-green-600">OP/&gt;</span>
        </div>

        <button className="text-white bg-slate-700 my-5 px-2 rounded-full flex gap-0 justify-center items-center ">
          <span className="relative top-0.5">
            <lord-icon
              src="https://cdn.lordicon.com/jjxzcivr.json"
              trigger="in"
              delay="500"
              state="in-reveal"
              colors="primary:#ffffff,secondary:#08a88a"
              style={{ width: "40px", height: "35px" }}
            ></lord-icon>
          </span>
          <span className="font-bold">Github</span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
