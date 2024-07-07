import type { Metadata } from "next";
import "./globals.css";
import { Providers } from './providers'

export const metadata: Metadata = {
  title: "TV Shows App",
  description: "TV Shows App - used for rating TV shows.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{
                <Providers>{children}</Providers>
      }</body>
    </html>
  );
}
