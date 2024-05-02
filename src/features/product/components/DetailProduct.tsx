import { useQuery } from "react-query";
import { GetProductById } from "../types/product";
import {useParams } from "react-router-dom";
import { getProductById } from "@/features/admin/api/product";
import {
  Tab,
  TabPanel,
  Tabs,
  TabsBody,
  TabsHeader,
} from "@material-tailwind/react";
import { SpootlightsHome } from "@/features/user/components";
import Loading from "@/Components/Loading";
import { GalleryProduct } from "./GalleryProduct";
import { TabDetailProduct } from "./TabDetailProduct";

export const DetailProduct = () => {
  const data = [
    "https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",

    "https://images.unsplash.com/photo-1432462770865-65b70566d673?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",

    "https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80",

    "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80",

    "https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80",

    "https://images.unsplash.com/photo-1682407186023-12c70a4a35e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80",
    "https://material-taillwind-pro-ct-tailwind-team.vercel.app/img/content2.jpg",
    "https://images.unsplash.com/photo-1620064916958-605375619af8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1493&q=80",
  ];
  const detail =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex quasi quia corrupti minus sint ducimus culpa voluptatem neque praesentium doloremque, odit expedita ipsum similique dolore voluptas sed totam suscipit magnam, alias possimus iste aperiam magni hic? Aliquid officiis quae quibusdam?";

  const { id } = useParams();
  const idNum = Number(id);
  const {
    data: dataProduct,
    isLoading: isProductLoading,
    isError,
  } = useQuery<GetProductById>({
    queryKey: ["product", id],
    queryFn: () => getProductById(idNum),
  });

  if (isProductLoading || isError) {
    return <Loading />;
  }

  return (
    <>
      <SpootlightsHome
        title={dataProduct?.program}
        description={dataProduct?.description}
      />
      <div className="flex justify-center mt-5">
        <Tabs
          id="custom-animation"
          value="detail"
          className=" p-5 lg:p-0 lg:w-[80rem]"
        >
          <TabsHeader placeholder={""}>
            <Tab
              value={"detail"}
              placeholder={""}
              className="font-poppins text-sm lg:text-lg"
            >
              Detail
            </Tab>
            <Tab
              value={"portofolio"}
              placeholder={""}
              className="font-poppins text-sm lg:text-lg"
            >
              Portofolio
            </Tab>
            <Tab
              value={"gallery"}
              placeholder={""}
              className="font-poppins text-sm lg:text-lg"
            >
              Gallery
            </Tab>
          </TabsHeader>
          <TabsBody
            placeholder={""}
            animate={{
              initial: { y: 250 },
              mount: { y: 0 },
              unmount: { y: 250 },
            }}
          >
            <TabPanel value={"detail"}>
              <TabDetailProduct detail={detail} />
            </TabPanel>
            <TabPanel value={"gallery"}>
              <GalleryProduct data={data} />
            </TabPanel>
            <TabPanel value={"portofolio"}>Portofolio</TabPanel>
          </TabsBody>
        </Tabs>
      </div>
    </>
  );
};
