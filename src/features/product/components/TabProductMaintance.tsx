import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import { AllProduct } from "./AllProduct";
import { GetProduct } from "../types/product";
import { useQuery } from "react-query";
import {
  getAllMaintance,
  getFinanceMaintance,
  getMarketingMaintance,
  getOperationMaintance,
  getSdmMaintance,
} from "../api/maintance";

export const TabsProductMaintance = () => {
  const { data: allMaintance, isLoading: isAllLoading } = useQuery<GetProduct>({
    queryKey: ["productAllMaintance"],
    queryFn: getAllMaintance,
  });
  const { data: financeMaintance, isLoading: isFinanceLoading } =
    useQuery<GetProduct>({
      queryKey: ["productFinanceMaintance"],
      queryFn: getFinanceMaintance,
    });
  const { data: operationMaintance, isLoading: isOperationLoading } =
    useQuery<GetProduct>({
      queryKey: ["productOpMaintance"],
      queryFn: getOperationMaintance,
    });
  const { data: sdmMaintance, isLoading: isSdmLoading } = useQuery<GetProduct>({
    queryKey: ["productSdmMaintance"],
    queryFn: getSdmMaintance,
  });
  const { data: marketingMaintance, isLoading: isMarketingLoading } =
    useQuery<GetProduct>({
      queryKey: ["productSdmAndroi"],
      queryFn: getMarketingMaintance,
    });
  const data = [
    {
      label: "All",
      value: "all",
      desc: <AllProduct dataProduct={allMaintance} isLoading={isAllLoading} />,
    },
    {
      label: "Keuangan",
      value: "finance",
      desc: (
        <AllProduct
          dataProduct={financeMaintance}
          isLoading={isFinanceLoading}
        />
      ),
    },
    {
      label: "Operasional",
      value: "operation",
      desc: (
        <AllProduct
          dataProduct={operationMaintance}
          isLoading={isOperationLoading}
        />
      ),
    },
    {
      label: "SDM",
      value: "human_managment",
      desc: <AllProduct dataProduct={sdmMaintance} isLoading={isSdmLoading} />,
    },
    {
      label: "Pemasaran",
      value: "marketing",
      desc: (
        <AllProduct
          dataProduct={marketingMaintance}
          isLoading={isMarketingLoading}
        />
      ),
    },
  ];

  return (
    <div className="flex justify-center mt-5">
      <Tabs
        id="custom-animation"
        value="all"
        className=" p-5 lg:p-0 lg:w-[80rem]"
      >
        <TabsHeader>
          {data.map(({ label, value }) => (
            <Tab
              key={value}
              value={value}
              className="font-poppins text-sm lg:text-lg"
            >
              {label}
            </Tab>
          ))}
        </TabsHeader>
        <TabsBody
          animate={{
            initial: { y: 250 },
            mount: { y: 0 },
            unmount: { y: 250 },
          }}
        >
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
