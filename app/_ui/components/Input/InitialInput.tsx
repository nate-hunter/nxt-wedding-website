'use client';

import React, { useContext } from 'react';

import { FormFieldContext } from '@/app/_ui/components/FormField/form-field.context';

import './input.css';

type InputProps = React.ComponentPropsWithoutRef<'input'>;

const Input = React.forwardRef<HTMLInputElement, InputProps>(({ ...props }, ref) => {
  const fieldID = useContext(FormFieldContext);
  const style = 'exp-input';
  return <input ref={ref} id={fieldID} className={style} {...props} />;
});

export default Input;

Input.displayName = 'Input';
