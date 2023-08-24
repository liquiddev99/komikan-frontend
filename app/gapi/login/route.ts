import { client } from "@/app/grpc/client";
import { LoginUserRequest, LoginUserResponse } from "@/app/pb/user_pb";
import { NextResponse } from "next/server";
import { KomikanClient } from "@/app/pb/service_komikan_grpc_pb";
import { cookies } from "next/headers";

function loginUserAsync(
  client: KomikanClient,
  request: LoginUserRequest
): Promise<LoginUserResponse> {
  return new Promise<LoginUserResponse>((resolve, reject) => {
    client.loginUser(request, (err, res) => {
      if (err) return reject(err);
      return resolve(res);
    });
  });
}

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
