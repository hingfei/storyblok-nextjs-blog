import React from "react";
import { StoryblokServerComponent } from "@storyblok/react/rsc";

const LandingPage = ({ blok }) => {
    return (
        <>
            {blok.body.map((nestedBlok) => (
                <StoryblokServerComponent blok={nestedBlok} key={nestedBlok._uid} />
            ))}
        </>
    );
};

export default LandingPage;
