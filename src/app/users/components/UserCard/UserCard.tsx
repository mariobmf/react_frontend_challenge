import Image from 'next/image';
import { Spinner } from '@/components/Spinner';
import { User } from '@/interfaces/user.interface';
import { cpfMask, phoneNumberMask } from '@/utils/maskFormatter';

interface UserCardProps {
  user: User;
  onDeleteUser: (id: string) => void;
  onUpdateUser: (id: string) => void;
  deleteUserIsLoading?: boolean;
}

export function UserCard({
  user,
  onDeleteUser,
  onUpdateUser,
  deleteUserIsLoading,
}: UserCardProps) {
  if (deleteUserIsLoading)
    return (
      <div className="flex h-full w-full items-center justify-center">
        <Spinner />
      </div>
    );

  return (
    <>
      <h2 className="whitespace-pre-wrap pr-12">{user.name}</h2>
      <div className="ml-2 mt-1">
        <p className="text-sm">
          <strong>CPF:</strong> {cpfMask(user.cpf)}
        </p>
        <p className="text-sm">
          <strong>Telefone:</strong> {phoneNumberMask(user.phone)}
        </p>
        <p className="text-sm">
          <strong>Email:</strong> {user.email}
        </p>
      </div>
      <button
        className="absolute right-12 top-4 hover:opacity-70"
        onClick={() => onUpdateUser(user.id)}
        aria-label="Editar Usuário"
      >
        <Image src="edit.svg" width={20} height={20} alt="Ícone de Lápis" />
      </button>
      <button
        className="absolute right-4 top-4 hover:opacity-70"
        onClick={() => onDeleteUser(user.id)}
        aria-label="Deletar Usuário"
      >
        <Image src="trash.svg" width={20} height={20} alt="Ícone de Lixeira" />
      </button>
    </>
  );
}
