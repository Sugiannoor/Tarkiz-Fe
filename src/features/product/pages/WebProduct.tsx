import { NavbarSimple, SpootlightsHome } from "@/features/user/components";
import {TabsProductWeb } from "../components/TabProductWeb";
import StickyScrollProduct from "../components/StickyScrollProduct";

const WebProduct = () => {
  return (
    <div>
      <NavbarSimple></NavbarSimple>
      <SpootlightsHome title="Web" subTitle="Development" 
      description ="Membantu perusahaan mengoptimalkan proses keuangan melalui solusi teknologi terkini dan berkualitas tinggi berbasis Web"
      />
      <StickyScrollProduct image_path={"/web.webp"}/>
      <TabsProductWeb/>
    </div>
  );
};

export default WebProduct;
