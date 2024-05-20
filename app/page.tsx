import prisma from "@/lib/prisma";
import Link from "next/link";

const fetchSnippets = () => prisma.snippet.findMany({});

export default async function Home() {
  const snippets = await fetchSnippets();

  return (
    <div className="flex flex-col gap-2 p-4">
      <div className="flex m-2 justify-between items-center">
        <h1 className="font-bold text-xl">Snippet</h1>
        <h1 className="text-xl font-bold">
          <Link href={"/snippet/new"} className="border p-2 rounded">
            New
          </Link>
        </h1>
      </div>
      <div className="flex flex-col gap-2">
        {snippets.map((snippet) => (
          <Link
            href={`/snippet/${snippet.id}`}
            key={snippet.id}
            className="flex justify-between items-center p-2 border rounded"
          >
            <div>{snippet.title}</div>
            <div>View</div>
          </Link>
        ))}
      </div>
    </div>
  );
}
