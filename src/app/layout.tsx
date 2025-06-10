import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Providers } from "@/provider";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Harkon butuh makan",
  description: "Bang donasi MON nya bang pls saya lapar",
  metadataBase: new URL('https://blink-starter-monad-navy.vercel.app'),
  openGraph: {
    title: 'Harkon butuh makan',
    description: 'Bang donasi MON nya bang pls saya lapar',
    url: 'https://blink-starter-monad-navy.vercel.app',
    siteName: 'harkon-mon-donate',
    images: [
      {
        url: '/donate-mon.png', // Path ke gambar di folder public/
        width: 512,
        height: 451,
        alt: 'minta mon',
      },
    ],
    locale: 'id_ID',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
