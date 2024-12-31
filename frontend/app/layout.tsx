import type { Metadata } from "next";
import { Noto_Serif_Georgian } from "next/font/google";
import "./globals.css";
// Open_Sans;
// Noto_Sans;
// Roboto_Serif;
// Noto_Serif_Georgian;
// Roboto_Slab;
const inter = Noto_Serif_Georgian({ weight: "400", subsets: ["latin"] });

import { ReportContextProvider } from "./context/reportContext";
import { BlogContextProvider } from "./context/blogContext";
import { CurrRelatedContextProvider } from "./context/currRelated";
import Head from "next/head";
// import Head from "next/head";
// import { Metadata } from "next";
//  import marqFav from "../public/marqFav.png";

export const metadata: Metadata = {
  title: "Marqstats",
  description: "Data drivin solution",
  icons: {
    icon: ["./favicon.ico"],
    apple: ["./favicon.ico"],
    shortcut: ["./favicon.ico"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="../public/marqFav.ico" sizes="any" />
      </Head>
      <body className={inter.className}>
        <BlogContextProvider>
          <CurrRelatedContextProvider>
            <ReportContextProvider>{children}</ReportContextProvider>
          </CurrRelatedContextProvider>
        </BlogContextProvider>
      </body>
    </html>
  );
}
