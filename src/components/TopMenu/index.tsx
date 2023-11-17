'use client';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';

const MENU_ITEMS = [
  {
    label: 'Usuários',
    href: '/',
  },
  {
    label: 'Cadastro',
    href: '/register',
  },
];

export function TopMenu() {
  const pathname = usePathname();

  return (
    <nav className="flex h-[60px] items-center justify-end gap-7 px-7">
      {MENU_ITEMS.map((item, index) => (
        <Link
          key={index}
          href={item.href}
          data-state={pathname === item.href ? 'active' : ''}
          className="border-custom-gray-100 pb-2 text-lg text-custom-gray-500 hover:opacity-70 data-[state=active]:border-b-2 data-[state=active]:border-custom-cyan-500 data-[state=active]:font-bold"
        >
          {item.label}
        </Link>
      ))}
    </nav>
  );
}
