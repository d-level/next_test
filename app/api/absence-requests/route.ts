import {request} from "@/lib/api";

export async function GET(options: RequestInit) {
  return await request("/absence-requests", options);
}

export async function POST(options: RequestInit) {
  console.log(options);

  const response = await request("/absence-requests", options);

  console.log(response);

  return response;
}