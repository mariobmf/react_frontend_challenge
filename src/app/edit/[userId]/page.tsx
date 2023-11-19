'use client';
import { toast } from 'react-toastify';
import { redirect, useRouter } from 'next/navigation';
import { UserForm, UserFormDataProps } from '@/components/UserForm';
import { useGetUser } from '@/hooks/useGetUser';
import { useUpdateUser } from '@/hooks/useUpdateUser';
import { Spinner } from '@/components/Spinner';

interface EditProps {
  params: {
    userId: string;
  };
}

export default function Edit({ params: { userId } }: EditProps) {
  const router = useRouter();
  const { data: user, isLoading: getUserIsLoading } = useGetUser({ userId });

  const { mutateAsync: handleUpdateUser, isPending: updateUserIsLoading } =
    useUpdateUser();

  const handleFormSubmit = async (formData: UserFormDataProps) => {
    try {
      await handleUpdateUser({
        id: userId,
        ...formData,
      });
      toast.success('Usuário atualizado com sucesso');
      router.push('/');
    } catch (error) {
      toast.error('Erro ao atualizar usuário');
    }
  };

  if (!user && !getUserIsLoading) {
    return redirect('/users');
  }
  return (
    <div className="relative flex h-full w-full flex-col items-center gap-8 p-4">
      {user ? (
        <>
          <h1>Atualizar usuário</h1>
          <UserForm
            type="update"
            onSubmit={handleFormSubmit}
            isLoading={updateUserIsLoading}
            defaultValues={user}
          />
        </>
      ) : (
        <Spinner />
      )}
    </div>
  );
}
