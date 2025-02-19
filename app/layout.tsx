// app/layout.tsx
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import "./globals.css";

export const metadata: Metadata = {
  title: "Personal Finance Visualizer",
  description: "Track your income, expenses, and budget efficiently.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-100 text-gray-900">
        <Navbar />
        <main className="max-w-6xl mx-auto p-6">{children}</main>
      </body>
    </html>
  );
}
