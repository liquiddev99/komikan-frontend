import { headers } from "next/headers";

import HistoryList from "./components/HistoryList";

export const dynamic = "force-dynamic";

export default async function History() {
  const headersList = headers();
  const userAgent = headersList.get("user-agent")?.toString() || "";

  return (
    <div className="layout min-h-screen">
      <h3 className="text-3xl font-medium border-b border-slate-400 pb-1">
        History
      </h3>
      <div className="mt-10">
        <HistoryList userAgent={userAgent} />
      </div>
    </div>
  );
}
