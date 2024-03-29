import './globals.css';
import { Noto_Sans_JP } from 'next/font/google';
import { Suspense } from 'react';

import Footer from './Footer';
import Header from './Header';
import Loading from './loading';

import type { Metadata } from 'next';

const notoSansJp = Noto_Sans_JP({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Next micro Blog',
  description: 'Generated by create next app',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='ja'>
      <body className={`container mx-auto bg-slate-700 text-slate-50  ${notoSansJp.className}`}>
        <div className='flex flex-col min-h-screen'>
          <Header />
          <main className='flex-grow'>
            <Suspense fallback={<Loading />}>{children}</Suspense>
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
