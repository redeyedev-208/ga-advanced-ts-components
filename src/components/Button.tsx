import { type ComponentPropsWithoutRef } from 'react';
// Predicate example
// now using our new pattern though we need to address the props more specifically
// this is due to how we have implemented a button, where an anchor is available to a button
// or that a disabled prop is available on an anchor button so we need to merge
// this adjustment guarantees that we cannot have an href on a regular button
// there is a tradeoff as we will still be able to set the "target" on a button
// the abscence is not enough info to deduct that this button is actually a button
type ButtonProps = ComponentPropsWithoutRef<'button'> & {
  href?: never;
};

// what this accomplishes is that we will get strongly typed anchor buttons
// that can't have a disabled prop added to them
type AnchorProps = ComponentPropsWithoutRef<'a'> & {
  href?: string;
};

// type predicate "helper function"
function isAnchorProps(props: ButtonProps | AnchorProps): props is AnchorProps {
  return 'href' in props;
}

// we want to return either a button that is a link or a button
export default function Button(props: ButtonProps | AnchorProps) {
  if (isAnchorProps(props)) {
    return (
      <a
        className='button'
        {...props}
      ></a>
    );
  }

  return (
    <button
      className='button'
      {...props}
    ></button>
  );
}
