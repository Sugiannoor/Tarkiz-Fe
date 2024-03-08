import {
  Tab,
  TabPanel,
  Tabs,
  TabsBody,
  TabsHeader,
} from "@material-tailwind/react";
import { useEffect, useState } from "react";
import TabDetailProfile from "./TabDetailProfile";
import { TabHistory } from "./TabHistory";
import TabEditProfile from "./TabEditProfile";
import TabContract from "./TabContract";

const datas = [
  {
    label: "Akun Saya",
    value: "my_account",
  },
  {
    label: "Riwayat Pengaduan",
    value: "history",
  },
  {
    label: "Kontrak Saya",
    value: "contract",
  },
  {
    label: "Pengaturan Akun",
    value: "account",
  },
];

const TabProfile = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
    useEffect(() => {
        const handleResize = () => {
          setIsMobile(window.innerWidth < 768);
        };
    
        window.addEventListener('resize', handleResize);
        return () => {
          window.removeEventListener('resize', handleResize);
        };
      }, []);
  return (
    <div className="mt-5">
      <Tabs value="my_account" orientation={isMobile ? "horizontal" : "vertical"}>
        <TabsHeader placeholder={""} className="md:w-96 w-[100%] mr-16 ">
          {datas.map(({ label, value }) => (
            <Tab placeholder={""} key={value} value={value} className="p-4">
              <div className="font-poppins">{label}</div>
            </Tab>
          ))}
        </TabsHeader>
        <TabsBody placeholder={""} className="mt-5 lg:mt-0 border-l-2 md:pl-7">
          <TabPanel key={"my_account"} value={"my_account"} className="py-0">
            <TabDetailProfile/>
          </TabPanel>
          <TabPanel key={"history"} value={"history"} className="py-0">
            <TabHistory/>
          </TabPanel>
          <TabPanel key={"contract"} value={"contract"} className="py-0">
            <TabContract/>
          </TabPanel>
          <TabPanel key={"account"} value={"account"} className="py-0">
            <TabEditProfile/>
          </TabPanel>
        </TabsBody>
      </Tabs>
    </div>
  );
};

export default TabProfile;
