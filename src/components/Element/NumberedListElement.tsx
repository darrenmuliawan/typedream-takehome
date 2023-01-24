import React from 'react';
import { RenderElementProps, RenderLeafProps } from 'slate-react';

interface NumberedListElementProps {
  style: any;
}

type Props = NumberedListElementProps & RenderElementProps;

export const NumberedListElement = (props: Props) => {
  const {
    children,
    attributes,
    style,
  } = props;


  return (
    <ol style={style} {...attributes}>
      {children}
    </ol>
  )
}