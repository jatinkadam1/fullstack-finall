import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const ManWoman = () => {
  const navigate = useNavigate();
  const [manHover, setManHover] = useState("Men");
  const [womenHover, setWomenHover] = useState("Women");

  return (
    <div className="w-full h-auto mt-10 flex flex-col sm:flex-row gap-6 sm:gap-10 px-4 sm:px-0">
      {/* Men's Section */}
      <div
        className="w-full sm:w-1/2 h-[60vh] sm:h-screen bg-cover cursor-pointer flex justify-center uppercase text-black font-extrabold items-center rounded-xl overflow-hidden bg-[url('https://images.unsplash.com/photo-1623742310401-d8057c3c43c8?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')]"
        onMouseEnter={() => setManHover("Shop Men")}
        onMouseLeave={() => setManHover("Men")}
        onClick={() => navigate("/men")}
      >
        <h1 className="bg-white px-6 py-2 rounded-3xl bg-opacity-90">
          {manHover}
        </h1>
      </div>

      {/* Women's Section */}
      <div
        className="w-full sm:w-1/2 h-[60vh] sm:h-screen bg-cover cursor-pointer flex justify-center uppercase text-black font-extrabold items-center rounded-xl overflow-hidden bg-[url('https://images.unsplash.com/photo-1630573133526-8d090e0269af?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')]"
        onMouseEnter={() => setWomenHover("Shop Women")}
        onMouseLeave={() => setWomenHover("Women")}
        onClick={() => navigate("/women")}
      >
        <h1 className="bg-white px-6 py-2 rounded-3xl bg-opacity-90">
          {womenHover}
        </h1>
      </div>
    </div>
  );
};

export default ManWoman;
