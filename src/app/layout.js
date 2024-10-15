import "./globals.css";

import { Montserrat } from "next/font/google";

const montserratFont = Montserrat({
    weight: ["100", "200", "400", "600"],
    subsets: ["latin"],
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
