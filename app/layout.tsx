import { Inter } from "next/font/google";
import "./globals.css";

import Header from "./components/common/Header/Header";
import { NavigationProvider } from "./contexts/NavigationContext";
import ModalInvestimento from "./components/customs/ModalInvestimento/ModalInvestimento";
import TitlePage from "./components/common/TitlePage/TitlePage";
import { InvestmentProvider } from "./contexts/InvestimentContext";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <NavigationProvider>
      <InvestmentProvider>
      <html lang="en">

        <body className={inter.className}>
          <div className="min-h-full">
            <Header />
            <TitlePage />
            <main>
              <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">{children}</div>
            </main>
          </div>
        </body>
      </html>
      </InvestmentProvider>
    </NavigationProvider>
  );
}
