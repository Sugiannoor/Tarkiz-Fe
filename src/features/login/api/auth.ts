import { axios } from "@/lib/axios";
import { LoginProps, LoginResponse } from "../types";
import { UserInterface } from "@/features/user/types/User";

export const loginFunction = async ({
    username,
    password,
  }: LoginProps): Promise<LoginResponse> => {
    const response = await axios.post(
      "/dashboard/users/login",
      JSON.stringify({ username, password }),
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  
    return response.data;
  };

  export const logoutFunction = async () => {
    const response = await axios.post("/api/auth/logout");
    return response.data;
  };

  export const getUser = async (): Promise<UserInterface> => {
    const response = await axios.get("/api/users/profile");
    return response.data.data;
  };