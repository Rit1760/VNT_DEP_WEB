import Footer from "@/Components/Footer";
import Header from "@/Components/Header";
import IcoHeader from "@/Components/IcoHeader";


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header/>
        <IcoHeader />
        {children}
        <Footer/>
      </body>
    </html>
  );
}
