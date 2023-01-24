import { BaseEditor, Text } from "slate";
import { ReactEditor } from "slate-react";

export type ParagraphElement = { type: 'paragraph'; children: CustomText[], align?: AlignType }
export type CodeElement = { type: 'code'; children: CustomText[], align?: AlignType }
export type QuoteElement = { type: 'quote'; children: CustomText[], align?: AlignType }
export type NumberedListElement = { type: 'numbered-list'; children: CustomText[], align?: AlignType }
export type BulletedListElement = { type: 'bulleted-list'; children: CustomText[], align?: AlignType }
export type HeadingOneElement = { type: 'h1'; children: CustomText[], align?: AlignType }
export type HeadingTwoElement = { type: 'h2'; children: CustomText[], align?: AlignType }
export type CustomElement = ParagraphElement | CodeElement | QuoteElement | NumberedListElement | BulletedListElement | HeadingOneElement | HeadingTwoElement;
export type AlignType = 'left' | 'right' | 'center' | 'justify';
export type CustomText = { 
  text: string;
  bold?: true;
  italic?: true;
  underline?: true;
  heading1?: true;
  heading2?: true;
}
export type CustomEditor = BaseEditor & ReactEditor;

declare module 'slate' {
  interface CustomTypes {
    Editor: CustomEditor
    Element: CustomElement
    Text: CustomText
  }
}