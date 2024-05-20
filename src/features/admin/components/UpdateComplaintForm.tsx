import { Button, Input, Textarea } from "@material-tailwind/react";
import { useEffect, useState } from "react";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { useNavigate, useParams } from "react-router-dom";
import Select from "react-select";
import { UpdateStatusComplaint, getComplaintById } from "../api/complaint";
import toast from "react-hot-toast";
import Loading from "@/Components/Loading";
import { Complaint } from "../types/complaintTable";
import { FaFileAlt } from "react-icons/fa";

interface Option {
  value: string;
  label: string;
}

const UpdateComplaintForm = () => {
  const queryClient = useQueryClient();
  const { idParams } = useParams();
  const id = Number(idParams);
  const navigate = useNavigate();
  const [selectedStatus, setSelectedStatus] = useState<Option>();
  const [selectUrgensi, setSelectUrgensi] = useState<Option>();

  const { data: dataComplaint, isLoading: isDataComplaint } =
    useQuery<Complaint>({
      queryKey: ["table-complaint", id],
      queryFn: () => getComplaintById(id),
    });

  useEffect(() => {
    if (dataComplaint) {
      setFormData({
        username: dataComplaint.username ?? "",
        phone_number: dataComplaint.number_phone ?? "",
        contract_code: dataComplaint.contracts_id ?? "",
        name: dataComplaint.name ?? "",
        description: dataComplaint.description ?? "",
        name_apk: dataComplaint.name_apk ?? "",
      });
      setSelectUrgensi(dataComplaint.selected_urgensi ?? []);
      setSelectedStatus(dataComplaint.selected_status ?? []);
    }
  }, [dataComplaint]);
  const [formData, setFormData] = useState({
    username: "",
    phone_number: "",
    contract_code: "",
    name: "",
    description: "",
    name_apk: "",
  });
  const optionStatus = [
    {
      value: "baru",
      label: "Baru",
    },
    {
      value: "proses",
      label: "Proses",
    },
    {
      value: "selesai",
      label: "Selesai",
    },
  ];
  const optionUrgensi = [
    {
      value: "baru",
      label: "Baru",
    },
    {
      value: "rendah",
      label: "Rendah",
    },
    {
      value: "sedang",
      label: "Sedang",
    },
    {
      value: "tinggi",
      label: "Tinggi",
    },
  ];
  const { mutateAsync, isLoading } = useMutation({
    mutationFn: UpdateStatusComplaint,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["table-complaint"] });
      toast.success("Status berhasil diperbaharui");
      navigate("/keluhan");
    },
    onError: ({ response }) => {
      if (response) {
        const errors: { [key: string]: string } = response.data.message;
        const errorMessages = Object.values(errors).map(
          (error: string) => error
        );
        errorMessages.forEach((errorMessage: string, index) => {
          if (index === 0) {
            toast.error(errorMessage);
          }
        });
      } else {
        toast.error("Terjadi kesalahan saat memproses permintaan.");
      }
    },
  });
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const status = selectedStatus?.value;
    const urgensi = selectUrgensi?.value;
    const name = formData.name;
    const description = formData.description;

    const dataSubmit = {
      id,
      status,
      name,
      description,
      urgensi,
    };
    await mutateAsync(dataSubmit);
  };
  if (isDataComplaint) return <Loading />;
  return (
    <div className="bg-white p-5 rounded-lg">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col lg:flex-row lg:gap-5 justify-between"
      >
        <div className="w-full">
          <div className="text-lg text-[#005697] font-normal font-poppins">
            Username
          </div>
          <Input
            crossOrigin={""}
            type="text"
            disabled
            value={formData.username}
            id="username"
            name="username"
            placeholder="Username"
          />
          <div className="text-lg text-[#005697] font-normal font-poppins mt-4">
            Nomor Telephone
          </div>
          <Input
            crossOrigin={""}
            type="text"
            disabled
            id="phone_number"
            value={formData.phone_number}
            name="phone_number"
            placeholder="Nomor Handphone"
          />
          <div className="text-lg text-[#005697] font-normal font-poppins mt-4">
            Nama Aplikasi
          </div>
          <Input
            crossOrigin={""}
            type="text"
            disabled
            value={formData.name_apk}
            id="name_apk"
            name="name_apk"
            placeholder="Nama Aplikasi"
          />
          {dataComplaint && (
            <>
              <div>Lampiran Complaint</div>
              <div className="flex gap-1">
                <FaFileAlt size={20} className="text-[#005697]" />
                <a
                  href={`${import.meta.env.VITE_API_BASE_URL}/${
                    dataComplaint.path_files
                  }`}
                  target="_blank"
                  className="text-md font-poppins font-normal"
                  rel="noopener noreferrer"
                >
                  Lampiran
                </a>
              </div>
            </>
          )}
        </div>
        <div className="w-full">
          <div className="text-lg text-[#005697] font-normal font-poppins ">
            Kode Kontrak
          </div>
          <Input
            crossOrigin={""}
            type="text"
            disabled
            id="contract_code"
            name="contract_code"
            value={formData.contract_code}
            placeholder="#SDSA21"
          />
          <div className="text-lg text-[#005697] font-normal font-poppins mt-4">
            Urgensi
          </div>
          <Select
            defaultValue={selectUrgensi}
            value={selectUrgensi}
            onChange={setSelectUrgensi}
            options={optionUrgensi}
          />
          <div className="text-lg text-[#005697] font-normal font-poppins mt-4">
            Status
          </div>
          <Select
            defaultValue={selectedStatus}
            value={selectedStatus}
            onChange={setSelectedStatus}
            options={optionStatus}
          />
          <div className="text-lg text-[#005697] font-normal font-poppins mt-4">
            Judul Keluhan
          </div>
          <Input
            crossOrigin={""}
            type="text"
            id="title"
            name="title"
            placeholder="Judul Keluhan"
            value={formData.name}
            disabled
          />
          <div className="text-lg text-[#005697] font-normal font-poppins mt-4">
            Deskripsi
          </div>
          <Textarea
            disabled
            className="mt-2"
            placeholder="Deskripsi"
            variant="outlined"
            id="description"
            name="description"
            value={formData.description}
          />
          <div className="flex justify-end mt-10">
            <Button
              placeholder={""}
              variant="text"
              color="red"
              className="mr-1 font-poppins"
              onClick={() => navigate(-1)}
            >
              <span>Cancel</span>
            </Button>
            <Button
              placeholder={""}
              className="font-poppins"
              variant="gradient"
              color="black"
              type="submit"
              loading={isLoading}
            >
              <span>Confirm</span>
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default UpdateComplaintForm;
