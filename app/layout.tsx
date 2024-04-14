import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import Navbar from "./components/navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pawel Wojcik",
  description: "description",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body>
        <Providers >
          <div className="relative flex flex-col h-screen">
            <Navbar></Navbar>
            <main className="container mx-auto max-w-4xl px-6 flex-grow">
              {children}
            </main>
          </div>

        </Providers>
      </body>
    </html>
  );
}
