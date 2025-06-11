import type { Metadata } from "next";
import QueryProvider from "@/providers/query-provider";
import "./globals.css";
import { Poppins } from "next/font/google";

import { ThemeProvider } from "@/providers/theme-provider";
import { AuthProvider } from "@/providers/auth-provider";
import { SpeedInsights } from "@vercel/speed-insights/next";
import SocialWrapper from "@/layouts/app-layout";

// import { I18nextProvider } from "react-i18next";
// import i18n from "@/providers/i18n";

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "GlobalPay - Financial Inclusion for Everyone",
  description:
    "More than a payment company. We believe everyone should be able to enjoy financial and social inclusion, without regard for physical borders, boundaries, or even social status.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    url: "/",
    title: "GlobalPay - Financial Inclusion for Everyone",
    description:
      "More than a payment company. We believe everyone should be able to enjoy financial and social inclusion, without regard for physical borders, boundaries, or even social status.",
    type: "website",
    siteName: "GlobalPay",
    images: [
      {
        url: "/gb/og.png", // Path to your image in the public folder
        width: 1200,
        height: 630,
        alt: "GlobalPay - Financial Inclusion for Everyone",
        type: "image/png",
      },
      {
        url: "/gb/og.png", // Square version for some platforms
        width: 1200,
        height: 1200,
        alt: "GlobalPay - Financial Inclusion for Everyone",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "GlobalPay - Financial Inclusion for Everyone",
    description:
      "More than a payment company. We believe everyone should be able to enjoy financial and social inclusion, without regard for physical borders, boundaries, or even social status.",
    images: [
      {
        url: "/gb/og.png", // Same image or Twitter-specific version
        width: 1200,
        height: 630,
        alt: "GlobalPay - Financial Inclusion for Everyone",
      },
    ],
  },
  keywords: [
    "globalpay",
    "payment solutions",
    "financial inclusion",
    "agency banking",
    "fintech",
    "nigeria payments",
    "pos terminals",
    "digital banking",
    "financial services",
  ],
  authors: [{ name: "GlobalPay" }],
  creator: "GlobalPay",
  publisher: "GlobalPay",
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={poppins.variable}>
      <body>
        <SpeedInsights />
        <QueryProvider>
          {/* removed enableSystem */}
          <ThemeProvider attribute="class" defaultTheme="light">
            <AuthProvider>
              <SocialWrapper>{children}</SocialWrapper>
            </AuthProvider>
          </ThemeProvider>
        </QueryProvider>
      </body>
    </html>
  );
}
