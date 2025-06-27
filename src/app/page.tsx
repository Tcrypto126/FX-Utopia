"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";

import HeroSection from "@/components/home/HeroSection";
import Container from "@/components/layouts/Container";
import BrandSection from "@/components/home/BrandSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <BrandSection />
    </>
  );
}
