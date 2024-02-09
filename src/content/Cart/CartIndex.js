import React from "react";
import { IoIosArrowDown } from "react-icons/io";
import { RxCrossCircled } from "react-icons/rx";
import { TbBus } from "react-icons/tb";
import { MdPhoneIphone } from "react-icons/md";


const CartIndex = () => {
  return (
    <>
      <div className="mt-20 ml-40 ">
        <div>
          <h1 className="font-bold text-3xl  ">YOUR BAG</h1>
          <p className="mt-5 ">TOTAL (4 items) ₹14 396.00</p>
          <p className="mt-4 ">
            Items in your bag are not reserved — check out now to make them
            yours.
          </p>
        </div>

        <div className="flex mt-10 border w-1/2  ">
          <div className=" ">
            <img src="/messi1.jpg" className="w-60 "></img>
          </div>

          <div className="flex flex-col p-4 ">
            <div className="flex justify-evenly ">
              <h1>INTER MIAMI CF 24/25 MESSI HOME JERSEY KIDS</h1>
              <RxCrossCircled className="cursor-pointer ml-10 " />
            </div>
            <p className="">EASY PINK</p>
            <p className="mt-2 ">SIZE: 15-16Y</p>
            <p className="font-bold ">Low in stock</p>

            <div className="flex justify-between mt-4 p-4 font-bold cursor-pointer   border w-1/4 ">
              <p className="">2</p>
              <IoIosArrowDown />
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col ">
        <div className="cursor-pointer mt-20 ml-40 flex underline hover:bg-primary w-28   ">
          <TbBus />
          <p>Free delivery</p>
        </div>
        <div className="cursor-pointer mt-2 ml-40 flex underline hover:bg-primary w-28   ">
          <TbBus />
          <p>Free delivery</p>
        </div>
        <div className="cursor-pointer mt-2  ml-40 flex underline hover:bg-primary w-28   ">
          <TbBus />
          <p>Free delivery</p>
        </div>
      </div>
      


      <div className="grid grid-cols place-content-center gap-y-2 pt-5 pb-5 mt-40 bg-[#161718] text-sm  ">
      
        <div className="flex gap-x-4  ">
        <MdPhoneIphone />
        <p className=" ">Questions? 1800-120-3300</p>
        <p>|</p>
        <p>8AM - 8PM, 7 days a week</p>
        
        </div>

        <div className="grid place-content-center ">
        <p>Privacy Statement | Terms and Conditions</p>
        
        </div>
        <div className="grid place-content-center ">
        <p>© 2024 adidas India Marketing Private Limited</p>

        </div>
        
      </div>
    </>
  );
};

export default CartIndex;
