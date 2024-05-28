import { useState } from "react";
import { Breadcrumbs, Card } from "@material-tailwind/react";
import Search from "@/Components/Search";
import TableComplaint from "../components/Table/TableComplaint";

const ComplaintManagment = () => {
  const [search, setSearch] = useState("");
  return (
    <div>
      <div>
        <Breadcrumbs className="bg-[#005697] px-0">
          <a href="#" className="opacity-100 text-white font-poppins">
            <span>Admin</span>
          </a>
          <a
            href="/keluhan"
            className="font-poppins text-white hover:text-gray-300 transition-colors duration-300 ease-in-out"
          >
            Manajemen Keluhan
          </a>
        </Breadcrumbs>
      </div>
      <div className="text-3xl text-white font-poppins font-semibold my-10">
        Daftar Keluhan
      </div>
      <Card className="w-full h-full p-4">
        <div className="flex justify-end">
          <Search searchValue={search} setSearchValue={setSearch} />
        </div>
        <TableComplaint searchValue={search} setSearchValue={setSearch} />
      </Card>
    </div>
  );
};

export default ComplaintManagment;
