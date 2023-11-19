'use client';

import { getUser } from '@/services/getUser';
import { useQuery } from '@tanstack/react-query';

interface useGetUserProps {
  userId: string;
}

export function useGetUser({ userId }: useGetUserProps) {
  return useQuery({
    queryKey: ['users', userId],
    queryFn: () => getUser(userId),
  });
}
