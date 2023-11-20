import * as yup from 'yup';
import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { InputText } from '@/components/InputText';
import { InputTextMask } from '@/components/InputTextMask';
import { Button } from '@/components/Button';
import { cpfMask, phoneNumberMask } from '@/utils/maskFormatter';

export type UserFormDataProps = {
  name: string;
  email: string;
  cpf: string;
  phone: string;
};

type FormType = 'create' | 'update';

interface UserFormProps {
  onSubmit: (data: UserFormDataProps) => void;
  isLoading?: boolean;
  type: FormType;
  defaultValues?: UserFormDataProps;
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
      .min(14, 'Número de telefone inválido')
      .required('Número obrigatório'),
  })
  .required();

export function UserForm({
  onSubmit,
  isLoading = false,
  type,
  defaultValues,
}: UserFormProps) {
  const defaultValuesFormatted = defaultValues
    ? {
        ...defaultValues,
        cpf: cpfMask(defaultValues.cpf),
        phone: phoneNumberMask(defaultValues.phone),
      }
    : undefined;

  const {
    handleSubmit,
    register,
    watch,
    formState: { errors, isDirty, isValid },
  } = useForm<UserFormDataProps>({
    resolver: yupResolver(schema),
    mode: 'onBlur',
    defaultValues:
      (type === 'update' && defaultValuesFormatted) ||
      ({} as UserFormDataProps),
  });

  const name = watch('name');
  const email = watch('email');
  const cpf = watch('cpf');
  const phone = watch('phone');

  const handleFormSubmit: SubmitHandler<UserFormDataProps> = async formData => {
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
        label={type === 'create' ? 'Cadastrar' : 'Atualizar'}
        type="submit"
        isLoading={isLoading}
        className="mt-8"
        disabled={!isDirty || !isValid}
      />
    </form>
  );
}
