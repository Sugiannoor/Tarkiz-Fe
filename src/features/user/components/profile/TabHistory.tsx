import {
  Card,
  CardHeader,
  Typography,
  CardBody,
} from "@material-tailwind/react";
import Search from "@/Components/Search";
import { useState } from "react";
import TableComplaintUser from "./tableComplaintUser";
   
export const TabHistory = () => {
  const [searchValue, setSearchValue] = useState ("");
  return (
    <Card placeholder={""} className="h-full w-full">
      <CardHeader placeholder={""} floated={false} shadow={false} className="rounded-none">
        <div className="mb-8 flex items-center justify-between gap-8">
          <div>
            <Typography placeholder={""} variant="h5" className="font-semibold text-2xl font-poppins text-[#005697]">
              Riwayat Pengaduan
            </Typography>
            <Typography placeholder={""} color="gray" className="mt-1 font-normal font-poppins">
            Berikut adalah status pengaduan yang telah anda ajukan
            </Typography>
          </div>
        </div>
        <div className="flex flex-col items-center justify-end gap-4 md:flex-row">
          <div className="w-full md:w-72">
           <Search searchValue={searchValue} setSearchValue={setSearchValue} />
          </div>
        </div>
      </CardHeader>
      <CardBody placeholder={""} className="overflow-scroll px-0">
       <TableComplaintUser searchValue={searchValue} setSearchValue={setSearchValue} />
      </CardBody>
    </Card>
  );
}