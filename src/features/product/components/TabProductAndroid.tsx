import {
    Tabs,
    TabsHeader,
    TabsBody,
    Tab,
    TabPanel,
  } from "@material-tailwind/react";
  import { AllProduct } from "./AllProduct";
import { getAllAndroid, getFinanceAndroid, getMarketingAndroid, getOperationAndroid, getSdmAndroid } from "../api/android";
import { GetProduct } from "../types/product";
import { useQuery } from "react-query";

 
  
  export const TabsProductAndroid = () => {
    const { data: allAndroid , isLoading: isAllLoading } = useQuery<GetProduct>({
      queryKey: ["productAllAndroid"],
      queryFn: getAllAndroid,
    });
    const { data: financeAndroid , isLoading: isFinanceLoading } = useQuery<GetProduct>({
      queryKey: ["productFinanceAndroid"],
      queryFn: getFinanceAndroid,
    });
    const { data: operationAndroid , isLoading: isOperationLoading } = useQuery<GetProduct>({
      queryKey: ["productOpAndroid"],
      queryFn: getOperationAndroid,
    });
    const { data: sdmAndroid , isLoading: isSdmLoading } = useQuery<GetProduct>({
      queryKey: ["productSdmAndroid"],
      queryFn: getSdmAndroid,
    });
    const { data: marketingAndroid , isLoading: isMarketingLoading } = useQuery<GetProduct>({
      queryKey: ["productSdmAndroi"],
      queryFn: getMarketingAndroid,
    });

    const dataAnroid = [
      {
        label: "All",
        value: "all",
        desc: <AllProduct dataProduct={allAndroid} isLoading={isAllLoading}/>,
      },
      {
        label: "Keuangan",
        value: "finance",
        desc: <AllProduct dataProduct={financeAndroid} isLoading={isFinanceLoading}/>
      },
      {
        label: "Operasional",
        value: "operation",
        desc: <AllProduct dataProduct={operationAndroid} isLoading={isOperationLoading}/>
      },
      {
        label: "SDM",
        value: "human_managment",
        desc: <AllProduct dataProduct={sdmAndroid} isLoading ={isSdmLoading}/>
      },
      {
        label: "Pemasaran",
        value: "marketing",
        desc: <AllProduct dataProduct={marketingAndroid} isLoading={isMarketingLoading}/>
      },
    ];
  
    return (
      <div className="flex justify-center mt-5">
        <Tabs id="custom-animation" value="all" className=" p-5 lg:p-0 lg:w-[80rem]">
          <TabsHeader placeholder={""}>
            {dataAnroid.map(({ label, value }) => (
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
            {dataAnroid.map(({ value, desc }) => (
              <TabPanel key={value} value={value}>
                {desc}
              </TabPanel>
            ))}
          </TabsBody>
        </Tabs>
      </div>
    );
  };
  