import {
  type FormEvent,
  type ComponentPropsWithRef,
  useRef,
  useImperativeHandle,
  forwardRef,
} from 'react';

// this is needed in our App.tsx file so we must create a type
// it should be used to describe what the imperative handle is accomplishing
// basically describing the object and what is going down, so we add the signature
export type FormHandle = {
  clear: () => void;
};

type FormProps = ComponentPropsWithRef<'form'> & {
  onSave: (value: unknown) => void;
};

// we can expose this via a feature as function to be called outside
const Form = forwardRef<FormHandle, FormProps>(function Form(
  { onSave, children, ...otherProps },
  ref,
) {
  const form = useRef<HTMLFormElement>(null);

  // this hook is rarely used but we can use it to expose some callable functions as needed
  useImperativeHandle(ref, () => {
    return {
      clear() {
        console.log('CLEARING the stuff');
        form.current?.reset(); // this only executes if it form is not null
      },
    };
  });
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const data = Object.fromEntries(formData);
    onSave(data);
    // here we can call this
    form.current?.reset();
    // in order to expose this to our App.tsx file we need to call an API to do so
  }

  return (
    <form
      onSubmit={handleSubmit}
      {...otherProps}
      ref={form}
    >
      {children}
    </form>
  );
});

export default Form;
