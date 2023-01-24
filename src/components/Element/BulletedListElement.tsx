import React from 'react';
import { RenderElementProps } from 'slate-react';

interface BulletedListElementProps {
  style: any;
}

type Props = BulletedListElementProps & RenderElementProps;

export const BulletedListElement = (props: Props) => {
  const {
    children,
    attributes,
    style
  } = props;

  return (
    <ul style={style} {...attributes}>
      {children}
    </ul>
  )
}