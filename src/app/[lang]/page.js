import { getStoryblokApi } from "@/lib/storyblok";
import { StoryblokStory } from "@storyblok/react/rsc";

const fetchLandingPage = async (lang) => {
    const params = {
        version: "draft",
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
