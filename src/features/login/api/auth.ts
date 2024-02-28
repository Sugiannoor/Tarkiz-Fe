import axios from "axios";
import { LoginProps, LoginResponse } from "../types";

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