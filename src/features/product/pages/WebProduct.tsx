import { NavbarSimple, SpootlightsHome } from "@/features/user/components";
import { TabsProduct } from "../components/TabProduct";
import StickyScrollProduct from "../components/StickyScrollProduct";

const WebProduct = () => {
  return (
    <div>
      <NavbarSimple></NavbarSimple>
      <SpootlightsHome title="Web" subTitle="Development" 
      description ="Membantu perusahaan mengoptimalkan proses keuangan melalui solusi teknologi terkini dan berkualitas tinggi berbasis Web"
      />
      <StickyScrollProduct/>
      <TabsProduct/>
    </div>
  );
};

export default WebProduct;
