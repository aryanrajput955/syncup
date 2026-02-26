import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "SyncUp - Professional Social Network",
  description: "Connect, share, and grow your professional network with SyncUp.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-bg-main text-text-primary antialiased`}>
        {children}
      </body>
    </html>
  );
}
