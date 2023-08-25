"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { ChangeEvent, useState } from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

export default function SignupForm() {
  const router = useRouter();
  const [signupForm, setSignupForm] = useState({
    fullName: "",
    username: "",
    email: "",
    password: "",
  });
  const [err, setErr] = useState("");
  const [signing, setSigning] = useState(false);

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setSignupForm({ ...signupForm, [e.target.id]: e.target.value });
  }

  async function handleSignup(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault();
    setErr("");
    setSigning(true);
    const res = await fetch(`${process.env.NEXT_PUBLIC_FE_URL}/gapi/signup`, {
      method: "POST",
      body: JSON.stringify({
        full_name: signupForm.fullName,
        username: signupForm.username,
        email: signupForm.email,
        password: signupForm.password,
        user_agent: navigator.userAgent,
      }),
    });

    const data = await res.json();
    if (!data.ok) {
      setErr(data.message);
      setSigning(false);
    } else {
      router.push("/");
      router.refresh();
    }
  }

  return (
    <div className="flex flex-col min-w-[20rem]">
      <form className="flex flex-col" onSubmit={handleSignup}>
        <label htmlFor="fullName">
          Full Name<span className="text-red-500"> *</span>
        </label>
        <input
          type="text"
          placeholder="Full Name"
          id="fullName"
          className="mt-2 px-4 py-2 bg-slate-800 text-slate-300 rounded-md outline-none focus:outline-orange-500 mb-2"
          value={signupForm.fullName}
          onChange={handleChange}
          required
        />
        <label htmlFor="username">
          Username<span className="text-red-500"> *</span>
        </label>
        <input
          type="text"
          placeholder="Username"
          id="username"
          className="mt-2 px-4 py-2 bg-slate-800 text-slate-300 rounded-md outline-none focus:outline-orange-500 mb-2"
          value={signupForm.username}
          onChange={handleChange}
          required
        />
        <label htmlFor="email">
          Email<span className="text-red-500"> *</span>
        </label>
        <input
          type="text"
          placeholder="Email"
          id="email"
          className="mt-2 px-4 py-2 bg-slate-800 text-slate-300 rounded-md outline-none focus:outline-orange-500 mb-2"
          value={signupForm.email}
          onChange={handleChange}
          required
        />
        <label htmlFor="password">
          Password<span className="text-red-500"> *</span>
        </label>
        <input
          type="password"
          placeholder="Password"
          id="password"
          className="mt-2 mb-3 px-4 py-2 bg-slate-800 text-slate-300 rounded-md outline-none focus:outline-orange-500"
          value={signupForm.password}
          onChange={handleChange}
          required
        />
        {err && <p className="text-red-500 mb-2">{err}</p>}
        <button
          className={`bg-orange-500 text-slate-100 rounded-md mt-2 py-1 text-lg font-semibold flex items-center justify-center${
            signing ? " opacity-80" : ""
          }`}
          disabled={signing}
          type="submit"
        >
          {signing && (
            <AiOutlineLoading3Quarters className="animate-spin mr-3" />
          )}
          {signing ? "Signing..." : "Signup"}
        </button>
      </form>
      <div className="mt-3 text-slate-400">
        Already have account?{" "}
        <Link className="text-blue-500" href="/login">
          Login
        </Link>
      </div>
    </div>
  );
}
