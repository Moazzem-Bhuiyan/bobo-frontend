import localFont from "next/font/local";
import "./globals.css";
import Navber from "@/components/shared/Navber/Navber";

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
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased relative`}
      >
        <div>
        <div className="absolute top-0 z-50 w-full mt-2 ">
          <Navber></Navber>
        </div>

        {children}
        </div>
      


      </body>
    </html>
  );
}
