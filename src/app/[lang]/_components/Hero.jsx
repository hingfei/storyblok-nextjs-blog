import React from "react";
import Link from "next/link";
import Image from "next/image";
import Container from "@/app/[lang]/_components/Container";
import { storyblokEditable } from "@storyblok/react";

const Hero = ({ blok }) => {
    const { title, description, cta_button_text, image } = blok;

    return (
        <main {...storyblokEditable(blok)}>
            <Container className="pb-18 flex flex-wrap pt-28">
                <div className="flex w-full items-center lg:w-1/2 lg:px-10">
                    <div className="mb-8 max-w-2xl pr-3">
                        <h1 className="text-4xl font-bold leading-snug tracking-tight text-white lg:text-4xl lg:leading-tight xl:text-6xl xl:leading-tight">
                            {title}
                        </h1>
                        <p className="py-5 text-xl leading-normal text-gray-300 lg:text-xl xl:text-2xl">
                            {description}
                        </p>

                        <div className="flex flex-col items-start space-y-3 sm:flex-row sm:items-center sm:space-x-4 sm:space-y-0">
                            <Link
                                href="#contact"
                                className="rounded-md bg-indigo-600 px-7 py-3 text-xl text-white"
                            >
                                {cta_button_text}
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="flex w-full items-center justify-center lg:w-1/2">
                    <Image
                        src={image.filename}
                        width="529"
                        height="529"
                        className={"hidden aspect-square rounded-full object-cover lg:inline"}
                        alt={image.alt}
                        loading="eager"
                    />
                </div>
            </Container>
        </main>
    );
};

export default Hero;
