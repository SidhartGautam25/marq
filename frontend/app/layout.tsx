import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
const inter = Inter({ subsets: ["latin"] });
import { ReportContextProvider } from "./context/reportContext";
import { BlogContextProvider } from "./context/blogContext";

export const metadata: Metadata = {
  title: "Marqstats",
  description: "Data drivin solution",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <BlogContextProvider>
          <ReportContextProvider>{children}</ReportContextProvider>
        </BlogContextProvider>
      </body>
    </html>
  );
}
