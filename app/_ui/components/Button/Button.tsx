import React from 'react';

import './button.css';

type ButtonProps = React.ComponentPropsWithoutRef<'button'> & {
  // TODO: Add style variants...
};

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(({ children, ...props }, ref) => {
  return (
    <button ref={ref} className="nl-button" {...props}>
      {children}
    </button>
  );
});

export default Button;

Button.displayName = 'Button';
