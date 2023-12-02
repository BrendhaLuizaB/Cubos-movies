"use client";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header/header";
import { GlobalContextProvider } from "./Context/movieContext";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const montserrat = Montserrat({ subsets: ["latin"] });
const queryClient = new QueryClient();

export default function RootLayout({ children }) {
  return (
    <QueryClientProvider client={queryClient}>
      <html lang="en">
        <body className={montserrat.className}>
          <GlobalContextProvider>
            <Header />
            {children}
          </GlobalContextProvider>
        </body>
      </html>
    </QueryClientProvider>
  );
}
