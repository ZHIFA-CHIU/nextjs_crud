import prisma from "@/lib/prisma";
import { deleteSnippet } from "@/utils/actions";
import Link from "next/link";
import { notFound } from "next/navigation";

type Props = {
  params: { id: string };
};

const SnippetDetailPage = async ({ params: { id } }: Props) => {
  const snippet = await prisma.snippet.findUnique({ where: { id } });

  const deleteSnippetAction = deleteSnippet.bind(null, id);

  if (!snippet) return notFound();

  return (
    <div>
      <div className="flex m-4 justify-between items-center">
        <h1 className="text-xl font-bold">{snippet.title}</h1>
        <div className="flex gap-4">
          <Link
            href={`/snippet/${snippet.id}/edit`}
            className="p-2 border rounded"
          >
            Edit
          </Link>
          <form action={deleteSnippetAction}>
            <button className="p-2 border rounded">Delete</button>
          </form>
        </div>
      </div>
      <pre className="p-3 border rounded bg-gray-200 border-gray-200">
        <code>{snippet.code}</code>
      </pre>
    </div>
  );
};

export default SnippetDetailPage;
