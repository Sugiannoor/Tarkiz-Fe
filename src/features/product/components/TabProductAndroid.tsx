import {
    Tabs,
    TabsHeader,
    TabsBody,
    Tab,
    TabPanel,
  } from "@material-tailwind/react";
  import { AllProduct } from "./AllProduct";
  
  export const TabsProductAndroid = () => {
    const data = [
      {
        label: "All",
        value: "all",
        desc: <AllProduct/>,
      },
      {
        label: "Keuangan",
        value: "finance",
        desc: <AllProduct/>
      },
      {
        label: "Operasional",
        value: "operation",
        desc: <AllProduct/>
      },
      {
        label: "SDM",
        value: "human_managment",
        desc: <AllProduct/>
      },
      {
        label: "Pemasaran",
        value: "marketing",
        desc: <AllProduct/>
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
  