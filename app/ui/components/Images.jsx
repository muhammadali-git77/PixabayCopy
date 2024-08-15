"use client";
import { getItems } from "@/app/service/poster";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

function Images({ images }) {
  function generateLists(min, max) {
    return [...Array(max - min).keys()].map((i) => i + min);
  }

  if (images.length === 0) {
    return (
      <div className="flex items-center mt-20 mb-20 justify-center">
        <span class="loader"></span>
      </div>
    );
  }

  return (
    <>
      <section className="w-full mt-10 mb-10  px-5">
        <div className="grid grid-cols-2 items-start md:grid-cols-4 gap-4">
          <div className="grid gap-4">
            {generateLists(0, 5).map((item) => {
              return (
                <Link
                  href={`/details/${images[item]?.id}`}
                  className="relative"
                  key={"row-1-" + item}
                >
                  <Image
                    className="max-w-full absolute z-10 rounded-lg h-auto"
                    width={600}
                    height={600}
                    src={images[item]?.largeImageURL}
                    key={images[item]?.id}
                    alt={images[item]?.tags}
                  />
                  <Image
                    className="max-w-full blur-md rounded-lg h-auto"
                    width={600}
                    height={600}
                    src={images[item]?.largeImageURL}
                    key={images[item]?.id}
                    alt={images[item]?.tags}
                  />
                </Link>
              );
            })}
          </div>
          <div className="grid gap-4">
            {generateLists(5, 10).map((item) => {
              return (
                <Link
                  href={`/details/${images[item]?.id}`}
                  className="relative"
                  key={"row-2-" + item}
                >
                  <Image
                    className="max-w-full absolute z-10 rounded-lg h-auto"
                    width={600}
                    height={600}
                    src={images[item]?.largeImageURL}
                    key={images[item]?.id}
                    alt={images[item]?.tags}
                  />
                  <Image
                    className="max-w-full  blur-md rounded-lg h-auto"
                    width={600}
                    height={600}
                    src={images[item]?.largeImageURL}
                    key={images[item]?.id}
                    alt={images[item]?.tags}
                  />
                </Link>
              );
            })}
          </div>
          <div className="grid gap-4">
            {generateLists(10, 15).map((item) => {
              return (
                <Link
                  href={`/details/${images[item]?.id}`}
                  className="relative"
                  key={"row-2-" + item}
                >
                  <Image
                    className="max-w-full absolute z-10 rounded-lg h-auto"
                    width={600}
                    height={600}
                    src={images[item]?.largeImageURL}
                    key={images[item]?.id}
                    alt={images[item]?.tags}
                  />
                  <Image
                    className="max-w-full  blur-md rounded-lg h-auto"
                    width={600}
                    height={600}
                    src={images[item]?.largeImageURL}
                    key={images[item]?.id}
                    alt={images[item]?.tags}
                  />
                </Link>
              );
            })}
          </div>
          <div className="grid gap-4">
            {generateLists(15, 20).map((item) => {
              return (
                <Link
                  href={`/details/${images[item]?.id}`}
                  className="relative"
                  key={"row-2-" + item}
                >
                  <Image
                    className="max-w-full absolute z-10 rounded-lg h-auto"
                    width={600}
                    height={600}
                    src={images[item]?.largeImageURL}
                    key={images[item]?.id}
                    alt={images[item]?.tags}
                  />
                  <Image
                    className="max-w-full  blur-md rounded-lg h-auto"
                    width={600}
                    height={600}
                    src={images[item]?.largeImageURL}
                    key={images[item]?.id}
                    alt={images[item]?.tags}
                  />
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}

export default Images;
