import Image from 'next/image';
import { Spinner } from '@/components/Spinner';
import { User } from '@/interfaces/user.interface';
import { cpfMask, phoneNumberMask } from '@/utils/maskFormatter';

interface UserCardProps {
  user: User;
  onDeleteUser: (id: string) => void;
  deleteUserIsLoading?: boolean;
}

export default function UserCard({
  user,
  onDeleteUser,
  deleteUserIsLoading,
}: UserCardProps) {
  if (deleteUserIsLoading) return <Spinner className="h-20 w-20" />;

  return (
    <>
      <h2>{user.name}</h2>
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
        className="absolute right-4 top-4 hover:opacity-70"
        onClick={() => onDeleteUser(user.id)}
      >
        <Image src="trash.svg" width={24} height={24} alt="Ícone de Lixeira" />
      </button>
    </>
  );
}
