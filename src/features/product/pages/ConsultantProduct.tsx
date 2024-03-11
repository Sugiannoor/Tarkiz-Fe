import { NavbarSimple, SpootlightsHome } from "@/features/user/components";
import StickyScrollProduct from "../components/StickyScrollProduct";
import { TabsProductConsultant } from "../components/TabProductConsultant";

const ConsultantProduct = () => {
  return (
    <div>
      <NavbarSimple></NavbarSimple>
      <SpootlightsHome title="IT" subTitle="Consultant" 
      description ="Membantu Konsultasi IT dengan Pelayanan informasi keuangan yang baik"
      />
      <StickyScrollProduct image_path={"/it_consultant.webp"}/>
      <TabsProductConsultant/>
    </div>
  );
};

export default ConsultantProduct;
