import React from 'react';
import { RenderElementProps } from 'slate-react';

interface CodeElementProps {
  style: any;
}

type Props = CodeElementProps & RenderElementProps;

export const CodeElement = (props: Props) => {
  const {
    children,
    attributes,
    style
  } = props;

  return (
    <pre style={style} {...attributes}>
      <code className='bg-lightgray p-1'>{children}</code>
    </pre>
  )
}