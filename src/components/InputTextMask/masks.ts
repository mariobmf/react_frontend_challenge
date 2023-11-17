import React from "react";

export function cpf(e: React.ChangeEvent<HTMLInputElement>) {
  e.currentTarget.maxLength = 14;
  let { value } = e.currentTarget;
  if (!value.match(/^(\d{3}).(\d{3}).(\d{3})-(\d{2})$/)) {
    value = value.replace(/\D/g, "");
    value = value.replace(/(\d{3})(\d)/, "$1.$2");
    value = value.replace(/(\d{3})(\d)/, "$1.$2");
    value = value.replace(/(\d{3})(\d{2})$/, "$1-$2");
    e.currentTarget.value = value;
  }
  return e;
}
export function cell_phone(e: React.ChangeEvent<HTMLInputElement>) {
  e.currentTarget.maxLength = 16;
  const { value } = e.currentTarget;
  let mask = value.replace(/\D/g, "");
  mask = mask.replace(/^(\d{2})(\d)/g, "($1) $2");
  mask = mask.replace(/(\d{1})(\d{4})/, "$1 $2");
  mask = mask.replace(/(\d)(\d{4})$/, "$1-$2");
  e.currentTarget.value = mask;
  return mask;
}

export function undefined_mask(e: React.ChangeEvent<HTMLInputElement>) {
  e.currentTarget.maxLength = 100;
  const { value } = e.currentTarget;
  e.currentTarget.value = value;
  return value;
}
