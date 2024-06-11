import { createContext, useEffect } from "react";
import { UseMutationResult, useMutation, useQuery, useQueryClient } from "react-query";
import storage from "@/utils/storage";
import { LoginProps, LoginResponse } from "@/features/login/types";
import { getUser, loginFunction } from "@/features/login/api/auth";
import { UserInterface } from "@/features/user/types/User";
import { generateNewRole } from "@/utils/helper";
import Loading from "@/Components/Loading";

type AuthContextType = {
  user: UserInterface | null;
  login: UseMutationResult<LoginResponse, unknown, LoginProps, unknown>;
  logout: () => void;
};

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const queryClient = useQueryClient();

  const fetchUserData = async () => {
    const accessToken = localStorage.getItem("access_token");
    if (accessToken) {
      const user = await getUser();
      const newRole = generateNewRole(user);
      const newUser = {...user, role: newRole}

      return newUser;
    }

    return null;
  };

  const { data: User, isLoading, refetch } = useQuery({
    queryKey: ["auth"],
    queryFn: fetchUserData,
  });
  
  
  const loginMutation = useMutation({
    mutationFn: loginFunction,
    onSuccess: ({ access_token, user }) => {
      const newRole = generateNewRole(user);
      storage.setToken(access_token)
      const updatedUser = { ...user, role: newRole };
      queryClient.setQueryData(["auth"], updatedUser);
    },
  });
  useEffect(() => {
    if (localStorage.getItem("access_token")) {
      refetch();
    }
  }, [refetch]);
  if (isLoading) {
    return <Loading />;
  }
  
  const logout = () => {
    localStorage.clear();
    queryClient.clear(); 
    window.location.reload()
  }
  
  if (isLoading) {
    return <Loading />;
  }
  
  const value: AuthContextType = {
    user: User || null,
    login: loginMutation,
    logout: logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthContext;
