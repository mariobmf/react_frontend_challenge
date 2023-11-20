import { User } from '@/interfaces/user.interface';
import { database } from '../db';

export const updateUser = async (user: User) => {
  await database.users.update(user.id, {
    name: user.name,
    email: user.email,
    phone: user.phone,
    cpf: user.cpf,
  });
};
