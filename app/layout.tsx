import { Analytics } from "@vercel/analytics/next";
import { Geist } from "next/font/google";
import type { Metadata, Viewport } from "next";
import "./globals.css";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Abiola Abimbola | Bimms Consulting",
  description:
    "Professional facility, transport, and real estate operations consulting by Abiola Abimbola.",
  icons: {
    icon: [
      //  {
      //  url: "/icon-light-32x32.png",
      //media: "(prefers-color-scheme: light)",
      //},
      //{
      // url: "/icon-dark-32x32.png",
      // media: "(prefers-color-scheme: dark)",
      //},
      {
        url: "/logo.png",
        sizes: "32x32",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
};

export const viewport: Viewport = {
  colorScheme: "light dark",
  themeColor: "#f8f6ee",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-background">
      <body className={`${geist.variable} antialiased`}>
        {children}
        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  );
}
