import { NavbarSimple } from "@/features/user/components";
import { Button } from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";

const DetailComplaint = () => {
    const navigate = useNavigate ();
  return (
    <div>
      <NavbarSimple>
        <div className="my-8 font-poppins font-bold text-3xl text-[#005697]">
          Detail Pengaduan
        </div>
        <div className="text-lg font-raleway mb-5">
          Berikut adalah Detail Pengaduan yang diajukan
        </div>
        <table className="border-2 w-full rounded-lg">
            <tbody>

          <tr className="border-2 w-[50%] h-16 font-poppins font-light">
            <td className="border-2 w-[50%] h-16 font-poppins font-light px-4">
              Nama
            </td>
            <td className="border-2 w-[50%] h-16 font-poppins font-light px-4">
              Flora
            </td>
          </tr>
          <tr className="border-2 w-[50%] h-16 font-poppins font-light">
            <td className="border-2 w-[50%] h-16 font-poppins font-light px-4">
              ID Contract
            </td>
            <td className="border-2 w-[50%] h-16 font-poppins font-light px-4">
              Baris 1, Kolom 2
            </td>
          </tr>
          <tr className="border-2 w-[50%] h-16 font-poppins font-light">
            <td className="border-2 w-[50%] h-16 font-poppins font-light px-4">
              Baris 1, Kolom 1
            </td>
            <td className="border-2 w-[50%] h-16 font-poppins font-light px-4">
              Baris 1, Kolom 2
            </td>
          </tr>
          <tr className="border-2 w-[50%] h-16 font-poppins font-light">
            <td className="border-2 w-[50%] h-16 font-poppins font-light px-4">
              Baris 1, Kolom 1
            </td>
            <td className="border-2 w-[50%] h-16 font-poppins font-light px-4">
              Baris 1, Kolom 2
            </td>
          </tr>
          <tr className="border-2 w-[50%] h-16 font-poppins font-light">
            <td className="border-2 w-[50%] h-16 font-poppins font-light px-4">
              Baris 1, Kolom 1
            </td>
            <td className="border-2 w-[50%] h-16 font-poppins font-light px-4">
              Baris 1, Kolom 2
            </td>
          </tr>
            </tbody>
        </table>
        <div className="flex justify-end mt-10">
          <Button variant="filled" color="indigo" onClick={()=> navigate(-1)} className="font-raleway" placeholder={""}>Kembali</Button>
        </div>
      </NavbarSimple>
    </div>
  );
};

export default DetailComplaint;
