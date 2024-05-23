import { type ComponentPropsWithoutRef } from 'react';

// discriminated union will do the trick for us
type ButtonProps = {
  el: 'button';
} & ComponentPropsWithoutRef<'button'>;

type AnchorProps = {
  el: 'link';
} & ComponentPropsWithoutRef<'a'>;

// we want to return either a button that is a link or a button
export default function Button(props: ButtonProps | AnchorProps) {
  // const { el, ...otherProps } = props;
  if (props.el === 'link') {
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
