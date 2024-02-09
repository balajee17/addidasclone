import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Homeheader = () => {
  const imageData = [
    {
      id: 1,
      src: "/shoe1.jpg",
      txt: "NMD_R1 SHOES",
      mrp: "13999.00 $",
    },
    {
      id: 2,
      src: "/shoe2.jpg",
      txt: "NMD_R1 SHOES",
      mrp: "13999.00 $",
    },
    {
      id: 3,
      src: "/shoe3.jpg",
      txt: "NMD_R1 SHOES",
      mrp: "13999.00 $",
    },
    {
      id: 4,
      src: "/shoe1.jpg",
      txt: "NMD_R1 SHOES",
      mrp: "13999.00 $",
    },
    {
      id: 5,
      src: "/shoe2.jpg",
      txt: "NMD_R1 SHOES",
      mrp: "13999.00 $",
    },
    {
      id: 6,
      src: "/shoe3.jpg",
      txt: "NMD_R1 SHOES",
      mrp: "13999.00 $",
    },
  ];
  var settings = {
    dots: true,
    infinite: false,
    speed: 200,
    slidesToShow: 4,
    slidesToScroll: 6,
  };
  return (
    <>
      <div
        className="bg-cover bg-center h-screen relative flex items-center md:w-full "
        style={{ backgroundImage: 'url("./homepage.jpg")' }}
      >
        <div className="absolute   top-0 h-full flex flex-col md:justify-center justify-end   left-10 gap-x-4 w-80 md:ml-20 ml-5     ">
          <h2 className="font-extrabold text-4xl ">
            ISN'T ICONIC THE WAY TO GO?
          </h2>

          <p className="text-xl mt-5">Samba: the legacy </p>
          <div className="flex flex-row gap-4 cursor-pointer bg-primary   mt-5 w-40 p-3 border-b border-r border-white   ">
            <div className="flex flex-row justify-center ">
              <p className="font-extrabold  ">SHOP NOW</p>
              <FaArrowRightLong className="mt-1   " />
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-flow-col relative">
        <img src="./sneaker1.jpg"></img>
        <img src="./sneaker2.jpg"></img>
        <img src="./sneaker3.jpg"></img>

        <div className="absolute  top-0 h-full flex flex-col justify-center  left-10 gap-x-4 w-80 ml-20    ">
          <h2 className="font-extrabold text-4xl ">2000'S RUNNING</h2>

          <p className="text-xl mt-5">
            Rediscover the millennium's most iconic running shoes, today.
          </p>
          <div className="flex flex-row gap-4 cursor-pointer bg-primary shadow-lg  mt-5 w-40 p-3 border-b border-r border-white      ">
            <p className="font-extrabold  ">SHOP NOW</p>
            <FaArrowRightLong className="mt-1  " />
          </div>
        </div>
      </div>

      <div className="md:flex hidden justify-center ml-4  ">
        <div className="w-[80%]  gap-y-12  ">
          <h1 className="font-bold mt-12  text-3xl  gap-y-12     ">
            Popular right now
          </h1>
          <div className="grid grid-cols-3  grid-flow   cursor-pointer text-4xl mt-12  gap-y-16    font-bold">
            <div className="flex flex-col   ">
              <p>Samba</p>
              <div className="w-96  h-0 mt-4   bg-secoundry border outline hover:outline-offset-2   "></div>
            </div>
            <div className="flex flex-col  ">
              <p>running shoes men</p>
              <div className="w-96  h-0 mt-4   bg-secoundry border outline hover:outline-offset-2  "></div>
            </div>

            <div className="flex flex-col  ">
              <p>nmd</p>
              <div className="w-96  h-0 mt-4   bg-secoundry border outline hover:outline-offset-2  "></div>
            </div>

            <div className="flex flex-col  ">
              <p>backpack</p>
              <div className="w-96  h-0 mt-4   bg-secoundry border outline hover:outline-offset-2  "></div>
            </div>

            <div className="flex flex-col  ">
              <p>men sandals</p>
              <div className="w-96  h-0 mt-4   bg-secoundry border outline hover:outline-offset-2  "></div>
            </div>

            <div className="flex flex-col  ">
              <p>bag</p>
              <div className="w-96  h-0 mt-4   bg-secoundry border outline hover:outline-offset-2  "></div>
            </div>
          </div>
        </div>
      </div>

      <div className="overflow-x-hidden ">
        <div className="flex font-bold mt-20 gap-x-4 pl-16 ">
          <button className="border-solid border-2 border-indigo-600 p-3">
            New arrivals
          </button>
          <button className="border-solid border-2 border-indigo-600 p-3">
            Best of adidas
          </button>
        </div>

        <div className="">
          <Slider {...settings}>
            {imageData.map((item) => (
              <div key={item.id} className="mt-10 pl-16">
                <div>
                  <img
                    src={item.src}
                    alt="k"
                    className="h-[280px] w-[280px] "
                  />
                  <p>{item.txt}</p>
                  <p>{item.mrp}</p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>

      <div>
        <h1 className="font-bold mt-8 text-3xl pl-16 ">WHAT'S HOT?</h1>
        <div className="mt-8 flex gap-x-5 pl-16 h-300 w-300">
          <div className=" ">
            <img src="/hotpic1.jpg" className="h-397 w-298 "></img>
            <h1 className="font-bold ">AE 1 New Wave</h1>
            <p className="pt-6 text-sm ">
              Anthony Edwards' declaration to always lead, never follow. Believe
              that.
            </p>
            <p className="cursor-pointer pt-10 underline underline-offset-4 ">
              SHOP NOW
            </p>
          </div>

          <div className="h-397 w-298  ">
            <img src="/hotpic2.jpg" className="h-397 w-298 "></img>
            <h1 className="font-bold ">AE 1 New Wave</h1>
            <p className="pt-6 text-sm ">
              Anthony Edwards' declaration to always lead, never follow. Believe
              that.
            </p>
            <p className="cursor-pointer pt-10 underline underline-offset-4 ">
              SHOP NOW
            </p>
          </div>

          <div className=" h-397 w-298 ">
            <img src="/hotpic3.jpg" className="h-397 w-298 "></img>
            <h1 className="font-bold ">AE 1 New Wave</h1>
            <p className="pt-6 text-sm ">
              Anthony Edwards' declaration to always lead, never follow. Believe
              that.
            </p>
            <p className="cursor-pointer pt-10 underline underline-offset-4 ">
              SHOP NOW
            </p>
          </div>

          <div className="h-397 w-298  ">
            <img src="/hotpic1.jpg" className="h-397 w-298 "></img>
            <h1 className="font-bold ">AE 1 New Wave</h1>
            <p className="pt-6 text-sm ">
              Anthony Edwards' declaration to always lead, never follow. Believe
              that.
            </p>
            <p className="cursor-pointer pt-10 underline underline-offset-4 ">
              SHOP NOW
            </p>
          </div>
        </div>
      </div>

      <div className="flex justify-center   gap-x-10 ml-8 mr-8    mt-8  p-10 bg-[#23230E] ">
        <div className="mt-6 pl-6 ">
          <h1 className="text-3xl font-bold mt-6 ">
            STORIES, STYLES AND SPORTSWEAR AT ADIDAS, SINCE 1949
          </h1>
          <p className="mt-6 mb-8 ">
            Sport keeps us fit. Keeps you mindful. Brings us together. Through
            sport we have the power to change lives. Whether it is through
            stories of inspiring athletes. Helping you to get up and get moving.
            Sportswear featuring the latest technologies, to up your
            performance. Beat your PB. adidas offers a home to the runner, the
            basketball player, the soccer kid, the fitness enthusiast. The
            weekend hiker that loves to escape the city. The yoga teacher that
            spreads the moves. The 3-Stripes are seen in the music scene. On
            stage, at festivals. Our sports clothing keeps you focused before
            that whistle blows. During the race. And at the finish lines. We're
            here to support creators. Improve their game. Their lives. And
            change the world.
          </p>

          <p>
            adidas is about more than sportswear and workout clothes. We partner
            with the best in the industry to co-create. This way we offer our
            fans the sports apparel and style that match their athletic needs,
            while keeping sustainability in mind. We're here to support
            creators. Improve their game. Create change. And we think about the
            impact we have on our world.
          </p>
        </div>

        <div className="mt-6 p-13   ">
          <h1 className="text-3xl font-bold mt-6  ">
            WORKOUT CLOTHES, FOR ANY SPORT
          </h1>
          <p className="mt-8 mb-8     ">
            adidas designs for and with athletes of all kinds. Creators, who
            love to change the game. Challenge conventions. Break the rules and
            define new ones. Then break them again. We supply teams and
            individuals with athletic clothing pre-match. To stay focussed. We
            design sports apparel that get you to the finish line. To win the
            match. We support women, with bras and tights made for purpose. From
            low to high support. Maximum comfort. We design, innovate and
            itterate. Testing new technologies in action. On the pitch, the
            tracks, the court, the pool. Retro workout clothes inspire new
            streetwear essentials. Like NMD, Ozweego and our Firebird
            tracksuits. Classic sports models are brought back to life. Like
            Stan Smith. And Superstar. Now seen on the streets and the stages.
          </p>
          <p>
            Through our collections we blur the borders between high fashion and
            high performance. Like our adidas by Stella McCartney athletic
            clothing collection - designed to look the part inside and outside
            of the gym. Or some of our adidas Originals lifestyle pieces, that
            can be worn as sportswear too. Our lives are constantly changing.
            Becoming more and more versatile. And adidas designs with that in
            mind.
          </p>
        </div>
      </div>

     
    </>
  );
};

export default Homeheader;
