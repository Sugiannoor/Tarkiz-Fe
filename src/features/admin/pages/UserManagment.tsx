import { useState } from "react";
import { CreateUserModal } from "../components/Modal/CreateUserModal";
import TableUser from "../components/Table/TableUser";
import { Breadcrumbs, Button, Card } from "@material-tailwind/react";
import Search from "@/Components/Search";
import { BiPlusCircle } from "react-icons/bi";

const UserManagment = () => {
  const [isCreateUser, setIsCreateUser] = useState(false);
  const [search, setSearch] = useState<string>("");
  const handleCreateUser = () => setIsCreateUser(!isCreateUser);
  return (
    <div>
      <div>
        <Breadcrumbs className="bg-[#005697] px-0">
          <a href="#" className="opacity-100 text-white font-poppins">
            <span>Admin</span>
          </a>
          <a
            href="/user"
            className="font-poppins text-white hover:text-gray-300 transition-colors duration-300 ease-in-out"
          >
            Manajemen User
          </a>
        </Breadcrumbs>
      </div>
      <div className="text-3xl text-white font-poppins font-semibold my-10">
        Daftar Pengguna
      </div>
      <Card className="w-full h-full p-4">
        <div className="flex justify-between">
          <Button
            variant="filled"
            color="blue"
            className="flex gap-2"
            onClick={() => handleCreateUser()}
          >
            <BiPlusCircle size={15} />
            Tambah Pengguna
          </Button>
          <Search searchValue={search} setSearchValue={setSearch} />
        </div>
        <TableUser searchValue={search} setSearchValue={setSearch} />
      </Card>
      <CreateUserModal open={isCreateUser} handleOpen={handleCreateUser} />
    </div>
  );
};

export default UserManagment;
