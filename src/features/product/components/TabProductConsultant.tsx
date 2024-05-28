import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import { AllProduct } from "./AllProduct";
import {
  getAllConsultant,
  getFinanceConsultant,
  getMarketingConsultant,
  getOperationConsultant,
  getSdmConsultant,
} from "../api/consultant";
import { GetProduct } from "../types/product";
import { useQuery } from "react-query";

export const TabsProductConsultant = () => {
  const { data: allConsultant, isLoading: isAllLoading } = useQuery<GetProduct>(
    {
      queryKey: ["productAllConsultant"],
      queryFn: getAllConsultant,
    }
  );
  const { data: financeConsultant, isLoading: isFinanceLoading } =
    useQuery<GetProduct>({
      queryKey: ["productFinanceConsultant"],
      queryFn: getFinanceConsultant,
    });
  const { data: operationConsultant, isLoading: isOperationLoading } =
    useQuery<GetProduct>({
      queryKey: ["productOpConsultant"],
      queryFn: getOperationConsultant,
    });
  const { data: sdmConsultant, isLoading: isSdmLoading } = useQuery<GetProduct>(
    {
      queryKey: ["productSdmConsultant"],
      queryFn: getSdmConsultant,
    }
  );
  const { data: marketingConsultant, isLoading: isMarketingLoading } =
    useQuery<GetProduct>({
      queryKey: ["productSdmAndroi"],
      queryFn: getMarketingConsultant,
    });
  const data = [
    {
      label: "All",
      value: "all",
      desc: <AllProduct dataProduct={allConsultant} isLoading={isAllLoading} />,
    },
    {
      label: "Keuangan",
      value: "finance",
      desc: (
        <AllProduct
          dataProduct={financeConsultant}
          isLoading={isFinanceLoading}
        />
      ),
    },
    {
      label: "Operasional",
      value: "operation",
      desc: (
        <AllProduct
          dataProduct={operationConsultant}
          isLoading={isOperationLoading}
        />
      ),
    },
    {
      label: "SDM",
      value: "human_managment",
      desc: <AllProduct dataProduct={sdmConsultant} isLoading={isSdmLoading} />,
    },
    {
      label: "Pemasaran",
      value: "marketing",
      desc: (
        <AllProduct
          dataProduct={marketingConsultant}
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
