import "tailwindcss/tailwind.css";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Ziyad Edher's Webdev Template",
  description: "A template for webapps using Next.js, Tailwind CSS, and TypeScript.",
};

const Layout = ({ children }: { children: React.ReactNode }) => (
  <html lang="en" className={inter.className}>
    <body>
      {children}
      <Analytics />
      <SpeedInsights />
    </body>
  </html>
);

export default Layout;
