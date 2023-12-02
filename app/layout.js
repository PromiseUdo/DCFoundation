import { Poppins, Merriweather, Fira_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";

const poppins = Fira_Sans({ subsets: ["latin"], weight: ["400", "700"] });

export const metadata = {
  title: "DS Foundation",
  description: "Empower. Transform. Thrive",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Banner />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
