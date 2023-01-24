import { classNames } from '@utils';
import React from 'react';

interface ButtonProps {
  icon: string;
  onClick: () => any;
  active: boolean;
}

export const Button = (props: ButtonProps) => {
  const {
    icon,
    onClick,
    active
  } = props;

  return (
    <div 
      className={
        classNames(
          'cursor-pointer items-center justify-center hover:opacity-100 mr-4',
          active ? 'opacity-100 font-bold' : 'opacity-30'
        )
      }
      onClick={onClick}
    >
      <span className="material-symbols-outlined text-2xl">
        {icon}
      </span>
    </div>
  )
}