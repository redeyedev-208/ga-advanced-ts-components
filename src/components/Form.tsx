// This will be a wrapper component to wrapper everything
// It will also handle the logic for a form submission

import { type ComponentPropsWithRef } from 'react';

// so it will handle some logic and acts as an alias "FormProps"
// this should handle the form submission at the end of the day
type FormProps = ComponentPropsWithRef<'form'>;

export default function Form(props: FormProps) {
  return (
    <form
      action=''
      {...props}
    >
      {props.children}
    </form>
  );
}
