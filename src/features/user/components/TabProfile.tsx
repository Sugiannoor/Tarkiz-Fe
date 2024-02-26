import {
  Tab,
  TabPanel,
  Tabs,
  TabsBody,
  TabsHeader,
} from "@material-tailwind/react";
import { FaCircleUser } from "react-icons/fa6";
import { FaClock } from "react-icons/fa";
import { IoIosSettings } from "react-icons/io";
import { useEffect, useState } from "react";

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
    
        // Membersihkan event listener setelah komponen di-unmount
        return () => {
          window.removeEventListener('resize', handleResize);
        };
      }, []);
  return (
    <div className="mt-5">
      <Tabs value="my_account" orientation={isMobile ? "" : "vertical"}>
        <TabsHeader className="lg:w-96 w-[100%] ">
          {datas.map(({ label, value }) => (
            <Tab key={value} value={value} className="p-4">
              <div className="text-left">{label}</div>
            </Tab>
          ))}
        </TabsHeader>
        <TabsBody className="mt-5 lg:mt-0">
          <TabPanel key={"my_account"} value={"my_account"} className="py-0">
            <div>TestCuy</div>
          </TabPanel>
          <TabPanel key={"history"} value={"history"} className="py-0">
            Test 1
          </TabPanel>
          <TabPanel key={"account"} value={"account"} className="py-0">
            Test 123
          </TabPanel>
        </TabsBody>
      </Tabs>
    </div>
  );
};

export default TabProfile;
