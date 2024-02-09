import React from "react";
import Navbar from "../../../layouts/Navbar";
import Footbar from "../../../layouts/footbar";
import { TiTick } from "react-icons/ti";
import { ImAppleinc } from "react-icons/im";
import { FaFacebook } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import Checkbox from "@mui/material/Checkbox";
import { FaArrowRightLong } from "react-icons/fa6";

const LoginPage = () => {
  //  const [checked, setChecked] = React.useState(true);

  // const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   setChecked(event.target.checked);
  // };
  return (
    <>
      <Navbar />

      <div className="pb-20 mt-20 flex justify-between pl-40 pr-40 gap-x-10      ">
        <div className="w-1/2">
          <img src="/log-in.png"></img>
          <h1 className="text-4xl  font-bold mt-6 w-3/4       ">
            JOIN THE CLUB. GET REWARDED.
          </h1>
          <p className="mt-4 ">JOIN ADICLUB. GET REWARDED TODAY.</p>

          <div className="flex flex-row gap-x-2 mt-4 ">
            <TiTick />
            <p>A 15% off voucher for your next purchase</p>
          </div>

          <div className="flex flex- gap-x-2 mt-4 ">
            <TiTick />
            <p>A 15% off voucher for your next purchase</p>
          </div>

          <div className="flex flex-row gap-x-2 mt-4 ">
            <TiTick />
            <p>A 15% off voucher for your next purchase</p>
          </div>

          <div className="flex flex-row gap-x-2  mt-4 ">
            <TiTick />
            <p>A 15% off voucher for your next purchase</p>
          </div>

          <p className="mt-4 w-[45%]    ">
            Join now to start earning points, reach new levels and unlock more
            rewards and benefits from adiClub.
          </p>
        </div>

        <div className="w-1/2">
          <img src="/log2.png"></img>
          <h1 className="font-bold text-3xl mt-2  ">
            YOUR ADICLUB BENEFITS AWAIT
          </h1>
          <p className="mt-2 ">
            Get free shipping, discount vouchers and members only products when
            you're in adiClub
          </p>
          <p className="font-bold ">Log in or sign up (it's free)</p>

          <div className="flex gap-x-2 mt-2  ">
            <ImAppleinc className="border-2 size-12 p-2 " />
            <FaFacebook className="border-2 size-12 p-2 " />
            <FcGoogle className="border-2 size-12 p-2 " />
          </div>

          <div className="border-2 w-[550px]  h-10  mt-4  "></div>

          <div className="mt-4">
            <div className="flex ">
              <Checkbox
                // checked={checked}
                // onChange={handleChange}
                inputProps={{ "aria-label": "controlled" }}
              />
              <p className="font-sm cursor-pointer ">
                I would like to stay up to date with adidas. I agree to receive
                personalised marketing messages from adidas India Marketing Pvt.
                Ltd.
              </p>
            </div>
            <p className="ml-10 underline cursor-pointer hover:bg-primary w-20    ">
              Read more
            </p>

            <div className="flex mt-4  ">
              <Checkbox
                // checked={checked}
                // onChange={handleChange}
                inputProps={{ "aria-label": "controlled" }}
              />
              <p className="cursor-pointer">
                I have read and accepted the Terms & Conditions, the adiClub
                Terms & Conditions and the adidas Privacy Policy.
              </p>
            </div>

            <div className="mt-2  flex  ">
              <Checkbox
                // checked={checked}
                // onChange={handleChange}
                inputProps={{ "aria-label": "controlled" }}
              />
              <p className="cursor-pointer">
                Keep me logged in. Applies to all options. More info
              </p>
            </div>
            <p className="ml-10 underline cursor-pointer  hover:bg-primary w-20    ">
              More info
            </p>

            <div className="flex justify-between cursor-pointer mt-2   p-2 font-bold bg-primary w-40  ">
              <p>CONTINUE</p>
              <FaArrowRightLong />
            </div>
          </div>
        </div>
      </div>

      <Footbar />
    </>
  );
};

export default LoginPage;
