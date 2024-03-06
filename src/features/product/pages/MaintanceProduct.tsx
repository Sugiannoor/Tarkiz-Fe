import { NavbarSimple, SpootlightsHome } from "@/features/user/components";
import StickyScrollProduct from "../components/StickyScrollProduct";
import { TabsProductMaintance } from "../components/TabProductMaintance";

const MaintanceProduct = () => {
  return (
    <div>
      <NavbarSimple></NavbarSimple>
      <SpootlightsHome title="Maintance" subTitle="" 
      description ="Membantu Merawat dan Memberikan Pelayanan untuk aplikasi Anda"
      />
      <StickyScrollProduct/>
      <TabsProductMaintance />
    </div>
  );
};

export default MaintanceProduct;
