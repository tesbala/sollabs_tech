import type { Metadata } from "next";
import "./styles/globals.css";

export const metadata: Metadata = {
  title: "SolLabs Tech — Building Digital Solutions",
  description: "We build powerful digital solutions that drive business growth and innovation. Mobile apps, web apps, websites, and AI solutions.",
  keywords: "digital solutions, mobile app development, web app, next.js, react native, AI solutions",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Exo+2:wght@300;400;500;600;700;800;900&family=JetBrains+Mono:wght@400;500&family=Rajdhani:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
