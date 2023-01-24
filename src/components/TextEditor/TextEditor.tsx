import { BulletedListElement, CodeElement, CustomEditor, HeadingOneElement, HeadingTwoElement, Leaf, NumberedListElement, QuoteElement, Toolbar } from '@components'
import React, { useCallback, useState, KeyboardEvent, useMemo } from 'react'
import { createEditor, BaseEditor, Descendant, Transforms, Editor, Text, Node, Element } from 'slate'
import { Slate, Editable, withReact, ReactEditor, RenderElementProps, RenderLeafProps } from 'slate-react'
import { withHistory } from 'slate-history';
import { ListType, withLists, withListsReact, onKeyDown } from '@prezly/slate-lists';


const withListsPlugin = withLists({
  isConvertibleToListTextNode(node: Node) {
    return Element.isElementType(node, 'paragraph');
  },
  isDefaultTextNode(node: Node) {
    return Element.isElementType(node, "paragraph");
  },
  isListNode(node: Node, type?: ListType) {
    if (type) {
      return Element.isElementType(node, type);
    }
    return (
      Element.isElementType(node, 'ordered-list') ||
      Element.isElementType(node, 'unordered-list')
    )
  },
  isListItemNode(node: Node) {
    return Element.isElementType(node, 'list-item');
  },
  isListItemTextNode(node: Node) {
    return Element.isElementType(node, 'list-item-text')
  },
  createDefaultTextNode() {
    return { children: [{ text: '' }], type: 'paragraph'}
  },
  createListNode(type: ListType = ListType.UNORDERED) {
    const nodeType = type === ListType.ORDERED ? 'ordered-list' : 'unordered-list';
    return { type: nodeType, children: [{ type: 'list-item', children: [{ type: 'list-item-text', children: [{ text: '' }]}] }] }
  },
  createListItemNode() {
    return { type: 'list-item', children: [{ type: 'list-item-text', children: [{ text: '' }] }] }
  },
  createListItemTextNode() {
    return { children: [{ text: '' }], type: 'list-item-text' }
  },
})

export const TextEditor = () => {
  const editor = useMemo(() => withListsReact(withListsPlugin(withHistory(withReact(createEditor() as ReactEditor)))), []);
  const initialValue: Descendant[] = [
    {
      type: 'paragraph',
      children: [
        { text: '\n\n\n\n\n' },
      ],
    },
    {
      type: 'paragraph',
      children: [
        { text: 'A line of text in a paragraph.' },
      ],
    },
    {
      type: 'paragraph',
      children: [
        { text: '\nCtrl + B to make' },
        { text: ' bold ', bold: true },
        { text: 'text.' }
      ],
    },
    {
      type: 'paragraph',
      children: [
        { text: '\nCtrl + I to make' },
        { text: ' italic ', italic: true },
        { text: 'text.' }
      ],
    },
    {
      type: 'paragraph',
      children: [
        { text: '\nCtrl + U to make ' },
        { text: 'underline', underline: true },
        { text: ' text.' }
      ],
    },
    {
      type: 'paragraph',
      children: [
        { text: '\n'},
        { text: 'Press Ctrl + ` to enter code block.' },
      ],
    },
    {
      type: 'code',
      children: [
        { text: 'This is code!' },
      ],
    },
    {
      type: 'h1',
      children: [
        { text: '\nCtrl + 1 to make <h1>' },
      ],
    },
    {
      type: 'h2',
      children: [
        { text: '\nCtrl + 2 to make <h2>' },
      ],
    },
    {
      type: 'paragraph',
      children: [
        { text: 'Ctrl+, to make ordered list' },
      ],
    },
    {
      type: 'ordered-list',
      children: [
          {
              type: "list-item",
              children: [{ type: "list-item-text", children: [{ text: 'One' }] }],
          },
          {
              type: "list-item",
              children: [{ type: "list-item-text", children: [{ text: 'Two' }] }],
          },
          {
              type: "list-item",
              children: [{ type: "list-item-text", children: [{ text: 'Three' }] }],
          },
      ],
    },
    {
      type: 'paragraph',
      children: [
        { text: '\nCtrl + \' to enter quote block.' },
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
        { text: 'Ctrl+. to make unordered list' },
      ],
    },
    {
        type: "unordered-list",
        children: [
            {
                type: "list-item",
                children: [{ type: "list-item-text", children: [{ text: 'Red' }] }],
            },
            {
                type: "list-item",
                children: [{ type: "list-item-text", children: [{ text: 'Green' }] }],
            },
            {
                type: "list-item",
                children: [{ type: "list-item-text", children: [{ text: 'Blue' }] }],
            },
        ],
    },
    {
      type: 'paragraph',
      children: [
        { text: '\nCtrl + L to left align.' },
      ],
      align: 'left'
    },
    {
      type: 'paragraph',
      children: [
        { text: '\nCtrl + Y to center align.' },
      ],
      align: 'center'
    },
    {
      type: 'paragraph',
      children: [
        { text: '\nCtrl + O to right align.' },
      ],
      align: 'right'
    },
    {
      type: 'paragraph',
      children: [
        { text: '\nCtrl + J to justify align.' },
      ],
      align: 'justify'
    },
  ]
  const [value, setValue] = useState(initialValue);

  const renderElement = useCallback((props: RenderElementProps) => {
    const style = { textAlign: props.element.align };
    switch (props.element.type) {
      case "code":
        return <CodeElement style={style} {...props} />
      case "quote":
        return <QuoteElement style={style} {...props} />
      case "ordered-list":
        return <NumberedListElement style={style} {...props} />
      case "unordered-list": 
        return <BulletedListElement style={style} {...props} />
      case "list-item": 
        return <li {...props.attributes}>{props.children}</li>
      case "list-item-text": 
        return <div {...props.attributes}>{props.children}</div>
      case "h1":
        return <HeadingOneElement style={style} {...props} />
      case "h2": 
        return <HeadingTwoElement style={style} {...props} />
      case "paragraph":
        return <p style={style} {...props.attributes}>{props.children}</p>
    }
  }, []);

  const renderLeaf = useCallback((props: RenderLeafProps) => {
    return <Leaf {...props} />
  }, [])

  const handleKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    if (!e.ctrlKey) {
      onKeyDown(editor, e);
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

      // ctrl+l will left aligned
      case 'l': {
        e.preventDefault();
        CustomEditor.toggleLeftAlign(editor);
        break
      }

      // ctrl+y will center aligned
      case 'y': {
        e.preventDefault();
        CustomEditor.toggleCenterAlign(editor);
        break
      }

      // ctrl+u will right aligned
      case 'o': {
        e.preventDefault();
        CustomEditor.toggleRightAlign(editor);
        break
      }

      // ctrl+j will justified
      case 'j': {
        e.preventDefault();
        CustomEditor.toggleJustifyAlign(editor);
        break
      }

      // ctrl+, will make numbered list
      case ',': {
        e.preventDefault();
        CustomEditor.toggleNumberedList(editor);
        break
      }

      // ctrl+. will make bulleted list
      case '.': {
        e.preventDefault();
        CustomEditor.toggleBulletedList(editor);
        break
      }
    }
  }

  return (
    <Slate editor={editor} value={value} onChange={setValue}>
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