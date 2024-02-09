import React from "react";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosSearch } from "react-icons/io";
import { IoPersonOutline } from "react-icons/io5";
import { MdKeyboardArrowDown } from "react-icons/md";
import { LiaShoppingBagSolid } from "react-icons/lia";

const Navbar = () => {
  return (
    <>
      <div className="flex justify-center items-center font-bold gap-10 bg-[#000000] border-b-2 border-grey  ">
        <h1>FREE DELIAVERY , RETURN AND EXCHANGE</h1>
        <IoIosArrowDown />
      </div>

      <div className="w-full flex justify-center">
        <div className="flex justify-between items-center font-bold bg-[#161718] w-[90%]">
          <div>
            <img
              src="./download-removebg-preview.png"
              height={50}
              width={100}
              className="sm:flex items-center justify-center "
            ></img>
          </div>

          <div className="flex gap-3 mt-7 sm:hidden ">
            <p>MEN</p>
            <p>WOMEN</p>
            <p>KIDS</p>
            <p>SPORTS</p>
            <p>BRANDS</p>
            <p>LIFESTYLE</p>
            <p className="text-[red]">OUTLET</p>
          </div>

          <div className="flex flex-col gap-5 ">
            <div className="flex gap-5 text-[10px] w-full justify-end sm:hidden ">
              <a href="/p">help</a>
              <a href="/order-tracker">orders and returns</a>
              <p>sign up</p>
              <p>log in</p>
            </div>
            <div className="flex gap-3 ">
              <input
                placeholder="Seacrh"
                className=" md:flex  hidden   h-[30px] relative bg-[#1E2021] border border-[white]"
              ></input>
              <div className="absolute md:right-[170px] mt-[3px] ">
                <IoIosSearch className="md:flex hidden " />
              </div>
              <IoPersonOutline />
              <IoIosSearch className="flex md:hidden  " />
              <MdKeyboardArrowDown className="sm:hidden " />
              <LiaShoppingBagSolid />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
