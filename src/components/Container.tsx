// Polymorphic Component:
// We want to share some common logic, styling, etc
// Fancy word for a simple wrapper that can do the stuffs
import {
  type ReactNode,
  type ElementType,
  type ComponentPropsWithoutRef,
} from 'react';

// "as" receives the indentifier of the component
// value should be a valid indentifier of the component used in jsx
// ComponentPropsWithoutRef not only gives us default props of built in elements
// it also allows us to take in custom components, but which kind will be passed "as"
// so we create our own type to bypass this making a generic type "allow us to connect
// various types and play nicely default of type Type
// is the identifier that is set as "as" so that T can recieve and we can extract the incoming component identifier
type ContainerProps<T extends ElementType> = {
  as?: ElementType;
  children: ReactNode;
} & ComponentPropsWithoutRef<T>;

// rewrapping the name just to have a constant as a variable with an upper case character
// we can also use "as" right inside the destructing expression: "{as: Component}:ContainerProps"
// now in our ContainerProps we don't know the type and address that in the following manner
// first <> is used to accept a generic value: turns a non generic function into a generic function
export default function Container<C extends ElementType>({
  as,
  children,
  ...props
}: ContainerProps<C>) {
  const Component = as || 'div';
  return (
    <Component
      // this is how we would use a general style on a polymorphic component
      // className='container'
      {...props}
    >
      {children}
    </Component>
  );
}
