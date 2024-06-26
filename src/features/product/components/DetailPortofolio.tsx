import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import {
  Tab,
  TabPanel,
  Tabs,
  TabsBody,
  TabsHeader,
} from "@material-tailwind/react";
import { NavbarSimple, SpootlightsHome } from "@/features/user/components";
import { GalleryProduct } from "./GalleryProduct";
import Loading from "@/Components/Loading";
import { getPortofolioById } from "@/features/admin/api/portofolio";
import { PortofolioUpdate } from "@/features/admin/types/portofolioTable";

export const DetailPortofolio = () => {
  const { id } = useParams();
  const idNum = Number(id);
  const {
    data: dataPortofolio,
    isLoading: isPortofolioLoading,
    isError,
  } = useQuery<PortofolioUpdate>({
    queryKey: ["Portofolio", id],
    queryFn: () => getPortofolioById(idNum),
  });

  if (isPortofolioLoading || isError) {
    return <Loading />;
  }

  return (
    <>
      <NavbarSimple />
      <SpootlightsHome
        title={dataPortofolio?.program}
        description={dataPortofolio?.description}
      />
      <div className="flex justify-center mt-5">
        <Tabs
          id="custom-animation"
          value="gallery"
          className=" p-5 lg:p-0 lg:w-[80rem]"
        >
          <TabsHeader>
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
              {dataPortofolio?.gallery == undefined ? (
                <div>Tidak Tersedia</div>
              ) : (
                <GalleryProduct data={dataPortofolio?.gallery} />
              )}
            </TabPanel>
          </TabsBody>
        </Tabs>
      </div>
    </>
  );
};
