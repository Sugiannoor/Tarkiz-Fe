import { UserInterface } from "@/features/user/types/User"

export type LoginResponse = {
    user: UserInterface
    token: string
  }
