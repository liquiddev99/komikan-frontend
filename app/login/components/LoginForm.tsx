"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { ChangeEvent, useState } from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

export default function LoginForm() {
  const router = useRouter();
  const [loginForm, setLoginForm] = useState({
    credential: "",
    password: "",
  });
  const [err, setErr] = useState("");
  const [logging, setLogging] = useState(false);

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setLoginForm({ ...loginForm, [e.target.id]: e.target.value });
  }

  async function handleLogin(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault();
    setErr("");
    setLogging(true);

    const res = await fetch(`/gapi/login`, {
      method: "POST",
      body: JSON.stringify({
        credential: loginForm.credential,
        password: loginForm.password,
      }),
    });

    const data = await res.json();
    if (!data.ok) {
      setErr(data.message);
      setLogging(false);
    } else {
      router.push("/");
      router.refresh();
    }
  }

  return (
    <div className="flex flex-col">
      <form className="flex flex-col" onSubmit={handleLogin}>
        <label htmlFor="credential">
          Email or Username<span className="text-red-500"> *</span>
        </label>
        <input
          type="text"
          placeholder="Email or Username"
          id="credential"
          className="mt-2 px-4 py-2 bg-slate-800 text-slate-300 rounded-md outline-none w-80 focus:outline-orange-500 mb-2"
          value={loginForm.credential}
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
          className="mt-2 mb-3 px-4 py-2 bg-slate-800 text-slate-300 rounded-md outline-none w-80 focus:outline-orange-500"
          value={loginForm.password}
          onChange={handleChange}
          required
        />
        {err && <p className="text-red-500 mb-2">{err}</p>}
        <button
          className={`bg-orange-500 text-slate-100 rounded-md mt-2 py-1 text-lg font-semibold flex items-center justify-center${
            logging ? " opacity-80" : ""
          }`}
          disabled={logging}
          type="submit"
        >
          {logging && (
            <AiOutlineLoading3Quarters className="animate-spin mr-3" />
          )}
          {logging ? "Logging..." : "Login"}
        </button>
      </form>
      <div className="mt-3 text-slate-400">
        Don&apos;t have an account yet?{" "}
        <Link className="text-blue-500" href="/signup">
          Signup
        </Link>
      </div>
    </div>
  );
}
