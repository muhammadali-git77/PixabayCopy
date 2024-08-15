"use client";
import React, { useEffect, useRef, useState } from "react";
import { FaAngleDown } from "react-icons/fa6";
import { FiUpload } from "react-icons/fi";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose, IoSearch } from "react-icons/io5";
import clsx from "clsx";
import Link from "next/link";
import Logo from "@/assets/logo/logos";
import { getItems } from "../service/poster";
import Image from "next/image";

function Header() {
  const headerRef = useRef();
  const InRef = useRef();
  const [actNav, setActNav] = useState(false);
  const [actSearch, setActSearch] = useState(false);
  const [q, setQ] = useState();

  useEffect(() => {
    // Define the scroll event handler function
    function handleScroll(event) {
      const { scrollY } = window;
      scrollY > 10
        ? headerRef.current?.classList.add("active")
        : headerRef.current?.classList.remove("active");
    }

    // Add event listener when the component mounts
    window.addEventListener("scroll", handleScroll);

    // Remove event listener when the component unmounts
    return (event) => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  useEffect(() => {
    // Define the scroll event handler function
    function handleScroll(event) {
      const { scrollY } = window;
      scrollY > 10
        ? InRef.current?.classList.add("activeIn")
        : InRef.current?.classList.remove("activeIn");
    }

    // Add event listener when the component mounts
    window.addEventListener("scroll", handleScroll);

    // Remove event listener when the component unmounts
    return (event) => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);


  // API Call
  

  return (
    <>
      <header className="!top-0 fixed z-40 w-full">
        {/* Header */}
        <div
          id="headerID"
          ref={headerRef}
          className="  flex w-full justify-between  items-center   z-30  py-3 px-5 "
        >
          <Link
            href="/"
            aria-label="Alibay"
            className="w-auto flex items-center "
          >
            <Logo />
          </Link>

          <div
            ref={InRef}
            className="hidden justify-center gap-2 rounded-full  outline-none px-2 lg:px-5 py-2 lg:py-0  bg-base-100"
          >
            <button
              onClick={() => {
                setActSearch(!actSearch);
              }}
              className="text-black"
            >
              <IoSearch size={27} />
            </button>
            <input
              onChange={(e) => setQuery(e.target.value)}
              type="search"
              placeholder="search.."
              className="flex-grow-[1] hidden lg:flex max-[1024px]:w-full  outline-none "
            />
            <div className="dropdown dropdown-end hidden lg:block">
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

          <div
            className={clsx(
              "!w-full left-0 z-40 p-[4.5px] border-b absolute bg-base-200 transition-all  !duration-300 flex items-center justify-center lg:hidden ",
              {
                "-top-full": !actSearch,

                "top-0": actSearch,
              }
            )}
          >
            <div className="flex justify-center gap-2 rounded-full  outline-none px-5 max-[500px]:py-3 py-1  bg-base-200">
              <button className="text-black">
                <IoSearch size={27} />
              </button>
              <input
                autoFocus
                // onChange={(e) => setQ(e.target.value)}
                type="search"
                placeholder="search.."
                className="flex-grow-[1] max-[500px]:w-full bg-transparent outline-none "
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
            <button
              onClick={() => {
                setActSearch(!actSearch);
              }}
              className="text-black  absolute right-3"
            >
              <IoClose size={27} />
            </button>
          </div>
          <ul className="flex items-center gap-2 font-[600]">
            <li className="hidden md:flex">
              <div className="dropdown dropdown-end">
                <div
                  tabIndex={0}
                  role="button"
                  className="btns m-1 flex items-center gap-1"
                >
                  Explore
                  <FaAngleDown />
                </div>
                <ul
                  tabIndex={0}
                  className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
                >
                  <li>
                    <a>Photos</a>
                  </li>
                  <li>
                    <a>Illustration</a>
                  </li>
                  <li>
                    <a>Vectors</a>
                  </li>
                  <li>
                    <a>Videos</a>
                  </li>
                  <li>
                    <a>Musics</a>
                  </li>

                  <li>
                    <a>GIFs</a>
                  </li>
                </ul>
              </div>
            </li>

            <li>
              <button className="btns">Log in</button>
            </li>
            <li>
              <button className="btns hover:border-white border-transparent border backdrop-blur-sm bg-black/5 ">
                Join
              </button>
            </li>
            <li className="hidden md:flex">
              <button className="btns upBut hover:bg-opacity-75 flex items-center gap-1 bg-green-400 !text-white ">
                <FiUpload className="upload duration-300" /> Upload
              </button>
            </li>
            <li className="flex md:hidden">
              <button
                onClick={() => {
                  setActNav(!actNav);
                }}
              >
                <GiHamburgerMenu size={30} />
              </button>
            </li>
          </ul>
        </div>
        {/* GamBurger NAV */}
        <div
          className={clsx(
            " w-full h-full flex duration-[0.7s] z-40 !fixed top-0 ",
            {
              "-translate-x-full": !actNav,

              "left-0": actNav,
            }
          )}
        >
          <div
            className={clsx(
              " top-0 md:hidden flex transition-transform !duration-[0.7s]  bg-white shadow-2xl !h-full w-full min-[380px]:w-[350px]",
              {
                "-translate-x-full": !actNav,
                "left-0": actNav,
              }
            )}
          >
            <div className="  w-full h-full flex !px-5 flex-col gap-7 ">
              <div className="flex items-center py-5 justify-between border-b">
                <Logo />
                <button
                  onClick={() => {
                    setActNav(!actNav);
                  }}
                >
                  <IoClose size={30} />
                </button>
              </div>
              <div className="mt-5">
                <button className="btns !w-full upBut hover:bg-opacity-75 flex items-center gap-1 bg-green-400 text-white ">
                  <FiUpload className="upload duration-300" /> Upload
                </button>
              </div>
              <div className="flex flex-col gap-5">
                <ul className="menu bg-base-200 rounded-box w-full">
                  <li>
                    <details open>
                      <summary>Media</summary>
                      <ul>
                        <li>
                          <a>Photos</a>
                        </li>
                        <li>
                          <a>Illustration</a>
                        </li>
                        <li>
                          <a>Vectors</a>
                        </li>
                        <li>
                          <a>Videos</a>
                        </li>
                        <li>
                          <a>Musics</a>
                        </li>

                        <li>
                          <a>GIFs</a>
                        </li>
                      </ul>
                    </details>
                  </li>
                </ul>
                <ul className="menu bg-base-200 rounded-box w-full">
                  <li>
                    <details close>
                      <summary>Media</summary>
                      <ul>
                        <li>
                          <a>Photos</a>
                        </li>
                        <li>
                          <a>Illustration</a>
                        </li>
                        <li>
                          <a>Vectors</a>
                        </li>
                        <li>
                          <a>Videos</a>
                        </li>
                        <li>
                          <a>Musics</a>
                        </li>

                        <li>
                          <a>GIFs</a>
                        </li>
                      </ul>
                    </details>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* CloseContainer */}

          <div
            onClick={() => {
              setActNav(!actNav);
            }}
            className="flex-grow z-0"
          ></div>
        </div>
      </header>


      
    </>
  );
}

export default Header;
