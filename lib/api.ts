import {NextResponse} from "next/server";

import {auth} from "@/auth";

export async function request(route: string, options: RequestInit) {
  const session = await auth();

  if (!session?.user?.token) {
    // TODO: Redirect
    return NextResponse.next();
  }

  return await fetch(`${process.env.API_URL}${route}`, {
    ...options,
    headers: {
      ...options?.headers,
      "Authorization": `Bearer ${session.user.token}`,
    },
    cache: "no-store",
  });
}