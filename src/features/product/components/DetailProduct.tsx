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

  // if (isProductLoading || isError) {
  //   return <Loading />;
  // }

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
            {dataProduct?.description == undefined ? (
                <div>Tidak Tersedia</div>
              ): (
              <GalleryProduct data={dataProduct?.gallery} />
              )}
            </TabPanel>
            <TabPanel value={"gallery"}>
              {dataProduct?.gallery == undefined ? (
                <div>Tidak Tersedia</div>
              ): (
              <GalleryProduct data={dataProduct?.gallery} />
              )}
            </TabPanel>
            <TabPanel value={"portofolio"}>Portofolio</TabPanel>
          </TabsBody>
        </Tabs>
      </div>
    </>
  );
};
