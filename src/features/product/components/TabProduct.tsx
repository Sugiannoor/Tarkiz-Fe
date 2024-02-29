import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";

export const TabsProduct = () => {
  const data = [
    {
      label: "All",
      value: "all",
      desc: `It really matters and then like it really doesn't matter.
        What matters is the people who are sparked by it. And the people 
        who are like offended by it, it doesn't matter.`,
    },
    {
      label: "Keuangan",
      value: "finance",
      desc: `Because it's about motivating the doers. Because I'm here
        to follow my dreams and inspire other people to follow their dreams, too.`,
    },
    {
      label: "Operasional",
      value: "operation",
      desc: `We're not always in the position that we want to be at.
        We're constantly growing. We're constantly making mistakes. We're
        constantly trying to express ourselves and actualize our dreams.`,
    },
    {
      label: "SDM",
      value: "human_managment",
      desc: `Because it's about motivating the doers. Because I'm here
        to follow my dreams and inspire other people to follow their dreams, too.`,
    },
    {
      label: "Pemasaran",
      value: "marketing",
      desc: `We're not always in the position that we want to be at.
        We're constantly growing. We're constantly making mistakes. We're
        constantly trying to express ourselves and actualize our dreams.`,
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
