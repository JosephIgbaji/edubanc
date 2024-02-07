import { Inter } from "next/font/google";
import "../globals.css";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import RenderAboutModal from "@/components/Render";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Edubanc",
  description: "School for everyone",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="relative">
          <RenderAboutModal />
          <Header />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
