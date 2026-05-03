import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Character Creations",
  description:
    "A small, family-owned business offering handmade items and lovingly restored pieces brought back to life.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
