import * as yup from 'yup';
import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { InputText } from '@/components/InputText';
import { InputTextMask } from '@/components/InputTextMask';
import { Button } from '@/components/Button';

export type FormDataProps = {
  name: string;
  email: string;
  cpf: string;
  phone: string;
};

interface RegisterFormProps {
  onSubmit: (data: FormDataProps) => void;
  isLoading?: boolean;
}

const schema = yup
  .object({
    name: yup
      .string()
      .required('Nome obrigatório')
      .min(3, 'Campo deve ter no mínimo 3 caracteres'),
    email: yup.string().required('Email obrigatório').email('Email inválido'),
    cpf: yup.string().min(14, 'CPF inválido').required('CPF obrigatório'),
    phone: yup
      .string()
      .min(16, 'Número de telefone inválido')
      .required('Número obrigatório'),
  })
  .required();

export function RegisterForm({
  onSubmit,
  isLoading = false,
}: RegisterFormProps) {
  const {
    handleSubmit,
    register,
    watch,
    formState: { errors, isDirty, isValid },
  } = useForm<FormDataProps>({
    resolver: yupResolver(schema),
    mode: 'onBlur',
  });

  const name = watch('name');
  const email = watch('email');
  const cpf = watch('cpf');
  const phone = watch('phone');

  const handleFormSubmit: SubmitHandler<FormDataProps> = async formData => {
    onSubmit(formData);
  };

  return (
    <form
      onSubmit={handleSubmit(handleFormSubmit)}
      className="flex w-full flex-col gap-4 sm:w-[400px]"
    >
      <InputText
        label="Nome completo (sem abreviações)"
        {...register('name')}
        error={errors.name}
        filled={!!name}
        aria-label="Nome"
      />
      <InputText
        label="E-mail"
        {...register('email')}
        error={errors.email}
        filled={!!email}
        aria-label="Email"
      />
      <InputTextMask
        label="CPF"
        mask="cpf"
        {...register('cpf')}
        error={errors.cpf}
        filled={!!cpf}
        aria-label="CPF"
      />
      <InputTextMask
        label="Telefone"
        mask="cell_phone"
        {...register('phone')}
        error={errors.phone}
        filled={!!phone}
        aria-label="Telefone"
      />
      <Button
        label="Cadastrar"
        type="submit"
        isLoading={isLoading}
        className="mt-8"
        disabled={!isDirty || !isValid}
      />
    </form>
  );
}
