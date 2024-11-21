import localFont from "next/font/local";
import "./globals.css";

import NavbarWithConditionalRendering from "@/components/layouts/NavberwithConditional";

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
  title: "Teacher Comment Hub",
  description: "Teacher Comment Hub",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased relative`}
      >
        <div>
          <div className="absolute top-2 z-50 w-full">
            <NavbarWithConditionalRendering></NavbarWithConditionalRendering>
          </div>

          {children}
        </div>
      </body>
    </html>
  );
}
