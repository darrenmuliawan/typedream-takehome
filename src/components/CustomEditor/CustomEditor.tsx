import { Editor, Element, Text, Transforms } from "slate"
import { CustomEditor as CustomEditorInterface } from "../TextEditor/types"

export const CustomEditor = {
  isBoldMarkActive(editor: CustomEditorInterface) {
    const marks = Editor.marks(editor);
    return marks ? marks['bold'] === true : false
  },

  isItalicActive(editor: CustomEditorInterface) {
    const marks = Editor.marks(editor);
    return marks ? marks['italic'] === true : false
  },

  isUnderlineActive(editor: CustomEditorInterface) {
    const marks = Editor.marks(editor);
    return marks ? marks['underline'] === true : false
  },

  isCodeBlockActive(editor: CustomEditorInterface) {
    const [match] = Editor.nodes(editor, {
      match: n => Element.isElement(n) && n.type === 'code'
    })

    return !!match;
  },

  isHeading1Active(editor: CustomEditorInterface) {
    const [match] = Editor.nodes(editor, {
      match: n => Element.isElement(n) && n.type === 'h1'
    });

    return !!match
  },

  isHeading2Active(editor: CustomEditorInterface) {
    const [match] = Editor.nodes(editor, {
      match: n => Element.isElement(n) && n.type === 'h2'
    });

    return !!match
  },

  isQuoteBlockActive(editor: CustomEditorInterface) {
    const [match] = Editor.nodes(editor, {
      match: n => Element.isElement(n) && n.type === 'quote'
    })

    return !!match;
  },

  isNumberedListActive(editor: CustomEditorInterface) {
    const [match] = Editor.nodes(editor, {
      match: n => Element.isElement(n) && n.type === 'numbered-list'
    })

    return !!match;
  },

  isBulletedListActive(editor: CustomEditorInterface) {
    const [match] = Editor.nodes(editor, {
      match: n => Element.isElement(n) && n.type === 'bulleted-list'
    })

    return !!match;
  },

  isLeftAlignActive(editor: CustomEditorInterface) {
    const [match] = Editor.nodes(editor, {
      match: n => Element.isElement(n) && n.align === 'left'
    })

    return !!match;
  },

  isCenterAlignActive(editor: CustomEditorInterface) {
    const [match] = Editor.nodes(editor, {
      match: n => Element.isElement(n) && n.align === 'center'
    })

    return !!match;
  },

  isRightAlignActive(editor: CustomEditorInterface) {
    const [match] = Editor.nodes(editor, {
      match: n => Element.isElement(n) && n.align === 'right'
    })

    return !!match;
  },

  isJustifyAlignActive(editor: CustomEditorInterface) {
    const [match] = Editor.nodes(editor, {
      match: n => Element.isElement(n) && n.align === 'justify'
    })

    return !!match;
  },

  toggleBoldMark(editor: CustomEditorInterface) {
    const isActive = CustomEditor.isBoldMarkActive(editor);
    if (isActive) {
      Editor.removeMark(editor, 'bold');
    } else {
      Editor.addMark(editor, 'bold', true)
    }
  },

  toggleItalicMark(editor: CustomEditorInterface) {
    const isActive = CustomEditor.isItalicActive(editor);
    if (isActive) {
      Editor.removeMark(editor, 'italic');
    } else {
      Editor.addMark(editor, 'italic', true)
    }
  },

  toggleUnderlineMark(editor: CustomEditorInterface) {
    const isActive = CustomEditor.isUnderlineActive(editor);
    if (isActive) {
      Editor.removeMark(editor, 'underline');
    } else {
      Editor.addMark(editor, 'underline', true)
    }
  },

  toggleHeading1Mark(editor: CustomEditorInterface) {
    const isActive = CustomEditor.isHeading1Active(editor);
    Transforms.setNodes(
      editor,
      { type: isActive ? undefined : 'h1' },
      { match: n => Editor.isBlock(editor, n) }
    )
  },

  toggleHeading2Mark(editor: CustomEditorInterface) {
    const isActive = CustomEditor.isHeading2Active(editor);
    Transforms.setNodes(
      editor,
      { type: isActive ? undefined : 'h2' },
      { match: n => Editor.isBlock(editor, n) }
    )
  },

  toggleCodeBlock(editor: CustomEditorInterface) {
    const isActive = CustomEditor.isCodeBlockActive(editor);
    Transforms.setNodes(
      editor,
      { type: isActive ? undefined : "code" },
      { match: n => Editor.isBlock(editor, n) }
    )
  },

  toggleQuoteBlock(editor: CustomEditorInterface) {
    const isActive = CustomEditor.isQuoteBlockActive(editor);
    Transforms.setNodes(
      editor,
      { type: isActive ? undefined : "quote" },
      { match: n => Editor.isBlock(editor, n) }
    )
  },

  toggleNumberedList(editor: CustomEditorInterface) {
    const isActive = CustomEditor.isNumberedListActive(editor);
    Transforms.setNodes(
      editor,
      { type: isActive ? undefined : "numbered-list" },
      { match: n => Editor.isBlock(editor, n) }
    )
  },

  toggleBulletedList(editor: CustomEditorInterface) {
    const isActive = CustomEditor.isBulletedListActive(editor);
    Transforms.setNodes(
      editor,
      { type: isActive ? undefined : "bulleted-list" },
      { match: n => Editor.isBlock(editor, n) }
    )
  },

  toggleLeftAlign(editor: CustomEditorInterface) {
    const isActive = CustomEditor.isLeftAlignActive(editor);
    Transforms.setNodes(
      editor,
      { align: isActive ? undefined : "left" },
      { match: n => Editor.isBlock(editor, n) }
    )
  },

  toggleCenterAlign(editor: CustomEditorInterface) {
    const isActive = CustomEditor.isCenterAlignActive(editor);
    Transforms.setNodes(
      editor,
      { align: isActive ? undefined : "center" },
      { match: n => Editor.isBlock(editor, n) }
    )
  },

  toggleRightAlign(editor: CustomEditorInterface) {
    const isActive = CustomEditor.isRightAlignActive(editor);
    Transforms.setNodes(
      editor,
      { align: isActive ? undefined : "right" },
      { match: n => Editor.isBlock(editor, n) }
    )
  },

  toggleJustifyAlign(editor: CustomEditorInterface) {
    const isActive = CustomEditor.isJustifyAlignActive(editor);
    Transforms.setNodes(
      editor,
      { align: isActive ? undefined : "justify" },
      { match: n => Editor.isBlock(editor, n) }
    )
  },
}