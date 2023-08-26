import { cookies } from "next/headers";
import Image from "next/image";
import { redirect } from "next/navigation";

import Fox from "@/public/fox.jpg";
import { GetUserRequest } from "../pb/user_pb";
import { client } from "../grpc/client";
import { Metadata } from "@grpc/grpc-js";
import { getUserAsync } from "../utils/user";

export default async function Profile() {
  const accessToken = cookies().get("access_token");
  if (!accessToken) return redirect("/");

  const req = new GetUserRequest();
  const metadata = new Metadata();
  metadata.add("authorization", `Bearer ${accessToken.value}`);

  const userRes = await getUserAsync(client, metadata, req);
  const user = userRes.toObject();

  return (
    <div className="max-w-screen-lg mx-auto min-h-[69vh] mt-6 w-5/6">
      <div className="flex flex-col items-center sm:flex-row">
        <Image src={Fox} alt="Fox" width={170} className="rounded-full" />
        <div className="sm:ml-10 mt-4 text-lg">
          <p className="text-4xl mb-2">{user.fullName}</p>
          <p>Username: {user.username}</p>
          <p>Email: {user.email}</p>
          <p>Role: {user.role}</p>
        </div>
      </div>
    </div>
  );
}
