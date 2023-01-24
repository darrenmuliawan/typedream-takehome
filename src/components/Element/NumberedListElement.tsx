import React from 'react';
import { RenderElementProps } from 'slate-react';

interface NumberedListElementProps {
  style: any;
}

type Props = NumberedListElementProps & RenderElementProps;

export const NumberedListElement = (props: Props) => {
  const {
    children,
    attributes,
    style
  } = props;

  return (
    <ol style={style} {...attributes}>
      {children.map((child: any, index: number) => (
        <li key={index}>{child}</li>
      ))}
    </ol>
  )
}