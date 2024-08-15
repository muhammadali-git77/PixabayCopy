"use client";
import React, { useEffect, useState } from "react";
import HeroBg from "@/assets/forBg.png";

import { IoSearch } from "react-icons/io5";
import { FaAngleDown } from "react-icons/fa6";
import { getItems } from "@/app/service/poster";

function Hero({ setQuery }) {
  return (
    <section
      style={{
        backgroundImage: `url(${HeroBg.src})`,
      }}
      className=" !bg-no-repeat !bg-center !bg-cover w-full "
    >
      <div className="py-[250px] sm:py-[200px] flex  items-center justify-center w-full h-full  relative">
        <div className="bg-black/30 w-full h-full absolute"></div>
        <div className="absolute z-10 mt-10 max-w-[750px] flex flex-col gap-4 px-5">
          <h1 className="font-[800] text-[30px] max-[400px]:!text-[20px] text-center text-white ">
            Stunning royalty-free images & royalty-free stock
          </h1>
          <p className="text-center text-[16px] text-base-200">
            Over 4.6 million+ high quality stock images and videos shared by our
            talented community.
          </p>

          <div
            
            className="flex justify-center gap-2 rounded-full  outline-none px-5 max-[500px]:py-3 py-1  bg-base-100"
          >
            <button className="">
              <IoSearch size={27} />
            </button>
            <input
              onChange={(e) => setQuery(e.target.value)}
              type="search"
              placeholder="search.."
              className="flex-grow-[1] max-[500px]:w-full  outline-none "
            />
            <div className="dropdown dropdown-end max-[500px]:hidden block">
              <div
                tabIndex={0}
                role="button"
                className="btns !text-black  m-1 flex items-center gap-1"
              >
                All Images
                <FaAngleDown />
              </div>
              <ul
                tabIndex={0}
                className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
              >
                <li>
                  <a>Item 1</a>
                </li>
                <li>
                  <a>Item 2</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="dropdown dropdown-end max-[500px]:block hidden">
            <div
              tabIndex={0}
              role="button"
              className="btns bg-green-400 hover:!bg-green-500 justify-center !text-black m-1 flex items-center gap-1"
            >
              All Images
              <FaAngleDown />
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
            >
              <li>
                <a>Item 1</a>
              </li>
              <li>
                <a>Item 2</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
