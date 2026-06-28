import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ranger Auto",
  description: "Buy, sell, and repair auto shop concept page",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
