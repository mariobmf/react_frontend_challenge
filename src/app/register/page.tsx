'use client';
import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation';
import { useCreateUser } from '@/hooks/useCreateUser';
import { UserForm, UserFormDataProps } from '@/components/UserForm';

export default function Register() {
  const router = useRouter();
  const { mutateAsync: handleCreateUser, isPending: createUserIsLoading } =
    useCreateUser();

  const handleFormSubmit = async (formData: UserFormDataProps) => {
    try {
      await handleCreateUser(formData);
      toast.success('Usuário cadastrado com sucesso');
      router.push('/');
    } catch (error) {
      toast.error('Erro ao cadastrar usuário');
    }
  };
  return (
    <div className="flex h-full w-full flex-col items-center gap-8 p-4">
      <h1>Cadastrar novo usuário</h1>
      <UserForm
        type="create"
        onSubmit={handleFormSubmit}
        isLoading={createUserIsLoading}
      />
    </div>
  );
}
