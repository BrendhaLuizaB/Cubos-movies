"use client";
import { Inter } from "next/font/google";
import "./globals.css";
// import StyledComponentsRegistry from "./registry";
import Header from "@/components/Header/header";
import { GlobalContextProvider } from "./Context/movieContext";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const inter = Inter({ subsets: ["latin"] });
const queryClient = new QueryClient();

export default function RootLayout({ children }) {
  return (
    <QueryClientProvider client={queryClient}>
      <html lang="en">
        <body className={inter.className}>
          <GlobalContextProvider>
            <Header />
            {children}
          </GlobalContextProvider>
        </body>
      </html>
    </QueryClientProvider>
  );
}
