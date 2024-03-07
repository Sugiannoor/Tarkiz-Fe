import { UserInterface } from "@/features/user/types/User";
import { AxiosError } from "axios";
import toast from "react-hot-toast";
import { ROLES } from "./data";

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

  export const handleError = (err: any, errorTypes?: string[]) => {
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

  export const generateNewRole = (user: UserInterface) => {
    let newRole = "";
  
    if (user) {
        switch (user.role) {
          case ROLES.Users:
            newRole = ROLES.Users;
            break;
          case ROLES.Admin:
            newRole = ROLES.Admin;
            break;
          default:
            newRole = user.role;
            break;
        }
      } 
    return newRole;
  };