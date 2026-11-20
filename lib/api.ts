import {auth} from "@/auth";
import { getToken } from "next-auth/jwt";
import { headers } from "next/headers";

export async function request(route: string, options: RequestInit) {
  const session = await auth();

  if (!session) {
    throw new Error("Forbidden");
  }

  const token = await getToken({
    req: {
      headers: await headers(),
    },
    secret: process.env.AUTH_SECRET,
  });

  if (!token) {
    throw new Error("Forbidden");
  }

  const response = await fetch(`${process.env.API_URL}${route}`, {
    ...options,
    headers: {
      ...options?.headers,
      "Authorization": `Bearer ${token.token}`,
    },
    cache: "no-store",
  });

  return await response.json();
}