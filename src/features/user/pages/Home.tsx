import React from "react";

import { BestProduct } from "@/features/product/pages";
import { CarouselHome, Footer, NavbarSimple } from "../components";
import ProductList from "../components/ProductList";
import Client from "../components/Client";
import Bubble from "../components/Bubble";
export const Home: React.FC = () => {
  return (
    <>
      <NavbarSimple fixed>
        <CarouselHome />
        <ProductList />
        <BestProduct />
        <Client />
      </NavbarSimple>
      <Footer />
      <Bubble />
    </>
  );
};
