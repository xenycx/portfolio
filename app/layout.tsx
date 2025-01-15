import type { Metadata } from "next";
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

export const metadata: Metadata = {
  title: "xenycx",
  description: "ლინკების ჯოჯოხეთი",
  keywords: ["portfolio", "developer", "projects"],
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
  themeColor: "#ADD8E6"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta property="og:site_name" content="ლინკების ჯოჯოხეთი" />
        <meta property="og:image" content="https://avatars3.githubusercontent.com/u/50420166?s=300" />
        <meta property="og:description" content="View Alesandre Dokhnadze’s Linktree." />
        <meta property="og:title" content="Aleksandre Dokhnadze | xenyc | Linktree" />
        <meta name="description" content="!" />
        <meta name="author" content="xenyc" />
        <link rel="icon" href="/favicon.ico" />
        <Script async src="https://www.googletagmanager.com/gtag/js?id=G-F1MLQC4TK3" />
        <Script async src="https://www.googletagmanager.com/gtag/js?id=G-F1MLQC4TK3" />
        <script>
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-F1MLQC4TK3');
          `}
        </script>
        <script defer src="https://cloud.umami.is/script.js" data-website-id="a37e2a42-77e7-4095-9798-364931be22ea"></script>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
