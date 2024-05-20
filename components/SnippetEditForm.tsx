"use client";

import { updateSnippet } from "@/utils/actions";
import { Editor } from "@monaco-editor/react";
import { Snippet } from "@prisma/client";
import { useState } from "react";

type Props = {
  snipppet: Snippet;
};

const SnippetEditForm = ({ snipppet }: Props) => {
  const [code, setCode] = useState<string>(snipppet.code);

  const onEditorChange = (value: string = "") => {
    setCode(value);
  };

  const updateSnippetAction = updateSnippet.bind(null, snipppet.id, code);

  return (
    <div>
      <Editor
        height={"40vh"}
        theme="vs-dark"
        language="typescript"
        defaultValue={snipppet.code}
        onChange={onEditorChange}
      />
      <form action={updateSnippetAction}>
        <button className="p-2 border rounded">Save</button>
      </form>
    </div>
  );
};

export default SnippetEditForm;
