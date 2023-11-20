import { updateUser } from '../updateUser';
import { database } from '../db';

jest.mock('../db', () => ({
  database: {
    users: {
      update: jest.fn(),
    },
  },
}));

describe('updateUser', () => {
  it('should update a user in the database', async () => {
    const user = {
      id: '123',
      name: 'Test User',
      email: 'test@example.com',
      cpf: '000.000.000-00',
      phone: '(00) 0 0000-0000',
    };

    await updateUser(user);

    expect(database.users.update).toHaveBeenCalledWith(user.id, {
      name: user.name,
      email: user.email,
      phone: user.phone,
      cpf: user.cpf,
    });
  });
});
