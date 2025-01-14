import { getStoryblokApi } from "@/lib/storyblok";
import { StoryblokStory } from "@storyblok/react/rsc";
import { draftMode } from "next/headers";

const fetchLandingPage = async (lang) => {
    const { isEnabled } = await draftMode();
    const params = {
        version: process.env.NODE_ENV === "development" || isEnabled ? "draft" : "published",
        language: lang,
    };
    const api = getStoryblokApi();
    const response = await api.getStory("landing-page", params);

    return response;
};

export default async function Home({ params }) {
    const { lang } = await params;
    const { data } = await fetchLandingPage(lang);

    return (
        <>
            <StoryblokStory story={data.story} />
        </>
    );
}
