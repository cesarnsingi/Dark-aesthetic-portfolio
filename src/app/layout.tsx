import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import Background3D from '@/components/Background3D';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import './globals.css';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Analytics } from '@vercel/analytics/next';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  preload: true,
});

export const metadata: Metadata = {
  metadataBase: new URL('https://cesarnsingi.com'),

  title: {
    default: 'César Nsingi - Software Engineer',
    template: '%s | César Nsingi',
  },

  description:
    'Cesar Nsingi - Full Stack Developer specializing in MERN stack, React.js, Node.js, and modern web technologies.',

  keywords: [
    'Cesar Nsingi',
    'Software Engineer',
    'Full Stack Developer',
    'MERN Stack',
    'React Developer',
    'Next.js Expert',
    'TypeScript Developer',
    'Node.js Developer',
    'MongoDB Expert',
  ],

  authors: [{ name: 'Cesar Nsingi' }],
  creator: 'Cesar Nsingi',

  manifest: '/manifest.json',

  icons: {
    icon: '/nextjs.png',
    apple: '/nextjs.png',
  },

  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: '/',
    siteName: 'Cesar Nsingi Portfolio',
    title: 'Cesar Nsingi - Full Stack Developer',
    description:
      'Full-stack developer specializing in MERN stack, React.js, Node.js, and modern web technologies.',
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Cesar Nsingi - Full Stack Developer',
    description:
      'Full-stack developer specializing in MERN stack, React.js, Node.js, and modern web technologies.',
    creator: '@cesarricardo__',
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },

  alternates: {
    canonical: '/',
  },

  verification: {
    google: 'googlea4a36904e14398c1',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#000000',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className}>
      <body>
        <div className="min-h-screen flex flex-col">
          <Background3D />
          <Navbar />
          <main className="flex-grow">{children}</main>
          <SpeedInsights />
          <Footer />
        </div>
        <Analytics />
      </body>
    </html>
  );
}
