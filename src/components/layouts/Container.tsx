"use client"

import React from "react";

const InnerContainer = ({ children }: { children: React.ReactNode }) => (
  <div className="max-w-[1440px] m-auto">{children}</div>
);

const Container = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-full px-3">
      <InnerContainer>{children}</InnerContainer>
    </div>
  );
};

export default Container;
