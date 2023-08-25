import { client } from "@/app/grpc/client";
import { LoginUserRequest } from "@/app/pb/user_pb";
import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { loginUserAsync } from "@/app/utils/user";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const request = new LoginUserRequest();
    request.setCredential(body.credential);
    request.setPassword(body.password);

    const res = await loginUserAsync(client, request);
    cookies().set("access_token", res.toObject().accessToken, {
      path: "/",
      httpOnly: true,
      secure: true,
      maxAge: 24 * 60 * 60,
      sameSite: "lax",
    });
    return NextResponse.json({ ok: true, user: res.toObject().user });
  } catch (err: any) {
    return NextResponse.json({
      ok: false,
      message: err.details || "An error occured",
    });
  }
}
