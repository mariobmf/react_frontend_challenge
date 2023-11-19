import { render, screen } from '@testing-library/react';
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
  const mockHandleUpdateUser = jest.fn();

  it('should render default correctly', () => {
    render(
      <UserCard
        user={user}
        onUpdateUser={mockHandleUpdateUser}
        onDeleteUser={mockHandleDeleteUser}
      />,
    );
    const name = screen.getByText(user.name);
    const cpf = screen.getByText('324.204.963-29');
    const phone = screen.getByText('(11) 4444-6666');
    const email = screen.getByText(user.email);
    const buttonDelete = screen.getByRole('button', {
      name: 'Deletar Usuário',
    });
    const buttonEdit = screen.getByRole('button', {
      name: 'Editar Usuário',
    });
    expect(name).toBeVisible();
    expect(cpf).toBeVisible();
    expect(phone).toBeVisible();
    expect(email).toBeVisible();
    expect(buttonDelete).toBeVisible();
    expect(buttonEdit).toBeVisible();
  });

  it('should call the delete user function', async () => {
    render(
      <UserCard
        user={user}
        onUpdateUser={mockHandleUpdateUser}
        onDeleteUser={mockHandleDeleteUser}
      />,
    );
    const buttonDelete = screen.getByRole('button', {
      name: 'Deletar Usuário',
    });
    await userEvent.click(buttonDelete);
    expect(mockHandleDeleteUser).toHaveBeenCalledTimes(1);
  });

  it('should call the update user function', async () => {
    render(
      <UserCard
        user={user}
        onUpdateUser={mockHandleUpdateUser}
        onDeleteUser={mockHandleDeleteUser}
      />,
    );
    const buttonEdit = screen.getByRole('button', {
      name: 'Editar Usuário',
    });
    await userEvent.click(buttonEdit);
    expect(mockHandleUpdateUser).toHaveBeenCalledTimes(1);
  });
});
