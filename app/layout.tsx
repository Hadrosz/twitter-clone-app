import type { Metadata } from "next";
import { inter } from "@/app/font";
import "./globals.css";
import { Navigation } from "@/components/Navigation";
import { Sidebar } from "@/components/Sidebar";

export const metadata: Metadata = {
  title: "Twitter",
  description:
    "From breaking news and entertainment to sports and politics, get the full story with all the live commentary.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <section className="m-auto max-w-7xl body-container">
          <Navigation />
          {children}
          <Sidebar />
        </section>
      </body>
    </html>
  );
}
