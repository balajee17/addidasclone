import React from "react";
import Navbar from "../../layouts/Navbar";
import Footbar from "../../layouts/footbar";
import { IoMdStar } from "react-icons/io";
import { MdKeyboardArrowDown } from "react-icons/md";
import { TiChartLine } from "react-icons/ti";
import { FaLongArrowAltRight } from "react-icons/fa";
import { IoIosHeart } from "react-icons/io";
import { LuBus } from "react-icons/lu";

const ProductDetail = () => {
  return (
    <>
      <div className="flex flex-row    ">
        <div className="w-[1200px] ">
          <div className="grid grid-cols-2 ">
            <img className="border border-[#000000]" src="/messi1.jpg "></img>
            <img className="border border-[#000000]" src="/messi2.jpg"></img>
            <img className="border border-[#000000]" src="/messi3.jpg"></img>
            <img className="border border-[#000000]" src="/messi4.jpg"></img>
          </div>
        </div>

        <div className="w-[600px] pl-10 border-2 pr-10      ">
          <div className="flex justify-between     ">
            <div className="flex space-x-1  ">
              <h1>Boys </h1>
              <h1> • </h1>
              <h1>Football</h1>
            </div>

            <div className="flex bg-[#000000] cursor-pointer  ">
              <IoMdStar />
              <IoMdStar />
              <IoMdStar />
              <IoMdStar />
              <IoMdStar />
              <p className="underline ">2</p>
            </div>
          </div>
          <h1 className="fonr-extrabold  text-3xl mt-2   ">
            INTER MIAMI CF 24/25 MESSI HOME JERSEY KIDS
          </h1>
          <p>MRP in Indian currency:</p>
          <p className="font-bold ">₹3 599.00 per unit</p>
          <p>(Inclusive of all taxes)</p>
          <p className="mt-6 ">Easy Pink</p>

          <div className="flex justify-between  ">
            <p className="font-bold mt-6 ">Sizes</p>
            <p className="cursor-pointer underline mt-6 bg-primary w-[100px] h-8">
              Find your size
            </p>
          </div>

          <div class="grid grid-cols-5 grid-flow-row border-2 p-2 gap-4 w-[400px]">
            <div className="border-2 p-2 ">XS</div>
            <div className="border-2 p-2 ">S</div>
            <div className="border-2 p-2 ">M</div>
            <div className="border-2 p-2 ">L</div>
            <div className="border-2 p-2 ">XL</div>
            <div className="border-2 p-2 ">2XL</div>
            <div className="border-2 p-2 ">3XL</div>
          </div>

          <div className="flex cursor-pointer mt-3 hover:bg-primary w-[100px]">
            <TiChartLine />
            <h1 className="underline ">Size guide</h1>
          </div>

          <div className="mt-6 flex justify-between gap-x-4  ">
            <div className="flex justify-between border-2 p-2 bg-primary font-bold w-[400px]   ">
              <h1>ADD TO BAG</h1>
              <FaLongArrowAltRight />
            </div>

            <div>
              <IoIosHeart className="border-2 p-3 size-[50px] " />
            </div>
          </div>

          <div className="flex gap-x-2 mt-4 ">
            <LuBus />
            <h1 className="underline  cursor-pointer hover:bg-primary ">
              Free Delivery, Free Returns
            </h1>
          </div>

          <div className=" mt-4 ">
            <h1 className="underline  cursor-pointer hover:bg-primary ">
              DELIVERY WITHIN: METRO CITIES:2-3 DAYS, OTHERS: 4-5 DAYS
            </h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetail;
