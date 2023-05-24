import React from "react";
import { Icon } from "@iconify/react";
import SwiperComp from "../components/SwiperComp";
import Link from "next/link";


const Home = () => {
  
  return (
    <div className=" jsx w-full py-4 mb-8  ">
      <div className=" p-4 mx-auto my-[0] ">
        <div className="flex justify-between border-b-2 border-text_grey py-4">
          <p className="text-text_grey text-[1.2rem] ">
            Welcome <strong className="text-white">John Doe</strong>
          </p>
          <Icon icon="bi:bell-fill" color="#70858C" width="32" />
        </div>
        <SwiperComp />
        <div className="flex gap-2 items-center  ">
          <Icon
            icon="pixelarticons:search"
            rotate={1}
            color="#70858C"
            width="48"
          />
          <input
            placeholder="search"
            className="font-italic text-[2.4rem] max-md:text-[1.6rem] p-2 bg-transparent "
          />
        </div>
        <div className="grid grid-cols-[1fr_0.7fr] gap-4 ">
          <div className="h-[180px] bg-slate-600 rounded-[10px] text-white text-[2rem] p-8 ">
            <Link href="/jobs">Jobs</Link>
          </div>

          <div className="flex flex-col gap-4 ">
            <div className="bg-black h-[50%] w-full rounded-[10px] ">v</div>
            <div className="bg-black h-[50%] rounded-[10px]"></div>
          </div>
        </div>
      </div>
      <style jsx global>
        {`
          body {
            background: #02252e;
          }
        `}
      </style>
      ;
    </div>
  );
};



export default Home;
