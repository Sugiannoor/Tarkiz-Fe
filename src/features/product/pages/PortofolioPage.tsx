import { NavbarSimple, SpootlightsHome } from "@/features/user/components";
import { TabsPortofolio } from "../components/TabPortofolio";

export const PortofolioPage = () => {
  return (
    <div>
      <NavbarSimple></NavbarSimple>
      <SpootlightsHome
        title="Portofolio"
        subTitle="Tarkiz"
        description="Pengalaman yang banyak merupakan faktor tingkat keberhasilan sebuah project"
      />
      <TabsPortofolio />
    </div>
  );
};
