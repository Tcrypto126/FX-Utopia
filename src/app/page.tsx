"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";

import HeroSection from "@/components/home/HeroSection";
import Container from "@/components/layouts/Container";
import BrandSection from "@/components/home/BrandSection";
import TrustedSection from "@/components/home/TrustedSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <BrandSection />
      <TrustedSection />
    </>
  );
}
