import SnippetEditForm from "@/components/SnippetEditForm";
import prisma from "@/lib/prisma";
import { notFound } from "next/navigation";

type Props = {
    params: { id: string };
  };

const fetchSnippet = (id: string) => prisma.snippet.findUnique({where: {id}});

const SnippetEditPage = async ({params: {id}}: Props) => {

    const snippet = await fetchSnippet(id);

    if (!snippet)
        notFound();

    return <div>
        <SnippetEditForm snipppet={snippet} />
    </div>
};

export default SnippetEditPage;
