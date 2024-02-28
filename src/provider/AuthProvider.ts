import { createContext } from "react";
import { UseMutationResult, useMutation, useQuery, useQueryClient } from "react-query";
import storage from "@/utils/storage";
import { LoginResponse } from "@/features/login/types/LoginResponse";
import { LoginProps } from "@/features/login/types";
import { UserInterface } from "@/features/user/types/User";
import { loginFunction } from "@/features/login/api/auth";

type AuthContextType = {
  user: UserInterface | null;
  login: UseMutationResult<LoginResponse, Error, LoginProps, unknown>;
  logout: () => void;
};

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const queryClient = useQueryClient();

  // const fetchUserData = async () => {
  //   const accessToken = localStorage.getItem("token");

  //   if (accessToken) {
  //     const user = await getUser();
  //     return user;
  //   }

  //   return null;
  // };

  // const { data: User, isLoading } = useQuery({
  //   queryKey: ["authUser"],
  //   queryFn: fetchUserData,
  // });

  const loginMutation = useMutation({
    mutationFn: loginFunction,
    onSuccess: ({ token, user }) => {
      storage.setToken(token)
      queryClient.setQueryData(["auth"], user);
    },
  });

  // const logoutMutation = useMutation({
  //   mutationFn: logoutFunction,
  //   onSuccess: () => {
  //     storage.clearToken();
  //     queryClient.clear();
  //   },
  // });


  const value: AuthContextType = {
    // user: User || null,
    login: loginMutation,
    // logout: logoutMutation.mutateAsync,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthContext;
