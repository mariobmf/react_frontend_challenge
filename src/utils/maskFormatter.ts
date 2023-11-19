const phoneNumberMask = (value: string | number) => {
  const valueString = value.toString();
  let mask = valueString.replace(/\D/g, '');
  if (mask.length === 11) {
    mask = mask.replace(/^(\d{2})(\d)(\d{4})(\d{4})/, '($1) $2 $3-$4');
  } else {
    mask = mask.replace(/^(\d{2})(\d{4})(\d{4})/, '($1) $2-$3');
  }
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
