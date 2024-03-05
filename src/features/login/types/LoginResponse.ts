import { UserInterface } from "@/features/user/types/User"

export interface LoginResponse  {
    user: UserInterface
    token: string
  }
