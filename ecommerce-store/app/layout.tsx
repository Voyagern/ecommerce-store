
import "./globals.css";
import {Urbanist} from "next/font/google";
import Footer from "@/components/footer";
import Navbar from "@/components/Navbar";
import ModalProvider from "@/providers/modal-provider";
import ToastProvide from "@/providers/toast-provide";


const font=Urbanist({subsets:['latin']})



export const metadata = {
  title: "Store ",
  description: "Store",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={font.className}
      >
      <ModalProvider />
      <ToastProvide />
      <Navbar/>
        {children}
      <Footer/>
      </body>
    </html>
  );
}
