import React from 'react';
import { Button, CustomEditor } from '@components';
import { useSlate } from 'slate-react';

export const Toolbar = () => {
  const editor = useSlate();

  return (
    <div
      className='flex border-b-2 px-5 py-3'
    >
      <Button 
        icon='format_bold' 
        onClick={() => CustomEditor.toggleBoldMark(editor)}
        active={CustomEditor.isBoldMarkActive(editor)}
      />
      <Button 
        icon='format_italic'
        onClick={() => CustomEditor.toggleItalicMark(editor)}
        active={CustomEditor.isItalicActive(editor)}
      />
      <Button 
        icon='format_underlined'
        onClick={() => CustomEditor.toggleUnderlineMark(editor)}
        active={CustomEditor.isUnderlineActive(editor)}
      />
      <Button 
        icon='code'
        onClick={() => CustomEditor.toggleCodeBlock(editor)}
        active={CustomEditor.isCodeBlockActive(editor)}
      />
      <Button 
        icon='format_h1'
        onClick={() => CustomEditor.toggleHeading1Mark(editor)}
        active={CustomEditor.isHeading1Active(editor)}
      />
      <Button 
        icon='format_h2'
        onClick={() => CustomEditor.toggleHeading2Mark(editor)}
        active={CustomEditor.isHeading2Active(editor)}
      />
      <Button 
        icon='format_quote'
        onClick={() => CustomEditor.toggleQuoteBlock(editor)}
        active={CustomEditor.isQuoteBlockActive(editor)}
      />
      <Button 
        icon='format_list_numbered'
        onClick={() => CustomEditor.toggleNumberedList(editor)}
        active={CustomEditor.isNumberedListActive(editor)}
      />
      <Button 
        icon='format_list_bulleted'
        onClick={() => CustomEditor.toggleBulletedList(editor)}
        active={CustomEditor.isBulletedListActive(editor)}
      />
      <Button 
        icon='format_align_left'
        onClick={() => CustomEditor.toggleLeftAlign(editor)}
        active={CustomEditor.isLeftAlignActive(editor)}
      />
      <Button 
        icon='format_align_center'
        onClick={() => CustomEditor.toggleCenterAlign(editor)}
        active={CustomEditor.isCenterAlignActive(editor)}
      />
      <Button 
        icon='format_align_right'
        onClick={() => CustomEditor.toggleRightAlign(editor)}
        active={CustomEditor.isRightAlignActive(editor)}
      />
      <Button 
        icon='format_align_justify'
        onClick={() => CustomEditor.toggleJustifyAlign(editor)}
        active={CustomEditor.isJustifyAlignActive(editor)}
      />
    </div>
  )
}