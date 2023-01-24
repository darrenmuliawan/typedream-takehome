import { twMerge } from "tailwind-merge";

/**
 * Concatenate list of classnames
 * @param classes 
 * @returns 
 */
export const classNames = (...classes: any[]) => {
  return twMerge(classes.filter(Boolean)) //.join(' '));
}