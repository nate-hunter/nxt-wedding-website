'use client';

import React from 'react';

import { FormFieldContext } from './form-field.context';
import { useUniqueID } from '@/app/_ui/hooks/use-unique-id';

type FormFieldProps = {
  children: React.ReactNode;
  label?: string;
};

export default function FormField({ children, label, ...props }: FormFieldProps) {
  const fieldID = useUniqueID();
  return (
    <FormFieldContext.Provider value={fieldID}>
      <div {...props}>
        {label && <FieldLabel htmlFor={fieldID}>{label}</FieldLabel>}
        {children}
      </div>
    </FormFieldContext.Provider>
  );
}

type FieldLabelProps = React.ComponentPropsWithoutRef<'label'> & {
  children: React.ReactNode;
};

function FieldLabel({ children, ...props }: FieldLabelProps) {
  return <label {...props}>{children}</label>;
}
