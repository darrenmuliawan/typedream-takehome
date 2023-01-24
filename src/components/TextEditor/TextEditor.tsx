import { BulletedListElement, CodeElement, CustomEditor, HeadingOneElement, HeadingTwoElement, Leaf, NumberedListElement, QuoteElement, Toolbar } from '@components'
import React, { useCallback, useState, KeyboardEvent } from 'react'
import { createEditor, BaseEditor, Descendant, Transforms, Editor, Text, Node, Element } from 'slate'
import { Slate, Editable, withReact, ReactEditor, RenderElementProps, RenderLeafProps } from 'slate-react'

export const TextEditor = () => {
  const [editor] = useState(() => withReact(createEditor()))
  const initialValue: Descendant[] = [
    {
      type: 'paragraph',
      children: [
        { text: 'A line of text in a paragraph.' },
      ],
    },
    {
      type: 'paragraph',
      children: [
        { text: '\nPress Ctrl + ` to enter code block.' },
      ],
    },
    {
      type: 'code',
      children: [
        { text: 'This is code!' },
      ],
    },
    {
      type: 'paragraph',
      children: [
        { text: '\nPress Ctrl + \' to enter quote block.' },
      ],
    },
    {
      type: 'quote',
      children: [
        { text: 'This is quote!' },
      ],
    },
    {
      type: 'paragraph',
      children: [
        { text: '\nHighlight text and press Ctrl + B to make bold text.' },
      ],
    },
  ]

  const renderElement = useCallback((props: RenderElementProps) => {
    const style = { textAlign: props.element.align }
    switch (props.element.type) {
      case "code":
        return <CodeElement style={style} {...props} />
      case "quote":
        return <QuoteElement style={style} {...props} />
      case "numbered-list":
        return <NumberedListElement style={style} {...props} />
      case "bulleted-list": 
        return <BulletedListElement style={style} {...props} />
      case "h1":
        return <HeadingOneElement style={style} {...props} />
      case "h2": 
        return <HeadingTwoElement style={style} {...props} />
      default:
        return <p style={style} {...props.attributes}>{props.children}</p>
    }
  }, []);

  const renderLeaf = useCallback((props: RenderLeafProps) => {
    return <Leaf {...props} />
  }, [])

  const handleKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    if (!e.ctrlKey) {
      return;
    }
    
    switch (e.key) {
      // ctrl+` will create code block
      case '`': {
        e.preventDefault();
        CustomEditor.toggleCodeBlock(editor);
        break
      }

      // ctrl+' will create quote block
      case "'": {
        e.preventDefault();
        CustomEditor.toggleQuoteBlock(editor);
        break
      }

      // ctrl+b will make text selection bold
      case 'b': {
        e.preventDefault();
        CustomEditor.toggleBoldMark(editor);
        break
      }

      // ctrl+i will make italic text
      case 'i': {
        e.preventDefault();
        CustomEditor.toggleItalicMark(editor);
        break
      }

      // ctrl+u will make italic text
      case 'u': {
        e.preventDefault();
        CustomEditor.toggleUnderlineMark(editor);
        break
      }

      // ctrl+1 will make h1 text
      case '1': {
        e.preventDefault();
        CustomEditor.toggleHeading1Mark(editor);
        break
      }

      // ctrl+2 will make h2 text
      case '2': {
        e.preventDefault();
        CustomEditor.toggleHeading2Mark(editor);
        break
      }

      // ctrl+a will left aligned
      case 'a': {
        e.preventDefault();
        CustomEditor.toggleLeftAlign(editor);
        break
      }

      // ctrl+s will center aligned
      case 's': {
        e.preventDefault();
        CustomEditor.toggleCenterAlign(editor);
        break
      }

      // ctrl+d will right aligned
      case 'd': {
        e.preventDefault();
        CustomEditor.toggleRightAlign(editor);
        break
      }

      // ctrl+f will justified
      case 'f': {
        e.preventDefault();
        CustomEditor.toggleJustifyAlign(editor);
        break
      }

      // ctrl+z will make numbered list
      case 'z': {
        e.preventDefault();
        CustomEditor.toggleNumberedList(editor);
        break
      }

      // ctrl+x will make bulleted list
      case 'x': {
        e.preventDefault();
        CustomEditor.toggleBulletedList(editor);
        break
      }
    }
  }

  return (
    <Slate editor={editor} value={initialValue}>
      <div className='bg-white text-black w-full max-w-[1000px] rounded'>
        <Toolbar />
        <Editable 
          onKeyDown={handleKeyDown}
          renderElement={renderElement}
          renderLeaf={renderLeaf}
          className='p-5'
        />
      </div>
    </Slate>
  )
}