import { createUser } from '../createUser';
import { database } from '../db';

jest.mock('../db', () => ({
  database: {
    users: {
      add: jest.fn(),
    },
  },
}));

describe('createUser', () => {
  it('should add a user to the database', async () => {
    const user = {
      name: 'Test User',
      email: 'test@example.com',
      cpf: '000.000.000-00',
      phone: '(00) 0 0000-0000',
    };

    await createUser(user);

    expect(database.users.add).toHaveBeenCalledWith(user);
  });
});
