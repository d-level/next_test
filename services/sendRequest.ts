import {cookies} from "next/headers";

export async function sendRequest(route: string, options: RequestInit) {
  const cookieStore = await cookies();

  const token = cookieStore.get(process.env.JWT_COOKIE!)?.value;

  const headers = new Headers();

  if (token) {
    headers.set("Authorization", `Bearer ${token}`);
  }

  const response = await fetch(`${process.env.API_URL}/${route}`, {
    ...options,
    headers,
  });

  /* if (!response.ok) {
    throw new Error("Failed to send request.");
  } */

  return response;
}