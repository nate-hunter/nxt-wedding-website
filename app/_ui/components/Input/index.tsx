'use client';

import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  fullWidth?: boolean;
}

const Input: React.FC<InputProps> = ({ label, error, fullWidth = false, className = '', ...props }) => {
  const baseStyles = 'block rounded-md border-gray-300 shadow-sm focus:border-black focus:ring-black sm:text-sm';
  const width = fullWidth ? 'w-full' : '';

  return (
    <div className={`${fullWidth ? 'w-full' : ''}`}>
      {label && <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>}
      <input className={`${baseStyles} ${width} ${error ? 'border-red-500' : ''} ${className}`} {...props} />
      {error && <p className="mt-1 text-sm text-red-600">{error}</p>}
    </div>
  );
};

export default Input;
