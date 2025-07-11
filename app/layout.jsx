import { Manrope, Sacramento } from "next/font/google";
import "./globals.sass"

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const sacramento = Sacramento({
  variable: "--font-sacramento",
  weight: "400",
  subsets: ["latin"],
});

export const metadata = {
  title: "Nice Toaster - Playground",
  description: "Beautiful, customizable, and modern notifications for React — with system notification support, vibration, progress bars, and more.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${manrope.variable} ${sacramento.variable}`}>
        {children}
      </body>
    </html>
  );
}
