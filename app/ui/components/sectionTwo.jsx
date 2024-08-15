"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";


function SectionTwo({setQuery}) {
  
  return (
    <section className="w-full flex mt-5 justify-center items-center px-5">
      <div className="flex gap-3 bg-base-200 rounded-xl items-center justify-center flex-wrap px-5 py-2">
        <button onClick={() => setQuery("")} className="btns !text-black">
          Home
        </button>
        <button onClick={() => setQuery("photos")} className="btns !text-black">
          Photos
        </button>

        <button
          onClick={() => setQuery("illustrations")}
          className="btns !text-black"
        >
          Illustrations
        </button>
        <button onClick={() => setQuery("vector")} className="btns !text-black">
          Vector
        </button>
        <button
          onClick={() => setQuery("business")}
          className="btns !text-black"
        >
          Business
        </button>
        <button onClick={() => setQuery("sports")} className="btns !text-black">
          Sports
        </button>
        <button onClick={() => setQuery("travel")} className="btns !text-black">
          Travel
        </button>
        <button onClick={() => setQuery("nature")} className="btns !text-black">
          Nature
        </button>
        <button onClick={() => setQuery("food")} className="btns !text-black">
          Food
        </button>
      </div>
    </section>
  );
}

export default SectionTwo;
