import {NextResponse} from "next/server";

export async function POST(request: Request) {
	const {email, password} = await request.json();

  const formData = new FormData();
  formData.append("email", email);
  formData.append("password", password);

  const authResponse = await fetch(`${process.env.API_URL}/login`, {
    method: "POST",
    body: formData,
  });

  if (!authResponse.ok) {
    return authResponse;
  }

  const {token} = await authResponse.json();

  const loginResponse = NextResponse.json(
    {},
    {
      status: 200,
    },
  );

  loginResponse.cookies.set(String(process.env.JWT_COOKIE), token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    maxAge: Number(process.env.JWT_MAX_AGE),
    path: "/",
  });

  return loginResponse;
}