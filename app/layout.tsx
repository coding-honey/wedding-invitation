import type {Metadata} from "next";
import "@/css/global.css";
import {config} from '@fortawesome/fontawesome-svg-core';
import SnackbarProvider from "@/app/_provider/SnackbarProvider";

config.autoAddCss = false;

export const metadata: Metadata = {
  title: "모바일 청첩장 | Wedding Invitation",
  description: "모바일 청첩장 | Generated by Next.js",
  formatDetection: {
    telephone: false,
    date: false,
    address: false,
    email: false,
  }
};

export default function RootLayout({
                                     children,
                                   }: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
    <body className="fs-5 text-center">
    <SnackbarProvider>
      {children}
    </SnackbarProvider>
    </body>
    </html>
  );
}
