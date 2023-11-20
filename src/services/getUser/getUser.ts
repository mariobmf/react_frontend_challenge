import { User } from '@/interfaces/user.interface';
import { database } from '../db';

export async function getUser(userId: string): Promise<User | null> {
  const rawUser = await database.users.get({
    id: Number(userId),
  });
  return rawUser
    ? {
        id: rawUser.id!,
        name: rawUser.name,
        cpf: rawUser.cpf,
        phone: rawUser.phone,
        email: rawUser.email,
      }
    : null;
}
