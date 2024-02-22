import React from "react"
import { NavbarSimple } from "../components/NavbarSimple"
import { CarouselHome } from "../components/CarouselHome"


export const Home: React.FC = () => {
    
    return (
        <>
        <NavbarSimple>
        <CarouselHome/>
        </NavbarSimple>
        </>
    )
}