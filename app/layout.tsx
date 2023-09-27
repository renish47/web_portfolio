import Header from "@/components/sections/Header";
import "./globals.css";
import { Inter } from "next/font/google";
import ActiveSectionContextProvider from "@/context/ActiveSectionContextProvider";
import BlurredColorBg from "@/components/BlurredColorBg";
import { Toaster } from "react-hot-toast";
import ThemeSwitch from "@/components/ThemeSwitch";
import ThemeContextProvider from "@/context/ThemeContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Renishkar J",
  description:
    "This is Renishkar's personal web portfolio, a Full-stack developer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body
        className={`${inter.className} custom-scrollbar relative bg-gray-50 pt-28 text-gray-950 dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90 sm:pt-36`}
      >
        <BlurredColorBg />
        <ThemeContextProvider>
          <ActiveSectionContextProvider>
            <Header />
            {children}
          </ActiveSectionContextProvider>
          <ThemeSwitch />
        </ThemeContextProvider>
        <Toaster position="top-right" />
      </body>
    </html>
  );
}
