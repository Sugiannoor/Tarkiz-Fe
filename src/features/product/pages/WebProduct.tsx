import { NavbarSimple, SpootlightsHome } from "@/features/user/components";
import { TabsProductWeb } from "../components/TabProductWeb";
import StickyScrollProduct from "../components/StickyScrollProduct";
import React from "react";

export const WebProduct: React.FC = () => {
  return (
    <div>
      <NavbarSimple></NavbarSimple>
      <SpootlightsHome
        title="Web"
        subTitle="Development"
        description="Membantu perusahaan mengoptimalkan proses keuangan melalui solusi teknologi terkini dan berkualitas tinggi berbasis Web"
      />
      <StickyScrollProduct image_path={"/web.webp"} />
      <TabsProductWeb />
    </div>
  );
};
