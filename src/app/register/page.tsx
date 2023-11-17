'use client';
import * as yup from 'yup';
import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { InputText } from '@/components/InputText';
import { InputTextMask } from '@/components/InputTextMask';
import { Button } from '@/components/Button';

type RegistrationFormProps = {
  name: string;
  email: string;
  cpf: string;
  phoneNumber: string;
};

const schema = yup
  .object({
    name: yup.string().required('Nome obrigatório'),
    email: yup.string().required('Email obrigatório').email('Email inválido'),
    cpf: yup.string().min(14, 'CPF inválido').required('CPF obrigatório'),
    phoneNumber: yup
      .string()
      .min(16, 'Número de telefone inválido')
      .required('Número obrigatório'),
  })
  .required();

export default function Register() {
  const {
    handleSubmit,
    register,
    watch,
    formState: { errors },
  } = useForm<RegistrationFormProps>({
    resolver: yupResolver(schema),
  });

  const name = watch('name');
  const email = watch('email');
  const cpf = watch('cpf');
  const phoneNumber = watch('phoneNumber');

  const handleFormSubmit: SubmitHandler<
    RegistrationFormProps
  > = async formData => {
    console.log(formData);
  };
  return (
    <div className="flex h-full w-full items-center justify-center">
      <form
        onSubmit={handleSubmit(handleFormSubmit)}
        className="flex w-[400px] flex-col gap-4"
      >
        <InputText
          label="Nome completo (sem abreviações)"
          {...register('name')}
          error={errors.name}
          filled={!!name}
        />
        <InputText
          label="E-mail"
          {...register('email')}
          error={errors.email}
          filled={!!email}
        />
        <InputTextMask
          label="CPF"
          mask="cpf"
          {...register('cpf')}
          error={errors.cpf}
          filled={!!cpf}
        />
        <InputTextMask
          label="Telefone"
          mask="cell_phone"
          {...register('phoneNumber')}
          error={errors.phoneNumber}
          filled={!!phoneNumber}
        />
        <Button label="Cadastrar" type="submit" />
      </form>
    </div>
  );
}
