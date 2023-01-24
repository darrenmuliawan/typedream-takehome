import React from 'react';
import { RenderElementProps } from 'slate-react';

interface HeadingOneElementProps {
  style: any;
}

type Props = HeadingOneElementProps & RenderElementProps;

export const HeadingOneElement = (props: Props) => {
  const {
    children,
    attributes,
    style
  } = props;

  return (
    <h1 style={style} {...attributes}>
      {children}
    </h1>
  )
}