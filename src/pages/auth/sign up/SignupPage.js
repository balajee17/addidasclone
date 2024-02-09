import React from "react";
import { TiTick } from "react-icons/ti";
import { ImAppleinc } from "react-icons/im";
import { FaFacebook } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import Checkbox from "@mui/material/Checkbox";
import { FaArrowRightLong } from "react-icons/fa6";
import TextField from '@mui/material/TextField';

const SignupPage = () => {
  return (
    <>
      <div className="pb-20 mt-20  pl-40 pr-40   ">
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

          <div className="mt-4  ">
          <TextField className="w-3/4 " id="outlined-basic" label="EMAIL ADDRESS *" variant="outlined"  />
          </div>

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
    </>
  );
};

export default SignupPage;
