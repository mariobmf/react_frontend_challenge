'use client';
import Image from 'next/image';

const USERS = [
  {
    name: 'Joao da Silva',
    cpf: '26899337649',
    phone: '4233335555',
    email: 'joao@joaosilva.com.br',
  },
  {
    name: 'Maria Antonieta',
    cpf: '65138896180',
    phone: '1255553333',
    email: 'maria@mariaantonieta.com.br',
  },
  {
    name: 'Luiz Souza',
    cpf: '32420496329',
    phone: '1144446666',
    email: 'luiz@luizsouza.com.br',
  },
];

export default function Home() {
  return (
    <div className="container grid max-w-[900px] grid-cols-auto-fit-250 gap-4 p-4">
      {USERS.map(user => (
        <div
          key={user.cpf}
          className="relative max-w-[350px] rounded-md bg-custom-gray-50 p-4 shadow-md"
        >
          <h2>{user.name}</h2>
          <div className="ml-2 mt-1">
            <p className="text-sm">
              <strong>CPF:</strong> {user.cpf}
            </p>
            <p className="text-sm">
              <strong>Telefone:</strong> {user.phone}
            </p>
            <p className="text-sm">
              <strong>Email:</strong> {user.email}
            </p>
          </div>
          <button className="absolute right-4 top-4 hover:opacity-70">
            <Image
              src="trash.svg"
              width={24}
              height={24}
              alt="Ícone de Lixeira"
            />
          </button>
        </div>
      ))}
    </div>
  );
}
