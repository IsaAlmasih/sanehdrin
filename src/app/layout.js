import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Header from "@/components/header/header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title:
    "Supreme Court. Sanhedrin. Верховный суд. Синедрион. المحكمة العليا.سنهدرين. בית המשפט העליון. סַנהֶדרִין. כסא דוד",
  description:
    "Да благословит тебя Иису и Сохранит тебя! да Призрит на тебя Иисус светлым лицем Своим и помилует тебя!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Header></Header>
        {children}
      </body>
    </html>
  );
}
