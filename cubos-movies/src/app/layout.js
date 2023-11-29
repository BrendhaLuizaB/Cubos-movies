"use client";
import { Inter } from "next/font/google";
import './globals.css'
// import StyledComponentsRegistry from "./registry";
import Header from "@/components/Header/header";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* <StyledComponentsRegistry> */}
        <Header/>
            {children}
        {/* </StyledComponentsRegistry> */}
      </body>
    </html>
  );
}
