"use client";
import { createSnippet } from "@/utils/actions";
import { useFormState } from "react-dom";

const NewSnippetPage = () => {
  const [formState, createSnippetAction] = useFormState(createSnippet, {
    message: "",
  });

  return (
    <div>
      <form action={createSnippetAction}>
        <h3 className="font-bold m-3">Create a Snippet</h3>
        <div className="flex flex-col gap-4">
          <div className="flex gap-4">
            <label className="w-12" htmlFor="title">
              Title
            </label>
            <input
              name="title"
              className="border rounded p-2 w-full"
              type="text"
            />
          </div>
          <div className="flex gap-4">
            <label className="w-12" htmlFor="title">
              Code
            </label>
            <textarea name="code" className="border rounded p-2 w-full" />
          </div>

          {formState.message ? (
            <div className="my-2 p-2 bg-red-200 border rounded border-red-200">
              {formState.message}
            </div>
          ) : null}

          <button type="submit" className="rounded p-2 bg-blue-200">
            Create
          </button>
        </div>
      </form>
    </div>
  );
};

export default NewSnippetPage;
