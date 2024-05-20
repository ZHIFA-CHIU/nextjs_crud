"use server";

import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export const updateSnippet = async (id: string, code: string) => {
  await prisma.snippet.update({ where: { id }, data: { code } });
  redirect(`/snippet/${id}`);
};

export const deleteSnippet = async (id: string) => {
  await prisma.snippet.delete({ where: { id } });
  revalidatePath("/");
  redirect("/");
};

export const createSnippet = async (
  formState: { message: string },
  formData: FormData
) => {
  const title = formData.get("title");
  const code = formData.get("code");

  if (!title || !code) return { message: "Invalid title or code." };

  await prisma.snippet.create({
    data: { title: title.toString(), code: code.toString() },
  });
  revalidatePath("/");
  redirect("/");
};
