"use client";
import { getItems } from "@/app/service/poster";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import DownloadLink from "react-download-link";
import { IoClose } from "react-icons/io5";
import { RiExpandHeightLine, RiExpandWidthLine } from "react-icons/ri";
import { LuView } from "react-icons/lu";
import { MdOutlineFileDownload } from "react-icons/md";

function DetailPage({ params }) {
  const { id } = params;
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(true);
  const [actNav, setActNav] = useState(false);

  useEffect(() => {
    if (id) {
      getItems("", {
        params: { id },
      }).then((data) => {
        setImage(data.data.hits[0]);
        setLoading(false);
      });
    }
  }, [id]);
  const [images, setImages] = useState([]);

  useEffect(() => {
    if (image) {
      // `image` aniqlanganligini tekshirish
      getItems("", {
        params: {
          q: `${image.tags || "nature"}`,
          image_type: "image",
          pretty: true,
        },
      }).then((data) => {
        setImages(data.data.hits);
      });
    }
  }, [image]);

  function generateLists(min, max) {
    let result = [];
    for (let index = min; index < max; index++) {
      result.push(index);
    }
    return result;
  }

  if (loading)
    return (
      <div className="flex items-center justify-center h-[100vh]">
        <span class="loader"></span>
      </div>
    );
  if (!image) return <div>Rasm topilmadi</div>;

  return (
    <>
      <section className="mt-[80px] px-5 mb-5">
        <div className="flex-col md:flex-row flex gap-5 xl:gap-0 items-center justify-center sm:justify-between w-full pt-5">
          <div
            onClick={() => {
              setActNav(!actNav);
            }}
            className="flex-grow-[1]  relative flex justify-center items-center h-[350px] sm:h-[500px] "
          >
            <Image
              className="max-h-full absolute z-10 w-auto rounded-md"
              src={image.largeImageURL}
              alt={image.tags || "Image"}
              height={image.imageWidth}
              width={image.imageHeight}
            />
            <Image
              className="max-h-full blur-xl w-auto rounded-md"
              src={image.largeImageURL}
              alt={image.tags || "Image"}
              height={image.imageWidth}
              width={image.imageHeight}
            />
          </div>

          <div className="w-full md:w-[350px] shadow-xl items-center flex flex-col py-10  justify-center gap-2 p-3   bg-base-200 rounded-xl ">
            <div className="flex-col flex gap-3 w-full">
              <DownloadLink
                label="Download"
                filename={`${image.tags}.jpg`}
                exportFile={() =>
                  Promise.resolve(
                    new Blob([image.largeImageURL], { type: "image/jpeg" })
                  )
                }
                className="btns w-full items-center justify-center flex h-auto decorationNone !text-white bg-green-400 text-lg "
              />
              <button
                onClick={() => setActNav(!actNav)}
                className="btns bg-black decorationNone !text-white  py-[-1rem] "
              >
                Preview
              </button>
            </div>
            <h1 className="font-[700] text-xl mt-3 ">
              About as <span className="text-green-600">image</span>:
            </h1>
            <div>
              <h1 className="flex  gap-1 items-center font-[700] text-lg">
                <RiExpandWidthLine /> Width: {image.imageWidth}px
              </h1>
              <h1 className="flex gap-1 items-center font-[700] text-lg">
                <RiExpandHeightLine /> Height: {image.imageHeight}px
              </h1>
              <h1 className="flex mt-2 gap-1 items-center font-[700] text-lg">
                <LuView /> Shows: {image.views}
              </h1>
              <h1 className="flex gap-1 items-center font-[700] text-lg">
                <MdOutlineFileDownload /> Downloads: {image.downloads}
              </h1>
            </div>
          </div>
        </div>
        <div className="mt-[100px]">
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
        </div>
      </section>
      <div
        className={clsx(
          "w-full justify-center mx-auto p-3  items-center top-0 fixed h-full z-40 backdrop-blur-xl bg-black/70 ",
          {
            hidden: !actNav,

            flex: actNav,
          }
        )}
      >
        <div
          onClick={() => {
            setActNav(!actNav);
          }}
          className="text-white w-full !h-full  absolute  top-0 right-0 cursor-pointer"
        ></div>
        <IoClose
          onClick={() => {
            setActNav(!actNav);
          }}
          className="text-white absolute z-40 top-5 right-5 cursor-pointer"
          size={30}
        />
        <div className="h-full max-w-[1024px] justify-center items-center flex z-30">
          <Image
            className="w-auto max-h-full rounded-md"
            src={image.largeImageURL}
            alt={image.tags || "Image"}
            height={image.imageWidth}
            width={image.imageHeight}
          />
        </div>
      </div>
    </>
  );
}

export default DetailPage;
