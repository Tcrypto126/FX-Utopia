"use client0";

import Container from "../layouts/Container";
import { Button } from "../ui/button";

const SignalSection = () => {
  return (
    <Container className="py-8 md:py-20">
      <div className="flex flex-col gap-8 md:gap-20">
        <div className="flex justify-between gap-2">
          <div>
            <h1 className="uppercase !text-start">Trading Signals</h1>
            <p className="mt-6">
              Latest trading opportunities from our verified signal providers
            </p>
          </div>
          <Button
            variant="outline"
            className="animation-button !border-[#604683] !h-[58px] !w-[220px] rounded-[8px] font-bold"
          >
            View All SIgnals
          </Button>
        </div>
        <div className="flex justify-between gap-2 border">
            <div className="">
                sdf
            </div>
            <div>
                sdf
            </div>
            <div>
                sdf
            </div>
        </div>
      </div>
    </Container>
  );
};

export default SignalSection;
