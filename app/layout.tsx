import localFont from "next/font/local";
import "./globals.css";
import Script from "next/script";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "xenycx | Portfolio",
  description: "View Alesandre Dokhnadze’s Portfolio.",
  keywords: "portfolio, developer, projects",
  author: "xenycx",
  openGraph: {
    siteName: "ლინკების ჯოჯოხეთი",
    images: [
      {
        url: "https://avatars.githubusercontent.com/u/50420166?s=300",
        width: 300,
        height: 300,
        alt: "xenycx Avatar",
      },
    ],
    description: "View Alesandre Dokhnadze’s Portfolio.",
    title: "xenycx | Portfolio",
  },
  icons: {
    icon: "/public/favicon.ico",
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
        <Script async src="https://www.googletagmanager.com/gtag/js?id=G-F1MLQC4TK3" />
        <Script
          id="gtag-init"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-F1MLQC4TK3');
            `,
          }}
        />
        <Script
          id="umami-init"
          defer
          src="https://cloud.umami.is/script.js"
          data-website-id="a37e2a42-77e7-4095-9798-364931be22ea"
        />
      </body>
    </html>
  );
}