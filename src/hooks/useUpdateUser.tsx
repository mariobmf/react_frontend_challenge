import { User } from '@/interfaces/user.interface';
import { updateUser } from '@/services/updateUser';
import { useMutation, useQueryClient } from '@tanstack/react-query';

export function useUpdateUser() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (props: User) =>
      updateUser({
        ...props,
      }),
    onSuccess: (_, user) =>
      queryClient.invalidateQueries({ queryKey: ['users', user.id] }),
  });
}
