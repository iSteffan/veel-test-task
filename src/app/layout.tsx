import type { Metadata } from 'next';
import localFont from 'next/font/local';
import { Montserrat } from 'next/font/google';

import { Header } from '@/layout/Header/Header';
import { Footer } from '@/layout/Footer/Footer';

import './globals.css';

const montserrat = Montserrat({
  subsets: ['cyrillic', 'latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-montserrat',
  display: 'swap',
});

const filmP3 = localFont({
  src: [
    {
      path: '../../public/fonts/filmp3-bold.ttf',
      weight: '700',
      style: 'normal',
    },
  ],
  display: 'swap',
  variable: '--font-filmP3',
});

export const metadata: Metadata = {
  title: 'To-do',
  description: 'Veel test task',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable} ${filmP3.variable} flex flex-col min-h-screen`}>
        <Header />

        <main className="flex-1 bg-lemonBg gradient-bg">{children}</main>

        <Footer />
      </body>
    </html>
  );
}
