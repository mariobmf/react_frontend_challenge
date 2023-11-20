import { getUsers } from '../getUsers';
import { database } from '../db';

const usersData = [
  {
    id: '1',
    name: 'Test User',
    email: 'test@example.com',
    cpf: '000.000.000-00',
    phone: '(00) 0 0000-0000',
  },
  {
    id: '2',
    name: 'Test User 2',
    email: 'test2@example.com',
    cpf: '000.000.000-02',
    phone: '(00) 0 0000-0002',
  },
];

jest.mock('../db', () => ({
  database: {
    users: {
      toArray: jest.fn().mockImplementation(() => usersData),
    },
  },
}));

describe('getUsers', () => {
  it('should get all users from the database', async () => {
    const users = await getUsers();

    expect(database.users.toArray).toHaveBeenCalled();
    expect(users).toEqual(usersData);
  });
});
