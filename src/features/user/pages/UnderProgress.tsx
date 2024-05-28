import { Button } from "@material-tailwind/react";
import { FaTimesCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export const UnderProgress: React.FC = () => {
  const navigate = useNavigate();

  return (
    <main>
      <div className="flex flex-col items-center justify-center mx-10 py-24 lg:mx-auto max-w-[40rem]">
        <FaTimesCircle size={100} className="text-red-500" />
        <h1 className="text-3xl font-bold mb-4 text-center font-poppins mt-20 ">
          Halaman tidak ditemukan atau fitur Dalam Pengembangan
        </h1>
        <Button onClick={() => navigate(-1)}>Kembali</Button>
      </div>
    </main>
  );
};
