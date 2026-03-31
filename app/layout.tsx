import type { Metadata } from "next";
import { EB_Garamond, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import CustomCursor from "./components/customcursor";

const garamond = EB_Garamond({
  subsets: ["latin"],
  variable: "--font-garamond",
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Carely — Senior Care & Elderly",
  description: "...",
  icons: {
    icon: "/logos/Logo.png",
    shortcut: "/logos/Logo.png",
    apple: "/logos/Logo.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={` ${jakarta.variable} ${garamond.variable}  font-sans antialiased`}
      >
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}