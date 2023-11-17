import { User } from '@/interfaces/user.interface';
import { createUser } from '@/services/createUser';
import { useMutation, useQueryClient } from '@tanstack/react-query';

export function useCreateUser() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (props: Omit<User, 'id'>) =>
      createUser({
        ...props,
      }),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['users'] }),
  });
}
