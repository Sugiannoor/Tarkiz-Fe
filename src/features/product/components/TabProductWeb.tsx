import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import { AllProduct } from "./AllProduct";
import { getAllWeb, getFinanceWeb, getMarketingWeb, getOperationWeb, getSdmWeb } from "../api/web";
import { useQuery } from "react-query";
import { GetProduct } from "../types/product";

export const TabsProductWeb = () => {
  
  const { data: financeWeb , isLoading: isFinanceLoading } = useQuery<GetProduct>({
    queryKey: ["productFinance"],
    queryFn: getFinanceWeb,
  });
  const { data: allWeb , isLoading: isAllLoading } = useQuery<GetProduct>({
    queryKey: ["productAll"],
    queryFn: getAllWeb,
  });
  const { data: operationWeb , isLoading: isOperationLoading } = useQuery<GetProduct>({
    queryKey: ["productOp"],
    queryFn: getOperationWeb,
  });
  const { data: sdmWeb , isLoading: isSdmLoading } = useQuery<GetProduct>({
    queryKey: ["productSdm"],
    queryFn: getSdmWeb,
  });
  const { data: marketingWeb , isLoading: isMarketingLoading } = useQuery({
    queryKey: ["product"],
    queryFn: getMarketingWeb,
  });
  const data = [
    {
      label: "All",
      value: "all",
      desc: <AllProduct dataProduct={allWeb} isLoading={isAllLoading} />,
    },
    {
      label: "Keuangan",
      value: "finance",
      desc: <AllProduct dataProduct={financeWeb} isLoading={isFinanceLoading}/>
    },
    {
      label: "Operasional",
      value: "operation",
      desc: <AllProduct dataProduct={operationWeb} isLoading={isOperationLoading}/>
    },
    {
      label: "SDM",
      value: "human_managment",
      desc: <AllProduct dataProduct={sdmWeb} isLoading={isSdmLoading}/>
    },
    {
      label: "Pemasaran",
      value: "marketing",
      desc: <AllProduct dataProduct={marketingWeb} isLoading={isMarketingLoading}/>
    },
  ];

  return (
    <div className="flex justify-center mt-5">
      <Tabs id="custom-animation" value="all" className=" p-5 lg:p-0 lg:w-[80rem]">
        <TabsHeader placeholder={""}>
          {data.map(({ label, value }) => (
            <Tab placeholder={""} key={value} value={value} className="font-poppins">
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
