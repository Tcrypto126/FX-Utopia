"use client";

import * as React from "react";
import { Button as CustomButton } from "../ui/button";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva("", {
  variants: {
    variant: {
      default:
        "bg-primary text-primary-foreground shadow-xs hover:bg-primary/90",
      login: "",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});
export const Button = ({
  className,
  variant,
  asChild = false,
  children,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & { asChild?: boolean }) => {
  return (
    <CustomButton className={cn(buttonVariants({ variant, className }))}>
      {children}
    </CustomButton>
  );
};
