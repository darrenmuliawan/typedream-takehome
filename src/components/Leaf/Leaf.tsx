import React from 'react';
import { RenderElementProps, RenderLeafProps } from 'slate-react';

interface LeafProps {
  
}

type Props = LeafProps & RenderLeafProps;

export const Leaf = (props: Props) => {
  const {
    children,
    attributes,
    leaf
  } = props;

  return (
    <span
      {...attributes}
      style={
        { 
          fontWeight: leaf.bold ? 'bold' : 'normal',
          fontStyle: leaf.italic ? 'italic' : 'normal',
          textDecoration: leaf.underline ? 'underline' : 'none' 
        }
      }
    >
      {children}
    </span>
  )
}