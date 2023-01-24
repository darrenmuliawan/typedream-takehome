import React from 'react';
import { RenderElementProps } from 'slate-react';

interface HeadingTwoElementProps {
  style: any;
}

type Props = HeadingTwoElementProps & RenderElementProps;

export const HeadingTwoElement = (props: Props) => {
  const {
    children,
    attributes,
    style
  } = props;

  return (
    <h2 style={style} {...attributes}>
      {children}
    </h2>
  )
}