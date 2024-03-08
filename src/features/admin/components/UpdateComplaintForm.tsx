import InputComponent from "@/Components/InputComponent";
import { Button, Input, Textarea } from "@material-tailwind/react";
import { useEffect, useState } from "react";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { useNavigate, useParams } from "react-router-dom";
import Select from "react-select";
import { UpdateStatusComplaint, getComplaintById } from "../api/complaint";
import toast from "react-hot-toast";
import { handleError } from "@/utils/helper";
const UpdateComplaintForm = () => {
  const queryClient = useQueryClient ();
  const {idParams} = useParams ();
  const id = Number(idParams)
  const navigate = useNavigate();
  const [status, setStatus] = useState (null)
  const [urgensi, setUrgensi] = useState (null)
  const {data: dataComplaint, isLoading: isDataComplaint}= useQuery ({
    queryKey: ["table-complaint", id],
    queryFn: ()=> getComplaintById (id)
  })

  useEffect (()=> {
    if (dataComplaint){
      setFormData ({
        username: dataComplaint.username,
        phone_number: dataComplaint.number_phone,
        contract_code: dataComplaint.contract.code,
        title: dataComplaint.title,
        program: dataComplaint.program,
        description: dataComplaint.description
      })
      
    }
  })
  const [formData, setFormData] = useState({
    username: "",
    phone_number: "",
    contract_code: "",
    title: "",
    description: "",
    program: "",
  });
  const optionStatus = [
    {
      value: "Baru",
      label: "Baru",
    },
    {
      value: "Proses",
      label: "Proses",
    },
    {
      value: "Selesai",
      label: "Selesai",
    },
  ];
  const optionUrgensi= [
    {
      value: "Tidak Urgent",
      label: "Tidak Urgent",
    },
    {
      value: "Urgent",
      label: "Urgent",
    },
  ];
  const { mutateAsync, isLoading } = useMutation({
    mutationFn: UpdateStatusComplaint,
    onSuccess: () => {
      queryClient.invalidateQueries();
      toast.success("Status berhasil diperbaharui");
    },
    onError: (err: Error) => {
      const errorTypes = [
        "id",
        "contract_code",
        "contract_date",
        "end_date",
        "client_name",
      ];
      handleError(err, errorTypes);
      return;
    },
  });
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault ();
    const dataSubmit = {
      status: status,
      urgensi: urgensi
    }
    await mutateAsync (dataSubmit)
  }
  return (
    <div className="bg-white p-5 rounded-lg">
      <form onSubmit={handleSubmit} className="flex flex-col lg:flex-row lg:gap-5 justify-between">
        <div className="w-full">
          <div className="text-lg text-[#005697] font-normal font-poppins">
            Username
          </div>
          <Input
            crossOrigin={""}
            type="text"
            disabled
            id="username"
            name="username"
            placeholder="Username"
          />
          <div className="text-lg text-[#005697] font-normal font-poppins mt-4">
            Nomor Telephone
          </div>
          <Input
            crossOrigin={""}
            type="number"
            disabled
            id="phone_number"
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
            id="program"
            name="program"
            placeholder="Nama Aplikasi"
          />
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
            placeholder="#SDSA21"
          />
          <div className="text-lg text-[#005697] font-normal font-poppins mt-4">
            Status
          </div>
          <Select defaultValue={status} options={optionStatus} />
          <div className="text-lg text-[#005697] font-normal font-poppins mt-4">
            Urgensi
          </div>
          <Select defaultValue={status} options={optionUrgensi} />
          <div className="text-lg text-[#005697] font-normal font-poppins mt-4">
            Judul Keluhan
          </div>
          <Input
            crossOrigin={""}
            type="text"
            id="title"
            name="title"
            placeholder="Judul Keluhan"
            disabled
          />
          <div
              className="text-lg text-[#005697] font-normal font-poppins mt-4"
            >
              Deskripsi
            </div>
            <Textarea
              disabled
              className="mt-2"
              placeholder="Deskripsi"
              variant="outlined"
              id="description"
              name="description"
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
