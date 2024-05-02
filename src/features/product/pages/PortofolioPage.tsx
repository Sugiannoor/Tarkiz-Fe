import { NavbarSimple, SpootlightsHome } from "@/features/user/components";
import {TabsProductWeb } from "../components/TabProductWeb";

const PortofolioPage = () => {
  return (
    <div>
      <NavbarSimple></NavbarSimple>
      <SpootlightsHome title="Portofolio" subTitle="Tarkiz" 
      description ="Pengalaman yang banyak merupakan faktor tingkat keberhasilan sebuah project"
      />
      <TabsProductWeb/>
    </div>
  );
};

export default PortofolioPage;
