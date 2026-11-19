import { NextResponse } from "next/server";

export async function POST(request: Request) {
	const {email, password} = await request.json();

  const authResponse = await fetch(`${process.env.API_URL}/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email,
      password,
    }),
  });

  if (authResponse.status === 401) {
    return NextResponse.json(
      JSON.stringify("Identifiants invalides."),
      {
        status: 401,
      },
    );
  }

  const {token} = await authResponse.json();

  const loginResponse = NextResponse.json(
    {},
    {
      status: 200,
    },
  );

  loginResponse.cookies.set("absencia:jwt", token, {
    httpOnly: true,
    secure: false,
    maxAge: 60 * 60 * 24 * 7,
    path: "/",
  });

  return loginResponse;
}