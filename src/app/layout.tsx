import Header from "@/Component/layout/Header";
import "./globals.css";
import { Inter, Anek_Tamil,Sora } from "next/font/google";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from "@/Component/layout/Footer";

const inter = Inter({ subsets: ["latin"] });
const sora = Sora({ subsets: ["latin"] });
export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={sora.className}>
    {/* <html lang="en"> */}
      <body className="">
        <Header />
        <main className="md:px-28 px-4">{children}</main>
        {/* <div className="md:px-28 px-4"> */}
        <Footer />
        {/* </div> */}
      </body>
    </html>
  );
}
