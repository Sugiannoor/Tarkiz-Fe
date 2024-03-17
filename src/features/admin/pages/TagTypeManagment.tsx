import {
  Breadcrumbs,
  Button,
  Card,
  CardBody,
  Input,
  Typography,
} from "@material-tailwind/react";
import { useState } from "react";
import { createTag, createType, getTag, getType } from "../api/product";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { FaTrashAlt } from "react-icons/fa";
import { RiEditBoxLine } from "react-icons/ri";
import toast from "react-hot-toast";

// Modal
import { DeleteTypeModal } from "../components/Modal/DeleteType";
import { EditTypeModal } from "../components/Modal/EditTypeModal";
import { DeleteTagModal } from "../components/Modal/DeleteTag";
import { EditTagModal } from "../components/Modal/EditTagModal";

interface Option {
  value: number;
  label: string;
}

const TagTypeManagment = () => {
  const queryClient = useQueryClient();
  const [tag, setTag] = useState("");
  const [type, setType] = useState("");
  const [isDeleteType, setIsDeleteType] = useState(false);
  const [isEditType, setIsEditType] = useState(false);
  const [isDeleteTag, setIsDeleteTag] = useState(false);
  const [isEditTag, setIsEditTag] = useState(false);
  const [selectedId, setSelectedId] = useState<number>(0);
  const handleDeleteTag = () => setIsDeleteTag(!isDeleteTag);
  const handleEditTag = () => setIsEditTag(!isEditTag);
  const handleDeleteType = () => setIsDeleteType(!isDeleteType);
  const handleEditType = () => setIsEditType(!isEditType);

  const { data: types } = useQuery<Option[]>({
    queryKey: ["type"],
    queryFn: getType,
  });
  const { data: tags } = useQuery<Option[]>({
    queryKey: ["tags"],
    queryFn: getTag,
  });
  const { mutateAsync, isLoading } = useMutation({
    mutationFn: createType,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["type"] });
      toast.success("Type Produk berhasil ditambah");
      setType("");
    },
    onError: ({ response }) => {
      if (response) {
        const errors = response.data.messages.type;
        toast.error(errors);
      } else {
        toast.error("Terjadi kesalahan saat memproses permintaan.");
      }
    },
  });
  const handleSubmitType = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await mutateAsync(type);
  };

  const { mutateAsync: addTag, isLoading: isTagLoading } = useMutation({
    mutationFn: createTag,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["tags"] });
      toast.success("Tags Produk berhasil ditambah");
      setType("");
    },
    onError: ({ response }) => {
      if (response) {
        const errors = response.data.messages.type;
        toast.error(errors);
      } else {
        toast.error("Terjadi kesalahan saat memproses permintaan.");
      }
    },
  });
  const handleSubmitTags = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await addTag(tag);
  };
  const tableHead = ["ID", "Label", ""];
  return (
    <div>
      <Breadcrumbs placeholder={""} className="bg-[#005697] px-0">
        <a href="#" className="opacity-100 text-white font-poppins">
          <span>Admin</span>
        </a>
        <a
          href="/kontrak"
          className="font-poppins text-white hover:text-gray-300 transition-colors duration-300 ease-in-out"
        >
          Manajemen Tag & Type
        </a>
      </Breadcrumbs>
      <div className="text-3xl text-white font-poppins font-semibold my-10">
        Daftar Tag & Type
      </div>
      <div className="flex justify-between gap-5">
        <div className="w-1/2">
          <Card placeholder={""}>
            <CardBody placeholder={""}>
              <div className="flex justify-center text-xl text-[#005697] font-semibold font-poppins mb-5">
                Tambah Tag
              </div>
              <div className="border-t-[3.5px] w-1/12 border-[#005697] mx-auto mb-16 rounded-sm"></div>
              <form onSubmit={handleSubmitTags}>
                <div className="text-lg text-[#005697] font-normal font-poppins">
                  Tag
                </div>
                <Input
                  crossOrigin={""}
                  size="lg"
                  type="text"
                  id="tag"
                  name="tag"
                  variant="static"
                  onChange={(e) => setTag(e.target.value)}
                  value={tag}
                  placeholder="Label Tag"
                  className=" !border-t-blue-gray-200 focus:!border-t-custom-primary-600 font-poppins"
                />
                <div className="flex justify-end mt-5">
                  <Button
                    placeholder={""}
                    className="font-poppins"
                    variant="filled"
                    color="indigo"
                    type="submit"
                    loading={isTagLoading}
                  >
                    <span>Confirm</span>
                  </Button>
                </div>
              </form>
            </CardBody>
          </Card>
        </div>
        <div className="w-1/2 mr-5">
          <Card className="h-full overflow-scroll" placeholder={""}>
            <table className="w-full min-w-max table-auto text-left">
              <thead>
                <tr>
                  {tableHead.map((head: any) => (
                    <th
                      key={head}
                      className="border-b border-blue-gray-100 bg-blue-gray-50 p-4"
                    >
                      <Typography
                        placeholder={""}
                        variant="small"
                        color="blue-gray"
                        className="font-poppins font-semibold text-md leading-none opacity-70"
                      >
                        {head}
                      </Typography>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {tags ? (
                  tags.map(({ value, label }, index) => {
                    const isLast = index === tags.length - 1;
                    const classes = isLast ? "p-4" : "p-4";
                    return (
                      <tr key={index}>
                        <td className={classes}>
                          <Typography
                            placeholder={""}
                            variant="small"
                            color="blue-gray"
                            className="font-poppins"
                          >
                            {value}
                          </Typography>
                        </td>
                        <td className={classes}>
                          <Typography
                            placeholder={""}
                            variant="small"
                            color="blue-gray"
                            className="font-poppins"
                          >
                            {label}
                          </Typography>
                        </td>
                        <td className={`flex gap-5 ${classes}`}>
                          <FaTrashAlt
                            size={18}
                            className="text-red-900 cursor-pointer"
                          />
                          <RiEditBoxLine
                            size={18}
                            className="text-custom-blue-600 cursor-pointer"
                          />
                        </td>
                      </tr>
                    );
                  })
                ) : (
                  <div className="p-4 font-poppins">Belum ada data</div>
                )}
              </tbody>
            </table>
          </Card>
        </div>
      </div>
      <div className="flex justify-between flex-row gap-5 mt-5">
        <div className="w-1/2 flex-grow">
          <Card placeholder={""}>
            <CardBody placeholder={""}>
              <div className="flex justify-center text-xl text-[#005697] font-semibold font-poppins mb-5">
                Tambah Type
              </div>
              <div className="border-t-[3.5px] w-1/12 border-[#005697] mx-auto mb-16 rounded-sm"></div>
              <form onSubmit={handleSubmitType}>
                <div className="text-lg text-[#005697] font-normal font-poppins">
                  Type
                </div>
                <Input
                  crossOrigin={""}
                  size="lg"
                  type="text"
                  id="type"
                  name="type"
                  variant="static"
                  onChange={(e) => setType(e.target.value)}
                  value={type}
                  placeholder="Label Type"
                  className=" !border-t-blue-gray-200 focus:!border-t-custom-primary-600 font-poppins"
                />
                <div className="flex justify-end mt-5">
                  <Button
                    placeholder={""}
                    className="font-poppins"
                    variant="filled"
                    color="indigo"
                    type="submit"
                    loading={isLoading}
                  >
                    <span>Confirm</span>
                  </Button>
                </div>
              </form>
            </CardBody>
          </Card>
        </div>
        <div className="w-1/2 mr-5 flex-grow">
          <Card className="h-full overflow-scroll" placeholder={""}>
            <table className="w-full min-w-max table-auto text-left">
              <thead>
                <tr>
                  {tableHead.map((head: any) => (
                    <th
                      key={head}
                      className="border-b border-blue-gray-100 bg-blue-gray-50 p-4"
                    >
                      <Typography
                        placeholder={""}
                        variant="small"
                        color="blue-gray"
                        className="font-poppins font-semibold text-md leading-none opacity-70"
                      >
                        {head}
                      </Typography>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {types ? (
                  types.map(({ value, label }, index) => {
                    const isLast = index === types.length - 1;
                    const classes = isLast ? "p-4" : "p-4";
                    return (
                      <tr key={index}>
                        <td className={classes}>
                          <Typography
                            placeholder={""}
                            variant="small"
                            color="blue-gray"
                            className="font-poppins"
                          >
                            {value}
                          </Typography>
                        </td>
                        <td className={classes}>
                          <Typography
                            placeholder={""}
                            variant="small"
                            color="blue-gray"
                            className="font-poppins"
                          >
                            {label}
                          </Typography>
                        </td>
                        <td className={`flex gap-5 ${classes}`}>
                          <RiEditBoxLine
                            size={18}
                            className="text-custom-blue-600 cursor-pointer"
                            onClick={() => {
                              setSelectedId(value);
                              handleEditType();
                            }}
                          />
                          <FaTrashAlt
                            size={18}
                            className="text-red-900 cursor-pointer"
                            onClick={() => {
                              setSelectedId(value);
                              handleDeleteType();
                            }}
                          />
                        </td>
                      </tr>
                    );
                  })
                ) : (
                  <div className="p-4 font-poppins">Belum ada data</div>
                )}
              </tbody>
            </table>
          </Card>
        </div>
      </div>
      <DeleteTypeModal
        handleOpen={handleDeleteType}
        id={selectedId}
        open={isDeleteType}
      />
      <EditTypeModal
        handleOpen={handleEditType}
        id={selectedId}
        open={isEditType}
      />
       <DeleteTagModal
        handleOpen={handleDeleteTag}
        id={selectedId}
        open={isDeleteTag}
      />
      <EditTagModal
        handleOpen={handleEditTag}
        id={selectedId}
        open={isEditTag}
      />
    </div>
  );
};

export default TagTypeManagment;
