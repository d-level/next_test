import {cookies} from "next/headers";

export async function getAbsenceRequests() {
  const requestCookies = await cookies();
  const token = requestCookies.get(String(process.env.JWT_COOKIE))?.value;
  const headers = new Headers();

  if (token) {
    headers.append("Authorization", `Bearer ${token}`);
  }

  const response = await fetch(`${process.env.API_URL}/absence-requests`, {
    headers,
  });

  if (!response.ok) {
    throw new Error("Failed to get absence requests.");
  }

  return await response.json();
}