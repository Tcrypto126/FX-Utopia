"use client";

import React from "react";
import ReactDOM from "react-dom/client";
import EmblaCarousel from "./EmblaCarousel";
import { EmblaOptionsType } from "embla-carousel";
import "./css/embla.css";

import Container from "../layouts/Container";

const OPTIONS: EmblaOptionsType = { loop: true };
const SLIDE_COUNT = 5;
const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

const BrandSection = () => {
  return (
    <Container>
      <EmblaCarousel slides={SLIDES} options={OPTIONS} />
    </Container>
  );
};

export default BrandSection;
