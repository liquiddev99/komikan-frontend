"use client";

import { ChangeEvent, useState } from "react";

export default function FeedbackForm() {
  const [fbForm, setFbForm] = useState({ nickname: "", content: "" });
  const [err, setErr] = useState("");
  const [submitting, setSubmitting] = useState(false);

  function handleChangeInput(e: ChangeEvent<HTMLInputElement>) {
    setFbForm({ ...fbForm, [e.target.id]: e.target.value });
  }

  function handleChangeTextarea(e: ChangeEvent<HTMLTextAreaElement>) {
    setFbForm({ ...fbForm, [e.target.id]: e.target.value });
  }

  async function handleSubmit(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log("Submit");
    {
      /*
    setErr("");
    setSubmitting(true);
    const res = await fetch(`${process.env.NEXT_PUBLIC_FE_URL}/gapi/feedback`, {
      method: "POST",
      body: JSON.stringify({
        nickname: fbForm.nickname,
        content: fbForm.content,
      }),
    });

    const data = await res.json();
    setSubmitting(false);
    if (!data.ok) {
      setErr(data.message || "An error occured");
    }
    */
    }
  }

  return (
    <form className="flex flex-col" onSubmit={handleSubmit}>
      <p className="text-slate-500 mb-3">
        Tell us what you think about Komikan, What you need in the next release
        and bugs!
      </p>
      <label htmlFor="nickname">Nickname</label>
      <input
        type="text"
        id="nickname"
        placeholder="Nickname"
        className="mt-2 mb-3 px-3.5 py-1.5 bg-slate-800 text-slate-300 rounded-md outline-none w-full lg:w-1/2"
        value={fbForm.nickname}
        onChange={handleChangeInput}
      />
      <label htmlFor="content">Content</label>
      <textarea
        id="content"
        placeholder="Your thought..."
        className="mt-2 mb-2.5 px-3.5 py-1.5 bg-slate-800 text-slate-300 rounded-md outline-none min-h-[6rem]"
        value={fbForm.nickname}
        onChange={handleChangeTextarea}
      />
      {err && <p className="text-red-500 my-2">{err}</p>}
      <button
        type="submit"
        className={`px-4 py-1 mt-2.5 bg-emerald-500 rounded-md max-w-fit${
          submitting ? " opacity-80" : ""
        }`}
        disabled={submitting}
      >
        {submitting ? "Submitting..." : "Submit"}
      </button>
    </form>
  );
}
