import { User } from '@/interfaces/user.interface';
import { database } from '../db';

export async function getUsers(): Promise<User[]> {
  const rawUsers = await database.users.toArray();
  return rawUsers.map(rawUser => ({
    id: rawUser.id!,
    name: rawUser.name,
    cpf: rawUser.cpf,
    phone: rawUser.phone,
    email: rawUser.email,
  }));
}
