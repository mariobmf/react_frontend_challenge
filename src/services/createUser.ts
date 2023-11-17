import { User } from '@/interfaces/user.interface';
import { database } from './db';

export const createUser = async (user: User) => {
  await database.users.add({
    ...user,
  });
};
