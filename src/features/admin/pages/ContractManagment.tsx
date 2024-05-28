import { useState } from "react";
import { Breadcrumbs, Button, Card } from "@material-tailwind/react";
import Search from "@/Components/Search";
import { BiPlusCircle } from "react-icons/bi";
import TableContract from "../components/Table/TableContract";
import { CreateContractModal } from "../components/Modal/CreateContract";

const ContractManagment = () => {
  const [isCreateContracrt, setIsCreateContract] = useState(false);
  const [search, setSearch] = useState("");
  const handleCreateContract = () => setIsCreateContract(!isCreateContracrt);

  return (
    <div>
      <div>
        <Breadcrumbs className="bg-[#005697] px-0">
          <a href="#" className="opacity-100 text-white font-poppins">
            <span>Admin</span>
          </a>
          <a
            href="/kontrak"
            className="font-poppins text-white hover:text-gray-300 transition-colors duration-300 ease-in-out"
          >
            Manajemen Kontrak
          </a>
        </Breadcrumbs>
      </div>
      <div className="text-3xl text-white font-poppins font-semibold my-10">
        Daftar Kontrak
      </div>
      <Card className="w-full h-full p-4">
        <div className="flex justify-between">
          <Button
            variant="filled"
            color="blue"
            className="flex gap-2"
            onClick={() => handleCreateContract()}
          >
            <BiPlusCircle size={15} />
            Tambah Kontrak
          </Button>
          <Search searchValue={search} setSearchValue={setSearch} />
        </div>
        <TableContract searchValue={search} setSearchValue={setSearch} />
      </Card>
      <CreateContractModal
        open={isCreateContracrt}
        handleOpen={handleCreateContract}
      />
    </div>
  );
};

export default ContractManagment;
