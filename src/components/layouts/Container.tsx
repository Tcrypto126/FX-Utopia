"use client";

import React from "react";

const InnerContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <div className={`max-w-[1440px] m-auto ${className || ""}`}>{children}</div>
);

const Container = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={`w-full px-3 ${className || ""}`}>
      <InnerContainer>{children}</InnerContainer>
    </div>
  );
};

export default Container;
