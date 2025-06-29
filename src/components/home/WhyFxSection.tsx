"use client";

import Container from "../layouts/Container";
import Image from "next/image";
import { CartIcon, LampIcon, CircleCheckIcon, EarthIcon } from "../ui/icon";

const WHYFX = [
  {
    icon: <CartIcon width="40" height="40" />,
    title: "Trading-Focused Marketplace",
    text: "A curated platform for quality tools, indicators, and services for serious traders",
  },
  {
    icon: <LampIcon width="40" height="40" />,
    title: "Education That Empowers",
    text: "Free, accessible learning recources created by expirenced traders to help you succeed",
  },
  {
    icon: <CircleCheckIcon width="40" height="40" />,
    title: "Honest Reviews & Insights",
    text: "Transparent broker reviews and market analysis you can actually trust",
  },
  {
    icon: <EarthIcon width="40" height="40" />,
    title: "Global Trading Community",
    text: "Connect with traders worldwide to share strategies, insights, and opportunities",
  },
];

const WhyFxSection = () => {
  return (
    <Container className="py-8 md:py-20 bg-[#000]">
      <h1>
        Why <span className="!text-[#02B3AB]">FX Utopia</span> ?
      </h1>
      <p className="mt-3 md:mt-6 text-center">
        The ultimate ecosystem designed by traders, for traders.
      </p>
      <div className="mt-[32px] lg:mt-[100px] w-full flex flex-col lg:flex-row gap-4 justify-center">
        {WHYFX.map((item) => (
          <div
            key={item.title}
            className="feature-card overflow-hidden flex justify-center items-center relative z-0 w-full lg:max-w-[298px] p-0.5 rounded-[12px]"
          >
            <div
              key={item.title}
              className="relative z-1 p-4 flex flex-col w-full h-full gap-4 bg-gradient-to-b from-[#2C0B48] to-[#09030E] border-[1px] border-[#361056] hover:border-[#00F2FF] rounded-[12px] transition-all duration-300"
            >
              {item.icon}
              <h5 className="text-[22px] font-riosark leading-[36px]">
                {item.title}
              </h5>
              <p>{item.text}</p>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default WhyFxSection;
