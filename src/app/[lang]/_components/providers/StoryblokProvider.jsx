'use client';
import { getStoryblokApi } from "@/lib/storyblok";

const StoryblokProvider = ({ children }) => {
    getStoryblokApi();
    return children;
};

export default StoryblokProvider;
