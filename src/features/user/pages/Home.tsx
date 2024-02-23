import React from "react"
import { NavbarSimple } from "../components/NavbarSimple"
import { CarouselHome } from "../components/CarouselHome"
import ProductList from "../components/ProductList";
import Benefit from "../components/Benefit";



export const Home: React.FC = () => {
    return (
        <>
        <NavbarSimple>
        <CarouselHome/>
        <Benefit/>
        <ProductList/>
        </NavbarSimple>
      </>
  );
}