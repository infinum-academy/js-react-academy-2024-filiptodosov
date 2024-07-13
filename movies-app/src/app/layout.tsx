import type { Metadata } from "next";
import { Providers } from "./providers";
import Navbar from "@/components/shared/navigation/Sidebar/Navbar";

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
      <body>
        {
          <Providers>
            <Navbar />
            {children}
          </Providers>
        }
      </body>
    </html>
  );
}
