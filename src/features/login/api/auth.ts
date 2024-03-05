import axios from "axios";
import { LoginProps, LoginResponse } from "../types";
import { UserInterface } from "@/features/user/types/User";

export const loginFunction = async ({
    email,
    password,
  }: LoginProps): Promise<LoginResponse> => {
    const response = await axios.post(
      "/api/auth/login",
      JSON.stringify({ email, password }),
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  
    return response.data.data;
  };

  export const logoutFunction = async () => {
    const response = await axios.post("/api/auth/logout");
    return response.data;
  };

  export const getUser = async (): Promise<UserInterface> => {
    const response = await axios.get("/api/auth/userProfile");
    return response.data.data;
  };