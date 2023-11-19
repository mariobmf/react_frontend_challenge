import { act, logRoles, render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { RegisterForm } from '../RegisterForm';

describe('<RegisterForm />', () => {
  const mockSubmitForm = jest.fn();
  it('should render default correctly', () => {
    render(<RegisterForm onSubmit={mockSubmitForm} />);
    const inputName = screen.getByRole('textbox', { name: 'Nome' });
    const inputEmail = screen.getByRole('textbox', { name: 'Email' });
    const inputCpf = screen.getByRole('textbox', { name: 'CPF' });
    const inputPhone = screen.getByRole('textbox', { name: 'Telefone' });
    const buttonSubmit = screen.getByRole('button');
    expect(inputName).toBeVisible();
    expect(inputEmail).toBeVisible();
    expect(inputCpf).toBeVisible();
    expect(inputPhone).toBeVisible();
    expect(buttonSubmit).toBeVisible();
    expect(buttonSubmit).not.toBeEnabled();
  });
  it('should render the submit button enabled', async () => {
    render(<RegisterForm onSubmit={mockSubmitForm} />);
    const inputName = screen.getByRole('textbox', { name: 'Nome' });
    const inputEmail = screen.getByRole('textbox', { name: 'Email' });
    const inputCpf = screen.getByRole('textbox', { name: 'CPF' });
    const inputPhone = screen.getByRole('textbox', { name: 'Telefone' });
    const buttonSubmit = screen.getByRole('button');

    await userEvent.type(inputName, 'Luiz Souza');
    await userEvent.type(inputEmail, 'luiz@luizsouza.com.br');
    await userEvent.type(inputCpf, '32420496329');
    await userEvent.type(inputPhone, '11944446666');
    await userEvent.click(buttonSubmit);

    expect(buttonSubmit).toBeEnabled();
  });
  it('should submit form data', async () => {
    render(<RegisterForm onSubmit={mockSubmitForm} />);
    const inputName = screen.getByRole('textbox', { name: 'Nome' });
    const inputEmail = screen.getByRole('textbox', { name: 'Email' });
    const inputCpf = screen.getByRole('textbox', { name: 'CPF' });
    const inputPhone = screen.getByRole('textbox', { name: 'Telefone' });
    const buttonSubmit = screen.getByRole('button');

    await userEvent.type(inputName, 'Luiz Souza');
    await userEvent.type(inputEmail, 'luiz@luizsouza.com.br');
    await userEvent.type(inputCpf, '32420496329');
    await userEvent.type(inputPhone, '11944446666');
    await userEvent.click(buttonSubmit);

    expect(mockSubmitForm).toHaveBeenCalledWith({
      name: 'Luiz Souza',
      email: 'luiz@luizsouza.com.br',
      cpf: '324.204.963-29',
      phone: '(11) 9 4444-6666',
    });
  });
});
