import { Request } from "@/database/dataclasses"
import { createRequest } from "@/database/functions"

export const saveRequest = (name: string, email: string, description: string, imageUrl: string) => {
  const request: Request = {
    email,
    description,
    name,
    imageUrl
  }
  return createRequest(request);
}