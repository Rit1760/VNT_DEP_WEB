'use client'

import Footer from "@/Components/Footer";
import Header from "@/Components/Header";
import IcoHeader from "@/Components/IcoHeader";

import Loading from "./Loading.jsx"; 

import { LanguageProvider } from "@/context/LanguageContext";

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <body>
     
        <Loading>
          <Header />
        <IcoHeader />
          <LanguageProvider>
        {children}
            </ LanguageProvider >
        <Footer/>
        </Loading>
      </body>
    </html>
  );
}
