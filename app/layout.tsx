import type {Metadata} from "next";
import "@/css/global.css";
import {config} from '@fortawesome/fontawesome-svg-core';
import SnackbarProvider from "@/app/_provider/SnackbarProvider";

config.autoAddCss = false;

const metaTitle = "동헌 ♡ 선영 결혼식에 초대합니다.";
const metaDesc = "정동헌 & 박선영 | 모바일 청첩장";
export const metadata: Metadata = {
  title: metaTitle,
  description: metaDesc,
  formatDetection: {
    telephone: false,
    date: false,
    address: false,
    email: false,
  },
  openGraph: {
    title: metaTitle + " openGraph",
    description: metaDesc + " openGraph",
  },
  twitter: {
    card: 'summary_large_image',
    title: metaTitle + " twitter",
    description: metaDesc + " twitter",
  },
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
