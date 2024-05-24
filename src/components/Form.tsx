// This will be a form wrapper component to wrap everything
// It will also handle the logic for a form submission

import { type FormEvent, type ComponentPropsWithRef } from 'react';

// so it will handle some logic and acts as an alias "FormProps"
// this should handle the form submission at the end of the day
// we then merge the need props of the form data
// we don't know the shape of the data so we build an unkwown type
type FormProps = ComponentPropsWithRef<'form'> & {
  onSave: (value: unknown) => void;
};

// we need to destructure the props for the onSave to remove the unknown type error
export default function Form({ onSave, children, ...otherProps }: FormProps) {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    // Let's add the logic to extract the data
    // This allows us to get the values of all the input fields
    // Grouping them into a data {} object however they must receive a name prop
    const formData = new FormData(event.currentTarget);
    // This allows us to simplify the formData so that we can access it
    const data = Object.fromEntries(formData);
    // this change right here allows to add the needed handler on the App.tsx component
    onSave(data);
  }

  return (
    <form
      onSubmit={handleSubmit}
      {...otherProps}
    >
      {children}
    </form>
  );
}
