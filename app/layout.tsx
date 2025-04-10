import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/general/Navbar";
import { AuthProvider } from "./utils/AuthProvider";

const poppins = Poppins({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: ["100", "100", "300", "400", "400", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Blog | Karan Kumbhare",
  description: "Blogpage app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <AuthProvider>
      <html lang="en">
        <body className={`${poppins.variable} antialiased`}>
          <Navbar />
          <div className="max-w-7xl px-4 sm:px-6 lg:px-8 mx-auto pt-20">
            {children}
          </div>
        </body>
      </html>
    </AuthProvider>
  );
}
