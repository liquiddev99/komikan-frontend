import { cookies } from "next/headers";
import { redirect } from "next/navigation";

import Logo from "@/public/logo.png";
import Image from "next/image";
import LoginForm from "./components/LoginForm";

export default function Login() {
  if (cookies().get("access_token")) {
    return redirect("/");
  }

  return (
    <div className="flex flex-col items-center min-h-[64vh] mt-16">
      <Image src={Logo} alt="Logo" width={100} />
      <p className="text-2xl mb-3 mt-4">Login</p>
      <LoginForm />
    </div>
  );
}
