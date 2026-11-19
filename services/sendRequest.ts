import {cookies} from "next/headers";
import {NextResponse} from "next/server";

export async function sendRequest(route: string, options: RequestInit) {
  const cookieStore = await cookies();

  console.log("-----------------------------------------------", cookieStore.getAll());

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