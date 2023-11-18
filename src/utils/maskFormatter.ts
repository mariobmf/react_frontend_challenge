const phoneNumberMask = (value: string | number) => {
  const valueString = value.toString();
  let mask = valueString.replace(/\D/g, '');
  mask = mask.replace(/^(\d{2})(\d)/g, '($1) $2');
  mask = mask.replace(/(\d{1})(\d{4})/, '$1 $2');
  mask = mask.replace(/(\d)(\d{4})$/, '$1-$2');
  return mask;
};

const cpfMask = (value: string | number) => {
  const valueString = value.toString();
  let mask = valueString.replace(/\D/g, '');
  mask = mask.replace(/(\d{3})(\d)/, '$1.$2');
  mask = mask.replace(/(\d{3})(\d)/, '$1.$2');
  mask = mask.replace(/(\d{3})(\d{2})$/, '$1-$2');
  return mask;
};

export { phoneNumberMask, cpfMask };
