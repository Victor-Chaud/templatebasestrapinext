import type { Metadata } from "next";
import "./globals.css";
import dynamic from "next/dynamic";

const Navigation = dynamic(() => import("../components/Navigation"));
const Footer = dynamic(() => import("../components/Footer"));


export const metadata = {
  // title: 'Enea Douane | Votre spécialiste des formalités douanières',
  // description: "Enea Douane vous aide dans vos démarches douanières, importation, exportation à l'international",
  // openGraph: {
  //   title: "Enea Douane | Votre spécialiste des formalités douanières",
  //   description: "Enea Douanes vous aide dans vos démarches douanières, importation, exportation à l'international",
  //   type: 'website',
  //   url: 'http://enea-douane.com/',
  //   images: [
  //     {
  //       url: 'http://enea-douane.com/img/logo.svg',
  //       width: 1920,
  //       height: 1080,
  //       alt: 'OG Enea Douane',
  //     }
  //   ]
  // },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body>
        <Navigation />
          {children}
        <Footer />
      </body>
    </html>
  );
}
