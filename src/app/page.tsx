'use client';
import { Spinner } from '@/components/Spinner';
import { useDeleteUser } from '@/hooks/useDeleteUser';
import { useListUsers } from '@/hooks/useListUsers';
import Image from 'next/image';
import { useCallback } from 'react';
import { toast } from 'react-toastify';

export default function Home() {
  const { data: users, isLoading: createUserIsLoading } = useListUsers();
  const { mutateAsync: handleDeleteUser, isPending: deleteUserIsLoading } =
    useDeleteUser();

  const deleteUser = useCallback(
    async (id: string) => {
      try {
        await handleDeleteUser(id);
        toast.success('Usuário deletado com sucesso!');
      } catch (error) {
        toast.error('Erro ao deletar usuário!');
      }
    },
    [handleDeleteUser],
  );

  return (
    <div className="container grid max-w-[900px] grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-4 p-4">
      {users && !createUserIsLoading ? (
        users.map(user => (
          <div
            key={user.id}
            className="relative max-w-[350px] rounded-md bg-custom-gray-50 p-4 shadow-md"
          >
            {deleteUserIsLoading ? (
              <Spinner className="h-20 w-20" />
            ) : (
              <>
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
              </>
            )}
            <button
              className="absolute right-4 top-4 hover:opacity-70"
              onClick={() => deleteUser(user.id)}
            >
              <Image
                src="trash.svg"
                width={24}
                height={24}
                alt="Ícone de Lixeira"
              />
            </button>
          </div>
        ))
      ) : (
        <Spinner className="h-20 w-20" />
      )}
    </div>
  );
}
