import { draftMode } from "next/headers";
import { redirect } from "next/navigation";

export const GET = async (request) => {
    console.log(request.url);
    const { searchParams } = new URL(request.url);
    const slug = searchParams.get("slug");

    const draft = await draftMode();
    draft.enable();

    redirect(`/${slug}?${searchParams.toString()}`);
};
