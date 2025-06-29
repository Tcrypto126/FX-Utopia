"use client";

import React from "react";
import Image from "next/image";
import TrustedCarousel from "./TrustedCarousel";
import { EmblaOptionsType } from "embla-carousel";
import "./css/embla.css";
import { ScrollToIcon } from "../ui/icon";

const TrustedSection = () => {
  const OPTIONS1: EmblaOptionsType = {
    dragFree: true,
    loop: true,
  };
  const OPTIONS2: EmblaOptionsType = {
    dragFree: true,
    direction: "rtl",
    loop: true,
  };
  const SLIDESLEFT = [
    "/assets/home/Icon1.png",
    "/assets/home/Icon2.png",
    "/assets/home/Icon3.png",
    "/assets/home/Icon4.png",
    "/assets/home/Icon5.png",
    "/assets/home/Icon4.png",
    "/assets/home/Icon5.png",
  ];
  const SLIDESRIGHT = [
    "/assets/home/Icon7.png",
    "/assets/home/Icon8.png",
    "/assets/home/Icon9.png",
    "/assets/home/Icon10.png",
    "/assets/home/Icon11.png",
    "/assets/home/Icon8.png",
    "/assets/home/Icon9.png",
  ];

  return (
    <div className="w-full relative z-0">
      <Image
        src="/assets/home/trusted-center.png"
        width={900}
        height={900}
        alt="trusted-center"
        className="absolute top-24 left-[50%] -translate-x-[50%] hidden sm:block"
      />
      <Image
        src="/assets/home/trusted-left.png"
        width={629}
        height={371}
        alt="trusted-left"
        className="absolute top-0 left-0 hidden md:block"
      />
      <Image
        src="/assets/home/trusted-right.png"
        width={829}
        height={371}
        alt="trusted-right"
        className="absolute top-0 right-0 hidden md:block"
      />

      <div className="w-full flex flex-col items-center gap-16 sm:gap-28 pt-8 sm:pt-12">
        <div className="flex items-center gap-3">
          <ScrollToIcon width="23" height="38" />
          {/* <span className="font-[400] text-[13px]">Scroll to Explore</span> */}
        </div>
        <div className="w-full flex flex-col items-center gap-8 sm:gap-14">
          <h2 className="max-w-[696px] px-3">
            Trusted By Thousands of Forex & Crypto Hub Worldwide
          </h2>
          <div className="relative w-full h-[96px] sm:h-[268px] flex items-center justify-between">
            <TrustedCarousel
              slides={SLIDESRIGHT}
              options={OPTIONS2}
              direction="right"
            />
            <TrustedCarousel
              slides={SLIDESLEFT}
              options={OPTIONS1}
              direction="left"
            />
            <Image
              src="/assets/home/Icon6big.png"
              width={268}
              height={268}
              alt="trust-center-icon"
              className="w-[96px] h-[96px] sm:w-[268px] sm:h-[268px] absolute top-0 left-[50%] -translate-x-[50%] rounded-full z-30 shadow-[0_0_65px_#ffffff95]"
            />
          </div>
        </div>
        <div>
            <h5>
            Key Features
            </h5>
        </div>
      </div>
    </div>
  );
};

export default TrustedSection;
