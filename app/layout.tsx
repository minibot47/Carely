import type { Metadata } from "next";
import { Lora, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import CustomCursor from "./components/customcursor";

const lora = Lora({
  subsets: ["latin"],
  variable: "--font-lora",
  display: "swap",
  style: ["normal", "italic"], // 👈 this loads the real italic font file
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Eldernest Care — Senior Care & Elderly",
  description: "...",
  icons: {
    icon: "/logos/Logo.png",
    shortcut: "/logos/Logo.png",
    apple: "/logos/Logo.png",
  },
  openGraph:{
    title:"ElderNest Care — Boutique Senior Living in Yaba, Lagos",
    description:"ElderNest Care offers a curated, home-like experience for seniors in Yaba, Lagos. From chef-inspired meals to on-call health professionals, we blend hospitality with expert care.",
    url:"https://eldernestcare.site",
    siteName:"Eldernest Care",
    locale: "en_NG",
    type: "website",
    images:[
      {
        url:"/logos/meta.jpg",
        width: 1200,
        height: 630,
      }
    ]
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${jakarta.variable} ${lora.variable} font-sans antialiased`}
      >
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}