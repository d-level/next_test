import {sendRequest} from "@/services/sendRequest";

export async function GET(options: RequestInit) {
  return await sendRequest("absence-requests", {
    ...options,
	  method: "GET",
  });
}