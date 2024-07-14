import type { Metadata } from "next";
import { Providers } from "./providers";
import Navbar from "@/components/shared/navigation/Navbar/Navbar";
import styles from "@/app/page.module.css";

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
            <main className={styles.main}>
            {children}
            </main>
          </Providers>
        }
      </body>
    </html>
  );
}
