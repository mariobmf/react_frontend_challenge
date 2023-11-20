'use client';
import Image from 'next/image';
import { useCallback } from 'react';
import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation';
import { Card } from '@/components/Card';
import { Spinner } from '@/components/Spinner';
import { useDeleteUser } from '@/hooks/useDeleteUser';
import { useListUsers } from '@/hooks/useListUsers';
import { UserCard } from './components/UserCard';

export default function Users() {
  const router = useRouter();
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

  const updateUser = useCallback(
    async (userId: string) => {
      router.push(`/edit/${userId}`);
    },
    [router],
  );

  return (
    <div className="flex w-full justify-center">
      <div className="container grid max-w-[900px] auto-rows-fr grid-cols-[repeat(auto-fit,minmax(250px,1fr))] justify-items-center gap-4 p-4">
        {users && !createUserIsLoading ? (
          <>
            {users.map(user => (
              <Card key={user.id} className="min-h-[124px]">
                <UserCard
                  onDeleteUser={deleteUser}
                  onUpdateUser={updateUser}
                  user={user}
                  deleteUserIsLoading={deleteUserIsLoading}
                />
              </Card>
            ))}
            <Card className="min-h-[124px]">
              <button
                onClick={() => router.push('/register')}
                className="flex h-full w-full items-center justify-center gap-3 hover:opacity-70"
              >
                <Image
                  src="add.svg"
                  width={50}
                  height={50}
                  alt="Ícone de Lixeira"
                />
                <span className="text-lg font-medium">Cadastrar</span>
              </button>
            </Card>
          </>
        ) : (
          <Spinner />
        )}
      </div>
    </div>
  );
}
