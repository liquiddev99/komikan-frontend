import { client } from "@/app/grpc/client";
import { CreateUserRequest, CreateUserResponse } from "@/app/pb/user_pb";
import { NextResponse } from "next/server";
import { KomikanClient } from "@/app/pb/service_komikan_grpc_pb";
import { cookies } from "next/headers";

function createUserAsync(
  client: KomikanClient,
  request: CreateUserRequest
): Promise<CreateUserResponse> {
  return new Promise<CreateUserResponse>((resolve, reject) => {
    client.createUser(request, (err, res) => {
      if (err) return reject(err);
      return resolve(res);
    });
  });
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const request = new CreateUserRequest();
    request.setFullName(body.full_name);
    request.setEmail(body.email);
    request.setUsername(body.username);
    request.setPassword(body.password);
    request.setUserAgent(body.user_agent);

    const res = await createUserAsync(client, request);
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
