import { useQuery } from "react-query";
import { GetProductById } from "../types/product";
import { useParams } from "react-router-dom";
import { getProductById } from "@/features/admin/api/product";
import {
  Tab,
  TabPanel,
  Tabs,
  TabsBody,
  TabsHeader,
} from "@material-tailwind/react";
import { SpootlightsHome } from "@/features/user/components";
import { GalleryProduct } from "./GalleryProduct";
import { AllPortofolio } from "./AllPortofolio";
import Loading from "@/Components/Loading";
import { Portofolio } from "../types/portofolio";
import { getPortofolioByIdProduct } from "@/features/admin/api/portofolio";

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
  const { data: portofolios, isLoading: isPortofolio } = useQuery<Portofolio[]>(
    {
      queryKey: ["portofolios", id],
      queryFn: () => getPortofolioByIdProduct(idNum),
    }
  );

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
          value="portofolio"
          className=" p-5 lg:p-0 lg:w-[80rem]"
        >
          <TabsHeader>
            <Tab
              value={"portofolio"}
              className="font-poppins text-sm lg:text-lg"
            >
              Portofolio
            </Tab>
            <Tab value={"gallery"} className="font-poppins text-sm lg:text-lg">
              Gallery
            </Tab>
          </TabsHeader>
          <TabsBody
            animate={{
              initial: { y: 250 },
              mount: { y: 0 },
              unmount: { y: 250 },
            }}
          >
            <TabPanel value={"gallery"}>
              {dataProduct?.gallery == undefined ? (
                <div>Tidak Tersedia</div>
              ) : (
                <GalleryProduct data={dataProduct?.gallery} />
              )}
            </TabPanel>
            <TabPanel value={"portofolio"}>
              {!portofolios ? (
                <div>Portofolio Tidak Ada</div>
              ) : (
                <AllPortofolio data={portofolios} isLoading={isPortofolio} />
              )}
            </TabPanel>
          </TabsBody>
        </Tabs>
      </div>
    </>
  );
};
