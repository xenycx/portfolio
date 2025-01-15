import localFont from "next/font/local";
import "./globals.css";
import Script from "next/script";
import Head from "next/head";

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
  title: "xenycx",
  description: "ლინკების ჯოჯოხეთი",
  keywords: ["portfolio", "developer", "projects"],
  robots: "index, follow",
  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <meta charSet="utf-8" />
        <meta property="og:site_name" content="ლინკების ჯოჯოხეთი" />
        <meta property="og:image" content="https://avatars3.githubusercontent.com/u/50420166?s=300" />
        <meta property="og:description" content="View Alesandre Dokhnadze’s Portfolio." />
        <meta property="og:title" content="Aleksandre Dokhnadze | xenycx | Portfolio" />
        <meta name="description" content="!" />
        <meta name="author" content="xenycx" />
        <meta name="theme-color" content="#ADD8E6" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>
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