import type { Metadata } from 'next';
import './globals.css';
import { roboto } from './fonts';
import { TopMenu } from '@/components/TopMenu';

export const metadata: Metadata = {
  title: 'Front-end Challenge',
  description: 'Front-end Challenge',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={roboto.className}>
      <body className="relative flex h-full w-full flex-col bg-gradient-to-t from-gray-100 to-white">
        <TopMenu />
        {children}
      </body>
    </html>
  );
}
