import React from "react";
import { FaInstagramSquare } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";

const Footbar = () => {
  return (
    <>
      <div className="flex justify-center gap-x-8   h-[150px] w-full   bg-[#716F0A]">
        <div>
          <h1 className="text-3xl font-bold pr-70  mt-9  ">
            JOIN ADIDAS AND GET 15% OFF
          </h1>
        </div>

        <div className="flex  flex-row pr-70 mt-9 cursor-pointer h-14  gap-x-4 p-4  font-bold bg-[#19190A]   ">
          <button className=" ">SIGN UP FOR FREE </button>
          <FaArrowRightLong className=" pr-70 mt-1 " />
        </div>
      </div>

      <div className="flex justify-center gap-x-20 bg-[#161718] pt-8 pb-8  ">
        <div>
          <h1 className="font-bold ">PRODUCTS</h1>
          <div className="text-sm  mt-6 cursor-pointer  ">
            <p className="hover:underline text-sm">Sports</p>
            <p>Sports</p>
            <p>Sports</p>
            <p>Sports</p>
            <p>Sports</p>
          </div>
        </div>

        <div>
          <h1 className="font-bold ">PRODUCTS</h1>
          <div className="text-sm  mt-6 cursor-pointer  ">
            <p className="hover:underline text-sm">Sports</p>
            <p>Sports</p>
            <p>Sports</p>
            <p>Sports</p>
            <p>Sports</p>
          </div>
        </div>

        <div>
          <h1 className="font-bold ">PRODUCTS</h1>
          <div className="text-sm  mt-6 cursor-pointer  ">
            <p className="hover:underline text-sm">Sports</p>
            <p>Sports</p>
            <p>Sports</p>
            <p>Sports</p>
            <p>Sports</p>
          </div>
        </div>

        <div>
          <h1 className="font-bold ">PRODUCTS</h1>
          <div className="text-sm  mt-6 cursor-pointer  ">
            <p className="hover:underline text-sm">Sports</p>
            <p>Sports</p>
            <p>Sports</p>
            <p>Sports</p>
            <p>Sports</p>
          </div>
        </div>

        <div>
          <h1 className="font-bold ">PRODUCTS</h1>
          <div className="text-sm  mt-6 cursor-pointer  ">
            <p className="hover:underline text-sm">Sports</p>
            <p>Sports</p>
            <p>Sports</p>
            <p>Sports</p>
            <p>Sports</p>
          </div>
        </div>

        <div>
          <h1>PRODUCTS</h1>
          <div>
            <FaInstagramSquare className="size-10 mt-5 " />
          </div>
        </div>
      </div>

      <div className="mt-6  pb-8 font-thin      ">
        <div className="flex justify-center gap-x-6 text-sm  ">
          <p className="text-[10px]">Privacy Policy</p>
          <div className="text-[10px]"> | </div>
          <p className="text-[10px]">Terms and Conditions</p>
          <div className="text-[10px]"> | </div>
          <p className="text-[10px]">Cookies</p>
        </div>

        <div>
          <p className="flex items-center justify-center mt-6 text-[10px]">
            ©2021 adidas India Marketing Pvt. Ltd
          </p>
        </div>
      </div>
    </>
  );
};

export default Footbar;
