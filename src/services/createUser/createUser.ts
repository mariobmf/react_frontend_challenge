import { User } from '@/interfaces/user.interface';
import { database } from '../db';

export const createUser = async (user: Omit<User, 'id'>) => {
  await database.users.add({
    ...user,
  });
};
