import type { Metadata } from "next";

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
  return <>{children}</>;
}
