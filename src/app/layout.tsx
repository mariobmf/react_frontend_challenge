import 'react-toastify/dist/ReactToastify.css';
import './globals.css';
import type { Metadata } from 'next';
import { roboto } from './fonts';
import { ToastContainer } from 'react-toastify';
import { TopMenu } from '@/components/TopMenu';
import { AppProvider } from '@/providers';

export const metadata: Metadata = {
  title: 'Front-end Challenge',
  description: 'Front-end Challenge',
};

const MENU_ITEMS = [
  {
    label: 'Usuários',
    href: '/users',
  },
  {
    label: 'Cadastro',
    href: '/register',
  },
];

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={roboto.className}>
      <body className="relative flex h-full w-full flex-col bg-gradient-to-t from-gray-100 to-white">
        <AppProvider>
          <ToastContainer />
          <TopMenu items={MENU_ITEMS} />
          {children}
        </AppProvider>
      </body>
    </html>
  );
}
