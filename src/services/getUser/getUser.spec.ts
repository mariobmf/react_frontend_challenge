import { getUser } from '../getUser';
import { database } from '../db';

const userData = {
  id: 1,
  name: 'Test User',
  email: 'test@example.com',
  cpf: '000.000.000-00',
  phone: '(00) 0 0000-0000',
};

jest.mock('../db', () => ({
  database: {
    users: {
      get: jest.fn().mockImplementation(props => {
        return props.id === 1 ? userData : null;
      }),
    },
  },
}));

describe('getUser', () => {
  it('should get a user from the database', async () => {
    const user = await getUser('1');
    expect(database.users.get).toHaveBeenCalledWith({ id: 1 });
    expect(user).toEqual(userData);
  });
  it('should return null if the user is not found in the database', async () => {
    const user = await getUser('2');
    expect(database.users.get).toHaveBeenCalledWith({ id: 2 });
    expect(user).toBeNull();
  });
});
