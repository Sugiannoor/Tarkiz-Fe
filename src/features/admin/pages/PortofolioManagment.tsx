import { useState } from "react";
import { Breadcrumbs, Button, Card } from "@material-tailwind/react";
import Search from "@/Components/Search";
import { BiPlusCircle } from "react-icons/bi";
import TablePortofolio from "../components/Table/TablePortofolio";
import { CreatePortofolioModal } from "../components/Modal/CreatePortofolio";

const PortofoliotManagment = () => {
  const [isCreatePortofolio, setIsCreatePortofolio] = useState(false);
  const [search, setSearch] = useState("");
  const handleCreatePortofolio = () =>
    setIsCreatePortofolio(!isCreatePortofolio);

  return (
    <div>
      <div>
        <Breadcrumbs placeholder={""} className="bg-[#005697] px-0">
          <a href="#" className="opacity-100 text-white font-poppins">
            <span>Admin</span>
          </a>
          <a
            href="/kontrak"
            className="font-poppins text-white hover:text-gray-300 transition-colors duration-300 ease-in-out"
          >
            Manajemen Portofolio
          </a>
        </Breadcrumbs>
      </div>
      <div className="text-3xl text-white font-poppins font-semibold my-10">
        Daftar Portofolio
      </div>
      <Card placeholder={""} className="w-full h-full p-4">
        <div className="flex justify-between">
          <Button
            placeholder={""}
            variant="filled"
            color="blue"
            className="flex gap-2"
            onClick={() => handleCreatePortofolio()}
          >
            <BiPlusCircle size={15} />
            Tambah Portofolio
          </Button>
          <Search searchValue={search} setSearchValue={setSearch} />
        </div>
        <TablePortofolio searchValue={search} setSearchValue={setSearch} />
      </Card>
      <CreatePortofolioModal
        open={isCreatePortofolio}
        handleOpen={handleCreatePortofolio}
      />
    </div>
  );
};

export default PortofoliotManagment;
