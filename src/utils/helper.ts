import { AxiosError } from "axios";
import toast from "react-hot-toast";

export const dateFormated = (dateStr: string) => {
    const day = new Date(dateStr);
    const m = [
      "Januari",
      "Februari",
      "Maret",
      "April",
      "May",
      "Juni",
      "Juli",
      "Agustus",
      "September",
      "Oktober",
      "November",
      "Desember",
    ];
    const str_op =
      day.getDate() + " " + m[day.getMonth()] + " " + day.getFullYear();
  
    return str_op;
  };

  export const handleError = (err: Error, errorTypes?: string[]) => {
    if (err instanceof AxiosError) {
      const error = err.response?.data.errors;
  
      if (error && errorTypes) {
        for (const type of errorTypes) {
          if (error[type]) {
            if (Array.isArray(error[type]) && error[type].length > 0) {
              toast.error(error[type][0]);
              return;
            }
          }
        }
      } else {
        toast.error(err.response?.data.message);
        return;
      }
  
      toast.error("Gagal, periksa ulang data anda");
    }
  };