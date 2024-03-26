import { UserInterface } from "@/features/user/types/User"

export interface LoginResponse  {
    user: UserInterface
    access_token: string
  }
