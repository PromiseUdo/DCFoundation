import { Poppins, Merriweather, Fira_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import { NavItemProvider } from "./hooks/NavContext";
const poppins = Fira_Sans({ subsets: ["latin"], weight: ["400", "700"] });

export const metadata = {
  title: "DS Foundation",
  description: "Empower. Transform. Thrive",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <NavItemProvider>
          <Banner />
          <Navbar />
          {children}
          <Footer />
        </NavItemProvider>
      </body>
    </html>
  );
}
