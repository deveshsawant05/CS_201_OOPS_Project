import localFont from "next/font/local";
import "./globals.css";

import { Montserrat } from "next/font/google";

const montserratFont = Montserrat({
    weight: ["100", "200", "400", "600"],
    subsets: ["latin"],
});
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "HealthMate",
  description: "HealthCare Coordination System",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${montserratFont.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
