import { createContext } from "react";
import { UseMutationResult, useMutation, useQuery, useQueryClient } from "react-query";
import storage from "@/utils/storage";
import { LoginProps, LoginResponse } from "@/features/login/types";
import { getUser, loginFunction, logoutFunction } from "@/features/login/api/auth";
import { UserInterface } from "@/features/user/types/User";
import { generateNewRole } from "@/utils/helper";
import Loading from "@/Components/Loading";

type AuthContextType = {
  user: UserInterface | null;
  login: UseMutationResult<LoginResponse, Error, LoginProps, unknown>;
  logout: () => void;
};

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const queryClient = useQueryClient();

  const fetchUserData = async () => {
    const accessToken = localStorage.getItem("token");

    if (accessToken) {
      const user = await getUser();
      const newRole = generateNewRole(user);
      const newUser = {...user, role: newRole}

      return newUser;
    }

    return null;
  };

  const { data: User, isLoading } = useQuery({
    queryKey: ["authUser"],
    queryFn: fetchUserData,
  });
  
  
  const loginMutation = useMutation({
    mutationFn: loginFunction,
    onSuccess: ({ token, user }) => {
      storage.setToken(token)
      queryClient.setQueryData(["auth"], user);
    },
  });
  
  const logoutMutation = useMutation({
    mutationFn: logoutFunction,
    onSuccess: () => {
      storage.clearToken();
      queryClient.clear();
    },
  });
  
  if (isLoading) {
    return <Loading />;
  }
  
  const value: AuthContextType = {
    user: User || null,
    login: loginMutation,
    logout: logoutMutation.mutateAsync,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthContext;
