import { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Nunito } from "next/font/google";

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

interface Props {
  children: ReactNode;
}

export default function Layout({ children }: Props) {
  return (
    <div className={`${nunito.className} text-slate-200`}>
      <Header />
      {children}
      <Footer />
    </div>
  );
}
