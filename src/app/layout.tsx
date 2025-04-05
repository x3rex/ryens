import '@/styles/globals.css';
import type { Metadata } from 'next';

// Replace static fonts with variable fonts
const inter = {
  variable: '--font-inter',
};

const outfit = {
  variable: '--font-outfit',
};

// Add variable fonts
const fontVariableImport = `
@import url('https://fonts.googleapis.com/css2?family=Outfit:wght@100..900&family=Inter:wght@100..900&family=Fraunces:ital,opsz,wght,SOFT,WONK@0,9..144,100..900,0..100,0..1;1,9..144,100..900,0..100,0..1&display=swap');
`;

export const metadata: Metadata = {
  title: 'RYENS | Modern IT Agency',
  description: 'RYENS is a leading IT agency specializing in Digital Marketing, App Development, Ecommerce and Amazon FBA solutions.',
  keywords: ['IT Agency', 'Digital Marketing', 'App Development', 'Ecommerce', 'Amazon FBA'],
  authors: [{ name: 'RYENS Team' }],
  creator: 'RYENS',
  publisher: 'RYENS',
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
  metadataBase: new URL('https://ryens.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://ryens.com',
    title: 'RYENS | Modern IT Agency',
    description: 'RYENS is a leading IT agency specializing in Digital Marketing, App Development, Ecommerce and Amazon FBA solutions.',
    siteName: 'RYENS',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'RYENS IT Agency',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'RYENS | Modern IT Agency',
    description: 'RYENS is a leading IT agency specializing in Digital Marketing, App Development, Ecommerce and Amazon FBA solutions.',
    images: ['/images/twitter-image.jpg'],
    creator: '@ryensagency',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable}`}>
      <head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#0F52BA" />
        <style dangerouslySetInnerHTML={{ __html: fontVariableImport }} />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
} 