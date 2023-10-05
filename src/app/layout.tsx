import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "To do list",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="body">{children}</body>
    </html>
  );
}
