'use client';

import { getUsers } from '@/services/getUsers';
import { useQuery } from '@tanstack/react-query';

export function useListUsers() {
  return useQuery({
    queryKey: ['users'],
    queryFn: () => getUsers(),
  });
}
