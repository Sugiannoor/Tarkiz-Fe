import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import { useQuery } from "react-query";
import { Portofolio } from "../types/portofolio";
import { AllPortofolio } from "./AllPortofolio";
import { getAllPorto, getPortoAndroid, getPortoMaintance, getPortoWeb } from "../api/portofolio";

export const TabsPortofolio = () => {
  
  const { data: all  , isLoading: allLoading } = useQuery<Portofolio[]>({
    queryKey: ["portofolio"],
    queryFn: getAllPorto,
  });
  const { data: website  , isLoading: websiteLoading } = useQuery<Portofolio[]>({
    queryKey: ["portofolio"],
    queryFn: getPortoWeb,
  });
  const { data: android  , isLoading: androidLoading } = useQuery<Portofolio[]>({
    queryKey: ["portofolio"],
    queryFn: getPortoAndroid,
  });
  const { data: maintance  , isLoading: maintanceLoading } = useQuery<Portofolio[]>({
    queryKey: ["portofolio"],
    queryFn: getPortoMaintance,
  });
  const { data: it  , isLoading: itLoading } = useQuery<Portofolio[]>({
    queryKey: ["portofolio"],
    queryFn: getPortoMaintance,
  });
  const data = [
    {
      label: "All",
      value: "all",
      desc: <AllPortofolio data={all} isLoading={allLoading} />,
    },
    {
      label: "Website",
      value: "website",
      desc: <AllPortofolio data={website} isLoading={websiteLoading}/>
    },
    {
      label: "Android",
      value: "android",
      desc: <AllPortofolio data={android} isLoading={androidLoading}/>
    },
    {
      label: "IT Consultant",
      value: "IT",
      desc: <AllPortofolio data={it} isLoading={itLoading}/>
    },
    {
      label: "Maintance",
      value: "maintance",
      desc: <AllPortofolio data={maintance} isLoading={maintanceLoading}/>
    },
  ];

  return (
    <div className="flex justify-center mt-5">
      <Tabs id="custom-animation" value="all" className=" p-5 lg:p-0 lg:w-[80rem]">
        <TabsHeader placeholder={""}>
          {data.map(({ label, value }) => (
            <Tab placeholder={""} key={value} value={value} className="font-poppins text-sm lg:text-lg">
              {label}
            </Tab>
          ))}
        </TabsHeader>
        <TabsBody placeholder={""}
         animate={{
            initial: { y: 250 },
            mount: { y: 0 },
            unmount: { y: 250 },
          }}>
          {data.map(({ value, desc }) => (
            <TabPanel key={value} value={value}>
              {desc}
            </TabPanel>
          ))}
        </TabsBody>
      </Tabs>
    </div>
  );
};