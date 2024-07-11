import { Inter } from "next/font/google";
import "./globals.css";

import Header from "./components/common/Header";
import { NavigationProvider } from "./contexts/NavigationsContext";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <NavigationProvider>
      <html lang="en">

        <body className={inter.className}>
          <div className="min-h-full">
            <Header></Header>
            <header className="bg-white shadow">
              <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
                <h1 className="text-3xl font-bold tracking-tight text-gray-900">Investimentos</h1>
              </div>
            </header>
            <main>
              <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">{children}</div>
            </main>
          </div>
        </body>
      </html>
    </NavigationProvider>
  );
}
