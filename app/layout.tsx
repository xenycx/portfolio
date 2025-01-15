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
  title: "Aleksandre Dokhnadze | xenycx | Portfolio",
  description: "View Alesandre Dokhnadze’s Portfolio.",
  keywords: "portfolio, developer, projects",
  author: "xenycx",
  openGraph: {
    siteName: "ლინკების ჯოჯოხეთი",
    image: "https://avatars3.githubusercontent.com/u/50420166?s=300",
    description: "View Alesandre Dokhnadze’s Portfolio.",
    title: "Aleksandre Dokhnadze | xenycx | Portfolio",
  },
  icons: {
    icon: "/favicon.ico",
    appleTouchIcon: "/apple-touch-icon.png",
    icon32: "/favicon-32x32.png",
    icon16: "/favicon-16x16.png",
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