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
          <CurrRelatedContextProvider>
            <ReportContextProvider>{children}</ReportContextProvider>
          </CurrRelatedContextProvider>
        </BlogContextProvider>
      </body>
    </html>
  );
}
