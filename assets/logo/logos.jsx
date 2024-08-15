"use client";
import React from "react";
import Logos from "@/assets/Logo.png";
import Logoss from "@/assets/Logoshort.png";
import Image from "next/image";

function Logo() {
  return (
    <section className="w-auto  ">
      <Image className="!w-[1200px] hidden md:flex " width={100} height={30} src={Logos} alt="salom" />
      <Image className="w-[500px] flex md:hidden " width={40} height={40} src={Logoss} alt="salom" />
    </section>
  );
}

export default Logo;
