'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

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

export function TopMenu() {
  const pathname = usePathname();

  return (
    <nav className="flex items-center justify-center gap-7 p-7 sm:justify-end">
      {MENU_ITEMS.map((item, index) => (
        <Link
          key={index}
          href={item.href}
          data-state={pathname === item.href ? 'active' : ''}
          className="border-custom-gray-100 pb-1 text-lg font-medium text-custom-gray-500 hover:opacity-70 data-[state=active]:border-b-2 data-[state=active]:border-custom-cyan-500 data-[state=active]:font-bold"
        >
          {item.label}
        </Link>
      ))}
    </nav>
  );
}
