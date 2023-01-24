import React from 'react';
import { RenderElementProps } from 'slate-react';

interface QuoteElementProps {
  style: any;
}

type Props = QuoteElementProps & RenderElementProps;

export const QuoteElement = (props: Props) => {
  const {
    children,
    attributes,
    style
  } = props;

  return (
    <blockquote style={style} {...attributes}>
      <span>{children}</span>
    </blockquote>
  )
}