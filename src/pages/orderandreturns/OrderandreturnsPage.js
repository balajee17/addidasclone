import React from "react";
import Navbar from "../../layouts/Navbar";
import { FaArrowRightLong } from "react-icons/fa6";
import { TbPlaceholder } from "react-icons/tb";
import Footbar from "../../layouts/footbar";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import TextField from '@mui/material/TextField';

const Orderandreturns = () => {
  return (
    <>
      <Navbar/>

      <div className="mt-10 ml-40    ">
        <h1 className="font-bold text-3xl ">ORDERS AND RETURNS</h1>
        <p className="mt-4 ">
          You can exchange or return an item within 14 days after receiving your
          order.
        </p>
        <h1 className="font-bold text-xl mt-8 ">WHAT'S YOUR EMAIL?</h1>
        <div className="mt-4  ">
          <TextField className="w-1/2  " id="outlined-basic" label="EMAIL ADDRESS *" variant="outlined"  />
          </div>
        <div></div>
        <h1 className="font-bold text-xl mt-4  ">WHAT DO YOU WANT TO DO</h1>
        <div className="h-[0] w-10 "></div>
        <div>
        <div>
        <FormLabel>
      
      <RadioGroup
        defaultValue="bala"
      >
        <FormControlLabel value="ballu" control={<Radio />} label="Track an order" />
      </RadioGroup>
      </FormLabel>
   </div>
          <p className="mt-4 ">Track an order</p>
        </div>
        <div>

        <div>
      
      <RadioGroup
        defaultValue="bala"
      >
        <FormControlLabel value="ballu" control={<Radio />} label="Start an exchange or return" />
      </RadioGroup>
   </div>

          <p className="mt-4 ">Start an exchange or return</p>
        </div>

        <div className="mt-4 flex gap-x-4 bg-primary cursor-pointer w-[145PX] h-[50px] border-r-2 border-b-2   ">
        <button className="font-bold ml-4  ">CONTINUE</button>
        <FaArrowRightLong className="mt-6" />


        </div>

        <div className="">

        </div>
        

      </div>

      <div className="mt-10 mb-6 ml-40 flex justify-between  ">
        <h1 className="font-bold text-xl ">NEED HELP?</h1>
        <h1 className="bg-primary font-bold mr-40  underline underline-offset-2 cursor-pointercursor-pointer   ">VIEW ALL HELP TOPICS</h1>
      </div>

      <div className="grid grid-cols-2 pb-20 gap-4 place-content-around ml-40 mr-40   ">

      <div className="border-2 ">
      <h1 className="font-bold mt-2 ml-5 cursor-pointer ">WHAT SHOULD I DO IF I HAVEN'T RECEIVED MY PACKAGE?</h1>
      <p className="mt-12 ml-5 font-thin mb-5 ">Delivery</p>

      </div>

      <div className="border-2 ">
      <h1 className="font-bold mt-2 ml-5 cursor-pointer ">WHAT SHOULD I DO IF I HAVEN'T RECEIVED MY PACKAGE?</h1>
      <p className="mt-12 ml-5 font-thin mb-5 ">Delivery</p>
        
      </div>

      <div className="border-2 ">
      <h1 className="font-bold mt-2 ml-5 cursor-pointer ">WHAT SHOULD I DO IF I HAVEN'T RECEIVED MY PACKAGE?</h1>
      <p className="mt-12 ml-5 font-thin mb-5 ">Delivery</p>
        
      </div>

      <div className="border-2 ">
      <h1 className="font-bold mt-2 ml-5 cursor-pointer ">WHAT SHOULD I DO IF I HAVEN'T RECEIVED MY PACKAGE?</h1>
      <p className="mt-12 ml-5 font-thin mb-5 ">Delivery</p>
        
      </div>

      </div>

      <Footbar/>
      

      



    </>
  );
};

export default Orderandreturns;
