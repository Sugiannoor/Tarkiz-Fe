import { NavbarSimple, SpootlightsHome } from "@/features/user/components";
import StickyScrollProduct from "../components/StickyScrollProduct";
import { TabsProductAndroid } from "../components/TabProductAndroid";

const AndroidProduct = () => {
  return (
    <div>
      <NavbarSimple></NavbarSimple>
      <SpootlightsHome title="Android" subTitle="Development" 
      description ="Membantu perusahaan mengoptimalkan proses keuangan melalui solusi teknologi terkini dan berkualitas tinggi berbasis Mobile"
      />
      <StickyScrollProduct image_path={"/android.webp"} />
      <TabsProductAndroid/>
    </div>
  );
};

export default AndroidProduct;
