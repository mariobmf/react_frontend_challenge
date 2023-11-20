import { database } from '../db';

export const deleteUser = async (userId: string) => {
  await database.users.delete(userId);
};
