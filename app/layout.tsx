import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { personalInfo } from "@/config/personal";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://mary-clement.vercel.app'),
  title: {
    default: "Mary Clement - WordPress & React Developer in Lagos | E-commerce & SaaS Specialist",
    template: "%s | Mary Clement"
  },
  description: "Full-stack web developer in Lagos building WordPress sites, React apps, and e-commerce platforms for Nigerian & international businesses. Fast delivery (3-week average). View portfolio of 7+ production systems.",
  keywords: ["web developer Lagos", "WordPress developer Nigeria", "React developer Lagos", "e-commerce developer Nigeria", "SaaS developer", "full-stack developer Lagos", "custom website Nigeria", "freelance developer Lagos"],
  authors: [{ name: "Mary Clement" }],
  creator: "Mary Clement",
  publisher: "Mary Clement",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://mary-clement.vercel.app",
    siteName: "Mary Clement Portfolio",
    title: "Mary Clement - Web Developer Lagos | WordPress, React & E-commerce",
    description: "Full-stack developer building production-ready systems in weeks. 7+ projects live, serving 2,500+ users globally.",
    images: [
      {
        url: "/images/profile-pic.jpg",
        width: 1200,
        height: 630,
        alt: "Mary Clement - Web Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mary Clement - Web Developer Lagos",
    description: "Full-stack developer building WordPress, React & e-commerce solutions",
    images: ["/images/profile-pic.jpg"],
    creator: "@Maya_Uko",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    // Add your verification codes when available
    // google: 'your-google-verification-code',
    // yandex: 'your-yandex-verification-code',
    // bing: 'your-bing-verification-code',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Note: Person and ProfessionalService schemas are handled in StructuredData component on homepage
  // This prevents duplicate schemas across all pages

  return (
    <html lang="en">
      <head>
        <meta name="theme-color" content="#0A0A0A" />
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        {/* Paystack-style Animated Background Gradients */}
        <div className="paystack-gradient"></div>
        <div className="floating-orb orb-1"></div>
        <div className="floating-orb orb-2"></div>
        <div className="floating-orb orb-3"></div>
        <div className="floating-orb orb-4"></div>
        <div className="cursor-glow" id="cursor-glow"></div>
        
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}