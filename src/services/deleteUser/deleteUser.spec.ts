import { deleteUser } from '../deleteUser';
import { database } from '../db';

jest.mock('../db', () => ({
  database: {
    users: {
      delete: jest.fn(),
    },
  },
}));

describe('deleteUser', () => {
  it('should delete a user from the database', async () => {
    const userId = '123';

    await deleteUser(userId);

    expect(database.users.delete).toHaveBeenCalledWith(userId);
  });
});
