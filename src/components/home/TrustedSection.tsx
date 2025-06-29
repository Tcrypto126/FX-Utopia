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
    <div className="w-full h-fit relative z-0">
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
      <Image
        src="/assets/home/trusted-bottom.png"
        width={1500}
        height={100}
        alt="trusted-bottom"
        className="absolute bottom-0 left-[50%] -translate-x-[50%]"
      />

      <div className="w-full flex flex-col items-center gap-16 sm:gap-28 py-8 sm:py-12">
        <div className="flex items-center gap-3">
          <ScrollToIcon width="23" height="38" />
          {/* <span className="font-[400] text-[13px]">Scroll to Explore</span> */}
        </div>
        <div className="w-full flex flex-col items-center gap-8 sm:gap-14">
          <h2 className="max-w-[696px] px-3 relative z-30">
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
        <div className="relative z-30 flex flex-col items-center px-3">
          <h5 className="text-[40px] md:text-[64px] lg:text-[170px] select-none uppercase font-riosark font-[400] text-center leading-[100%] bg-gradient-to-b from-[#7851A9] to-[#00000054] bg-clip-text text-transparent">
            Key Features
          </h5>
          <h1 className="max-w-[1018px] -mt-[10px] sm:-mt-[40px]">
            Key Features of FX Utopia Community
          </h1>
          <p className="mt-[24px] text-center">
            Everything a Crypto and Forex Traders Enthusiast Needs
          </p>
          <div className="mt-[32px] md:mt-[100px] max-w-[100%] lg:max-w-[90%] flex flex-col lg:flex-row gap-4 justify-between">
            <div className="p-4 flex flex-col max-w-[100%] lg:max-w-[300px] gap-4 bg-gradient-to-b from-[#2C0B48] to-[#09030E] border-[1px] border-[#361056] rounded-[12px]">
              <Image
                src="/assets/home/featured1.png"
                width={52}
                height={52}
                alt="featured"
              />
              <h5 className="text-[22px] font-riosark leading-[36px]">
                Signal Sharing Platform
              </h5>
              <p>
                Access high-quality trading signals from verified professionals
              </p>
            </div>
            <div className="p-4 flex flex-col max-w-[100%] lg:max-w-[300px] gap-4 bg-gradient-to-b from-[#2C0B48] to-[#09030E] border-[1px] border-[#361056] rounded-[12px]">
              <Image
                src="/assets/home/featured2.png"
                width={52}
                height={52}
                alt="featured"
              />
              <h5 className="text-[22px] font-riosark leading-[36px]">
                Marketplace for Traders
              </h5>
              <p>Buy and sell trading tools, indicators, and strategies</p>
            </div>
            <div className="p-4 flex flex-col max-w-[100%] lg:max-w-[300px] gap-4 bg-gradient-to-b from-[#2C0B48] to-[#09030E] border-[1px] border-[#361056] rounded-[12px]">
              <Image
                src="/assets/home/featured3.png"
                width={52}
                height={52}
                alt="featured"
              />
              <h5 className="text-[22px] font-riosark leading-[36px]">
                Broker Reviews & Tools
              </h5>
              <p>Transparent reviews and comparison tools for brokers</p>
            </div>
            <div className="p-4 flex flex-col max-w-[100%] lg:max-w-[300px] gap-4 bg-gradient-to-b from-[#2C0B48] to-[#09030E] border-[1px] border-[#361056] rounded-[12px]">
              <Image
                src="/assets/home/featured4.png"
                width={52}
                height={52}
                alt="featured"
              />
              <h5 className="text-[22px] font-riosark leading-[36px]">
                Education Resources
              </h5>
              <p>Free courses, webinars, and guides for all levels</p>
            </div>
            <div className="p-4 flex flex-col max-w-[100%] lg:max-w-[300px] gap-4 bg-gradient-to-b from-[#2C0B48] to-[#09030E] border-[1px] border-[#361056] rounded-[12px]">
              <Image
                src="/assets/home/featured5.png"
                width={52}
                height={52}
                alt="featured"
              />
              <h5 className="text-[22px] font-riosark leading-[36px]">
                Market Updates & News
              </h5>
              <p>Stay informed with real-time market analysis</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrustedSection;
