import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { DeleteDialog } from '.';

describe('<DeleteDialog />', () => {
  const user = {
    id: '1',
    name: 'Luiz Souza',
    cpf: '32420496329',
    phone: '1144446666',
    email: 'luiz@luizsouza.com.br',
  };
  const mockHandleDelete = jest.fn();
  const mockHandleCancel = jest.fn();

  it('should render default correctly', () => {
    render(
      <DeleteDialog onDelete={mockHandleDelete} onCancel={mockHandleCancel} />,
    );
    const title = screen.getByText('Tem certeza que deseja excluir o usuário?');
    const buttonCancel = screen.getByRole('button', {
      name: 'Cancelar',
    });
    const buttonDelete = screen.getByRole('button', {
      name: 'Excluir',
    });
    expect(title).toBeVisible();
    expect(buttonCancel).toBeVisible();
    expect(buttonDelete).toBeVisible();
  });

  it('should call the delete function', async () => {
    render(
      <DeleteDialog onDelete={mockHandleDelete} onCancel={mockHandleCancel} />,
    );
    const buttonDelete = screen.getByRole('button', {
      name: 'Excluir',
    });
    await userEvent.click(buttonDelete);
    expect(mockHandleDelete).toHaveBeenCalledTimes(1);
  });
  it('should call the cancel function', async () => {
    render(
      <DeleteDialog onDelete={mockHandleDelete} onCancel={mockHandleCancel} />,
    );
    const buttonCancel = screen.getByRole('button', {
      name: 'Cancelar',
    });
    await userEvent.click(buttonCancel);
    expect(mockHandleCancel).toHaveBeenCalledTimes(1);
  });
});
