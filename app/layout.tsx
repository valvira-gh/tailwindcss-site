import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/ui/Header";
import Footer from "./components/ui/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`inter.className bg-cyan-950`}>
        <div className="min-w-screen h-screen flex flex-col items  justify-between">
          <div className="flex flex-col items-center w-dcreen">
            <header className="border-b border-cyan-600 bg-cyan-900">
              <Header />
            </header>

            <main className="main w-1/2 flex flex-col items-center  bg-cyan-900 p-10">
              {children}
            </main>
          </div>

          <div className="footer-container mb-0">
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
