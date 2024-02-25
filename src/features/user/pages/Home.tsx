import React from "react"
import { NavbarSimple } from "../components/NavbarSimple"
import { CarouselHome } from "../components/CarouselHome"
import ProductList from "../components/ProductList";
import Benefit from "../components/Benefit";
import Bubble from "../components/Bubble";
import { Footer } from "../components/Footer";
import { SpootlightsHome } from "../components/SpootlightsHome";



export const Home: React.FC = () => {
    return (
        <>
        <NavbarSimple>
        <CarouselHome/>
        <Benefit/>
        <ProductList/>
        </NavbarSimple>
        <SpootlightsHome/>
        <Footer/>
        <Bubble/>
      </>
  );
}