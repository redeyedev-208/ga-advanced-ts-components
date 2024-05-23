import { type ComponentPropsWithoutRef } from 'react';

type InputProps = {
  label: string;
  id: string;
} & ComponentPropsWithoutRef<'input'>;

// We want to be able to use this anywhere we want for an input field
// This is a wrapper component that we can set up the way we want
// So we are able to set our own custom props but also bring in all the goodness
// From using the ComponentPropsWithoutRef <'input'> which gives us all the input stuff
export default function Input({ label, id, ...props }: InputProps) {
  return (
    <p>
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        {...props}
      />
    </p>
  );
}
