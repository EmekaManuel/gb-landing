import type { Metadata } from "next";
import QueryProvider from "@/providers/query-provider";
import "./globals.css";
import { Poppins } from "next/font/google";

import { ThemeProvider } from "@/providers/theme-provider";
import { AuthProvider } from "@/providers/auth-provider";
import { SpeedInsights } from "@vercel/speed-insights/next";
import SocialWrapper from "@/layouts/app-layout";

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "globalpay - Nigeria's Leading Fintech & Payment Solutions",
  description:
    "Join 5,000+ merchants using globalpay for merchant services, POS terminals, and digital payments. Start earning with our agent network across 200+ locations in Nigeria.",
  alternates: {
    canonical: "https://globalpay.ng",
  },
  metadataBase: new URL("https://globalpay.ng"), // Required for absolute URLs
  openGraph: {
    url: "https://globalpay.ng",
    title: "globalpay - Nigeria's Leading Fintech & Payment Solutions",
    description:
      "Join 5,000+ merchants using globalpay for merchant services POS terminals, and digital payments. Start earning with our agent network across 200+ locations.",
    type: "website",
    siteName: "globalpay",
    locale: "en_NG", // Nigeria English
    images: [
      {
        url: "https://res.cloudinary.com/dkngy4g5z/image/upload/t_opengraphs/v1749643296/Screenshot_2025-06-11_at_13.01.26_empmxk.png",
        width: 1200,
        height: 630,
        alt: "globalpay - Nigeria's leading fintech platform for digital payments and merchant services",
        type: "image/png",
      },
      {
        url: "https://res.cloudinary.com/dkngy4g5z/image/upload/c_fill,w_1200,h_1200/v1749643296/Screenshot_2025-06-11_at_13.01.26_empmxk.png", // Square crop
        width: 1200,
        height: 1200,
        alt: "globalpay - Nigeria's leading fintech platform",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@globalpayNG", // Add your Twitter handle
    creator: "@globalpayNG",
    title: "globalpay - Nigeria's Leading Fintech & Payment Solutions",
    description:
      "Join 5,000+ merchants using globalpay for merchant services, POS terminals, and digital payments. Start earning with our agent network.",
    images: [
      {
        url: "https://res.cloudinary.com/dkngy4g5z/image/upload/t_opengraphs/v1749643296/Screenshot_2025-06-11_at_13.01.26_empmxk.png",
        width: 1200,
        height: 630,
        alt: "globalpay - Nigeria's leading fintech platform for digital payments",
      },
    ],
  },
  keywords: [
    // Primary keywords (most important)
    "globalpay nigeria",
    "fintech nigeria",
    "payment solutions nigeria",
    "merchant services nigeria",
    "pos terminals lagos",

    // Secondary keywords
    "digital payments nigeria",
    "financial inclusion",
    "mobile money nigeria",
    "payment gateway nigeria",
    "fintech companies lagos",

    // Long-tail keywords
    "become payment agent nigeria",
    "pos machine registration nigeria",
    "instant settlement nigeria",
    "reliable payment processor",
  ],
  authors: [{ name: "globalpay Nigeria", url: "https://globalpay.ng" }],
  creator: "globalpay Nigeria",
  publisher: "globalpay Nigeria",
  category: "Financial Technology",
  classification: "Business",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-site-verification-code", // Add when you get it
    // yandex: "your-yandex-verification",
    // bing: "your-bing-verification",
  },
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      { rel: "mask-icon", url: "/safari-pinned-tab.svg", color: "#22c55e" },
    ],
  },
  manifest: "/site.webmanifest",
  other: {
    "mobile-web-app-capable": "yes",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "black-translucent",
    "theme-color": "#22c55e",
    "msapplication-TileColor": "#22c55e",
    "msapplication-config": "/browserconfig.xml",
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
