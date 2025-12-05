import { LanguageProvider } from "@/Context/LanguageContext";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
           <LanguageProvider>
        {children}
           </LanguageProvider>
      </body>
    </html>
  );
}
