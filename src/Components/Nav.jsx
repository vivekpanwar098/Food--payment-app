import React from "react";
import { MdFastfood } from "react-icons/md";
import { IoSearch } from "react-icons/io5";
import { LuShoppingBag } from "react-icons/lu";

const Nav = () => {
  return (
    <div className="w-full h-[100px] bg-amber-300 flex justify-between items-center px-6 md:px-8">
  <div className="w-[60px] h-[60px] bg-white flex justify-center items-center rounded-md shadow-md relative">
    <MdFastfood className="w-[30px] h-[30px] text-green-400" />
  </div>

  <form className="w-[45%] h-[60%] bg-white flex items-center px-5 gap-5 rounded-md shadow-md md:w-[70%]">
    <IoSearch className="w-[30px] h-[30px] text-green-400" />
    <input
      type="text"
      placeholder="Search Items..."
      className="w-full outline-none text-[16px] md:text-[20px]"
    />
  </form>

  <div className="w-[60px] h-[60px] bg-white flex justify-center items-center rounded-md shadow-md relative">
    <span className="absolute -top-2 -right-2 bg-green-500 text-white text-xs font-bold px-1 rounded-full">0</span>
    <LuShoppingBag className="w-[30px] h-[30px] text-green-400" />
  </div>
</div>

    
  );
};

export default Nav;
