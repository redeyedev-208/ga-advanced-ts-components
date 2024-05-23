// Polymorphic Component:
// We want to share some common logic, styling, etc
// Fancy word for a simple wrapper that can do the stuffs

import { type ElementType } from 'react';

// "as" receives the indentifier of the component
// value should be a valid indentifier of the component used in jsx
type ContainerProps = {
  as: ElementType;
};

// rewrapping the name just to have a constant as a variable with an upper case character
// we can also use "as" right inside the destructing expression: "{as: Component}:ContainerProps"
export default function Container({ as }: ContainerProps) {
  const Component = as;
  return <Component />;
}
