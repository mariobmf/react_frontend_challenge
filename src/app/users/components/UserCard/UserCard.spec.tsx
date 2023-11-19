import { act, render, screen, waitFor, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { UserCard } from '../UserCard';

describe('<UserCard />', () => {
  const user = {
    id: '1',
    name: 'Luiz Souza',
    cpf: '32420496329',
    phone: '1144446666',
    email: 'luiz@luizsouza.com.br',
  };
  const mockHandleDeleteUser = jest.fn();

  it('should render default correctly', () => {
    render(<UserCard user={user} onDeleteUser={mockHandleDeleteUser} />);
    const name = screen.getByText(user.name);
    const cpf = screen.getByText('324.204.963-29');
    const phone = screen.getByText('(11) 4444-6666');
    const email = screen.getByText(user.email);
    const buttonDelete = screen.getByRole('button');
    expect(name).toBeVisible();
    expect(cpf).toBeVisible();
    expect(phone).toBeVisible();
    expect(email).toBeVisible();
    expect(buttonDelete).toBeVisible();
  });

  it('should call the delete user function', async () => {
    render(<UserCard user={user} onDeleteUser={mockHandleDeleteUser} />);

    const buttonDelete = screen.getByRole('button');

    act(() => {
      userEvent.click(buttonDelete);
    });

    await waitFor(() => {
      expect(mockHandleDeleteUser).toHaveBeenCalledTimes(1);
    });
  });
});
